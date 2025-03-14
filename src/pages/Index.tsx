
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import ChangelogList from '@/components/ChangelogList';
import ChangelogDetail from '@/components/ChangelogDetail';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { createChangelogViaWebhook } from '@/services/supabaseClient';

interface IndexProps {
  detailView?: boolean;
}

const Index: React.FC<IndexProps> = ({ detailView = false }) => {
  const [isSimulating, setIsSimulating] = useState(false);
  const { id } = useParams();

  // Example function to simulate a webhook POST
  const handleSimulateWebhook = async () => {
    setIsSimulating(true);
    try {
      // Example payload for simulating a new changelog entry
      const examplePayload = {
        title: "New Feature Release v2.5.0",
        content: "**Major improvements in this release:**\n\n- Added dark mode support across all platforms\n- Improved performance by 30% on mobile devices\n- Fixed issue with notifications not appearing on iOS\n\n**Minor updates:**\n- Updated dependencies to latest versions\n- Refreshed UI elements for better accessibility",
        category: "feature",
        release_date: new Date().toISOString(),
        released_by: "Sarah Johnson",
        dev: "Dev Team Alpha",
        lessons_learned: "**Lessons Learned:**\n\n- Cross-platform testing earlier in the cycle would have identified iOS issues sooner\n- Performance benchmarking helped us measure the actual impact of optimizations\n- User research was vital for creating an intuitive dark mode experience"
      };
      
      // Send the webhook payload directly to the endpoint
      await createChangelogViaWebhook(examplePayload);
      toast.success("Webhook simulated successfully!", {
        description: "Refresh the page to see the new entry.",
      });
    } catch (error) {
      console.error("Error simulating webhook:", error);
      toast.error("Failed to simulate webhook", {
        description: "Check console for details.",
      });
    } finally {
      setIsSimulating(false);
    }
  };

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
                {detailView ? "Changelog Details" : "Recent Updates"}
              </h2>
              <p className="text-muted-foreground">
                {detailView 
                  ? "Detailed information about this update."
                  : "Stay up to date with all the latest changes and improvements."}
              </p>
            </div>
            
            {!detailView && (
              <Button 
                variant="default" 
                onClick={handleSimulateWebhook}
                disabled={isSimulating}
                className="rounded-full neo-blur"
              >
                {isSimulating ? "Simulating..." : "Simulate Webhook"}
              </Button>
            )}
          </div>
        </motion.div>
        
        <motion.div 
          className="neo-blur rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {detailView ? (
            <ChangelogDetail />
          ) : (
            <ChangelogList />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
