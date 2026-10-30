export type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  company: string;
};

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+0-9()\s-]{7,20}$/;

export function validateContact(data: ContactPayload): ContactErrors {
  const errors: ContactErrors = {};
  const name = data.name.trim();
  const phone = data.phone.trim();
  const email = data.email.trim();
  const service = data.service.trim();
  const message = data.message.trim();

  if (name.length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!phone && !email) {
    errors.phone = "Enter a phone number or an email address.";
    errors.email = "Enter a phone number or an email address.";
  }

  if (phone && !phonePattern.test(phone)) {
    errors.phone = "Enter a valid phone number.";
  }

  if (email && !emailPattern.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!service) {
    errors.service = "Select a service.";
  }

  if (message.length < 10) {
    errors.message = "Please add a short message (at least 10 characters).";
  }

  return errors;
}

export function isHoneypotFilled(company: string) {
  return company.trim().length > 0;
}
