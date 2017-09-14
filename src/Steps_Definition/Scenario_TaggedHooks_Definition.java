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

public class Scenario_TaggedHooks_Definition {
	
	WebDriver driver;
	String searchString = "define dictionary";
	
	@Before
	public void openBrowser()
	{
		System.out.println("Entered into BEFORE");
		driver = new FirefoxDriver();
	}
	
	@Before ("@googleSearch")
	public void openBrowser_Tagged()
	{
		System.out.println("Entered into TAGGED BEFORE");
	}
	
	@Given("^Open googgle search$")
	public void openGoogleHomepage() throws Throwable {

		System.out.println("Entered into GIVEN");
		driver.get("https://www.google.com");

	}

	@When("Enter item to be searched$")
	public void enterItemToBeSearched() throws Throwable {

		System.out.println("Entered into WHEN");
		driver.findElement(By.xpath(".//*[@id='sb_ifc0']")).sendKeys(searchString);
		driver.findElement(By.xpath("//input[@value='Google Search']")).click();
		
	}

	@Then("^verifying results$")
	public void verifyResults() throws Throwable {
		
		System.out.println("Entered into THEN");
		String foundTitle = driver.getTitle();
		Assert.assertTrue("CHECK TITLE -- '"+foundTitle+"'", foundTitle.contains(searchString));

	}

	
	@After ("@googleSearch")
	public void closeBrowser_Tagged()
	{
		System.out.println("Entered into TAGGED AFTER");
	}
	
	@After
	public void closeBrowser()
	{
		System.out.println("Entered into AFTER");
		driver.quit();
	}


}
