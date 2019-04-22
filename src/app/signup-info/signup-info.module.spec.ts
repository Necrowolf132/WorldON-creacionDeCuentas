import { SignupInfoModule } from './signup-info.module';

describe('SignupInfoModule', () => {
  let signupInfoModule: SignupInfoModule;

  beforeEach(() => {
    signupInfoModule = new SignupInfoModule();
  });

  it('should create an instance', () => {
    expect(signupInfoModule).toBeTruthy();
  });
});
