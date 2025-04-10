
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import LearningPathCard from "@/components/dashboard/LearningPathCard";
import { Plus, Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const LearningPathsPage = () => {
  const [filter, setFilter] = useState<string[]>([]);

  
  const learningPaths = [
    {
      title: "Machine Learning Fundamentals",
      description: "Master the core concepts of machine learning, including supervised and unsupervised learning algorithms.",
      progress: 65,
      tags: ["AI", "Data Science", "Python"],
      estimatedTime: "8 hrs remaining",
      courseId: "machine-learning",
     
    },
    {
      title: "Blockchain Development",
      description: "Learn how to build decentralized applications and understand blockchain architecture.",
      progress: 30,
      tags: ["Web3", "Smart Contracts", "Ethereum"],
      estimatedTime: "12 hrs remaining",
      courseId: "blockchain"
     
    },
    {
      title: "UX Design Principles",
      description: "Understand key principles of user experience design and how to create intuitive interfaces.",
      progress: 100,
      tags: ["Design", "UI/UX", "Figma"],
      estimatedTime: "Completed",
      courseId:"ux-design",
      img:"ux-design.jpg"
    },
    {
      title: "Data Analytics Expert",
      description: "Become proficient in data collection, analysis, visualization, and decision-making using tools like Excel, SQL, and Power BI.",
      progress: 45,
      tags: ["Data Analysis", "SQL", "Power BI"],
      estimatedTime: "10 hrs remaining",
      courseId: "data-analytics",
      
    },
    
    {
      title: "Full Stack Web Development",
      description: "Master both frontend and backend technologies to build complete web applications.",
      progress: 80,
      tags: ["JavaScript", "React", "Node.js"],
      estimatedTime: "4 hrs remaining",
      courseId: "web-development",
     
    },
  
  ];

  // Extract all unique tags
  const allTags = Array.from(
    new Set(learningPaths.flatMap((path) => path.tags))
  ).sort();

  // Filter learning paths by selected tags
  const filteredPaths = filter.length > 0
    ? learningPaths.filter((path) =>
        path.tags.some((tag) => filter.includes(tag))
      )
    : learningPaths;

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold">Learning Paths</h1>
            <p className="text-muted-foreground">
              Personalized educational journeys to help you achieve your goals.
            </p>
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {allTags.map((tag) => (
                  <DropdownMenuCheckboxItem
                    key={tag}
                    checked={filter.includes(tag)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setFilter([...filter, tag]);
                      } else {
                        setFilter(filter.filter((t) => t !== tag));
                      }
                    }}
                  >
                    {tag}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              New Path
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPaths.map((path, index) => (
            <LearningPathCard key={index} {...path} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default LearningPathsPage;
