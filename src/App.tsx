
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TutorPage from "./pages/TutorPage";
import LearningPathsPage from "./pages/LearningPathsPage";
import CredentialsPage from "./pages/CredentialsPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";
import About from "../src/components/dashboard/About";
import Login from "./Login"; // no typo, no extra extension
import Signup from "./Signup"; // no typo, no extra extension
import Tracker from "./tracker";  





const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tutor" element={<TutorPage />} />
          <Route path="/learning-paths" element={<LearningPathsPage />} />
          <Route path="/credentials" element={<CredentialsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about/:courseId" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/tracker" element={<Tracker />} />

          
         
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
