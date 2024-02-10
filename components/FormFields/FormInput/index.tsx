import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormInputTypes =
  | "email"
  | "password"
  | "text"
  | "tel"
  | "number"
  | "date"
  | "datetime-local"
  | "url";

interface FormInputProps {
  label: string;
  name: string;
  type?: FormInputTypes;
  placeholder?: string;
}
function FormInput({
  label,
  name,
  type = "text",
  placeholder,
}: FormInputProps) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} type={type} placeholder={placeholder ?? ""} />
    </div>
  );
}

export default FormInput;
