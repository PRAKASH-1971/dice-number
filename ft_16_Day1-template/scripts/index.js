//Store the generated number in LocalStorage with key "number".
function random(min, max) {
    var num = Math.floor(Math.random() * (max - min)) + min;
    console.log(num)
    localStorage.setItem("number",JSON.stringify(num));
    window.location.href = '/display.html'
  }
