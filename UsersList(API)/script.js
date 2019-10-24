const users = document.querySelector("#users");
const nameSort = document.querySelector("#namesort");
const ageSort = document.querySelector("#agesort");
const clearSort = document.querySelector("#clearsort");
let usersData = [];

function createHTML(item) {
  const name = ` ${item.name.first} ${item.name.last}`;
  const age = item.dob.age;
  const date = item.dob.date.substring(0, 10);
  const picture = item.picture.large;
  return `<div>
    <img class="rounded" src='${picture}' alt="${name}"></img> </div>
   <div> <h3>${name}</h3>
    <h5>Birth: ${date}</h5>
    <h5>Age: ${age}</h5>
 
    </div>`;
}

function clearUsers() {
  users.innerHTML = "";
}

function fillUsers(header, data) {
  let inner = `<h3 class=" text-center text-success">${header}</h3>`;
  data.forEach(function (item) {
    inner += createHTML(item);
  });
  users.innerHTML = inner;
}
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://randomuser.me/api/?results=20")

    .then(function (data) {
      return data.json();
    })

    .then(function (data) {

      let header = "Recent Users";
      usersData = data.results;
      console.log(usersData);
      fillUsers(header, usersData);
    })

    .catch(function (reason) {
      users.innerHTML = "Something goes wrong...";
      console.error("error: " + reason.status);
    });
 

ageSort.addEventListener("click", () => {
  clearUsers();
  const userDataCopy = JSON.parse(JSON.stringify(usersData));
  const sortedData = userDataCopy.sort((a, b) => a.dob.age - b.dob.age);
  let header = "Sorted by age";
  fillUsers(header, sortedData);
});

nameSort.addEventListener("click", () => {
  clearUsers();
  const userDataCopy = JSON.parse(JSON.stringify(usersData));
  const sortedData = userDataCopy.sort((a, b) =>
    a.name.first > b.name.first ? 1 : a.name.first === b.name.first ?
    a.name.last > b.name.last ? 1 : -1 : -1
  );
  let header = "Sorted by name";
  fillUsers(header, sortedData);
});

clearSort.addEventListener("click", () => {
  clearUsers();

  let header = "Recent users";
  fillUsers(header, usersData);
});

});