const request=require("supertest");
const app=require("./app");
const database=require("./database/database.local");

describe("Conjunto de testes app",()=>{

    it ("Testando GetInfo Endpoint",async()=>{
        //cenário
        const esperado="geekxxx";
        //execução
        const res=await request(app).get("/getInfo");
        
        //validação
        expect(res.body.user).toBe(esperado);
    });

    it("Ao salvar um cliente o endpoint deve retornar Ok",async()=>{
        const databaseSpy = jest.spyOn(database, 'gravarDados');
        databaseSpy.mockReturnValue(true);

        //cenário
        const esperado="Ok";
        //execução
        const res=await request(app)
                  .post("/clientes/salvar")
                  .send({codigo:"",
                    nome:"236",
                    endereco:"7889"});
        
        //validação
        expect(res.text).toBe(esperado);
        expect(res.status).toBe(201);
    });

    it("Ao tentar salvar um cliente e der um erro o endpoint deve retornar  NOk e 401",async()=>{
        const databaseSpy = jest.spyOn(database, 'gravarDados');
        databaseSpy.mockReturnValue(false);//gravarDados Sempre Vai Retornar false

        //cenário
        const esperado="NOk";

        //execução
        const res=await request(app)
                  .post("/clientes/salvar")
                  .send({});
                  
      
          expect(res.status).toBe(401);
    });

    it ("Testando '/clientes/listar'",async()=>{
        //cenário
        const esperado=JSON.parse(localStorage.getItem('myKey'));
        const codigoEsperado = 200;
        //execução
        const res=await request(app).get("/clientes/listar");
        
        
        //validação
        expect(res.text).toBe(esperado);
        expect(res.status).toBe(codigoEsperado);
    });
    
    // it ("Testando '/clientes/listar/:key'",async()=>{
    //     //cenário
    //     const esperado=JSON.parse(localStorage.getItem('myKey'));
    //     const codigoEsperado = 200;
    //     //execução
    //     const res=await request(app).get("/clientes/listar/:key");
        
    //     //validação
    //     expect(res.text).toBe(key);
    //     expect(res.status).toBe(codigoEsperado);
    // });
})