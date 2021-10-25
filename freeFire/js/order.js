var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("item");
console.log(c);
document.getElementById('theImg').src = c + '.jpeg';