package Steps_Definition;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class ScenarioOutline_DataTable_Definition {

	WebDriver driver;
	
	@Given("^Open browser and launch application$")
	public void launchApplication(DataTable table) throws Throwable {
		
		List<List<String>> data = table.raw();
		
		driver = new ChromeDriver();
		driver.get(data.get(0).get(1));

	}

	
	@When("^navigate to \"([^\"]*)\"$")
	public void navigateToLink(String link) throws Throwable {
		driver.findElement(By.xpath("//a[contains(text(),'"+link+"')]")).click();
		WebDriverWait wait;
		wait = new WebDriverWait(driver, 10);
		if (link.equalsIgnoreCase("Mail"))
		{
			link = "login";
		}
		wait.until(ExpectedConditions.titleContains(link));
		//System.out.println(driver.getTitle());

	}

	@Then("^verify the page \"([^\"]*)\"$")
	public void verifyTitle(String expTitle) throws Throwable {
		
		Assert.assertTrue("Title is not as expected; instead -- '"+driver.getTitle()+"' and expected is '"+expTitle+"'", driver.getTitle().equals(expTitle));
		driver.quit();
	}
	
	
	
	
	
	
	
	
}
