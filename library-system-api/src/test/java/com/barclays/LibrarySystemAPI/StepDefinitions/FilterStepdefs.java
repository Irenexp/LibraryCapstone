package com.barclays.LibrarySystemAPI.StepDefinitions;

import io.cucumber.java.After;
import io.cucumber.java.AfterStep;
import io.cucumber.java.Before;
import io.cucumber.java.BeforeStep;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

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
    public void iApplyAFilterForAuthors(String url) {
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

    @Then("a {string} will be returned;")
    public void aWillBeReturned(String result) throws IOException {

        result = "[{\"id\":6,\"title\":\"The Da Vinci Code\",\"imgUrl\":\"https://ls-project-books.s3.eu-west-2.amazonaws.com/da-vinci-codebook.jpg\",\"genre\":\"FICTION\",\"quantity\":30,\"available\":true}]";
        URL url = new URL("http://localhost:8080/book/author?name=Dan");
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");

        int status = con.getResponseCode();
        if (status == 200) {
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer content = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                content.append(inputLine);
            }
            in.close();

            Assertions.assertEquals(content.toString(),result);
        }
        con.disconnect();

    }
}
