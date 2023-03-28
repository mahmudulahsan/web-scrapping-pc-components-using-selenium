
const express = require('express');
const router = express.Router();
const webdriver = require('selenium-webdriver');
const By = webdriver.By;

router.get('/', async (req, res) => {
  try {
    require('chromedriver');
    let driver = new webdriver.Builder().forBrowser('chrome').build();
    driver.get('https://www.techlandbd.com/pc-components/processor')
    .then(function(){
      driver.findElements(By.className('product-layout'))
      .then(function(cells){
        let products = [];
        for(let cell of cells){
          cell.findElement(By.className('name'))
          .then(function(nameElem){
            return nameElem.getText();
          })
          .then(function(name){
            cell.findElement(By.className('description'))
            .then(function(descElem){
              return descElem.getText();
            })
            .then(function(description){
              cell.findElement(By.className('price'))
              .then(function(priceElem){
                return priceElem.getText();
              })
              .then(function(price){
                cell.findElement(By.className('img-first'))
                .then(function(imgElem){
                  return imgElem.getAttribute('src');
                })
                .then(function(imgSrc){
                  products.push({ name, description, price, imgSrc });
                });
              });
            });
          });
        }
        setTimeout(function(){
          driver.quit();
          res.status(200).json(products);
        }, 5000);
      })
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;