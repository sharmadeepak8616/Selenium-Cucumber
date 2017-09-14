package Steps_Definition;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class WordPress_AllPagesTitle_Definition {

	WebDriver driver;
	WebDriverWait wait;
	
	@Given("^I open browser and launch application$")
	public void launchApplication() throws Throwable {
		
		driver = new ChromeDriver();
		driver.get("http://demosite.center/wordpress/wp-login.php");
		wait = new WebDriverWait(driver,20);
		wait.until(ExpectedConditions.titleContains("Log In"));
		
	}

	@When("^I login into appllication using valid credentials$")
	public void login() throws Throwable {
		driver.findElement(By.xpath(".//*[@id='user_login']")).sendKeys("admin");
		driver.findElement(By.xpath(".//*[@id='user_pass']")).sendKeys("demo123");
		driver.findElement(By.xpath(".//*[@id='wp-submit']")).click();

		wait.until(ExpectedConditions.titleContains("Dashboard"));
		
	}

	@And("^click on the \"([^\"]*)\"$")
	public void clickSideMenu(String link) throws Throwable {
		
		Thread.sleep(5000);		
		List<WebElement> sideMenuList = driver.findElements(By.xpath("//ul[@id='adminmenu']//li"));
		
		for (WebElement item : sideMenuList)
		{		
			if (item.getText().toLowerCase().contains(link))
			{
				item.click();
				break;
			}
			
		}

	}
	
	@Then("^I verify the title of \"([^\"]*)\" page$")
	public void verifyTitle(String title) throws Throwable {
		Thread.sleep(5000);
		Assert.assertTrue("Title does not contain desired string - "+driver.getTitle(), driver.getTitle().toLowerCase().contains(title));
		
	}

	
	
	@And("^close the browser$")
	public void close_the_browser() throws Throwable {
		driver.quit();
	}
	

	
	

}
