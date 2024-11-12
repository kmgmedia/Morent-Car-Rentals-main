// Add event listeners for the payment method radio buttons
document.addEventListener('DOMContentLoaded', function() {
    const paymentOptions = document.querySelectorAll('input[name="payment"]');
    const paymentDetails = document.getElementById('payment-details');

    // Function to update the payment fields
    function updatePaymentFields() {
        const selectedPayment = document.querySelector('input[name="payment"]:checked').value;
        let paymentFields = '';

        if (selectedPayment === 'credit-card') {
            paymentFields = `
                <label for="card-number">Card Number</label>
                <input type="text" id="card-number" placeholder="1234 5678 9012 3456">
                
                <label for="expiry-date">Expiry Date</label>
                <input type="text" id="expiry-date" placeholder="MM/YY">
                
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" placeholder="123">
            `;
        } else if (selectedPayment === 'paypal') {
            paymentFields = `
                <label for="paypal-email">PayPal Email</label>
                <input type="email" id="paypal-email" placeholder="you@example.com">
            `;
        } else if (selectedPayment === 'bitcoin') {
            paymentFields = `
                <label for="bitcoin-address">Bitcoin Wallet Address</label>
                <input type="text" id="bitcoin-address" placeholder="1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa">
            `;
        }

        paymentDetails.innerHTML = paymentFields; // Update the payment details section
    }

    // Add change event listener for all payment options
    paymentOptions.forEach(option => {
        option.addEventListener('change', updatePaymentFields);
    });

    // Initialize the form with the selected option's payment fields
    updatePaymentFields();
});
