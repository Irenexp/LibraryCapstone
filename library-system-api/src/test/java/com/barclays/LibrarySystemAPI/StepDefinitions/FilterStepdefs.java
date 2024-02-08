package com.barclays.LibrarySystemAPI.StepDefinitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class FilterStepdefs {

    WebDriver driver;

    @Before
    public void setUp() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
    }
    @After
    public void tearDown() {
        driver.quit();
    }

    @Given("I am on the Books page at {string}")
    public void iAmOnTheBooksPageAt(String url) {
        driver.get(url);
    }

    @When("I apply a filter for {string}")
    public void iApplyAFilterForAuthors( String url) {
        driver.get(url);
    }

    @Given("I am on the Movies page at {string}")
    public void iAmOnTheMoviesPageAt(String url) {
        driver.get(url);
    }

    @Given("I am on the Periodicals page at {string}")
    public void iAmOnThePeriodicalsPageAt(String url) {
        driver.get(url);
    }

    @Then("I can see the filtered page at {string}")
    public void iCanSeeTheFilteredPageAtPage_title(String pageTitle) {
        String tabTitle = driver.getTitle();
        Assertions.assertTrue(tabTitle.contains(pageTitle));
    }
}
