import type { Control, FieldErrors } from "react-hook-form";
import type { SchemaFormValues } from "../zodSchema/rentSchema";

export type DateTimePickerProps = {
  control: Control<SchemaFormValues>;
  errors: FieldErrors<SchemaFormValues>;
};