export function criarItem(label, valor) {
    if (!valor) return '';
    return `
    <li cless="list-group-item d-flex justify-content-between">
    <strong>${label}:</strong>
    <span cless="text-end">${valor}</span>
    </li>
    `;
}

export function capitalizar(texto) {
    if (!texto) return '';
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}