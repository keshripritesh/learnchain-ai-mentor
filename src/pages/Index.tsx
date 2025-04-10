
import MainLayout from "@/components/layout/MainLayout";
import StatsCard from "@/components/dashboard/StatsCard";
import LearningPathCard from "@/components/dashboard/LearningPathCard";
import CredentialCard from "@/components/dashboard/CredentialCard";
import AITutorPreview from "@/components/dashboard/AITutorPreview";
import { 
  BookOpen, 
  Award, 
  Clock, 
  Trophy
} from "lucide-react";

const Index = () => {
  // Sample data for demonstration
  const learningPaths = [
    {
      title: "Machine Learning Fundamentals",
      description: "Master the core concepts of machine learning, including supervised and unsupervised learning algorithms.",
      progress: 65,
      tags: ["AI", "Data Science", "Python"],
      estimatedTime: "8 hrs remaining",
    },
    {
      title: "Blockchain Development",
      description: "Learn how to build decentralized applications and understand blockchain architecture.",
      progress: 30,
      tags: ["Web3", "Smart Contracts", "Ethereum"],
      estimatedTime: "12 hrs remaining",
    },
    {
      title: "UX Design Principles",
      description: "Understand key principles of user experience design and how to create intuitive interfaces.",
      progress: 100,
      tags: ["Design", "UI/UX", "Figma"],
      estimatedTime: "Completed",
    },
  ];

  const credentials = [
    {
      title: "Advanced Web Development",
      issuer: "Tech Academy",
      date: "Mar 15, 2024",
      type: "certificate",
      verificationLink: "#",
    },
    {
      title: "Data Analysis Expert",
      issuer: "DataLearn Institute",
      date: "Jan 8, 2024",
      type: "badge",
      verificationLink: "#",
    },
  ];

  return (
    <MainLayout>
      <div className="space-y-6 animate-fade-in">
        <h1 className="text-2xl font-bold">Welcome to LearnChain</h1>
        <p className="text-muted-foreground">Track your learning journey and manage your credentials in one place.</p>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Learning Paths"
            value="5"
            icon={BookOpen}
            trend={{ value: 2, isPositive: true }}
          />
          <StatsCard
            title="Credentials Earned"
            value="12"
            icon={Award}
            trend={{ value: 3, isPositive: true }}
          />
          <StatsCard
            title="Hours Spent Learning"
            value="87"
            icon={Clock}
            description="Last 30 days"
          />
          <StatsCard
            title="Achievements"
            value="8"
            icon={Trophy}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div>
              <h2 className="mb-4 text-xl font-semibold">Active Learning Paths</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {learningPaths.map((path, index) => (
                  <LearningPathCard key={index} {...path} />
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="mb-4 text-xl font-semibold">Recent Credentials</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {credentials.map((credential, index) => (
                  <CredentialCard key={index} {...credential} />
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">AI Learning Assistant</h2>
            <AITutorPreview />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
