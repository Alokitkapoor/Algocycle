// ---------- LOGOUT ----------
document.addEventListener("DOMContentLoaded", function() {
    const logoutBtn = document.getElementById('logoutBtn');

    if(logoutBtn) {
        logoutBtn.addEventListener('click', function(e){
            e.preventDefault();
            localStorage.removeItem('user');      // clear stored user
            localStorage.removeItem('username');  // clear stored username
            window.location.href = "../html/landing.html"; // redirect to login
        });
    }
});