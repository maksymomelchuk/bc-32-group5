(() => {
  const refs = {
    openModalBtnHeader: document.querySelector('[data-modal-open-header]'),
    openModalBtnHero: document.querySelector('[data-modal-open-hero]'),
    openModalBtnOffer: document.querySelector('[data-modal-open-offer]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
  };
  console.log(refs);
  refs.openModalBtnHeader.addEventListener('click', toggleModal);
  refs.openModalBtnHero.addEventListener('click', toggleModal);
  refs.openModalBtnOffer.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
