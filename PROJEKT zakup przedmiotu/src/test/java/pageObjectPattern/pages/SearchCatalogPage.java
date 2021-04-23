package pageObjectPattern.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchCatalogPage {
    private static WebDriver driver;

    @FindBy(name = "s")
    WebElement searchItem;

    @FindBy(xpath = "//*[@type='submit']")
    WebElement submit;

    @FindBy(xpath = "//*[@data-id-product='2']") //Hummingbird Printed Sweater
    WebElement sweaterItem;




    public SearchCatalogPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }


    public void findItem(String item) { // catalog search

        searchItem.clear();
        searchItem.sendKeys(item);

        submit.click();
    }

    public void clickItem() { // choosing sweater

        sweaterItem.click();
    }

}
