const shortMobileText = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const $pretendents = Array.prototype.slice.call(
      document.querySelectorAll('.short-mobile-text'),
      0,
    );
    const oldWindowWidth = document.documentElement.clientWidth;
    let isMobile = oldWindowWidth <= 767;

    const toggleText = (isMobileStatus) => {
      $pretendents.forEach((el) => {
        const text = isMobileStatus ? el.innerText : el.dataset.all;

        if (isMobileStatus) {
          // eslint-disable-next-line no-param-reassign
          el.dataset.all = text;
          if (text.length > 200) {
            const trigger =
              '<span class="short-mobile-text__see-more secondary">See more...</span>';
            // eslint-disable-next-line no-param-reassign
            el.innerHTML = `<span class="text" data-show="short">${text.slice(
              0,
              130,
            )}</span> ${trigger}`;
            el.querySelector('.short-mobile-text__see-more').addEventListener('click', () => {
              const textWrapper = el.querySelector('.text');
              const { show } = textWrapper.dataset;
              if (show === 'short') {
                textWrapper.dataset.show = 'long';
                textWrapper.innerHTML = text;
                // eslint-disable-next-line no-param-reassign
                el.querySelector('.short-mobile-text__see-more').innerText = 'See less';
              } else {
                textWrapper.dataset.show = 'short';
                textWrapper.innerHTML = text.slice(0, 130);
                // eslint-disable-next-line no-param-reassign
                el.querySelector('.short-mobile-text__see-more').innerText = 'See more...';
              }
            });
          }
        } else {
          // eslint-disable-next-line no-param-reassign
          delete el.dataset.all;
          // eslint-disable-next-line no-param-reassign
          el.innerHTML = text;
        }
      });
    };

    if (isMobile) {
      toggleText(true);
    }

    window.addEventListener('resize', () => {
      const currentWidth = document.documentElement.clientWidth;
      if (isMobile && currentWidth > 767) {
        isMobile = false;
        toggleText(false);
      }
      if (!isMobile && currentWidth <= 767) {
        isMobile = true;
        toggleText(true);
      }
    });
  });
};

export default shortMobileText;
