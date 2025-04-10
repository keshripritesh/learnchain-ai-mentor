
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CredentialCardProps {
  title: string;
  issuer: string;
  date: string;
  type: "certificate" | "badge" | "degree";
  verificationLink?: string;
}

const CredentialCard = ({
  title,
  issuer,
  date,
  type,
  verificationLink,
}: CredentialCardProps) => {
  const getTypeColor = () => {
    switch (type) {
      case "certificate":
        return "bg-brand-purple";
      case "badge":
        return "bg-brand-blue-DEFAULT";
      case "degree":
        return "bg-brand-green-DEFAULT";
      default:
        return "bg-muted";
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case "certificate":
        return "Certificate";
      case "badge":
        return "Badge";
      case "degree":
        return "Degree";
      default:
        return type;
    }
  };

  return (
    <Card className="h-full overflow-hidden">
      <div className={`h-2 w-full ${getTypeColor()}`} />
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-brand-purple/10 p-2">
            <Award className="h-5 w-5 text-brand-purple" />
          </div>
          <div>
            <h3 className="font-semibold line-clamp-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{issuer}</p>
          </div>
        </div>
        <Badge className={getTypeColor()}>{getTypeLabel()}</Badge>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-2 h-4 w-4" />
          Issued on {date}
        </div>
      </CardContent>
      {verificationLink && (
        <CardFooter>
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={() => window.open(verificationLink, "_blank")}
          >
            Verify <ExternalLink className="ml-2 h-3 w-3" />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default CredentialCard;
