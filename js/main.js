
var button = document.querySelector('.switch');
var body = document.querySelector('.light')
var text = document.querySelector('.status')

button.addEventListener('click', function () {

      if (button.className == "switch on") {
        button.className = "switch off"
        body.className = "dark"
        text.innerText="Hey, who turned off the lights?"      } else {
        button.className = "switch on"
        body.className = "light"
        text.innerText="It's so bright in here!"   
      }

  });
