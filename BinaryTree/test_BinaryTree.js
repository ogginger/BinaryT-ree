//test_BinaryTree.js: Testing logic for the application.

define([ "TestSuite", "tests/BinaryTree_add_SimpleNode_ReturnsStateWithSimpleNode" ], function( TestSuite, test ) {
return TestSuite.extend({
    "initialize": function() {
      var xTestSuite = this;

      console.log( "TestSuite.add: ", xTestSuite.add.toString() )
      /*
      xTestSuite.add({
        "Name": "test",
        "Input": "",
        "Function": function() { return true; },
        "ExpectedOutput": true
      })
      //*/
      /*
      xTestSuite.add({
        "Name": "test",
        "Input": undefined,
        "Function": function() { return true; },
        "ExpectedOutput": true
      });
      //*/
/*
      xTestSuite.add([{
        "Name": "test",
        "Input": undefined,
        "Function": function() { return true; },
        "ExpectedOutput": true
      }, {
        "Name": "test2",
        "Input": undefined,
        "Function": function() { return true; },
        "ExpectedOutput": true
      }, test ])
//*/
      xTestSuite.test();
    }
  });
});