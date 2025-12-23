import ReactMarkdown from 'react-markdown';
import { cn } from '@/lib/utils';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer = ({ content, className }: MarkdownRendererProps) => {
  return (
    <div className={cn("prose prose-neutral dark:prose-invert max-w-none", className)}>
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-8 pb-4 border-b border-border/50">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl md:text-2xl font-light tracking-tight mt-12 mb-4 text-foreground">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-medium mt-8 mb-3 text-foreground">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="text-sm text-muted-foreground space-y-2 mb-4 list-disc list-inside">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="text-sm text-muted-foreground space-y-2 mb-4 list-decimal list-inside">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-sm text-muted-foreground leading-relaxed">
              {children}
            </li>
          ),
          a: ({ href, children }) => (
            <a 
              href={href} 
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-border pl-4 my-4 text-sm text-muted-foreground italic">
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="bg-muted px-1.5 py-0.5 rounded text-xs font-mono">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 text-xs">
              {children}
            </pre>
          ),
          hr: () => (
            <hr className="border-border/50 my-8" />
          ),
          strong: ({ children }) => (
            <strong className="font-medium text-foreground">
              {children}
            </strong>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border-collapse">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="text-left py-2 px-3 border-b border-border font-medium text-foreground">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="py-2 px-3 border-b border-border/50 text-muted-foreground">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
