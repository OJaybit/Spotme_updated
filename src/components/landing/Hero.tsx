import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users, Globe } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              The simplest way to launch your digital identity
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Build Your
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                {' '}Perfect{' '}
              </span>
              Portfolio
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Create stunning one-page portfolios in minutes. No coding required. 
              Customize everything, publish instantly, and share your professional story with the world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link to="/signup">
              <Button size="lg" className="text-lg px-8 py-4">
                Start Building Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/joshua">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                View Demo
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
              <div className="text-gray-600">Portfolios Created</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl mx-auto mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-xl mx-auto mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">99%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};