package Steps_Definition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class POM_ContactConfirmationPage extends POM_Common_Definition {

	
	public POM_ContactConfirmationPage(WebDriver driver)
	{
		super(driver);
	}
	
	
	public String getContactConfirmationMessage()
	{
		return driver.findElement(By.xpath("//td[@class='content']//h1")).getText();
	}
	
	
	
	
}
