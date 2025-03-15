
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-7xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          We couldn't find the page you're looking for
        </p>
        <Button 
          onClick={() => navigate('/')}
          size="lg"
          className="gap-2"
        >
          <HomeIcon className="h-4 w-4" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
