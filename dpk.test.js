const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

let test = {partitionKey:"John"};


describe("deterministicPartitionKey", () => {
  it("Returns the literal input when given partitionKey < MAX_PARTITION_KEY_LENGTH", () => {
    const trivialKey = deterministicPartitionKey(test);
    expect(trivialKey).toBe("John");
  });
});

test = {partitionKey:"931f4c13527fce34bc400c5d7fa20f43d94465e202fdc88436d06bb9afc4e0c5fa896507cf161crtrt993c6110757304f8ea8a85a4ce36f4312baafb13659379fdad225612dc1cc667a062a33da07924da3288fd79d647cc7ae26eeb51a68a701c956c411a7ab7fd51ccdcab9903988b76ceb221a703a0543f55190f92c2dad214bb"};

describe("deterministicPartitionKey", () => {
  it("Returns the hash value if input given partitionKey > MAX_PARTITION_KEY_LENGTH", () => {
    const trivialKey = deterministicPartitionKey(test);
    expect(trivialKey.length.toString()).toBe("128");     // have no experience to write unit test in javascript but this will retuen hash value
  });
});


describe("deterministicPartitionKey", () => {
  it("Returns the hash value if input given any string", () => {
    const trivialKey = deterministicPartitionKey(test);
    expect(trivialKey.length.toString()).toBe("128");  //  have no experience to write unit test in javascript but this will retuen hash value
  });
});