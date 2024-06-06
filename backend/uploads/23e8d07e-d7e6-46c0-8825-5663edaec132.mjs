


export default async function (context, commands) {

  
  

    try    {
      // We start by navigating to the login page.
      await commands.measure.start('01-HomePage');
      await commands.navigate('https://www.jumia.com.tn/');
     await commands.measure.stop();
     
     await commands.measure.start('02-RemovePopup');
     await commands.click.byXpathAndWait('//*[@id="pop"]/div/section/button');
     await commands.measure.stop();
     
     await commands.measure.start('03-ClickOnSearchInput');
     await commands.click.byXpathAndWait('//form[@id="search"]/div/input');
     await commands.measure.stop();
     
     await commands.measure.start('04-TypeSearchKeyword');
     await commands.addText.byXpath('Mixeur','//form[@id="search"]/div/input');
     await commands.measure.stop();
     
     
     await commands.measure.start('05-ClickSearchButton');
     await commands.click.byXpathAndWait('//form[@id="search"]/button');
      await commands.measure.stop();
     
     await commands.measure.start('06-ClickOnProduct');
      await commands.click.byXpathAndWait('//div[@id="jm"]/main/div[2]/div[3]/section/div/article/a[2]/div[2]/h3');
     await commands.measure.stop();
     
      await commands.measure.start('07-AddToCart');
     await commands.click.byXpathAndWait('//form[@id="add-to-cart"]/button/span');
     await commands.measure.stop();
     
      await commands.measure.start('08-CheckCart');
      await commands.click.byXpathAndWait('//div[@id="jm"]/header/section/div[2]/a');
     await commands.measure.stop();
     
     
      //   await command.measure.start('clickOnProduct');
      //   await command.click.byXpathAndWait('//a[contains(text(),"PRODUCT DETAILS")]');
      //   await command.measure.stop();
     
      //   // Find the search button and click it and then wait
      //   // for the pageCompleteCheck to finish
      //   await command.measure.start('OrderButton');
      //   await command.click.byXpathAndWait('//div[@id="block-salt-details-base-content"]/article/div/div[2]/div/div[2]/div/div[2]/div/div/div[2]/div/div/a/span')
      //   await command.measure.stop();
     
   
   
         } catch (e) {
         
      throw e;
      };
      
    }




  
    
  

    
  