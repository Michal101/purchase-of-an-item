Feature: Purchase, Delivery method and photo


  Scenario Outline: Purchase, Delivery and photo
    Given User is logged in to shop
    And User search Hummingbird Printed Sweater
    And User ordered a sweater in number <quantity> and size <size>
    #    size must be S,M,L,XL
    And User chooses the delivery method
    And User chooses the payment method
    And Your order is confirmed - ScreenShot
    And User check history of orders
    Then User close browser

    Examples:
      | quantity | size |
      | 2        |   m  |
      | 5        |   l  |