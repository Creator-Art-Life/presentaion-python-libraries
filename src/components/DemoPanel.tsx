import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBlock from "./CodeBlock";
import DemoControls, { ControlOption } from "./DemoControls";
import { ArrowRightIcon, RefreshCwIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DemoPanelProps {
  title: string;
  description?: string;
  demoComponent: React.ReactNode;
  codeSnippets: { name: string; code: string; language?: string }[];
  initialControls: ControlOption[];
  onControlsChange: (controls: ControlOption[]) => void;
  className?: string;
}

const DemoPanel: React.FC<DemoPanelProps> = ({
  title,
  description,
  demoComponent,
  codeSnippets,
  initialControls,
  onControlsChange,
  className,
}) => {
  const [controls, setControls] = useState<ControlOption[]>(initialControls);
  const [activeTab, setActiveTab] = useState<string>("controls");

  // Reset controls when initialControls change (slide change)
  useEffect(() => {
    setControls(initialControls);
  }, [initialControls]);

  const handleControlChange = (id: string, value: number | boolean) => {
    const updatedControls = controls.map((control) => {
      if (control.id === id) {
        if (typeof value === "boolean" && control.type === "toggle") {
          return { ...control, active: value };
        } else if (typeof value === "number" && control.type === "slider") {
          return { ...control, value };
        }
        return control;
      }
      return control;
    });

    setControls(updatedControls);
    onControlsChange(updatedControls);
  };

  const resetControls = () => {
    setControls(initialControls);
    onControlsChange(initialControls);
  };

  return (
    <div className={cn("flex flex-col h-full", className)}>
      <div className="mb-6 ">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>

      <Tabs
        defaultValue="controls"
        value={activeTab}
        onValueChange={setActiveTab}
        className="flex-1 flex flex-col"
      >
        <TabsList
          className="grid grid-cols-3 mb-6 "
          style={{ animationDelay: "0.2s" }}
        >
          <TabsTrigger value="controls">Controls</TabsTrigger>
          <TabsTrigger value="demo">Demo</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent
          value="controls"
          className=""
          style={{ animationDelay: "0.3s" }}
        >
          <div className="glass-card rounded-lg p-6">
            <DemoControls
              controls={controls}
              onControlChange={handleControlChange}
            />

            <div className="mt-8 flex justify-end">
              <Button
                variant="outline"
                size="sm"
                className="text-xs flex items-center gap-1"
                onClick={resetControls}
              >
                <RefreshCwIcon className="h-3 w-3" /> Скинути до замовчування
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="demo"
          className="flex-1 flex flex-col space-y-6 "
          style={{ animationDelay: "0.3s" }}
        >
          <div className="glass-card rounded-lg p-6 flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-1">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs"
                onClick={() => setActiveTab("controls")}
              >
                Configure{" "}
                <ArrowRightIcon className="ml-1 h-3 w-3 animate-slide-right" />
              </Button>
            </div>

            <div className="flex-1 flex items-center justify-center">
              {demoComponent}
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="code"
          className="flex-1 flex flex-col  h-full"
          style={{ animationDelay: "0.3s" }}
        >
          <ScrollArea className="flex-1 h-[calc(100vh-20rem)]">
            <div className="space-y-6 pb-8">
              {codeSnippets.map((snippet, index) => (
                <CodeBlock
                  key={index}
                  code={snippet.code}
                  language={snippet.language}
                  fileName={snippet.name}
                  className=""
                />
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DemoPanel;
