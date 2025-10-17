// This is sign-in local storage logic 

const s_form = document.querySelector("#overlay .signin-form");
 
if(s_form){
    s_form.addEventListener("submit", function(e) {
        e.preventDefault();

        const mail = s_form.querySelector("#eml").value;
        const namm = s_form.querySelector("#unm").value;
        const paww = s_form.querySelector("#pwd").value;


        if(!mail || !namm || !paww){
            alert("Please enter all details");
            return;
        }

        // store in an object
        const user = {
            email: mail,
            username: namm,
            password: paww
        }

        // save it in local storage
        localStorage.setItem("user", JSON.stringify(user));
        alert("Registered Successfully");

        s_form.reset();
        document.getElementById("overlay").classList.remove("active");

        // redirect to the main page 
        window.location.href = "../html/main.html";

    });
}


const l_form = document.querySelector("#oy .signin-form");

if(l_form){
    l_form.addEventListener("submit" , function(e){
        e.preventDefault();

        const unm = l_form.querySelector('input[type="text"]').value;
        const pwd = l_form.querySelector('input[type="password"]').value;


        if(!unm || !pwd){
            alert("please enter all required details!");
            return;
        }

        // retrive the stored user
        const avail = JSON.parse(localStorage.getItem("user"));

        // now avail is an object that is parse from the string
        // and now it is stored in the avail object

        if(!avail){
            alert("User does'nt exist");
            return;
        }

        if(unm === avail.username && pwd === avail.password){
            alert(`Welcome back ${avail.username}`);
            l_form.reset();
            document.getElementById("oy").classList.remove("active");

            window.location.href = "../html/main.html";
        }

        else{
            alert("Invalid details entered");
        }
    });
}