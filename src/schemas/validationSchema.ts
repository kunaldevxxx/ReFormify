import * as Yup from 'yup';

interface Field {
  name: string;
  label: string;
  validation?: string; 
}

export const generateValidationSchema = (fields: Field[]): Yup.ObjectSchema<Record<string, any>> => {
  const validationSchema = fields.reduce((acc, field) => {
    let validation: Yup.StringSchema = Yup.string();

    if (field.validation) {
      const rules = field.validation.split('|');

      rules.forEach((rule) => {
        if (rule === 'required') {
          validation = validation.required(`${field.label} is required`);
        }

        if (rule === 'email') {
          validation = validation.email(`${field.label} is not a valid email`);
        }

        if (rule.startsWith('min')) {
          const value = rule.split(':')[1];
          validation = validation.min(
            Number(value),
            `${field.label} must be at least ${value} characters`
          );
        }
      });
    }

    acc[field.name] = validation;
    return acc;
  }, {} as Record<string, Yup.StringSchema>);

  return Yup.object().shape(validationSchema);
};
