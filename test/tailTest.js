const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {

  const result = ["Hello", "Lighthouse", "Labs"];

  it("returns 'Lighthouse' for tail(result)[0]", () => {
    assert.strictEqual(tail(result)[0], "Lighthouse");
  });

  it("returns '2' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(result).length, 2); 
  });

  it("returns 'Labs' for tail(result)[1]", () => {
    assert.strictEqual(tail(result)[1], "Labs");
  });
  
});