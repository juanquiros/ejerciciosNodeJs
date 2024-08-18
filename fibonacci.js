function fibonacci(numero){
    let serie = [0,1];
    for(let i = 2; i <= numero-1;i++){
        serie.push(serie[i - 1] + serie[i - 2] );
    }
    return [serie,serie[numero-1]]
}

console.log(fibonacci(10));