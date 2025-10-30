const menuBtnList = document.querySelectorAll('.menu-btn');
menuBtnList.forEach(menuBtn => {
  const nav = menuBtn.nextElementSibling; // header内のnav

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // メニューリンククリックでスマホでは閉じる
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        nav.classList.remove('open');
      }
    });
  });
});
