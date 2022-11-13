import Notiflix from 'notiflix';

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay }); 
      }
    }, delay);
  });
  }

const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmit);

  function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { delay, step, amount }
    } = event.currentTarget;
  
    const dataUser = {
      delay: delay.value,
      step: step.value,
      amount: amount.value
    };
    let delayTime = Number(dataUser.delay);
    let stepTime=Number(dataUser.step);
    // console.log(dataUser);
  event.currentTarget.reset();
  
  for (let i = 1; i <= Number(dataUser.amount); i++){
    // console.log(Number(dataUser.amount));
    createPromise(i, delayTime)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayTime += stepTime;
  }
}
