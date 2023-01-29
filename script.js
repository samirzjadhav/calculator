(function () {
  const buttons = document.querySelectorAll(".btn");
  const screen = document.querySelector(".screen");
  const clear = document.querySelector(".btn-clear");
  const equal = document.querySelector(".btn-equal");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      if (value) screen.value += value;
    });
  });

  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "Please enter";
    } else {
      console.log(screen.value);
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });

  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();
