package com.barclays.LibrarySystemAPI.StepDefinitions;

import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class SiteNavigationStepdefs {

    WebDriver driver;

    @Given("I have a website open")
    public void iHaveAWebsiteOpen() {
        WebDriverManager.chromedriver().setup();
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
    public void iSeeThePage_titlePage(String pageTitle) {
        String tabTitle = driver.getTitle();
        Assertions.assertTrue(tabTitle.contains(pageTitle));
    }

    @Then("I close the page")
    public void iCloseThePage() {
        driver.close();
        driver.quit();
    }


    @When("Find the element by id {string}")
    public void findTheElementByIdElement_id(String elementId) {
        WebElement element = driver.findElement(By.id(elementId));
        element.click();
    }

}


