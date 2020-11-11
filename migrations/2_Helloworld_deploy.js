const HelloWorld = artifacts.require("HelloWorld");

module.exports = async function(deployer, network, accounts) {
  deployer.deploy(HelloWorld).then(function(instance){
    instance.setMessage("Hey there!", {value: 100000000000000000, from: accounts[0]}).then(function(){
      console.log("Success");
    }).catch(function(err){
      console.log("this went wrong during setMessage: " + err);
    }); 
  }).catch(function(err){
    console.log("this went wrong during deployment: " + err); 
  }); 
};
