describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should update the server table", function () {
    submitServerInfo();
    updateServerTable();
    const updatedServer = document.querySelectorAll("td");
    expect(updatedServer[0].innerHTML).toBe("Alice");
    expect(updatedServer[1].innerText).toBe("$0.00");
  });

  afterEach(function () {
    document.getElementById("server1").remove();
    allServers = {};
    serverId = 0;
  });
});
