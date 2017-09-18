async function kolotibabjo(panda){
const puppeteer = require('puppeteer');
    var browser = await puppeteer.launch({headless:true});
  try{
  const page = await browser.newPage();
  await page.goto('https://c9.io/login');
await page.waitFor(5000)
  // await page.click("#id-username")
  await page.click("#id-username")
  await page.waitFor(5000)
  await console.log("username")
  await page.type("slafe1@yandex.com")
  await page.waitFor(5000)
  await page.click("#id-password")
await console.log("password")
  await page.waitFor(5000)
  await page.type("plokotoklucu")
  await page.waitFor(5000)
await page.click("#wrapper-main > article > section > div > section > form > fieldset > div.wrap > button")
await console.log("sign in")
await page.waitFor(10000)
await page.goto('https://ide.c9.io/kolotibablo/'+panda);
await console.log("masuk "+panda)
  await page.waitFor(1800000)
  await page.goto('https://c9.io/kolotibablo');
  await page.waitFor(5000)
  await page.click("#header > nav > button")
await console.log("keluar")
  
  await browser.close()
kolotibablo("puppeteer")
  }catch(err){
  await browser.close()
    console.log("error")
kolotibablo("puppeteer")
  }
}
async function kolotibablo(panda){
const puppeteer = require('puppeteer');
    var browser = await puppeteer.launch({headless:true});
  try{
  const page = await browser.newPage();
  await page.goto('https://c9.io/login');
await page.waitFor(5000)
  // await page.click("#id-username")
  await page.click("#id-username")
  await page.waitFor(5000)
  await console.log("username")
  await page.type("slafe1@yandex.com")
  await page.waitFor(5000)
  await page.click("#id-password")
await console.log("password")
  await page.waitFor(5000)
  await page.type("plokotoklucu")
  await page.waitFor(5000)
await page.click("#wrapper-main > article > section > div > section > form > fieldset > div.wrap > button")
await console.log("sign in")
await page.waitFor(10000)
await page.goto('https://ide.c9.io/kolotibablo/'+panda);
await console.log("masuk "+panda)
  await page.waitFor(1800000)
  await page.goto('https://c9.io/kolotibablo');
  await page.waitFor(5000)
  await page.click("#header > nav > button")
await console.log("keluar")
  
  await browser.close()
kolotibabjo("jonoko")
  }catch(err){
  await browser.close()
    console.log("error")
kolotibabjo("jonoko")
  }
}
kolotibabjo("jonoko")










