Feature: Add to Cart Functionality

  Scenario Outline: User can add items to the cart
    Given I am on the homepage
    When I add a "<item>" to the cart
    Then I should see "<item>" in the cart

    Examples:
      | item                |
      | To Kill a Mockingbird |
      | The Shawshank Redemption |