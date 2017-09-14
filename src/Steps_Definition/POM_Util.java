package Steps_Definition;

import java.io.File;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class POM_Util {

	static WebDriver driver;
	public static WebDriver openBrowser(String browserName)
	{

		switch (browserName.toLowerCase())
		{
			case "firefox" :
			{
				driver = new FirefoxDriver();
				break;
			}
			case "chrome" :
			{
				driver = new ChromeDriver();
				break;
			}

			case "internet explorer" :
			case "ie":
			case "internetexplorer":
			{
				driver = new InternetExplorerDriver();
				break;
			}
			
			default :
			{
				System.out.println("Invalid browser name : "+browserName);
			}

		}
		return driver;
	}
	
	public static void waitFor(WebDriver ldriver, String title)
	{
		WebDriverWait wait = new WebDriverWait(ldriver, 10);
		wait.until(ExpectedConditions.titleIs(title));
	}
	
	
	public static void capture(WebDriver ldriver , String fname)
	{
		try
		{
				
			TakesScreenshot ts = (TakesScreenshot)driver;
			File src = ts.getScreenshotAs(OutputType.FILE);
			FileUtils.copyFile(src, new File("./ScreenShot/"+fname+".png"));
		
		}
		catch (Exception e)
		{
			System.out.println("Exception from capture method on POM_Util");
			System.out.println(e.getMessage());
		}
	}
	
	
	public static void byebye(WebDriver ldriver)
	{
		ldriver.quit();
	}
	
	
	
	
	
	
	
}
