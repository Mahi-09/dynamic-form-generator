// src/types.ts
export interface FieldOption {
    value: string;
    label: string;
  }
  
  export interface Field {
    id: string;
    type: string;
    label: string;
    required: boolean;
    placeholder?: string;
    options?: FieldOption[];
    validation?: {
      pattern?: string;
      message: string; // Ensure message is always a string
    };
  }
  
  export interface FormSchema {
    formTitle: string;
    formDescription: string;
    fields: Field[];
  }
  
  // Adding this line makes the file a module
  export {};