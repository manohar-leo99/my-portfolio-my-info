export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: {
    name?: string;
    email?: string;
    message?: string;
  };
  sanitizedData?: {
    name: string;
    email: string;
    message: string;
  };
}

/**
 * Escapes HTML characters to prevent injection attacks in HTML emails.
 */
export function sanitizeInput(str: string): string {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Standard email format regex pattern.
 */
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function validateContactForm(data: Partial<ContactFormData>): ValidationResult {
  const errors: ValidationResult['errors'] = {};

  const nameRaw = (data.name || '').trim();
  const emailRaw = (data.email || '').trim();
  const messageRaw = (data.message || '').trim();

  // Validate Name
  if (!nameRaw) {
    errors.name = 'Full name is required.';
  } else if (nameRaw.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  } else if (nameRaw.length > 100) {
    errors.name = 'Name must be less than 100 characters.';
  }

  // Validate Email
  if (!emailRaw) {
    errors.email = 'Email address is required.';
  } else if (!EMAIL_REGEX.test(emailRaw)) {
    errors.email = 'Please enter a valid email address.';
  } else if (emailRaw.length > 254) {
    errors.email = 'Email address is too long.';
  }

  // Validate Message
  if (!messageRaw) {
    errors.message = 'Message is required.';
  } else if (messageRaw.length < 10) {
    errors.message = 'Message must be at least 10 characters long.';
  } else if (messageRaw.length > 5000) {
    errors.message = 'Message must be less than 5000 characters.';
  }

  const isValid = Object.keys(errors).length === 0;

  return {
    isValid,
    errors,
    sanitizedData: isValid
      ? {
          name: sanitizeInput(nameRaw),
          email: emailRaw.toLowerCase(),
          message: sanitizeInput(messageRaw),
        }
      : undefined,
  };
}
