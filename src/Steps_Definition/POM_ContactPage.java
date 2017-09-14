package Steps_Definition;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class POM_ContactPage extends POM_Common_Definition {
	
	public POM_ContactPage(WebDriver driver)
	{
		super(driver);
	}
	
	public POM_ContactPage setNameField(String name)
	{
		driver.findElement(By.xpath("//input[@name=\"name_field\"]")).sendKeys(name);
		return new POM_ContactPage(driver);
	}
	
	public POM_ContactPage setRadioButton(String radioChoice)
	{

		List<WebElement> radioOptions = driver.findElements(By.xpath("//table[@id='table2']//tr[2]//input"));
		
		for (WebElement option : radioOptions)
		{
			if(option.getAttribute("value").equalsIgnoreCase(radioChoice))
			{
				option.click();
				break;
			}
		}
		return new POM_ContactPage(driver);
	}

	public POM_ContactPage setAddressField(String addr)
	{
		driver.findElement(By.name("address_field")).sendKeys(addr);
		return new POM_ContactPage(driver);
	}
	
	public POM_ContactPage setPostCodeField(String postcode)
	{
		driver.findElement(By.name("postcode_field")).sendKeys(postcode);
		return new POM_ContactPage(driver);
	}	
	
	
	public POM_ContactPage setEmailField(String email)
	{
		driver.findElement(By.name("email_field")).sendKeys(email);
		return new POM_ContactPage(driver);
		
	}	
	
	public POM_ContactConfirmationPage clickSubmitButton()
	{
		driver.findElement(By.id("submit_message")).click();
		return new POM_ContactConfirmationPage(driver);
		
	}
	
	
}
