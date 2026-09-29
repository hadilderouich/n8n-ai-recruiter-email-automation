// Get email from the current input item
const rawEmail =
  $json.Email ??
  $json.email ??
  $json.EMAIL ??
  $json.recipient ??
  $json.to ??
  '';

// Normalize email
const email = String(rawEmail)
  .trim()
  .toLowerCase()
  .replace(/^mailto:/, '')
  .replace(/^<|>$/g, '')
  .trim();

// Validate email
const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Extract domain
const domain = emailValid
  ? email.split('@')[1]
  : '';

// Generic/free email providers
const freeEmailProviders = [
  'gmail.com',
  'googlemail.com',
  'hotmail.com',
  'hotmail.fr',
  'outlook.com',
  'outlook.fr',
  'live.com',
  'live.fr',
  'msn.com',
  'yahoo.com',
  'yahoo.fr',
  'icloud.com',
  'me.com',
  'aol.com',
  'proton.me',
  'protonmail.com'
];

// Company name
let companyName = '';

if (
  emailValid &&
  domain &&
  !freeEmailProviders.includes(domain.toLowerCase())
) {
  const domainParts = domain.split('.');

  companyName = domainParts[0];

  // Ignore common email subdomains
  const commonSubdomains = [
    'mail',
    'email',
    'hr',
    'jobs',
    'careers',
    'recruitment',
    'info',
    'contact'
  ];

  if (
    commonSubdomains.includes(companyName.toLowerCase()) &&
    domainParts.length > 1
  ) {
    companyName = domainParts[1];
  }

  // Capitalize company name
  companyName =
    companyName.charAt(0).toUpperCase() +
    companyName.slice(1);
}

// Return cleaned data
return {
  json: {
    ...$json,

    email,
    emailValid,
    domain,
    companyName,

    candidateName: 'HADIL DEROUICH',
    candidateEmail: 'hadil.derouich@esprit.tn',
    phone: '+216 95 452 756',
    location: 'Tunis, Tunisia',
    resumeName: 'Resume',
    resumeLink:
      'https://drive.google.com/file/d/1dLoSv08wOb7yQaAbKdTWzLPb9Wc2u14d/view?usp=sharing'
  }
};