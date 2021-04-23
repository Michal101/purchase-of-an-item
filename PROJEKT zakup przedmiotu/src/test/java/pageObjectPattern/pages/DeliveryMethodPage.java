package pageObjectPattern.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DeliveryMethodPage {
    private static WebDriver driver;

    @FindBy(xpath = "//*[@class='btn btn-primary continue float-xs-right']")
    WebElement addressesSubmit;

    @FindBy(xpath = "//*[@class='continue btn btn-primary float-xs-right']")
    WebElement continueSubmit;

    @FindBy(xpath = "//*[@class='btn btn-primary center-block']")
    WebElement paySubmit;

    @FindBy(id="delivery_option_1")
    WebElement deliveryOption;

    @FindBy(id = "payment-option-1")
    WebElement payByCheck;

    @FindBy(id = "conditions_to_approve[terms-and-conditions]")
    WebElement termsAccept;


    public DeliveryMethodPage(WebDriver driver) {
        DeliveryMethodPage.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void chooseDeliveryMethod () {
        addressesSubmit.click();

        if (!deliveryOption.isSelected())
            deliveryOption.click();

        continueSubmit.click();
    }

    public void chooseDeliveryPayment () {
        payByCheck.click();
        termsAccept.click();
        paySubmit.click();
    }

}
