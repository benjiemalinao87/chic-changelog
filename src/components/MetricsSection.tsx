
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { getChangelogEntries } from '@/services/supabaseClient';
import { Skeleton } from '@/components/ui/skeleton';
import { Calendar, TrendingUp } from 'lucide-react';

const MetricsSection = () => {
  const [metricsData, setMetricsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalCounts, setTotalCounts] = useState({
    features: 0,
    bugs: 0,
    enhancements: 0
  });

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setLoading(true);
        const entries = await getChangelogEntries();
        
        // Get the last 30 days
        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(startDate.getDate() - 29); // 30 days including today
        
        // Generate array of last 30 days
        const last30Days = [];
        for (let i = 0; i < 30; i++) {
          const date = new Date(startDate);
          date.setDate(startDate.getDate() + i);
          last30Days.push({
            date: date.toISOString().split('T')[0],
            displayDate: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            features: 0,
            bugs: 0,
            enhancements: 0
          });
        }
        
        // Count entries by date and category
        let totalFeatures = 0;
        let totalBugs = 0;
        let totalEnhancements = 0;
        
        entries.forEach(entry => {
          const entryDate = new Date(entry.release_date).toISOString().split('T')[0];
          const dayData = last30Days.find(day => day.date === entryDate);
          
          if (dayData) {
            const category = entry.category.toLowerCase();
            if (category.includes('feature') || category.includes('new')) {
              dayData.features++;
              totalFeatures++;
            } else if (category.includes('bug') || category.includes('fix')) {
              dayData.bugs++;
              totalBugs++;
            } else if (category.includes('enhancement') || category.includes('improvement')) {
              dayData.enhancements++;
              totalEnhancements++;
            }
          }
        });
        
        setTotalCounts({
          features: totalFeatures,
          bugs: totalBugs,
          enhancements: totalEnhancements
        });
        
        setMetricsData(last30Days);
      } catch (error) {
        console.error('Error fetching metrics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  const chartConfig = {
    features: {
      label: "Features",
      color: "hsl(262, 83%, 58%)",
    },
    bugs: {
      label: "Bugs Fixed",
      color: "hsl(142, 76%, 36%)",
    },
    enhancements: {
      label: "Enhancements", 
      color: "hsl(217, 91%, 60%)",
    },
  };

  if (loading) {
    return (
      <motion.div 
        className="neo-blur rounded-xl p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="h-5 w-5 text-purple-500" />
          <h3 className="text-xl font-medium text-gradient">Development Metrics</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass-morphism p-4 rounded-lg">
              <Skeleton className="h-4 w-20 mb-2" />
              <Skeleton className="h-8 w-12" />
            </div>
          ))}
        </div>
        
        <Skeleton className="h-64 w-full" />
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="neo-blur rounded-xl p-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
    >
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="h-5 w-5 text-purple-500" />
        <h3 className="text-xl font-medium text-gradient">Development Metrics</h3>
        <div className="flex items-center gap-1 text-sm text-muted-foreground ml-auto">
          <Calendar className="h-4 w-4" />
          Last 30 days
        </div>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="glass-morphism p-4 rounded-lg">
          <div className="text-sm text-muted-foreground mb-1">Features Shipped</div>
          <div className="text-2xl font-bold text-purple-400">{totalCounts.features}</div>
        </div>
        <div className="glass-morphism p-4 rounded-lg">
          <div className="text-sm text-muted-foreground mb-1">Bugs Squashed</div>
          <div className="text-2xl font-bold text-green-400">{totalCounts.bugs}</div>
        </div>
        <div className="glass-morphism p-4 rounded-lg">
          <div className="text-sm text-muted-foreground mb-1">Enhancements</div>
          <div className="text-2xl font-bold text-blue-400">{totalCounts.enhancements}</div>
        </div>
      </div>

      {/* Chart */}
      <ChartContainer config={chartConfig} className="h-64 -mx-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={metricsData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <XAxis 
              dataKey="displayDate" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
              interval={0}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis 
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar 
              dataKey="features" 
              fill="var(--color-features)"
              radius={[2, 2, 0, 0]}
              stackId="stack"
            />
            <Bar 
              dataKey="bugs" 
              fill="var(--color-bugs)"
              radius={[2, 2, 0, 0]}
              stackId="stack"
            />
            <Bar 
              dataKey="enhancements" 
              fill="var(--color-enhancements)"
              radius={[2, 2, 0, 0]}
              stackId="stack"
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </motion.div>
  );
};

export default MetricsSection;
