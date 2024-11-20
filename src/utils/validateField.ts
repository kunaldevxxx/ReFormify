export const validateField = (rules: string[], value: any): boolean => {
  for (const rule of rules) {
    if (rule === "required" && (!value || value.toString().trim() === "")) {
      return false; 
    }

    if (rule.startsWith("min:")) {
      const minLength = parseInt(rule.split(":")[1], 10);
      if (value && value.toString().length < minLength) {
        return false; 
      }
    }

    if (rule === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return false; 
      }
    }
  }
  return true; 
};
