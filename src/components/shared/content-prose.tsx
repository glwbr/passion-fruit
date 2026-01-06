import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/cn";

interface ContentProseProps {
  content: string;
  className?: string;
}

export function ContentProse({ content, className }: ContentProseProps) {
  return (
    <div className={cn("prose-content", className)}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
