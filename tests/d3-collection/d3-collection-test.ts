/**
 * Typescript definition tests for d3/d3-collection module
 * 
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Collection from '../../src/d3-collection';

// Preparatory steps --------------------------------------------------------------

let keyValueObj = {
    a: 'test',
    b: 123,
    c: [true, true, false]
};

let keyValueObj2 = {
    a: 'test',
    b: 'same',
    c: 'type'
};

let stringArray: string[],
    anyArray: any[],
    stringKVArray: Array<{ key: string, value: string }>,
    anyKVArray: Array<{ key: string, value: any }>;


let num: number;
let str: string;
let booleanFlag: boolean;

// ---------------------------------------------------------------------
// Test Objects
// ---------------------------------------------------------------------


// test keys(...) signatures ------------------------------------------------------

stringArray = d3Collection.keys(keyValueObj);

stringArray = d3Collection.keys(document); // purely for the fun of it

// test values(...) signatures ------------------------------------------------------

anyArray = d3Collection.values(keyValueObj);
// stringArray = d3Collection.values(keyValueObj); // test fails, as values in keyValueObj are not all strings

stringArray = d3Collection.values(keyValueObj2);
stringArray = d3Collection.values<string>(keyValueObj2);

anyArray = d3Collection.values(document); // purely for the fun of it

// test entries(...) signatures ------------------------------------------------------

anyKVArray = d3Collection.entries(keyValueObj);
// stringKVArray = d3Collection.entres(keyValueObj); // test fails, as values in keyValueObj are not all strings

stringKVArray = d3Collection.entries(keyValueObj2);
stringKVArray = d3Collection.entries<string>(keyValueObj2);

anyKVArray = d3Collection.entries(document); // purely for the fun of it

// ---------------------------------------------------------------------
// map / Map
// ---------------------------------------------------------------------

interface TestObject {
    name: string;
    val: number;
}

let testObject: TestObject;
let testObjArray: Array<TestObject>;
let testObjKVArray: Array<{ key: string, value: TestObject }>;

// Create Map ========================================================

let basicMap: d3Collection.Map<string>;
basicMap = d3Collection.map<string>(); // empty map

// from array with accessor without accessor
basicMap = d3Collection.map(['foo', 'bar']); // map with key-value pairs { '0': 'foo' } and { '1': 'bar'}

// from array with accessor
let testObjMap: d3Collection.Map<TestObject>;
testObjMap = d3Collection.map<TestObject>([{ name: 'foo', val: 10 }, { name: 'bar', val: 42 }], function (value, i, array) {
    return value.name;
});

// from existing map
basicMap = d3Collection.map(basicMap);
// basicMap = d3Collection.map(testObjMap); // fails, as maps have different value type

// from object
let objectMap: d3Collection.Map<any>;
objectMap  = d3Collection.map(keyValueObj);

let objectMap2: d3Collection.Map<string>;
objectMap2  = d3Collection.map(keyValueObj2);


// Use Map ===========================================================

// has(...) ------------------------------------------------------------

booleanFlag = basicMap.has('foo');

// get(...) ------------------------------------------------------------

testObject = testObjMap.get('foo');

// set(...) ------------------------------------------------------------

basicMap = basicMap.set('foo', '42');

// remove(...) ---------------------------------------------------------

booleanFlag = testObjMap.remove('bar');

// clear() -------------------------------------------------------------

basicMap.clear();

// keys() --------------------------------------------------------------

stringArray = testObjMap.keys();

// values() ------------------------------------------------------------

testObjArray = testObjMap.values();


// entries() -----------------------------------------------------------

testObjKVArray = testObjMap.entries();

// each() --------------------------------------------------------------

testObjMap.each(function (value, key, map) {
    let v: TestObject = value;
    let k: string = key;
    let m: d3Collection.Map<TestObject> = map;
    console.log(v.val);
});

// empty() -------------------------------------------------------------

booleanFlag = testObjMap.empty();

// size() --------------------------------------------------------------

num = testObjMap.size();

// ---------------------------------------------------------------------
// set / Set
// ---------------------------------------------------------------------

// Create Set ========================================================

// TODO:
// - from set
// - from array with/without accessor

let basicSet: d3Collection.Set;
basicSet = d3Collection.set(); // empty set

// from array without accessor
basicSet = d3Collection.set(['foo', 'bar', 42]); // last element is coerced

// from array without accessor
basicSet = d3Collection.set(testObjArray, function(value, index, array) {
    let v: TestObject = value;
    let i: number = index;
    let a: Array<TestObject> = array;
    return v.name;
});

// from existing set 

basicSet = d3Collection.set(basicSet);

// Use Set ===========================================================

// has(...) ------------------------------------------------------------

booleanFlag = basicSet.has('foo');

// add(...) ------------------------------------------------------------

basicSet = basicSet
            .add('foo')
            .add('bar')
            .add(42); // will be coerced to string

// remove(...) ---------------------------------------------------------

booleanFlag = basicSet.remove('bar');
booleanFlag = basicSet.remove(42);

// clear() -------------------------------------------------------------

basicSet.clear();

// values() ------------------------------------------------------------

stringArray = basicSet.values();

// each() --------------------------------------------------------------

basicSet.each(function (value, valueRepeat, set) {
    let v: string = value;
    let vr: string = valueRepeat;
    let s: d3Collection.Set = set;
    console.log(v);
});

// empty() -------------------------------------------------------------

booleanFlag = basicSet.empty();

// size() --------------------------------------------------------------

num = basicSet.size();


// ---------------------------------------------------------------------
// nest / Nest
// ---------------------------------------------------------------------

// Create Nest ========================================================


// Use Nest ===========================================================
