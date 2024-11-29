function Adduser(){
    let userName=document.getElementById("userName").value;
    let userPassword=document.getElementById("userPass").value;

    if(userName && userPassword){
        let userData=JSON.parse(localStorage.getItem("users"))||[];
        console.log(userData);
        
        userData.push({userName,userPassword});
        localStorage.setItem("users",JSON.stringify(userData))
    }
    userName.value="";
    userPassword.value="";
}
function login(){
    let userNameLogin=document.getElementById("userNameN").value;
    let userPasswordLogin=document.getElementById("userPassP").value;
    let data=JSON.parse(localStorage.getItem("users"))||[];
    let matched=data.find(x=>x.userName===userNameLogin && x.userPassword===userPasswordLogin);
    console.log(matched);
    if(matched){
        alert(`sucessfully loggedin... by ${matched.userName}`)
        window.location.href="a.html"
    }else{
        alert("not matched")
    }
    
}