Feature: Compra de productos en la tienda en línea

    @smoke @AddToCart
    Scenario Outline: Usuario valida información de productos
        Given que el usuario abre la página de login
        When ingresa credenciales "<usuario>" y "<contraseña>" válidas
        And hace click en el botón login

        When selecciona el producto "<nombreProducto>"
        And hace click en "Add to cart"

        Examples:
            |usuario        | contraseña   | nombreProducto       |
            |standard_user  |  secret_sauce| Sauce Labs Backpack  |
            |standard_user  |  secret_sauce| Sauce Labs Bike Light|


  