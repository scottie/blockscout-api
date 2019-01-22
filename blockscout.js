//https://blockscout.com/poa/core/api
var request = require('request');
// poa/core  = POA
// poa/sokol = POA testnet
// eth/mainnet = ETH mainnet
// eth/ropsten = ETH testnet
// etc/mainnet = ETC mainnet

// https://blockscout.com/poa/core/api?module=account&action=tokenbalance&contractaddress=0x11c4469d974f8af5ba9ec99f3c42c07c848c861c&address=0x0Fe18f369c7F34208922cAEBbd5d21E131E44692
// https://blockscout.com/poa/core/api?module=account&action=balance&address=0x0Fe18f369c7F34208922cAEBbd5d21E131E44692
// https://blockscout.com/poa/core/api?module=account&action=tokentx&address=0x0Fe18f369c7F34208922cAEBbd5d21E131E44692
// https://blockscout.com/poa/core/api?module=account&action=txlist&address=0x0Fe18f369c7F34208922cAEBbd5d21E131E44692

module.exports = class blockScout {

    constructor(host, version, debug = false) {

        this.host = host;
        this.version = version + "/api?";
        this.debug = debug;
        this.versions = ["poa/core",
                        "poa/sokol",
                        "eth/mainnet",
                        "eth/ropsten",
                        "etc/mainnet"];

        console.log("Host: " + this.host + "\n" + "Version: " + this.version + "\n" + "Debug: " + this.debug);
    }    
    
    //HTTP GET REQUEST
    GETit(action, callback){
        request(this.host + this.version + action, function (error, response, body) {
            if(error){
                return callback({success:false, error:error.message})
            }else{
                if(this.debug == true){
                console.log('error:', error); // Print the error if one occurred
                console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
                console.log('body:', body); // Print the HTML for the Google homepage.
                }
                if(response.statusCode == 200){
                    return callback({success:true, data:JSON.parse(body)});
                }else{
                    return callback({success:false, error:"Bad response code: " + response.statusCode.toString()});
                }
                
            }

        });
    }

    //module = account

    //balance
    //https://blockscout.com/poa/core/api?module=account&action=balance&address=0x0Fe18f369c7F34208922cAEBbd5d21E131E44692
    balance(address, callback){ //0x11c4469d974f8af5ba9ec99f3c42c07c848c861c  0x0Fe18f369c7F34208922cAEBbd5d21E131E44692  
        this.GETit("module=account&action=balance&address=" + address, function(r){
            if(r.success){
                var bal = (parseInt(r.data["result"]) / 1000000000000000000).toString()
                return callback({success:true, data:parseFloat(bal)});
            }else{
                return callback({success:false, error:r.error});
            }
        });
    }

    //balancemulti
    //https://blockscout.com/poa/core/api?module=account&action=balancemulti&address=0x0Fe18f369c7F34208922cAEBbd5d21E131E44692,0x0Fe18f369c7F34208922cAEBbd5d21E131E44692,0x11c4469d974f8af5ba9ec99f3c42c07c848c861c
    balanceMulti(address, callback){
        this.GETit("module=account&action=balancemulti&address=" + address, function(r){
            if(r.success){
                return callback({success:true, data:r.data["result"]});
            }else{
                return callback({success:false, error:r.error});
            }
        });
    }

    //txlist
    //https://blockscout.com/poa/core/api?module=account&action=txlist&address=0x0Fe18f369c7F34208922cAEBbd5d21E131E44692
    txList(address, callback){
        this.GETit("module=account&action=txlist&address=" + address, function(r){
            if(r.success){
                return callback({success:true, data:JSON.parse(r.data)});
            }else{
                return callback({success:false, error:r.error});
            }
        });
    }
    
    //txlistinternal
    //https://blockscout.com/poa/core/api?module=account&action=txlistinternal&txhash=0x759630ce113d098fccf211da4a7c1ce79ffe2c76b477eaf053351b3c356d1a00
    txListInternal(txhash, callback){
        this.GETit("module=account&action=txlistinternal&txhash=" + txhash, function(r){
            if(r.success){
                return callback({success:true, data:r.data["result"]});
            }else{
                return callback({success:false, error:r.error});
            }
        });
    }

    //tokentx
    //https://blockscout.com/poa/core/api?module=account&action=tokentx&address=0x0Fe18f369c7F34208922cAEBbd5d21E131E44692
    tokenTxList(address, callback){ //0x11c4469d974f8af5ba9ec99f3c42c07c848c861c  0x0Fe18f369c7F34208922cAEBbd5d21E131E44692  
        this.GETit("module=account&action=tokentx&address=" + address, function(r){
            if(r.success){
                return callback({success:true, data:JSON.parse(r.data)});
            }else{
                return callback({success:false, error:r.error});
            }
        });
    }

    //tokenbalance
    //https://blockscout.com/poa/core/api?module=account&action=tokenbalance&contractaddress=0x11c4469d974f8af5ba9ec99f3c42c07c848c861c&address=0x0Fe18f369c7F34208922cAEBbd5d21E131E44692
    tokenBalance(contractAddress, address, callback){ //0x11c4469d974f8af5ba9ec99f3c42c07c848c861c  0x0Fe18f369c7F34208922cAEBbd5d21E131E44692  
        this.GETit("module=account&action=tokenbalance&contractaddress=" + contractAddress+ "&address=" + address, function(r){
            if(r.success){
                return callback({success:true, data:r.data["result"]});
            }else{
                return callback({success:false, error:r.error});
            }
        });
    }

    //tokenlist
    //https://blockscout.com/poa/core/api?module=account&action=tokenlist&address=0x0Fe18f369c7F34208922cAEBbd5d21E131E44692
    tokenList(address, callback){ //0x11c4469d974f8af5ba9ec99f3c42c07c848c861c  0x0Fe18f369c7F34208922cAEBbd5d21E131E44692  
        this.GETit("module=account&action=tokenlist&address=" + address, function(r){
            if(r.success){
                return callback({success:true, data:r.data["result"]});
            }else{
                return callback({success:false, error:r.error});
            }
        });
    }

    //getminedblocks
    //https://blockscout.com/poa/core/api?module=account&action=getminedblocks&address=0x0Fe18f369c7F34208922cAEBbd5d21E131E44692
    getMinedBlocks(address, callback){ //0x11c4469d974f8af5ba9ec99f3c42c07c848c861c  0x0Fe18f369c7F34208922cAEBbd5d21E131E44692  
        this.GETit("module=account&action=getminedblocks&address=" + address, function(r){
            if(r.success){
                if(r.data["message"] == "No blocks found"){
                    return callback({success:false, error:"No blocks found"});
                }
                return callback({success:true, data:r.data["result"]});
            }else{
                return callback({success:false, error:r.error});
            }
        });
    }
}


//const bs = new blockScout("https://blockscout.com/", "poa/core"); //default, debug = false, can pass true
//example
/*
console.log(bs.versions)
console.log(bs.host)
console.log(bs.version)
*/
/*
bs.balance("0x0Fe18f369c7F34208922cAEBbd5d21E131E44692", function(r){
    if(r.success){
        console.log("Balance: " + r.data)
    }else{
        console.log(r.error);
    }
});
*/

/*
bs.balanceMulti("0x0Fe18f369c7F34208922cAEBbd5d21E131E44692,0x11c4469d974f8af5ba9ec99f3c42c07c848c861c", function(r){
    if(r.success){
        console.log("Multi Balance: ")
        console.log(JSON.stringify(r.data))
    }else{
        console.log(r.error);
    }
});
*/
/*
bs.txList("0x0Fe18f369c7F34208922cAEBbd5d21E131E44692", function(r){
    if(r.success){
        console.log("Token Transfers: ")
        console.log(JSON.stringify(r.data))
    }else{
        console.log(r.error);
    }
});
*/
/*
bs.txListInternal("0x759630ce113d098fccf211da4a7c1ce79ffe2c76b477eaf053351b3c356d1a00", function(r){
    if(r.success){
        console.log("TX Internal: ")
        console.log(JSON.stringify(r.data))
    }else{
        console.log(r.error);
    }
});
*/
/*
bs.tokenTxList("0x0Fe18f369c7F34208922cAEBbd5d21E131E44692", function(r){
    if(r.success){
        console.log("Token Transfers: ")
        console.log(JSON.stringify(r.data))
    }else{
        console.log(r.error);
    }
});
*/
/*
bs.tokenBalance("0x11c4469d974f8af5ba9ec99f3c42c07c848c861c&address", "0x0Fe18f369c7F34208922cAEBbd5d21E131E44692", function(r){
    if(r.success){
        console.log("Token Balance: " + r.data)
    }else{
        console.log(r.error);
    }
});
*/
/*
bs.tokenList("0x11c4469d974f8af5ba9ec99f3c42c07c848c861c", function(r){
    if(r.success){
        console.log("Token List: " + JSON.stringify(r.data))
    }else{
        console.log(r.error);
    }
});
*/
/*
bs.getMinedBlocks("0x11c4469d974f8af5ba9ec99f3c42c07c848c861c", function(r){
    if(r.success){
        console.log("Mined Blocks: " + JSON.stringify(r.data))
    }else{
        console.log(r.error);
    }
});
*/
