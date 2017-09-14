package Runner_FeatureFiles;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		format = {"pretty" , "html:/Users/deepaksharma/Documents/Study/Selenium Practice/Selenium-Cucumber/target/"},
		features="FeatureFiles" ,
		glue= {"Steps_Definition"}
		)
public class Scenario_Hooks_Runner {

}
