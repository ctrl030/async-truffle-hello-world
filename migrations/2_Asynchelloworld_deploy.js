const AsyncHelloWorld = artifacts.require("AsyncHelloWorld");

/* module.exports = async function(deployer, network, accounts) {
  deployer.deploy(AsyncHelloWorld).then(function(instance){
    instance.setMessage("Set Message was called and worked.", {value: 100000000000000000, from: accounts[0]}).then(function(){
      console.log("Success");
    }).catch(function(err){
      console.log("this went wrong during setMessage: " + err);
    }); 
  }).catch(function(err){
    console.log("this went wrong during deployment: " + err); 
  }); 
}; */


module.exports = async function(deployer, network, accounts) {

  try {
    
    await deployer.deploy(AsyncHelloWorld); 

    const instance = await AsyncHelloWorld.deployed();
    
    console.log("Me: let instance = await deployer.deploy(AsyncHelloWorld) was run.");
  
    await instance.setMessage("Set Message was called and worked.", {value: 100000000000000000, from: accounts[0]});
    
    console.log("Success");

  }

  catch (err) {
    console.log("Error: " + err)
  }

  /* 
    }).catch(function(err){
      console.log("this went wrong during setMessage: " + err);
    }); 
  }).catch(function(err){
    console.log("this went wrong during deployment: " + err); 
  });  */

};

// test