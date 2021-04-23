package pageObjectPattern.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.time.Instant;

public class ScreenShotPage {
    private static WebDriver driver;

    public ScreenShotPage(WebDriver driver) {
        ScreenShotPage.driver = driver;
        PageFactory.initElements(driver, this);
    }
    private String getRandomName(){
        Instant instant = Instant.now();
        long timeStampMillis = instant.toEpochMilli() / 100000000;
        return "screenshot" + timeStampMillis;
    }

    public void takeScreenShotMethod(){
          try{
            Thread.sleep(5000);
            BufferedImage image = new Robot().createScreenCapture(new Rectangle(Toolkit.getDefaultToolkit().getScreenSize()));
            ImageIO.write(image, "jpg", new File("c:/Users/aVe/Desktop/"+ getRandomName()));
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
}
