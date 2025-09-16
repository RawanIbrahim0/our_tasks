let students = [
    {
        name: "Kamal",
        grad: 55
    },
    {
        name: "Ahmad",
        grad: 95
    },
    {
        name: "Sara",
        grad: 92
    },
    {
        name: "Majed",
        grad: 62
    },
    {
        name: "Omar",
        grad: 95
    },
    {
        name: "Lina",
        grad: 90
    },
    {
        name: "Maram",
        grad: 85
    },


]

let tuition = 3000000;

let discount = [0.75, 0.50, 0.30]
console.log("\n------------------------------------------------------")

console.log("\nGrade Students : \n")

students.forEach((student) => {
    console.log(student.name + " : " + student.grad)
})

console.log("\n------------------------------------------------------")

let sorted_students = students.sort((a, b) => b.grad - a.grad)

let ranks = []
sorted_students.forEach(student => {
    if (!ranks.includes(student.grad)&& ranks.length < 3) {
        ranks.push(student.grad)
    }
});

let results = [];
sorted_students.forEach(student => {
    let rankIndex = ranks.indexOf(student.grad);
    if (rankIndex !== -1 && rankIndex < 3){
        let discountValue = tuition * discount[rankIndex];
        let finalPayment = tuition - discountValue;
        results.push({
            name: student.name,
            grad: student.grad,
            discount: discountValue,
            paid: finalPayment
        });
    }
});

console.log("\nTop students and discounts: \n")
results.forEach((student) => {
    console.log(student.name + " : " + student.grad + " , " + "Discount " + student.discount + " SP , " + "Paid " + student.paid)
})
console.log("\n------------------------------------------------------")

