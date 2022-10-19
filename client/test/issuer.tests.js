const Issuer = artifacts.require( "Issuer" );
const Holder = artifacts.require( "Holder" );
const Verifier = artifacts.require( "Verifier" );

require( 'chai' )
    .use( require( 'chai-as-promised' ) )
    .should();

contract(
    'Issuer', ([issuerEntity, holderEntity]) => {
        // All the code goes here for testing
        let issuer;
        let holder;
        let verifier;

        before(
            async () => {
                //Initialize
            }
        );

        describe(
            'Issuer Deployment', async () => {
                it(
                    'matches name successfully', async () => {
                        const name = await issuer.name();
                        assert.equal( name, 'Vaccination Credential' );
                    }
                );
            }
        );
    }
);