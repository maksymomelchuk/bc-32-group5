(() => {
  const refs = {
    openModalBtnHeader: document.querySelector('[modal-open-header]'),
    openModalBtnHero: document.querySelector('[modal-open-hero]'),
    openModalBtnOffer: document.querySelector('[modal-open-offer]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtnHeader.addEventListener('click', toggleModal);
  refs.openModalBtnHero.addEventListener('click', toggleModal);
  refs.openModalBtnOffer.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
