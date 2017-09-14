package Steps_Definition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Background_Scenario_Definition {
	
	WebDriver driver;
	
	@Given("^Open yahoo home page$")
	public void open_yahoo_home_page() throws Throwable {
		driver = new FirefoxDriver();
		driver.get("https://www.yahoo.com/");
	}

	@When("^I click on News$")
	public void i_click_on_News() throws Throwable {
		
		driver.findElement(By.xpath("//a[@href='https://www.yahoo.com/news/']")).click();
		Thread.sleep(10000);

	}

	@Then("^print title of Yahoo News$")
	public void print_title_of_Yahoo_News() throws Throwable {

		System.out.println("Title for Yahoo News :"+driver.getTitle());
		driver.quit();
	}

	@When("^I click on Sports$")
	public void i_click_on_Sports() throws Throwable {

		driver.findElement(By.xpath("//a[@href='https://sports.yahoo.com/']")).click();
		Thread.sleep(10000);
	}

	@Then("^print title of Yahoo Sports$")
	public void print_title_of_Yahoo_Sports() throws Throwable {

		System.out.println("Title for Yahoo Sports :"+driver.getTitle());
		driver.quit();
	}

	@When("^I click on Mail$")
	public void i_click_on_Mail() throws Throwable {

		driver.findElement(By.xpath("//a[@href='https://mail.yahoo.com/']")).click();
		Thread.sleep(10000);
	}

	@Then("^print title of Yahoo Mail$")
	public void print_title_of_Yahoo_Mail() throws Throwable {

		System.out.println("Title for Yahoo Mail :"+driver.getTitle());
		driver.quit();
	}


}
