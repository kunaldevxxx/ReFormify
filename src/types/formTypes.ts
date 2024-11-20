export interface FieldType {
    name: string;
    type: string;
    label: string;
    validation?: string;
    options?: { value: string; label: string }[];
  }
  
  export interface FormSchema {
    fields: FieldType[];
  }
  