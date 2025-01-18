import Bank from "../src/bank";

// Setup
const bank = new Bank();
const account = bank.createAccount("Alice Johnson", 34, "9876543");

// Scenario 1: Successful account creation
if (account.customerAccountNumber === "9876543") {
    console.log("Scenario 1 passed");
} else {
    console.log("Scenario 1 failed");
}

// Scenario 2: Account already exists
try {
    bank.createAccount("Alice Johnson", 34, "9876543");
    console.log("Scenario 2 failed");
} catch (_) {
    console.log("Scenario 2 passed");
}

// Scenario 3: Successful deposit
try {
    bank.deposit(200, "9876543");
    console.log("Scenario 3 passed");
} catch (_) {
    console.log("Scenario 3 failed");
}

// Scenario 4: Negative deposit
try {
    bank.deposit(-50, "9876543");
    console.log("Scenario 4 failed");
} catch (_) {
    console.log("Scenario 4 passed");
}

// Scenario 5: Non-existent account
try {
    bank.deposit(150, "1111111");
    console.log("Scenario 5 failed");
} catch (_) {
    console.log("Scenario 5 passed");
}

// Scenario 6: Successfully withdraw
try {
    bank.withdraw(50, "9876543");
    console.log("Scenario 6 passed");
} catch (_) {
    console.log("Scenario 6 failed");
}

// Scenario 7: Insufficient funds
try {
    bank.withdraw(1000, "9876543");
    console.log("Scenario 7 failed");
} catch (_) {
    console.log("Scenario 7 passed");
}

// Scenario 8: Invalid withdrawal amount
try {
    bank.withdraw(-20, "9876543");
    console.log("Scenario 8 failed");
} catch (_) {
    console.log("Scenario 8 passed");
}

// Scenario 9: Successful balance check
try {
    const bal = bank.balanceCheck("9876543");
    if (bal === account.accountBalance) {
        console.log("Scenario 9 passed");
    } else {
        console.log("Scenario 9 failed");
    }
} catch (_) {
    console.log("Scenario 9 failed");
}

// Scenario 10: Invalid account
try {
    bank.balanceCheck("1111111");
    console.log("Scenario 10 failed");
} catch (_) {
    console.log("Scenario 10 passed");
}
