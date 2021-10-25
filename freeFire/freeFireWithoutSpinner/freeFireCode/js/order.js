var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("skin");
console.log(c);
if(c !== null){
    let theSrc = './images/' + c.split('_')[1] + '.jpeg';
    document.getElementById('theImg').src = theSrc;
}

$('#thesubmitform').submit(function(e){
    e.preventDefault();
    window.location = './waiting.html'
})