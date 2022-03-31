var{Given,When,Then,BeforeAll, AfterAll, Before, After} = require ('@cucumber/cucumber');

// BeforeAll("@dev",function(){

//   console.log("Inside BeforeAll")

// })

// AfterAll(function(){

//   console.log("AfterAll")

// })

Given (/^The user navigates to LinkedIn$/, function(){

    return console.log('@Given -- The user navigates to LinkedIn');
})

When (/^The user validates the homepage title$/, function(){

     return console.log ('@When -- The user validates the homepage title');
})

Then('The user enter {string} username', function (username) {

     return console.log('@Then -- The user enter '+ username +' username');

   });

Then('The user enter {string} password', function (password) {
     
     return console.log('@Then -- The user enter ' + password + ' password');
   });

Then('The user should {string} succesufully logged in', function (loginStatus) {
     
     return console.log('@Then--The user should '+ loginStatus + ' succesufully logged in');

   });

 