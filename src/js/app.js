const painel = document.querySelector('#painel1');
const modalPainel = document.querySelector('.painel');

const piloting = document.querySelector('#piloting1');
const modalPiloting = document.querySelector('.piloting');

const desiner = document.querySelector('#desiner1');
const modalDesiner = document.querySelector('.desiner');

const motor = document.querySelector('#motor1');
const modalMotor = document.querySelector('.motor');


painel.addEventListener('click', () => {
    modalPainel.classList.add('modal-active');
});

piloting.addEventListener('click', () => {
    modalPiloting.classList.add('modal-active');
});

desiner.addEventListener('click', () => {
    modalDesiner.classList.add('modal-active');
});

motor.addEventListener('click', () => {
    modalMotor.classList.add('modal-active');
});

modalPainel.addEventListener('click', () => {
    modalPainel.classList.remove('modal-active');
});

modalPiloting.addEventListener('click', () => {
    modalPiloting.classList.remove('modal-active');
});

modalDesiner.addEventListener('click', () => {
    modalDesiner.classList.remove('modal-active');
});

modalMotor.addEventListener('click', () => {
    modalMotor.classList.remove('modal-active');
});