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
          const $links = Array.prototype.slice.call(
            $target.getElementsByTagName('a'),
            0,
          );

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

          $links.forEach((link) => {
            link.addEventListener('click', () => {
              el.classList.remove('is-active');
              $target.classList.remove('is-active');
            });
          });
        });
      });
    }
  });
};

export default burgerMenu;
