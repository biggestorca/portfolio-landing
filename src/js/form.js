// plugin support only require
const emailjs = require('emailjs-com');
// fucking IE does not support promise in 2k19...
const ES6Promise = require('es6-promise');

ES6Promise.polyfill();

const emailListen = () =>
  document.addEventListener('DOMContentLoaded', () => {
    emailjs.init('user_gEbaFHZOTtK3FJHu81Y6A');

    const $forms = Array.prototype.slice.call(document.querySelectorAll('.form'), 0);

    $forms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('.form__submit');
        submitBtn.setAttribute('diasbled', 'diasbled');
        const loader = document.createElement('div');
        const loaderInner = document.createElement('div');
        loader.appendChild(loaderInner);
        loader.classList.add('form__loader');

        form.appendChild(loader);
        form.classList.add('status');

        const message = document.createElement('div');
        message.classList.add('form__message');

        emailjs.sendForm('contact_service', 'contact_form', form).then(
          () => {
            message.innerText = 'Your message send success!';
            form.removeChild(loader);
            form.appendChild(message);
            message.classList.add('is-active');
            submitBtn.removeAttribute('diasbled');
            setTimeout(() => {
              form.reset();
              form.classList.remove('status');
              form.removeChild(message);
            }, 4000);
          },
          () => {
            message.innerText = 'Failed send message!';
            form.removeChild(loader);
            form.appendChild(message);
            message.classList.add('is-active');
            submitBtn.removeAttribute('diasbled');
            setTimeout(() => {
              form.classList.remove('status');
              form.removeChild(message);
            }, 4000);
          },
        );
      });
    });
  });

export default emailListen;
