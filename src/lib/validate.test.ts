import { describe, it, expect } from "vitest";
import { validateVolunteer } from "./validate";

describe("validateVolunteer", () => {
  it("accepts a valid name and email", () => {
    expect(
      validateVolunteer({ name: "Arpita", email: "arpita@example.com" })
    ).toBeNull();
  });

  it("rejects an empty name", () => {
    expect(validateVolunteer({ name: "", email: "a@b.com" })).toBe(
      "Name is required"
    );
  });

  it("rejects an invalid email", () => {
    expect(validateVolunteer({ name: "Arpita", email: "bad" })).toBe(
      "A valid email is required"
    );
  });
});