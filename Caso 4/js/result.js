$(document).ready(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const dgt1 = parseInt(urlParams.get("dgt1"));
  const dgt2 = parseInt(urlParams.get("dgt2"));
  const sum = dgt1 + dgt2;
  $("p#result").text(sum);
});
