console.log("hello");

let mybutton = document.querySelector("#mybutton");

mybutton.addEventListener("click",myClick);

function myClick(){
    let myname = prompt("what is your name?");
    alert(`Hello ${myname}!`)
    const weather = prompt(`How is the weather today?`);

    let imagebox = document.querySelector(".weatherImage");


// run condition to check what i wrote in the "weather" prompt


if (weather. toLowerCase() === "sunny") {
    imagebox.src = "/sunshine.gif";
} else if( weather.toLowerCase() === "rainy" ) {
    imagebox.src = "/rainy.gif";
} else if( weather.toLowerCase() === "cloudy" ) {
    imagebox.src = "/cloudy.gif"; 
} else if( weather.toLowerCase() === "thunder" ) {
    imagebox.src = "/thunder.gif";
} else {
    alert(`Sorry we do not have this kind of weather`)
}





}




//if(condition) {
    //run something()
//} else if (){
    //run another thing()
//} else {
    //nothing()
//}
 