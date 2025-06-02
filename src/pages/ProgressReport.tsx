
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Check, ArrowRight, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import MetricsSection from '@/components/MetricsSection';

const ProgressReport = () => {
  const [activeTab, setActiveTab] = useState("completed");

  return (
    <div className="min-h-screen bg-background">
      <motion.div 
        className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        
        <motion.div 
          className="mb-8 neo-blur rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-2xl font-medium mb-2 text-gradient">
                Project Progress Report
              </h2>
              <p className="text-muted-foreground">
                Track the development roadmap and implementation status.
              </p>
            </div>
          </div>
        </motion.div>

        <MetricsSection />
        
        <motion.div 
          className="neo-blur rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Tabs defaultValue="completed" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 w-full mb-6">
              <TabsTrigger value="completed" className="flex items-center gap-2">
                <Check className="h-4 w-4" />
                <span className="hidden sm:inline">Completed</span>
              </TabsTrigger>
              <TabsTrigger value="inprogress" className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4" />
                <span className="hidden sm:inline">In Progress</span>
              </TabsTrigger>
              <TabsTrigger value="roadmap" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Roadmap</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="completed" className="space-y-8 entry-animation">
              <CompletedFeatures />
            </TabsContent>
            
            <TabsContent value="inprogress" className="space-y-8 entry-animation">
              <InProgressFeatures />
            </TabsContent>
            
            <TabsContent value="roadmap" className="space-y-8 entry-animation">
              <RoadmapFeatures />
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>
    </div>
  );
};

const FeatureSection = ({ title, children }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-medium text-gradient-primary">{title}</h3>
    <div className="pl-4 border-l-2 border-primary/20 space-y-6">
      {children}
    </div>
  </div>
);

const FeatureItem = ({ title, items }) => (
  <div className="glass-morphism p-4 rounded-lg">
    <h4 className="font-medium text-white mb-2 flex items-center gap-2">
      {title}
    </h4>
    <ul className="space-y-2 pl-6 text-sm text-muted-foreground">
      {items.map((item, index) => (
        <li key={index} className="list-disc">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const CompletedFeatures = () => (
  <>
    <FeatureSection title="Contact Management">
      <FeatureItem
        title="✅ Contact Filters Implementation"
        items={[
          "Created ContactFilters component with filters for market, lead source, appointment status, and opportunity status",
          "Added date range filters and metadata field filtering",
          "Implemented active filters display with clear functionality",
          "Enhanced contactV2State with comprehensive filter support",
          "Optimized filter state management with proper debouncing"
        ]}
      />
      <FeatureItem
        title="✅ Bulk Status Change Functionality"
        items={[
          "Added workspace-specific lead status options in bulk actions menu",
          "Implemented dynamic status fetching from status_options table",
          "Integrated with existing workspace isolation system",
          "Maintained Mac OS design principles with clean submenu interface"
        ]}
      />
      <FeatureItem
        title="✅ Contact Status Management"
        items={[
          "Implemented proper status categories and options setup for each workspace",
          "Created default status categories: Lead Status, Appointment Status, Appointment Result",
          "Added sensible default options with consistent color scheme",
          "Fixed status fetching in contacts page"
        ]}
      />
    </FeatureSection>

    <FeatureSection title="Campaign Management">
      <FeatureItem
        title="✅ Campaign Builder Component Updates"
        items={[
          "Separated CampaignBuilder into focused components (CampaignNode, CampaignSetup, CampaignReview)",
          "Enhanced Mac OS-inspired styling with consistent purple accent color scheme",
          "Added proper error handling and validation",
          "Implemented loading states for async operations",
          "Enhanced state management with useCallback"
        ]}
      />
      <FeatureItem
        title="✅ Campaign View Improvements"
        items={[
          "Added dual view options (card view and list view)",
          "Implemented view toggle with ButtonGroup for segmented control",
          "Enhanced metrics display with proper formatting",
          "Maintained Mac OS design principles throughout"
        ]}
      />
      <FeatureItem
        title="✅ Campaign Edit Functionality"
        items={[
          "Fixed non-functional edit button in ActiveCampaigns",
          "Implemented fetchCampaignDetails to retrieve campaign data",
          "Updated CampaignBuilder to handle existing campaign data",
          "Enhanced saveCampaign function to support updates"
        ]}
      />
      <FeatureItem
        title="✅ ActiveCampaigns Component Improvements"
        items={[
          "Removed hardcoded mock campaign data",
          "Implemented dynamic data fetching from Supabase",
          "Added search functionality and filtering",
          "Implemented campaign duplication and deletion",
          "Fixed Supabase API key configuration"
        ]}
      />
    </FeatureSection>

    <FeatureSection title="Twilio Integration">
      <FeatureItem
        title="✅ Twilio Configuration Management"
        items={[
          "Modified IntegrationSettings.js to automatically set webhook configuration",
          "Implemented proper webhook type and URL handling",
          "Added validation before webhook configuration",
          "Fixed phone number display in UI with proper formatting"
        ]}
      />
      <FeatureItem
        title="✅ Phone Number Management"
        items={[
          "Implemented checkbox selection for phone numbers",
          "Added validation before webhook configuration",
          "Created twilio_numbers table with proper schema and Row Level Security",
          "Added automatic phone number sync after saving Twilio configuration"
        ]}
      />
    </FeatureSection>

    <FeatureSection title="Infrastructure & Documentation">
      <FeatureItem
        title="✅ Supabase Integration Fixes"
        items={[
          "Fixed \"Invalid API key\" error in ActiveCampaigns component",
          "Created unified Supabase client configuration",
          "Added better error handling for Supabase operations",
          "Implemented environment variable fallbacks"
        ]}
      />
      <FeatureItem
        title="✅ Changelog Automation"
        items={[
          "Implemented post-push hook for automatic changelog updates",
          "Created structured format for consistent documentation",
          "Added category-based organization of changes",
          "Implemented team detection based on changed files"
        ]}
      />
      <FeatureItem
        title="✅ Workspace Validation"
        items={[
          "Fixed React hooks violations in workspace validation",
          "Implemented dependency injection for error handlers",
          "Added proper cleanup for workspace permission cache",
          "Enhanced error logging with proper context"
        ]}
      />
      <FeatureItem
        title="✅ Mac OS Design Implementation"
        items={[
          "Implemented clean, minimal interface with ample white space",
          "Added subtle shadows and depth for hierarchy",
          "Used consistent color scheme with purple accent",
          "Implemented proper typography and interactive elements",
          "Enhanced feedback mechanisms with toast notifications"
        ]}
      />
    </FeatureSection>
  </>
);

const InProgressFeatures = () => (
  <>
    <FeatureSection title="LiveChat Improvements">
      <FeatureItem
        title="🔄 Dynamic Texting System"
        items={[
          "Working on fixing outbound text messages from LiveChat UI",
          "Troubleshooting inbound text messages not being received",
          "Investigating Twilio configuration issues",
          "Reviewing socket connection between frontend and backend"
        ]}
      />
    </FeatureSection>

    <FeatureSection title="Campaign Management Extensions">
      <FeatureItem
        title="🔄 Campaign Analytics Dashboard"
        items={[
          "Designing data collection system for message delivery status",
          "Planning database schema for campaign_executions and campaign_metrics",
          "Creating UI components for analytics display",
          "Implementing performance optimization for data aggregation"
        ]}
      />
      <FeatureItem
        title="🔄 Campaign Templates System"
        items={[
          "Designing template system architecture for reusable campaign structures",
          "Planning template creation interface",
          "Implementing template management functionality"
        ]}
      />
    </FeatureSection>

    <FeatureSection title="Contact Management Extensions">
      <FeatureItem
        title="🔄 Saved Filters Functionality"
        items={[
          "Designing saved filters system for contact management",
          "Planning filter presets for common queries",
          "Implementing export functionality for filtered contacts"
        ]}
      />
    </FeatureSection>
  </>
);

const RoadmapFeatures = () => (
  <>
    <FeatureSection title="Campaign Builder Enhancements">
      <FeatureItem
        title="📅 A/B Testing (Q3 2025)"
        items={[
          "Split testing framework for message variants",
          "Performance comparison analytics",
          "Statistical significance calculations",
          "Automated winner selection",
          "Test setup interface"
        ]}
      />
      <FeatureItem
        title="📅 Advanced Segmentation (Q4 2025)"
        items={[
          "Dynamic segment creation",
          "Behavioral targeting",
          "Engagement-based segmentation",
          "Custom attribute filtering",
          "Real-time segment updates"
        ]}
      />
      <FeatureItem
        title="📅 Conditional Branching (Q4 2025)"
        items={[
          "Message flow branching",
          "Response-based routing",
          "Time-based conditions",
          "Engagement-based paths",
          "Custom rule creation"
        ]}
      />
    </FeatureSection>

    <FeatureSection title="Future Expansions">
      <FeatureItem
        title="📅 Project Management"
        items={[
          "Task tracking and assignment",
          "Project timeline visualization",
          "Resource allocation",
          "Progress tracking"
        ]}
      />
      <FeatureItem
        title="📅 Note Taking System"
        items={[
          "Rich text editor for notes",
          "Attachment support",
          "Note categorization",
          "Search functionality"
        ]}
      />
      <FeatureItem
        title="📅 3D Maps for Installers"
        items={[
          "Interactive 3D visualization",
          "Installation planning",
          "Site mapping",
          "Measurement tools"
        ]}
      />
      <FeatureItem
        title="📅 Invoicing System"
        items={[
          "Invoice generation",
          "Payment tracking",
          "Tax calculation",
          "Report generation"
        ]}
      />
      <FeatureItem
        title="📅 Embeddable Standalone LiveChat"
        items={[
          "White-label solution",
          "iframe/embed support",
          "Customization options",
          "Third-party integration"
        ]}
      />
    </FeatureSection>

    <FeatureSection title="Development Guidelines">
      <FeatureItem
        title="Ongoing Best Practices"
        items={[
          "Maintain Mac OS design principles",
          "Keep code clean and focused (<200 lines)",
          "Implement proper error handling",
          "Ensure workspace isolation",
          "Focus on performance optimization"
        ]}
      />
    </FeatureSection>
  </>
);

export default ProgressReport;
