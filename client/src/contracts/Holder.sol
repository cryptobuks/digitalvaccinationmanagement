pragma solidity ^0.5.0;
import "./Issuer.sol";
import "./Verifier.sol";

contract Holder {
    string public name = 'Holder';
    address public owner;
    Issuer public issuer;
    Verifier public verifier;

    // requests for credential
    function registerForCredentialIssuance ( ) public {
        // TODO
    }

    // requests for credential
    function requestCredential ( ) public {
        // TODO
    }
}
