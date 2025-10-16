// so that not both the overlays are 
// shown simultaneously

let flag = false; 

const overlay = document.getElementById('overlay');
const closeOverlay = document.getElementById('closeOverlay');
// Select all Sign In buttons
const signInButtons = [
  document.getElementById('signInHero'),
  document.getElementById('signInNav'),
  document.getElementById('signInMobile')
];
signInButtons.forEach(btn => {
  if (btn) {
    btn.addEventListener('click', (e) => {
        e.preventDefault(); 
        //  stops default browser behaviour for that event 
        // check the flag after the click has happended
        if(!flag){
            flag = true;
            overlay.classList.add('active');
        }
    });
  }
});
closeOverlay.addEventListener('click', () => {
  overlay.classList.remove('active');
  flag = false;
});


// doing the same for login buttons ---------- >>
// Select all Sign In buttons

const oy = document.getElementById('oy');
const coy = document.getElementById('coy');

const loginbuttons = [
  document.getElementById('lh'),
  document.getElementById('ln'),
  document.getElementById('lm')
];

loginbuttons.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); 
            if(!flag){
                flag = true;
                oy.classList.add('active');
            }
        });
    }
});

coy.addEventListener('click', () => {
  oy.classList.remove('active');
  flag = false;
});
