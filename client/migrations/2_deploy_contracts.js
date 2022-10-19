const Issuer = artifacts.require( "Issuer" );
const Holder = artifacts.require( "Holder" );
const Verifier = artifacts.require( "Verifier" );

module.exports = async function ( deployer, network, accounts ) {
    // Deploy Issuer Contract
    await deployer.deploy( Issuer );
    const issuer = await Issuer.deployed();

    // Deploy Holder Contract
    await deployer.deploy( Holder );
    const holder = await Holder.deployed();

    // Deploy Verifier
    await deployer.deploy( Verifier );
    const verifier = await Verifier.deployed();
};