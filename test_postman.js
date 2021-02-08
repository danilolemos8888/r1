// Teste 1: Enviar um GET para a API https://gorest.co.in/public-api/users pesquisando por "Naik" no parâmetro "name" da 
// querystring (users?name="Naik"). Validar o statusCode (200 OK) e validar que no array "data", todos os elementos contenham Naik no campo name.

pm.test("Status test", function () {
    pm.response.to.have.status(200);
});

var jsonData = pm.response.json(); 
pm.test("Verify name", function () { 
        pm.expect(jsonData.data.name).is.to.equal("Naik"); 
    });    


// Teste 2:	Enviar um GET para a API https://gorest.co.in/public-api/users, armazenar o ID do primeiro user retornado e 
// enviar um novo GET para o endpoint https://gorest.co.in/public-api/users/<id>/posts, onde "<id>" é o ID do user armazenado na primeira requisição. Validar todos os posts retornados para esse user e validar o statusCode (200 OK).

pm.test("Status test", function () {
    pm.response.to.have.status(200);
});

var jsonData = pm.response.json(); 
pm.test("Verify id", function () { 
        var nId = pm.expect(jsonData.data.id);
    });    

    