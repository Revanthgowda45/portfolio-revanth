import React from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = '', 
  variant = 'ghost',
  size = 'icon'
}) => {
  const { theme, toggleTheme } = useTheme();

  const getNextTheme = () => {
    if (theme === 'light') return 'dark';
    if (theme === 'dark') return 'system';
    return 'light';
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4 transition-all" />;
      case 'dark':
        return <Moon className="h-4 w-4 transition-all" />;
      case 'system':
        return <Monitor className="h-4 w-4 transition-all" />;
      default:
        return <Monitor className="h-4 w-4 transition-all" />;
    }
  };

  const getLabel = () => {
    const nextTheme = getNextTheme();
    return `Switch to ${nextTheme} theme`;
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      className={`transition-all duration-200 hover:scale-105 ${className}`}
      aria-label={getLabel()}
      title={getLabel()}
    >
      {getIcon()}
    </Button>
  );
};

export default ThemeToggle;
