let logbtn = document.getElementById("logbtn");
logbtn.addEventListener("click",function(){
          document.querySelector(".loginpage").style.display = "block"
})


let logedin = document.getElementById("logedin");
logedin.addEventListener("click",function(){

          let email = document.getElementById('name')
          let pass = document.getElementById('pass')

          if (email.value == '') {
                    alert("enter your email")

          }
          else if(pass.value == ''){
                    alert("enter your pass")
          }
          else{
                    alert("you loged in succesfully")
                    document.querySelector(".loginpage").style.display = "none"
          }
})


let tracknow = document.getElementById("tracknow");
tracknow.addEventListener('click',function(){
    document.querySelector('.tracking').style.display = "flex";
    document.querySelector('#food').style.display = "none";
    document.querySelector('#dishes').style.display = "none";
    document.querySelector('#home').style.display = "none";
})

let homes = document.getElementById('homes')
let foods = document.getElementById('foods')
let dishs = document.getElementById('dishs')
let tracko = document.getElementById('tracko')
homes.addEventListener('click',function(){
          homes.style.color = "red"
          foods.style.color = "white"
          dishs.style.color = "white"
          tracko.style.color = "white"
})

foods.addEventListener('click',function(){
          foods.style.color = "red"
          homes.style.color = "white"
          dishs.style.color = "white"
          tracko.style.color = "white"
})

dishs.addEventListener('click',function(){
          dishs.style.color = "red"
          homes.style.color = "white"
          foods.style.color = "white"
          tracko.style.color = "white"
})

tracko.addEventListener('click',function(){
          tracko.style.color = "red"
          homes.style.color = "white"
          foods.style.color = "white"
          dishs.style.color = "white"
          
})