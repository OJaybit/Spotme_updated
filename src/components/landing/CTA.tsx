import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10" />
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=&quot;0 0 40 40&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;white&quot; fill-opacity=&quot;0.05&quot;%3E%3Cpath d=&quot;M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20z&quot;/%3E%3C/g%3E%3C/svg%3E')] opacity-20" />


      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Join thousands of professionals
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Launch Your
            <br />
            Digital Identity?
          </h2>
          
          <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
            Create your professional portfolio in minutes. No coding required, no monthly fees. 
            Just you, your story, and a beautiful way to share it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                Start Building Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/joshua">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
                View Demo
              </Button>
            </Link>
          </div>

          <p className="text-white/70 text-sm mt-6">
            Free forever • No credit card required • Launch in under 5 minutes
          </p>
        </motion.div>
      </div>
     </section>
  );
};
