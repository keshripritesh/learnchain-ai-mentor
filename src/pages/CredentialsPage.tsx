
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import CredentialCard from "@/components/dashboard/CredentialCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, DownloadCloud } from "lucide-react";

const CredentialsPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  // Sample data for demonstration
  const credentials = [
    {
      title: "Advanced Web Development",
      issuer: "Tech Academy",
      date: "Mar 15, 2024",
      type: "certificate" as const,
      verificationLink: "#",
    },
    {
      title: "Data Analysis Expert",
      issuer: "DataLearn Institute",
      date: "Jan 8, 2024",
      type: "badge" as const,
      verificationLink: "#",
    },
    {
      title: "Blockchain Fundamentals",
      issuer: "Crypto University",
      date: "Feb 22, 2024",
      type: "certificate" as const,
      verificationLink: "#",
    },
    {
      title: "Computer Science",
      issuer: "Online University",
      date: "Dec 15, 2023",
      type: "degree" as const,
      verificationLink: "#",
    },
    {
      title: "UI/UX Design Principles",
      issuer: "Design School",
      date: "Nov 10, 2023",
      type: "certificate" as const,
      verificationLink: "#",
    },
    {
      title: "JavaScript Mastery",
      issuer: "Coding Academy",
      date: "Oct 5, 2023",
      type: "badge" as const,
      verificationLink: "#",
    },
  ];

  // Filter credentials based on active tab
  const filteredCredentials = activeTab === "all" 
    ? credentials 
    : credentials.filter(cred => cred.type === activeTab);

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold">Credentials</h1>
            <p className="text-muted-foreground">
              Your verified achievements and certificates stored on the blockchain.
            </p>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <DownloadCloud className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button size="sm">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Credential
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="certificate">Certificates</TabsTrigger>
            <TabsTrigger value="badge">Badges</TabsTrigger>
            <TabsTrigger value="degree">Degrees</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab}>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {filteredCredentials.map((credential, index) => (
                <CredentialCard key={index} {...credential} />
              ))}
            </div>
            
            {filteredCredentials.length === 0 && (
              <div className="mt-10 flex flex-col items-center justify-center text-center">
                <p className="text-muted-foreground">No credentials found in this category.</p>
                <Button variant="outline" className="mt-4">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Your First {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default CredentialsPage;
