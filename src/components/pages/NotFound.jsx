import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

function NotFound() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gradient-to-br from-secondary via-background to-secondary">
      <div className="text-center space-y-6 px-4">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/10 mb-4">
          <ApperIcon name="AlertCircle" size={48} className="text-accent" />
        </div>
        <h1 className="text-6xl font-display font-bold text-primary">404</h1>
        <h2 className="text-2xl font-display font-semibold text-primary">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="pt-4">
          <Link to="/">
            <Button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3">
              <ApperIcon name="Home" size={20} />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;