var Horseman = require('node-horseman');
var horseman = new Horseman();

horseman
  .userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0')
  .open('https://c9.io/login')
  .wait(10000)
  .type("#id-username","slafe1@yandex.com")
  .wait(5000)
  .type("#id-password","plokotoklucu")
  .wait(5000)
  .click("#wrapper-main > article > section > div > section > form > fieldset > div.wrap > button")
  .wait(10000)
  .open("https://ide.c9.io/kolotibablo/puppeteer")
  