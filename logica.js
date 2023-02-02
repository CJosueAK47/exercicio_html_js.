const form = document.getElementById('the-form');

function verificaMaior(element_1, element_2){
    const element_1_1 = parseInt(element_1);
    const element_2_2 = parseInt(element_2);

    const e_maior = element_1_1 > element_2_2;

    return e_maior;
}

form.addEventListener('submit', function(e) {
    let formEValido = true;

    e.preventDefault;

    const n_1 = document.getElementById('one');
    const n_2 = document.getElementById('two');

    const mensagemSucesso = 'O Valor: '+ n_1.value + ' é MAIOR QUE ' + n_2.value + ' !';
    const mensagemErro = 'O Valor: <b>'+ n_1.value + '<b> NÃO É MAIOR QUE ' + n_2.value + ' !';

    formEValido = verificaMaior(n_1.value, n_2.value);
    if(formEValido){
        const containerMensagemSucesso = document.querySelector('.mensagem');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemSucesso.style.backgroundColor = 'rgb(0, 128, 75)';
    }
    if(!formEValido){
        const containerMensagemErro = document.querySelector('.mensagem');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        containerMensagemErro.style.backgroundColor = 'rgb(151, 15, 17)';
    }

})
