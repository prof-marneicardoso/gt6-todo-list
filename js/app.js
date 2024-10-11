
// Guarda o formulário
const formCadastro = document.getElementById('formCadastro');

// Adiciona o ouvinte do evento do formulário (submit)
formCadastro.addEventListener('submit', (evento) => {
    // Previne (bloqueia) o comportamento padrão
    evento.preventDefault();
    
    // Buscando os dados da tela
    // const nomeEvento = document.getElementById('evento').value;
    // const dataEvento = document.getElementById('data').value;

    cadastrarEvento(formCadastro);
});

function cadastrarEvento(formCadastro) {
    // Buscando os dados do formulário
    const nomeEvento = formCadastro.nomeEvento.value;
    // const dataEvento = formCadastro.dataEvento.value;
    const valor = Number(formCadastro.valor.value);

    // Busca os dados do LocalStorage (ou devolve um array vazio)
    const listaEventos = JSON.parse(localStorage.getItem('eventos')) || [];

    // === O mesmo que a linha acima ===
    // if (localStorage.getItem('eventos')) {
    //     console.log(`Tem`);
    //     listaEventos = localStorage.getItem('eventos');
        
    // } else {
    //     console.log(`Não tem`);
    //     listaEventos = [];
    // }

    // Adiciona o objeto com os dados no array
    listaEventos.push(  // <-- array
        // objeto
        {
            nomeEvento,
            // dataEvento,
            valor,
        }
    );

    // Adiciona o array preenchido na LocalStorage
    localStorage.setItem('eventos', JSON.stringify(listaEventos));
    
    // SET
    // verbo: atribuir
    // substantivo: conjunto

    mostrarEventos();
}

function mostrarEventos() {
    const listaEventos = JSON.parse(localStorage.getItem('eventos')) || [];

    const lista = document.getElementById('lista');
    lista.innerHTML = '';
    let valorTotal = 0;

    listaEventos.forEach(evento => {
        valorTotal += evento.valor;

        // const foto = document.createElement('img');
        // foto.setAttribute('src', './img/icone.png');
        
        const item = document.createElement('li');
        // item.appendChild(foto);

        item.textContent = `${evento.nomeEvento}, R$ ${evento.valor}, Total: R$ ${valorTotal}`;
        lista.appendChild(item);
    });
}

// Chama a function ao carregar a página
mostrarEventos();
