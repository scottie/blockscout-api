# BlockScount NodeJS

This is a API wrapper for the **BlockScout** explorer. 
All networks are supported, a sample list can be seen by calling bs.versions:

    [ 'poa/core',
      'poa/sokol',
      'eth/mainnet',
      'eth/ropsten',
      'etc/mainnet' ]

To construct the class simply pass it "host" and "version", host should always be "https://blockscout.com/" but if one wants to use mirrors the class is flexable.

    var  bs  =  new  blocks("https://blockscout.com/", "poa/core");


*Example Grab Balance from Address:*

    var bs = new blocks("https://blockscout.com/", "poa/core");
    bs.balance("0x0Fe18f369c7F34208922cAEBbd5d21E131E44692", function(r){
    	if(r.success){
    		console.log("Balance:" + r.data.toString())
    	}else{
    		console.log(r.error)
    	}
    });
# Functions

    npm test
![mocha test.js](https://i.imgur.com/HuFtsKS.png)

# Functions

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


