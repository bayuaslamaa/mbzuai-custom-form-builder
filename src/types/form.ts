export type FieldType = "text" | "dropdown" | "checkbox";

export interface FormField {
  id: string;
  type: FieldType;
  label: string;
  options?: string[];
}
