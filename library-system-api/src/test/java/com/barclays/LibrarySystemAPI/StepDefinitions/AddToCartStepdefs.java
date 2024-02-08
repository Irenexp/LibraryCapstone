package com.barclays.LibrarySystemAPI.StepDefinitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class AddToCartStepdefs {

    WebDriver driver;
    @After
    public void tearDown() {
        driver.quit();
    }

    @Before
    public void setUp() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
    }
    @Given("I am on the homepage")
    public void iAmOnTheHomepage() {
        driver.get("http://localhost:3000/");
    }

    @When("I add a {string} to the cart")
    public void iAddAToTheCart(String itemName) {
        WebElement addButton = driver.findElement(By.xpath("//div[text()='" + itemName + "']/following-sibling::button[contains(.,'Add to Cart')]"));
        addButton.click();
    }

    @Then("I should see {string} in the cart")
    public void iShouldSeeInTheCart(String itemName) {
        driver.findElement(By.cssSelector("#cart-link")).click();

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(.,'" + itemName + "')]")));

        assertTrue(driver.findElement(By.xpath("//div[contains(.,'" + itemName + "')]")).isDisplayed());
    }
}
