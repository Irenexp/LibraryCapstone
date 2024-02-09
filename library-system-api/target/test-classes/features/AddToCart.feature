Feature: Add to Cart Functionality

  Scenario Outline: User can add items to the cart
    Given I am on the book page
    When I add a book to the cart
    Then I should see the book in the cart

    Examples:
      | item                |
      | To Kill a Mockingbird |
#      | The Shawshank Redemption |