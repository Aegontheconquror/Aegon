// script.js for agribusiness website functionality

// M-Pesa Integration
function initiateMpesaPayment() {
    // Logic for initiating M-Pesa payment
}

// WhatsApp Integration
function openWhatsApp() {
    const phoneNumber = '+254700000000'; // Replace with actual number
    const message = 'Hello, I need assistance...';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

// Event Listeners
document.getElementById('mpesaButton').addEventListener('click', initiateMpesaPayment);
document.getElementById('whatsappButton').addEventListener('click', openWhatsApp);

// Other functionalities related to agribusiness can be added here