package Steps_Definition;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class POM_Definition {

	WebDriver driver;
	POM_HomePage homepage;
	POM_ContactPage contactpage;
	POM_ContactConfirmationPage contactConfirmationpage;


	@Given("^I open \"([^\"]*)\" browser and Go to application under test$")
	public void startBrowserWindow(String browser, DataTable linkData) throws Throwable {
	
		
		driver = POM_Util.openBrowser(browser);
		homepage = new POM_HomePage(driver);
		
		String link = linkData.raw().get(0).get(1);
		homepage.openURL(link);

	}

	@When("^I click on Contact link$")
		public void clikOnContact() throws Throwable {
		contactpage = homepage.gotoContactPage();
		
	}
	
	@And("^enter value to name field$")
		public void contactForm_EnterName() throws Throwable {
			contactpage.setNameField("deepak");
	}
	
	@And("^select radio button$")
		public void contactForm_SelectRadio() throws Throwable {
			contactpage.setRadioButton("donation");
	}
	
	@And("^enter value to address field$")
		public void contactForm_EnterAddress() throws Throwable {
			contactpage.setAddressField("New Delhi");
	}
	
	@And("^enter value to postcode field$")
		public void contactForm_EnterPostcode() throws Throwable {
			contactpage.setPostCodeField("110045");
		
	}
	
	@And("^enter value to email field$")
		public void contactForm_EnterEmail() throws Throwable {
		
		contactpage.setEmailField("koichakkarnai@gmail.com");
		
		POM_Util.capture(driver, "contactFilled");
		
	}
	
	@And("^click on submit button$")
		public void contactForm_ClickSubmit() throws Throwable {
		
		POM_Util.capture(driver, "contactFilled_NEW");
		contactConfirmationpage = contactpage.clickSubmitButton();
		
	}
	
	@And("^I fill contact form$")
	public void fillContactForm() throws Throwable {
		
		contactpage
			.setNameField("test")
			.setRadioButton("donation")
			.setAddressField("test")
			.setPostCodeField("test")
			.setEmailField("test");
	}
	
	
	
	@Then("^verify the contact confirmation page title$")
		public void verifyContactConfirmationMessage() throws Throwable {
		
		String confirmationMsg = contactConfirmationpage.getContactConfirmationMessage();
		String expConfirmationMsg = "We have your message";
		
		Assert.assertTrue("Confirmation message is not as expected", confirmationMsg.equals(expConfirmationMsg));
		POM_Util.capture(driver, "confirmation");

	}
	
	@After
	public void lastMethod()
	{
		System.out.println("Entered into lastMethod - After");
		POM_Util.byebye(driver);
	}
	
	
	
	
	
	
	
}
