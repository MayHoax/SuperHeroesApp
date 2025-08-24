import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function SubmitDeleteButtons({
  isEdit,
  deleteSuperhero,
  initialData,
}) {
  const navigate = useNavigate();
  return (
    <>
      <Button type="submit" className="mt-4 hover:bg-green-300/60">
        {isEdit ? "Update" : "Submit"}
      </Button>
      {isEdit && (
        <Button
          className="hover:bg-red-500/50 mt-2"
          onClick={() => {
            deleteSuperhero(initialData.id);
            navigate("/");
          }}
        >
          Delete
        </Button>
      )}
    </>
  );
}
