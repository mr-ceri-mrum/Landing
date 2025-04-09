/**
 * Validation Utilities
 * 
 * Набор функций для валидации форм и пользовательского ввода.
 * Используется в формах обратной связи и других компонентах с вводом данных.
 */

/**
 * Проверяет, является ли строка валидным email-адресом
 * @param {string} email - Email для проверки
 * @returns {boolean} - true если email валиден, false в противном случае
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Проверяет, является ли строка не пустой
 * @param {string} value - Строка для проверки
 * @returns {boolean} - true если строка не пустая, false в противном случае
 */
export const isNotEmpty = (value) => {
  return value.trim() !== '';
};

/**
 * Проверяет, является ли строка валидным номером телефона в формате Казахстана
 * Поддерживает форматы: +7XXXXXXXXXX, 8XXXXXXXXXX, +7 XXX XXX XX XX, и т.д.
 * 
 * @param {string} phone - Телефон для проверки
 * @returns {boolean} - true если телефон валиден, false в противном случае
 */
export const isValidPhone = (phone) => {
  // Удаляем все нецифровые символы для проверки
  const cleanedPhone = phone.replace(/\D/g, '');
  
  // Проверяем длину и префикс
  if (cleanedPhone.length === 11 && (cleanedPhone.startsWith('7') || cleanedPhone.startsWith('8'))) {
    return true;
  }
  
  if (cleanedPhone.length === 10 && /^[0-9]+$/.test(cleanedPhone)) {
    return true;
  }
  
  return false;
};

/**
 * Проверяет, является ли длина строки не меньше указанной
 * @param {string} value - Строка для проверки
 * @param {number} length - Минимальная длина
 * @returns {boolean} - true если длина строки не меньше указанной, false в противном случае
 */
export const hasMinLength = (value, length) => {
  return value.trim().length >= length;
};

/**
 * Проверяет, является ли длина строки не больше указанной
 * @param {string} value - Строка для проверки
 * @param {number} length - Максимальная длина
 * @returns {boolean} - true если длина строки не больше указанной, false в противном случае
 */
export const hasMaxLength = (value, length) => {
  return value.trim().length <= length;
};

/**
 * Создает объект с ошибками валидации формы
 * @param {Object} data - Объект с данными формы
 * @param {Object} validationRules - Правила валидации для полей формы
 * @returns {Object} - Объект с ошибками валидации
 * 
 * Пример использования:
 * const errors = validateForm(
 *   { name: 'John', email: 'invalid-email' },
 *   { 
 *     name: { required: true },
 *     email: { required: true, email: true }
 *   }
 * );
 */
export const validateForm = (data, validationRules) => {
  const errors = {};
  
  Object.keys(validationRules).forEach(field => {
    const rules = validationRules[field];
    const value = data[field];
    
    // Проверка на обязательное поле
    if (rules.required && !isNotEmpty(value)) {
      errors[field] = 'Поле обязательно для заполнения';
      return;
    }
    
    // Если поле пустое и не обязательное, дальше не проверяем
    if (!value && !rules.required) {
      return;
    }
    
    // Проверка email
    if (rules.email && !isValidEmail(value)) {
      errors[field] = 'Введите корректный email';
    }
    
    // Проверка телефона
    if (rules.phone && !isValidPhone(value)) {
      errors[field] = 'Введите корректный номер телефона';
    }
    
    // Проверка минимальной длины
    if (rules.minLength && !hasMinLength(value, rules.minLength)) {
      errors[field] = `Минимальная длина: ${rules.minLength} символов`;
    }
    
    // Проверка максимальной длины
    if (rules.maxLength && !hasMaxLength(value, rules.maxLength)) {
      errors[field] = `Максимальная длина: ${rules.maxLength} символов`;
    }
  });
  
  return errors;
};
