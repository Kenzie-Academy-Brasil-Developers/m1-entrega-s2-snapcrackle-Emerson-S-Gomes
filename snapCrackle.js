//Escreva uma função chamada snapCrackle que leva um parâmetro: maxValue. ok
//Esta função deve fazer um loop de 1 até maxValue (inclusive) e montar uma string com as seguintes condições para cada número: ok
//Se o número for ímpar, no lugar dele, concatenar "Snap" no final da string.
//Se o número for múltiplo de 5, no lugar dele, concatenar "Crackle" no final da string.
//Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, concatenar "SnapCrackle" no final da string.
//Se número não for nem ímpar nem múltiplo de 5, concatenar o próprio número no final da string.
//Seus itens devem ser separados sempre por vírgula e espaço (veja o exemplo).
//Esta função deve retornar a string obtida.

function snapCrackle(maxValue){
    let numeroLoop = maxValue
    let resultadoObtido = []

    for ( index = 1; index <= numeroLoop; index++ ) {
    
        if(index % 2 != 0 && index % 5 ==0) {
                    resultadoObtido.push("SnapCrakler")
                } else if (index % 5 == 0) {
                resultadoObtido.push("Crakler")
                } else if (index % 2 !=0) {
            resultadoObtido.push("Snap")
                } else {
                    resultadoObtido.push(index)
                }
            }
            return resultadoObtido.toString()
        }
    
console.log(snapCrackle(12))
