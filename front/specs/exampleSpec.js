export default function (spec) {
  /**
   * 测试用例1 - 测试进入开始页面，点击登录进入登录界面功能
   * */
  spec.describe('Start to Login', function () {
    spec.it('works', async function () {
      await spec.exists('Start.title');
      // await spec.fillIn('LoginScreen.EmailInput', 'cavy@example.com');
      // await spec.fillIn('LoginScreen.PasswordInput', 'password');
      await spec.press('StartLogin.Button');
      await spec.exists('Login.title');
    });
  });
  /**
   * 测试用例2 - 测试进入开始页面，点击注册进入注册界面功能
   * */
  spec.describe('Start to Register', function () {
    spec.it('works', async function () {
      await spec.exists('Start.title');
      // await spec.fillIn('LoginScreen.EmailInput', 'cavy@example.com');
      // await spec.fillIn('LoginScreen.PasswordInput', 'password');
      await spec.press('StartRegister.Button');
      await spec.exists('Register.title');
    });
  });
}
