import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { EditorSidebar } from '../components/editor/EditorSidebar';
import { HeroEditor } from '../components/editor/sections/HeroEditor';
import { AboutEditor } from '../components/editor/sections/AboutEditor';
import { SkillsEditor } from '../components/editor/sections/SkillsEditor';
import { ProjectsEditor } from '../components/editor/sections/ProjectsEditor';
import { ContactEditor } from '../components/editor/sections/ContactEditor';
import { ThemeEditor } from '../components/editor/sections/ThemeEditor';
import { PortfolioPreview } from '../components/editor/PortfolioPreview';
import { usePortfolioStore } from '../store/portfolioStore';
import { useAuthStore } from '../store/authStore';
import toast from 'react-hot-toast';

export const Editor: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { portfolio, setPortfolio } = usePortfolioStore();
  const { user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if no user
    if (!user) {
      navigate('/login');
      return;
    }
    
    // Initialize portfolio if it doesn't exist
    if (!portfolio) {
      const defaultPortfolio = {
        id: '1',
        user_id: user.id,
        username: user.username || 'user',
        hero: {
          name: '',
          title: '',
          avatar_url: '',
          cta_text: 'See my work',
          cta_url: ''
        },
        about: {
          bio: '',
          mission: ''
        },
        skills: {
          skills: []
        },
        projects: {
          projects: []
        },
        contact: {
          email: user.email,
          phone: '',
          social_links: [],
          show_contact_form: true
        },
        theme: {
          mode: 'light' as const,
          primary_color: '#3B82F6',
          secondary_color: '#10B981',
          accent_color: '#F97316',
          font_family: 'Inter, sans-serif'
        },
        is_published: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      setPortfolio(defaultPortfolio);
    }
  }, [portfolio, user, setPortfolio, navigate]);

  const handleSave = async () => {
    try {
      // Simulate saving to database
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Portfolio saved successfully!');
    } catch (error) {
      toast.error('Failed to save portfolio');
    }
  };

  const handlePublish = async () => {
    try {
      // Simulate publishing
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (portfolio) {
        setPortfolio({ ...portfolio, is_published: true });
        toast.success('Portfolio published successfully!');
        toast.success(`Your portfolio is live at spotme.com/${portfolio.username}`);
      }
    } catch (error) {
      toast.error('Failed to publish portfolio');
    }
  };

  const renderEditor = () => {
    switch (activeSection) {
      case 'hero':
        return <HeroEditor />;
      case 'about':
        return <AboutEditor />;
      case 'skills':
        return <SkillsEditor />;
      case 'projects':
        return <ProjectsEditor />;
      case 'contact':
        return <ContactEditor />;
      case 'theme':
        return <ThemeEditor />;
      default:
        return <HeroEditor />;
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <EditorSidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onSave={handleSave}
        onPublish={handlePublish}
        isPublished={portfolio?.is_published || false}
      />

      {/* Editor Panel */}
      <div className="w-96 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-6">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderEditor()}
          </motion.div>
        </div>
      </div>

      {/* Preview Panel */}
      <PortfolioPreview />
    </div>
  );
};