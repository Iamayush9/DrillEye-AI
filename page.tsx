import CameraAnalysis from '@/components/drill/CameraAnalysis';
import Navbar from '@/components/layout/Navbar';
import { Separator } from '@/components/ui/separator';

export default function DrillPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-6 bg-accent rounded-full" />
            <h1 className="text-3xl font-bold font-headline tracking-tight text-primary uppercase">Training Ground</h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Ensure you are in a well-lit environment and the camera can see your entire body from head to toe for accurate analysis.
          </p>
        </header>

        <Separator className="mb-8 opacity-50" />

        <CameraAnalysis />
      </main>
    </div>
  );
}
