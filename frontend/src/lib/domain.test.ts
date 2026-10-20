import { test } from "node:test";
import assert from "node:assert/strict";
import { filterProperties, validateEnquiry } from "./domain.ts";
const inventory = [{ id: "a", name: "Example", location: "Wayanad", type: "Cottage" as const, guests: 2, price: 5000, mood: "Quiet", image: "forest" }];
test("search combines location and capacity without changing inventory", () => { assert.equal(filterProperties(inventory, { location: "Wayanad", guests: 2 }).length, 1); assert.equal(filterProperties(inventory, { location: "Wayanad", guests: 3 }).length, 0); assert.equal(filterProperties(inventory, { location: "Poovar", guests: 1 }).length, 0); assert.equal(inventory.length, 1); });
test("validation rejects whitespace, malformed email and short messages", () => { assert.ok(Object.values(validateEnquiry({ name: " ", email: "bad@", message: "short" })).every(Boolean)); assert.ok(Object.values(validateEnquiry({ name: "Nidhi", email: "owner@example.com", message: "A home in Kerala." })).every(value => !value)); });
