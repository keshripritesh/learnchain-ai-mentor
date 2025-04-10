
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface LearningPathCardProps {
  title: string;
  description: string;
  progress: number;
  tags: string[];
  estimatedTime: string;
}

const LearningPathCard = ({
  title,
  description,
  progress,
  tags,
  estimatedTime,
}: LearningPathCardProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge variant={progress < 100 ? "outline" : "default"} className={progress < 100 ? "" : "bg-brand-purple"}>
            {progress < 100 ? "In Progress" : "Completed"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-sm">
            <span>{progress}% complete</span>
            <span className="text-muted-foreground">{estimatedTime}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-brand-blue-light text-foreground">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" size="sm">
          Continue learning <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LearningPathCard;
