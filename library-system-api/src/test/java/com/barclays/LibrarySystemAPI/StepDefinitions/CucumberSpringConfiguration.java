package com.barclays.LibrarySystemAPI.StepDefinitions;
import com.barclays.LibrarySystemAPI.LibrarySystemApiApplication;
import io.cucumber.spring.CucumberContextConfiguration;
import org.springframework.boot.test.context.SpringBootTest;


@CucumberContextConfiguration
@SpringBootTest(classes = LibrarySystemApiApplication.class, webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class CucumberSpringConfiguration {
}
