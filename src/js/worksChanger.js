const worksChanger = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const oldWindowWidth = document.documentElement.clientWidth;
    let isMobile = oldWindowWidth <= 767;

    const toggleBlocksData = (isMobileParam) => {
      const i1 = document.getElementById('first-work-changed-item');
      const i2 = document.getElementById('second-work-changed-item');
      if (isMobileParam) {
        i1.classList.add('mob');
        i2.classList.add('mob');
      } else {
        i1.classList.remove('mob');
        i2.classList.remove('mob');
      }
      const elemFromi1 = i1.getElementsByClassName('works__item-title')[0];
      const elemFromi2 = i2.getElementsByClassName('works__item-title')[0];

      const htmlFromi1 = elemFromi1.innerHTML;
      const htmlFromi2 = elemFromi2.innerHTML;

      elemFromi1.innerHTML = htmlFromi2;
      elemFromi2.innerHTML = htmlFromi1;
    };

    if (isMobile) {
      toggleBlocksData(true);
    }

    window.addEventListener('resize', () => {
      const currentWidth = document.documentElement.clientWidth;
      if (isMobile && currentWidth > 767) {
        isMobile = false;
        toggleBlocksData(false);
      }
      if (!isMobile && currentWidth <= 767) {
        isMobile = true;
        toggleBlocksData(true);
      }
    });
  });
};

export default worksChanger;
