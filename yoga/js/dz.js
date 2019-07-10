// let age = document.getElementById('age');
 
// function showUser(surname, name) {
//          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
// }
 
// showUser.apply(age, ["familiya","imya"]);





// class Options {
//     constructor(height, width, bg, fontSize, textAlign) {
//       this.height = height;
//       this.width = width;
//       this.bg = bg;
//       this.fontSize = fontSize;
//       this.textAlign = textAlign;
//     }
//     createDiv() {
//      let newDiv = document.createElement("div");
//      document.body.appendChild(newDiv);
//     let parameters = `height:${this.height}px; width: ${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align: ${this.textAlign}`;
//      newDiv.style.cssText = parameters;
//      newDiv.innerHTML = "diditdiv";
//     }
//   }
  
//   const item = new Options(150, 150, "red", 12, "center");
//   console.log(item);
// item.createDiv(150, 150, "red", 12, "center");
// const newItem = new Options();
// console.log(Options);


// class Calculator {
//       constructor(a, b) {
//         this.a = a;
//         this.b = b;
//       }
//       read() {
//         this.a = prompt("Введите число A:", "");
//         this.b = prompt("Введите число B:", "");
//       }
//       sum() {
//         return (+this.a)+ (+this.b);
//       }
//       mul() {
//         return this.a *this.b;
//       }
//     }
//       const item = new Calculator();

// item.read();

// alert("Сумма=" + item.sum());
// alert("Multi=" + item.mul());


// JSON

// let options = {
//   width: 1366,
//   height: 768,
//   background: 'red',
//   font: {
//     size: '16px',
//     color: '#fff'
//   }
// };

// console.log(JSON.parse(JSON.stringify(options)));

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

    inputRub.addEventListener('input', () => {
      let request = new XMLHttpRequest();
      // request.open(method, url, async, login, pass);
      request.open('GET', './current.json');
      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      request.send();



      request.addEventListener('readystatechange', function() {
          if (request.readyState === 4 && request.status === 200) {
              let data = JSON.parse(request.response);

              inputUsd.value = inputRub.value / data.usd;
          } else{
inputUsd.value = "Something goes wrong!";
          }
          })
      });
  

    //   Promises

    let promise = new Promise(function(resolve, reject){


    });
    return promise;

    shoot({})
    .then()
    .then()
    .catch()