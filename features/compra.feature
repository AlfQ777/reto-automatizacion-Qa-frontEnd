Feature: Compra de productos en la tienda en línea

    @smoke @AddToCart
    Scenario Outline: Usuario valida información de productos
        Given que el usuario abre la página de login
        When ingresa credenciales "<usuario>" y "<contraseña>" válidas
        And hace click en el botón login

        When selecciona el producto "<nombreProducto>"
        And hace click en "Add to cart"

        Examples:
            | usuario       | contraseña   | nombreProducto        |
            | standard_user | secret_sauce | Sauce Labs Backpack   |
            | standard_user | secret_sauce | Sauce Labs Bike Light |


    @smoke @AddMultiple
    Scenario Outline: Añadir varios productos sin entrar al detalle
        Given que el usuario abre la página de login
        When ingresa credenciales "<usuario>" y "<contraseña>" válidas
        And hace click en el botón login

        When añade al carrito el producto "<producto1>"
        And añade al carrito el producto "<producto2>"
        And añade al carrito el producto "<producto3>"
        #Then el carrito debería mostrar "<cantidad>"

        Examples:
            | usuario       | contraseña   | producto1           | producto2             | producto3               | cantidad |
            | standard_user | secret_sauce | sauce-labs-backpack | sauce-labs-bike-light | sauce-labs-bolt-t-shirt | 3        |


