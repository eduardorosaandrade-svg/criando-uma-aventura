const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        // 1. Adicionado o sinal de '='
        // 2. Mantido 'this' (funciona porque usamos 'function()')
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        // 3. Corrigido 'classlist' para 'classList' (com L maiúsculo)
        atual.classList.remove('ativo');
        
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})
