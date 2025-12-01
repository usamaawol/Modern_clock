import { Bell, Calendar, Settings, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';

type TabType = 'dashboard' | 'alarms' | 'planner' | 'settings';

interface NavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const tabs = [
  { id: 'dashboard' as const, icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'alarms' as const, icon: Bell, label: 'Alarms' },
  { id: 'planner' as const, icon: Calendar, label: 'Planner' },
  { id: 'settings' as const, icon: Settings, label: 'Settings' },
];

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pt-2">
      <div className="glass-card mx-auto max-w-lg">
        <div className="flex items-center justify-around p-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  'flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300',
                  isActive
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                )}
              >
                <Icon className={cn('w-5 h-5 transition-transform', isActive && 'scale-110')} />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
