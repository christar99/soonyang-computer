import { pbkdf2Sync, randomBytes } from 'crypto';

export function hash(password: string, salt: string | null = null) {
  if (!salt) {
    salt = randomBytes(16).toString('base64');
  }

  const hash = pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString(
    'base64',
  );

  return salt + hash;
}

export function compare(password: string, saltedHash: string) {
  const salt = saltedHash.slice(0, 24);

  return saltedHash === hash(password, salt);
}
