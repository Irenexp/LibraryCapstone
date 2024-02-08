package com.barclays.LibrarySystemAPI.StepDefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class SiteNavigationStepdefs {

    WebDriver driver;

    @Given("I have a website open")
    public void iHaveAWebsiteOpen() {
        WebDriverManager.chromedriver().driverVersion("121.0.6167.140").setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--remote-allow-origins=*");
        driver = new ChromeDriver(options);
    }

    @When("I navigate to {string}")
    public void iNavigateTo(String url) {
        driver.get(url);
    }

    @Then("I see the {string} page")
    public void iSeeThePage(String pageTitle) {
        String tabTitle = driver.getTitle();
        Assertions.assertTrue(tabTitle.contains(pageTitle));
    }

    @Then("I close the page")
    public void iCloseThePage() {
        driver.close();
    }
}
