After cloning the demo repository, please follow the steps below to setup the ethereum dev environment. 

**The below instructions are for MAC users**

To start with, you will need to install some tools:

### For all environments

1. Node JS Latest Current v8.8.1 (https://nodejs.org/en/download/)
2. Editor (Sublime Text, Atom or Visual Studio Code)
3. Download Ethereum-Solidity package/plugin for the chosen editor :
    * Ethereum package for Sublime Text
    * atom-solidity-linter for Atom
    * solidity for VS Code


**Now to install testrpc & web3, run the below command:**

npm install -g ethereumjs-testrpc

**Install truffle**

npm install -g truffle

**Now to install the repository specific dependencies. Change the directory in your terminal to the cloned repo:**

npm install

That's it. Now you are all set to start blockchaining!!!

**To compile the contract**

truffle compile

**To deploy the contract**

truffle deploy (Save the address at which the contract is deployed for future use). Below is the highlighted text of address on terminal:

```
Using network 'development'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0xb8835c7b4b7f9274ad8d2e08605dc0a21b5815d42b101087f99efef19deef317
  Migrations: 0x533675db9fbaf0e1438bb787946f3fd3e44aab88
Saving successful migration to network...
  ... 0x5ff5defa179f3033dce3515fa3e6cd26942171d724510091d7d721080e3c1195
Saving artifacts...
Running migration: 2_helloEthereum_migration.js
  Deploying HelloEthereum...
  ... 0x14b509d7e4353edfc77460c887ca210da47036c7237cd72ec0576de248cd364b
  HelloEthereum: `0xabfb01a7dd39cfeaa733061e5823d0beee7ed287`
Saving successful migration to network...
  ... 0x761b17755241169ad99cce5730480e854b948cb363c1a981396ab5c77d914f74
Saving artifacts...

```

