package Runner_FeatureFiles;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		format = {"pretty" , "html:/target/html/"},
		features="FeatureFiles" ,
		glue= {"Steps_Definition"}
		)
public class Scenario_TaggedHooks_Runner {

}
