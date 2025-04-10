
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Progress } from "@/components/ui/progress";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";


// interface LearningPathCardProps {
//   title: string;
//   description: string;
//   progress: number;
//   tags: string[];
//   estimatedTime: string;
// }

// const LearningPathCard = ({
//   title,
//   description,
//   progress,
//   tags,
//   estimatedTime,
// }: LearningPathCardProps) => {
//   return (
//     <Card className="h-full">
//       <CardHeader>
//         <div className="flex items-start justify-between">
//           <CardTitle className="text-lg">{title}</CardTitle>
//           <Badge variant={progress < 100 ? "outline" : "default"} className={progress < 100 ? "" : "bg-brand-purple"}>
//             {progress < 100 ? "In Progress" : "Completed"}
//           </Badge>
//         </div>
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
//         <div className="space-y-1.5">
//           <div className="flex items-center justify-between text-sm">
//             <span>{progress}% complete</span>
//             <span className="text-muted-foreground">{estimatedTime}</span>
//           </div>
//           <Progress value={progress} className="h-2" />
//         </div>
//         <div className="flex flex-wrap gap-2">
//           {tags.map((tag) => (
//             <Badge key={tag} variant="secondary" className="bg-brand-blue-light text-foreground">
//               {tag}
//             </Badge>
//           ))}
//         </div>
//       </CardContent>
//       <CardFooter>
//       <Link to="/about/machine-learning">
//     <Button variant="outline">
//       Continue Learning <ArrowRight className="ml-2 h-4 w-4" />
//     </Button>
//   </Link>
//       </CardFooter>
//     </Card>
//   );
// };

// export default LearningPathCard;

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface LearningPathCardProps {
  title: string;
  description: string;
  progress: number;
  tags: string[];
  estimatedTime: string;
  courseId: string; // Add this new prop
}

const LearningPathCard = ({
  title,
  description,
  progress,
  tags,
  estimatedTime,
  courseId, // Destructure the new prop
}: LearningPathCardProps) => {
  // Map course names to route paths
  const courseRoutes: Record<string, string> = {
    "Machine Learning": "machine-learning",
    "Cybersecurity Essentials": "cybersecurity",
    "Blockchain Development": "blockchain",
    "Full Stack Web Development": "web-development",
    "UX Design Principles": "ux-design",
    "Cloud Computing Foundations": "cloud-computing"
  };

  // Get the route path or default to machine-learning
  const routePath = courseRoutes[title] || "machine-learning";

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
        <Link to={`/about/${routePath}`}>
          <Button variant="outline">
            Continue Learning <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default LearningPathCard;
