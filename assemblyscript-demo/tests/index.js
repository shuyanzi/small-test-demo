import assert from "assert";
import { add } from "../build/release.js";
assert.strictEqual(add(1, 2), 6);
console.log("ok", add(1, 2));
