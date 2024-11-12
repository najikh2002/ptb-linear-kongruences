function calculateCongruence() {
const a = parseInt(document.getElementById("a").value);
const b = parseInt(document.getElementById("b").value);
const c = parseInt(document.getElementById("c").value);
const resultDiv = document.getElementById("result");
resultDiv.innerHTML = "";

if (isNaN(a) || isNaN(b) || isNaN(c) || c <= 0) {
    resultDiv.innerHTML =
    "<p class='text-danger'>Masukkan nilai a, b, dan c yang valid.</p>";
    return;
}

let steps = [];

// Step 1: Find gcd(a, c) and verify if gcd divides b
const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
const g = gcd(a, c);
steps.push(`gcd(${a}, ${c}) = ${g}`);

if (b % g !== 0) {
    steps.push(`Tidak ada solusi karena gcd tidak membagi ${b}`);
    resultDiv.innerHTML = steps.map((step) => `<p>${step}</p>`).join("");
    MathJax.typeset();
    return;
}

// Step 2: Show initial equation
steps.push(`\\(${g} | ${b}\\)`);
steps.push(`Persamaan: \\(${a}x - ${c}y = ${b}\\)`);

// Euclidean algorithm to get remainders
let x = c,
    y = a,
    quotients = [],
    remainders = [];
while (y !== 0) {
    let quotient = Math.floor(x / y);
    let remainder = x % y;
    steps.push(`\\(${x} = ${y} \\cdot ${quotient} + ${remainder}\\)`);
    quotients.push(quotient);
    remainders.push(remainder);
    x = y;
    y = remainder;
}

steps.push("<b>Langkah kombinasi linear:</b>");
let coeffA = 1,
    coeffB = 0;
let prevCoeffA = 0,
    prevCoeffB = 1;

for (let i = remainders.length - 2; i >= 0; i--) {
    let tempA = coeffA;
    let tempB = coeffB;
    coeffA = prevCoeffA - quotients[i] * coeffA;
    coeffB = prevCoeffB - quotients[i] * coeffB;
    prevCoeffA = tempA;
    prevCoeffB = tempB;
    if (i > 0) {
    steps.push(`\\(= ${a} \\cdot ${coeffA} - ${c} \\cdot ${coeffB}\\)`);
    }
}

// Solution x0, y0
let x0 = coeffA * (b / g);
let y0 = coeffB * (b / g);
x0 = ((x0 % (c / g)) + c / g) % (c / g);

steps.push(
    `Diperoleh: \\(${a} \\cdot ${x0} - ${c} \\cdot ${y0} = ${b}\\)`
);
steps.push(`Nilai awal: \\(x_0 = ${x0}\\), \\(y_0 = ${y0}\\)`);

const solutionModulo = c / g;
steps.push(`Solusi umum: \\(x \\equiv ${x0} + \\frac{${c}}{${g}} t\\)`);

let modularSolutions = [];
for (let t = 0; t <= 4; t++) {
    let xSolution = (x0 + solutionModulo * t) % c;
    xSolution = (xSolution + c) % c;
    modularSolutions.push(
    `\\(x_${t + 1} \\equiv ${xSolution} \\pmod{${c}}\\)`
    );
}

steps.push("<b>Solusi modular:</b>");
steps = steps.concat(modularSolutions);

// Output steps and refresh MathJax rendering
resultDiv.innerHTML = steps.map((step) => `<p>${step}</p>`).join("");
MathJax.typeset();
}
