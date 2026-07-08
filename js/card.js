export function criarCard(pessoa) {
    return `
    <div class="col-sm-6 col-md-4 col-lg-3">
      <div class="card h-100 shadow-sm">
        <img 
          src="${pessoa.foto}" 
          class="card-img-top" 
          alt="${pessoa.nome}"
          style="height: 300px; object-fit: cover;"
        >
        <div class="card-body d-flex flex-column">
          <h5 class="card-title text-uppercase">${pessoa.nome}, ${pessoa.idade}</h5>
          <p class="card-text mb-2">
            <i class="bi bi-chat-quote"></i> 
            <strong>Frase:</strong> 
            <span class="text-capitalize">${pessoa.umaFrase}</span><br>
            <i class="bi bi-heart"></i> Coisa que mais ama:
            <span class="text-capitalize">${pessoa.umaCoisaQueAma}</span>
          </p>
          <button 
            class="btn btn-primary mt-auto btn-ver-flogao" 
            data-id="${pessoa.id}"
          >
            Ver Flogão completo
          </button>
        </div>
      </div>
    </div>
  `;
}