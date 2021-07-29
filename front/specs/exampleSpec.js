export default function (spec) {
  spec.describe('Start', function () {
    spec.it('works', async function () {
      await spec.exists('Start.title');
      // await spec.fillIn('LoginScreen.EmailInput', 'cavy@example.com');
      // await spec.fillIn('LoginScreen.PasswordInput', 'password');
      await spec.press('Start.Button');
      await spec.exists('Login.title');
    });
  });
}
