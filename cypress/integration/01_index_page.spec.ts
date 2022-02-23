// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
describe("IndexPage のコンポーネントテスト", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("ダミー画像が表示されている", () => {
    cy.get("#root > div > div > div > img").should("be.visible");
  });
});
