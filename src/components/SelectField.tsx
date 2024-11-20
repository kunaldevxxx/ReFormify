import React from 'react';

interface SelectFieldProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  register: (name: string) => any; 
}

const SelectField: React.FC<SelectFieldProps> = ({ name, label, options, register }) => {
  return (
    <select {...register(name)} className="form-select">
      <option value="">{label}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectField;