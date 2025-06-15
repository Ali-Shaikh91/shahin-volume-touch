
import React from 'react';
import { useVolume } from '@/context/VolumeContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

export const SettingsPanel = () => {
  const { transparency, setTransparency } = useVolume();

  return (
    <Card className="w-full max-w-sm mx-auto bg-card/50 backdrop-blur-sm border-border/50">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Adjust the floating button's appearance.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="transparency">Button Transparency</Label>
          <div className="flex items-center gap-4">
            <Slider
              id="transparency"
              min={0.1}
              max={1}
              step={0.05}
              value={[transparency]}
              onValueChange={(value) => setTransparency(value[0])}
            />
            <span className="text-sm font-medium text-muted-foreground">
              {Math.round(transparency * 100)}%
            </span>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-muted/50 border border-dashed border-border">
          <h4 className="font-semibold text-foreground">For Native Functionality</h4>
          <p className="text-sm text-muted-foreground mt-1">
            To control system volume and display over other apps, this web app needs to be wrapped in a native container like Capacitor.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
