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

    @Before
    public void setUp() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
    }

//    @Given("I have a response string containing JSON from endpoint {string}")
//    public void iHaveAResponseStringContainingJSONFromEndpoint(String urlString) {
//        driver.get(urlString);
//        try {
//            URL url = new URL(urlString);
//            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
//
//            connection.setRequestMethod("GET");
//
//            int responseCode = connection.getResponseCode();
//            if (responseCode == HttpURLConnection.HTTP_OK) {
//                // Read response
//                BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream(), StandardCharsets.UTF_8));
//                StringBuilder response = new StringBuilder();
//                String line;
//                while ((line = reader.readLine()) != null) {
//                    response.append(line);
//                }
//                reader.close();
//
//            } else {
//                System.out.println("GET request not worked");
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
////        }
//    }

//        string = "[{\"id\":3,\"title\":\"The Great Gatsby\",\"genre\":\"ROMANCE\",\"quantity\":30,\"available\":true}]";


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
