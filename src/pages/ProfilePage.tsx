
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Edit, Save, Key, Wallet } from "lucide-react";

const ProfilePage = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Profile</h1>

        <Tabs defaultValue="profile">
          <TabsList className="mb-4">
            <TabsTrigger value="profile">Profile Information</TabsTrigger>
            <TabsTrigger value="wallet">Wallet & Credentials</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader className="relative pb-8">
                <div className="absolute right-4 top-4">
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                </div>
                <div className="flex flex-col items-center sm:flex-row sm:items-start sm:space-x-6">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="" />
                    <AvatarFallback className="text-2xl">US</AvatarFallback>
                  </Avatar>
                  <div className="text-center sm:text-left">
                    <CardTitle className="mt-2 text-2xl">User Name</CardTitle>
                    <p className="text-muted-foreground">Lifelong Learner</p>
                    <div className="mt-2 flex flex-wrap justify-center gap-2 sm:justify-start">
                      <Badge className="bg-brand-blue-DEFAULT">Web Development</Badge>
                      <Badge className="bg-brand-purple">AI/ML</Badge>
                      <Badge className="bg-brand-green-DEFAULT">Blockchain</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input defaultValue="User Name" readOnly />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input defaultValue="user@example.com" readOnly />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-medium">Bio</label>
                    <Textarea 
                      readOnly
                      className="min-h-32 resize-none"
                      defaultValue="I'm a passionate learner focused on web development, artificial intelligence, and blockchain technologies. I believe in continuous learning and building practical skills through hands-on projects."
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wallet" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Wallet className="mr-2 h-5 w-5" /> 
                  Blockchain Wallet
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg bg-muted p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">Wallet Address</h3>
                      <p className="mt-1 font-mono text-sm text-muted-foreground break-all">
                        0x71C7656EC7ab88b098defB751B7401B5f6d8976F
                      </p>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 shrink-0">
                      <Key className="mr-2 h-4 w-4" />
                      Connect
                    </Button>
                  </div>
                </div>
                
                <div>
                  <h3 className="mb-3 font-medium">Credential Storage</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Your credentials are securely stored on the blockchain, giving you full ownership and control.
                  </p>
                  <Button variant="outline" size="sm">
                    Verify Credentials
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input defaultValue="user@example.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Password</label>
                      <Input type="password" defaultValue="********" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Notification Preferences</label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="email-notifications" className="h-4 w-4" defaultChecked />
                        <label htmlFor="email-notifications">Email notifications</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="achievement-alerts" className="h-4 w-4" defaultChecked />
                        <label htmlFor="achievement-alerts">Achievement alerts</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="learning-reminders" className="h-4 w-4" defaultChecked />
                        <label htmlFor="learning-reminders">Learning reminders</label>
                      </div>
                    </div>
                  </div>
                  
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
