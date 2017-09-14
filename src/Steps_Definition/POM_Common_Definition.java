package Steps_Definition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class POM_Common_Definition {
	
	protected WebDriver driver;
	
	public POM_Common_Definition(WebDriver ldriver)
	{
		this.driver = ldriver;
	}
	
	public POM_HomePage openURL(String url)
	{
		driver.get(url);
		POM_Util.waitFor(driver, "Zoo Adoption | Home");
		return new POM_HomePage(driver);
	}
	
	public POM_HomePage gotoHomePage()
	{
		driver.findElement(By.xpath("//*[@id='home_link']")).click();
		return new POM_HomePage(driver);
	}
	

	public POM_ContactPage gotoContactPage()
	{
		driver.findElement(By.id("contact_link")).click();
		return new POM_ContactPage(driver);
	}
	
	
	
}
