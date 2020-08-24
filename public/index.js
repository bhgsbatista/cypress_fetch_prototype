fetch('/test')
  .then(response => response.json())
  .then(data => document.getElementById("result").innerHTML = String(Object.getPrototypeOf(data) === Object.prototype));