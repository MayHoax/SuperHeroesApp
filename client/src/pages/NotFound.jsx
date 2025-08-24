import { Link } from "react-router-dom";
import Button from "../components/UI/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6">
      <h1 className="text-6xl font-bold  mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-300 mb-6">
        Oops! The page you're looking for does not exist.
      </p>
      <Link to="/">
        <Button> Go Back Home</Button>
      </Link>
    </div>
  );
}
