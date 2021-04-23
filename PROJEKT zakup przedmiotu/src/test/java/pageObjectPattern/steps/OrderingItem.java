package pageObjectPattern.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageObjectPattern.pages.*;

import java.util.concurrent.TimeUnit;

public class OrderingItem {

    private final String USER = "Ricardo@jourrapide.com";
    private final String PASSWORD = "unbaqpdttwkjuwarav";
    private final String item = " Hummingbird Printed Sweater";
    private final String discount = "20%";

    WebDriver driver;
    LoginPage loginPage;
    SearchCatalogPage searchCatalogPage;
    BuySweaterPage buySweaterPage;
    DeliveryMethodPage deliveryMethodPage;
    ScreenShotPage screenShotPage;
    HistoryOrdersPage historyOrdersPage;
    HeaderComponent headerComponent;

    @Given("^User is logged in to shop$")
    public void userIsLooggedInToShop() {
        System.setProperty("webdriver.chrome.driver",
                "src/main/resources/drivers/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();

        driver.get("https://prod-kurs.coderslab.pl/index.php?controller=authentication");
        loginPage = new LoginPage(driver);
        searchCatalogPage = new SearchCatalogPage(driver);
        buySweaterPage = new BuySweaterPage(driver);
        deliveryMethodPage = new DeliveryMethodPage(driver);
        screenShotPage = new ScreenShotPage(driver);
        historyOrdersPage = new HistoryOrdersPage(driver);
        headerComponent = new HeaderComponent(driver);

        loginPage.loginAs(USER,PASSWORD);

    }

    @And("^User search Hummingbird Printed Sweater$")
    public void userFindsItem() {
        searchCatalogPage.findItem(item);
        searchCatalogPage.clickItem();
        buySweaterPage.isThereDiscount(discount);
    }

    @And("^User ordered a sweater in number (.*) and size (.*)$")
    public void orderedSweater(String number, String size) throws InterruptedException {
        buySweaterPage.quantityAndSizeSweater(number, size);
    }

    @And("^User chooses the delivery method$")
    public void choosesDeliveryMethod () {
        deliveryMethodPage.chooseDeliveryMethod();
    }
    @And("^User chooses the payment method$")
    public void choosesPaymentMethod () {
        deliveryMethodPage.chooseDeliveryPayment();
    }

    @And("^Your order is confirmed - ScreenShot$")
    public void confirmedScreenShot () {
    screenShotPage.takeScreenShotMethod();
    }

    @And("^User check history of orders$")
    public void checkHistoryOrders () {
        headerComponent.goToUserInformationView();
        historyOrdersPage.historyOrders();
        historyOrdersPage.isOrderedHistory();
    }
    @Then("^User close browser$")
    public void closeBrowser() {
        driver.close();
    }

}


