pragma solidity ^0.5.0;

contract Issuer {
    string public name = 'Vaccination Credential';
    string public symbol = 'VC';
    uint256 public totalSupply = 1000000000000000000000000; // 1 million tokens
    uint8 public decimals = 18;

    event Issue (
        address indexed _from,
        address indexed _to,
        uint _value
    );

    event Approval (
        address indexed _issuer,
        address indexed _holder,
        uint _value
    );

    mapping ( address => uint256 ) public credentialOf;

    mapping ( address => mapping ( address => uint256 ) ) public allowance;

    constructor () public {
        credentialOf[ msg.sender ] = totalSupply;
    }

    function approve ( address _holder, uint256 _value ) public returns ( bool success ) {
        allowance[ msg.sender ][ _holder ] = _value;

        emit Approval ( msg.sender, _holder, _value );

        return true;
    }

    function issueCredential ( address _to, uint256 _value ) public returns ( bool success ) {
        // require that the value is greater or equal for transfer
        require( credentialOf[ msg.sender ] >= _value );
        // issue the approvalStatus to holder
        credentialOf[ _to ] += _value;

        emit Issue( msg.sender, _to, _value );

        return true;
    }

    // revokes validity of credential
    function revokeCredential ( address _from, address _to, uint256 _value ) public returns ( bool success ) {
        // TODO
        return true;
    }

    // checks validity of credential
    function verifyCredential ( address _from, address _to, uint256 _value ) public returns ( bool success ) {
        // TODO
        return true;
    }

    // third party accessing credential (Verifier)
    function verifyCredentialFrom ( address _from, address _to, uint256 _value ) public returns ( bool success ) {
        // TODO
        return true;
    }
}
