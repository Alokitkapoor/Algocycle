const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('toggleSidebar');
    const closeBtn = document.getElementById('closeSidebar');

    openBtn.addEventListener('click', () => {
      sidebar.style.transform = 'translateX(0)';
    });

    closeBtn.addEventListener('click', () => {
      sidebar.style.transform = 'translateX(-100%)';
    });