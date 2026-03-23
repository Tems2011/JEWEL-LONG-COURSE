let form= document.querySelector(".container");
form.addEventListener("submit", function(e) { e.preventDefault();
    let p = 
    document.querySelector("#display");
    p.textContent = "You have successfully submitted the form";
    p.className = "alert alert-success"
    
});

