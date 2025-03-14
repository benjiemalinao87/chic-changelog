
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

// Define CORS headers - remove authorization from the required headers
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

console.log("Changelog webhook function loaded");

serve(async (req) => {
  console.log("Received request to changelog-webhook");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Handling OPTIONS request");
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  try {
    // Only accept POST requests
    if (req.method !== "POST") {
      console.log(`Rejected ${req.method} request, only POST is allowed`);
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        {
          status: 405,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }

    console.log("Processing POST request");
    
    // Create Supabase client with service role key (no auth required)
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
    console.log("Supabase URL:", supabaseUrl);
    console.log("Using service role key for Supabase client");
    
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false, // Don't persist the session
        autoRefreshToken: false, // Don't auto refresh the token
      },
      global: {
        headers: {
          // No authorization header needed with service role key
        },
      },
    });
    
    // Parse request body
    let payload;
    try {
      payload = await req.json();
      console.log("Received payload:", JSON.stringify(payload));
    } catch (error) {
      console.error("Error parsing request body:", error);
      return new Response(
        JSON.stringify({ error: "Invalid JSON payload" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders,
          },
        }
      );
    }
    
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
        version: data[0].id // The auto-incremented ID serves as the version
      }),
      {
        status: 201,
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
