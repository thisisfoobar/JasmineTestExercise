describe("Helpers test", function () {
  beforeEach(function () {
    allPayments = {
      payment0: {
        billAmt: "500",
        tipAmt: "20",
        tipPercent: "4",
      },
      payment1: {
        billAmt: "250",
        tipAmt: "50",
        tipPercent: "25",
      },
    };
  });
  it("should return a total of values", function () {
    let billTotal = sumPaymentTotal("billAmt");
    let tipTotal = sumPaymentTotal("tipAmt");
    let tipPercentTotal = sumPaymentTotal("tipPercent");

    expect(billTotal).toBe(750);
    expect(tipTotal).toBe(70);
    expect(tipPercentTotal).toBe(29);
  });

  it("should calculate tip percentage", function () {
    let bill = 50;
    let tip = 25;
    let tipPercent = calculateTipPercent(bill, tip);

    expect(tipPercent).toBe(50);
  });

  it("should append new row to table", function () {
    let newTr = document.createElement("tr");
    let testVal = "Hello World";
    newTr.id = "testTdAppend";

    appendTd(newTr, testVal);
    paymentTbody.append(newTr);

    expect(document.getElementById("testTdAppend").innerText).toBe(
      "Hello World"
    );
  });

  it("should append X to delete row", function () {
    let newTr = document.createElement("tr");
    newTr.id = "testRemoveBtn";
    appendDeleteButton(newTr);
    serverTbody.append(newTr)
    expect(document.getElementById("testRemoveBtn").children[0].innerText).toBe("X");
  });

  afterEach(function () {
    allPayments = {};
    if (document.getElementById("testTdAppend")) {
      document.getElementById("testTdAppend").remove();
    }
    if (document.getElementById("testRemoveBtn")) {
        document.getElementById("testRemoveBtn").remove();
      }
  });
});
