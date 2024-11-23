import React, { useState } from 'react';
import FormGenerator from './FormGenerator';
import { FormSchema } from './types';
import './App.css'; // Import your CSS file

const initialSchema: FormSchema = {
  formTitle: "Project Requirements Survey",
  formDescription: "Please fill out this survey about your project needs",
  fields: [
    {
      id: "name",
      type: "text",
      label: "Full Name",
      required: true,
      placeholder: "Enter your full name"
    },
  ]
};

const App = () => {
  const [schema] = useState<FormSchema>(initialSchema);

  return (
    <div className="app-container">
      <div className="form-container">
        <div className="md:w-1/2 p-4">
          {/* JSON Editor Component Placeholder */}
          <textarea className="w-full h-full border p-2" placeholder="JSON Editor..."></textarea>
        </div>
        <div className="md:w-1/2 p-4">
          <FormGenerator schema={schema} />
        </div>
      </div>
    </div>
  );
};

export default App;
