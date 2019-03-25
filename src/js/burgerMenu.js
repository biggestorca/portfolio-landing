const burgerMenu = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('#burger-button'),
      0,
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const { target } = el.dataset;
          const $target = document.getElementById(target);
          const $links = Array.prototype.slice.call($target.getElementsByTagName('a'), 0);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          if (el.classList.contains('is-active')) {
            el.classList.remove('is-active');
            $target.classList.add('is-closed');
            $target.classList.remove('is-active');
            setTimeout(() => $target.classList.remove('is-closed'), 350);
          } else {
            el.classList.add('is-active');
            $target.classList.remove('is-closed');
            $target.classList.add('is-active');
          }

          // toggle($target);

          $links.forEach((link) => {
            link.addEventListener('click', () => {
              el.classList.remove('is-active');
              setTimeout(() => $target.classList.remove('is-active'), 350);
            });
          });

          // Hide menu when click on any other place of site, not menu
          // document.addEventListener('mouseup', (e) => {
          //   const $container = document.getElementById('nav__inner');

          //   if (!$container.contains(e.target).length || $navbarBurgers.contains(e.target)) {
          //     el.classList.remove('is-active');
          //     $target.classList.remove('is-active');
          //   }
          // });
        });
      });
    }
  });
};

export default burgerMenu;
