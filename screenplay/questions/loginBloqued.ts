import { Actor } from '../actors/actor';
import { uiLogin } from '../ui/uiLogin';

export class LoginBloqued {
  static title() {
    return new LoginBloqued();
  }

  async answeredBy(actor: Actor): Promise<string> {
    const page = actor.abilityToBrowse.pageInstance;
    console.log('Obteniendo el mensaje de error de login bloqueado');
    const locator = page.locator(uiLogin.loginLockedTitle);
    await locator.waitFor({ state: 'visible' });
    return await locator.textContent() as string;
  }
}
