var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test To Do lists result', function () {
//	this.timeout(15000);

	var requestResult;
	var response;
		 
    before(function (done) {
        chai.request("http://localhost:8080")
			.get("/app/recipe")
			.end(function (err, res) {
				requestResult = res.body;
				response = res;
                expect(err).to.be.null;
                expect(res).to.have.status(200);
				done();
			});
        });
    
    it('Should return an array object with more than 1 object', function (){
		expect(response).to.have.status(200);
        expect(response.body).to.be.an.object;
		expect(response.body).to.have.length.above(2);
		expect(response).to.have.headers;
    });
    
	it('The first entry in the array has known properties', function(){
	    expect(requestResult[0]).to.include.keys('recipeTitle');
	    expect(requestResult[0]).to.have.property('_id');
		expect(response).to.have.deep.property('body[0].recipeId', 1);
		expect(response.body).to.not.be.a.string;
	});
	it('The elements in the array have the expected properties', function(){
		expect(response.body).to.satisfy(
			function (body) {
				for (var i = 0; i < body.length; i++) {
					expect(body[i]).to.have.property('_id');
					expect(body[i]).to.have.property('recipeTitle');
					expect(body[i]).to.have.property('recipeId');
					expect(body[i]).to.have.property('ingredients');
                    expect(body[i]).to.have.property('instructions');
                    expect(body[i]).to.have.property('calories');
                    expect(body[i]).to.have.property('protein');
                    expect(body[i]).to.have.property('fat');
                    expect(body[i]).to.have.property('carbs');
                    expect(body[i]).to.have.property('sugar');
                    expect(body[i]).to.have.property('goal');
                }
				return true;
			});
	});	
	
});