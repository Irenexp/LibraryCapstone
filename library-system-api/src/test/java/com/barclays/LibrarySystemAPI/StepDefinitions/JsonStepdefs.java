package com.barclays.LibrarySystemAPI.StepDefinitions;

import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.json.JSONException;
import org.json.JSONObject;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

public class JsonStepdefs {

    private String string;
    private boolean isValidJson;

    WebDriver driver;

    @When("I want to check if it's a valid JSON")
    public void iWantToCheckIfItSAValidJSON() {
        try {
            new JSONObject(string);
            isValidJson = true;
        } catch (JSONException e) {
            isValidJson = false;
        }
    }

    @Then("The validation should be successful")
    public void theValidationShouldBeSuccessful() {
        assertThat(isValidJson, is(true));
    }


}
