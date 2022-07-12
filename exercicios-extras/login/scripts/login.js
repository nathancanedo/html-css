const users = [{user: 'nathan', password: 1234}, {user: 'caalf', password: 1234}];

function login() {
    
    impedirPaginaDeAtualizar()

    function impedirPaginaDeAtualizar(){
        const form = document.querySelector('#form');
        form.addEventListener('submit', e => {e.preventDefault()});
    }

    verificarLogin();

    function verificarLogin() {
        const user = document.querySelector('#user').value;
        const password = document.querySelector('#password').value;

        const usuarioLiberado = usuarioESenha(user, password);

        function usuarioESenha(user, password) {
            for (let c in users) {
                if (users[c].user === user && users[c].password == password) {
                    console.log('acesso liberado');
                    return true;
                } else {
                    console.log(`acesso negado ${users[c].user}`);
                }
            }
        }
        if (usuarioLiberado) {
            alert('Bem Vindo!')
        } else {
            alert('usuario ou senha incorretos')
        }
    }
}

function registrar() {
    let user = prompt('Digite um usuario');
    let password = prompt('digite uma senha');

    adicionarNovoUsuario(user, password)

    function adicionarNovoUsuario(user, password){

        users.push({user: user, password: password});
        console.log(users);   
    }
}