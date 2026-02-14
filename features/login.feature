Feature: Login

@smoke @login_exitoso
  Scenario Outline: : Usuario inicia sesión exitosamente
    Given que el usuario abre la página de login
    When ingresa credenciales "<usuario>" y "<contraseña>" válidas
    And hace click en el botón login
    Then debería ver el título de la página de productos
    Examples:
        | usuario | contraseña | 
        | standard_user  |  secret_sauce  | 
        | visual_user  |  secret_sauce  |   


  @smoke @login_bloqueado
  Scenario Outline: : Usuario no inicia sesión con usuario bloqueado
    Given que el usuario abre la página de login
    When ingresa credenciales "<usuario>" y "<contraseña>" válidas
    And hace click en el botón login
    Then debería validar estado bloqueado
    Examples:
        | usuario | contraseña | 
        | locked_out_user  |  secret_sauce  | 


  @smoke @login_invalido
  Scenario Outline: : Usuario no inicia sesión exitosamente
    Given que el usuario abre la página de login
    When ingresa credenciales "<usuario>" y "<contraseña>" válidas
    And hace click en el botón login
    Then debería validar loguin invalido
    Examples:
        | usuario | contraseña | 
        | standard_user123  |  secret_sauce123  | 