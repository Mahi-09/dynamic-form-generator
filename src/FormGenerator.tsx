// src/FormGenerator.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormSchema, Field } from './types';

interface Props {
  schema: FormSchema;
}

const FormGenerator: React.FC<Props> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{schema.formTitle}</h1>
      <p>{schema.formDescription}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        {schema.fields.map((field: Field) => (
          <div key={field.id} className="mb-4">
            <label className="block mb-2">{field.label}</label>
            {field.type === 'text' && (
              <input 
                type="text" 
                {...register(field.id, { required: field.required })}
                placeholder={field.placeholder}
                className={`border p-2 w-full ${errors[field.id] ? 'border-red-500' : 'border-gray-300'}`}
              />
            )}
            {field.type === 'email' && (
              <input 
                type="email" 
                {...register(field.id, { 
                  required: field.required, 
                  pattern: field.validation?.pattern ? { 
                    value: new RegExp(field.validation.pattern), 
                    message: field.validation.message // Use the required message
                  } : undefined 
                })}
                placeholder={field.placeholder}
                className={`border p-2 w-full ${errors[field.id] ? 'border-red-500' : 'border-gray-300'}`}
              />
            )}
            {field.type === 'select' && (
              <select 
                {...register(field.id, { required: field.required })} 
                className={`border p-2 w-full ${errors[field.id] ? 'border-red-500' : 'border-gray-300'}`}>
                {field.options?.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            )}
            {field.type === 'radio' && field.options && (
              <div>
                {field.options.map(option => (
                  <label key={option.value} className="inline-flex items-center mr-4">
                    <input type="radio" {...register(field.id, { required: field.required })} value={option.value} />
                    <span className="ml-2">{option.label}</span>
                  </label>
                ))}
              </div>
            )}
            {field.type === 'textarea' && (
              <textarea
                {...register(field.id)}
                placeholder={field.placeholder}
                className={`border p-2 w-full ${errors[field.id] ? 'border-red-500' : 'border-gray-300'}`}
              />
            )}
            {/* Display error message if exists */}
            {errors[field.id] && (
              <span className="text-red-500">{(errors[field.id] as any).message}</span>
            )}
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
      </form>
    </div>
  );
};

// Adding this line makes the file a module
export default FormGenerator;
// export {};