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
            overlay.classList.add('active');
          });
        }
      });

      closeOverlay.addEventListener('click', () => {
        overlay.classList.remove('active');
      });

      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('active');
      });