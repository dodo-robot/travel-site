class Modal {
    constructor(){
        this.modal = document.getElementsByClassName("modal");
        this.openModalButton = document.getElementsByClassName("open-modal");  
        this.closeModalButton = document.getElementsByClassName("modal__close");
        this.events();
    }

    events(){
        let that = this;
        Array.prototype.forEach.call(this.openModalButton, function(el) {
            el.onclick = that.openModal.bind(that);
        });  

        this.closeModalButton[0].onclick = this.closeModal.bind(this);

        document.onkeyup = this.keyPressHandler.bind(this);
    }

    keyPressHandler(e){  
        if(e.keyCode == 27){
            this.closeModal();
        }
    }

    openModal(){
        console.log(this);
        this.modal[0].classList.add("modal--is-visible");
        return false;
    }

    closeModal(){
        this.modal[0].classList.remove("modal--is-visible");
        return false;
    }


}

export default Modal;