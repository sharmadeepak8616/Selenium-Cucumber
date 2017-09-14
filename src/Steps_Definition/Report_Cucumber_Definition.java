package Steps_Definition;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Report_Cucumber_Definition {

	WebDriver driver;

@Given("^I open yahoo home url$")
public void openyahoo() throws Throwable {
	driver = new FirefoxDriver();
	driver.get("https://www.yahoo.com/");
	
}

@When("^I click on link$")
public void clickOnLink(DataTable table) throws Throwable {
	
	String clickTo;
	WebDriverWait wait;
	
	List<List<String>> data = table.raw();
	clickTo = data.get(0).get(1);
	
	driver.findElement(By.xpath("//a[@href='https://www.yahoo.com/"+clickTo.toLowerCase()+"/']")).click();
	
	wait = new WebDriverWait(driver, 10);
	wait.until(ExpectedConditions.titleContains(clickTo));
}

@Then("^page title must conatin link$")
public void verifyTitleForLink() throws Throwable {

	String expTitle = "Yahoo News - Latest News & Headlines";
	String foundTitle = driver.getTitle();
	Assert.assertTrue("Title is not as expected; instead -- '"+foundTitle+"' and expected is '"+expTitle+"'", foundTitle.equals(expTitle));
	driver.quit();
}

	
	
	
}
