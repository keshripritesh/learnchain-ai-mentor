
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { 
  BookOpen, 
  GraduationCap, 
  Home,
  Menu, 
  MessageSquare, 
  Award, 
  User, 
  ChevronLeft
} from "lucide-react";

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    title: "AI Tutor",
    href: "/tutor",
    icon: MessageSquare,
  },
  {
    title: "Learning Paths",
    href: "/learning-paths",
    icon: BookOpen,
  },
  {
    title: "Credentials",
    href: "/credentials",
    icon: Award,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: User,
  },
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "flex h-screen flex-col border-r bg-card transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-14 items-center px-3 py-4">
        {!collapsed && (
          <div className="flex items-center gap-2 px-2">
            <GraduationCap className="h-6 w-6 text-brand-purple" />
            <h1 className="text-lg font-semibold">LearnChain</h1>
          </div>
        )}
        {collapsed && <GraduationCap className="mx-auto h-6 w-6 text-brand-purple" />}
        <Button
          variant="ghost"
          size="icon"
          className={cn("ml-auto", collapsed && "mx-auto")}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <Menu /> : <ChevronLeft />}
        </Button>
      </div>
      <Separator />
      <nav className="flex-1 overflow-auto p-3">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
                    isActive
                      ? "bg-brand-purple text-white"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )
                }
              >
                <item.icon className={cn("h-5 w-5", collapsed && "mx-auto")} />
                {!collapsed && <span>{item.title}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4">
        {!collapsed && (
          <div className="rounded-lg bg-muted p-4 text-center text-sm">
            <p className="font-medium">Decentralized Learning</p>
            <p className="text-muted-foreground">Own your credentials</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
