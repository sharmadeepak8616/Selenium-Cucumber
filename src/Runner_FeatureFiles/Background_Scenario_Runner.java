package Runner_FeatureFiles;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		format= {"pretty" , "json:target/json/background.json"},
		features="FeatureFiles",
		glue="Steps_Definition")
public class Background_Scenario_Runner {

}
