//ASYNC/AWAIT
function findAbsolute(n) {
    return new Promise((resolve, reject) => {
        if (n >= 0) resolve("Absolute value!!");
        else reject("Invalid");
    });
}

async function findResult(n) {
    try {
        const result = await findAbsolute(n);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

findResult(5);   // Absolute value!!
findResult(-3);  // Invalid