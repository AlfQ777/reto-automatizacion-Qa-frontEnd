// screenplay/interactions/clickButton.ts
import { Actor } from '../actors/actor';

export class ClickButton {
  constructor(private readonly selector: string) {}

  async execute(actor: Actor): Promise<void> {
    const page = actor.abilityToBrowse.pageInstance;
    const locator = page.locator(this.selector);

    await locator.waitFor({ state: 'visible' });
    await locator.click({timeout: 10000});
  }
}