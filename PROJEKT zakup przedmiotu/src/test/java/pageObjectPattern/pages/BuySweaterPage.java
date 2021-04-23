package pageObjectPattern.pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BuySweaterPage {
    private static WebDriver driver;

    @FindBy(id = "group_1")
    WebElement sweaterSize;

    @FindBy(xpath = "//*[@id='group_1']/option[1]")
    WebElement sweaterSizeS;

    @FindBy(xpath = "//*[@id='group_1']/option[2]")
    WebElement sweaterSizeM;

    @FindBy(xpath = "//*[@id='group_1']/option[3]")
    WebElement sweaterSizeL;

    @FindBy(xpath = "//*[@id='group_1']/option[4]")
    WebElement sweaterSizeXL;

    @FindBy(id = "quantity_wanted")
    WebElement sweaterQuantity;

    @FindBy(xpath = "//*[@class='btn btn-primary add-to-cart']")
    WebElement sweaterSubmit;

    @FindBy(xpath = "//*[@class='btn btn-primary']")
    WebElement getSweaterSubmit2;

    @FindBy(xpath = "//*[@class='btn btn-primary']")
    WebElement checkoutSubmit;

    @FindBy(xpath = "//*[@class='discount discount-percentage']")
    WebElement discount;



    public BuySweaterPage(WebDriver driver) {
        BuySweaterPage.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void quantityAndSizeSweater (String number, String size) throws InterruptedException {
        sweaterSize.click();

        if (size.equals("S") ^ (size.equals("s"))) {
            sweaterSizeS.click();
        } else if (size.toUpperCase().equals("M")) {
            sweaterSizeM.click();
        } else if (size.toUpperCase().equals("L")) {
            sweaterSizeL.click();
        } else {
//        else if (size.equals("XL") ^ (size.equals("xl") ^ (size.equals("Xl") ^ (size.equals("xL"))))) {
            sweaterSizeXL.click();
        }

        sweaterQuantity.clear();
        sweaterQuantity.sendKeys(number);
        Thread.sleep(4000); //site slows down sometimes
        sweaterSubmit.click();
        getSweaterSubmit2.click();
        checkoutSubmit.click();
    }

    public void isThereDiscount (String sale) {

        Assert.assertTrue(discount.getText().contains(sale));
    }



}
