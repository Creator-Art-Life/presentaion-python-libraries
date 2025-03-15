
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { CheckCircle } from 'lucide-react';

export interface ControlOption {
  id: string;
  label: string;
  type: 'button' | 'slider' | 'toggle';
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  active?: boolean;
}

interface DemoControlsProps {
  controls: ControlOption[];
  onControlChange: (id: string, value: number | boolean) => void;
  className?: string;
}

const DemoControls: React.FC<DemoControlsProps> = ({
  controls,
  onControlChange,
  className,
}) => {
  return (
    <div className={cn("space-y-6", className)}>
      <h3 className="text-lg font-medium mb-4">Controls</h3>
      <div className="grid grid-cols-1 gap-4">
        {controls.map((control) => (
          <div key={control.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">{control.label}</label>
              {control.type === 'toggle' && (
                <span className="text-xs text-muted-foreground">
                  {control.active ? 'Enabled' : 'Disabled'}
                </span>
              )}
            </div>
            
            {control.type === 'button' && (
              <Button
                variant="secondary"
                className="w-full justify-start bg-accent"
                onClick={() => onControlChange(control.id, true)}
              >
                Apply
              </Button>
            )}
            
            {control.type === 'slider' && (
              <div className="pt-2">
                <Slider
                  value={[control.value || 0]}
                  min={control.min || 0}
                  max={control.max || 100}
                  step={control.step || 1}
                  onValueChange={(value) => onControlChange(control.id, value[0])}
                  className="w-full"
                />
                <div className="mt-1 text-right">
                  <span className="text-xs font-medium">
                    {control.value}
                  </span>
                </div>
              </div>
            )}
            
            {control.type === 'toggle' && (
              <Button
                variant={control.active ? "default" : "outline"}
                className={cn(
                  "w-full justify-start",
                  control.active ? "bg-primary" : "bg-muted/50"
                )}
                onClick={() => onControlChange(control.id, !control.active)}
              >
                {control.active && (
                  <CheckCircle className="mr-2 h-4 w-4" />
                )}
                {control.active ? 'Enabled' : 'Enable'}
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DemoControls;
