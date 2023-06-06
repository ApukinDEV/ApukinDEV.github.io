function reset(id){
    x=document.getElementById(id)
    x.classList.remove("second")
    x.classList.remove("third")
    x.classList.remove("fourth")
}
function secondsetting(id){
    x=document.getElementById(id)
    x.classList.remove("second")
    x.classList.remove("third")
    x.classList.remove("fourth")
    x.classList.add("second")
}
function thirdsetting(id){
    x=document.getElementById(id)
    x.classList.remove("second")
    x.classList.remove("third")
    x.classList.remove("fourth")
    x.classList.add("third")
}
function fourthsetting(id){
    x=document.getElementById(id)
    x.classList.remove("second")
    x.classList.remove("third")
    x.classList.remove("fourth")
    x.classList.add("fourth")
}
function scrollto(x){
  console.log(x)
  document.getElementById(x).scrollIntoView({behavior:"smooth"});
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let mybutton = document.getElementById("scroll");
    console.log("Hello world!")
    console.log("koniki!")
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.classList.add("shown");
    } else {
      mybutton.classList.remove("shown")
    }
  }