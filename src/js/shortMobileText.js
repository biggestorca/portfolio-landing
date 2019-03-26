const shortMobileText = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const $pretendents = Array.prototype.slice.call(
      document.querySelectorAll('.short-mobile-text'),
      0,
    );
    const oldWindowWidth = document.documentElement.clientWidth;
    const SEEN_BY_DEFAULT = 140;
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
              SEEN_BY_DEFAULT,
            )}</span> ${trigger}`;

            const textWrapper = el.querySelector('.text');
            const lastTextPart = Array.prototype.slice.call(
              text.split('').slice(SEEN_BY_DEFAULT),
              0,
            );

            lastTextPart.forEach((letter) => {
              const sp = document.createElement('span');
              sp.classList.add('letter');
              sp.classList.add('letter-none');
              sp.innerText = letter;
              textWrapper.appendChild(sp);
            });

            const $hiddenLetters = Array.prototype.slice.call(
              textWrapper.querySelectorAll('.letter-none'),
              0,
            );

            el.querySelector('.short-mobile-text__see-more').addEventListener('click', () => {
              const { show } = textWrapper.dataset;

              //   show all text with anim
              if (show === 'short') {
                textWrapper.dataset.show = 'long';
                $hiddenLetters.forEach((hiddenLetter, index) => {
                  setTimeout(
                    () => {
                      hiddenLetter.classList.remove('letter-none');
                      hiddenLetter.classList.add('appear');
                    },
                    index === 0 ? 1 * 3 : index * 3,
                  );
                });

                // eslint-disable-next-line no-param-reassign
                el.querySelector('.short-mobile-text__see-more').innerText = 'See less';
              } else {
                //   hide part of text with anim
                textWrapper.dataset.show = 'short';
                $hiddenLetters.forEach((hiddenLetter, index) => {
                  setTimeout(
                    () => {
                      hiddenLetter.classList.remove('appear');
                      hiddenLetter.classList.add('letter-none');
                    },
                    index === 0 ? 1 * 3 : index * 3,
                  );
                });
                // eslint-disable-next-line no-param-reassign
                el.querySelector('.short-mobile-text__see-more').innerText = 'See more...';
              }
            });
          }
        } else {
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
