export async function buscarPessoas() {
  try {
    const res = await fetch('./data.json');    
    if (!res.ok) throw new Error('Erro ao buscar dados');
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}