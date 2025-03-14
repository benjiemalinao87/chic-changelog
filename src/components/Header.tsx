
import React from 'react';
import { motion } from 'framer-motion';
import { Bell } from 'lucide-react';

const Header = () => {
  return (
    <motion.header 
      className="sticky top-0 z-10 glass px-6 py-4 mb-8 flex items-center justify-between"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-4">
        <motion.div
          className="h-9 w-9 bg-apple-blue rounded-full flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Bell className="h-5 w-5 text-white" />
        </motion.div>
        <div>
          <h1 className="text-xl font-medium">Changelog</h1>
          <p className="text-sm text-muted-foreground">Track all your updates</p>
        </div>
      </div>
      
      <motion.div 
        className="hidden md:flex items-center space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="text-sm text-right">
          <p className="text-muted-foreground">Latest Update</p>
          <p className="font-medium">v2.5.0 · June 15, 2023</p>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
