import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { generateValidationSchema } from '../schemas/validationSchema';
import FormFieldWrapper from './FormFieldWrapper';


type FormField = {
  name: string;
  label: string;
  type: string; 
  placeholder?: string;
  required?: boolean;
  options?: Array<{ value: string; label: string }>; 
};

type FormGeneratorProps = {
  schema: {
    fields: FormField[];
  };
  onSubmit: (data: any) => void; 
};

const FormGenerator: React.FC<FormGeneratorProps> = ({ schema, onSubmit }) => {
  const validationSchema = generateValidationSchema(schema.fields);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {schema.fields.map((field) => (
        <FormFieldWrapper key={field.name} field={field} register={register} error={errors[field.name]} />
      ))}
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default FormGenerator;