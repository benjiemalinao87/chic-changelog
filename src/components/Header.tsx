
import React from 'react';
import { motion } from 'framer-motion';
import { Bell, BarChart2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Header = () => {
  // Get current date formatted as "Month DD, YYYY"
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <motion.header 
      className="sticky top-0 z-10 glass px-6 py-4 mb-8 flex items-center justify-between" 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-4">
        <Link to="/">
          <motion.div 
            className="h-9 w-9 bg-purple-500 rounded-full flex items-center justify-center" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell className="h-5 w-5 text-white" />
          </motion.div>
        </Link>
        <div>
          <h1 className="text-xl font-medium">Customer Connect</h1>
        </div>
      </div>
      
      <motion.div 
        className="flex items-center space-x-4" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              
            </NavigationMenuItem>
            <NavigationMenuItem>
              
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <motion.a 
          href="https://cc1.automate8.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium px-4 py-2 rounded-full shadow-[0_0_15px_rgba(155,135,245,0.5)] transition-all hover:shadow-[0_0_20px_rgba(155,135,245,0.7)] hover:scale-105" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: ['0 0 15px rgba(155,135,245,0.5)', '0 0 25px rgba(155,135,245,0.7)', '0 0 15px rgba(155,135,245,0.5)']
          }}
          transition={{
            boxShadow: {
              repeat: Infinity,
              duration: 2
            }
          }}
        >
          Sign up
        </motion.a>
        
        <div className="hidden md:block text-sm text-right">
          <p className="text-muted-foreground">Latest Update</p>
          <p className="font-medium">v0.29 · {currentDate}</p>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
