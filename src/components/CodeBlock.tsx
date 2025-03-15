
import React from 'react';
import { cn } from '@/lib/utils';
import { CopyIcon, CheckIcon } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  fileName?: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'typescript',
  fileName,
  className,
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("rounded-lg overflow-hidden bg-card border shadow-sm", className)}>
      {fileName && (
        <div className="flex items-center justify-between px-4 py-2 bg-muted/40 border-b">
          <span className="text-sm font-medium text-muted-foreground">{fileName}</span>
          <button
            onClick={handleCopy}
            className="p-1.5 hover:bg-muted rounded-md transition-colors"
            aria-label="Copy code"
          >
            {copied ? (
              <CheckIcon className="h-4 w-4 text-green-500" />
            ) : (
              <CopyIcon className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
        </div>
      )}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono">{code}</pre>
      </div>
    </div>
  );
};

export default CodeBlock;
