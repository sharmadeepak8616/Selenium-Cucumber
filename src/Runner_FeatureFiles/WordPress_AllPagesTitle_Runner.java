package Runner_FeatureFiles;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		format = {"pretty" , "html:target/html"},
		features="feature",
		glue= {"Steps_Definition"})
public class WordPress_AllPagesTitle_Runner {

}
