export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      a2p_brands: {
        Row: {
          brand_type: string
          created_at: string | null
          id: string
          profile_id: string
          status: string | null
          twilio_brand_sid: string | null
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          brand_type: string
          created_at?: string | null
          id?: string
          profile_id: string
          status?: string | null
          twilio_brand_sid?: string | null
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          brand_type?: string
          created_at?: string | null
          id?: string
          profile_id?: string
          status?: string | null
          twilio_brand_sid?: string | null
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "a2p_brands_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "a2p_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "a2p_brands_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "a2p_brands_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      a2p_campaigns: {
        Row: {
          brand_id: string
          campaign_type: string
          created_at: string | null
          id: string
          status: string | null
          twilio_campaign_sid: string | null
          updated_at: string | null
          use_case: string | null
          workspace_id: string
        }
        Insert: {
          brand_id: string
          campaign_type: string
          created_at?: string | null
          id?: string
          status?: string | null
          twilio_campaign_sid?: string | null
          updated_at?: string | null
          use_case?: string | null
          workspace_id: string
        }
        Update: {
          brand_id?: string
          campaign_type?: string
          created_at?: string | null
          id?: string
          status?: string | null
          twilio_campaign_sid?: string | null
          updated_at?: string | null
          use_case?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "a2p_campaigns_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "a2p_brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "a2p_campaigns_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "a2p_campaigns_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      a2p_profiles: {
        Row: {
          address: string | null
          business_name: string
          city: string | null
          contact_email: string | null
          contact_name: string | null
          contact_phone: string | null
          country: string | null
          created_at: string | null
          ein: string | null
          id: string
          state: string | null
          status: string | null
          twilio_profile_sid: string | null
          updated_at: string | null
          user_id: string | null
          workspace_id: string
          zip: string | null
        }
        Insert: {
          address?: string | null
          business_name: string
          city?: string | null
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          country?: string | null
          created_at?: string | null
          ein?: string | null
          id?: string
          state?: string | null
          status?: string | null
          twilio_profile_sid?: string | null
          updated_at?: string | null
          user_id?: string | null
          workspace_id: string
          zip?: string | null
        }
        Update: {
          address?: string | null
          business_name?: string
          city?: string | null
          contact_email?: string | null
          contact_name?: string | null
          contact_phone?: string | null
          country?: string | null
          created_at?: string | null
          ein?: string | null
          id?: string
          state?: string | null
          status?: string | null
          twilio_profile_sid?: string | null
          updated_at?: string | null
          user_id?: string | null
          workspace_id?: string
          zip?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "a2p_profiles_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "a2p_profiles_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      activities: {
        Row: {
          contact_id: string
          created_at: string | null
          created_by_user_id: string | null
          description: string
          id: string
          lead_status_id: number | null
          metadata: Json | null
          type: string
          workspace_id: string
        }
        Insert: {
          contact_id: string
          created_at?: string | null
          created_by_user_id?: string | null
          description: string
          id?: string
          lead_status_id?: number | null
          metadata?: Json | null
          type?: string
          workspace_id: string
        }
        Update: {
          contact_id?: string
          created_at?: string | null
          created_by_user_id?: string | null
          description?: string
          id?: string
          lead_status_id?: number | null
          metadata?: Json | null
          type?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "activities_lead_status_id_fkey"
            columns: ["lead_status_id"]
            isOneToOne: false
            referencedRelation: "status_options"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "activities_lead_status_id_fkey"
            columns: ["lead_status_id"]
            isOneToOne: false
            referencedRelation: "statuses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "activities_workspace_contact_fkey"
            columns: ["workspace_id", "contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["workspace_id", "contact_id"]
          },
          {
            foreignKeyName: "activities_workspace_contact_fkey"
            columns: ["workspace_id", "contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["workspace_id", "id"]
          },
          {
            foreignKeyName: "activities_workspace_contact_fkey"
            columns: ["workspace_id", "contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["workspace_id", "contact_id"]
          },
        ]
      }
      admins: {
        Row: {
          company_id: string | null
          created_at: string | null
          has_used_crm: boolean | null
          id: string
          job_title: string | null
          name: string
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string | null
          has_used_crm?: boolean | null
          id: string
          job_title?: string | null
          name: string
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string | null
          has_used_crm?: boolean | null
          id?: string
          job_title?: string | null
          name?: string
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "admins_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      agents: {
        Row: {
          company_id: string | null
          created_at: string | null
          email: string
          id: string
          name: string
          phone: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string | null
          email: string
          id?: string
          name: string
          phone?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string | null
          email?: string
          id?: string
          name?: string
          phone?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agents_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_agent_configs: {
        Row: {
          base_prompt: string | null
          context_depth: number | null
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          max_tokens: number | null
          model: string | null
          name: string
          provider: string | null
          temperature: number | null
          tone: string | null
          updated_at: string | null
          verbosity: string | null
          workspace_id: string
        }
        Insert: {
          base_prompt?: string | null
          context_depth?: number | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          max_tokens?: number | null
          model?: string | null
          name: string
          provider?: string | null
          temperature?: number | null
          tone?: string | null
          updated_at?: string | null
          verbosity?: string | null
          workspace_id: string
        }
        Update: {
          base_prompt?: string | null
          context_depth?: number | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          max_tokens?: number | null
          model?: string | null
          name?: string
          provider?: string | null
          temperature?: number | null
          tone?: string | null
          updated_at?: string | null
          verbosity?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_agents: {
        Row: {
          behavior_config: Json | null
          context_config: Json | null
          created_at: string | null
          data_access_config: Json | null
          description: string | null
          id: string
          initial_greeting: string | null
          is_active: boolean | null
          name: string
          system_messages: Json | null
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          behavior_config?: Json | null
          context_config?: Json | null
          created_at?: string | null
          data_access_config?: Json | null
          description?: string | null
          id?: string
          initial_greeting?: string | null
          is_active?: boolean | null
          name: string
          system_messages?: Json | null
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          behavior_config?: Json | null
          context_config?: Json | null
          created_at?: string | null
          data_access_config?: Json | null
          description?: string | null
          id?: string
          initial_greeting?: string | null
          is_active?: boolean | null
          name?: string
          system_messages?: Json | null
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_column_access: {
        Row: {
          column_name: string
          created_at: string | null
          id: string
          is_accessible: boolean | null
          table_name: string
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          column_name: string
          created_at?: string | null
          id?: string
          is_accessible?: boolean | null
          table_name: string
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          column_name?: string
          created_at?: string | null
          id?: string
          is_accessible?: boolean | null
          table_name?: string
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_response_logs: {
        Row: {
          ai_model: string | null
          completion_tokens: number
          contact_id: string | null
          cost: number
          created_at: string
          id: string
          message_id: string | null
          model: string | null
          prompt: string | null
          prompt_tokens: number
          provider: string | null
          response: string | null
          response_body: string | null
          response_message_id: string | null
          temperature: number
          tokens_used: number | null
          workspace_id: string
        }
        Insert: {
          ai_model?: string | null
          completion_tokens?: number
          contact_id?: string | null
          cost?: number
          created_at?: string
          id?: string
          message_id?: string | null
          model?: string | null
          prompt?: string | null
          prompt_tokens?: number
          provider?: string | null
          response?: string | null
          response_body?: string | null
          response_message_id?: string | null
          temperature?: number
          tokens_used?: number | null
          workspace_id: string
        }
        Update: {
          ai_model?: string | null
          completion_tokens?: number
          contact_id?: string | null
          cost?: number
          created_at?: string
          id?: string
          message_id?: string | null
          model?: string | null
          prompt?: string | null
          prompt_tokens?: number
          provider?: string | null
          response?: string | null
          response_body?: string | null
          response_message_id?: string | null
          temperature?: number
          tokens_used?: number | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_response_logs_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "ai_response_logs_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_response_queue: {
        Row: {
          attempts: number
          contact_id: string
          created_at: string
          error: string | null
          id: string
          message_id: string
          processed_at: string | null
          status: string
          workspace_id: string
        }
        Insert: {
          attempts?: number
          contact_id: string
          created_at?: string
          error?: string | null
          id?: string
          message_id: string
          processed_at?: string | null
          status?: string
          workspace_id: string
        }
        Update: {
          attempts?: number
          contact_id?: string
          created_at?: string
          error?: string | null
          id?: string
          message_id?: string
          processed_at?: string | null
          status?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_workspace_contact"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "fk_workspace_contact"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_workspace_contact"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
        ]
      }
      ai_table_access: {
        Row: {
          agent_id: string
          created_at: string | null
          id: string
          table_name: string
          workspace_id: string
        }
        Insert: {
          agent_id: string
          created_at?: string | null
          id?: string
          table_name: string
          workspace_id: string
        }
        Update: {
          agent_id?: string
          created_at?: string | null
          id?: string
          table_name?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_table_access_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "ai_agent_configs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_table_access_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "ai_table_access_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_test_conversations: {
        Row: {
          agent_id: string
          created_at: string | null
          id: string
          name: string | null
          status: string | null
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          agent_id: string
          created_at?: string | null
          id?: string
          name?: string | null
          status?: string | null
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          agent_id?: string
          created_at?: string | null
          id?: string
          name?: string | null
          status?: string | null
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_test_conversations_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "ai_agent_configs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_test_conversations_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "ai_test_conversations_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_test_messages: {
        Row: {
          content: string
          conversation_id: string
          id: string
          role: string
          timestamp: string | null
        }
        Insert: {
          content: string
          conversation_id: string
          id?: string
          role: string
          timestamp?: string | null
        }
        Update: {
          content?: string
          conversation_id?: string
          id?: string
          role?: string
          timestamp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_test_messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "ai_test_conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_training_records: {
        Row: {
          content: string
          created_at: string | null
          error_message: string | null
          id: string
          processed_at: string | null
          status: string | null
          training_type: string
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          error_message?: string | null
          id?: string
          processed_at?: string | null
          status?: string | null
          training_type: string
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          content?: string
          created_at?: string | null
          error_message?: string | null
          id?: string
          processed_at?: string | null
          status?: string | null
          training_type?: string
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      analytics_data_sources: {
        Row: {
          category: string
          created_at: string | null
          description: string | null
          display_name: string
          fields: Json
          id: string
          is_active: boolean | null
          relationships: Json | null
          source_name: string
          table_name: string
          updated_at: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          description?: string | null
          display_name: string
          fields: Json
          id?: string
          is_active?: boolean | null
          relationships?: Json | null
          source_name: string
          table_name: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string | null
          display_name?: string
          fields?: Json
          id?: string
          is_active?: boolean | null
          relationships?: Json | null
          source_name?: string
          table_name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      analytics_query_executions: {
        Row: {
          error_details: string | null
          executed_at: string | null
          execution_time_ms: number | null
          id: string
          query_config: Json
          query_id: string | null
          result_count: number | null
          sql_query: string
          status: string
          user_email: string | null
          workspace_id: string
        }
        Insert: {
          error_details?: string | null
          executed_at?: string | null
          execution_time_ms?: number | null
          id?: string
          query_config: Json
          query_id?: string | null
          result_count?: number | null
          sql_query: string
          status?: string
          user_email?: string | null
          workspace_id: string
        }
        Update: {
          error_details?: string | null
          executed_at?: string | null
          execution_time_ms?: number | null
          id?: string
          query_config?: Json
          query_id?: string | null
          result_count?: number | null
          sql_query?: string
          status?: string
          user_email?: string | null
          workspace_id?: string
        }
        Relationships: []
      }
      analytics_query_templates: {
        Row: {
          category: string
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          is_public: boolean | null
          name: string
          query_config: Json
          sql_template: string
          updated_at: string | null
          visualization_type: string
        }
        Insert: {
          category: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          name: string
          query_config: Json
          sql_template: string
          updated_at?: string | null
          visualization_type?: string
        }
        Update: {
          category?: string
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          name?: string
          query_config?: Json
          sql_template?: string
          updated_at?: string | null
          visualization_type?: string
        }
        Relationships: []
      }
      analytics_saved_queries: {
        Row: {
          created_at: string | null
          description: string | null
          execution_count: number | null
          id: string
          is_shared: boolean | null
          last_executed_at: string | null
          name: string
          query_config: Json
          sql_query: string
          updated_at: string | null
          user_email: string
          visualization_config: Json | null
          workspace_id: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          execution_count?: number | null
          id?: string
          is_shared?: boolean | null
          last_executed_at?: string | null
          name: string
          query_config: Json
          sql_query: string
          updated_at?: string | null
          user_email: string
          visualization_config?: Json | null
          workspace_id: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          execution_count?: number | null
          id?: string
          is_shared?: boolean | null
          last_executed_at?: string | null
          name?: string
          query_config?: Json
          sql_query?: string
          updated_at?: string | null
          user_email?: string
          visualization_config?: Json | null
          workspace_id?: string
        }
        Relationships: []
      }
      api_keys: {
        Row: {
          created_at: string | null
          created_by: string | null
          expires_at: string | null
          id: string
          is_active: boolean | null
          key_full: string | null
          key_hash: string
          key_prefix: string
          last_used_at: string | null
          name: string
          permissions: Json | null
          scope: string | null
          updated_at: string | null
          user_id: string
          workspace_id: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          key_full?: string | null
          key_hash: string
          key_prefix?: string
          last_used_at?: string | null
          name: string
          permissions?: Json | null
          scope?: string | null
          updated_at?: string | null
          user_id: string
          workspace_id: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          key_full?: string | null
          key_hash?: string
          key_prefix?: string
          last_used_at?: string | null
          name?: string
          permissions?: Json | null
          scope?: string | null
          updated_at?: string | null
          user_id?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "api_keys_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "api_keys_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      appointment_follow_ups: {
        Row: {
          action_type: string
          appointment_id: string
          assigned_to: string | null
          completed_at: string | null
          created_at: string | null
          created_by: string
          description: string
          due_date: string | null
          id: string
          is_completed: boolean | null
          updated_at: string | null
        }
        Insert: {
          action_type: string
          appointment_id: string
          assigned_to?: string | null
          completed_at?: string | null
          created_at?: string | null
          created_by: string
          description: string
          due_date?: string | null
          id?: string
          is_completed?: boolean | null
          updated_at?: string | null
        }
        Update: {
          action_type?: string
          appointment_id?: string
          assigned_to?: string | null
          completed_at?: string | null
          created_at?: string | null
          created_by?: string
          description?: string
          due_date?: string | null
          id?: string
          is_completed?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointment_follow_ups_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
        ]
      }
      appointment_results: {
        Row: {
          appointment_id: string
          created_at: string | null
          created_by: string
          follow_up_date: string | null
          follow_up_needed: boolean | null
          id: string
          outcome_notes: string | null
          products_discussed: string | null
          result_id: number
          updated_at: string | null
        }
        Insert: {
          appointment_id: string
          created_at?: string | null
          created_by: string
          follow_up_date?: string | null
          follow_up_needed?: boolean | null
          id?: string
          outcome_notes?: string | null
          products_discussed?: string | null
          result_id: number
          updated_at?: string | null
        }
        Update: {
          appointment_id?: string
          created_at?: string | null
          created_by?: string
          follow_up_date?: string | null
          follow_up_needed?: boolean | null
          id?: string
          outcome_notes?: string | null
          products_discussed?: string | null
          result_id?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "appointment_results_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointment_results_result_id_fkey"
            columns: ["result_id"]
            isOneToOne: false
            referencedRelation: "status_options"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointment_results_result_id_fkey"
            columns: ["result_id"]
            isOneToOne: false
            referencedRelation: "statuses"
            referencedColumns: ["id"]
          },
        ]
      }
      appointment_status_history: {
        Row: {
          appointment_id: string
          created_at: string | null
          created_by: string
          id: string
          notes: string | null
          result_id: number | null
          status_id: number
          workspace_id: string
        }
        Insert: {
          appointment_id: string
          created_at?: string | null
          created_by: string
          id?: string
          notes?: string | null
          result_id?: number | null
          status_id: number
          workspace_id: string
        }
        Update: {
          appointment_id?: string
          created_at?: string | null
          created_by?: string
          id?: string
          notes?: string | null
          result_id?: number | null
          status_id?: number
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "appointment_status_history_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointment_status_history_result_id_fkey"
            columns: ["result_id"]
            isOneToOne: false
            referencedRelation: "status_options"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointment_status_history_result_id_fkey"
            columns: ["result_id"]
            isOneToOne: false
            referencedRelation: "statuses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointment_status_history_status_id_fkey"
            columns: ["status_id"]
            isOneToOne: false
            referencedRelation: "status_options"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointment_status_history_status_id_fkey"
            columns: ["status_id"]
            isOneToOne: false
            referencedRelation: "statuses"
            referencedColumns: ["id"]
          },
        ]
      }
      appointments: {
        Row: {
          appointment_date: string
          contact_id: string
          created_at: string | null
          created_by: string
          deleted_at: string | null
          description: string | null
          duration_minutes: number
          id: string
          location: string | null
          meeting_link: string | null
          result_id: number | null
          status_id: number | null
          title: string
          updated_at: string | null
          updated_by: string | null
          workspace_id: string
        }
        Insert: {
          appointment_date: string
          contact_id: string
          created_at?: string | null
          created_by: string
          deleted_at?: string | null
          description?: string | null
          duration_minutes?: number
          id?: string
          location?: string | null
          meeting_link?: string | null
          result_id?: number | null
          status_id?: number | null
          title: string
          updated_at?: string | null
          updated_by?: string | null
          workspace_id: string
        }
        Update: {
          appointment_date?: string
          contact_id?: string
          created_at?: string | null
          created_by?: string
          deleted_at?: string | null
          description?: string | null
          duration_minutes?: number
          id?: string
          location?: string | null
          meeting_link?: string | null
          result_id?: number | null
          status_id?: number | null
          title?: string
          updated_at?: string | null
          updated_by?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "appointments_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "appointments_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "appointments_result_id_fkey"
            columns: ["result_id"]
            isOneToOne: false
            referencedRelation: "status_options"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_result_id_fkey"
            columns: ["result_id"]
            isOneToOne: false
            referencedRelation: "statuses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_status_id_fkey"
            columns: ["status_id"]
            isOneToOne: false
            referencedRelation: "status_options"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_status_id_fkey"
            columns: ["status_id"]
            isOneToOne: false
            referencedRelation: "statuses"
            referencedColumns: ["id"]
          },
        ]
      }
      audience_segments: {
        Row: {
          board_id: string
          contact_count: number | null
          created_at: string | null
          created_by: string | null
          description: string | null
          error_message: string | null
          filters: Json | null
          id: string
          is_active: boolean | null
          last_processed_at: string | null
          last_run_at: string | null
          name: string
          processing_status: string
          total_contacts: number
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          board_id: string
          contact_count?: number | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          error_message?: string | null
          filters?: Json | null
          id?: string
          is_active?: boolean | null
          last_processed_at?: string | null
          last_run_at?: string | null
          name: string
          processing_status?: string
          total_contacts?: number
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          board_id?: string
          contact_count?: number | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          error_message?: string | null
          filters?: Json | null
          id?: string
          is_active?: boolean | null
          last_processed_at?: string | null
          last_run_at?: string | null
          name?: string
          processing_status?: string
          total_contacts?: number
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "audience_segments_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "board_performance_ranking"
            referencedColumns: ["board_id"]
          },
          {
            foreignKeyName: "audience_segments_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "boards"
            referencedColumns: ["id"]
          },
        ]
      }
      authorized_developers: {
        Row: {
          created_at: string | null
          created_by: string | null
          is_active: boolean | null
          notes: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          is_active?: boolean | null
          notes?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          is_active?: boolean | null
          notes?: string | null
          user_id?: string
        }
        Relationships: []
      }
      auto_add_rules: {
        Row: {
          board_id: string
          column_id: string
          created_at: string | null
          created_by: string | null
          id: string
          lead_status_value: string
          operator: string
          workspace_id: string
        }
        Insert: {
          board_id: string
          column_id: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          lead_status_value: string
          operator: string
          workspace_id: string
        }
        Update: {
          board_id?: string
          column_id?: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          lead_status_value?: string
          operator?: string
          workspace_id?: string
        }
        Relationships: []
      }
      board_activities: {
        Row: {
          activity_type: string
          after_state: Json | null
          before_state: Json | null
          board_id: string
          created_at: string | null
          description: string
          id: string
          metadata: Json | null
          user_id: string | null
          workspace_id: string
        }
        Insert: {
          activity_type: string
          after_state?: Json | null
          before_state?: Json | null
          board_id: string
          created_at?: string | null
          description: string
          id?: string
          metadata?: Json | null
          user_id?: string | null
          workspace_id: string
        }
        Update: {
          activity_type?: string
          after_state?: Json | null
          before_state?: Json | null
          board_id?: string
          created_at?: string | null
          description?: string
          id?: string
          metadata?: Json | null
          user_id?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "board_activities_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "board_performance_ranking"
            referencedColumns: ["board_id"]
          },
          {
            foreignKeyName: "board_activities_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "boards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "board_activities_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "board_activities_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      board_assignments: {
        Row: {
          board_id: string
          created_at: string | null
          created_by: string | null
          id: string
          updated_at: string | null
          user_id: string
          workspace_id: string
        }
        Insert: {
          board_id: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          updated_at?: string | null
          user_id: string
          workspace_id: string
        }
        Update: {
          board_id?: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          updated_at?: string | null
          user_id?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "board_assignments_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "board_performance_ranking"
            referencedColumns: ["board_id"]
          },
          {
            foreignKeyName: "board_assignments_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "boards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "board_assignments_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "board_assignments_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      board_columns: {
        Row: {
          board_id: string
          created_at: string | null
          icon: string | null
          id: string
          is_demo: boolean | null
          position: number
          settings: Json | null
          title: string
          updated_at: string | null
        }
        Insert: {
          board_id: string
          created_at?: string | null
          icon?: string | null
          id?: string
          is_demo?: boolean | null
          position: number
          settings?: Json | null
          title: string
          updated_at?: string | null
        }
        Update: {
          board_id?: string
          created_at?: string | null
          icon?: string | null
          id?: string
          is_demo?: boolean | null
          position?: number
          settings?: Json | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "board_columns_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "board_performance_ranking"
            referencedColumns: ["board_id"]
          },
          {
            foreignKeyName: "board_columns_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "boards"
            referencedColumns: ["id"]
          },
        ]
      }
      board_contacts: {
        Row: {
          board_id: string
          column_id: string | null
          contact_id: string
          created_at: string | null
          created_by: string | null
          duplicate_group_id: string | null
          id: string
          inquiry_type: string | null
          is_demo: boolean | null
          is_duplicate: boolean | null
          last_activity_at: string | null
          metadata: Json | null
          notes: string | null
          source: string | null
          source_data: Json | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          board_id: string
          column_id?: string | null
          contact_id: string
          created_at?: string | null
          created_by?: string | null
          duplicate_group_id?: string | null
          id?: string
          inquiry_type?: string | null
          is_demo?: boolean | null
          is_duplicate?: boolean | null
          last_activity_at?: string | null
          metadata?: Json | null
          notes?: string | null
          source?: string | null
          source_data?: Json | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          board_id?: string
          column_id?: string | null
          contact_id?: string
          created_at?: string | null
          created_by?: string | null
          duplicate_group_id?: string | null
          id?: string
          inquiry_type?: string | null
          is_demo?: boolean | null
          is_duplicate?: boolean | null
          last_activity_at?: string | null
          metadata?: Json | null
          notes?: string | null
          source?: string | null
          source_data?: Json | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "board_contacts_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "board_performance_ranking"
            referencedColumns: ["board_id"]
          },
          {
            foreignKeyName: "board_contacts_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "boards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "board_contacts_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: true
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "board_contacts_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: true
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "board_contacts_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: true
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
        ]
      }
      board_settings: {
        Row: {
          board_id: string
          created_at: string | null
          id: string
          phone_number: string | null
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          board_id: string
          created_at?: string | null
          id?: string
          phone_number?: string | null
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          board_id?: string
          created_at?: string | null
          id?: string
          phone_number?: string | null
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "board_settings_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: true
            referencedRelation: "board_performance_ranking"
            referencedColumns: ["board_id"]
          },
          {
            foreignKeyName: "board_settings_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: true
            referencedRelation: "boards"
            referencedColumns: ["id"]
          },
        ]
      }
      boards: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          is_demo: boolean | null
          name: string
          phone_number: string | null
          settings: Json | null
          show_appointment_result: boolean | null
          show_appointment_status: boolean | null
          status: string | null
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          is_demo?: boolean | null
          name: string
          phone_number?: string | null
          settings?: Json | null
          show_appointment_result?: boolean | null
          show_appointment_status?: boolean | null
          status?: string | null
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          is_demo?: boolean | null
          name?: string
          phone_number?: string | null
          settings?: Json | null
          show_appointment_result?: boolean | null
          show_appointment_status?: boolean | null
          status?: string | null
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "boards_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "boards_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      broadcast_analytics: {
        Row: {
          broadcast_id: string
          id: string
          total_clicked: number | null
          total_delivered: number | null
          total_failed: number | null
          total_opened: number | null
          total_responded: number | null
          total_sent: number | null
          total_unsubscribed: number | null
          updated_at: string | null
        }
        Insert: {
          broadcast_id: string
          id?: string
          total_clicked?: number | null
          total_delivered?: number | null
          total_failed?: number | null
          total_opened?: number | null
          total_responded?: number | null
          total_sent?: number | null
          total_unsubscribed?: number | null
          updated_at?: string | null
        }
        Update: {
          broadcast_id?: string
          id?: string
          total_clicked?: number | null
          total_delivered?: number | null
          total_failed?: number | null
          total_opened?: number | null
          total_responded?: number | null
          total_sent?: number | null
          total_unsubscribed?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "broadcast_analytics_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "active_broadcasts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "broadcast_analytics_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "broadcast_delivery_stats"
            referencedColumns: ["broadcast_id"]
          },
          {
            foreignKeyName: "broadcast_analytics_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "broadcast_sequence_schedule"
            referencedColumns: ["broadcast_id"]
          },
          {
            foreignKeyName: "broadcast_analytics_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "broadcasts"
            referencedColumns: ["id"]
          },
        ]
      }
      broadcast_filters: {
        Row: {
          broadcast_id: string | null
          created_at: string | null
          filter_type: string | null
          filter_value: Json | null
          id: string
          operator: string | null
        }
        Insert: {
          broadcast_id?: string | null
          created_at?: string | null
          filter_type?: string | null
          filter_value?: Json | null
          id?: string
          operator?: string | null
        }
        Update: {
          broadcast_id?: string | null
          created_at?: string | null
          filter_type?: string | null
          filter_value?: Json | null
          id?: string
          operator?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "broadcast_filters_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "active_broadcasts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "broadcast_filters_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "broadcast_delivery_stats"
            referencedColumns: ["broadcast_id"]
          },
          {
            foreignKeyName: "broadcast_filters_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "broadcast_sequence_schedule"
            referencedColumns: ["broadcast_id"]
          },
          {
            foreignKeyName: "broadcast_filters_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "broadcasts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "broadcast_filters_broadcast_id_fkey1"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "active_broadcasts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "broadcast_filters_broadcast_id_fkey1"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "broadcast_delivery_stats"
            referencedColumns: ["broadcast_id"]
          },
          {
            foreignKeyName: "broadcast_filters_broadcast_id_fkey1"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "broadcast_sequence_schedule"
            referencedColumns: ["broadcast_id"]
          },
          {
            foreignKeyName: "broadcast_filters_broadcast_id_fkey1"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "broadcasts"
            referencedColumns: ["id"]
          },
        ]
      }
      broadcast_queue: {
        Row: {
          broadcast_id: string | null
          created_at: string | null
          error_message: string | null
          id: string
          last_attempt: string | null
          recipient_id: string | null
          retry_count: number | null
          scheduled_time: string | null
          sequence_id: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          broadcast_id?: string | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          last_attempt?: string | null
          recipient_id?: string | null
          retry_count?: number | null
          scheduled_time?: string | null
          sequence_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          broadcast_id?: string | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          last_attempt?: string | null
          recipient_id?: string | null
          retry_count?: number | null
          scheduled_time?: string | null
          sequence_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "broadcast_queue_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "active_broadcasts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "broadcast_queue_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "broadcast_delivery_stats"
            referencedColumns: ["broadcast_id"]
          },
          {
            foreignKeyName: "broadcast_queue_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "broadcast_sequence_schedule"
            referencedColumns: ["broadcast_id"]
          },
          {
            foreignKeyName: "broadcast_queue_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "broadcasts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "broadcast_queue_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "broadcast_recipient_details"
            referencedColumns: ["recipient_id"]
          },
          {
            foreignKeyName: "broadcast_queue_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "broadcast_recipients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "broadcast_queue_sequence_id_fkey"
            columns: ["sequence_id"]
            isOneToOne: false
            referencedRelation: "broadcast_sequences"
            referencedColumns: ["id"]
          },
        ]
      }
      broadcast_recipients: {
        Row: {
          broadcast_id: string
          clicked_at: string | null
          contact_id: string
          created_at: string | null
          delivered_at: string | null
          email: string | null
          error_message: string | null
          id: string
          message_id: string | null
          metadata: Json | null
          opened_at: string | null
          phone_number: string | null
          responded_at: string | null
          sent_at: string | null
          sequence_id: string | null
          status: string | null
          twilio_status: string | null
          updated_at: string | null
        }
        Insert: {
          broadcast_id: string
          clicked_at?: string | null
          contact_id: string
          created_at?: string | null
          delivered_at?: string | null
          email?: string | null
          error_message?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          opened_at?: string | null
          phone_number?: string | null
          responded_at?: string | null
          sent_at?: string | null
          sequence_id?: string | null
          status?: string | null
          twilio_status?: string | null
          updated_at?: string | null
        }
        Update: {
          broadcast_id?: string
          clicked_at?: string | null
          contact_id?: string
          created_at?: string | null
          delivered_at?: string | null
          email?: string | null
          error_message?: string | null
          id?: string
          message_id?: string | null
          metadata?: Json | null
          opened_at?: string | null
          phone_number?: string | null
          responded_at?: string | null
          sent_at?: string | null
          sequence_id?: string | null
          status?: string | null
          twilio_status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "broadcast_recipients_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "active_broadcasts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "broadcast_recipients_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "broadcast_delivery_stats"
            referencedColumns: ["broadcast_id"]
          },
          {
            foreignKeyName: "broadcast_recipients_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "broadcast_sequence_schedule"
            referencedColumns: ["broadcast_id"]
          },
          {
            foreignKeyName: "broadcast_recipients_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "broadcasts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "broadcast_recipients_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "broadcast_recipients_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "broadcast_recipients_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "broadcast_recipients_sequence_id_fkey"
            columns: ["sequence_id"]
            isOneToOne: false
            referencedRelation: "broadcast_sequences"
            referencedColumns: ["id"]
          },
        ]
      }
      broadcast_sequences: {
        Row: {
          broadcast_id: string | null
          content: string | null
          created_at: string | null
          day_number: number | null
          id: string
          metadata: Json | null
          scheduled_date: string | null
          subject: string | null
          updated_at: string | null
        }
        Insert: {
          broadcast_id?: string | null
          content?: string | null
          created_at?: string | null
          day_number?: number | null
          id?: string
          metadata?: Json | null
          scheduled_date?: string | null
          subject?: string | null
          updated_at?: string | null
        }
        Update: {
          broadcast_id?: string | null
          content?: string | null
          created_at?: string | null
          day_number?: number | null
          id?: string
          metadata?: Json | null
          scheduled_date?: string | null
          subject?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "broadcast_sequences_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "campaign_stats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "broadcast_sequences_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      broadcast_test_messages: {
        Row: {
          broadcast_id: string
          created_at: string | null
          created_by: string | null
          error_message: string | null
          id: string
          message_id: string | null
          recipient: string
          status: string | null
        }
        Insert: {
          broadcast_id: string
          created_at?: string | null
          created_by?: string | null
          error_message?: string | null
          id?: string
          message_id?: string | null
          recipient: string
          status?: string | null
        }
        Update: {
          broadcast_id?: string
          created_at?: string | null
          created_by?: string | null
          error_message?: string | null
          id?: string
          message_id?: string | null
          recipient?: string
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "broadcast_test_messages_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "active_broadcasts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "broadcast_test_messages_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "broadcast_delivery_stats"
            referencedColumns: ["broadcast_id"]
          },
          {
            foreignKeyName: "broadcast_test_messages_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "broadcast_sequence_schedule"
            referencedColumns: ["broadcast_id"]
          },
          {
            foreignKeyName: "broadcast_test_messages_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "broadcasts"
            referencedColumns: ["id"]
          },
        ]
      }
      broadcasts: {
        Row: {
          actual_recipients: number | null
          audience: Json | null
          campaign_id: string
          content: Json | null
          created_at: string | null
          created_by: string | null
          estimated_recipients: number | null
          id: string
          scheduled_date: string | null
          sent_date: string | null
          status: string | null
          type: string
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          actual_recipients?: number | null
          audience?: Json | null
          campaign_id: string
          content?: Json | null
          created_at?: string | null
          created_by?: string | null
          estimated_recipients?: number | null
          id?: string
          scheduled_date?: string | null
          sent_date?: string | null
          status?: string | null
          type: string
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          actual_recipients?: number | null
          audience?: Json | null
          campaign_id?: string
          content?: Json | null
          created_at?: string | null
          created_by?: string | null
          estimated_recipients?: number | null
          id?: string
          scheduled_date?: string | null
          sent_date?: string | null
          status?: string | null
          type?: string
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "broadcasts_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaign_stats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "broadcasts_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      calendar_events: {
        Row: {
          contact_id: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          end_time: string | null
          id: string
          is_all_day: boolean | null
          location: string | null
          metadata: Json | null
          start_time: string
          status: string | null
          title: string
          type: string
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          contact_id?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_time?: string | null
          id?: string
          is_all_day?: boolean | null
          location?: string | null
          metadata?: Json | null
          start_time: string
          status?: string | null
          title: string
          type: string
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          contact_id?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_time?: string | null
          id?: string
          is_all_day?: boolean | null
          location?: string | null
          metadata?: Json | null
          start_time?: string
          status?: string | null
          title?: string
          type?: string
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "calendar_events_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "calendar_events_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calendar_events_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "calendar_events_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "calendar_events_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      call_logs: {
        Row: {
          call_sid: string
          created_at: string | null
          direction: string
          duration: number | null
          from_number: string | null
          id: string
          recording_url: string | null
          status: string | null
          to_number: string | null
          updated_at: string | null
          workspace_id: string | null
        }
        Insert: {
          call_sid: string
          created_at?: string | null
          direction: string
          duration?: number | null
          from_number?: string | null
          id?: string
          recording_url?: string | null
          status?: string | null
          to_number?: string | null
          updated_at?: string | null
          workspace_id?: string | null
        }
        Update: {
          call_sid?: string
          created_at?: string | null
          direction?: string
          duration?: number | null
          from_number?: string | null
          id?: string
          recording_url?: string | null
          status?: string | null
          to_number?: string | null
          updated_at?: string | null
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "call_logs_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "call_logs_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_contact_status: {
        Row: {
          campaign_id: string
          completed_at: string | null
          contact_id: string
          created_at: string | null
          current_day: number | null
          enrolled_at: string | null
          id: string
          last_response_at: string | null
          opt_out_at: string | null
          opt_out_reason: string | null
          status: string
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          campaign_id: string
          completed_at?: string | null
          contact_id: string
          created_at?: string | null
          current_day?: number | null
          enrolled_at?: string | null
          id?: string
          last_response_at?: string | null
          opt_out_at?: string | null
          opt_out_reason?: string | null
          status: string
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          campaign_id?: string
          completed_at?: string | null
          contact_id?: string
          created_at?: string | null
          current_day?: number | null
          enrolled_at?: string | null
          id?: string
          last_response_at?: string | null
          opt_out_at?: string | null
          opt_out_reason?: string | null
          status?: string
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_campaign"
            columns: ["campaign_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "campaign_stats"
            referencedColumns: ["id", "workspace_id"]
          },
          {
            foreignKeyName: "fk_campaign"
            columns: ["campaign_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id", "workspace_id"]
          },
          {
            foreignKeyName: "fk_contact"
            columns: ["contact_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id", "workspace_id"]
          },
          {
            foreignKeyName: "fk_contact"
            columns: ["contact_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id", "workspace_id"]
          },
          {
            foreignKeyName: "fk_contact"
            columns: ["contact_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id", "workspace_id"]
          },
        ]
      }
      campaign_executions: {
        Row: {
          campaign_id: string
          contact_id: string
          created_at: string | null
          error_message: string | null
          id: string
          node_id: string
          scheduled_time: string
          sent_time: string | null
          status: string
          twilio_message_id: string | null
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          campaign_id: string
          contact_id: string
          created_at?: string | null
          error_message?: string | null
          id?: string
          node_id: string
          scheduled_time: string
          sent_time?: string | null
          status: string
          twilio_message_id?: string | null
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          campaign_id?: string
          contact_id?: string
          created_at?: string | null
          error_message?: string | null
          id?: string
          node_id?: string
          scheduled_time?: string
          sent_time?: string | null
          status?: string
          twilio_message_id?: string | null
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_campaign"
            columns: ["campaign_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "campaign_stats"
            referencedColumns: ["id", "workspace_id"]
          },
          {
            foreignKeyName: "fk_campaign"
            columns: ["campaign_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id", "workspace_id"]
          },
          {
            foreignKeyName: "fk_contact"
            columns: ["contact_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id", "workspace_id"]
          },
          {
            foreignKeyName: "fk_contact"
            columns: ["contact_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id", "workspace_id"]
          },
          {
            foreignKeyName: "fk_contact"
            columns: ["contact_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id", "workspace_id"]
          },
          {
            foreignKeyName: "fk_node"
            columns: ["node_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "campaign_nodes"
            referencedColumns: ["id", "workspace_id"]
          },
        ]
      }
      campaign_messages: {
        Row: {
          campaign_id: string
          conditions: Json | null
          content: string
          created_at: string | null
          day: number | null
          id: string
          metadata: Json | null
          name: string
          queue_error: string | null
          queue_job_id: string | null
          queue_status: string | null
          schedule: Json
          scheduled_for: string | null
          sequence_order: number | null
          status: Database["public"]["Enums"]["message_status"] | null
          subject: string | null
          template_id: string | null
          type: Database["public"]["Enums"]["message_type"]
          updated_at: string | null
        }
        Insert: {
          campaign_id: string
          conditions?: Json | null
          content: string
          created_at?: string | null
          day?: number | null
          id?: string
          metadata?: Json | null
          name: string
          queue_error?: string | null
          queue_job_id?: string | null
          queue_status?: string | null
          schedule?: Json
          scheduled_for?: string | null
          sequence_order?: number | null
          status?: Database["public"]["Enums"]["message_status"] | null
          subject?: string | null
          template_id?: string | null
          type: Database["public"]["Enums"]["message_type"]
          updated_at?: string | null
        }
        Update: {
          campaign_id?: string
          conditions?: Json | null
          content?: string
          created_at?: string | null
          day?: number | null
          id?: string
          metadata?: Json | null
          name?: string
          queue_error?: string | null
          queue_job_id?: string | null
          queue_status?: string | null
          schedule?: Json
          scheduled_for?: string | null
          sequence_order?: number | null
          status?: Database["public"]["Enums"]["message_status"] | null
          subject?: string | null
          template_id?: string | null
          type?: Database["public"]["Enums"]["message_type"]
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaign_messages_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaign_stats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_messages_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_metrics: {
        Row: {
          active_contacts: number | null
          campaign_id: string
          completed_contacts: number | null
          id: string
          last_updated_at: string | null
          opted_out_contacts: number | null
          total_contacts: number | null
          total_messages_delivered: number | null
          total_messages_sent: number | null
          total_responses: number | null
        }
        Insert: {
          active_contacts?: number | null
          campaign_id: string
          completed_contacts?: number | null
          id?: string
          last_updated_at?: string | null
          opted_out_contacts?: number | null
          total_contacts?: number | null
          total_messages_delivered?: number | null
          total_messages_sent?: number | null
          total_responses?: number | null
        }
        Update: {
          active_contacts?: number | null
          campaign_id?: string
          completed_contacts?: number | null
          id?: string
          last_updated_at?: string | null
          opted_out_contacts?: number | null
          total_contacts?: number | null
          total_messages_delivered?: number | null
          total_messages_sent?: number | null
          total_responses?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "campaign_metrics_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaign_stats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_metrics_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_nodes: {
        Row: {
          campaign_id: string
          created_at: string | null
          created_by: string | null
          day: number
          id: string
          message: string
          send_time: string
          sequence_order: number
          subject: string | null
          type: string
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          campaign_id: string
          created_at?: string | null
          created_by?: string | null
          day: number
          id?: string
          message: string
          send_time: string
          sequence_order: number
          subject?: string | null
          type: string
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          campaign_id?: string
          created_at?: string | null
          created_by?: string | null
          day?: number
          id?: string
          message?: string
          send_time?: string
          sequence_order?: number
          subject?: string | null
          type?: string
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_campaign"
            columns: ["campaign_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "campaign_stats"
            referencedColumns: ["id", "workspace_id"]
          },
          {
            foreignKeyName: "fk_campaign"
            columns: ["campaign_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id", "workspace_id"]
          },
        ]
      }
      campaign_queue: {
        Row: {
          campaign_id: string
          created_at: string | null
          id: string
          processed_at: string | null
          status: string | null
        }
        Insert: {
          campaign_id: string
          created_at?: string | null
          id?: string
          processed_at?: string | null
          status?: string | null
        }
        Update: {
          campaign_id?: string
          created_at?: string | null
          id?: string
          processed_at?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaign_queue_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaign_stats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_queue_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_responses: {
        Row: {
          campaign_id: string
          contact_id: string
          id: string
          message_id: string
          response_text: string
          response_time: string | null
          workspace_id: string
        }
        Insert: {
          campaign_id: string
          contact_id: string
          id?: string
          message_id: string
          response_text: string
          response_time?: string | null
          workspace_id: string
        }
        Update: {
          campaign_id?: string
          contact_id?: string
          id?: string
          message_id?: string
          response_text?: string
          response_time?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_campaign"
            columns: ["campaign_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "campaign_stats"
            referencedColumns: ["id", "workspace_id"]
          },
          {
            foreignKeyName: "fk_campaign"
            columns: ["campaign_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id", "workspace_id"]
          },
          {
            foreignKeyName: "fk_contact"
            columns: ["contact_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id", "workspace_id"]
          },
          {
            foreignKeyName: "fk_contact"
            columns: ["contact_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id", "workspace_id"]
          },
          {
            foreignKeyName: "fk_contact"
            columns: ["contact_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id", "workspace_id"]
          },
          {
            foreignKeyName: "fk_message"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "campaign_nodes"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_segments: {
        Row: {
          campaign_id: string
          conditions: Json | null
          created_at: string | null
          id: string
          include_type: string
          segment_id: string
          updated_at: string | null
        }
        Insert: {
          campaign_id: string
          conditions?: Json | null
          created_at?: string | null
          id?: string
          include_type?: string
          segment_id: string
          updated_at?: string | null
        }
        Update: {
          campaign_id?: string
          conditions?: Json | null
          created_at?: string | null
          id?: string
          include_type?: string
          segment_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaign_segments_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaign_stats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_segments_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_segments_segment_id_fkey"
            columns: ["segment_id"]
            isOneToOne: false
            referencedRelation: "audience_segments"
            referencedColumns: ["id"]
          },
        ]
      }
      campaigns: {
        Row: {
          audience_criteria: Json | null
          board_id: string | null
          campaign_type: Database["public"]["Enums"]["campaign_type"] | null
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          metadata: Json | null
          name: string
          queue_results: Json | null
          scheduled_at: string | null
          segment_id: string | null
          sent_at: string | null
          settings: Json | null
          status: string
          timezone: string | null
          type: string | null
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          audience_criteria?: Json | null
          board_id?: string | null
          campaign_type?: Database["public"]["Enums"]["campaign_type"] | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          name: string
          queue_results?: Json | null
          scheduled_at?: string | null
          segment_id?: string | null
          sent_at?: string | null
          settings?: Json | null
          status?: string
          timezone?: string | null
          type?: string | null
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          audience_criteria?: Json | null
          board_id?: string | null
          campaign_type?: Database["public"]["Enums"]["campaign_type"] | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          name?: string
          queue_results?: Json | null
          scheduled_at?: string | null
          segment_id?: string | null
          sent_at?: string | null
          settings?: Json | null
          status?: string
          timezone?: string | null
          type?: string | null
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_board"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "board_performance_ranking"
            referencedColumns: ["board_id"]
          },
          {
            foreignKeyName: "fk_board"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "boards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_segment"
            columns: ["segment_id"]
            isOneToOne: false
            referencedRelation: "audience_segments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      changelog: {
        Row: {
          category: string
          content: string
          created_at: string | null
          dev: string
          id: number
          lessons_learned: string | null
          modified_date: string | null
          release_date: string
          released_by: string
          title: string
        }
        Insert: {
          category: string
          content: string
          created_at?: string | null
          dev: string
          id?: number
          lessons_learned?: string | null
          modified_date?: string | null
          release_date: string
          released_by: string
          title: string
        }
        Update: {
          category?: string
          content?: string
          created_at?: string | null
          dev?: string
          id?: number
          lessons_learned?: string | null
          modified_date?: string | null
          release_date?: string
          released_by?: string
          title?: string
        }
        Relationships: []
      }
      cloudflare_api_logs: {
        Row: {
          api_action: string
          created_at: string | null
          email_address: string
          error_message: string | null
          id: number
          request_payload: Json | null
          response_payload: Json | null
          status: string
        }
        Insert: {
          api_action: string
          created_at?: string | null
          email_address: string
          error_message?: string | null
          id?: number
          request_payload?: Json | null
          response_payload?: Json | null
          status: string
        }
        Update: {
          api_action?: string
          created_at?: string | null
          email_address?: string
          error_message?: string | null
          id?: number
          request_payload?: Json | null
          response_payload?: Json | null
          status?: string
        }
        Relationships: []
      }
      companies: {
        Row: {
          created_at: string | null
          id: string
          industry: string | null
          name: string
          size: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          industry?: string | null
          name: string
          size: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          industry?: string | null
          name?: string
          size?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      company_goals: {
        Row: {
          company_id: string | null
          created_at: string | null
          crm_basics: boolean | null
          customer_communication: boolean | null
          get_more_leads: boolean | null
          id: string
          sales_process: boolean | null
          updated_at: string | null
          use_own_data: boolean | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string | null
          crm_basics?: boolean | null
          customer_communication?: boolean | null
          get_more_leads?: boolean | null
          id?: string
          sales_process?: boolean | null
          updated_at?: string | null
          use_own_data?: boolean | null
        }
        Update: {
          company_id?: string | null
          created_at?: string | null
          crm_basics?: boolean | null
          customer_communication?: boolean | null
          get_more_leads?: boolean | null
          id?: string
          sales_process?: boolean | null
          updated_at?: string | null
          use_own_data?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "company_goals_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_custom_fields: {
        Row: {
          contact_id: string
          created_at: string | null
          created_by: string | null
          field_id: string
          updated_at: string | null
          updated_by: string | null
          value: Json
        }
        Insert: {
          contact_id: string
          created_at?: string | null
          created_by?: string | null
          field_id: string
          updated_at?: string | null
          updated_by?: string | null
          value: Json
        }
        Update: {
          contact_id?: string
          created_at?: string | null
          created_by?: string | null
          field_id?: string
          updated_at?: string | null
          updated_by?: string | null
          value?: Json
        }
        Relationships: [
          {
            foreignKeyName: "contact_custom_fields_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "contact_custom_fields_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_custom_fields_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "contact_custom_fields_field_id_fkey"
            columns: ["field_id"]
            isOneToOne: false
            referencedRelation: "custom_fields"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_field_changes: {
        Row: {
          changed_at: string | null
          contact_id: string
          created_at: string | null
          field_name: string
          id: string
          new_value: string | null
          old_value: string | null
          workspace_id: string
        }
        Insert: {
          changed_at?: string | null
          contact_id: string
          created_at?: string | null
          field_name: string
          id?: string
          new_value?: string | null
          old_value?: string | null
          workspace_id: string
        }
        Update: {
          changed_at?: string | null
          contact_id?: string
          created_at?: string | null
          field_name?: string
          id?: string
          new_value?: string | null
          old_value?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "contact_field_changes_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "contact_field_changes_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_field_changes_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
        ]
      }
      contact_livechat_board_column: {
        Row: {
          assigned_at: string
          board_id: string
          column_id: string
          contact_id: string
          id: string
          workspace_id: string
        }
        Insert: {
          assigned_at?: string
          board_id: string
          column_id: string
          contact_id: string
          id?: string
          workspace_id: string
        }
        Update: {
          assigned_at?: string
          board_id?: string
          column_id?: string
          contact_id?: string
          id?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "contact_livechat_board_column_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "livechat_board"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_livechat_board_column_column_id_fkey"
            columns: ["column_id"]
            isOneToOne: false
            referencedRelation: "livechat_board_column"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_livechat_board_column_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "contact_livechat_board_column_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_livechat_board_column_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "fk_contact_board_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "fk_contact_board_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_pinned_fields: {
        Row: {
          color: string
          created_at: string
          display_name: string
          field_name: string
          id: string
          position: number
          updated_at: string
          user_id: string
          workspace_id: string
        }
        Insert: {
          color: string
          created_at?: string
          display_name: string
          field_name: string
          id?: string
          position: number
          updated_at?: string
          user_id: string
          workspace_id: string
        }
        Update: {
          color?: string
          created_at?: string
          display_name?: string
          field_name?: string
          id?: string
          position?: number
          updated_at?: string
          user_id?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "contact_pinned_fields_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "contact_pinned_fields_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_stages: {
        Row: {
          contact_id: string | null
          entered_at: string | null
          exited_at: string | null
          id: string
          pipeline_id: string | null
          previous_stage_id: string | null
          stage_id: string | null
        }
        Insert: {
          contact_id?: string | null
          entered_at?: string | null
          exited_at?: string | null
          id?: string
          pipeline_id?: string | null
          previous_stage_id?: string | null
          stage_id?: string | null
        }
        Update: {
          contact_id?: string | null
          entered_at?: string | null
          exited_at?: string | null
          id?: string
          pipeline_id?: string | null
          previous_stage_id?: string | null
          stage_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_stages_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "contact_stages_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_stages_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
        ]
      }
      contacts: {
        Row: {
          appointment_result_id: number | null
          appointment_status_id: number | null
          board_id: string | null
          board_name: string | null
          city: string | null
          conversation_status: string | null
          created_at: string | null
          created_by: string | null
          crm_id: string | null
          email: string | null
          firstname: string
          follow_up_date: string | null
          id: string
          is_archived: boolean | null
          is_completed: boolean | null
          is_demo: boolean | null
          is_favorite: boolean | null
          last_action_at: string | null
          last_action_type: string | null
          lastname: string
          lead_source: string | null
          lead_status: string | null
          lead_status_id: number | null
          market: string | null
          metadata: Json | null
          name: string | null
          needs_response: boolean | null
          notes: string | null
          opt_in_through: string
          opted_in_email: boolean | null
          opted_in_sms: boolean | null
          phone_number: string
          priority: string | null
          product: string | null
          property_insights_data: Json | null
          property_insights_updated_at: string | null
          search_vector: unknown | null
          sentiment: string | null
          sentiment_history: Json | null
          st_address: string | null
          state: string | null
          tags: Json | null
          team: string | null
          unread_count: number | null
          updated_at: string | null
          webhook_id: string | null
          webhook_name: string | null
          webhook_received_at: string | null
          workspace_id: string
          zip: string | null
        }
        Insert: {
          appointment_result_id?: number | null
          appointment_status_id?: number | null
          board_id?: string | null
          board_name?: string | null
          city?: string | null
          conversation_status?: string | null
          created_at?: string | null
          created_by?: string | null
          crm_id?: string | null
          email?: string | null
          firstname: string
          follow_up_date?: string | null
          id?: string
          is_archived?: boolean | null
          is_completed?: boolean | null
          is_demo?: boolean | null
          is_favorite?: boolean | null
          last_action_at?: string | null
          last_action_type?: string | null
          lastname: string
          lead_source?: string | null
          lead_status?: string | null
          lead_status_id?: number | null
          market?: string | null
          metadata?: Json | null
          name?: string | null
          needs_response?: boolean | null
          notes?: string | null
          opt_in_through?: string
          opted_in_email?: boolean | null
          opted_in_sms?: boolean | null
          phone_number: string
          priority?: string | null
          product?: string | null
          property_insights_data?: Json | null
          property_insights_updated_at?: string | null
          search_vector?: unknown | null
          sentiment?: string | null
          sentiment_history?: Json | null
          st_address?: string | null
          state?: string | null
          tags?: Json | null
          team?: string | null
          unread_count?: number | null
          updated_at?: string | null
          webhook_id?: string | null
          webhook_name?: string | null
          webhook_received_at?: string | null
          workspace_id: string
          zip?: string | null
        }
        Update: {
          appointment_result_id?: number | null
          appointment_status_id?: number | null
          board_id?: string | null
          board_name?: string | null
          city?: string | null
          conversation_status?: string | null
          created_at?: string | null
          created_by?: string | null
          crm_id?: string | null
          email?: string | null
          firstname?: string
          follow_up_date?: string | null
          id?: string
          is_archived?: boolean | null
          is_completed?: boolean | null
          is_demo?: boolean | null
          is_favorite?: boolean | null
          last_action_at?: string | null
          last_action_type?: string | null
          lastname?: string
          lead_source?: string | null
          lead_status?: string | null
          lead_status_id?: number | null
          market?: string | null
          metadata?: Json | null
          name?: string | null
          needs_response?: boolean | null
          notes?: string | null
          opt_in_through?: string
          opted_in_email?: boolean | null
          opted_in_sms?: boolean | null
          phone_number?: string
          priority?: string | null
          product?: string | null
          property_insights_data?: Json | null
          property_insights_updated_at?: string | null
          search_vector?: unknown | null
          sentiment?: string | null
          sentiment_history?: Json | null
          st_address?: string | null
          state?: string | null
          tags?: Json | null
          team?: string | null
          unread_count?: number | null
          updated_at?: string | null
          webhook_id?: string | null
          webhook_name?: string | null
          webhook_received_at?: string | null
          workspace_id?: string
          zip?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contacts_appointment_result_id_fkey"
            columns: ["appointment_result_id"]
            isOneToOne: false
            referencedRelation: "status_options"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contacts_appointment_result_id_fkey"
            columns: ["appointment_result_id"]
            isOneToOne: false
            referencedRelation: "statuses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contacts_appointment_status_id_fkey"
            columns: ["appointment_status_id"]
            isOneToOne: false
            referencedRelation: "status_options"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contacts_appointment_status_id_fkey"
            columns: ["appointment_status_id"]
            isOneToOne: false
            referencedRelation: "statuses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contacts_lead_status_id_fkey"
            columns: ["lead_status_id"]
            isOneToOne: false
            referencedRelation: "status_options"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contacts_lead_status_id_fkey"
            columns: ["lead_status_id"]
            isOneToOne: false
            referencedRelation: "statuses"
            referencedColumns: ["id"]
          },
        ]
      }
      contacts_backup: {
        Row: {
          conversation_status: string | null
          created_at: string | null
          created_by: string | null
          custom_fields: Json | null
          email: string | null
          first_name: string | null
          id: string | null
          is_active: boolean | null
          last_name: string | null
          lead_source: string | null
          market: string | null
          phone_number: string | null
          product: string | null
          status: string | null
          tags: string[] | null
          unread_count: number | null
          updated_at: string | null
          workspace_id: string | null
        }
        Insert: {
          conversation_status?: string | null
          created_at?: string | null
          created_by?: string | null
          custom_fields?: Json | null
          email?: string | null
          first_name?: string | null
          id?: string | null
          is_active?: boolean | null
          last_name?: string | null
          lead_source?: string | null
          market?: string | null
          phone_number?: string | null
          product?: string | null
          status?: string | null
          tags?: string[] | null
          unread_count?: number | null
          updated_at?: string | null
          workspace_id?: string | null
        }
        Update: {
          conversation_status?: string | null
          created_at?: string | null
          created_by?: string | null
          custom_fields?: Json | null
          email?: string | null
          first_name?: string | null
          id?: string | null
          is_active?: boolean | null
          last_name?: string | null
          lead_source?: string | null
          market?: string | null
          phone_number?: string | null
          product?: string | null
          status?: string | null
          tags?: string[] | null
          unread_count?: number | null
          updated_at?: string | null
          workspace_id?: string | null
        }
        Relationships: []
      }
      custom_fields: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          field_type: Database["public"]["Enums"]["field_type"]
          id: string
          is_required: boolean | null
          label: string
          name: string
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          field_type: Database["public"]["Enums"]["field_type"]
          id?: string
          is_required?: boolean | null
          label: string
          name: string
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          field_type?: Database["public"]["Enums"]["field_type"]
          id?: string
          is_required?: boolean | null
          label?: string
          name?: string
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "custom_fields_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "custom_fields_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      dead_letter_queue: {
        Row: {
          contact_id: string | null
          created_at: string | null
          error_message: string | null
          execution_id: string | null
          flow_id: string
          id: string
          node_id: string
          payload: Json | null
          processed: boolean | null
          processed_at: string | null
          processing_result: Json | null
          retry_count: number | null
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          contact_id?: string | null
          created_at?: string | null
          error_message?: string | null
          execution_id?: string | null
          flow_id: string
          id?: string
          node_id: string
          payload?: Json | null
          processed?: boolean | null
          processed_at?: string | null
          processing_result?: Json | null
          retry_count?: number | null
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          contact_id?: string | null
          created_at?: string | null
          error_message?: string | null
          execution_id?: string | null
          flow_id?: string
          id?: string
          node_id?: string
          payload?: Json | null
          processed?: boolean | null
          processed_at?: string | null
          processing_result?: Json | null
          retry_count?: number | null
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_dead_letter_queue_execution"
            columns: ["execution_id"]
            isOneToOne: false
            referencedRelation: "flow_executions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_dead_letter_queue_flow"
            columns: ["flow_id"]
            isOneToOne: false
            referencedRelation: "flows"
            referencedColumns: ["id"]
          },
        ]
      }
      demo_data_status: {
        Row: {
          boards_loaded: boolean | null
          contacts_loaded: boolean | null
          created_by: string | null
          deleted_at: string | null
          is_loaded: boolean | null
          loaded_at: string | null
          messages_loaded: boolean | null
          workspace_id: string
        }
        Insert: {
          boards_loaded?: boolean | null
          contacts_loaded?: boolean | null
          created_by?: string | null
          deleted_at?: string | null
          is_loaded?: boolean | null
          loaded_at?: string | null
          messages_loaded?: boolean | null
          workspace_id: string
        }
        Update: {
          boards_loaded?: boolean | null
          contacts_loaded?: boolean | null
          created_by?: string | null
          deleted_at?: string | null
          is_loaded?: boolean | null
          loaded_at?: string | null
          messages_loaded?: boolean | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "demo_data_status_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: true
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "demo_data_status_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: true
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      developer_access_logs: {
        Row: {
          access_reason: string
          access_type: string
          created_at: string | null
          developer_id: string
          expires_at: string | null
          id: string
          ip_address: string | null
          is_active: boolean | null
          user_agent: string | null
          workspace_id: string
        }
        Insert: {
          access_reason: string
          access_type: string
          created_at?: string | null
          developer_id: string
          expires_at?: string | null
          id?: string
          ip_address?: string | null
          is_active?: boolean | null
          user_agent?: string | null
          workspace_id: string
        }
        Update: {
          access_reason?: string
          access_type?: string
          created_at?: string | null
          developer_id?: string
          expires_at?: string | null
          id?: string
          ip_address?: string | null
          is_active?: boolean | null
          user_agent?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "developer_access_logs_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "developer_access_logs_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      developer_access_permissions: {
        Row: {
          access_level: string
          developer_id: string
          expires_at: string | null
          granted_at: string | null
          granted_by: string
          id: string
          is_active: boolean | null
          workspace_id: string
        }
        Insert: {
          access_level: string
          developer_id: string
          expires_at?: string | null
          granted_at?: string | null
          granted_by: string
          id?: string
          is_active?: boolean | null
          workspace_id: string
        }
        Update: {
          access_level?: string
          developer_id?: string
          expires_at?: string | null
          granted_at?: string | null
          granted_by?: string
          id?: string
          is_active?: boolean | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "developer_access_permissions_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "developer_access_permissions_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      email_accounts: {
        Row: {
          account_type: string
          created_at: string | null
          display_name: string
          email_address: string
          id: string
          imap_host: string | null
          imap_password_encrypted: string | null
          imap_port: number | null
          imap_use_ssl: boolean | null
          imap_username: string | null
          is_active: boolean | null
          is_default: boolean | null
          last_sync_at: string | null
          oauth_access_token: string | null
          oauth_refresh_token: string | null
          oauth_token_expires_at: string | null
          smtp_host: string | null
          smtp_password_encrypted: string | null
          smtp_port: number | null
          smtp_use_tls: boolean | null
          smtp_username: string | null
          sync_enabled: boolean | null
          updated_at: string | null
          user_id: string
          workspace_id: string
        }
        Insert: {
          account_type?: string
          created_at?: string | null
          display_name: string
          email_address: string
          id?: string
          imap_host?: string | null
          imap_password_encrypted?: string | null
          imap_port?: number | null
          imap_use_ssl?: boolean | null
          imap_username?: string | null
          is_active?: boolean | null
          is_default?: boolean | null
          last_sync_at?: string | null
          oauth_access_token?: string | null
          oauth_refresh_token?: string | null
          oauth_token_expires_at?: string | null
          smtp_host?: string | null
          smtp_password_encrypted?: string | null
          smtp_port?: number | null
          smtp_use_tls?: boolean | null
          smtp_username?: string | null
          sync_enabled?: boolean | null
          updated_at?: string | null
          user_id: string
          workspace_id: string
        }
        Update: {
          account_type?: string
          created_at?: string | null
          display_name?: string
          email_address?: string
          id?: string
          imap_host?: string | null
          imap_password_encrypted?: string | null
          imap_port?: number | null
          imap_use_ssl?: boolean | null
          imap_username?: string | null
          is_active?: boolean | null
          is_default?: boolean | null
          last_sync_at?: string | null
          oauth_access_token?: string | null
          oauth_refresh_token?: string | null
          oauth_token_expires_at?: string | null
          smtp_host?: string | null
          smtp_password_encrypted?: string | null
          smtp_port?: number | null
          smtp_use_tls?: boolean | null
          smtp_username?: string | null
          sync_enabled?: boolean | null
          updated_at?: string | null
          user_id?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_accounts_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "email_accounts_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      email_actions: {
        Row: {
          action_type: string
          created_at: string | null
          email_id: string
          id: string
          new_value: Json | null
          old_value: Json | null
          user_id: string
          workspace_id: string
        }
        Insert: {
          action_type: string
          created_at?: string | null
          email_id: string
          id?: string
          new_value?: Json | null
          old_value?: Json | null
          user_id: string
          workspace_id: string
        }
        Update: {
          action_type?: string
          created_at?: string | null
          email_id?: string
          id?: string
          new_value?: Json | null
          old_value?: Json | null
          user_id?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_actions_email_id_fkey"
            columns: ["email_id"]
            isOneToOne: false
            referencedRelation: "email_list_view"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_actions_email_id_fkey"
            columns: ["email_id"]
            isOneToOne: false
            referencedRelation: "emails"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_actions_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "email_actions_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      email_activities: {
        Row: {
          contact_id: string
          content: string
          created_at: string | null
          from_email: string
          id: string
          message_id: string | null
          scheduled_for: string | null
          sent_at: string | null
          status: string
          subject: string
          to_email: string
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          contact_id: string
          content: string
          created_at?: string | null
          from_email: string
          id?: string
          message_id?: string | null
          scheduled_for?: string | null
          sent_at?: string | null
          status?: string
          subject: string
          to_email: string
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          contact_id?: string
          content?: string
          created_at?: string | null
          from_email?: string
          id?: string
          message_id?: string | null
          scheduled_for?: string | null
          sent_at?: string | null
          status?: string
          subject?: string
          to_email?: string
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_activities_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "email_activities_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_activities_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
        ]
      }
      email_attachments: {
        Row: {
          content_id: string | null
          content_type: string | null
          created_at: string | null
          email_id: string
          file_path: string | null
          file_size_bytes: number | null
          filename: string
          id: string
          is_inline: boolean | null
          is_scanned: boolean | null
          original_filename: string
          scan_result: string | null
          storage_provider: string | null
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          content_id?: string | null
          content_type?: string | null
          created_at?: string | null
          email_id: string
          file_path?: string | null
          file_size_bytes?: number | null
          filename: string
          id?: string
          is_inline?: boolean | null
          is_scanned?: boolean | null
          original_filename: string
          scan_result?: string | null
          storage_provider?: string | null
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          content_id?: string | null
          content_type?: string | null
          created_at?: string | null
          email_id?: string
          file_path?: string | null
          file_size_bytes?: number | null
          filename?: string
          id?: string
          is_inline?: boolean | null
          is_scanned?: boolean | null
          original_filename?: string
          scan_result?: string | null
          storage_provider?: string | null
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_attachments_email_id_fkey"
            columns: ["email_id"]
            isOneToOne: false
            referencedRelation: "email_messages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_attachments_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "email_attachments_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      email_folders: {
        Row: {
          color: string | null
          created_at: string | null
          email_account_id: string
          folder_type: string
          icon: string | null
          id: string
          is_system_folder: boolean | null
          is_visible: boolean | null
          name: string
          sort_order: number | null
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          email_account_id: string
          folder_type?: string
          icon?: string | null
          id?: string
          is_system_folder?: boolean | null
          is_visible?: boolean | null
          name: string
          sort_order?: number | null
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          color?: string | null
          created_at?: string | null
          email_account_id?: string
          folder_type?: string
          icon?: string | null
          id?: string
          is_system_folder?: boolean | null
          is_visible?: boolean | null
          name?: string
          sort_order?: number | null
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_folders_email_account_id_fkey"
            columns: ["email_account_id"]
            isOneToOne: false
            referencedRelation: "email_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_folders_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "email_folders_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      email_messages: {
        Row: {
          bcc_recipients: Json | null
          body_html: string | null
          body_text: string | null
          cc_recipients: Json | null
          contact_id: string | null
          created_at: string
          email_account_id: string | null
          folder: string
          id: string
          in_reply_to_header: string | null
          is_outgoing: boolean
          is_read: boolean
          is_starred: boolean
          message_id_header: string | null
          received_at: string | null
          references_header: string | null
          sender_email: string
          sender_name: string | null
          sent_at: string | null
          subject: string | null
          thread_id: string | null
          to_recipients: Json | null
          updated_at: string
          user_id: string | null
          workspace_id: string
        }
        Insert: {
          bcc_recipients?: Json | null
          body_html?: string | null
          body_text?: string | null
          cc_recipients?: Json | null
          contact_id?: string | null
          created_at?: string
          email_account_id?: string | null
          folder?: string
          id?: string
          in_reply_to_header?: string | null
          is_outgoing?: boolean
          is_read?: boolean
          is_starred?: boolean
          message_id_header?: string | null
          received_at?: string | null
          references_header?: string | null
          sender_email: string
          sender_name?: string | null
          sent_at?: string | null
          subject?: string | null
          thread_id?: string | null
          to_recipients?: Json | null
          updated_at?: string
          user_id?: string | null
          workspace_id: string
        }
        Update: {
          bcc_recipients?: Json | null
          body_html?: string | null
          body_text?: string | null
          cc_recipients?: Json | null
          contact_id?: string | null
          created_at?: string
          email_account_id?: string | null
          folder?: string
          id?: string
          in_reply_to_header?: string | null
          is_outgoing?: boolean
          is_read?: boolean
          is_starred?: boolean
          message_id_header?: string | null
          received_at?: string | null
          references_header?: string | null
          sender_email?: string
          sender_name?: string | null
          sent_at?: string | null
          subject?: string | null
          thread_id?: string | null
          to_recipients?: Json | null
          updated_at?: string
          user_id?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_messages_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "email_messages_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_messages_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "email_messages_email_account_id_fkey"
            columns: ["email_account_id"]
            isOneToOne: false
            referencedRelation: "email_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_messages_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "email_messages_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      email_signatures: {
        Row: {
          created_at: string | null
          email_account_id: string
          id: string
          is_default: boolean | null
          name: string
          signature_html: string | null
          signature_text: string | null
          updated_at: string | null
          use_for_new_emails: boolean | null
          use_for_replies: boolean | null
          user_id: string
          workspace_id: string
        }
        Insert: {
          created_at?: string | null
          email_account_id: string
          id?: string
          is_default?: boolean | null
          name: string
          signature_html?: string | null
          signature_text?: string | null
          updated_at?: string | null
          use_for_new_emails?: boolean | null
          use_for_replies?: boolean | null
          user_id: string
          workspace_id: string
        }
        Update: {
          created_at?: string | null
          email_account_id?: string
          id?: string
          is_default?: boolean | null
          name?: string
          signature_html?: string | null
          signature_text?: string | null
          updated_at?: string | null
          use_for_new_emails?: boolean | null
          use_for_replies?: boolean | null
          user_id?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_signatures_email_account_id_fkey"
            columns: ["email_account_id"]
            isOneToOne: false
            referencedRelation: "email_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_signatures_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "email_signatures_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      email_templates: {
        Row: {
          content: string
          created_at: string | null
          created_by: string | null
          id: string
          is_active: boolean | null
          name: string
          subject: string
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          content: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          subject: string
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          content?: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          subject?: string
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: []
      }
      email_threads: {
        Row: {
          created_at: string | null
          email_account_id: string
          id: string
          is_important: boolean | null
          is_read: boolean | null
          is_starred: boolean | null
          last_message_at: string | null
          participants: Json | null
          subject: string
          thread_id: string | null
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          created_at?: string | null
          email_account_id: string
          id?: string
          is_important?: boolean | null
          is_read?: boolean | null
          is_starred?: boolean | null
          last_message_at?: string | null
          participants?: Json | null
          subject: string
          thread_id?: string | null
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          created_at?: string | null
          email_account_id?: string
          id?: string
          is_important?: boolean | null
          is_read?: boolean | null
          is_starred?: boolean | null
          last_message_at?: string | null
          participants?: Json | null
          subject?: string
          thread_id?: string | null
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_threads_email_account_id_fkey"
            columns: ["email_account_id"]
            isOneToOne: false
            referencedRelation: "email_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_threads_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "email_threads_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      emails: {
        Row: {
          attachment_count: number | null
          bcc_emails: Json | null
          body_html: string | null
          body_text: string | null
          cc_emails: Json | null
          contact_id: string | null
          created_at: string | null
          email_account_id: string
          email_references: string[] | null
          email_size_bytes: number | null
          external_id: string | null
          folder_id: string | null
          from_email: string
          from_name: string | null
          has_attachments: boolean | null
          id: string
          in_reply_to: string | null
          is_draft: boolean | null
          is_important: boolean | null
          is_read: boolean | null
          is_sent: boolean | null
          is_starred: boolean | null
          labels: string[] | null
          last_synced_at: string | null
          message_id: string
          priority: string | null
          received_at: string | null
          reply_to_email: string | null
          reply_to_name: string | null
          sent_at: string
          snippet: string | null
          subject: string | null
          thread_id: string | null
          to_emails: Json | null
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          attachment_count?: number | null
          bcc_emails?: Json | null
          body_html?: string | null
          body_text?: string | null
          cc_emails?: Json | null
          contact_id?: string | null
          created_at?: string | null
          email_account_id: string
          email_references?: string[] | null
          email_size_bytes?: number | null
          external_id?: string | null
          folder_id?: string | null
          from_email: string
          from_name?: string | null
          has_attachments?: boolean | null
          id?: string
          in_reply_to?: string | null
          is_draft?: boolean | null
          is_important?: boolean | null
          is_read?: boolean | null
          is_sent?: boolean | null
          is_starred?: boolean | null
          labels?: string[] | null
          last_synced_at?: string | null
          message_id: string
          priority?: string | null
          received_at?: string | null
          reply_to_email?: string | null
          reply_to_name?: string | null
          sent_at: string
          snippet?: string | null
          subject?: string | null
          thread_id?: string | null
          to_emails?: Json | null
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          attachment_count?: number | null
          bcc_emails?: Json | null
          body_html?: string | null
          body_text?: string | null
          cc_emails?: Json | null
          contact_id?: string | null
          created_at?: string | null
          email_account_id?: string
          email_references?: string[] | null
          email_size_bytes?: number | null
          external_id?: string | null
          folder_id?: string | null
          from_email?: string
          from_name?: string | null
          has_attachments?: boolean | null
          id?: string
          in_reply_to?: string | null
          is_draft?: boolean | null
          is_important?: boolean | null
          is_read?: boolean | null
          is_sent?: boolean | null
          is_starred?: boolean | null
          labels?: string[] | null
          last_synced_at?: string | null
          message_id?: string
          priority?: string | null
          received_at?: string | null
          reply_to_email?: string | null
          reply_to_name?: string | null
          sent_at?: string
          snippet?: string | null
          subject?: string | null
          thread_id?: string | null
          to_emails?: Json | null
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "emails_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "emails_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "emails_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "emails_email_account_id_fkey"
            columns: ["email_account_id"]
            isOneToOne: false
            referencedRelation: "email_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "emails_folder_id_fkey"
            columns: ["folder_id"]
            isOneToOne: false
            referencedRelation: "email_folders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "emails_folder_id_fkey"
            columns: ["folder_id"]
            isOneToOne: false
            referencedRelation: "folder_unread_counts"
            referencedColumns: ["folder_id"]
          },
          {
            foreignKeyName: "emails_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "email_thread_summary"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "emails_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "email_threads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "emails_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "emails_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      execution_steps: {
        Row: {
          completed_at: string | null
          created_at: string | null
          error_message: string | null
          execution_id: string
          execution_time: number | null
          id: string
          input_data: Json | null
          node_id: string
          node_type: string
          output_data: Json | null
          started_at: string | null
          status: string
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          error_message?: string | null
          execution_id: string
          execution_time?: number | null
          id?: string
          input_data?: Json | null
          node_id: string
          node_type: string
          output_data?: Json | null
          started_at?: string | null
          status?: string
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          error_message?: string | null
          execution_id?: string
          execution_time?: number | null
          id?: string
          input_data?: Json | null
          node_id?: string
          node_type?: string
          output_data?: Json | null
          started_at?: string | null
          status?: string
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "execution_steps_execution_id_fkey"
            columns: ["execution_id"]
            isOneToOne: false
            referencedRelation: "flow_executions"
            referencedColumns: ["id"]
          },
        ]
      }
      feature_request_votes: {
        Row: {
          created_at: string | null
          feature_request_id: string | null
          id: string
          user_email: string
          workspace_id: string
        }
        Insert: {
          created_at?: string | null
          feature_request_id?: string | null
          id?: string
          user_email: string
          workspace_id: string
        }
        Update: {
          created_at?: string | null
          feature_request_id?: string | null
          id?: string
          user_email?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "feature_request_votes_feature_request_id_fkey"
            columns: ["feature_request_id"]
            isOneToOne: false
            referencedRelation: "feature_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      feature_requests: {
        Row: {
          attachment_url: string | null
          category: string | null
          created_at: string | null
          description: string | null
          feedback: string | null
          id: string
          priority: number | null
          requested_by: string
          status: string | null
          title: string
          updated_at: string | null
          votes: number | null
          workspace_id: string
        }
        Insert: {
          attachment_url?: string | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          feedback?: string | null
          id?: string
          priority?: number | null
          requested_by: string
          status?: string | null
          title: string
          updated_at?: string | null
          votes?: number | null
          workspace_id: string
        }
        Update: {
          attachment_url?: string | null
          category?: string | null
          created_at?: string | null
          description?: string | null
          feedback?: string | null
          id?: string
          priority?: number | null
          requested_by?: string
          status?: string | null
          title?: string
          updated_at?: string | null
          votes?: number | null
          workspace_id?: string
        }
        Relationships: []
      }
      field_mappings: {
        Row: {
          created_at: string | null
          id: string
          mapping_type: Database["public"]["Enums"]["mapping_type"] | null
          mappings: Json
          updated_at: string | null
          webhook_id: string
          workspace_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          mapping_type?: Database["public"]["Enums"]["mapping_type"] | null
          mappings?: Json
          updated_at?: string | null
          webhook_id: string
          workspace_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          mapping_type?: Database["public"]["Enums"]["mapping_type"] | null
          mappings?: Json
          updated_at?: string | null
          webhook_id?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "field_mappings_webhook_id_fkey"
            columns: ["webhook_id"]
            isOneToOne: false
            referencedRelation: "webhooks"
            referencedColumns: ["id"]
          },
        ]
      }
      flow_execution_dlq: {
        Row: {
          contact_id: string
          correlation_id: string | null
          created_at: string | null
          error_message: string | null
          error_type: string | null
          execution_id: string
          flow_id: string
          id: string
          node_id: string
          processed: boolean | null
          processed_at: string | null
          retry_count: number | null
          step_id: string
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          contact_id: string
          correlation_id?: string | null
          created_at?: string | null
          error_message?: string | null
          error_type?: string | null
          execution_id: string
          flow_id: string
          id?: string
          node_id: string
          processed?: boolean | null
          processed_at?: string | null
          retry_count?: number | null
          step_id: string
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          contact_id?: string
          correlation_id?: string | null
          created_at?: string | null
          error_message?: string | null
          error_type?: string | null
          execution_id?: string
          flow_id?: string
          id?: string
          node_id?: string
          processed?: boolean | null
          processed_at?: string | null
          retry_count?: number | null
          step_id?: string
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "flow_execution_dlq_execution_id_fkey"
            columns: ["execution_id"]
            isOneToOne: false
            referencedRelation: "flow_executions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "flow_execution_dlq_flow_id_fkey"
            columns: ["flow_id"]
            isOneToOne: false
            referencedRelation: "flows"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "flow_execution_dlq_step_id_fkey"
            columns: ["step_id"]
            isOneToOne: false
            referencedRelation: "flow_execution_steps"
            referencedColumns: ["id"]
          },
        ]
      }
      flow_execution_steps: {
        Row: {
          completed_at: string | null
          execution_id: string | null
          final_failure: boolean | null
          id: string
          last_retry_at: string | null
          moved_to_dlq: boolean | null
          node_id: string
          node_type: string
          queue_job_id: string | null
          result: Json | null
          retry_count: number | null
          retry_success: boolean | null
          started_at: string | null
          status: string
        }
        Insert: {
          completed_at?: string | null
          execution_id?: string | null
          final_failure?: boolean | null
          id?: string
          last_retry_at?: string | null
          moved_to_dlq?: boolean | null
          node_id: string
          node_type: string
          queue_job_id?: string | null
          result?: Json | null
          retry_count?: number | null
          retry_success?: boolean | null
          started_at?: string | null
          status: string
        }
        Update: {
          completed_at?: string | null
          execution_id?: string | null
          final_failure?: boolean | null
          id?: string
          last_retry_at?: string | null
          moved_to_dlq?: boolean | null
          node_id?: string
          node_type?: string
          queue_job_id?: string | null
          result?: Json | null
          retry_count?: number | null
          retry_success?: boolean | null
          started_at?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "flow_execution_steps_execution_id_fkey"
            columns: ["execution_id"]
            isOneToOne: false
            referencedRelation: "flow_executions"
            referencedColumns: ["id"]
          },
        ]
      }
      flow_executions: {
        Row: {
          completed_at: string | null
          contact_id: string | null
          created_at: string | null
          error_message: string | null
          execution_time: number | null
          flow_id: string | null
          id: string
          metadata: Json | null
          result: Json | null
          source: string | null
          started_at: string | null
          status: string
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          completed_at?: string | null
          contact_id?: string | null
          created_at?: string | null
          error_message?: string | null
          execution_time?: number | null
          flow_id?: string | null
          id?: string
          metadata?: Json | null
          result?: Json | null
          source?: string | null
          started_at?: string | null
          status: string
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          completed_at?: string | null
          contact_id?: string | null
          created_at?: string | null
          error_message?: string | null
          execution_time?: number | null
          flow_id?: string | null
          id?: string
          metadata?: Json | null
          result?: Json | null
          source?: string | null
          started_at?: string | null
          status?: string
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "flow_executions_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "flow_executions_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "flow_executions_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "flow_executions_flow_id_fkey"
            columns: ["flow_id"]
            isOneToOne: false
            referencedRelation: "flows"
            referencedColumns: ["id"]
          },
        ]
      }
      flow_folders: {
        Row: {
          created_at: string | null
          id: string
          name: string
          parent_id: string | null
          updated_at: string | null
          workspace_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          parent_id?: string | null
          updated_at?: string | null
          workspace_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          parent_id?: string | null
          updated_at?: string | null
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "flow_folders_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "flow_folders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "flow_folders_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "flow_folders_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      flow_monitoring_alerts: {
        Row: {
          alert_type: string
          created_at: string | null
          enabled: boolean | null
          flow_id: string | null
          id: string
          last_triggered_at: string | null
          notification_channel: string
          notification_recipients: string | null
          threshold: number
          trigger_count: number | null
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          alert_type: string
          created_at?: string | null
          enabled?: boolean | null
          flow_id?: string | null
          id?: string
          last_triggered_at?: string | null
          notification_channel: string
          notification_recipients?: string | null
          threshold: number
          trigger_count?: number | null
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          alert_type?: string
          created_at?: string | null
          enabled?: boolean | null
          flow_id?: string | null
          id?: string
          last_triggered_at?: string | null
          notification_channel?: string
          notification_recipients?: string | null
          threshold?: number
          trigger_count?: number | null
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "flow_monitoring_alerts_flow_id_fkey"
            columns: ["flow_id"]
            isOneToOne: false
            referencedRelation: "flows"
            referencedColumns: ["id"]
          },
        ]
      }
      flow_revisions: {
        Row: {
          change_description: string | null
          edges: Json | null
          flow_id: string
          id: string
          modified_at: string | null
          modified_by: string | null
          nodes: Json | null
          version: number
          workspace_id: string
        }
        Insert: {
          change_description?: string | null
          edges?: Json | null
          flow_id: string
          id?: string
          modified_at?: string | null
          modified_by?: string | null
          nodes?: Json | null
          version: number
          workspace_id: string
        }
        Update: {
          change_description?: string | null
          edges?: Json | null
          flow_id?: string
          id?: string
          modified_at?: string | null
          modified_by?: string | null
          nodes?: Json | null
          version?: number
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "flow_revisions_flow_id_fkey"
            columns: ["flow_id"]
            isOneToOne: false
            referencedRelation: "flows"
            referencedColumns: ["id"]
          },
        ]
      }
      flow_sequence_executions: {
        Row: {
          completed_at: string | null
          contact_id: string
          created_at: string | null
          id: string
          sequence_id: string
          started_at: string | null
          status: string
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          completed_at?: string | null
          contact_id: string
          created_at?: string | null
          id?: string
          sequence_id: string
          started_at?: string | null
          status?: string
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          completed_at?: string | null
          contact_id?: string
          created_at?: string | null
          id?: string
          sequence_id?: string
          started_at?: string | null
          status?: string
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "flow_sequence_executions_sequence_id_fkey"
            columns: ["sequence_id"]
            isOneToOne: false
            referencedRelation: "flow_sequences"
            referencedColumns: ["id"]
          },
        ]
      }
      flow_sequence_message_jobs: {
        Row: {
          created_at: string | null
          execution_id: string
          id: string
          message_id: string
          message_type: string
          scheduled_sms_job_id: string | null
          scheduled_time: string
          sent_at: string | null
          status: string
          subject: string | null
          trigger_task_id: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          execution_id: string
          id?: string
          message_id: string
          message_type?: string
          scheduled_sms_job_id?: string | null
          scheduled_time: string
          sent_at?: string | null
          status?: string
          subject?: string | null
          trigger_task_id?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          execution_id?: string
          id?: string
          message_id?: string
          message_type?: string
          scheduled_sms_job_id?: string | null
          scheduled_time?: string
          sent_at?: string | null
          status?: string
          subject?: string | null
          trigger_task_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "flow_sequence_message_jobs_execution_id_fkey"
            columns: ["execution_id"]
            isOneToOne: false
            referencedRelation: "flow_sequence_executions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "flow_sequence_message_jobs_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "flow_sequence_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      flow_sequence_messages: {
        Row: {
          created_at: string | null
          id: string
          message_type: string
          order_index: number
          sequence_id: string
          subflow_id: string | null
          subject: string | null
          text: string
          time_unit: string
          time_value: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          message_type?: string
          order_index: number
          sequence_id: string
          subflow_id?: string | null
          subject?: string | null
          text: string
          time_unit: string
          time_value: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          message_type?: string
          order_index?: number
          sequence_id?: string
          subflow_id?: string | null
          subject?: string | null
          text?: string
          time_unit?: string
          time_value?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "flow_sequence_messages_sequence_id_fkey"
            columns: ["sequence_id"]
            isOneToOne: false
            referencedRelation: "flow_sequences"
            referencedColumns: ["id"]
          },
        ]
      }
      flow_sequences: {
        Row: {
          created_at: string | null
          created_by: string | null
          id: string
          name: string
          status: string
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          id?: string
          name: string
          status?: string
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          id?: string
          name?: string
          status?: string
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: []
      }
      flows: {
        Row: {
          created_at: string | null
          edges: Json | null
          folder_id: string | null
          id: string
          name: string
          nodes: Json | null
          updated_at: string | null
          workspace_id: string | null
        }
        Insert: {
          created_at?: string | null
          edges?: Json | null
          folder_id?: string | null
          id?: string
          name: string
          nodes?: Json | null
          updated_at?: string | null
          workspace_id?: string | null
        }
        Update: {
          created_at?: string | null
          edges?: Json | null
          folder_id?: string | null
          id?: string
          name?: string
          nodes?: Json | null
          updated_at?: string | null
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "flows_folder_id_fkey"
            columns: ["folder_id"]
            isOneToOne: false
            referencedRelation: "flow_folders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "flows_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "flows_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      ip_whitelist: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          ip_address: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          ip_address: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          ip_address?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      keyword_rule_logs: {
        Row: {
          contact_id: string
          id: string
          message_id: string
          response_type: string
          rule_id: string
          success: boolean | null
          triggered_at: string | null
          workspace_id: string
        }
        Insert: {
          contact_id: string
          id?: string
          message_id: string
          response_type: string
          rule_id: string
          success?: boolean | null
          triggered_at?: string | null
          workspace_id: string
        }
        Update: {
          contact_id?: string
          id?: string
          message_id?: string
          response_type?: string
          rule_id?: string
          success?: boolean | null
          triggered_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "keyword_rule_logs_rule_id_fkey"
            columns: ["rule_id"]
            isOneToOne: false
            referencedRelation: "keyword_rules"
            referencedColumns: ["id"]
          },
        ]
      }
      keyword_rules: {
        Row: {
          created_at: string | null
          flow_id: string | null
          id: string
          is_active: boolean | null
          keywords: Json
          name: string
          reply_text: string | null
          rule_type: string
          tags: Json | null
          twilio_number_id: string | null
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          created_at?: string | null
          flow_id?: string | null
          id?: string
          is_active?: boolean | null
          keywords: Json
          name: string
          reply_text?: string | null
          rule_type: string
          tags?: Json | null
          twilio_number_id?: string | null
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          created_at?: string | null
          flow_id?: string | null
          id?: string
          is_active?: boolean | null
          keywords?: Json
          name?: string
          reply_text?: string | null
          rule_type?: string
          tags?: Json | null
          twilio_number_id?: string | null
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_keyword_rules_twilio_number"
            columns: ["twilio_number_id"]
            isOneToOne: false
            referencedRelation: "twilio_numbers"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_replying_status: {
        Row: {
          avatar_url: string | null
          board_id: string | null
          display_name: string | null
          id: string
          lead_id: string
          updated_at: string
          user_id: string
          workspace_id: string
        }
        Insert: {
          avatar_url?: string | null
          board_id?: string | null
          display_name?: string | null
          id?: string
          lead_id: string
          updated_at?: string
          user_id: string
          workspace_id: string
        }
        Update: {
          avatar_url?: string | null
          board_id?: string | null
          display_name?: string | null
          id?: string
          lead_id?: string
          updated_at?: string
          user_id?: string
          workspace_id?: string
        }
        Relationships: []
      }
      livechat_board: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          updated_at: string
          workspace_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          updated_at?: string
          workspace_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "livechat_board_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "livechat_board_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      livechat_board_assignments: {
        Row: {
          assignment_type: string
          contact_id: string | null
          created_at: string | null
          created_by: string | null
          id: string
          livechat_board_id: string
          status: string
          updated_at: string | null
          user_id: string
          workspace_id: string
        }
        Insert: {
          assignment_type?: string
          contact_id?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          livechat_board_id: string
          status?: string
          updated_at?: string | null
          user_id: string
          workspace_id: string
        }
        Update: {
          assignment_type?: string
          contact_id?: string | null
          created_at?: string | null
          created_by?: string | null
          id?: string
          livechat_board_id?: string
          status?: string
          updated_at?: string | null
          user_id?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "livechat_board_assignments_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "livechat_board_assignments_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "livechat_board_assignments_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "livechat_board_assignments_livechat_board_id_fkey"
            columns: ["livechat_board_id"]
            isOneToOne: false
            referencedRelation: "livechat_board"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "livechat_board_assignments_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "livechat_board_assignments_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      livechat_board_column: {
        Row: {
          board_id: string
          created_at: string
          id: string
          lead_status: string | null
          name: string
          position: number
          updated_at: string
          workspace_id: string
        }
        Insert: {
          board_id: string
          created_at?: string
          id?: string
          lead_status?: string | null
          name: string
          position?: number
          updated_at?: string
          workspace_id: string
        }
        Update: {
          board_id?: string
          created_at?: string
          id?: string
          lead_status?: string | null
          name?: string
          position?: number
          updated_at?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "livechat_board_column_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "livechat_board"
            referencedColumns: ["id"]
          },
        ]
      }
      livechat_contact_assignments: {
        Row: {
          contact_id: string
          created_at: string | null
          created_by: string | null
          id: string
          status: string | null
          user_id: string
          workspace_id: string
        }
        Insert: {
          contact_id: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          status?: string | null
          user_id: string
          workspace_id: string
        }
        Update: {
          contact_id?: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          status?: string | null
          user_id?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "livechat_contact_assignments_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "livechat_contact_assignments_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "livechat_contact_assignments_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
        ]
      }
      livechat_email_messages: {
        Row: {
          attachments: Json | null
          bcc: string[] | null
          cc: string[] | null
          message_id: string
          subject: string | null
        }
        Insert: {
          attachments?: Json | null
          bcc?: string[] | null
          cc?: string[] | null
          message_id: string
          subject?: string | null
        }
        Update: {
          attachments?: Json | null
          bcc?: string[] | null
          cc?: string[] | null
          message_id?: string
          subject?: string | null
        }
        Relationships: []
      }
      livechat_internal_notes: {
        Row: {
          mentioned_users: string[] | null
          message_id: string
          visibility: string | null
        }
        Insert: {
          mentioned_users?: string[] | null
          message_id: string
          visibility?: string | null
        }
        Update: {
          mentioned_users?: string[] | null
          message_id?: string
          visibility?: string | null
        }
        Relationships: []
      }
      livechat_messages: {
        Row: {
          ai_log_id: string | null
          archived: boolean | null
          board_id: string | null
          body: string
          chat_url: string | null
          column_id: string | null
          contact_id: string | null
          conversation_id: string | null
          created_at: string
          direction: Database["public"]["Enums"]["message_direction"] | null
          id: string
          is_ai_generated: boolean | null
          is_internal: boolean | null
          is_read: boolean | null
          media_paths: Json | null
          media_urls: Json | null
          message_type: string | null
          metadata: Json | null
          msg_type: string
          parent_id: string | null
          sender: string
          status: string | null
          subject: string | null
          thread_id: string | null
          twilio_number: string | null
          twilio_sid: string | null
          updated_at: string | null
          user_avatar: string | null
          user_name: string | null
          workspace_id: string
        }
        Insert: {
          ai_log_id?: string | null
          archived?: boolean | null
          board_id?: string | null
          body: string
          chat_url?: string | null
          column_id?: string | null
          contact_id?: string | null
          conversation_id?: string | null
          created_at?: string
          direction?: Database["public"]["Enums"]["message_direction"] | null
          id?: string
          is_ai_generated?: boolean | null
          is_internal?: boolean | null
          is_read?: boolean | null
          media_paths?: Json | null
          media_urls?: Json | null
          message_type?: string | null
          metadata?: Json | null
          msg_type?: string
          parent_id?: string | null
          sender: string
          status?: string | null
          subject?: string | null
          thread_id?: string | null
          twilio_number?: string | null
          twilio_sid?: string | null
          updated_at?: string | null
          user_avatar?: string | null
          user_name?: string | null
          workspace_id: string
        }
        Update: {
          ai_log_id?: string | null
          archived?: boolean | null
          board_id?: string | null
          body?: string
          chat_url?: string | null
          column_id?: string | null
          contact_id?: string | null
          conversation_id?: string | null
          created_at?: string
          direction?: Database["public"]["Enums"]["message_direction"] | null
          id?: string
          is_ai_generated?: boolean | null
          is_internal?: boolean | null
          is_read?: boolean | null
          media_paths?: Json | null
          media_urls?: Json | null
          message_type?: string | null
          metadata?: Json | null
          msg_type?: string
          parent_id?: string | null
          sender?: string
          status?: string | null
          subject?: string | null
          thread_id?: string | null
          twilio_number?: string | null
          twilio_sid?: string | null
          updated_at?: string | null
          user_avatar?: string | null
          user_name?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "livechat_messages_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "livechat_board"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "livechat_messages_column_id_fkey"
            columns: ["column_id"]
            isOneToOne: false
            referencedRelation: "livechat_board_column"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "livechat_messages_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "livechat_messages_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "livechat_messages_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
        ]
      }
      livechat_messages_2025_04: {
        Row: {
          ai_log_id: string | null
          archived: boolean | null
          board_id: string | null
          body: string
          chat_url: string | null
          column_id: string | null
          contact_id: string | null
          conversation_id: string | null
          created_at: string
          direction: Database["public"]["Enums"]["message_direction"] | null
          id: string
          is_ai_generated: boolean | null
          is_internal: boolean | null
          is_read: boolean | null
          media_paths: Json | null
          media_urls: Json | null
          message_type: string | null
          metadata: Json | null
          msg_type: string
          parent_id: string | null
          sender: string
          status: string | null
          subject: string | null
          thread_id: string | null
          twilio_number: string | null
          twilio_sid: string | null
          updated_at: string | null
          user_avatar: string | null
          user_name: string | null
          workspace_id: string
        }
        Insert: {
          ai_log_id?: string | null
          archived?: boolean | null
          board_id?: string | null
          body: string
          chat_url?: string | null
          column_id?: string | null
          contact_id?: string | null
          conversation_id?: string | null
          created_at?: string
          direction?: Database["public"]["Enums"]["message_direction"] | null
          id?: string
          is_ai_generated?: boolean | null
          is_internal?: boolean | null
          is_read?: boolean | null
          media_paths?: Json | null
          media_urls?: Json | null
          message_type?: string | null
          metadata?: Json | null
          msg_type?: string
          parent_id?: string | null
          sender: string
          status?: string | null
          subject?: string | null
          thread_id?: string | null
          twilio_number?: string | null
          twilio_sid?: string | null
          updated_at?: string | null
          user_avatar?: string | null
          user_name?: string | null
          workspace_id: string
        }
        Update: {
          ai_log_id?: string | null
          archived?: boolean | null
          board_id?: string | null
          body?: string
          chat_url?: string | null
          column_id?: string | null
          contact_id?: string | null
          conversation_id?: string | null
          created_at?: string
          direction?: Database["public"]["Enums"]["message_direction"] | null
          id?: string
          is_ai_generated?: boolean | null
          is_internal?: boolean | null
          is_read?: boolean | null
          media_paths?: Json | null
          media_urls?: Json | null
          message_type?: string | null
          metadata?: Json | null
          msg_type?: string
          parent_id?: string | null
          sender?: string
          status?: string | null
          subject?: string | null
          thread_id?: string | null
          twilio_number?: string | null
          twilio_sid?: string | null
          updated_at?: string | null
          user_avatar?: string | null
          user_name?: string | null
          workspace_id?: string
        }
        Relationships: []
      }
      livechat_messages_2025_05: {
        Row: {
          ai_log_id: string | null
          archived: boolean | null
          board_id: string | null
          body: string
          chat_url: string | null
          column_id: string | null
          contact_id: string | null
          conversation_id: string | null
          created_at: string
          direction: Database["public"]["Enums"]["message_direction"] | null
          id: string
          is_ai_generated: boolean | null
          is_internal: boolean | null
          is_read: boolean | null
          media_paths: Json | null
          media_urls: Json | null
          message_type: string | null
          metadata: Json | null
          msg_type: string
          parent_id: string | null
          sender: string
          status: string | null
          subject: string | null
          thread_id: string | null
          twilio_number: string | null
          twilio_sid: string | null
          updated_at: string | null
          user_avatar: string | null
          user_name: string | null
          workspace_id: string
        }
        Insert: {
          ai_log_id?: string | null
          archived?: boolean | null
          board_id?: string | null
          body: string
          chat_url?: string | null
          column_id?: string | null
          contact_id?: string | null
          conversation_id?: string | null
          created_at?: string
          direction?: Database["public"]["Enums"]["message_direction"] | null
          id?: string
          is_ai_generated?: boolean | null
          is_internal?: boolean | null
          is_read?: boolean | null
          media_paths?: Json | null
          media_urls?: Json | null
          message_type?: string | null
          metadata?: Json | null
          msg_type?: string
          parent_id?: string | null
          sender: string
          status?: string | null
          subject?: string | null
          thread_id?: string | null
          twilio_number?: string | null
          twilio_sid?: string | null
          updated_at?: string | null
          user_avatar?: string | null
          user_name?: string | null
          workspace_id: string
        }
        Update: {
          ai_log_id?: string | null
          archived?: boolean | null
          board_id?: string | null
          body?: string
          chat_url?: string | null
          column_id?: string | null
          contact_id?: string | null
          conversation_id?: string | null
          created_at?: string
          direction?: Database["public"]["Enums"]["message_direction"] | null
          id?: string
          is_ai_generated?: boolean | null
          is_internal?: boolean | null
          is_read?: boolean | null
          media_paths?: Json | null
          media_urls?: Json | null
          message_type?: string | null
          metadata?: Json | null
          msg_type?: string
          parent_id?: string | null
          sender?: string
          status?: string | null
          subject?: string | null
          thread_id?: string | null
          twilio_number?: string | null
          twilio_sid?: string | null
          updated_at?: string | null
          user_avatar?: string | null
          user_name?: string | null
          workspace_id?: string
        }
        Relationships: []
      }
      livechat_messages_2025_06: {
        Row: {
          ai_log_id: string | null
          archived: boolean | null
          board_id: string | null
          body: string
          chat_url: string | null
          column_id: string | null
          contact_id: string | null
          conversation_id: string | null
          created_at: string
          direction: Database["public"]["Enums"]["message_direction"] | null
          id: string
          is_ai_generated: boolean | null
          is_internal: boolean | null
          is_read: boolean | null
          media_paths: Json | null
          media_urls: Json | null
          message_type: string | null
          metadata: Json | null
          msg_type: string
          parent_id: string | null
          sender: string
          status: string | null
          subject: string | null
          thread_id: string | null
          twilio_number: string | null
          twilio_sid: string | null
          updated_at: string | null
          user_avatar: string | null
          user_name: string | null
          workspace_id: string
        }
        Insert: {
          ai_log_id?: string | null
          archived?: boolean | null
          board_id?: string | null
          body: string
          chat_url?: string | null
          column_id?: string | null
          contact_id?: string | null
          conversation_id?: string | null
          created_at?: string
          direction?: Database["public"]["Enums"]["message_direction"] | null
          id?: string
          is_ai_generated?: boolean | null
          is_internal?: boolean | null
          is_read?: boolean | null
          media_paths?: Json | null
          media_urls?: Json | null
          message_type?: string | null
          metadata?: Json | null
          msg_type?: string
          parent_id?: string | null
          sender: string
          status?: string | null
          subject?: string | null
          thread_id?: string | null
          twilio_number?: string | null
          twilio_sid?: string | null
          updated_at?: string | null
          user_avatar?: string | null
          user_name?: string | null
          workspace_id: string
        }
        Update: {
          ai_log_id?: string | null
          archived?: boolean | null
          board_id?: string | null
          body?: string
          chat_url?: string | null
          column_id?: string | null
          contact_id?: string | null
          conversation_id?: string | null
          created_at?: string
          direction?: Database["public"]["Enums"]["message_direction"] | null
          id?: string
          is_ai_generated?: boolean | null
          is_internal?: boolean | null
          is_read?: boolean | null
          media_paths?: Json | null
          media_urls?: Json | null
          message_type?: string | null
          metadata?: Json | null
          msg_type?: string
          parent_id?: string | null
          sender?: string
          status?: string | null
          subject?: string | null
          thread_id?: string | null
          twilio_number?: string | null
          twilio_sid?: string | null
          updated_at?: string | null
          user_avatar?: string | null
          user_name?: string | null
          workspace_id?: string
        }
        Relationships: []
      }
      livechat_messages_2025_07: {
        Row: {
          ai_log_id: string | null
          archived: boolean | null
          board_id: string | null
          body: string
          chat_url: string | null
          column_id: string | null
          contact_id: string | null
          conversation_id: string | null
          created_at: string
          direction: Database["public"]["Enums"]["message_direction"] | null
          id: string
          is_ai_generated: boolean | null
          is_internal: boolean | null
          is_read: boolean | null
          media_paths: Json | null
          media_urls: Json | null
          message_type: string | null
          metadata: Json | null
          msg_type: string
          parent_id: string | null
          sender: string
          status: string | null
          subject: string | null
          thread_id: string | null
          twilio_number: string | null
          twilio_sid: string | null
          updated_at: string | null
          user_avatar: string | null
          user_name: string | null
          workspace_id: string
        }
        Insert: {
          ai_log_id?: string | null
          archived?: boolean | null
          board_id?: string | null
          body: string
          chat_url?: string | null
          column_id?: string | null
          contact_id?: string | null
          conversation_id?: string | null
          created_at?: string
          direction?: Database["public"]["Enums"]["message_direction"] | null
          id?: string
          is_ai_generated?: boolean | null
          is_internal?: boolean | null
          is_read?: boolean | null
          media_paths?: Json | null
          media_urls?: Json | null
          message_type?: string | null
          metadata?: Json | null
          msg_type?: string
          parent_id?: string | null
          sender: string
          status?: string | null
          subject?: string | null
          thread_id?: string | null
          twilio_number?: string | null
          twilio_sid?: string | null
          updated_at?: string | null
          user_avatar?: string | null
          user_name?: string | null
          workspace_id: string
        }
        Update: {
          ai_log_id?: string | null
          archived?: boolean | null
          board_id?: string | null
          body?: string
          chat_url?: string | null
          column_id?: string | null
          contact_id?: string | null
          conversation_id?: string | null
          created_at?: string
          direction?: Database["public"]["Enums"]["message_direction"] | null
          id?: string
          is_ai_generated?: boolean | null
          is_internal?: boolean | null
          is_read?: boolean | null
          media_paths?: Json | null
          media_urls?: Json | null
          message_type?: string | null
          metadata?: Json | null
          msg_type?: string
          parent_id?: string | null
          sender?: string
          status?: string | null
          subject?: string | null
          thread_id?: string | null
          twilio_number?: string | null
          twilio_sid?: string | null
          updated_at?: string | null
          user_avatar?: string | null
          user_name?: string | null
          workspace_id?: string
        }
        Relationships: []
      }
      livechat_messages_2025_08: {
        Row: {
          ai_log_id: string | null
          archived: boolean | null
          board_id: string | null
          body: string
          chat_url: string | null
          column_id: string | null
          contact_id: string | null
          conversation_id: string | null
          created_at: string
          direction: Database["public"]["Enums"]["message_direction"] | null
          id: string
          is_ai_generated: boolean | null
          is_internal: boolean | null
          is_read: boolean | null
          media_paths: Json | null
          media_urls: Json | null
          message_type: string | null
          metadata: Json | null
          msg_type: string
          parent_id: string | null
          sender: string
          status: string | null
          subject: string | null
          thread_id: string | null
          twilio_number: string | null
          twilio_sid: string | null
          updated_at: string | null
          user_avatar: string | null
          user_name: string | null
          workspace_id: string
        }
        Insert: {
          ai_log_id?: string | null
          archived?: boolean | null
          board_id?: string | null
          body: string
          chat_url?: string | null
          column_id?: string | null
          contact_id?: string | null
          conversation_id?: string | null
          created_at?: string
          direction?: Database["public"]["Enums"]["message_direction"] | null
          id?: string
          is_ai_generated?: boolean | null
          is_internal?: boolean | null
          is_read?: boolean | null
          media_paths?: Json | null
          media_urls?: Json | null
          message_type?: string | null
          metadata?: Json | null
          msg_type?: string
          parent_id?: string | null
          sender: string
          status?: string | null
          subject?: string | null
          thread_id?: string | null
          twilio_number?: string | null
          twilio_sid?: string | null
          updated_at?: string | null
          user_avatar?: string | null
          user_name?: string | null
          workspace_id: string
        }
        Update: {
          ai_log_id?: string | null
          archived?: boolean | null
          board_id?: string | null
          body?: string
          chat_url?: string | null
          column_id?: string | null
          contact_id?: string | null
          conversation_id?: string | null
          created_at?: string
          direction?: Database["public"]["Enums"]["message_direction"] | null
          id?: string
          is_ai_generated?: boolean | null
          is_internal?: boolean | null
          is_read?: boolean | null
          media_paths?: Json | null
          media_urls?: Json | null
          message_type?: string | null
          metadata?: Json | null
          msg_type?: string
          parent_id?: string | null
          sender?: string
          status?: string | null
          subject?: string | null
          thread_id?: string | null
          twilio_number?: string | null
          twilio_sid?: string | null
          updated_at?: string | null
          user_avatar?: string | null
          user_name?: string | null
          workspace_id?: string
        }
        Relationships: []
      }
      message_events: {
        Row: {
          campaign_id: string
          contact_id: string
          event_data: Json | null
          event_type: string
          id: string
          message_id: string
          occurred_at: string | null
        }
        Insert: {
          campaign_id: string
          contact_id: string
          event_data?: Json | null
          event_type: string
          id?: string
          message_id: string
          occurred_at?: string | null
        }
        Update: {
          campaign_id?: string
          contact_id?: string
          event_data?: Json | null
          event_type?: string
          id?: string
          message_id?: string
          occurred_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "message_events_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaign_stats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "message_events_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "message_events_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "message_events_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "message_events_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "message_events_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "campaign_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      message_sequences: {
        Row: {
          created_at: string | null
          id: string
          name: string
          status: string
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          status?: string
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          status?: string
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: []
      }
      message_templates: {
        Row: {
          content: string
          created_at: string | null
          id: string
          name: string
          updated_at: string | null
          workspace_id: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          name: string
          updated_at?: string | null
          workspace_id?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          name?: string
          updated_at?: string | null
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "message_templates_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "message_templates_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          body: string
          contact_id: string | null
          created_at: string | null
          direction: string
          id: string
          is_demo: boolean | null
          message_type: string
          metadata: Json | null
          status: string
          twilio_sid: string | null
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          body: string
          contact_id?: string | null
          created_at?: string | null
          direction: string
          id?: string
          is_demo?: boolean | null
          message_type?: string
          metadata?: Json | null
          status: string
          twilio_sid?: string | null
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          body?: string
          contact_id?: string | null
          created_at?: string | null
          direction?: string
          id?: string
          is_demo?: boolean | null
          message_type?: string
          metadata?: Json | null
          status?: string
          twilio_sid?: string | null
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "messages_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
        ]
      }
      messages_backup: {
        Row: {
          contact_id: string | null
          content: string | null
          created_at: string | null
          created_by: string | null
          direction: string | null
          embedding: string | null
          id: string | null
          message_type: string | null
          metadata: Json | null
          sentiment: number | null
          status: string | null
          twilio_sid: string | null
          updated_at: string | null
          workspace_id: string | null
        }
        Insert: {
          contact_id?: string | null
          content?: string | null
          created_at?: string | null
          created_by?: string | null
          direction?: string | null
          embedding?: string | null
          id?: string | null
          message_type?: string | null
          metadata?: Json | null
          sentiment?: number | null
          status?: string | null
          twilio_sid?: string | null
          updated_at?: string | null
          workspace_id?: string | null
        }
        Update: {
          contact_id?: string | null
          content?: string | null
          created_at?: string | null
          created_by?: string | null
          direction?: string | null
          embedding?: string | null
          id?: string | null
          message_type?: string | null
          metadata?: Json | null
          sentiment?: number | null
          status?: string | null
          twilio_sid?: string | null
          updated_at?: string | null
          workspace_id?: string | null
        }
        Relationships: []
      }
      note_folders: {
        Row: {
          created_at: string | null
          id: string
          name: string
          parent_id: string | null
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          parent_id?: string | null
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          parent_id?: string | null
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "note_folders_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "note_folders"
            referencedColumns: ["id"]
          },
        ]
      }
      notes: {
        Row: {
          content: string | null
          created_at: string | null
          folder_id: string | null
          id: string
          tags: string[] | null
          title: string | null
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          folder_id?: string | null
          id?: string
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          content?: string | null
          created_at?: string | null
          folder_id?: string | null
          id?: string
          tags?: string[] | null
          title?: string | null
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notes_folder_id_fkey"
            columns: ["folder_id"]
            isOneToOne: false
            referencedRelation: "note_folders"
            referencedColumns: ["id"]
          },
        ]
      }
      onboarding_responses: {
        Row: {
          accepted_terms: boolean | null
          accepted_updates: boolean | null
          company_industry: string | null
          company_name: string | null
          company_size: string | null
          created_at: string
          crm_experience: string | null
          custom_requirements: string | null
          expected_users: string | null
          full_name: string | null
          goals: string[] | null
          id: string
          job_title: string | null
          marketing_preferences: Json | null
          phone_number: string | null
          preferred_contact_method: string | null
          response: Json | null
          step_id: string | null
          terms_accepted_at: string | null
          timezone: string | null
          training_needs: string[] | null
          updated_at: string
          updates_accepted_at: string | null
          user_id: string | null
          watched_intro: boolean | null
          workspace_id: string | null
        }
        Insert: {
          accepted_terms?: boolean | null
          accepted_updates?: boolean | null
          company_industry?: string | null
          company_name?: string | null
          company_size?: string | null
          created_at?: string
          crm_experience?: string | null
          custom_requirements?: string | null
          expected_users?: string | null
          full_name?: string | null
          goals?: string[] | null
          id?: string
          job_title?: string | null
          marketing_preferences?: Json | null
          phone_number?: string | null
          preferred_contact_method?: string | null
          response?: Json | null
          step_id?: string | null
          terms_accepted_at?: string | null
          timezone?: string | null
          training_needs?: string[] | null
          updated_at?: string
          updates_accepted_at?: string | null
          user_id?: string | null
          watched_intro?: boolean | null
          workspace_id?: string | null
        }
        Update: {
          accepted_terms?: boolean | null
          accepted_updates?: boolean | null
          company_industry?: string | null
          company_name?: string | null
          company_size?: string | null
          created_at?: string
          crm_experience?: string | null
          custom_requirements?: string | null
          expected_users?: string | null
          full_name?: string | null
          goals?: string[] | null
          id?: string
          job_title?: string | null
          marketing_preferences?: Json | null
          phone_number?: string | null
          preferred_contact_method?: string | null
          response?: Json | null
          step_id?: string | null
          terms_accepted_at?: string | null
          timezone?: string | null
          training_needs?: string[] | null
          updated_at?: string
          updates_accepted_at?: string | null
          user_id?: string | null
          watched_intro?: boolean | null
          workspace_id?: string | null
        }
        Relationships: []
      }
      onboarding_status: {
        Row: {
          created_at: string
          id: string
          is_completed: boolean | null
          updated_at: string
          user_id: string | null
          workspace_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_completed?: boolean | null
          updated_at?: string
          user_id?: string | null
          workspace_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_completed?: boolean | null
          updated_at?: string
          user_id?: string | null
          workspace_id?: string | null
        }
        Relationships: []
      }
      opportunities: {
        Row: {
          amount: number | null
          closed_at: string | null
          company_id: string | null
          contact_id: string | null
          created_at: string | null
          created_by: string
          currency: string | null
          description: string | null
          expected_close_date: string | null
          id: string
          is_closed: boolean | null
          is_won: boolean | null
          priority: string | null
          probability: number | null
          stage_id: string | null
          tags: Json | null
          title: string
          updated_at: string | null
          updated_by: string | null
          workspace_id: string
        }
        Insert: {
          amount?: number | null
          closed_at?: string | null
          company_id?: string | null
          contact_id?: string | null
          created_at?: string | null
          created_by: string
          currency?: string | null
          description?: string | null
          expected_close_date?: string | null
          id?: string
          is_closed?: boolean | null
          is_won?: boolean | null
          priority?: string | null
          probability?: number | null
          stage_id?: string | null
          tags?: Json | null
          title: string
          updated_at?: string | null
          updated_by?: string | null
          workspace_id: string
        }
        Update: {
          amount?: number | null
          closed_at?: string | null
          company_id?: string | null
          contact_id?: string | null
          created_at?: string | null
          created_by?: string
          currency?: string | null
          description?: string | null
          expected_close_date?: string | null
          id?: string
          is_closed?: boolean | null
          is_won?: boolean | null
          priority?: string | null
          probability?: number | null
          stage_id?: string | null
          tags?: Json | null
          title?: string
          updated_at?: string | null
          updated_by?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_opportunities_stage"
            columns: ["stage_id"]
            isOneToOne: false
            referencedRelation: "opportunity_stages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "opportunities_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "opportunities_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "opportunities_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "opportunities_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
        ]
      }
      opportunity_activities: {
        Row: {
          activity_type: string
          assigned_to: string | null
          completed_at: string | null
          created_at: string | null
          created_by: string
          description: string
          due_date: string | null
          id: string
          is_completed: boolean | null
          opportunity_id: string
          updated_at: string | null
        }
        Insert: {
          activity_type: string
          assigned_to?: string | null
          completed_at?: string | null
          created_at?: string | null
          created_by: string
          description: string
          due_date?: string | null
          id?: string
          is_completed?: boolean | null
          opportunity_id: string
          updated_at?: string | null
        }
        Update: {
          activity_type?: string
          assigned_to?: string | null
          completed_at?: string | null
          created_at?: string | null
          created_by?: string
          description?: string
          due_date?: string | null
          id?: string
          is_completed?: boolean | null
          opportunity_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "opportunity_activities_opportunity_id_fkey"
            columns: ["opportunity_id"]
            isOneToOne: false
            referencedRelation: "opportunities"
            referencedColumns: ["id"]
          },
        ]
      }
      opportunity_appointments: {
        Row: {
          appointment_id: string
          created_at: string | null
          created_by: string
          id: string
          opportunity_id: string
        }
        Insert: {
          appointment_id: string
          created_at?: string | null
          created_by: string
          id?: string
          opportunity_id: string
        }
        Update: {
          appointment_id?: string
          created_at?: string | null
          created_by?: string
          id?: string
          opportunity_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "opportunity_appointments_appointment_id_fkey"
            columns: ["appointment_id"]
            isOneToOne: false
            referencedRelation: "appointments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "opportunity_appointments_opportunity_id_fkey"
            columns: ["opportunity_id"]
            isOneToOne: false
            referencedRelation: "opportunities"
            referencedColumns: ["id"]
          },
        ]
      }
      opportunity_history: {
        Row: {
          changed_at: string | null
          changed_by: string
          field_name: string
          id: string
          new_value: string | null
          old_value: string | null
          opportunity_id: string
        }
        Insert: {
          changed_at?: string | null
          changed_by: string
          field_name: string
          id?: string
          new_value?: string | null
          old_value?: string | null
          opportunity_id: string
        }
        Update: {
          changed_at?: string | null
          changed_by?: string
          field_name?: string
          id?: string
          new_value?: string | null
          old_value?: string | null
          opportunity_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "opportunity_history_opportunity_id_fkey"
            columns: ["opportunity_id"]
            isOneToOne: false
            referencedRelation: "opportunities"
            referencedColumns: ["id"]
          },
        ]
      }
      opportunity_stages: {
        Row: {
          color: string | null
          created_at: string | null
          created_by: string | null
          default_probability: number | null
          description: string | null
          id: string
          is_lost_stage: boolean | null
          is_won_stage: boolean | null
          name: string
          pipeline_id: string
          position: number
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          created_by?: string | null
          default_probability?: number | null
          description?: string | null
          id?: string
          is_lost_stage?: boolean | null
          is_won_stage?: boolean | null
          name: string
          pipeline_id: string
          position: number
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          color?: string | null
          created_at?: string | null
          created_by?: string | null
          default_probability?: number | null
          description?: string | null
          id?: string
          is_lost_stage?: boolean | null
          is_won_stage?: boolean | null
          name?: string
          pipeline_id?: string
          position?: number
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "opportunity_stages_pipeline_id_fkey"
            columns: ["pipeline_id"]
            isOneToOne: false
            referencedRelation: "pipelines"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_signups: {
        Row: {
          created_at: string | null
          device_fingerprint: string | null
          id: string
          ip_address: string | null
          metadata: Json | null
          phone_number: string | null
          signup_date: string | null
          status: string | null
          twilio_sid: string | null
          updated_at: string | null
          user_agent: string | null
          user_id: string | null
          workspace_id: string | null
        }
        Insert: {
          created_at?: string | null
          device_fingerprint?: string | null
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          phone_number?: string | null
          signup_date?: string | null
          status?: string | null
          twilio_sid?: string | null
          updated_at?: string | null
          user_agent?: string | null
          user_id?: string | null
          workspace_id?: string | null
        }
        Update: {
          created_at?: string | null
          device_fingerprint?: string | null
          id?: string
          ip_address?: string | null
          metadata?: Json | null
          phone_number?: string | null
          signup_date?: string | null
          status?: string | null
          twilio_sid?: string | null
          updated_at?: string | null
          user_agent?: string | null
          user_id?: string | null
          workspace_id?: string | null
        }
        Relationships: []
      }
      partner_twilio_config: {
        Row: {
          account_sid: string
          auth_token: string
          created_at: string | null
          id: string
          is_active: boolean | null
          max_numbers_per_fingerprint: number | null
          updated_at: string | null
        }
        Insert: {
          account_sid: string
          auth_token: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          max_numbers_per_fingerprint?: number | null
          updated_at?: string | null
        }
        Update: {
          account_sid?: string
          auth_token?: string
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          max_numbers_per_fingerprint?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      phone_numbers: {
        Row: {
          created_at: string
          id: string
          phone_number: string
          provider: string
          settings: Json | null
          status: string
          updated_at: string
          workspace_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          phone_number: string
          provider: string
          settings?: Json | null
          status: string
          updated_at?: string
          workspace_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          phone_number?: string
          provider?: string
          settings?: Json | null
          status?: string
          updated_at?: string
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "phone_numbers_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "phone_numbers_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      pipelines: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          is_active: boolean | null
          is_default: boolean | null
          name: string
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          is_default?: boolean | null
          name: string
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          is_default?: boolean | null
          name?: string
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pipelines_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "pipelines_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      recurring_message_logs: {
        Row: {
          body: string
          created_at: string
          id: string
          metadata: Json | null
          recurring_id: string
          status: string
          to_phone: string
          twilio_sid: string | null
          workspace_id: string
        }
        Insert: {
          body: string
          created_at?: string
          id?: string
          metadata?: Json | null
          recurring_id: string
          status: string
          to_phone: string
          twilio_sid?: string | null
          workspace_id: string
        }
        Update: {
          body?: string
          created_at?: string
          id?: string
          metadata?: Json | null
          recurring_id?: string
          status?: string
          to_phone?: string
          twilio_sid?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "recurring_message_logs_recurring_id_fkey"
            columns: ["recurring_id"]
            isOneToOne: false
            referencedRelation: "recurring_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      recurring_messages: {
        Row: {
          body: string
          created_at: string
          cron_expression: string
          id: string
          media_url: string | null
          metadata: Json | null
          name: string
          status: string
          timezone: string
          to_phone: string
          updated_at: string
          workspace_id: string
        }
        Insert: {
          body: string
          created_at?: string
          cron_expression: string
          id?: string
          media_url?: string | null
          metadata?: Json | null
          name: string
          status?: string
          timezone?: string
          to_phone: string
          updated_at?: string
          workspace_id: string
        }
        Update: {
          body?: string
          created_at?: string
          cron_expression?: string
          id?: string
          media_url?: string | null
          metadata?: Json | null
          name?: string
          status?: string
          timezone?: string
          to_phone?: string
          updated_at?: string
          workspace_id?: string
        }
        Relationships: []
      }
      scheduled_messages: {
        Row: {
          contact_id: string
          content: string
          created_at: string | null
          id: string
          last_sent_at: string | null
          message_type: string
          metadata: Json | null
          next_send_at: string | null
          schedule_config: Json
          schedule_type: string
          status: string
          subject: string | null
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          contact_id: string
          content: string
          created_at?: string | null
          id?: string
          last_sent_at?: string | null
          message_type?: string
          metadata?: Json | null
          next_send_at?: string | null
          schedule_config: Json
          schedule_type: string
          status?: string
          subject?: string | null
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          contact_id?: string
          content?: string
          created_at?: string | null
          id?: string
          last_sent_at?: string | null
          message_type?: string
          metadata?: Json | null
          next_send_at?: string | null
          schedule_config?: Json
          schedule_type?: string
          status?: string
          subject?: string | null
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "scheduled_messages_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "scheduled_messages_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "scheduled_messages_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
        ]
      }
      scheduled_sms_jobs: {
        Row: {
          body: string
          contact_id: string | null
          created_at: string | null
          id: string
          media_url: string | null
          metadata: Json | null
          processed_at: string | null
          scheduled_time: string
          status: string | null
          timezone: string | null
          to_phone: string
          twilio_sid: string | null
          workspace_id: string
        }
        Insert: {
          body: string
          contact_id?: string | null
          created_at?: string | null
          id?: string
          media_url?: string | null
          metadata?: Json | null
          processed_at?: string | null
          scheduled_time: string
          status?: string | null
          timezone?: string | null
          to_phone: string
          twilio_sid?: string | null
          workspace_id: string
        }
        Update: {
          body?: string
          contact_id?: string | null
          created_at?: string | null
          id?: string
          media_url?: string | null
          metadata?: Json | null
          processed_at?: string | null
          scheduled_time?: string
          status?: string | null
          timezone?: string | null
          to_phone?: string
          twilio_sid?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "scheduled_sms_jobs_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "scheduled_sms_jobs_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "scheduled_sms_jobs_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
        ]
      }
      segment_conditions: {
        Row: {
          board_id: string
          condition_order: number | null
          created_at: string | null
          field: string
          id: string
          is_metadata_field: boolean | null
          json_path: string | null
          operator: string
          segment_id: string | null
          updated_at: string | null
          value: string | null
          value_type: string
        }
        Insert: {
          board_id: string
          condition_order?: number | null
          created_at?: string | null
          field: string
          id?: string
          is_metadata_field?: boolean | null
          json_path?: string | null
          operator: string
          segment_id?: string | null
          updated_at?: string | null
          value?: string | null
          value_type?: string
        }
        Update: {
          board_id?: string
          condition_order?: number | null
          created_at?: string | null
          field?: string
          id?: string
          is_metadata_field?: boolean | null
          json_path?: string | null
          operator?: string
          segment_id?: string | null
          updated_at?: string | null
          value?: string | null
          value_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "segment_conditions_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "board_performance_ranking"
            referencedColumns: ["board_id"]
          },
          {
            foreignKeyName: "segment_conditions_board_id_fkey"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "boards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "segment_conditions_segment_id_fkey"
            columns: ["segment_id"]
            isOneToOne: false
            referencedRelation: "audience_segments"
            referencedColumns: ["id"]
          },
        ]
      }
      segment_contacts: {
        Row: {
          added_at: string | null
          contact_id: string
          segment_id: string
        }
        Insert: {
          added_at?: string | null
          contact_id: string
          segment_id: string
        }
        Update: {
          added_at?: string | null
          contact_id?: string
          segment_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "segment_contacts_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "segment_contacts_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "segment_contacts_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "segment_contacts_segment_id_fkey"
            columns: ["segment_id"]
            isOneToOne: false
            referencedRelation: "audience_segments"
            referencedColumns: ["id"]
          },
        ]
      }
      segment_processing_jobs: {
        Row: {
          attempts: number | null
          completed_at: string | null
          created_at: string | null
          error_message: string | null
          id: string
          max_attempts: number | null
          progress: number | null
          segment_id: string | null
          started_at: string | null
          status: Database["public"]["Enums"]["job_status"] | null
        }
        Insert: {
          attempts?: number | null
          completed_at?: string | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          max_attempts?: number | null
          progress?: number | null
          segment_id?: string | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["job_status"] | null
        }
        Update: {
          attempts?: number | null
          completed_at?: string | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          max_attempts?: number | null
          progress?: number | null
          segment_id?: string | null
          started_at?: string | null
          status?: Database["public"]["Enums"]["job_status"] | null
        }
        Relationships: [
          {
            foreignKeyName: "segment_processing_jobs_segment_id_fkey"
            columns: ["segment_id"]
            isOneToOne: false
            referencedRelation: "audience_segments"
            referencedColumns: ["id"]
          },
        ]
      }
      sequence_messages: {
        Row: {
          content: string
          created_at: string | null
          day: number
          id: string
          message_type: string
          send_time: string
          sequence_id: string
          status: string
          subject: string | null
          updated_at: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          day: number
          id?: string
          message_type?: string
          send_time: string
          sequence_id: string
          status?: string
          subject?: string | null
          updated_at?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          day?: number
          id?: string
          message_type?: string
          send_time?: string
          sequence_id?: string
          status?: string
          subject?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sequence_messages_sequence_id_fkey"
            columns: ["sequence_id"]
            isOneToOne: false
            referencedRelation: "message_sequences"
            referencedColumns: ["id"]
          },
        ]
      }
      sequence_recipients: {
        Row: {
          contact_id: string
          created_at: string | null
          current_day: number | null
          id: string
          next_message_at: string | null
          sequence_id: string
          status: string
          updated_at: string | null
        }
        Insert: {
          contact_id: string
          created_at?: string | null
          current_day?: number | null
          id?: string
          next_message_at?: string | null
          sequence_id: string
          status?: string
          updated_at?: string | null
        }
        Update: {
          contact_id?: string
          created_at?: string | null
          current_day?: number | null
          id?: string
          next_message_at?: string | null
          sequence_id?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sequence_recipients_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "sequence_recipients_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sequence_recipients_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "sequence_recipients_sequence_id_fkey"
            columns: ["sequence_id"]
            isOneToOne: false
            referencedRelation: "message_sequences"
            referencedColumns: ["id"]
          },
        ]
      }
      sequences: {
        Row: {
          campaign_id: string
          channel: string
          created_at: string | null
          delay: number | null
          id: string
          message: string | null
          step_number: number
          step_order: number
          subject: string | null
          updated_at: string | null
          wait_duration: number
        }
        Insert: {
          campaign_id: string
          channel: string
          created_at?: string | null
          delay?: number | null
          id?: string
          message?: string | null
          step_number: number
          step_order?: number
          subject?: string | null
          updated_at?: string | null
          wait_duration?: number
        }
        Update: {
          campaign_id?: string
          channel?: string
          created_at?: string | null
          delay?: number | null
          id?: string
          message?: string | null
          step_number?: number
          step_order?: number
          subject?: string | null
          updated_at?: string | null
          wait_duration?: number
        }
        Relationships: [
          {
            foreignKeyName: "sequences_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaign_stats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sequences_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      signup_fingerprints: {
        Row: {
          block_reason: string | null
          created_at: string | null
          fingerprint: string | null
          first_seen: string | null
          id: string
          ip_address: string | null
          is_blocked: boolean | null
          last_seen: string | null
          updated_at: string | null
          usage_count: number | null
        }
        Insert: {
          block_reason?: string | null
          created_at?: string | null
          fingerprint?: string | null
          first_seen?: string | null
          id?: string
          ip_address?: string | null
          is_blocked?: boolean | null
          last_seen?: string | null
          updated_at?: string | null
          usage_count?: number | null
        }
        Update: {
          block_reason?: string | null
          created_at?: string | null
          fingerprint?: string | null
          first_seen?: string | null
          id?: string
          ip_address?: string | null
          is_blocked?: boolean | null
          last_seen?: string | null
          updated_at?: string | null
          usage_count?: number | null
        }
        Relationships: []
      }
      status_categories: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: number
          name: string
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          name: string
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: number
          name?: string
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "status_categories_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "status_categories_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      status_options: {
        Row: {
          category_id: number | null
          color: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          display_order: number | null
          id: number
          is_default: boolean | null
          name: string
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          category_id?: number | null
          color?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          display_order?: number | null
          id?: number
          is_default?: boolean | null
          name: string
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          category_id?: number | null
          color?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          display_order?: number | null
          id?: number
          is_default?: boolean | null
          name?: string
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "status_options_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "status_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "status_options_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "status_options_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      status_timelines: {
        Row: {
          contact_id: string
          created_at: string | null
          created_by: string | null
          id: string
          is_demo: boolean | null
          metadata: Json | null
          notes: string | null
          status_id: number
          status_type: string
          workspace_id: string
        }
        Insert: {
          contact_id: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          is_demo?: boolean | null
          metadata?: Json | null
          notes?: string | null
          status_id: number
          status_type: string
          workspace_id: string
        }
        Update: {
          contact_id?: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          is_demo?: boolean | null
          metadata?: Json | null
          notes?: string | null
          status_id?: number
          status_type?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "status_timelines_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "status_timelines_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "status_timelines_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "status_timelines_status_id_fkey"
            columns: ["status_id"]
            isOneToOne: false
            referencedRelation: "status_options"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "status_timelines_status_id_fkey"
            columns: ["status_id"]
            isOneToOne: false
            referencedRelation: "statuses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "status_timelines_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "status_timelines_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      trigger_events: {
        Row: {
          created_at: string
          event_data: Json
          event_type: string
          id: string
          processed: boolean
          processed_at: string | null
          source: string | null
          workspace_id: string
        }
        Insert: {
          created_at?: string
          event_data: Json
          event_type: string
          id?: string
          processed?: boolean
          processed_at?: string | null
          source?: string | null
          workspace_id: string
        }
        Update: {
          created_at?: string
          event_data?: Json
          event_type?: string
          id?: string
          processed?: boolean
          processed_at?: string | null
          source?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "trigger_events_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "trigger_events_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      trigger_executions: {
        Row: {
          error_details: string | null
          event_id: string | null
          executed_at: string
          execution_data: Json | null
          flow_execution_id: string | null
          id: string
          status: string
          trigger_id: string
          workspace_id: string
        }
        Insert: {
          error_details?: string | null
          event_id?: string | null
          executed_at?: string
          execution_data?: Json | null
          flow_execution_id?: string | null
          id?: string
          status: string
          trigger_id: string
          workspace_id: string
        }
        Update: {
          error_details?: string | null
          event_id?: string | null
          executed_at?: string
          execution_data?: Json | null
          flow_execution_id?: string | null
          id?: string
          status?: string
          trigger_id?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "trigger_executions_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "trigger_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trigger_executions_trigger_id_fkey"
            columns: ["trigger_id"]
            isOneToOne: false
            referencedRelation: "triggers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "trigger_executions_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "trigger_executions_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      triggers: {
        Row: {
          conditions: Json | null
          created_at: string
          created_by: string | null
          description: string | null
          event_type: string
          execution_count: number
          external_request_config: Json | null
          flow_id: string | null
          id: string
          is_active: boolean
          last_execution_at: string | null
          name: string
          updated_at: string
          workspace_id: string
        }
        Insert: {
          conditions?: Json | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          event_type: string
          execution_count?: number
          external_request_config?: Json | null
          flow_id?: string | null
          id?: string
          is_active?: boolean
          last_execution_at?: string | null
          name: string
          updated_at?: string
          workspace_id: string
        }
        Update: {
          conditions?: Json | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          event_type?: string
          execution_count?: number
          external_request_config?: Json | null
          flow_id?: string | null
          id?: string
          is_active?: boolean
          last_execution_at?: string | null
          name?: string
          updated_at?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "triggers_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "triggers_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      twilio_numbers: {
        Row: {
          created_at: string | null
          friendly_name: string | null
          id: string
          phone_number: string
          sid: string
          status: string | null
          updated_at: string | null
          webhook_type: string | null
          webhook_url: string | null
          workspace_id: string
        }
        Insert: {
          created_at?: string | null
          friendly_name?: string | null
          id?: string
          phone_number: string
          sid: string
          status?: string | null
          updated_at?: string | null
          webhook_type?: string | null
          webhook_url?: string | null
          workspace_id: string
        }
        Update: {
          created_at?: string | null
          friendly_name?: string | null
          id?: string
          phone_number?: string
          sid?: string
          status?: string | null
          updated_at?: string | null
          webhook_type?: string | null
          webhook_url?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "twilio_numbers_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "twilio_numbers_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      unread_messages: {
        Row: {
          contact_id: string
          created_at: string | null
          id: string
          last_unread_at: string | null
          unread_count: number | null
          updated_at: string | null
        }
        Insert: {
          contact_id: string
          created_at?: string | null
          id?: string
          last_unread_at?: string | null
          unread_count?: number | null
          updated_at?: string | null
        }
        Update: {
          contact_id?: string
          created_at?: string | null
          id?: string
          last_unread_at?: string | null
          unread_count?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      user_presence: {
        Row: {
          avatar_url: string | null
          board_id: string
          cursor_x: number | null
          cursor_y: number | null
          display_name: string
          id: string
          updated_at: string | null
          user_id: string
          workspace_id: string
        }
        Insert: {
          avatar_url?: string | null
          board_id: string
          cursor_x?: number | null
          cursor_y?: number | null
          display_name: string
          id?: string
          updated_at?: string | null
          user_id: string
          workspace_id: string
        }
        Update: {
          avatar_url?: string | null
          board_id?: string
          cursor_x?: number | null
          cursor_y?: number | null
          display_name?: string
          id?: string
          updated_at?: string | null
          user_id?: string
          workspace_id?: string
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          api_token: string | null
          avatar_url: string | null
          background_blur: number | null
          background_color: string | null
          background_image_url: string | null
          background_type: string | null
          created_at: string | null
          full_name: string | null
          id: string
          music_autoplay: boolean | null
          music_enabled: boolean | null
          music_loop: boolean | null
          music_track_url: string | null
          music_volume: number | null
          timezone: string | null
          ui_theme: string | null
          updated_at: string | null
        }
        Insert: {
          api_token?: string | null
          avatar_url?: string | null
          background_blur?: number | null
          background_color?: string | null
          background_image_url?: string | null
          background_type?: string | null
          created_at?: string | null
          full_name?: string | null
          id: string
          music_autoplay?: boolean | null
          music_enabled?: boolean | null
          music_loop?: boolean | null
          music_track_url?: string | null
          music_volume?: number | null
          timezone?: string | null
          ui_theme?: string | null
          updated_at?: string | null
        }
        Update: {
          api_token?: string | null
          avatar_url?: string | null
          background_blur?: number | null
          background_color?: string | null
          background_image_url?: string | null
          background_type?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          music_autoplay?: boolean | null
          music_enabled?: boolean | null
          music_loop?: boolean | null
          music_track_url?: string | null
          music_volume?: number | null
          timezone?: string | null
          ui_theme?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      voice_error_logs: {
        Row: {
          call_sid: string | null
          created_at: string | null
          details: Json | null
          error_type: string
          id: string
          message: string
          workspace_id: string | null
        }
        Insert: {
          call_sid?: string | null
          created_at?: string | null
          details?: Json | null
          error_type: string
          id?: string
          message: string
          workspace_id?: string | null
        }
        Update: {
          call_sid?: string | null
          created_at?: string | null
          details?: Json | null
          error_type?: string
          id?: string
          message?: string
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "voice_error_logs_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "voice_error_logs_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      voice_recovery_logs: {
        Row: {
          call_sid: string | null
          created_at: string | null
          error_type: string
          id: string
          recovery_attempted: boolean | null
          recovery_successful: boolean | null
          workspace_id: string | null
        }
        Insert: {
          call_sid?: string | null
          created_at?: string | null
          error_type: string
          id?: string
          recovery_attempted?: boolean | null
          recovery_successful?: boolean | null
          workspace_id?: string | null
        }
        Update: {
          call_sid?: string | null
          created_at?: string | null
          error_type?: string
          id?: string
          recovery_attempted?: boolean | null
          recovery_successful?: boolean | null
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "voice_recovery_logs_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "voice_recovery_logs_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      webhook_board_rules: {
        Row: {
          board_id: string
          column_id: string
          created_at: string | null
          id: string
          updated_at: string | null
          webhook_id: string
          workspace_id: string
        }
        Insert: {
          board_id: string
          column_id: string
          created_at?: string | null
          id?: string
          updated_at?: string | null
          webhook_id: string
          workspace_id: string
        }
        Update: {
          board_id?: string
          column_id?: string
          created_at?: string | null
          id?: string
          updated_at?: string | null
          webhook_id?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "webhook_board_rules_board_id_workspace_id_fkey"
            columns: ["board_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "board_performance_ranking"
            referencedColumns: ["board_id", "workspace_id"]
          },
          {
            foreignKeyName: "webhook_board_rules_board_id_workspace_id_fkey"
            columns: ["board_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "boards"
            referencedColumns: ["id", "workspace_id"]
          },
          {
            foreignKeyName: "webhook_board_rules_column_id_fkey"
            columns: ["column_id"]
            isOneToOne: false
            referencedRelation: "board_columns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "webhook_board_rules_webhook_id_fkey"
            columns: ["webhook_id"]
            isOneToOne: false
            referencedRelation: "webhooks"
            referencedColumns: ["id"]
          },
        ]
      }
      webhook_logs: {
        Row: {
          error_message: string | null
          id: string
          payload: Json | null
          preprocessing_duration: number | null
          preprocessing_error: string | null
          processed_contact_id: string | null
          result: Json | null
          status: string
          timestamp: string
          webhook_id: string
          workspace_id: string
        }
        Insert: {
          error_message?: string | null
          id?: string
          payload?: Json | null
          preprocessing_duration?: number | null
          preprocessing_error?: string | null
          processed_contact_id?: string | null
          result?: Json | null
          status: string
          timestamp?: string
          webhook_id: string
          workspace_id: string
        }
        Update: {
          error_message?: string | null
          id?: string
          payload?: Json | null
          preprocessing_duration?: number | null
          preprocessing_error?: string | null
          processed_contact_id?: string | null
          result?: Json | null
          status?: string
          timestamp?: string
          webhook_id?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_webhook_log_webhook"
            columns: ["webhook_id"]
            isOneToOne: false
            referencedRelation: "webhooks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_webhook_log_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "fk_webhook_log_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      webhooks: {
        Row: {
          call_count: number | null
          created_at: string
          created_by_email: string
          id: string
          last_used: string | null
          mappings: Json | null
          name: string
          preprocessing_code: string | null
          preprocessing_enabled: boolean | null
          preprocessing_updated_at: string | null
          preprocessing_updated_by: string | null
          source: string
          status: string
          workspace_id: string
        }
        Insert: {
          call_count?: number | null
          created_at?: string
          created_by_email: string
          id?: string
          last_used?: string | null
          mappings?: Json | null
          name: string
          preprocessing_code?: string | null
          preprocessing_enabled?: boolean | null
          preprocessing_updated_at?: string | null
          preprocessing_updated_by?: string | null
          source: string
          status?: string
          workspace_id: string
        }
        Update: {
          call_count?: number | null
          created_at?: string
          created_by_email?: string
          id?: string
          last_used?: string | null
          mappings?: Json | null
          name?: string
          preprocessing_code?: string | null
          preprocessing_enabled?: boolean | null
          preprocessing_updated_at?: string | null
          preprocessing_updated_by?: string | null
          source?: string
          status?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_webhook_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "fk_webhook_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      workflow_actions: {
        Row: {
          action_config: Json
          action_type: string
          created_at: string | null
          id: string
          position: number
          workflow_id: string | null
        }
        Insert: {
          action_config: Json
          action_type: string
          created_at?: string | null
          id?: string
          position: number
          workflow_id?: string | null
        }
        Update: {
          action_config?: Json
          action_type?: string
          created_at?: string | null
          id?: string
          position?: number
          workflow_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workflow_actions_workflow_id_fkey"
            columns: ["workflow_id"]
            isOneToOne: false
            referencedRelation: "workflows"
            referencedColumns: ["id"]
          },
        ]
      }
      workflows: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          name: string
          trigger_config: Json
          trigger_type: string
          updated_at: string | null
          workspace_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          trigger_config: Json
          trigger_type: string
          updated_at?: string | null
          workspace_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          trigger_config?: Json
          trigger_type?: string
          updated_at?: string | null
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workflows_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "workflows_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      workspace_ai_config: {
        Row: {
          api_key: string
          auto_respond_enabled: boolean
          context_depth: number
          created_at: string | null
          enabled_features: Json | null
          id: string
          max_tokens: number
          model: string | null
          modified_time: string
          organization: string | null
          provider: string
          system_prompt: string
          temperature: number | null
          workspace_id: string
        }
        Insert: {
          api_key: string
          auto_respond_enabled?: boolean
          context_depth?: number
          created_at?: string | null
          enabled_features?: Json | null
          id?: string
          max_tokens?: number
          model?: string | null
          modified_time?: string
          organization?: string | null
          provider: string
          system_prompt?: string
          temperature?: number | null
          workspace_id: string
        }
        Update: {
          api_key?: string
          auto_respond_enabled?: boolean
          context_depth?: number
          created_at?: string | null
          enabled_features?: Json | null
          id?: string
          max_tokens?: number
          model?: string | null
          modified_time?: string
          organization?: string | null
          provider?: string
          system_prompt?: string
          temperature?: number | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workspace_ai_config_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "workspace_ai_config_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      workspace_email_config: {
        Row: {
          created_at: string | null
          from_email: string
          from_name: string | null
          is_active: boolean | null
          reply_to: string | null
          resend_api_key: string
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          created_at?: string | null
          from_email: string
          from_name?: string | null
          is_active?: boolean | null
          reply_to?: string | null
          resend_api_key: string
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          created_at?: string | null
          from_email?: string
          from_name?: string | null
          is_active?: boolean | null
          reply_to?: string | null
          resend_api_key?: string
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: []
      }
      workspace_invites: {
        Row: {
          created_at: string
          email: string
          expires_at: string
          id: string
          invited_by: string | null
          role: string
          text_workspace_id: string | null
          token: string | null
          workspace_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          expires_at?: string
          id?: string
          invited_by?: string | null
          role: string
          text_workspace_id?: string | null
          token?: string | null
          workspace_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          expires_at?: string
          id?: string
          invited_by?: string | null
          role?: string
          text_workspace_id?: string | null
          token?: string | null
          workspace_id?: string | null
        }
        Relationships: []
      }
      workspace_labels: {
        Row: {
          created_at: string
          field_name: string | null
          field_value: string | null
          id: string
          label_name: string
          label_type: string
          metadata: Json | null
          updated_at: string
          workspace_id: string
        }
        Insert: {
          created_at?: string
          field_name?: string | null
          field_value?: string | null
          id?: string
          label_name: string
          label_type?: string
          metadata?: Json | null
          updated_at?: string
          workspace_id: string
        }
        Update: {
          created_at?: string
          field_name?: string | null
          field_value?: string | null
          id?: string
          label_name?: string
          label_type?: string
          metadata?: Json | null
          updated_at?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workspace_labels_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "workspace_labels_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      workspace_members: {
        Row: {
          created_at: string
          id: string
          role: string
          updated_at: string
          user_id: string | null
          workspace_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          role: string
          updated_at?: string
          user_id?: string | null
          workspace_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          role?: string
          updated_at?: string
          user_id?: string | null
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workspace_members_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "workspace_members_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      workspace_settings: {
        Row: {
          created_at: string | null
          id: string
          settings_key: string
          settings_value: Json
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          settings_key: string
          settings_value: Json
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          settings_key?: string
          settings_value?: Json
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: []
      }
      workspace_twilio_config: {
        Row: {
          account_sid: string
          api_key_secret: string | null
          api_key_sid: string | null
          auth_token: string
          created_at: string | null
          id: string
          is_configured: boolean | null
          twiml_app_sid: string | null
          updated_at: string | null
          webhook_type: string | null
          webhook_url: string | null
          workspace_id: string | null
        }
        Insert: {
          account_sid: string
          api_key_secret?: string | null
          api_key_sid?: string | null
          auth_token: string
          created_at?: string | null
          id?: string
          is_configured?: boolean | null
          twiml_app_sid?: string | null
          updated_at?: string | null
          webhook_type?: string | null
          webhook_url?: string | null
          workspace_id?: string | null
        }
        Update: {
          account_sid?: string
          api_key_secret?: string | null
          api_key_sid?: string | null
          auth_token?: string
          created_at?: string | null
          id?: string
          is_configured?: boolean | null
          twiml_app_sid?: string | null
          updated_at?: string | null
          webhook_type?: string | null
          webhook_url?: string | null
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workspace_twilio_config_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: true
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "workspace_twilio_config_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: true
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      workspaces: {
        Row: {
          created_at: string
          created_by: string | null
          email_sender: string | null
          id: string
          is_default: boolean | null
          name: string
          settings: Json | null
          timezone: string | null
          updated_at: string
          workspace_code: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          email_sender?: string | null
          id?: string
          is_default?: boolean | null
          name: string
          settings?: Json | null
          timezone?: string | null
          updated_at?: string
          workspace_code?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          email_sender?: string | null
          id?: string
          is_default?: boolean | null
          name?: string
          settings?: Json | null
          timezone?: string | null
          updated_at?: string
          workspace_code?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      active_broadcasts: {
        Row: {
          audience: Json | null
          content: Json | null
          created_at: string | null
          created_by: string | null
          created_by_email: string | null
          delivered_count: number | null
          filter_count: number | null
          id: string | null
          scheduled_date: string | null
          sequence_count: number | null
          status: string | null
          total_recipients: number | null
          type: string | null
          workspace_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      board_performance_ranking: {
        Row: {
          board_id: string | null
          board_name: string | null
          completion_rank: number | null
          completion_rate: number | null
          response_rank: number | null
          response_rate: number | null
          total_campaigns: number | null
          total_contacts: number | null
          workspace_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "boards_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "boards_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      broadcast_delivery_stats: {
        Row: {
          audience: Json | null
          broadcast_id: string | null
          campaign_duration: unknown | null
          content: Json | null
          delivered_count: number | null
          delivery_rate: number | null
          failed_count: number | null
          first_sent_at: string | null
          last_sent_at: string | null
          pending_count: number | null
          status: string | null
          total_recipients: number | null
          type: string | null
          workspace_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      broadcast_recipient_details: {
        Row: {
          broadcast_audience: Json | null
          broadcast_content: Json | null
          broadcast_id: string | null
          broadcast_status: string | null
          broadcast_type: string | null
          contact_id: string | null
          contact_metadata: Json | null
          delivered_at: string | null
          error_message: string | null
          message_id: string | null
          recipient_id: string | null
          sent_at: string | null
          sequence_day: number | null
          sequence_id: string | null
          sequence_scheduled_date: string | null
          status: string | null
        }
        Relationships: [
          {
            foreignKeyName: "broadcast_recipients_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "active_broadcasts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "broadcast_recipients_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "broadcast_delivery_stats"
            referencedColumns: ["broadcast_id"]
          },
          {
            foreignKeyName: "broadcast_recipients_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "broadcast_sequence_schedule"
            referencedColumns: ["broadcast_id"]
          },
          {
            foreignKeyName: "broadcast_recipients_broadcast_id_fkey"
            columns: ["broadcast_id"]
            isOneToOne: false
            referencedRelation: "broadcasts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "broadcast_recipients_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "broadcast_recipients_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "broadcast_recipients_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "broadcast_recipients_sequence_id_fkey"
            columns: ["sequence_id"]
            isOneToOne: false
            referencedRelation: "broadcast_sequences"
            referencedColumns: ["id"]
          },
        ]
      }
      broadcast_sequence_schedule: {
        Row: {
          audience: Json | null
          broadcast_content: Json | null
          broadcast_id: string | null
          day_number: number | null
          delivered_count: number | null
          failed_count: number | null
          pending_count: number | null
          recipient_count: number | null
          scheduled_date: string | null
          sequence_content: string | null
          status: string | null
          type: string | null
          workspace_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_sequence_performance: {
        Row: {
          board_id: string | null
          board_name: string | null
          contacts_in_day: number | null
          current_day: number | null
          day_over_day_drop: number | null
          previous_day_contacts: number | null
          workspace_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_board"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "board_performance_ranking"
            referencedColumns: ["board_id"]
          },
          {
            foreignKeyName: "fk_board"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "boards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_stats: {
        Row: {
          audience_criteria: Json | null
          completed_count: number | null
          completion_rate: number | null
          created_at: string | null
          description: string | null
          id: string | null
          name: string | null
          scheduled_at: string | null
          sent_at: string | null
          status: string | null
          total_recipients: number | null
          type: string | null
          updated_at: string | null
          workspace_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_time_metrics: {
        Row: {
          avg_completion_time: unknown | null
          avg_response_time: unknown | null
          board_id: string | null
          board_name: string | null
          hour_of_day: number | null
          median_response_time: unknown | null
          response_rate: number | null
          responses: number | null
          workspace_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_board"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "board_performance_ranking"
            referencedColumns: ["board_id"]
          },
          {
            foreignKeyName: "fk_board"
            columns: ["board_id"]
            isOneToOne: false
            referencedRelation: "boards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "fk_workspace"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_current_status: {
        Row: {
          appointment_status_color: string | null
          appointment_status_id: number | null
          appointment_status_name: string | null
          appointment_status_notes: string | null
          appointment_status_updated_at: string | null
          contact_created_at: string | null
          contact_id: string | null
          email: string | null
          last_action_at: string | null
          last_action_type: string | null
          lead_status_color: string | null
          lead_status_id: number | null
          lead_status_name: string | null
          lead_status_notes: string | null
          lead_status_updated_at: string | null
          name: string | null
          opted_in_email: boolean | null
          opted_in_sms: boolean | null
          phone: string | null
          workspace_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "status_timelines_status_id_fkey"
            columns: ["appointment_status_id"]
            isOneToOne: false
            referencedRelation: "status_options"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "status_timelines_status_id_fkey"
            columns: ["lead_status_id"]
            isOneToOne: false
            referencedRelation: "status_options"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "status_timelines_status_id_fkey"
            columns: ["appointment_status_id"]
            isOneToOne: false
            referencedRelation: "statuses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "status_timelines_status_id_fkey"
            columns: ["lead_status_id"]
            isOneToOne: false
            referencedRelation: "statuses"
            referencedColumns: ["id"]
          },
        ]
      }
      email_list_view: {
        Row: {
          account_email: string | null
          attachment_count: number | null
          bcc_emails: Json | null
          body_html: string | null
          body_text: string | null
          cc_emails: Json | null
          contact_display_name: string | null
          contact_id: string | null
          contact_name: string | null
          created_at: string | null
          email_account_id: string | null
          email_references: string[] | null
          email_size_bytes: number | null
          external_id: string | null
          folder_color: string | null
          folder_id: string | null
          folder_name: string | null
          folder_type: string | null
          from_email: string | null
          from_name: string | null
          has_attachments: boolean | null
          id: string | null
          in_reply_to: string | null
          is_draft: boolean | null
          is_important: boolean | null
          is_read: boolean | null
          is_sent: boolean | null
          is_starred: boolean | null
          labels: string[] | null
          last_synced_at: string | null
          message_id: string | null
          priority: string | null
          received_at: string | null
          reply_to_email: string | null
          reply_to_name: string | null
          sent_at: string | null
          snippet: string | null
          subject: string | null
          thread_id: string | null
          to_emails: Json | null
          updated_at: string | null
          workspace_id: string | null
          workspace_sender: string | null
        }
        Relationships: [
          {
            foreignKeyName: "emails_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "emails_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "emails_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "emails_email_account_id_fkey"
            columns: ["email_account_id"]
            isOneToOne: false
            referencedRelation: "email_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "emails_folder_id_fkey"
            columns: ["folder_id"]
            isOneToOne: false
            referencedRelation: "email_folders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "emails_folder_id_fkey"
            columns: ["folder_id"]
            isOneToOne: false
            referencedRelation: "folder_unread_counts"
            referencedColumns: ["folder_id"]
          },
          {
            foreignKeyName: "emails_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "email_thread_summary"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "emails_thread_id_fkey"
            columns: ["thread_id"]
            isOneToOne: false
            referencedRelation: "email_threads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "emails_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "emails_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      email_thread_summary: {
        Row: {
          contact_names: string | null
          created_at: string | null
          email_account_id: string | null
          id: string | null
          is_important: boolean | null
          is_read: boolean | null
          is_starred: boolean | null
          last_message_at: string | null
          latest_message_at: string | null
          message_count: number | null
          participants: Json | null
          subject: string | null
          thread_id: string | null
          unread_count: number | null
          updated_at: string | null
          workspace_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "email_threads_email_account_id_fkey"
            columns: ["email_account_id"]
            isOneToOne: false
            referencedRelation: "email_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_threads_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "email_threads_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      folder_unread_counts: {
        Row: {
          email_account_id: string | null
          folder_id: string | null
          folder_name: string | null
          folder_type: string | null
          priority_count: number | null
          starred_count: number | null
          unread_count: number | null
          workspace_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "email_folders_email_account_id_fkey"
            columns: ["email_account_id"]
            isOneToOne: false
            referencedRelation: "email_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_folders_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "email_folders_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_conversion_analytics: {
        Row: {
          contact_created_at: string | null
          contact_id: string | null
          contact_name: string | null
          current_status: string | null
          days_since_created: number | null
          days_since_last_change: number | null
          email: string | null
          first_status: string | null
          first_status_date: string | null
          latest_status: string | null
          latest_status_date: string | null
          lead_source: string | null
          status_change_count: number | null
          workspace_id: string | null
        }
        Insert: {
          contact_created_at?: string | null
          contact_id?: string | null
          contact_name?: string | null
          current_status?: string | null
          days_since_created?: never
          days_since_last_change?: never
          email?: string | null
          first_status?: never
          first_status_date?: never
          latest_status?: never
          latest_status_date?: never
          lead_source?: string | null
          status_change_count?: never
          workspace_id?: string | null
        }
        Update: {
          contact_created_at?: string | null
          contact_id?: string | null
          contact_name?: string | null
          current_status?: string | null
          days_since_created?: never
          days_since_last_change?: never
          email?: string | null
          first_status?: never
          first_status_date?: never
          latest_status?: never
          latest_status_date?: never
          lead_source?: string | null
          status_change_count?: never
          workspace_id?: string | null
        }
        Relationships: []
      }
      livechat_board_assignments_with_details: {
        Row: {
          avatar_url: string | null
          board_name: string | null
          created_at: string | null
          full_name: string | null
          id: string | null
          livechat_board_id: string | null
          user_id: string | null
          workspace_id: string | null
          workspace_name: string | null
        }
        Relationships: [
          {
            foreignKeyName: "livechat_board_assignments_livechat_board_id_fkey"
            columns: ["livechat_board_id"]
            isOneToOne: false
            referencedRelation: "livechat_board"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "livechat_board_assignments_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "livechat_board_assignments_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      livechat_contact_assignments_with_details: {
        Row: {
          agent_email: string | null
          agent_name: string | null
          avatar_url: string | null
          contact_id: string | null
          created_at: string | null
          created_by: string | null
          id: string | null
          online_status: string | null
          status: string | null
          user_id: string | null
          workspace_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "livechat_contact_assignments_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "livechat_contact_assignments_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "livechat_contact_assignments_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
        ]
      }
      livechat_messages_view: {
        Row: {
          archived: boolean | null
          attachments: Json | null
          bcc: string[] | null
          body: string | null
          cc: string[] | null
          contact_id: string | null
          conversation_id: string | null
          created_at: string | null
          direction: Database["public"]["Enums"]["message_direction"] | null
          id: string | null
          is_internal: boolean | null
          is_read: boolean | null
          media_urls: Json | null
          mentioned_users: string[] | null
          msg_type: string | null
          parent_id: string | null
          sender: string | null
          status: string | null
          subject: string | null
          thread_id: string | null
          twilio_sid: string | null
          updated_at: string | null
          visibility: string | null
          workspace_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "livechat_messages_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "livechat_messages_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "livechat_messages_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "lead_conversion_analytics"
            referencedColumns: ["contact_id"]
          },
        ]
      }
      statuses: {
        Row: {
          category_id: number | null
          color: string | null
          created_at: string | null
          id: number | null
          is_default: boolean | null
          name: string | null
          sort_order: number | null
          updated_at: string | null
        }
        Insert: {
          category_id?: number | null
          color?: string | null
          created_at?: string | null
          id?: number | null
          is_default?: boolean | null
          name?: string | null
          sort_order?: number | null
          updated_at?: string | null
        }
        Update: {
          category_id?: number | null
          color?: string | null
          created_at?: string | null
          id?: number | null
          is_default?: boolean | null
          name?: string | null
          sort_order?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "status_options_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "status_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profiles_with_workspace: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          full_name: string | null
          id: string | null
          timezone: string | null
          updated_at: string | null
          workspace_id: string | null
          workspace_name: string | null
          workspace_role: string | null
        }
        Relationships: []
      }
      workspace_access: {
        Row: {
          user_id: string | null
          workspace_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workspace_members_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "workspace_members_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      accept_workspace_invite: {
        Args: { p_token: string; p_user_id: string }
        Returns: boolean
      }
      admin_create_workspace_user: {
        Args: {
          p_email: string
          p_password: string
          p_workspace_id: string
          p_role?: string
        }
        Returns: Json
      }
      admin_create_workspace_user_with_password: {
        Args: {
          p_email: string
          p_password: string
          p_workspace_id: string
          p_role?: string
        }
        Returns: Json
      }
      analyze_broadcast_performance: {
        Args: { p_days?: number }
        Returns: {
          metric_name: string
          current_value: number
          trend: string
        }[]
      }
      assign_workspace_to_user: {
        Args: { user_id: string; user_email: string; user_full_name?: string }
        Returns: string
      }
      binary_quantize: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      build_segment_query: {
        Args: { segment_id: string }
        Returns: string
      }
      bulk_update_contact_status: {
        Args: {
          contact_ids: string[]
          new_status_id: string
          workspace_id: string
        }
        Returns: undefined
      }
      bytea_to_text: {
        Args: { data: string }
        Returns: string
      }
      call_trigger_webhook: {
        Args: {
          p_contact_id: string
          p_workspace_id: string
          p_field_name: string
          p_old_value?: string
          p_new_value?: string
        }
        Returns: undefined
      }
      check_broadcast_completion: {
        Args: { p_broadcast_id: string }
        Returns: boolean
      }
      check_invite_by_token: {
        Args: { p_token: string }
        Returns: {
          id: string
          workspace_id: string
          text_workspace_id: string
          email: string
          role: string
          token: string
          expires_at: string
          workspace_name: string
        }[]
      }
      check_onboarding_status: {
        Args: { p_user_id: string; p_workspace_id: string }
        Returns: {
          is_completed: boolean
          created_at: string
          updated_at: string
        }[]
      }
      check_table_exists: {
        Args: { p_table_name: string }
        Returns: boolean
      }
      check_user_has_workspace: {
        Args: { user_id: string }
        Returns: boolean
      }
      check_user_workspace_membership: {
        Args: { user_id: string; workspace_id: string }
        Returns: boolean
      }
      check_workspace_membership: {
        Args: { user_id: string; workspace_id: string }
        Returns: boolean
      }
      cleanup_broadcast_test_data: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      cleanup_old_segment_jobs: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      complete_onboarding: {
        Args: { p_user_id: string; p_workspace_id: string }
        Returns: boolean
      }
      complete_user_onboarding: {
        Args: { user_id: string }
        Returns: boolean
      }
      create_broadcast_recipients: {
        Args: {
          p_broadcast_id: string
          p_filters: Json
          p_workspace_id: string
        }
        Returns: number
      }
      create_broadcast_v1: {
        Args: {
          p_campaign_id: string
          p_delay_ms: number
          p_filters: Json
          p_steps: Json
          p_workspace_id: string
        }
        Returns: Json
      }
      create_cloudflare_email_rule: {
        Args: { email_address: string }
        Returns: Json
      }
      create_default_email_folders: {
        Args: { p_workspace_id: string; p_email_account_id: string }
        Returns: undefined
      }
      create_default_workspace_for_user: {
        Args: { p_user_id: string }
        Returns: Json
      }
      create_monthly_partition: {
        Args: { table_name: string; start_date: string }
        Returns: undefined
      }
      create_status_categories_safely: {
        Args: { p_workspace_id: string }
        Returns: undefined
      }
      create_user: {
        Args: {
          email_param: string
          password_param: string
          is_admin?: boolean
        }
        Returns: Json
      }
      create_user_with_password: {
        Args: {
          email_param: string
          password_param: string
          metadata_param?: Json
        }
        Returns: Json
      }
      create_workspace_from_js: {
        Args: { p_name: string; p_user_id?: string }
        Returns: string
      }
      create_workspace_member: {
        Args:
          | { p_email: string; p_workspace_id: string; p_role?: string }
          | {
              p_email: string
              p_workspace_id: string
              p_role?: string
              p_password?: string
            }
        Returns: Json
      }
      create_workspace_simple: {
        Args: { p_name: string; p_user_id: string }
        Returns: string
      }
      create_workspace_user: {
        Args:
          | { p_email: string; p_workspace_id: string; p_role?: string }
          | {
              p_email: string
              p_workspace_id: string
              p_role?: string
              p_password?: string
            }
        Returns: Json
      }
      detect_message_type: {
        Args: { message_text: string }
        Returns: string
      }
      detect_stuck_broadcasts: {
        Args: { p_minutes_threshold?: number }
        Returns: {
          broadcast_id: string
          workspace_id: string
          status: string
          stuck_duration: unknown
          pending_count: number
          total_recipients: number
        }[]
      }
      ensure_livechat_partitions: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      ensure_user_has_workspace: {
        Args: { p_user_id: string }
        Returns: Json
      }
      evaluate_segment_conditions: {
        Args: { contact_record: Json; segment_id: string }
        Returns: boolean
      }
      evaluate_trigger_conditions: {
        Args: { event_data: Json; trigger_conditions: Json }
        Returns: boolean
      }
      exec_sql: {
        Args: { sql_query: string }
        Returns: undefined
      }
      execute_analytics_query: {
        Args: { query_sql: string; workspace_id?: string }
        Returns: Json
      }
      execute_sql: {
        Args: { sql_query: string }
        Returns: undefined
      }
      extend_developer_access: {
        Args: {
          p_workspace_id: string
          p_developer_id: string
          p_additional_hours: number
          p_reason?: string
        }
        Returns: Json
      }
      find_contact_by_email: {
        Args: { email_param: string; workspace_id_param: string }
        Returns: {
          appointment_result_id: number | null
          appointment_status_id: number | null
          board_id: string | null
          board_name: string | null
          city: string | null
          conversation_status: string | null
          created_at: string | null
          created_by: string | null
          crm_id: string | null
          email: string | null
          firstname: string
          follow_up_date: string | null
          id: string
          is_archived: boolean | null
          is_completed: boolean | null
          is_demo: boolean | null
          is_favorite: boolean | null
          last_action_at: string | null
          last_action_type: string | null
          lastname: string
          lead_source: string | null
          lead_status: string | null
          lead_status_id: number | null
          market: string | null
          metadata: Json | null
          name: string | null
          needs_response: boolean | null
          notes: string | null
          opt_in_through: string
          opted_in_email: boolean | null
          opted_in_sms: boolean | null
          phone_number: string
          priority: string | null
          product: string | null
          property_insights_data: Json | null
          property_insights_updated_at: string | null
          search_vector: unknown | null
          sentiment: string | null
          sentiment_history: Json | null
          st_address: string | null
          state: string | null
          tags: Json | null
          team: string | null
          unread_count: number | null
          updated_at: string | null
          webhook_id: string | null
          webhook_name: string | null
          webhook_received_at: string | null
          workspace_id: string
          zip: string | null
        }[]
      }
      find_contact_by_lead_status: {
        Args: { lead_status_id_param: string; workspace_id_param: string }
        Returns: {
          appointment_result_id: number | null
          appointment_status_id: number | null
          board_id: string | null
          board_name: string | null
          city: string | null
          conversation_status: string | null
          created_at: string | null
          created_by: string | null
          crm_id: string | null
          email: string | null
          firstname: string
          follow_up_date: string | null
          id: string
          is_archived: boolean | null
          is_completed: boolean | null
          is_demo: boolean | null
          is_favorite: boolean | null
          last_action_at: string | null
          last_action_type: string | null
          lastname: string
          lead_source: string | null
          lead_status: string | null
          lead_status_id: number | null
          market: string | null
          metadata: Json | null
          name: string | null
          needs_response: boolean | null
          notes: string | null
          opt_in_through: string
          opted_in_email: boolean | null
          opted_in_sms: boolean | null
          phone_number: string
          priority: string | null
          product: string | null
          property_insights_data: Json | null
          property_insights_updated_at: string | null
          search_vector: unknown | null
          sentiment: string | null
          sentiment_history: Json | null
          st_address: string | null
          state: string | null
          tags: Json | null
          team: string | null
          unread_count: number | null
          updated_at: string | null
          webhook_id: string | null
          webhook_name: string | null
          webhook_received_at: string | null
          workspace_id: string
          zip: string | null
        }[]
      }
      fix_user_workspace: {
        Args: { p_user_id: string }
        Returns: string
      }
      generate_email_sender: {
        Args: { company_name: string }
        Returns: string
      }
      generate_system_report: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      generate_workspace_code: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_workspace_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_all_board_unread_counts: {
        Args: { workspace_id_param: string }
        Returns: {
          board_id: string
          unread_count: number
        }[]
      }
      get_appointment_result_options: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_appointment_status_options: {
        Args: { workspace_id_param: string }
        Returns: Json
      }
      get_board_unread_count: {
        Args: { board_id_param: string }
        Returns: number
      }
      get_broadcast_analytics: {
        Args: { p_broadcast_id: string; p_workspace_id: string }
        Returns: {
          metric_name: string
          metric_value: number
          percentage: number
        }[]
      }
      get_broadcast_audience: {
        Args: {
          p_workspace_id: string
          p_filter_criteria: Json
          p_broadcast_type: string
        }
        Returns: {
          estimated_recipients: number
          recipient_ids: string[]
          recipient_phones: string[]
          recipient_emails: string[]
        }[]
      }
      get_broadcast_audience_estimate: {
        Args: { p_filters: Json; p_workspace_id: string }
        Returns: number
      }
      get_broadcast_audience_v2: {
        Args: {
          p_workspace_id: string
          p_metadata_filter?: Json
          p_lead_source?: string
          p_broadcast_type?: string
        }
        Returns: {
          estimated_recipients: number
          recipient_ids: string[]
          recipient_phones: string[]
          recipient_emails: string[]
        }[]
      }
      get_broadcast_audience_v3: {
        Args: {
          p_workspace_id: string
          p_metadata_filter?: Json
          p_lead_source?: string
          p_market?: string
          p_product?: string
          p_broadcast_type?: string
        }
        Returns: {
          estimated_recipients: number
          recipient_ids: string[]
          recipient_phones: string[]
          recipient_emails: string[]
        }[]
      }
      get_broadcast_recipient_stats: {
        Args: { broadcast_id: string }
        Returns: Json
      }
      get_broadcast_recipients_count_v1: {
        Args: { p_workspace_id: string; p_filters: Json }
        Returns: number
      }
      get_broadcast_recipients_v1: {
        Args: { p_workspace_id: string; p_filters: Json }
        Returns: {
          contact_id: string
          firstname: string
          lastname: string
          phone_number: string
          email: string
          metadata: Json
          lead_status: string
          lead_source: string
          conversation_status: string
          tags: Json
        }[]
      }
      get_broadcast_summary: {
        Args: { p_broadcast_id: string; p_workspace_id: string }
        Returns: Json
      }
      get_broadcast_system_health: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      get_contact_by_chat_id: {
        Args: { chat_id: string }
        Returns: {
          contact_id: string
          workspace_id: string
        }[]
      }
      get_contact_conversation_history: {
        Args: { p_contact_id: string; p_limit?: number }
        Returns: {
          message_time: string
          message_direction: string
          sender: string
          message_body: string
        }[]
      }
      get_contact_fields: {
        Args: Record<PropertyKey, never>
        Returns: {
          column_name: string
          data_type: string
        }[]
      }
      get_contact_status: {
        Args: { contact_id_param: string }
        Returns: Json
      }
      get_contacts_by_lead_status: {
        Args: {
          workspace_id_param: string
          lead_status_param?: string
          page_number?: number
          page_size?: number
        }
        Returns: {
          id: string
          name: string
          phone_number: string
          email: string
          workspace_id: string
          created_at: string
          updated_at: string
          metadata: Json
          unread_count: number
          firstname: string
          lastname: string
          conversation_status: string
          tags: Json
          priority: string
          follow_up_date: string
          is_favorite: boolean
          is_archived: boolean
          needs_response: boolean
          sentiment: string
          team: string
          lead_status: string
          lastMessage: string
          lastMessageTimestamp: string
          lastMessageDirection: string
          lastMessageSender: string
          lastMessageId: string
          lastMessageType: string
          total_count: number
        }[]
      }
      get_contacts_by_webhook: {
        Args: {
          workspace_id_param: string
          webhook_name_param?: string
          page_number?: number
          page_size?: number
        }
        Returns: {
          id: string
          name: string
          phone_number: string
          email: string
          workspace_id: string
          created_at: string
          updated_at: string
          metadata: Json
          unread_count: number
          firstname: string
          lastname: string
          conversation_status: string
          tags: Json
          priority: string
          follow_up_date: string
          is_favorite: boolean
          is_archived: boolean
          needs_response: boolean
          sentiment: string
          team: string
          webhook_name: string
          webhook_id: string
          lastMessage: string
          lastMessageTimestamp: string
          lastMessageDirection: string
          lastMessageSender: string
          lastMessageId: string
          lastMessageType: string
          total_count: number
        }[]
      }
      get_distinct_field_values: {
        Args: { p_workspace_id: string }
        Returns: {
          field_name: string
          field_values: Json
        }[]
      }
      get_folder_counts: {
        Args: { workspace_id_param: string } | { workspace_id_param: string }
        Returns: {
          folder: string
          count: number
        }[]
      }
      get_lead_status_sources: {
        Args: { workspace_id_param: string }
        Returns: {
          lead_status: string
          count: number
        }[]
      }
      get_media_url: {
        Args: { media_path: string }
        Returns: string
      }
      get_messages_with_workspace: {
        Args: { p_contact_id: string; p_limit?: number; p_offset?: number }
        Returns: {
          id: string
          contact_id: string
          workspace_id: string
          body: string
          direction: string
          status: string
          created_at: string
          updated_at: string
          twilio_sid: string
          message_type: string
          metadata: Json
        }[]
      }
      get_paginated_contacts_with_last_message: {
        Args: {
          workspace_id_param: string
          page_number?: number
          page_size?: number
          filter_status?: string
        }
        Returns: {
          id: string
          name: string
          phone_number: string
          email: string
          workspace_id: string
          created_at: string
          updated_at: string
          metadata: Json
          unread_count: number
          firstname: string
          lastname: string
          conversation_status: string
          tags: Json
          priority: string
          follow_up_date: string
          is_favorite: boolean
          is_archived: boolean
          needs_response: boolean
          sentiment: string
          team: string
          lastMessage: string
          lastMessageTimestamp: string
          lastMessageDirection: string
          lastMessageSender: string
          lastMessageId: string
          lastMessageType: string
          assignee_id: string
          webhook_name: string
          total_count: number
        }[]
      }
      get_recipient_status_summary: {
        Args: { p_broadcast_id: string; p_workspace_id: string }
        Returns: {
          status: string
          count: number
          percentage: number
        }[]
      }
      get_sequence_schedule: {
        Args: { p_broadcast_id: string; p_workspace_id: string }
        Returns: {
          day_number: number
          scheduled_date: string
          recipient_count: number
          delivered_count: number
          pending_count: number
          failed_count: number
        }[]
      }
      get_system_recommendations: {
        Args: Record<PropertyKey, never>
        Returns: {
          priority: number
          category: string
          recommendation: string
          details: Json
        }[]
      }
      get_table_columns: {
        Args: { table_name: string }
        Returns: {
          column_name: string
          data_type: string
          is_nullable: boolean
          column_default: string
        }[]
      }
      get_table_list: {
        Args: Record<PropertyKey, never>
        Returns: {
          table_name: string
          table_type: string
          row_count: number
        }[]
      }
      get_trigger_analytics: {
        Args: { workspace_id_param: string }
        Returns: {
          trigger_id: string
          trigger_name: string
          event_type: string
          is_active: boolean
          total_executions: number
          unique_contacts_affected: number
          last_execution_at: string
          recent_executions: Json
          affected_contacts: Json
          field_conditions: Json
        }[]
      }
      get_trigger_analytics_simple: {
        Args: { workspace_id_param: string }
        Returns: {
          trigger_id: string
          trigger_name: string
          event_type: string
          is_active: boolean
          total_executions: number
          unique_contacts_affected: number
          last_execution_at: string
          affected_contact_names: string[]
          field_conditions: Json
        }[]
      }
      get_user_accessible_tables: {
        Args: { workspace_id_param: string }
        Returns: string[]
      }
      get_user_workspace_ids: {
        Args: { p_user_id: string }
        Returns: string[]
      }
      get_user_workspaces: {
        Args: Record<PropertyKey, never>
        Returns: string[]
      }
      get_webhook_sources: {
        Args: { workspace_id_param: string }
        Returns: {
          webhook_name: string
          count: number
        }[]
      }
      get_webhook_url: {
        Args: { webhook_id: string; workspace_id: string }
        Returns: string
      }
      grant_developer_access: {
        Args: {
          p_workspace_id: string
          p_developer_id: string
          p_access_level: string
          p_reason: string
          p_duration_hours?: number
        }
        Returns: string
      }
      gtrgm_compress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_decompress: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_in: {
        Args: { "": unknown }
        Returns: unknown
      }
      gtrgm_options: {
        Args: { "": unknown }
        Returns: undefined
      }
      gtrgm_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_avg: {
        Args: { "": number[] }
        Returns: unknown
      }
      halfvec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_send: {
        Args: { "": unknown }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      has_developer_access: {
        Args: { p_workspace_id: string; p_user_id?: string }
        Returns: boolean
      }
      hnsw_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnswhandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      http: {
        Args: { request: Database["public"]["CompositeTypes"]["http_request"] }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_delete: {
        Args:
          | { uri: string }
          | { uri: string; content: string; content_type: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_get: {
        Args: { uri: string } | { uri: string; data: Json }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_head: {
        Args: { uri: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_header: {
        Args: { field: string; value: string }
        Returns: Database["public"]["CompositeTypes"]["http_header"]
      }
      http_list_curlopt: {
        Args: Record<PropertyKey, never>
        Returns: {
          curlopt: string
          value: string
        }[]
      }
      http_patch: {
        Args: { uri: string; content: string; content_type: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_post: {
        Args:
          | { uri: string; content: string; content_type: string }
          | { uri: string; data: Json }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_put: {
        Args: { uri: string; content: string; content_type: string }
        Returns: Database["public"]["CompositeTypes"]["http_response"]
      }
      http_reset_curlopt: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      http_set_curlopt: {
        Args: { curlopt: string; value: string }
        Returns: boolean
      }
      increment: {
        Args: { row_id: string; increment_by: number }
        Returns: undefined
      }
      ivfflat_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflathandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      l2_norm: {
        Args: { "": unknown } | { "": unknown }
        Returns: number
      }
      l2_normalize: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: unknown
      }
      list_developer_accessible_workspaces: {
        Args: { p_developer_id?: string }
        Returns: {
          workspace_id: string
          workspace_name: string
          access_level: string
          granted_at: string
          expires_at: string
          time_remaining: unknown
          access_reason: string
        }[]
      }
      load_demo_boards: {
        Args: { p_workspace_id: string; p_user_id: string }
        Returns: Json
      }
      load_demo_contacts: {
        Args: { p_workspace_id: string; p_user_id: string }
        Returns: Json
      }
      load_demo_data: {
        Args: { p_workspace_id: string; p_user_id: string }
        Returns: Json
      }
      load_demo_messages: {
        Args: { p_workspace_id: string; p_user_id: string }
        Returns: Json
      }
      log_trigger_execution: {
        Args: {
          trigger_id: string
          event_id: string
          execution_status: string
          error_text?: string
          execution_data?: Json
        }
        Returns: string
      }
      maintain_livechat_partitions: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      manually_process_user_registration: {
        Args: { p_user_id: string }
        Returns: Json
      }
      move_contact_between_boards: {
        Args:
          | {
              p_contact_id: string
              p_from_board_id: string
              p_to_board_id: string
              p_to_column_id: string
              p_metadata: Json
            }
          | {
              p_contact_id: string
              p_from_board_id: string
              p_to_board_id: string
              p_to_column_id: string
              p_metadata: Json
            }
        Returns: {
          board_id: string
          column_id: string | null
          contact_id: string
          created_at: string | null
          created_by: string | null
          duplicate_group_id: string | null
          id: string
          inquiry_type: string | null
          is_demo: boolean | null
          is_duplicate: boolean | null
          last_activity_at: string | null
          metadata: Json | null
          notes: string | null
          source: string | null
          source_data: Json | null
          status: string | null
          updated_at: string | null
        }
      }
      purchase_partner_phone_number: {
        Args: {
          phone_number: string
          workspace_id: string
          user_id: string
          fingerprint_data: Json
        }
        Returns: Json
      }
      queue_ai_response: {
        Args: {
          p_message_id: string
          p_workspace_id: string
          p_contact_id: string
        }
        Returns: string
      }
      queue_broadcast_messages: {
        Args: { p_broadcast_id: string; p_scheduled_time?: string }
        Returns: number
      }
      queue_campaign: {
        Args: { p_campaign_id: string; p_send_immediately?: boolean }
        Returns: undefined
      }
      refresh_segment_contacts: {
        Args: { p_segment_id: string }
        Returns: number
      }
      remove_demo_data: {
        Args: { p_workspace_id: string }
        Returns: Json
      }
      revoke_developer_access: {
        Args: {
          p_workspace_id: string
          p_developer_id: string
          p_reason?: string
        }
        Returns: Json
      }
      sanitize_company_name_for_email: {
        Args: { company_name: string }
        Returns: string
      }
      save_onboarding_response: {
        Args: {
          p_user_id: string
          p_workspace_id: string
          p_step_id: string
          p_response: Json
        }
        Returns: boolean
      }
      search_available_phone_numbers: {
        Args: { area_code: string; limit_count?: number }
        Returns: Json
      }
      search_contacts: {
        Args:
          | {
              workspace_id_param: string
              search_term: string
              result_limit?: number
            }
          | {
              workspace_id_param: string
              search_term: string
              result_limit?: number
            }
        Returns: {
          appointment_result_id: number | null
          appointment_status_id: number | null
          board_id: string | null
          board_name: string | null
          city: string | null
          conversation_status: string | null
          created_at: string | null
          created_by: string | null
          crm_id: string | null
          email: string | null
          firstname: string
          follow_up_date: string | null
          id: string
          is_archived: boolean | null
          is_completed: boolean | null
          is_demo: boolean | null
          is_favorite: boolean | null
          last_action_at: string | null
          last_action_type: string | null
          lastname: string
          lead_source: string | null
          lead_status: string | null
          lead_status_id: number | null
          market: string | null
          metadata: Json | null
          name: string | null
          needs_response: boolean | null
          notes: string | null
          opt_in_through: string
          opted_in_email: boolean | null
          opted_in_sms: boolean | null
          phone_number: string
          priority: string | null
          product: string | null
          property_insights_data: Json | null
          property_insights_updated_at: string | null
          search_vector: unknown | null
          sentiment: string | null
          sentiment_history: Json | null
          st_address: string | null
          state: string | null
          tags: Json | null
          team: string | null
          unread_count: number | null
          updated_at: string | null
          webhook_id: string | null
          webhook_name: string | null
          webhook_received_at: string | null
          workspace_id: string
          zip: string | null
        }[]
      }
      search_contacts_hybrid: {
        Args: {
          workspace_id_param: string
          search_term: string
          result_limit?: number
        }
        Returns: {
          appointment_result_id: number | null
          appointment_status_id: number | null
          board_id: string | null
          board_name: string | null
          city: string | null
          conversation_status: string | null
          created_at: string | null
          created_by: string | null
          crm_id: string | null
          email: string | null
          firstname: string
          follow_up_date: string | null
          id: string
          is_archived: boolean | null
          is_completed: boolean | null
          is_demo: boolean | null
          is_favorite: boolean | null
          last_action_at: string | null
          last_action_type: string | null
          lastname: string
          lead_source: string | null
          lead_status: string | null
          lead_status_id: number | null
          market: string | null
          metadata: Json | null
          name: string | null
          needs_response: boolean | null
          notes: string | null
          opt_in_through: string
          opted_in_email: boolean | null
          opted_in_sms: boolean | null
          phone_number: string
          priority: string | null
          product: string | null
          property_insights_data: Json | null
          property_insights_updated_at: string | null
          search_vector: unknown | null
          sentiment: string | null
          sentiment_history: Json | null
          st_address: string | null
          state: string | null
          tags: Json | null
          team: string | null
          unread_count: number | null
          updated_at: string | null
          webhook_id: string | null
          webhook_name: string | null
          webhook_received_at: string | null
          workspace_id: string
          zip: string | null
        }[]
      }
      send_livechat_comment: {
        Args: {
          p_body: string
          p_contact_id: string
          p_workspace_id: string
          p_mentioned_users?: string[]
          p_visibility?: string
        }
        Returns: string
      }
      send_livechat_email: {
        Args: {
          p_body: string
          p_contact_id: string
          p_workspace_id: string
          p_subject?: string
          p_cc?: string[]
          p_bcc?: string[]
          p_attachments?: Json
        }
        Returns: string
      }
      set_app_setting: {
        Args: { name: string; value: string }
        Returns: undefined
      }
      set_contact_webhook_fields: {
        Args: {
          p_webhook_id: string
          p_webhook_name: string
          p_phone_number: string
          p_workspace_id: string
        }
        Returns: boolean
      }
      set_limit: {
        Args: { "": number }
        Returns: number
      }
      set_user_password: {
        Args: { p_user_id: string; p_password: string }
        Returns: boolean
      }
      set_workspace_context: {
        Args: { workspace_id: string }
        Returns: undefined
      }
      setup_workspace_lead_status: {
        Args:
          | { workspace_id: string; creator_id: string }
          | { workspace_id: string; creator_id: string }
        Returns: undefined
      }
      show_limit: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      show_trgm: {
        Args: { "": string }
        Returns: string[]
      }
      sparsevec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      sparsevec_send: {
        Args: { "": unknown }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      test_developer_access: {
        Args: {
          p_workspace_id: string
          p_developer_id: string
          p_test_duration_hours?: number
        }
        Returns: Json
      }
      test_field_change_detection: {
        Args: Record<PropertyKey, never>
        Returns: {
          step_name: string
          result: string
          details: Json
        }[]
      }
      test_grant_developer_access: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      text_to_bytea: {
        Args: { data: string }
        Returns: string
      }
      trigger_update_campaign_statuses: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      update_broadcast_statistics: {
        Args: { p_broadcast_id: string }
        Returns: undefined
      }
      update_campaign_statuses: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      update_contact_conversation_status: {
        Args: { p_contact_id: string; p_workspace_id: string; p_status: string }
        Returns: boolean
      }
      update_contact_status: {
        Args:
          | {
              contact_id_param: string
              workspace_id_param: string
              status_param: string
            }
          | {
              p_contact_id: string
              p_status_type: string
              p_status_id: number
              p_workspace_id: string
              p_notes?: string
              p_created_by?: string
            }
        Returns: boolean
      }
      update_contact_webhook: {
        Args: {
          p_contact_id: string
          p_webhook_id: string
          p_webhook_name: string
        }
        Returns: boolean
      }
      update_conversation_status: {
        Args:
          | { p_contact_id: string; p_status: string; p_unread_count: number }
          | { p_contact_id: string; p_status: string; p_unread_count?: number }
        Returns: boolean
      }
      update_recipient_status: {
        Args: {
          p_broadcast_id: string
          p_recipient_id: string
          p_status: string
          p_error_message?: string
          p_twilio_status?: string
          p_message_id?: string
        }
        Returns: undefined
      }
      update_sms_job_status_completed: {
        Args: { _id: string; _message_sid: string }
        Returns: undefined
      }
      update_sms_job_status_direct: {
        Args: { _id: string; _twilio_sid: string }
        Returns: Json
      }
      update_sms_job_status_failed: {
        Args: { _id: string; _error: string }
        Returns: undefined
      }
      update_sms_job_status_failed_direct: {
        Args: { _id: string; _error: string }
        Returns: Json
      }
      update_user_workspace_metadata: {
        Args: { user_id: string; workspace_id: string }
        Returns: boolean
      }
      urlencode: {
        Args: { data: Json } | { string: string } | { string: string }
        Returns: string
      }
      user_has_workspace: {
        Args: { p_user_id: string }
        Returns: boolean
      }
      validate_broadcast_filters: {
        Args: { p_filters: Json }
        Returns: {
          is_valid: boolean
          error_message: string
        }[]
      }
      vector_avg: {
        Args: { "": number[] }
        Returns: string
      }
      vector_dims: {
        Args: { "": string } | { "": unknown }
        Returns: number
      }
      vector_norm: {
        Args: { "": string }
        Returns: number
      }
      vector_out: {
        Args: { "": string }
        Returns: unknown
      }
      vector_send: {
        Args: { "": string }
        Returns: string
      }
      vector_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      verify_broadcast_system: {
        Args: Record<PropertyKey, never>
        Returns: {
          check_name: string
          status: string
          details: Json
        }[]
      }
    }
    Enums: {
      campaign_status: "draft" | "active" | "paused" | "completed" | "archived"
      campaign_type: "sequence" | "broadcast" | "drip" | "trigger"
      conversation_status_enum: "New" | "Open" | "Closed" | "Spam" | "Invalid"
      field_type:
        | "text"
        | "number"
        | "date"
        | "email"
        | "phone"
        | "url"
        | "boolean"
      job_status: "pending" | "processing" | "completed" | "failed"
      mapping_type: "direct" | "jsonpath"
      message_direction: "inbound" | "outbound"
      message_status:
        | "draft"
        | "scheduled"
        | "sending"
        | "sent"
        | "delivered"
        | "failed"
      message_type: "sms" | "email" | "whatsapp" | "voice"
      workspace_role: "owner" | "admin" | "member" | "super_admin"
    }
    CompositeTypes: {
      http_header: {
        field: string | null
        value: string | null
      }
      http_request: {
        method: unknown | null
        uri: string | null
        headers: Database["public"]["CompositeTypes"]["http_header"][] | null
        content_type: string | null
        content: string | null
      }
      http_response: {
        status: number | null
        content_type: string | null
        headers: Database["public"]["CompositeTypes"]["http_header"][] | null
        content: string | null
      }
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      campaign_status: ["draft", "active", "paused", "completed", "archived"],
      campaign_type: ["sequence", "broadcast", "drip", "trigger"],
      conversation_status_enum: ["New", "Open", "Closed", "Spam", "Invalid"],
      field_type: [
        "text",
        "number",
        "date",
        "email",
        "phone",
        "url",
        "boolean",
      ],
      job_status: ["pending", "processing", "completed", "failed"],
      mapping_type: ["direct", "jsonpath"],
      message_direction: ["inbound", "outbound"],
      message_status: [
        "draft",
        "scheduled",
        "sending",
        "sent",
        "delivered",
        "failed",
      ],
      message_type: ["sms", "email", "whatsapp", "voice"],
      workspace_role: ["owner", "admin", "member", "super_admin"],
    },
  },
} as const
