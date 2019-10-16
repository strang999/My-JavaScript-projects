const usd = document.querySelector("#usd"),
  rub = document.querySelector("#rub"),
  usdCur = document.querySelectorAll(".title__sub span"),
  currentRub = 69,
  currentUah = 26.4,
  uah = document.querySelector("#uah");

usdCur[0].textContent = currentRub;
usdCur[2].textContent = (1 / currentUah).toFixed(3);
usdCur[1].textContent = (1 / currentRub).toFixed(3);
rub.value = usd.value * currentRub;
uah.value = usd.value * currentUah;
usd.addEventListener("input", function() {
  if (isNaN(this.value)) {
    rub.value = "Error!";
    uah.value = "Error!";
  } else {
    rub.value = usd.value * currentRub;
    uah.value = usd.value * currentUah;
  }
});
