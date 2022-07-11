function login() {
    impedirPaginaDeAtualizar()

    function impedirPaginaDeAtualizar(){
        const form = document.querySelector('#form');
        form.addEventListener('submit', e => {e.preventDefault()});
    }
