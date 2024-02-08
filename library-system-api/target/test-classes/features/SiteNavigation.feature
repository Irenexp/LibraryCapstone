Feature: HomeNavigation
  Scenario: Navigate to Home Page
    Given I have a website open
    When I navigate to "http://localhost:3000/"
    Then I see the "React App" page
    Then I close the page

  Scenario Outline: More Navigation tests
    Given I have a website open to "http://localhost:3000/"
    When Find the element by id <element_id>
    Then I close the page

    Examples:
      | element_id                                            | page_title |
      | "home-link"                                           | "React App" |
      | "books-link"                                          | "React App" |
      | "movies-link"                                         | "React App  |
      | "periodicals-link"                                    | "React App  |
      | "cart-link"                                           | "React App" |