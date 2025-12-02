function ValidaNome(nome) {
    const regexNome = /^[a-zA-ZÀ-ÿ\s\-']+$/; //expressão regular
    const isValid = regexNome.test(nome) && nome.length > 2;
    return isValid;
}

function ValidaTelefone(telefone) {
    const regexTelefone = /^\([1-9]{2}\)[0-9]{5}\-[0-9]{4}$/;
    const isValid = regexTelefone.test(telefone);
    return isValid;
}

function ValidaEmail(email) {
    const regexEmail = /^[a-zA-Z0-9. %+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = regexEmail.test(email);
    return isValid;
}

export function validaContato(nome, telefone, email) {
    const nomeValido = ValidaNome(nome);
    const telefoneValido = ValidaTelefone(telefone);
    const emailValido = ValidaEmail(email);

    const contatoValido = nomeValido && telefoneValido && emailValido;

    if (contatoValido) {
        return {
            status: true, mensagem: ''
        };
    } else if (!nomeValido) {
        return { status: false, mensagem: 'Nome inválido!' }
    } else if (!telefoneValido) {
        return { status: false, mensagem: 'Telefone inválido!' }
    } else if (!emailValido) {
        return { status: false, mensagem: 'Email inválido!' }
    }

}