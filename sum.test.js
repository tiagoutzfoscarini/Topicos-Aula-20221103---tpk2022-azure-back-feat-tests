const {sum}=require("./sum");

test ("Somando 1+2 deve retornar 3",()=>{
    //cenário
    const esperado=3;

    //execução
    const resultado=sum(1,2);

    //validação
    expect(resultado).toBe(esperado);
});

describe ("Conjunto de testes operações aritiméticas",()=>{
   it ("Somando 1+2 deve retornar 3",()=>{
        //cenário
        const esperado=3;
    
        //execução
        const resultado=sum(1,2);
    
        //validação
        expect(resultado).toBe(esperado);
    });
})