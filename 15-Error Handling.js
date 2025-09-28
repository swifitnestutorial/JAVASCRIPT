let a = prompt("Enter a numner")

let b = prompt("Enter second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("sorry this is not allowed");

}
let sum = parseInt(a) + parseInt(b)

function main() {
    let X = 1;
    try {
        console.log("the sum is ", sum * X)
        return true

    } catch (error) {
        console.log("Error aaa gaya bhai")
        return false
    }
    finally {
        console.log("files are being closed and db connection is being closed")
    }
}

let c = main()