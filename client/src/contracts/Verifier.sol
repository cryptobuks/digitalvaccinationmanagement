pragma solidity ^0.5.0;
import "./Holder.sol";
import "./Issuer.sol";

contract Verifier {
    string public name = 'Event Control System';
    address public owner;
    Holder public holder;
    Issuer public issuer;
}
