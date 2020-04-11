//BinaryTree_state_ReturnsState.js: Testing logic.

define([
	"BinaryTree",
	"state"
], function(
	BinaryTree,
	state
) {
	return {
		"Name":"BinaryTree_state_ReturnsState",
		"Input": new BinaryTree(),
		"Function": function( Input ) {
			return state.call( Input );
		},
		"Comparator": {
			"Object": true,
		},
		"ExpectedOutput": {
			"Left": undefined,
			"Right": undefined,
			"Value": undefined
		},
		"Debug": true
	};
});
