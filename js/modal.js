import { criarItem } from './utils.js';

export function abrirModal(pessoa) {

  document.getElementById('modalNome').innerText = `${pessoa.nome} - Flogao #${pessoa.id}`;

  const body = document.getElementById('modalBody');
  body.innerHTML = `
<div class="row">
<div class="col-md-4 text-center mb-3">
<img src="${pessoa.foto}" class="img-fluid rounded" alt="${pessoa.nome}">
</div>
    <div class="col-md-8">
        <ul class="list-group list-group-flush">
          ${criarItem('Idade', pessoa.idade)}
          ${criarItem('Trabalha', pessoa.trabalha ? 'Sim' : 'Não')}
          ${criarItem('Hobby', pessoa.hobby)}
          ${criarItem('Cor preferida', pessoa.corPreferida)}
          ${criarItem('Comida preferida', pessoa.comidaPreferida)}
          ${criarItem('Ama', pessoa.umaCoisaQueAma)}
          ${criarItem('Odeia', pessoa.umaCoisaQueOdeia)}
          ${criarItem('Matéria favorita', pessoa.materiaFavorita)}
          ${criarItem('Matéria que odeia', pessoa.materiaQueOdeia)}
          ${criarItem('Gosta de ler', pessoa.gostaDeLer ? 'Sim' : 'Não')}
          ${criarItem('Livro favorito', pessoa.livroFavorito)}
          ${criarItem('Prefere', pessoa.prefereFilmeOuSerie)}
          ${criarItem('Série favorita', pessoa.serieFavorita)}
          ${criarItem('Filme favorito', pessoa.filmeFavorito)}
          ${criarItem('Te faz rir', pessoa.algoQueTeFazRir)}
          ${criarItem('Te faz chorar', pessoa.algoQueTeFazChorar)}
          ${criarItem('Frase', `"${pessoa.umaFrase}"`)}
          ${criarItem('Jogo favorito', pessoa.jogoFavorito)}
          ${criarItem('Estilo musical', pessoa.estiloMusical)}
          ${criarItem('Banda/Artista', pessoa.artistaOuBanda)}
          ${criarItem('Rede social', pessoa.redeSocialMaisUsada)}
          ${criarItem('S.O.', pessoa.sistemaOperacional)}
          ${criarItem('Superpoder', pessoa.superpoderDesejado)}
          ${criarItem('Pet', pessoa.animalDeEstimacao)}
          ${criarItem('Maior sonho', pessoa.maiorSonho)}
          ${criarItem('Profissão dos sonhos', pessoa.profissaoDosSonhos)}
          ${criarItem('Quer conhecer', pessoa.lugarQueQuerConhecer)}
          ${criarItem('Horário produtivo', pessoa.horarioProdutivo)}
          ${criarItem('Clima preferido', pessoa.climaPreferido)}
          ${criarItem('Esporte favorito', pessoa.esporteFavorito)}
          ${criarItem('Talento escondido', pessoa.talentoEscondido)}
          ${criarItem('Um sonho', pessoa.umSonho)}
          ${criarItem('País pra conhecer', pessoa.umPaisParaConhecer)}
          ${criarItem('Se fosse rico', pessoa.seFosseRico)}
          ${criarItem('Time do coração', pessoa.timeDoCoracao)}
          ${criarItem('Amigos', pessoa.amigos.join(', '))}
          ${criarItem('Tem crush', pessoa.temCrush)}
          ${criarItem('Levaria pra ilha', pessoa.quemLevariaParaUmaIlhaDeserta)}
          ${criarItem('Lua de mel', pessoa.ondePassarALuaDeMel)}
          ${criarItem('Carro', pessoa.umCarro)}
        </ul>
      </div>
  </div>
`;

  const modal = new bootstrap.Modal(document.getElementById('flogaoModal'));
  modal.show();
}