import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SlideContentProps {
  title: string;
  subtitle?: string;
  description: string;
  points?: string[];
  codeExample?: string;
  className?: string;
}

const SlideContent: React.FC<SlideContentProps> = ({
  title,
  subtitle,
  description,
  points = [],
  codeExample,
  className,
}) => {
  return (
    <ScrollArea className={cn("h-[calc(100vh-12rem)]", className)}>
      <div className="flex flex-col space-y-6 pb-20">
        <div className="space-y-2">
          {subtitle && (
            <div
              className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full "
              style={{ animationDelay: "0.1s" }}
            >
              {subtitle}
            </div>
          )}
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight "
            style={{ animationDelay: "0.2s" }}
          >
            {title}
          </h1>
        </div>

        <p
          className="text-lg md:text-xl text-muted-foreground "
          style={{ animationDelay: "0.3s" }}
        >
          {description}
        </p>

        {points.length > 0 && (
          <ul className="space-y-3 pt-2 " style={{ animationDelay: "0.4s" }}>
            {points.map((point, index) => (
              <li key={index} className="flex items-start">
                <div className="mr-3 h-6 w-6 flex items-center justify-center rounded-full bg-primary/10">
                  <ArrowRightIcon className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-base">{point}</span>
              </li>
            ))}
          </ul>
        )}

        {codeExample && (
          <div
            className="code-example mt-6  rounded-lg border border-border"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="bg-muted/50 px-4 py-2 border-b border-border flex items-center">
              <div className="flex items-center space-x-1.5 mr-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">
                Example Code
              </span>
            </div>
            <div className="p-4 overflow-auto max-h-80">
              <pre className="text-sm">{codeExample}</pre>
            </div>
          </div>
        )}
      </div>
    </ScrollArea>
  );
};

export default SlideContent;
