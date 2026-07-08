import { buscarPessoas } from "./api.js";
import { criarCard} from "./card.js";
import { abrirModal} from "./modal.js";

let dadosFlogao = [];

async function iniciar() {
    const container = document.getElementById('cards-container');
    dadosFlogao = await buscarPessoas();
    console.log(dadosFlogao)

    dadosFlogao.forEach(pessoa => {
     container.innerHTML += criarCard(pessoa);
    });


    document.querySelectorAll('.btn-ver-flogao').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = Number(e.target.dataset.id);
        const pessoa = dadosFlogao.find(p => p.id === id);
        if (pessoa) abrirModal(pessoa);
      });
    });
}

iniciar();