const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
document.getElementById("close-button").onclick = function(){
    document.querySelector('.quote-box').classList.add("remove-div");

    document.querySelector('.dev').classList.add("dev-center");
    document.querySelector('.dev').classList.remove("dev");
    // document.querySelector('.refresh').classList.remove("refresh");
    document.querySelector('.refresh').classList.add("refresh-show");
}
async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    // console.log(data);
   
    quote.innerHTML = data.content;
    author.innerHTML = data.author;

}
document.getElementById("generate-quote").onclick = function(){
    
getquote(api_url);


}
getquote(api_url);