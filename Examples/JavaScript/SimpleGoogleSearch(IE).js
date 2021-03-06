
/*
 * JavaScript example using the Windows scripting engine
 */

var Waiter = new ActiveXObject("Selenium.Waiter");
var Assert = new ActiveXObject("Selenium.Assert");
var driver = new ActiveXObject("Selenium.IEDriver");

//open the browser and the page
driver.get("https://www.google.co.uk");

//type into the search input box
var ele = driver.findElementById("lst-ib");
ele.sendKeys("Eiffel tower" + driver.Keys.Return);

//waits for the title
Waiter.Until(function(){return /^Eiffel tower/.test(driver.Title);});

//waits for the user to click OK
WScript.Echo("Click OK to quit the browser");
