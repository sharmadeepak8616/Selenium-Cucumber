package Steps_Definition;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Scenario_DataTable_Definition {

	WebDriver driver;
	@Given("^I open browser and launch learn-automation$")
	public void launchApplication() throws Throwable {
		
		driver = new ChromeDriver();
		driver.get("http://learn-automation.com/");

	}

	@When("^I click on contact us$")
	public void clickToContact() throws Throwable {
		
		driver.findElement(By.xpath("//a[text()='Contact us']")).click();
		Assert.assertTrue("Application doesn't land on Contact us page, instead '"+driver.getTitle()+"'", driver.getTitle().equalsIgnoreCase("contact us"));
		

	}

	@When("^fill in the details$")
	public void fillContactUsForm(DataTable table) throws Throwable {

		List<List<String>> data = table.raw();

		driver.findElement(By.xpath("//input[@name='contactbuddy-name']")).sendKeys(data.get(1).get(1));
		driver.findElement(By.xpath("//input[@name='contactbuddy-email']")).sendKeys(data.get(2).get(1));
		driver.findElement(By.xpath("//input[@name='contactbuddy-subject']")).sendKeys(data.get(3).get(1));
		driver.findElement(By.xpath("//textarea[@name='contactbuddy-message']")).sendKeys(data.get(4).get(1));
		driver.findElement(By.xpath("//input[@name='contactbuddy-submit']")).click();

	}

	@Then("^verify email sent successfully message$")
	public void veriyEmailSent() throws Throwable {
		
		Assert.assertTrue("Email doesn't go successfully", driver.findElement(By.xpath("//*[text()='Email sent successfully.']")).isDisplayed());
		driver.quit();
	}
	
	
	
	
	
	
	
	
}
