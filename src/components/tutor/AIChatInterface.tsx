
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Loader2, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
}

const AIChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hello! I'm your AI learning assistant. How can I help you with your education journey today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Demo responses for demonstration purposes
  const demoResponses = [
    "I can help you understand that concept. The key points to remember are...",
    "Based on your learning history, I'd recommend exploring these topics next...",
    "Here's a learning path for mastering that skill: First, start with...",
    "That's a great question! The answer involves several important principles...",
    "Let me create a custom study plan for that subject. We should focus on...",
  ];

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() === "") return;

    const newUserMessage: Message = {
      id: messages.length + 1,
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, newUserMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const randomResponse =
        demoResponses[Math.floor(Math.random() * demoResponses.length)];
      
      const newAIMessage: Message = {
        id: messages.length + 2,
        content: randomResponse,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prevMessages) => [...prevMessages, newAIMessage]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex h-full flex-col rounded-lg border bg-card">
      <div className="flex items-center justify-between border-b p-4">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-brand-purple" />
          <h2 className="font-semibold">AI Learning Assistant</h2>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex items-start gap-3",
                message.sender === "user" && "justify-end"
              )}
            >
              {message.sender === "ai" && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-purple text-white">
                  <Bot className="h-4 w-4" />
                </div>
              )}
              <div
                className={cn(
                  "max-w-[80%] rounded-lg p-3",
                  message.sender === "user"
                    ? "bg-brand-purple text-white"
                    : "bg-muted"
                )}
              >
                <p className="text-sm">{message.content}</p>
                <p className="mt-1 text-xs opacity-70">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              {message.sender === "user" && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue-DEFAULT text-white">
                  <User className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-purple text-white">
                <Bot className="h-4 w-4" />
              </div>
              <div className="max-w-[80%] rounded-lg bg-muted p-3">
                <Loader2 className="h-4 w-4 animate-spin" />
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <form
        onSubmit={handleSendMessage}
        className="flex items-center gap-2 border-t p-4"
      >
        <Input
          placeholder="Ask about any topic or learning path..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="flex-1"
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading || inputMessage.trim() === ""}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};

export default AIChatInterface;
