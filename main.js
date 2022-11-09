const app =require("./app"); //foi separado e colocado em app.js
const PORT= process.env.PORT || 3000;

app.listen(PORT,function(){
    console.log("Servidor-Backend está rodando na porta: "+PORT);
})