import { Actor } from '../actors/actor';
import { EnterCredentials } from '../interactions/enterCredentials';
import { ClickLogin } from '../interactions/clickLogin';
import { AppUrls } from '../../support/config/urls';

type LoginAction = 'OPEN_PAGE' | 'ENTER_CREDENTIALS' | 'CLICK_LOGIN';

export class Login {
  private constructor(
    private readonly action: LoginAction,
    private readonly user?: string,
    private readonly password?: string
  ) {}

  // Método 1: abrir página login
  static openPage() {
    return new Login('OPEN_PAGE');
  }

  // Método 2: ingresar credenciales
  static enterCredentials(user: string, password: string) {
    return new Login('ENTER_CREDENTIALS', user, password);
  }

  // Método 3: click en login
  static clickLogin() {
    return new Login('CLICK_LOGIN');
  }

  async performAs(actor: Actor): Promise<void> {
    switch (this.action) {
      case 'OPEN_PAGE': {
        const page = await actor.abilityToBrowse.pageInstance; // ya abierto en hooks/world
        console.log('Ingresando a la página de login: %s', AppUrls.LOGIN);
        await page.goto(AppUrls.LOGIN);
        break;
      }
      case 'ENTER_CREDENTIALS': {
        if (!this.user || !this.password) {
          throw new Error('Faltan credenciales para ENTER_CREDENTIALS');
        }
        await new EnterCredentials(this.user, this.password).execute(actor);
        break;
      }
      case 'CLICK_LOGIN': {
        await new ClickLogin().execute(actor);
        break;
      }
    }
  }
}