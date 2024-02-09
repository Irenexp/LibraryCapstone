package com.barclays.LibrarySystemAPI.StepDefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.WebDriver;

import org.openqa.selenium.chrome.ChromeDriver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;


public class FilterStepdefs {

    WebDriver driver;

    String filteredContent;


    @Given("I am on the {string}")
    public void iAmOnThe(String url) {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.get(url);
    }

    @When("I apply a filter for {string}")
    public void iApplyAFilterForAuthors(String url) {
        driver.get(url);
    }

    @When("I apply a filter through a url")
    public void iApplyAFilterThroughAUrl() throws IOException {
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

            filteredContent = content.toString();

        }
            con.disconnect();
    }

    @Then("a {string} will be returned;")
    public void aWillBeReturned(String result) throws IOException {

        result = "[{\"id\":6,\"title\":\"The Da Vinci Code\",\"imgUrl\":\"https://ls-project-books.s3.eu-west-2.amazonaws.com/da-vinci-codebook.jpg\",\"genre\":\"FICTION\",\"quantity\":30,\"available\":true}]";

        Assertions.assertEquals(filteredContent, result);

    }


    @Then("I close the filter page")
    public void iCloseThePage() {
        driver.close();
        driver.quit();
    }

    @Given("I am on the Movies page at {string}")
    public void iAmOnTheMoviesPageAt(String url2) {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.get(url2);
    }

    @Given("I am on the Periodicals page at {string}")
    public void iAmOnThePeriodicalsPageAt(String url3) {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.get(url3);
    }


}

