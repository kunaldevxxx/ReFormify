import React from 'react';
import Field from './Field';
import SelectField from './SelectField';

interface FieldProps {
  type: string;
  name: string;
  label: string;
  options?: { value: string; label: string }[]; 
}

interface FormFieldWrapperProps {
  field: FieldProps;
  register: any;
  error?: {
    message?: string;
  };
}

const FormFieldWrapper: React.FC<FormFieldWrapperProps> = ({ field, register, error }) => {
  const FieldComponent = field.type === 'select' ? SelectField : Field;

  return (
    <div className="field-wrapper">
      <label className="field-label" htmlFor={field.name}>{field.label}</label>
      {field.type === 'select' ? (
        <SelectField
          name={field.name}
          label={field.label}
          options={field.options || []} 
          register={register}
        />
      ) : (
        <Field
          name={field.name}
          type={field.type}
          label={field.label}
          register={register}
        />
      )}
      {error && <span className="error-message">{error.message}</span>}
    </div>
  );
};

export default FormFieldWrapper;
