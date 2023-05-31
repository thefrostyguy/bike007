const loginEmail=document.querySelector(".authEmailLogin")
const loginPassword=document.querySelector(".authPasswordLogin")
const signUpEmail=document.querySelector(".authEmailSignup")
const signUpPassword=document.querySelector(".authPasswordSignup")
const signUpFirstName=document.querySelector(".authFirstNameSignup")
const signUpLastName=document.querySelector(".authLastNameSignup")
const loginButton=document.querySelector(".btnLogin")
const signUpButton=document.querySelector(".btnSignup")


const login=async (data)=>{
    const response = await fetch("http://localhost:5000/auth/signin", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json();
}

const signup=async (data)=>{
    const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      });
      return response.json();
}

const handleClickLogin=async (e)=>{
    var obj={
        "email":loginEmail.value,
        "password":loginPassword.value
    }
    const data=await login(obj);
    localStorage.setItem("user",data.token)
    }


const handleClickSignUp=async (e)=>{
   
    var obj={
        "email":signUpEmail.value,
        "password":signUpPassword.value,
        "firstName":signUpFirstName.value,
        "lastName":signUpLastName.value
    }
    const data=await signup(obj);
    localStorage.setItem("user",data.token)
}

signUpButton?.addEventListener("click",handleClickSignUp)
loginButton?.addEventListener("click",handleClickLogin)
