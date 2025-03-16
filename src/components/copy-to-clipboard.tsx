"use client";

import { cn } from "@/lib/utils";
import { type Message } from "ai";

import { Button } from "@/components/shadcn/button";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useClipboard } from "@/hooks/use-clipboard";

interface ChatMessageActionsProps extends React.ComponentProps<"div"> {
  message: Message;
}

export default function CopyToClipboard({
  message,
  className,
  ...props
}: ChatMessageActionsProps) {
  const { isCopied, copyToClipboard } = useClipboard({ timeout: 2000 });

  const onCopy = () => {
    if (isCopied) return;
    copyToClipboard(message.content);
  };

  return (
    <div className={cn("", className)} {...props}>
      <Button
        variant="secondary"
        size="icon"
        className="h-6 w-6"
        onClick={onCopy}
      >
        {isCopied ? (
          <CheckIcon className="h-3 w-3 text-emerald-500" />
        ) : (
          <CopyIcon className="h-3 w-3 text-zinc-500" />
        )}
        <span className="sr-only">Copy message</span>
      </Button>
    </div>
  );
}
