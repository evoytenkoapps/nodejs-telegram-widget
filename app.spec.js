const assert = require("assert").strict;
const request = require("supertest");
const server = require("./app").server;
const testData = require("./test/data");

describe("app.js", function() {
  it("Большие буквы мата должны блокировться", async () => {
    await request(server)
      .post("/auth")
      .send(testData)
      .expect(res => {
        assert.deepStrictEqual(res.body.success, true);
      });
  });
});
