import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CountrySelectProps {
  label: string;
  name: string;
}

function CountrySelect({ label, name }: CountrySelectProps) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Označi državu" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Srbija</SelectItem>
          <SelectItem value="2">Ostalo</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default CountrySelect;
