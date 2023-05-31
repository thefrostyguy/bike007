const email=document.querySelector(".contactusemail");
const name=document.querySelector(".contactusname")
const phonenumber=document.querySelector(".contactusphonenumber")
const query=document.querySelector(".contactusquery")
const send=document.querySelector(".send")

const handleQueryPost=async (data)=>{
    const response = await fetch("http://localhost:5000/contactUs/askQuery", {
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

const handleQuery=async ()=>{
    console.log((email.value));

    var obj={
        "email":email.value,
        "name":name.value,
        "phoneNumber":phonenumber.value,
        "query":query.value
    }

    const res=await handleQueryPost(obj);
    console.log(res);

}

send.addEventListener("click",handleQuery)