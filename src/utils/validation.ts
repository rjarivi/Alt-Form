export type ValidationRule = {
  type: 'required' | 'email' | 'minLength' | 'maxLength' | 'pattern' | 'custom';
  value?: any;
  message: string;
};

export const validateField = (value: any, rules: ValidationRule[]): string => {
  for (const rule of rules) {
    switch (rule.type) {
      case 'required':
        if (!value || (typeof value === 'string' && !value.trim())) {
          return rule.message;
        }
        break;
      
      case 'email':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return rule.message;
        }
        break;
      
      case 'minLength':
        if (value && value.length < rule.value) {
          return rule.message;
        }
        break;
      
      case 'maxLength':
        if (value && value.length > rule.value) {
          return rule.message;
        }
        break;
      
      case 'pattern':
        if (value && !new RegExp(rule.value).test(value)) {
          return rule.message;
        }
        break;
      
      case 'custom':
        if (rule.value && !rule.value(value)) {
          return rule.message;
        }
        break;
    }
  }
  return '';
};

export const validateForm = (
  formData: Record<string, any>,
  validationRules: Record<string, ValidationRule[]>
): Record<string, string> => {
  const errors: Record<string, string> = {};
  
  Object.entries(validationRules).forEach(([fieldName, rules]) => {
    const error = validateField(formData[fieldName], rules);
    if (error) {
      errors[fieldName] = error;
    }
  });
  
  return errors;
};