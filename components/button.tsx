import { useFormStatus } from "react-dom";

export function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      className="border bg-blue-500 text-white p-2 rounded-md"
      disabled={pending}
    >
      {pending ? "Adding..." : "Add Product"}
    </button>
  );
}
