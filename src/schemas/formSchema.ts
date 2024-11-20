export const exampleFormSchema = {
    fields: [
      { name: 'email', type: 'text', label: 'Email Address', validation: 'required|email' },
      { name: 'password', type: 'password', label: 'Password', validation: 'required|min:6' },
      { name: 'role', type: 'select', label: 'Role', options: [
        { value: 'admin', label: 'Admin' },
        { value: 'user', label: 'User' },
      ], validation: 'required' },
    ],
  };
  