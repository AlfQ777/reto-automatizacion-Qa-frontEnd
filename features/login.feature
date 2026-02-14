Feature: Login

@smoke @login
  Scenario Outline: : Usuario inicia sesión exitosamente
    Given que el usuario abre la página de login
    When ingresa credenciales "<usuario>" y "<contraseña>" válidas
    And hace click en el botón login
    Then debería ver el título de la página de productos
    Examples:
        | usuario | contraseña | 
        | standard_user  |  secret_sauce  | 



  @smoke @fail_login
  Scenario Outline: : Usuario no inicia sesión exitosamente
    Given que el usuario abre la página de login
    When ingresa credenciales "<usuario>" y "<contraseña>" válidas
    And hace click en el botón login
    #Then debería ver el título de la página de productos
    Then debería validar estado bloqueado
    Examples:
        | usuario | contraseña | 
        | locket_out_user  |  secret_sauce1  | 
