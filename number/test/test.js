let mydata = JSON.parse(data);
let unit = mydata[0];
let dozen = mydata[1];
let errors = mydata[2];
let hundred = mydata[3];
describe("Checking the functionality", function() {
    for (j in errors) {
    				it("Checking NotEqual " + j + " units", function() {
            assert.notEqual(units(j), errors[j]);
        });
    }
    for (k in errors) {
    				it("Checking NotEqual " + k + " dozens", function() {
            assert.notEqual(dozens(k), errors[k]);
        });
    }
    for (error in errors) {
    				it("Checking NotEqual " + error + " dozens", function() {
            assert.notEqual(hundreds(error), errors[error]);
        });
    }

    for (keys in unit) {
        it("Checking " + keys + " number", function() {
            assert.equal(units(keys), unit[keys]);
        });
    }
    for (key in dozen) {
        it("Checking " + key + " number", function() {
            assert.equal(dozens(key), dozen[key]);
        });
    }
});
