(()=>{const e={openModalBtnHeader:document.querySelector("[data-modal-open-header]"),openModalBtnHero:document.querySelector("[data-modal-open-hero]"),openModalBtnOffer:document.querySelector("[data-modal-open-offer]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),body:document.querySelector("body")};function n(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}console.log(e),e.openModalBtnHeader.addEventListener("click",n),e.openModalBtnHero.addEventListener("click",n),e.openModalBtnOffer.addEventListener("click",n),e.closeModalBtn.addEventListener("click",n)})(),(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn1:document.querySelector("[data-menu-close1]"),closeMenuBtn2:document.querySelector("[data-menu-close2]"),closeMenuBtn3:document.querySelector("[data-menu-close3]"),closeMenuBtn4:document.querySelector("[data-menu-close4]"),closeMenuBtn5:document.querySelector("[data-menu-close5]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector(".mobile-menu")};function n(){e.menu.classList.toggle("is-hidden")}e.openMenuBtn.addEventListener("click",n),e.closeMenuBtn1.addEventListener("click",n),e.closeMenuBtn2.addEventListener("click",n),e.closeMenuBtn3.addEventListener("click",n),e.closeMenuBtn4.addEventListener("click",n),e.closeMenuBtn5.addEventListener("click",n),e.closeMenuBtn.addEventListener("click",n)})();new Swiper(".mySwiper",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});window.onscroll=()=>{document.body.scrollTop>500||document.documentElement.scrollTop>500?document.getElementById("up").classList.remove("d-none"):document.getElementById("up").classList.add("d-none")};
//# sourceMappingURL=index.c0c21af3.js.map