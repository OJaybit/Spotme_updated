import React from 'react';
import { Upload, X } from 'lucide-react';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';
import { usePortfolioStore } from '../../../store/portfolioStore';
import { uploadFile, getPublicUrl } from '../../../lib/supabase';
import toast from 'react-hot-toast';

export const HeroEditor: React.FC = () => {
  const { portfolio, updateHero } = usePortfolioStore();
  const hero = portfolio?.hero;

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        toast.loading('Uploading image...');
        
        // Create unique filename
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `avatars/${fileName}`;
        
        // Upload to Supabase Storage
        await uploadFile('portfolios', filePath, file);
        const publicUrl = getPublicUrl('portfolios', filePath);
        
        updateHero({ avatar_url: publicUrl });
        toast.dismiss();
        toast.success('Image uploaded successfully!');
      } catch (error) {
        toast.dismiss();
        toast.error('Failed to upload image');
        console.error('Upload error:', error);
      }
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
        
        <div className="space-y-4">
          <Input
            label="Full Name"
            placeholder="John Doe"
            value={hero?.name || ''}
            onChange={(e) => updateHero({ name: e.target.value })}
          />
          
          <Input
            label="Professional Title"
            placeholder="Frontend Developer & SaaS Builder"
            value={hero?.title || ''}
            onChange={(e) => updateHero({ title: e.target.value })}
          />
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Image
            </label>
            <div className="flex items-center space-x-4">
              {hero?.avatar_url ? (
                <div className="relative">
                  <img
                    src={hero.avatar_url}
                    alt="Profile"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <button
                    onClick={() => updateHero({ avatar_url: undefined })}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ) : (
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <Upload className="w-6 h-6 text-gray-400" />
                </div>
              )}
              <div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="avatar-upload"
                />
                <label htmlFor="avatar-upload">
                  <Button variant="outline" size="sm" className="cursor-pointer">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Image
                  </Button>
                </label>
              </div>
            </div>
          </div>
          
          <Input
            label="Call-to-Action Text"
            placeholder="See my work"
            value={hero?.cta_text || ''}
            onChange={(e) => updateHero({ cta_text: e.target.value })}
          />
          
          <Input
            label="Call-to-Action URL (optional)"
            placeholder="https://github.com/username"
            value={hero?.cta_url || ''}
            onChange={(e) => updateHero({ cta_url: e.target.value })}
          />
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              About Me Section Title
            </label>
            <Input
              placeholder="About Me"
              value={hero?.about_title || 'About Me'}
              onChange={(e) => updateHero({ about_title: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};