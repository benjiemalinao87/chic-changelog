
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

// Define CORS headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

// Create Supabase client
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

serve(async (req) => {
  console.log("Received request to changelog-api");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Handling OPTIONS request");
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  const url = new URL(req.url);
  const path = url.pathname.split('/').pop();

  try {
    // Route handler for GET /all - fetch all changelog entries
    if (req.method === "GET" && path === "all") {
      console.log("Processing GET /all request");
      
      const { data, error } = await supabase
        .from("changelog")
        .select("*")
        .order("release_date", { ascending: false });

      if (error) {
        console.error("Error fetching changelog entries:", error);
        return new Response(
          JSON.stringify({ error: error.message }),
          {
            status: 500,
            headers: {
              "Content-Type": "application/json",
              ...corsHeaders,
            },
          }
        );
      }

      console.log(`Successfully fetched ${data.length} changelog entries`);
      
      return new Response(
        JSON.stringify({ 
          success: true, 
          data,
          count: data.length
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }
    
    // Route handler for webhook POST - create new changelog entry
    if (req.method === "POST" && !path) {
      console.log("Processing POST request");
      
      // Parse request body
      const payload = await req.json();
      console.log("Received payload:", JSON.stringify(payload));
      
      // Validate required fields
      const requiredFields = ["title", "content", "category", "release_date", "released_by", "dev"];
      const missingFields = requiredFields.filter(field => !(field in payload));
      
      if (missingFields.length > 0) {
        console.log(`Missing required fields: ${missingFields.join(", ")}`);
        return new Response(
          JSON.stringify({ error: `Missing required fields: ${missingFields.join(", ")}` }),
          {
            status: 400,
            headers: {
              "Content-Type": "application/json",
              ...corsHeaders,
            },
          }
        );
      }

      // Set modified_date to current timestamp
      const modified_date = new Date().toISOString();
      console.log("Inserting data into changelog table");
      
      // Insert into changelog table
      const { data, error } = await supabase
        .from("changelog")
        .insert([
          {
            title: payload.title,
            content: payload.content,
            category: payload.category,
            release_date: payload.release_date,
            released_by: payload.released_by,
            dev: payload.dev,
            lessons_learned: payload.lessons_learned || null,
            modified_date,
            created_at: new Date().toISOString()
          }
        ])
        .select();

      // Handle database error
      if (error) {
        console.error("Error inserting changelog entry:", error);
        return new Response(
          JSON.stringify({ error: error.message }),
          {
            status: 500,
            headers: {
              "Content-Type": "application/json",
              ...corsHeaders,
            },
          }
        );
      }

      console.log("Successfully created changelog entry:", data);
      
      // Return success response with the auto-assigned ID as the version
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: "Changelog entry created successfully",
          data: data[0],
          version: data[0].id
        }),
        {
          status: 201,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    // If no matching route, return 404
    console.log("No matching route found");
    return new Response(
      JSON.stringify({ error: "Endpoint not found" }),
      {
        status: 404,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error) {
    // Handle unexpected errors
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error", details: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  }
});
