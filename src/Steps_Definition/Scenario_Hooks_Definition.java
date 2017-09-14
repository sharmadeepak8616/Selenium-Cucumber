package Steps_Definition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Scenario_Hooks_Definition {
	
	WebDriver driver;
	String searchString;
	
	@Before
	public void openBrowser()
	{

		driver = new FirefoxDriver();
	}
	
	@Given("^I opened the Google search homepage$")
	public void openGoogleHomepage() throws Throwable {

		driver.get("https://www.google.com");

	}

	@When("^I enter \"([^\"]*)\" to search$")
	public void enterItemToBeSearched(String item) throws Throwable {

		searchString = item;
		driver.findElement(By.xpath(".//*[@id='sb_ifc0']")).sendKeys(searchString);
		driver.findElement(By.xpath("//input[@value='Google Search']")).click();
		
	}

	@Then("^I verify search results$")
	public void verifyResults() throws Throwable {
		
		String foundTitle = driver.getTitle();
		Assert.assertTrue("CHECK TITLE -- '"+foundTitle+"'", foundTitle.contains(searchString));

	}
	
	@After
	public void closeBrowser()
	{
		driver.quit();
	}
	

}
