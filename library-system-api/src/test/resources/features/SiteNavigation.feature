Feature: HomeNavigation
  Scenario: Navigate to Home Page
    Given I have a website open
    When I navigate to "http://localhost:3000/"
    Then I see the "React App" page
    Then I close the page

