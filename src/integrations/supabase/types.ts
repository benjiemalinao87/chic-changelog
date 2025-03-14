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
          status_id: number
        }
        Insert: {
          appointment_id: string
          created_at?: string | null
          created_by: string
          id?: string
          notes?: string | null
          status_id: number
        }
        Update: {
          appointment_id?: string
          created_at?: string | null
          created_by?: string
          id?: string
          notes?: string | null
          status_id?: number
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
      board_columns: {
        Row: {
          board_id: string
          created_at: string | null
          icon: string | null
          id: string
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
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "board_contacts_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
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
      campaign_contact_status: {
        Row: {
          campaign_id: string
          completed_at: string | null
          contact_id: string
          current_day: number | null
          enrolled_at: string | null
          id: string
          last_response_at: string | null
          opt_out_at: string | null
          opt_out_reason: string | null
          status: string
          workspace_id: string
        }
        Insert: {
          campaign_id: string
          completed_at?: string | null
          contact_id: string
          current_day?: number | null
          enrolled_at?: string | null
          id?: string
          last_response_at?: string | null
          opt_out_at?: string | null
          opt_out_reason?: string | null
          status: string
          workspace_id: string
        }
        Update: {
          campaign_id?: string
          completed_at?: string | null
          contact_id?: string
          current_day?: number | null
          enrolled_at?: string | null
          id?: string
          last_response_at?: string | null
          opt_out_at?: string | null
          opt_out_reason?: string | null
          status?: string
          workspace_id?: string
        }
        Relationships: [
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
          schedule: Json
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
          schedule?: Json
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
          schedule?: Json
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
            referencedRelation: "campaigns"
            referencedColumns: ["id", "workspace_id"]
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
          board_id: string
          campaign_type: Database["public"]["Enums"]["campaign_type"]
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          metadata: Json | null
          name: string
          segment_id: string | null
          settings: Json | null
          status: string
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          board_id: string
          campaign_type?: Database["public"]["Enums"]["campaign_type"]
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          name: string
          segment_id?: string | null
          settings?: Json | null
          status?: string
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          board_id?: string
          campaign_type?: Database["public"]["Enums"]["campaign_type"]
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          metadata?: Json | null
          name?: string
          segment_id?: string | null
          settings?: Json | null
          status?: string
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_board"
            columns: ["board_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "board_performance_ranking"
            referencedColumns: ["board_id", "workspace_id"]
          },
          {
            foreignKeyName: "fk_board"
            columns: ["board_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "boards"
            referencedColumns: ["id", "workspace_id"]
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
            foreignKeyName: "contact_custom_fields_field_id_fkey"
            columns: ["field_id"]
            isOneToOne: false
            referencedRelation: "custom_fields"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_pipeline_stages: {
        Row: {
          contact_id: string
          created_at: string | null
          id: string
          stage: string
          updated_at: string | null
        }
        Insert: {
          contact_id: string
          created_at?: string | null
          id?: string
          stage: string
          updated_at?: string | null
        }
        Update: {
          contact_id?: string
          created_at?: string | null
          id?: string
          stage?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_pipeline_stages_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "contact_pipeline_stages_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
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
            foreignKeyName: "contact_stages_pipeline_id_fkey"
            columns: ["pipeline_id"]
            isOneToOne: false
            referencedRelation: "pipelines"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_stages_previous_stage_id_fkey"
            columns: ["previous_stage_id"]
            isOneToOne: false
            referencedRelation: "pipeline_stages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contact_stages_stage_id_fkey"
            columns: ["stage_id"]
            isOneToOne: false
            referencedRelation: "pipeline_stages"
            referencedColumns: ["id"]
          },
        ]
      }
      contacts: {
        Row: {
          appointment_result_id: number | null
          appointment_status_id: number | null
          city: string | null
          conversation_status: string | null
          created_at: string | null
          created_by: string | null
          crm_id: string | null
          email: string | null
          firstname: string
          id: string
          is_completed: boolean | null
          last_action_at: string | null
          last_action_type: string | null
          lastname: string
          lead_source: string | null
          lead_status: string | null
          lead_status_id: number | null
          market: string | null
          metadata: Json | null
          name: string | null
          notes: string | null
          opt_in_through: string
          opted_in_email: boolean | null
          opted_in_sms: boolean | null
          phone_number: string
          product: string | null
          st_address: string | null
          state: string | null
          tags: Json | null
          unread_count: number | null
          updated_at: string | null
          workspace_id: string
          zip: string | null
        }
        Insert: {
          appointment_result_id?: number | null
          appointment_status_id?: number | null
          city?: string | null
          conversation_status?: string | null
          created_at?: string | null
          created_by?: string | null
          crm_id?: string | null
          email?: string | null
          firstname: string
          id?: string
          is_completed?: boolean | null
          last_action_at?: string | null
          last_action_type?: string | null
          lastname: string
          lead_source?: string | null
          lead_status?: string | null
          lead_status_id?: number | null
          market?: string | null
          metadata?: Json | null
          name?: string | null
          notes?: string | null
          opt_in_through?: string
          opted_in_email?: boolean | null
          opted_in_sms?: boolean | null
          phone_number: string
          product?: string | null
          st_address?: string | null
          state?: string | null
          tags?: Json | null
          unread_count?: number | null
          updated_at?: string | null
          workspace_id: string
          zip?: string | null
        }
        Update: {
          appointment_result_id?: number | null
          appointment_status_id?: number | null
          city?: string | null
          conversation_status?: string | null
          created_at?: string | null
          created_by?: string | null
          crm_id?: string | null
          email?: string | null
          firstname?: string
          id?: string
          is_completed?: boolean | null
          last_action_at?: string | null
          last_action_type?: string | null
          lastname?: string
          lead_source?: string | null
          lead_status?: string | null
          lead_status_id?: number | null
          market?: string | null
          metadata?: Json | null
          name?: string | null
          notes?: string | null
          opt_in_through?: string
          opted_in_email?: boolean | null
          opted_in_sms?: boolean | null
          phone_number?: string
          product?: string | null
          st_address?: string | null
          state?: string | null
          tags?: Json | null
          unread_count?: number | null
          updated_at?: string | null
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
      flow_folders: {
        Row: {
          created_at: string | null
          id: string
          name: string
          updated_at: string | null
          workspace_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          updated_at?: string | null
          workspace_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          updated_at?: string | null
          workspace_id?: string | null
        }
        Relationships: [
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
            foreignKeyName: "message_events_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "campaign_messages"
            referencedColumns: ["id"]
          },
        ]
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
            referencedRelation: "flow_folders"
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
      pipeline_deals: {
        Row: {
          amount: number | null
          contact_id: string
          created_at: string | null
          id: string
          status: string
          updated_at: string | null
        }
        Insert: {
          amount?: number | null
          contact_id: string
          created_at?: string | null
          id?: string
          status: string
          updated_at?: string | null
        }
        Update: {
          amount?: number | null
          contact_id?: string
          created_at?: string | null
          id?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pipeline_deals_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contact_current_status"
            referencedColumns: ["contact_id"]
          },
          {
            foreignKeyName: "pipeline_deals_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      pipeline_stages: {
        Row: {
          color: string | null
          created_at: string | null
          description: string | null
          icon: string | null
          id: string
          is_active: boolean | null
          is_completed: boolean | null
          metadata: Json | null
          name: string
          order_index: number
          pipeline_id: string | null
          position: number
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          is_completed?: boolean | null
          metadata?: Json | null
          name: string
          order_index: number
          pipeline_id?: string | null
          position: number
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          is_completed?: boolean | null
          metadata?: Json | null
          name?: string
          order_index?: number
          pipeline_id?: string | null
          position?: number
          updated_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pipeline_stages_pipeline_id_fkey"
            columns: ["pipeline_id"]
            isOneToOne: false
            referencedRelation: "pipelines"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pipeline_stages_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "user_profiles_with_workspace"
            referencedColumns: ["workspace_id"]
          },
          {
            foreignKeyName: "pipeline_stages_workspace_id_fkey"
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
          description: string | null
          id: string
          name: string
          updated_at: string | null
          workspace_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          updated_at?: string | null
          workspace_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          updated_at?: string | null
          workspace_id?: string | null
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
      twilio_numbers: {
        Row: {
          created_at: string | null
          friendly_name: string | null
          id: string
          is_active: boolean | null
          phone_number: string
          updated_at: string | null
          workspace_id: string
        }
        Insert: {
          created_at?: string | null
          friendly_name?: string | null
          id?: string
          is_active?: boolean | null
          phone_number: string
          updated_at?: string | null
          workspace_id: string
        }
        Update: {
          created_at?: string | null
          friendly_name?: string | null
          id?: string
          is_active?: boolean | null
          phone_number?: string
          updated_at?: string | null
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
      user_profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          full_name: string | null
          id: string
          timezone: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id: string
          timezone?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          timezone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      webhook_logs: {
        Row: {
          error_message: string | null
          id: string
          payload: Json | null
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
      workspace_invites: {
        Row: {
          created_at: string
          email: string
          expires_at: string
          id: string
          invited_by: string | null
          role: string
          workspace_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          expires_at?: string
          id?: string
          invited_by?: string | null
          role: string
          workspace_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          expires_at?: string
          id?: string
          invited_by?: string | null
          role?: string
          workspace_id?: string | null
        }
        Relationships: []
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
      workspace_twilio_config: {
        Row: {
          account_sid: string
          auth_token: string
          created_at: string | null
          id: string
          is_configured: boolean | null
          updated_at: string | null
          webhook_type: string | null
          webhook_url: string | null
          workspace_id: string | null
        }
        Insert: {
          account_sid: string
          auth_token: string
          created_at?: string | null
          id?: string
          is_configured?: boolean | null
          updated_at?: string | null
          webhook_type?: string | null
          webhook_url?: string | null
          workspace_id?: string | null
        }
        Update: {
          account_sid?: string
          auth_token?: string
          created_at?: string | null
          id?: string
          is_configured?: boolean | null
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
          id: string
          is_default: boolean | null
          name: string
          settings: Json | null
          updated_at: string
          workspace_code: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_default?: boolean | null
          name: string
          settings?: Json | null
          updated_at?: string
          workspace_code?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_default?: boolean | null
          name?: string
          settings?: Json | null
          updated_at?: string
          workspace_code?: string | null
        }
        Relationships: []
      }
    }
    Views: {
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
            columns: ["board_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "board_performance_ranking"
            referencedColumns: ["board_id", "workspace_id"]
          },
          {
            foreignKeyName: "fk_board"
            columns: ["board_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "boards"
            referencedColumns: ["id", "workspace_id"]
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
            columns: ["board_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "board_performance_ranking"
            referencedColumns: ["board_id", "workspace_id"]
          },
          {
            foreignKeyName: "fk_board"
            columns: ["board_id", "workspace_id"]
            isOneToOne: false
            referencedRelation: "boards"
            referencedColumns: ["id", "workspace_id"]
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
            columns: ["lead_status_id"]
            isOneToOne: false
            referencedRelation: "status_options"
            referencedColumns: ["id"]
          },
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
            referencedRelation: "statuses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "status_timelines_status_id_fkey"
            columns: ["appointment_status_id"]
            isOneToOne: false
            referencedRelation: "statuses"
            referencedColumns: ["id"]
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
      binary_quantize:
        | {
            Args: {
              "": string
            }
            Returns: unknown
          }
        | {
            Args: {
              "": unknown
            }
            Returns: unknown
          }
      build_segment_query: {
        Args: {
          segment_id: string
        }
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
      check_onboarding_status: {
        Args: {
          p_user_id: string
          p_workspace_id: string
        }
        Returns: {
          is_completed: boolean
          created_at: string
          updated_at: string
        }[]
      }
      cleanup_old_segment_jobs: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      complete_onboarding: {
        Args: {
          p_user_id: string
          p_workspace_id: string
        }
        Returns: boolean
      }
      detect_message_type: {
        Args: {
          message_text: string
        }
        Returns: string
      }
      evaluate_segment_conditions: {
        Args: {
          contact_record: Json
          segment_id: string
        }
        Returns: boolean
      }
      exec_sql: {
        Args: {
          sql_query: string
        }
        Returns: undefined
      }
      execute_sql: {
        Args: {
          sql_query: string
        }
        Returns: undefined
      }
      generate_workspace_code: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_workspace_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_user_workspaces: {
        Args: Record<PropertyKey, never>
        Returns: string[]
      }
      get_webhook_url: {
        Args: {
          webhook_id: string
          workspace_id: string
        }
        Returns: string
      }
      halfvec_avg: {
        Args: {
          "": number[]
        }
        Returns: unknown
      }
      halfvec_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      halfvec_send: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: {
          "": unknown[]
        }
        Returns: number
      }
      hnsw_bit_support: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      hnswhandler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ivfflat_bit_support: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      ivfflathandler: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      l2_norm:
        | {
            Args: {
              "": unknown
            }
            Returns: number
          }
        | {
            Args: {
              "": unknown
            }
            Returns: number
          }
      l2_normalize:
        | {
            Args: {
              "": string
            }
            Returns: string
          }
        | {
            Args: {
              "": unknown
            }
            Returns: unknown
          }
        | {
            Args: {
              "": unknown
            }
            Returns: unknown
          }
      refresh_segment_contacts: {
        Args: {
          p_segment_id: string
        }
        Returns: number
      }
      sparsevec_out: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
      sparsevec_send: {
        Args: {
          "": unknown
        }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: {
          "": unknown[]
        }
        Returns: number
      }
      update_contact_status: {
        Args: {
          p_contact_id: string
          p_status_type: string
          p_status_id: number
          p_workspace_id: string
          p_notes?: string
          p_created_by?: string
        }
        Returns: string
      }
      update_conversation_status:
        | {
            Args: {
              p_contact_id: string
              p_status: string
              p_unread_count: number
            }
            Returns: undefined
          }
        | {
            Args: {
              p_contact_id: string
              p_status: string
              p_unread_count?: number
            }
            Returns: boolean
          }
      vector_avg: {
        Args: {
          "": number[]
        }
        Returns: string
      }
      vector_dims:
        | {
            Args: {
              "": string
            }
            Returns: number
          }
        | {
            Args: {
              "": unknown
            }
            Returns: number
          }
      vector_norm: {
        Args: {
          "": string
        }
        Returns: number
      }
      vector_out: {
        Args: {
          "": string
        }
        Returns: unknown
      }
      vector_send: {
        Args: {
          "": string
        }
        Returns: string
      }
      vector_typmod_in: {
        Args: {
          "": unknown[]
        }
        Returns: number
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
      message_status:
        | "draft"
        | "scheduled"
        | "sending"
        | "sent"
        | "delivered"
        | "failed"
      message_type: "sms" | "email" | "whatsapp" | "voice"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
