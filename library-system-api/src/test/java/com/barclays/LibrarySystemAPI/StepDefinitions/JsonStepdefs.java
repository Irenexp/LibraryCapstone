package com.barclays.LibrarySystemAPI.StepDefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.json.JSONException;
import org.json.JSONObject;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

public class JsonStepdefs {

    private String string;
    private boolean isValidJson;

    @Given("I have a response string containing JSON from endpoint {string}")
    public void iHaveAResponseStringContainingJSONFromEndpoint(String arg0) {
        string = "[{\"id\":3,\"title\":\"The Great Gatsby\",\"genre\":\"ROMANCE\",\"quantity\":30,\"available\":true}]";
    }

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
