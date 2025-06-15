
import { FloatingVolumeButton } from '@/components/FloatingVolumeButton';
import { SettingsPanel } from '@/components/SettingsPanel';
import { Volume2 } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-background text-foreground">
      <header className="flex flex-col items-center text-center mb-8">
        <div className="p-3 mb-4 bg-primary/10 rounded-full border border-accent">
          <Volume2 className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold">Shahin Volume</h1>
        <p className="text-muted-foreground max-w-md mt-2">
          A simple on-screen volume control for when hardware buttons fail.
          Built with ❤️ for my wife.
        </p>
      </header>

      <main className="w-full">
        <SettingsPanel />
      </main>

      <FloatingVolumeButton />

      <footer className="text-center mt-12 text-sm text-muted-foreground">
        <p>Double-tap the button to mute/unmute. Drag to move it.</p>
        <p>&copy; 2025. A Lovable Creation.</p>
      </footer>
    </div>
  );
};

export default Index;
