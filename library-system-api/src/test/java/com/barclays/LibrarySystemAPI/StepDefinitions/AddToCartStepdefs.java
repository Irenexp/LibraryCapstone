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
    private String itemName;

    @Before
    public void setUp() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
    }

    @After
    public void tearDown() {
        driver.quit();
    }

    @Given("I am on the book page")
    public void iAmOnTheBookPage() {
        driver.get("http://localhost:3000/books");
    }

    @When("I add a book to the cart")
    public void iAddAToTheCart() {
        WebDriverWait firstWait = new WebDriverWait(driver, Duration.ofSeconds(5));
        firstWait.until(ExpectedConditions.visibilityOfElementLocated(By.className("books-list")));

        WebElement booksList = driver.findElement(By.className("books-list"));
        WebElement book = booksList.findElement(By.xpath(".//div[1]"));
        WebElement bookTitle = book.findElement(By.xpath(".//div[1]"));
        itemName = bookTitle.getText();
        WebElement addButton = book.findElement(By.xpath(".//button[1]"));
        addButton.click();
    }

    @Then("I should see the book in the cart")
    public void iShouldSeeInTheCart() {
        driver.findElement(By.cssSelector("#cart-link")).click();

        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[contains(.,'" + itemName + "')]")));
        assertTrue(driver.findElement(By.xpath("//div[contains(.,'" + itemName + "')]")).isDisplayed());
    }
}
