import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface PresentationLayoutProps {
  slideContent: React.ReactNode;
  demoPanel: React.ReactNode;
  className?: string;
}

const PresentationLayout: React.FC<PresentationLayoutProps> = ({
  slideContent,
  demoPanel,
  className,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return (
    <div
      className={cn(
        "min-h-[calc(100vh-4rem)] grid grid-cols-1 md:grid-cols-2 w-full transition-all",
        mounted ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <div className="flex flex-col p-6 md:p-12 overflow-auto min-h-[50vh] md:h-[calc(100vh-4rem)] ">
        {slideContent}
      </div>

      <div className="bg-muted/30 flex flex-col p-6 md:p-12 overflow-auto min-h-[50vh] md:h-[calc(100vh-4rem)] animate-scale-in dark:bg-gray-900/30">
        {demoPanel}
      </div>
    </div>
  );
};

export default PresentationLayout;
