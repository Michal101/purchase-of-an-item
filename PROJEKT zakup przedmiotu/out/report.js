$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PurchaseDeliveryPhoto.feature");
formatter.feature({
  "line": 1,
  "name": "Purchase, Delivery method and photo",
  "description": "",
  "id": "purchase,-delivery-method-and-photo",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Purchase, Delivery and photo",
  "description": "",
  "id": "purchase,-delivery-method-and-photo;purchase,-delivery-and-photo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is logged in to shop",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User search Hummingbird Printed Sweater",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User ordered a sweater in number \u003cquantity\u003e and size \u003csize\u003e",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#    size must be S,M,L,XL"
    }
  ],
  "line": 9,
  "name": "User chooses the delivery method",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User chooses the payment method",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Your order is confirmed - ScreenShot",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User check history of orders",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User close browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "purchase,-delivery-method-and-photo;purchase,-delivery-and-photo;",
  "rows": [
    {
      "cells": [
        "quantity",
        "size"
      ],
      "line": 16,
      "id": "purchase,-delivery-method-and-photo;purchase,-delivery-and-photo;;1"
    },
    {
      "cells": [
        "2",
        "m"
      ],
      "line": 17,
      "id": "purchase,-delivery-method-and-photo;purchase,-delivery-and-photo;;2"
    },
    {
      "cells": [
        "5",
        "l"
      ],
      "line": 18,
      "id": "purchase,-delivery-method-and-photo;purchase,-delivery-and-photo;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Purchase, Delivery and photo",
  "description": "",
  "id": "purchase,-delivery-method-and-photo;purchase,-delivery-and-photo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is logged in to shop",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User search Hummingbird Printed Sweater",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User ordered a sweater in number 2 and size m",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#    size must be S,M,L,XL"
    }
  ],
  "line": 9,
  "name": "User chooses the delivery method",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User chooses the payment method",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Your order is confirmed - ScreenShot",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User check history of orders",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderingItem.userIsLooggedInToShop()"
});
formatter.result({
  "duration": 3962257200,
  "status": "passed"
});
formatter.match({
  "location": "OrderingItem.userFindsItem()"
});
formatter.result({
  "duration": 4337049800,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d90.0.4430.85)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BM9KA4T\u0027, ip: \u0027192.168.1.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.85, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\aVe\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:50702}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: dc4903caac5c97892f8fba11f4177d3d\n*** Element info: {Using\u003dxpath, value\u003d//*[@data-id-product\u003d\u00272\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat pageObjectPattern.pages.SearchCatalogPage.clickItem(SearchCatalogPage.java:39)\r\n\tat pageObjectPattern.steps.OrderingItem.userFindsItem(OrderingItem.java:52)\r\n\tat ✽.And User search Hummingbird Printed Sweater(PurchaseDeliveryPhoto.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 33
    },
    {
      "val": "m",
      "offset": 44
    }
  ],
  "location": "OrderingItem.orderedSweater(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderingItem.choosesDeliveryMethod()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderingItem.choosesPaymentMethod()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderingItem.confirmedScreenShot()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderingItem.checkHistoryOrders()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderingItem.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "Purchase, Delivery and photo",
  "description": "",
  "id": "purchase,-delivery-method-and-photo;purchase,-delivery-and-photo;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is logged in to shop",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User search Hummingbird Printed Sweater",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User ordered a sweater in number 5 and size l",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "#    size must be S,M,L,XL"
    }
  ],
  "line": 9,
  "name": "User chooses the delivery method",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User chooses the payment method",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Your order is confirmed - ScreenShot",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User check history of orders",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "OrderingItem.userIsLooggedInToShop()"
});
formatter.result({
  "duration": 1922836800,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d90.0.4430.85)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BM9KA4T\u0027, ip: \u0027192.168.1.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.85, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: C:\\Users\\aVe\\AppData\\Local\\...}, goog:chromeOptions: {debuggerAddress: localhost:50729}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 29ab0bff402c27598cff17136470ca5a\n*** Element info: {Using\u003dname, value\u003demail}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat pageObjectPattern.pages.LoginPage.loginAs(LoginPage.java:14)\r\n\tat pageObjectPattern.steps.OrderingItem.userIsLooggedInToShop(OrderingItem.java:45)\r\n\tat ✽.Given User is logged in to shop(PurchaseDeliveryPhoto.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "OrderingItem.userFindsItem()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 33
    },
    {
      "val": "l",
      "offset": 44
    }
  ],
  "location": "OrderingItem.orderedSweater(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderingItem.choosesDeliveryMethod()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderingItem.choosesPaymentMethod()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderingItem.confirmedScreenShot()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderingItem.checkHistoryOrders()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderingItem.closeBrowser()"
});
formatter.result({
  "status": "skipped"
});
});