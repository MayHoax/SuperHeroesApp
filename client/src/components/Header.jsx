import { Link } from "react-router-dom";
import Button from "./UI/Button";

export default function Header() {
  return (
    <nav className="border-b bg-gray-400/30">
      <div className="max-w-5xl mx-auto p-4 flex items-center gap-4">
        <Link to="/" className="font-semibold">
          <h1 className="text-2xl text-white/80">Heroes</h1>
        </Link>
        <Link to="/create" className="ml-auto">
          <Button>Add</Button>
        </Link>
      </div>
    </nav>
  );
}
