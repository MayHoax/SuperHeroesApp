import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <div className="mb-4 ">
      <Button onClick={() => navigate(-1)}> &larr; Back</Button>
    </div>
  );
}
