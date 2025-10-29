import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <ApperIcon 
            name="AlertCircle" 
            size={80} 
            className="text-accent"
          />
        </div>
        <h1 className="font-display text-4xl font-bold text-primary">
          404 - Page Not Found
        </h1>
        <p className="text-gray-600 text-lg">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link to="/">
            <Button className="w-full sm:w-auto">
              <ApperIcon name="Home" size={16} className="mr-2" />
              Go to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;