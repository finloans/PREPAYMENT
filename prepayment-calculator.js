function calculatePrepayment() {
    // Get input values
    let loanAmount = parseFloat(document.getElementById('loanAmount').value);
    let interestRate = parseFloat(document.getElementById('interestRate').value);
    let tenureYears = parseFloat(document.getElementById('tenure').value);
    let prepaymentAmount = parseFloat(document.getElementById('prepaymentAmount').value);

    // Check if all inputs are filled
    if (!loanAmount || !interestRate || !tenureYears || !prepaymentAmount) {
        document.getElementById('prepaymentResult').innerText = "Please fill out all fields correctly.";
        return;
    }

    // Convert tenure from years to months
    let tenureMonths = tenureYears * 12;

    // Monthly interest rate
    let monthlyInterestRate = (interestRate / 12) / 100;

    // Calculate EMI before prepayment
    let emiBeforePrepayment = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureMonths)) / 
                              (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);

    // Calculate the new loan amount after prepayment
    let newLoanAmount = loanAmount - prepaymentAmount;

    // Calculate EMI after prepayment
    let emiAfterPrepayment = (newLoanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureMonths)) / 
                             (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);

    // Calculate savings in EMI
    let emiSavings = emiBeforePrepayment - emiAfterPrepayment;

    // Display the results
    document.getElementById('prepaymentResult').innerHTML = `
        <strong>EMI Before Prepayment: ₹${emiBeforePrepayment.toFixed(2)}</strong><br>
        <strong>EMI After Prepayment: ₹${emiAfterPrepayment.toFixed(2)}</strong><br>
        <strong>Monthly EMI Savings: ₹${emiSavings.toFixed(2)}</strong>
    `;
}

