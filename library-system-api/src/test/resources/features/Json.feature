Feature: JSON validation

  Scenario: Validating JSON strings from Response Body
    Given I have a response string containing JSON from endpoint "http://localhost:8080/book/genre?genre=ROMANCE"
    When I want to check if it's a valid JSON
    Then The validation should be successful
