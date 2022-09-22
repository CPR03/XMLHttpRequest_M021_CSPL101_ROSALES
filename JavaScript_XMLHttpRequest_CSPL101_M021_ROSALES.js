const jokes = document.querySelector(".jokes");
const request = new XMLHttpRequest();
request.open("GET","https://official-joke-api.appspot.com/random_joke");
request.send();

request.addEventListener("load",function(){
    const data = JSON.parse(request.responseText);
    console.log(data);
    let html = `<h1> Setup: ${data.setup} </h1>
    <h2> Punchline: ${data.punchline} </h2>`

    jokes.insertAdjacentHTML("beforeend",html);
})