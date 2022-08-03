// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

contract HelloWorld {
    string private world;

    function setWorld() external {
        world = "HelloWorld";
    }

    function getWorld() external view returns (string memory) {
        return world;
    }
}
