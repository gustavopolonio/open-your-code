
import React from 'react';
import { motion } from 'framer-motion';

const StatsCard = () => {
  const stats = [
    { label: 'Projects Done', value: '500+' },
    { label: 'Departments', value: '23' },
    { label: 'Selected in Ignite', value: '200+' }
  ];

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3">
        {stats.map((stat, index) => (
          <div 
            key={stat.label}
            className={`p-8 flex flex-col items-center justify-center ${
              index < stats.length - 1 ? 'md:border-r border-gray-100' : ''
            }`}
          >
            <h2 className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</h2>
            <p className="text-gray-600 text-center">{stat.label}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default StatsCard;
