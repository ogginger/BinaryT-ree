//state.js: Functional Logic.

define([], function() {
  return function() {
    var BinaryTree = this;
    return {
      "Left": BinaryTree.Left? BinaryTree.Left.state(): undefined,
      "Right": BinaryTree.Right? BinaryTree.Right.state(): undefined,
      "Value": BinaryTree.Value
    };
  };
});
