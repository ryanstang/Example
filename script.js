let tries = 0 

function validUser(signup){
  console.log("You are locked out")
  if (tries == 6){
    console.log("You are locked out")
    setTimeout(function(){
}, 5000);
    return false
  }
  
  let logins={
  "Jasamarbir Arora" : "hi",
  "Joe" : "bye"
  }
  let name=Array.from(document.getElementsByName("FullName"))
  let password=Array.from(document.getElementsByName("password"))


  name=name[0].value
  localStorage.setItem("username", name)
  password=password[0].value
  localStorage.setItem("password", password)
/*
  if(validUserName.includes(name) && password==validpassword){
    console.log("Vaild log in")
    window.location.href="MainPage.html"
  }
  else{
    console.log("Invaild")
  }

*/


if(!(name in logins)){
  console.log("login name does not exsist")

  tries = tries + 1
  return false
}
if(logins[name]==password){
  console.log("ok")
  //window.open('mailto:jasaro791@gmail.com');
  location.href="MainPage.html"

}
else{
  tries = tries + 1
  console.log("Unsucsessful")
  cosole.log("Don't have a account no problem creat one")
}
  return false
}

function displayUser(){
  document.getElementById('header').innerHTML = "You are in Main Page " + localStorage.getItem("username")
}

function gotoEmail(){
  let name=Array.from(document.getElementsByName("FullName"))
  name=name[0].value
  localStorage.setItem("username", name)
  let password=Array.from(document.getElementsByName("password"))
  password=password[0].value
  localStorage.setItem("password", password)
  window.open('mailto:jasaro791@gmail.com')
  
}