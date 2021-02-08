pm.test("Status test", function () {
    pm.response.to.have.status(200);
});

pm.test("response must be valid and have a body", function () {
     pm.response.to.be.ok;
     pm.response.to.be.withBody;
     pm.response.to.be.json;
});

var jsonData = pm.response.json(); 
pm.test("Verify name", function () { 
        pm.expect(jsonData.data.name).is.to.equal("Naik"); 
    });    
