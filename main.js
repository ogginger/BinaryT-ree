//node_main.js: Main logic for Node application.
/* This file depends on nodejs and the nodejs module requirejs. */

var requirejs = require("requirejs");
var config = require("./require_config");

requirejs.config(config);

requirejs([ "test_BinaryTree"/*, "file","Snip","code" //*/], function(test_BinaryTree,file,Snip,code) {
	console.log("Main initialized successfully!");
	new test_BinaryTree();

	//var sTestName = "BinaryTree_add_SimpleNode_ReturnsStateWithSimpleNode";
	//var sFunctionName = "add";
	//console.log( sTestName );
	//code(__dirname).
	
	/*
	addDependency({
		"FileName": "BinaryTree/test_BinaryTree.js",
		"Dependency": "tests/" + sTestName,
		"Export": sTestName
	}).catch(function( error ) {
		console.log( error );
	});
	//*/

	/*
	Snip.render({
		"TemplateType": "function",
		"Options": {
			"Name": sFunctionName
		},
		"FileName": "BinaryTree/Functions/" + sFunctionName + ".js"
	});
	//*/
	
	/*
	Snip.render({
		"TemplateType": "test",
		"Options": {
			"Name": sTestName,
			"Method": "BinaryTree"
		},
		"FileName": "BinaryTree/tests/" + sTestName + ".js"
	});
	//*/
	
	//code.create("BinaryTree")

	
});