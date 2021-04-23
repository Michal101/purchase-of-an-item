package pageObjectPattern.pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HistoryOrdersPage {
    private static WebDriver driver;

    @FindBy(id = "history-link")
    WebElement historyOrder;

    @FindBy(xpath = "//*[@class='label label-pill bright']")
    WebElement awaitingPayment;



    public HistoryOrdersPage(WebDriver driver) {
        HistoryOrdersPage.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void historyOrders () {
        historyOrder.click();
    }
    public void isOrderedHistory() {
        String checkPayment = "Awaiting check payment";
        Assert.assertTrue(awaitingPayment.getText().contains(checkPayment));

    }

}
