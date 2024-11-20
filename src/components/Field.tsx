import React from 'react';

interface FieldProps {
  type: string;
  name: string;
  label: string;
  register: (name: string) => any; 
}

const Field: React.FC<FieldProps> = ({ type, name, label, register }) => {
  return (
    <input
      type={type}
      {...register(name)}
      placeholder={label}
      className="form-input"
    />
  );
};

export default Field;