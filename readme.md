# Reformify - Form Library with Validation

**Reformify** is a flexible, reusable form library for React that supports dynamic form generation, schema-driven validation, and easy integration with popular form validation libraries like **Yup** or **Zod**. This library allows you to build forms with minimal effort and full customization.

--- 

## Features

- **Reusable Components**: Create dynamic forms with ease.
- **Customizable**: Integrates with `Yup` or `Zod` for form validation.
- **Dynamic Fields**: Generate form fields dynamically based on a JSON schema.
- **Error Handling**: Easily manage form validation errors and display messages.
- **Supports Common Input Types**: Text, password, email, and select fields.

---

## Installation

You can install **Reformify** via npm or yarn:

```bash
# Using npm
npm install reformify

# Using yarn
yarn add reformify
```

## **Usage**
## 1. Basic Example

## Here’s how you can use the form generator component in your project:
```javascript
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormGenerator } from 'reformify';

const formSchema = [
  { name: 'email', type: 'text', label: 'Email Address', validation: 'required|email' },
  { name: 'password', type: 'password', label: 'Password', validation: 'required|min:6' },
  { name: 'role', type: 'select', label: 'Role', options: [{ value: 'admin', label: 'Admin' }, { value: 'user', label: 'User' }] }
];

const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Form Example</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGenerator 
          fields={formSchema} 
          register={register} 
          errors={errors} 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
```
FormGenerator Component
```javascript
import React from 'react';
import FormFieldWrapper from './FormFieldWrapper';

interface FormGeneratorProps {
  fields: any[]; 
  register: any;
  errors: any;
}

export const FormGenerator: React.FC<FormGeneratorProps> = ({ fields, register, errors }) => {
  return (
    <div>
      {fields.map((field) => (
        <FormFieldWrapper 
          key={field.name}
          field={field}
          register={register}
          error={errors[field.name]}
        />
      ))}
    </div>
  );
};
```
## Props

fields (Array): Array of form field configurations, each containing name, type, label, validation, and options (for select fields).
register (Function): register function from react-hook-form used for form field registration.
errors (Object): Validation errors object from react-hook-form.

## Validation with Yup
Reformify can work seamlessly with Yup validation schema. Here's how you can integrate it with your form.

```bash
npm install yup
```

## Example Usage with Yup Validation

```javascript
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { FormGenerator } from 'reformify';

const validationSchema = Yup.object({
  email: Yup.string().required('Email is required').email('Invalid email format'),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  role: Yup.string().required('Role is required')
});

const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)  // Using yupResolver for validation
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGenerator 
        fields={formSchema} 
        register={register} 
        errors={errors} 
      />
      <button type="submit">Submit</button>
    </form>
  );
};
```

## Validation with Zod
## Reformify also supports Zod for validation.

## Example Usage with Zod Validation
```javascript
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { FormGenerator } from 'reformify';

const validationSchema = z.object({
  email: z.string().email('Invalid email format').nonempty('Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters').nonempty('Password is required'),
  role: z.string().nonempty('Role is required')
});

const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(validationSchema)  // Using zodResolver for validation
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGenerator 
        fields={formSchema} 
        register={register} 
        errors={errors} 
      />
      <button type="submit">Submit</button>
    </form>
  );
};
```

# Available Input Types
# text: Standard text input field.
# password: Password input field.
# select: Dropdown select field, requires options array.

## Customizing Validation
You can define custom validation rules for each field inside the validation property in the form schema. Supported rules include:

# required: The field is required.
# email: The field must be a valid email address.
# min:X: The field value must have a minimum length of X.

## **Contribution**
We welcome contributions! If you find a bug or want to add a feature, feel free to open an issue or a pull request.
Email kunalkhare2004@gmail.com