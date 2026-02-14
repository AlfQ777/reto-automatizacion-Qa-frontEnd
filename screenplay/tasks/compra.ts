// screenplay/tasks/compra.ts
import { Actor } from '../actors/actor';
import { ClickElement } from '../interactions/clickElement';
import { ClickButton } from '../interactions/clickButton';
import { UiCompras } from '../ui/uiCompras';

type CompraAction = 'CLICK_PRODUCT' | 'ADD_TO_CART_DETAIL' | 'ADD_TO_CART_MAIN';

export class Compra {
    private constructor(
        private readonly action: CompraAction,
        private readonly productName?: string
    ) { }

    /** Método 1: seleccionar el producto  */
    static selectProduct(productName: string) {
        return new Compra('CLICK_PRODUCT', productName);
    }

    /** Método 2: añadir al carrito por producto  */
    static addToCartFor() {
        return new Compra('ADD_TO_CART_DETAIL');
    }

    /** Método 3: add to cart desde página principa  */

    static addToCartInMain(productName: string) {
        return new Compra('ADD_TO_CART_MAIN', productName);
    }

    async performAs(actor: Actor): Promise<void> {
        switch (this.action) {
            case 'CLICK_PRODUCT': {
                if (!this.productName) {
                    throw new Error('CLICK_PRODUCT requiere productName');
                }
                console.log(`Seleccionando el producto: ${this.productName}`);
                await new ClickElement(this.productName).execute(actor);
                break;
            }

            case 'ADD_TO_CART_DETAIL': {
                console.log(`Añadiendo al carrito el producto seleccionado`);
                await new ClickButton(UiCompras.addToCartButton).execute(actor);
                break;
            }


            case 'ADD_TO_CART_MAIN': {
                console.log(`Añadiendo al carrito productos desde la pagina pricipal`);
                const selector = UiCompras.addToCartButtonFor(this.productName!);
                console.log('Selector generado:', selector);
                await new ClickButton(selector).execute(actor);
                break;
            }

        }
    }
}