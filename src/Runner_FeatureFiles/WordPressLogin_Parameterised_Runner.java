package Runner_FeatureFiles;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@Cucumber.Options(features="FeatureFiles",glue= {"Steps_Definition"})
public class WordPressLogin_Parameterised_Runner {

}
