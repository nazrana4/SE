document.getElementById("form-admin").addEventListener('click',()=>{
    document.getElementById("main-admin-login").classList.toggle("appear");
    document.getElementById("main-user-login").classList.remove("appear");
})

document.getElementById("form-user").addEventListener('click',()=>{
    document.getElementById("main-user-login").classList.toggle("appear");
    document.getElementById("form-heading").innerHTML = "User Login";
    document.getElementById("main-admin-login").classList.remove("appear");

    
})

document.getElementById("form-agent").addEventListener('click',()=>{
    document.getElementById("main-user-login").classList.toggle("appear");
    document.getElementById("form-heading").innerHTML = "Agent Login";
    document.getElementById("main-admin-login").classList.remove("appear");

    
})

document.getElementById("main-register-form").addEventListener('click',()=>{
    document.getElementById("register-load").classList.toggle("appear");
    document.getElementById("form-heading").innerHTML = "Agent Login";
    document.getElementById("main-admin-login").classList.remove("appear");

    
})

