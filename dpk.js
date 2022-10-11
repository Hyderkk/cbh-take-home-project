const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  debugger;
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }

  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }

    if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
      candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
    }

  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }
  
  return candidate;
};


//move below chunk in  if (candidate) block becaue of  if (candidate) condition is false it will never comes in below block si it should be in in  if (candidate) block.

//  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
//   candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
// }