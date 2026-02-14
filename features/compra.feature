Feature: Compra de productos en la tienda en línea

    @smoke @AddToCart
    Scenario Outline: Usuario selecciona detalle de un articulo y agrega al carro de compras
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
    Scenario Outline: Usuario Añade varios articulos al carro de compras desde la pagina principal
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


    @smoke @compra_simple
    Scenario Outline: Usuario realiza y valida compra exitosa
        Given que el usuario abre la página de login
        When ingresa credenciales "<usuario>" y "<contraseña>" válidas
        And hace click en el botón login

        When añade al carrito el producto "<producto>"

        And abre el carrito
        And inicia el checkout
        And completa los datos de envío "<nombre>" "<apellido>" "<codigoPostal>"
        And finaliza la compra
        Then debería ver el mensaje de confirmación "<mensaje>"

        Examples:
            | usuario       | contraseña   | producto                | nombre | apellido | codigoPostal | mensaje                   |
            | standard_user | secret_sauce | Sauce Labs Backpack     | Joel   | Quispe   | 15046        | Thank you for your order! |
            | standard_user | secret_sauce | sauce-labs-bike-light   | Miguel | Meza     | 11425        | Thank you for your order! |
            | standard_user | secret_sauce | sauce-labs-bolt-t-shirt | Angel  | Miranda  | 12047        | Thank you for your order! |


