!function(){var e={openModalBtnHeader:document.querySelector("[modal-open-header]"),openModalBtnHero:document.querySelector("[modal-open-hero]"),openModalBtnOffer:document.querySelector("[modal-open-offer]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function n(){e.modal.classList.toggle("is-hidden")}e.openModalBtnHeader.addEventListener("click",n),e.openModalBtnHero.addEventListener("click",n),e.openModalBtnOffer.addEventListener("click",n),e.closeModalBtn.addEventListener("click",n)}(),function(){var e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector(".mobile-menu"),body:document.querySelector("body"),menuList:document.querySelector(".mobile-menu-nav__list")};function n(){e.menu.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",n),e.closeMenuBtn.addEventListener("click",n),e.menuList.addEventListener("click",(function(){e.menu.classList.add("is-hidden")}))}();
//# sourceMappingURL=index.4ff85f7c.js.map
