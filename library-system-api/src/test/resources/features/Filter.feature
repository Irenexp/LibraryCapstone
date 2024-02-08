Feature: Filter Navigation
  Scenario Outline: I can sort the page by filters
    Given I am on the Books page at "http://localhost:8080/books"
    When I apply a filter for <Authors>
    Then I can see the filtered page at <page_title>

    Examples:
      | Authors                                           | page_title |
      | "http://localhost:8080/book/author?name=Dan"      | "ReactApp" |
      | "http://localhost:8080/book/author?name=Harper"   | "ReactApp" |
      | "http://localhost:8080/book/author?name=Jane"     | "ReactApp  |



  Scenario Outline: I can sort the page by filters
    Given I am on the Movies page at "http://localhost:8080/movie"
    When I apply a filter for <Ratings>
    Then I can see the filtered page at <page_title>


    Examples:
      | Ratings                                                          | page_title |
      | "http://localhost:8080/movie/rating?minRating=7&maxRating=8"     | "ReactApp" |
      | "http://localhost:8080/movie/rating?minRating=8&maxRating=9"     | "ReactApp" |
      | "http://localhost:8080/movie/rating?minRating=9&maxRating=10"     | "ReactApp  |



  Scenario Outline: I can sort the page by filters
    Given I am on the Periodicals page at "http://localhost:8080/periodicals"
    When I apply a filter for <Type>
    Then I can see the filtered page at <page_title>

    Examples:
      | Type                                                        | page_title |
      | "http://localhost:8080/periodicals/type?type=Magazine"      | "ReactApp" |
      | "http://localhost:8080/periodicals/type?type=Journal"       | "ReactApp" |
      | "http://localhost:8080/periodicals/type?type=Newsletter"    | "ReactApp  |
