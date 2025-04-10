
import MainLayout from "@/components/layout/MainLayout";
import AIChatInterface from "@/components/tutor/AIChatInterface";

const TutorPage = () => {
  return (
    <MainLayout>
      <div className="h-full space-y-4">
        <div>
          <h1 className="text-2xl font-bold">AI Tutor</h1>
          <p className="text-muted-foreground">Get personalized learning assistance and guidance for your educational journey.</p>
        </div>
        <div className="h-[calc(100vh-12rem)]">
          <AIChatInterface />
        </div>
      </div>
    </MainLayout>
  );
};

export default TutorPage;
