window.addEventListener("DOMContentLoaded", function() {
  "use strict";
  let tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }

  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  }

  info.addEventListener("click", function(event) {
    let target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });

  // Timer
  let deadline = "2019-07-14";

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor(t / (1000 * 60 * 60));

    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  function setClock(id, endtime) {
    let timer = document.getElementById(id),
      hours = timer.querySelector(".hours"),
      minutes = timer.querySelector(".minutes"),
      seconds = timer.querySelector(".seconds"),
      timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);

      function addZero(num) {
        if (num < 10) {
          return "0" + num;
        } else return num;
      }
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
      }
    }
  }

  setClock("timer", deadline);

  // Modal

  let more = document.querySelector(".more"),
    overlay = document.querySelector(".overlay"),
    close = document.querySelector(".popup-close"),
    descriptionBtn = document.querySelector(".description-btn");

  descriptionBtn.addEventListener("click", function() {
    let target = event.target;

    if (target == descriptionBtn) {
      overlay.style.display = "block";
      this.classList.add("more-splash");
      document.body.style.overflow = "hidden";
    }
  });

  more.addEventListener("click", function() {
    overlay.style.display = "block";
    this.classList.add("more-splash");
    document.body.style.overflow = "hidden"; // запрещаем прокрутку пока открыто окно
  });
  close.addEventListener("click", function() {
    overlay.style.display = "none";
    more.classList.remove("more-splash");
    document.body.style.overflow = ""; // запрещаем прокрутку пока открыто окно
  });



  // Form

// let message = {
//   loading: 'Загрузка...',
//   succes: "Спасибо! Скоро мы с вами свяжемся!",
//   failure: "Что-то пошло не так..."
//     };
let form = document.querySelector('.main-form'),
contactForm = document.getElementById('form'),
    input = document.getElementsByTagName('input'),
    statusMessage = document.createElement('div');
    

    statusMessage.classList.add('status');

    function sendForm(elem){
 
      elem.addEventListener('submit', function (event) {
          event.preventDefault();
          elem.appendChild(statusMessage);
      

          let formData = new FormData(elem);
          let obj = {};
          formData.forEach(function(value, key) {
              obj[key] = value;
          });
          let json = JSON.stringify(obj);

         
         function postData(json) {  
          
         
          return new Promise (function(resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      
            request.addEventListener('readystatechange', function() {
              if (request.readyState === 4){
                if (request.status == 200) {
                resolve();
              console.log("success");
              }
                else {
                  reject();
                  console.log("error");
                }
              }
                });
                request.send(json);
            });
          
          }
          function clearInput() {
            for (let i = 0; i < input.length; i++) {
            input[i].value = '';
       
            }
          }
        
    
        postData (json)
        .then (() => statusMessage.innerHTML = "Спасибо! Скоро мы с вами свяжемся!")

        .catch (() => statusMessage.innerHTML = "Что-то пошло не так...")
        .then (clearInput);
        
      });

    }
    sendForm(form);
sendForm(contactForm);
  
  });
  // form.addEventListener('submit', function(event) {
  //   event.preventDefault();
  //   form.appendChild(statusMessage);

  //   return new Promise (function(resolve, reject) {
  //     let request = new XMLHttpRequest();
  //     request.open('POST', 'server.php');
  //     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

  //     request.addEventListener('readystatechange', function() {
  //       if (request.readyState < 4) {
  //         statusMessage.innerHTML = message.loading;
          
  //       } else if (request.status !== 200){
  //         reject({
  //         statusMessage.innerHTML = message.failure;
  //         });
  //         return;
  //     }
  //     resolve(request.response)
  //     let formData = new FormData(form);
  
  //     let obj = {};
  //     formData.forEach(function(value, key) {
  //       obj[key] = value;
  //     })
    
    
  //   let json = JSON.stringify(obj);

  //   request.send(json);

  //   request.addEventListener('readystatechange', function() {
  //     if (request.readyState < 4) {
  //       statusMessage.innerHTML = message.loading;
  //     } else if (request.readyState === 4 && request.status == 200) {
  //       statusMessage.innerHTML = message.succes;
  //     } else {
  //       statusMessage.innerHTML = message.failure;
  //     }

  //   });

  //   for (let i = 0; i < input.length; i++) {
  //     input[i].value = '';
      
  //   }
  // });

  // // let message = {
  // //   loading: 'Загрузка...',
  // //   succes: "Спасибо! Скоро мы с вами свяжемся!",
  // //   failure: "Что-то пошло не так..."
  // //     };
  // let contactForm = document.querySelector('#form'),
  //     contactInput = contactForm.getElementsByTagName('input');
  //     // statusMessage = document.createElement('div');
      
  //     // statusMessage.classList.add('status');
  
  
  //     contactForm.addEventListener('submit', function(event) {
  //     event.preventDefault();
  //     contactForm.appendChild(statusMessage);
  
  //     let request = new XMLHttpRequest();
  //     request.open('POST', 'server.php');
  //     request.setRequestHeader('Content-type', 'application/x-www-form-urlecoded');
      
  //     let formData = new FormData(contactForm);
    
  //     formData.append('email', contactInput[0].value);
      
  //     formData.append('phone', contactInput[1].value);
      
  //     // request.send(formData);

  //     // console.log(formData);

  //     let obj = {};
  //         formData.forEach(function(value, key) {
  //           obj[key] = value;
  //         });
  //         let json = JSON.stringify(obj);

  //             request.send(json);
  //             console.log(formData);


  //     request.addEventListener('readystatechange', function() {
  //     if (request.readyState < 4) {
  //       statusMessage.innerHTML = message.loading;
  //     } else if (request.readyState === 4 && request.status == 200) {
  //       statusMessage.innerHTML = message.succes;
  //     } else {
  //       statusMessage.innerHTML = message.failure;
  //     }

  //   });

  //   for (let i = 0; i < contactInput.length; i++) {
  //     contactInput[i].value = '';

  //     }
  //   });




// });