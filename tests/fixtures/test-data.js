export const generateUser = () => ({
  name: `TestUser_${Date.now()}`,
  email: `test_${Date.now()}@example.com`,
  password: 'Password123!',
});

export const wrongPassword = 'WrongPassword123';

export const invalidEmails = [
  'notanemail',
  'missing@dot',
  '@nodomain.com',
  'spaces in@email.com',
];

export const shortPasswords = ['12345', 'abc', '12'];