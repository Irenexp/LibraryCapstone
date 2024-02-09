Feature: Filter Navigation
  Scenario: I can verify filtered result
    Given I am on the "http://localhost:3000/books"
    When I apply a filter through a url
    Then a "filtered result" will be returned;
    Then I close the filter page

  Scenario Outline: I can sort the page by filters
    Given I am on the "http://localhost:3000/books"
    When I apply a filter for <Authors>
    Then I close the filter page

    Examples:
      | Authors                                      |
      | "http://localhost:8080/book/author?name=Dan"      |
      | "http://localhost:8080/book/author?name=Harper"   |
      | "http://localhost:8080/book/author?name=Jane"     |

    Scenario Outline: I can sort the page by filters
      Given I am on the Movies page at "http://localhost:8080/movie"
      When I apply a filter for <Ratings>
      Then I close the filter page

    Examples:
      | Ratings                                                          |
      | "http://localhost:8080/movie/rating?minRating=7&maxRating=8"     |
      | "http://localhost:8080/movie/rating?minRating=8&maxRating=9"     |
      | "http://localhost:8080/movie/rating?minRating=9&maxRating=10"    |


  Scenario Outline: I can sort the page by filters
    Given I am on the Periodicals page at "http://localhost:8080/periodicals"
    When I apply a filter for <Type>
    Then I close the filter page

    Examples:
      | Type                                                        |
      | "http://localhost:8080/periodicals/type?type=Magazine"      |
      | "http://localhost:8080/periodicals/type?type=Journal"       |
      | "http://localhost:8080/periodicals/type?type=Newsletter"    |
#
