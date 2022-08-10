import { faker } from '@faker-js/faker';

function SignUp() {
  const password = faker.internet.password();

  const data = {
    email: faker.internet.email(),
    profile: faker.internet.domainWord(),
    name: faker.name.fullName(),
    password,
    confirmPassword: password,
  };
  return data;
}

const Factory = {
  SignUp,
};

export default Factory;
