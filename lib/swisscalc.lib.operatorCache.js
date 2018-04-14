//
// Eric Morgan
// Copyright (c) 2014. 
//

// Cache for storing operators (rather than instantiating new ones).
// To create a new operator, add it to the cache as a new global.swisscalc.lib.operator, filling in the properties and evaluate() function.
global.swisscalc = global.swisscalc || {};
global.swisscalc.lib = global.swisscalc.lib || {};
global.swisscalc.lib.operatorCache = function() { };

global.swisscalc.lib.operatorCache.AdditionOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_BINARY, global.swisscalc.lib.operator.ASSOCIATIVITY_LEFT, 2, 2, false, false, function(sy) {
		var op1 = sy.popOperand();
		var op2 = sy.popOperand();
		return op1 + op2;
});

global.swisscalc.lib.operatorCache.SubtractionOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_BINARY, global.swisscalc.lib.operator.ASSOCIATIVITY_LEFT, 2, 2, false, false, function(sy) {
		var op1 = sy.popOperand();
		var op2 = sy.popOperand();
		return op2 - op1;
});

global.swisscalc.lib.operatorCache.MultiplicationOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_BINARY, global.swisscalc.lib.operator.ASSOCIATIVITY_LEFT, 3, 2, false, false, function(sy) {
		var op1 = sy.popOperand();
		var op2 = sy.popOperand();
		return op1 * op2;
});

global.swisscalc.lib.operatorCache.DivisionOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_BINARY, global.swisscalc.lib.operator.ASSOCIATIVITY_LEFT, 3, 2, false, false, function(sy) {
		var op1 = sy.popOperand();
		var op2 = sy.popOperand();
		return op2 / op1;
});

global.swisscalc.lib.operatorCache.ModulusOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_BINARY, global.swisscalc.lib.operator.ASSOCIATIVITY_LEFT, 3, 2, false, false, function(sy) {
		var op1 = sy.popOperand();
		var op2 = sy.popOperand();
		return op2 % op1;
});

global.swisscalc.lib.operatorCache.ExponentialOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_BINARY, global.swisscalc.lib.operator.ASSOCIATIVITY_RIGHT, 4, 2, false, false, function(sy) {
		var op1 = sy.popOperand();
		var op2 = sy.popOperand();
		return Math.pow(op2, op1);
});

global.swisscalc.lib.operatorCache.RootOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_BINARY, global.swisscalc.lib.operator.ASSOCIATIVITY_RIGHT, 4, 2, false, false, function(sy) {
		var op1 = sy.popOperand();
		var op2 = sy.popOperand();
		return Math.pow(op2, 1.0 / op1);
});

global.swisscalc.lib.operatorCache.EEOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_BINARY, global.swisscalc.lib.operator.ASSOCIATIVITY_RIGHT, 10, 2, false, false, function(sy) {
		var op1 = sy.popOperand();
		var op2 = sy.popOperand();
		return op2 * Math.pow(10.0, op1);
});

global.swisscalc.lib.operatorCache.PiOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_NULLARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 0, false, false, function(sy) {
		return Math.PI;
});

global.swisscalc.lib.operatorCache.EOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_NULLARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 0, false, false, function(sy) {
		return Math.E;
});

global.swisscalc.lib.operatorCache.RandomOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_NULLARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 0, false, false, function(sy) {
		return Math.random();
});

global.swisscalc.lib.operatorCache.NegateOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return -1.0 * op;
});

global.swisscalc.lib.operatorCache.InverseOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return 1.0 / op;
});

global.swisscalc.lib.operatorCache.EExponentialOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return Math.pow(Math.E, op);
});

global.swisscalc.lib.operatorCache.TenExponentialOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return Math.pow(10.0, op);
});

global.swisscalc.lib.operatorCache.SquareRootOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return Math.sqrt(op);
});

global.swisscalc.lib.operatorCache.CubeRootOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return Math.cbrt(op);
});

global.swisscalc.lib.operatorCache.XSquaredOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return op * op;
});

global.swisscalc.lib.operatorCache.XCubedOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return Math.pow(op, 3);
});

global.swisscalc.lib.operatorCache.PercentOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return op / 100.0;
});

global.swisscalc.lib.operatorCache.LogBase10Operator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return Math.log(op) / Math.LN10;
});

global.swisscalc.lib.operatorCache.NaturalLogOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return Math.log(op);
});

global.swisscalc.lib.operatorCache.SineOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return Math.sin(op);
});

global.swisscalc.lib.operatorCache.CosineOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return Math.cos(op);
});

global.swisscalc.lib.operatorCache.TangentOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return Math.tan(op);
});

global.swisscalc.lib.operatorCache.ArcSineOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return Math.asin(op);
});

global.swisscalc.lib.operatorCache.ArcCosineOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return Math.acos(op);
});

global.swisscalc.lib.operatorCache.ArcTangentOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return Math.atan(op);
});

global.swisscalc.lib.operatorCache.SineDegreesOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return Math.sin(global.swisscalc.lib.operator.degreesToRadians(op));
});

global.swisscalc.lib.operatorCache.CosineDegreesOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return Math.cos(global.swisscalc.lib.operator.degreesToRadians(op));
});

global.swisscalc.lib.operatorCache.TangentDegreesOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return Math.tan(global.swisscalc.lib.operator.degreesToRadians(op));
});

global.swisscalc.lib.operatorCache.ArcSineDegreesOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return global.swisscalc.lib.operator.radiansToDegrees(Math.asin(op));
});

global.swisscalc.lib.operatorCache.ArcCosineDegreesOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return global.swisscalc.lib.operator.radiansToDegrees(Math.acos(op));
});

global.swisscalc.lib.operatorCache.ArcTangentDegreesOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return global.swisscalc.lib.operator.radiansToDegrees(Math.atan(op));
});

global.swisscalc.lib.operatorCache.HyperbolicSineOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return 0.5 * (Math.pow(Math.E, op) - Math.pow(Math.E, -1.0 * op));
});

global.swisscalc.lib.operatorCache.HyperbolicCosineOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return 0.5 * (Math.pow(Math.E, op) + Math.pow(Math.E, -1.0 * op));
});

global.swisscalc.lib.operatorCache.HyperbolicTangentOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return (1 - Math.pow(Math.E, -2.0 * op)) / (1 + Math.pow(Math.E, -2.0 * op));
});

global.swisscalc.lib.operatorCache.InverseHyperbolicSineOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return Math.log(op + Math.sqrt((op * op) + 1));
});

global.swisscalc.lib.operatorCache.InverseHyperbolicCosineOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return Math.log(op + Math.sqrt((op * op) - 1));
});

global.swisscalc.lib.operatorCache.InverseHyperbolicTangentOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_UNARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 1, false, false, function(sy) {
		var op = sy.popOperand();
		return 0.5 * Math.log((1 + op) / (1 - op));
});

global.swisscalc.lib.operatorCache.OpenParenOperator	= new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_NULLARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 0, true, false, function(sy) {
		console.error("Cannot evaluate open parenthesis.");
});

global.swisscalc.lib.operatorCache.CloseParenOperator = new global.swisscalc.lib.operator(
	global.swisscalc.lib.operator.ARITY_NULLARY, global.swisscalc.lib.operator.ASSOCIATIVITY_NONE, 0, 0, false, true, function(sy) {
		console.error("Cannot evaluate close parenthesis.");
});