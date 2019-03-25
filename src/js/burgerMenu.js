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
          const $substrate = document.createElement('div');
          $substrate.classList.add('substrate');

          // Get the target from the "data-target" attribute
          const { target } = el.dataset;
          const $target = document.getElementById(target);
          const $links = Array.prototype.slice.call($target.getElementsByTagName('a'), 0);

          function closeNav() {
            el.classList.remove('is-active');
            $target.classList.add('is-closed');
            $target.classList.remove('is-active');
            setTimeout(() => $target.classList.remove('is-closed'), 350);
            document.body.removeChild($substrate);
            document.body.classList.remove('nav-open');
          }

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          if (el.classList.contains('is-active')) {
            closeNav();
          } else {
            el.classList.add('is-active');
            $target.classList.remove('is-closed');
            $target.classList.add('is-active');
            document.body.appendChild($substrate);
            document.body.classList.add('nav-open');
          }

          $links.forEach((link) => {
            link.addEventListener(
              'click',
              () => {
                closeNav();
              },
              false,
            );
          });

          $substrate.addEventListener('click', () => {
            closeNav();
          });
        });
      });
    }
  });
};

export default burgerMenu;
