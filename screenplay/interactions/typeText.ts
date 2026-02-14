import { Actor } from '../actors/actor';

export class TypeText {
  constructor(private readonly selector: string, private readonly value: string) {}

  async execute(actor: Actor): Promise<void> {
    const page = actor.abilityToBrowse.pageInstance;
    const input = page.locator(this.selector);
    await input.waitFor({ state: 'visible', timeout: 10000 });
    await input.fill(this.value, { timeout: 10000 });
  }
}