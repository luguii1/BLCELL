

function logar() {
    const nome = document.querySelector('[name="nome"]').value
    const email = document.querySelector('[name="email"]').value
    const senha = document.querySelector('[name="senha"]').value
    const repetirSenha = document.querySelector('[name="repetir-senha"]').value

    const olaNome = document.getElementById('name')
    const hellonome = document.getElementById('nome')

    olaNome.innerText = `Olá, ${nome}`
    hellonome.innerText = `Olá, ${nome}`
    olaNome.classList.add('ativo')
    hellonome.classList.add('ativo')

    if (nome.length === 0 || email.length === 0 || senha.length === 0 || repetirSenha.length === 0) {
        alert('Você deve preencher todos os campos.');
        olaNome.classList.remove('ativo');
        hellonome.classList.remove('ativo')
        return false;
    }

    if (senha !== repetirSenha) {
        alert("As senhas não coincidem, por favor, confirme a senha correta.");
        return false;
    }

    return true;
}