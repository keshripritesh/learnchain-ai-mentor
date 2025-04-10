
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AITutorPreview = () => {
  const navigate = useNavigate();

  return (
    <Card className="bg-gradient-to-br from-brand-purple to-brand-purple-dark text-white">
      <CardHeader>
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          <CardTitle className="text-lg">AI Tutor</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-white/80">
          Get personalized learning assistance, answers to your questions, and help with creating custom learning paths.
        </p>
        <div className="mt-4 space-y-2">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10">
              <span className="text-sm">AI</span>
            </div>
            <div className="rounded-lg rounded-tl-none bg-white/10 p-3 text-sm">
              How can I help with your learning journey today?
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full border-white/20 bg-white/10 hover:bg-white/20 text-white"
          onClick={() => navigate("/tutor")}
        >
          Chat with AI Tutor <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AITutorPreview;
