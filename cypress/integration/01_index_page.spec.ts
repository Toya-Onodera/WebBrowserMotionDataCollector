// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
describe("IndexPage の UI テスト", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("端末情報カードが存在している", () => {
    // テキストが存在していることを確認する
    cy.get("#root > div > article:nth-of-type(1) > h2").contains("端末情報");
  });

  it("センサ情報カードが存在している", () => {
    // テキストが存在していることを確認する
    cy.get("#root > div > article:nth-of-type(2) > h2").contains("センサ情報");
  });

  it("センサオン/オフボタン(FAB)が存在している", () => {
    // 要素が存在していることを確認する
    cy.get("#root > button").should("be.visible");
  });

  it("センサオンにしたあと、「実行中」のセンサ使用情報が表示される", () => {
    // まずはクリックして要素を表示させる
    cy.get("#root > button").click();

    // テキストが存在していることを確認する
    cy.get("#root > div:nth-of-type(2)").should("be.visible");
    cy.get("#root > div:nth-of-type(2) > span").contains("実行中");
  });
});
