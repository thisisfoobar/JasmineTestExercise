describe("Payments test (with setup and tear-down)", function () {
  beforeEach(function () {
    //initialize logic
    billAmtInput.value = 500;
    tipAmtInput.value = 75;
  });

    it("Should create payment info object", function () {
      let testPayObj = {};
      const testPayment = createCurPayment();
      testPayObj = testPayment;

      expect(testPayObj.billAmt).toBe("500");
      expect(testPayObj.tipAmt).toBe("75");
      expect(testPayObj.tipPercent).toBe(15);
    });

    it("should clear input values", function () {
      submitPaymentInfo();

      expect(billAmtInput.value).toBe("");
      expect(tipAmtInput.value).toBe("");
    });

    it("should append to the payment table", function () {
      let curPayment = {
        billAmt: 100,
        tipAmt: 10,
        tipPercent: 10,
      };
      appendPaymentTable(curPayment);

      const billTableVal = document.querySelectorAll("#payment0 td");

      expect(billTableVal[0].innerHTML).toEqual("$100");
      expect(billTableVal[1].innerHTML).toEqual("$10");
      expect(billTableVal[2].innerHTML).toEqual("10%");
    });

  it("should update the summary table", function () {
    allPayments = {
      payment0: {
        billAmt: '300',
        tipAmt: '75',
        tipPercent: '25',
      },
    };
    updateSummary();

    expect(summaryTds[0].innerHTML).toBe("$300");
    expect(summaryTds[1].innerHTML).toBe("$75");
    expect(summaryTds[2].innerHTML).toBe("25%");
  });

  afterEach(function () {
    allPayments = {};
    paymentId = 0;
    billAmtInput.value = "";
    tipAmtInput.value = "";

    const clearBillTable = document.querySelector("#paymentTable tbody");

    for (let bill of clearBillTable.children) {
      bill.remove();
    }
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
  });
});
