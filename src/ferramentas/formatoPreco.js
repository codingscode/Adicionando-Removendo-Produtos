export default function formatoPreco(valor) {
    const moedaFormato = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor)

    return moedaFormato
}

  