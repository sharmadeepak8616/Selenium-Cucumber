package Runner_FeatureFiles;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="FeatureFiles", glue= {"Steps_Definition"})
public class WordPressLogin_Parameterised_Runner {

}
