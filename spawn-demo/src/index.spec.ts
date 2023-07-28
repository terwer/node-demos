import { describe, expect, it } from "vitest"
import init from "./index"

describe("spawn-demo", () => {
  it("index", () => {
    expect(init()).toBe("ok")
  })
})
