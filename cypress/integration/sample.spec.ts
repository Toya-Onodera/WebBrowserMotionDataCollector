// import { describe } from "mocha";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
describe("Check text", () => {
  it("check text", () => {
    cy.visit("/");

    // code タグ内にテキストが存在することを確認する
    cy.contains("code", "src/App.tsx");
  });
});
