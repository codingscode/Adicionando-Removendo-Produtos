let ultimoId = 10

export default function(prefixo = 'id') {
    ultimoId++
    return `${prefixo}${ultimoId}`
}