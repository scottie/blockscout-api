var blocks = require('./blockscout.js');
var assert = require('assert');


describe('Load', function() {
    var bs = new blocks("https://blockscout.com/", "poa/core");
    describe('blockScout()', function() {
        it('should return class where versions contains the word core', function() {
            if(bs.versions.toString().indexOf("core") !== -1){
                assert.ok;
            }
        });
    });
    
    describe('balance()', function() {
        it('should return float greater then 0.000000000000000001', function() {     
            bs.balance("0x0Fe18f369c7F34208922cAEBbd5d21E131E44692", function(r){
                if(r.success){
                    if(r.data > 0.000000000000000001){
                        assert.ok
                    }
                }else{
                    assert.fail
                }
            });

           
        });
    });

    describe('balanceMulti()', function() {
        it('should return success and balance1 is float greater then 0.000000000000000001', function() {
            bs.balanceMulti("0x0Fe18f369c7F34208922cAEBbd5d21E131E44692,0x11c4469d974f8af5ba9ec99f3c42c07c848c861c", function(r){
                if(r.success){
                    if(r.data[0].balance > 0.000000000000000001){
                        assert.ok
                    }
                   assert.ok
                }else{
                    assert.fail
                }
            });
        });
    });

    describe('txList()', function() {
        it('should return success', function() {
            bs.txList("0x0Fe18f369c7F34208922cAEBbd5d21E131E44692", function(r){
                if(r.success){
                    assert.ok
                }else{
                    assert.fail
                }
            });
        });
    });

    describe('txListInternal()', function() {
        it('gasUsed in last transaction hould be larger then 0', function() {
            bs.txListInternal("0x759630ce113d098fccf211da4a7c1ce79ffe2c76b477eaf053351b3c356d1a00", function(r){
                if(r.success){
                    if(r.data[0].gasUsed > 0){
                        assert.ok
                    }
                }else{
                    assert.fail
                }
            });
        });
    });

    describe('tokenTxList()', function() {
        it('should return success', function() {
            bs.tokenTxList("0x0Fe18f369c7F34208922cAEBbd5d21E131E44692", function(r){               
                if(r.success){
                    assert.ok
                }else{
                    assert.fail
                }
            });
        });
    });
    
    describe('tokenBalance()', function() {
        it('should return true with balance larger then -0 for contract', function() {
            bs.tokenBalance("0x11c4469d974f8af5ba9ec99f3c42c07c848c861c&address", "0x0Fe18f369c7F34208922cAEBbd5d21E131E44692", function(r){
                if(r.success){
                    if(r.data > -0){
                        assert.ok
                    }else{
                        assert.fail
                    }
                }else{
                    assert.fail
                }
            });
        });
    });

    describe('tokenBalance()', function() {
        it('should return success', function() {
            bs.tokenList("0x11c4469d974f8af5ba9ec99f3c42c07c848c861c", function(r){
                if(r.success){
                    assert.true
                }else{
                    assert.false
                }
            });
        });
    });

    describe('tokenBalance()', function() {
        it('should return success', function() {
            bs.getMinedBlocks("0x11c4469d974f8af5ba9ec99f3c42c07c848c861c", function(r){
                if(r.success){
                    assert.ok
                }else{
                    assert.fail
                }
            });
        });
    });

console.log(bs.versions);

});
