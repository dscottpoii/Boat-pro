// Configuration - UPDATE THESE VALUES
const CONFIG = {
    // Formspree form endpoint (sign up at formspree.io)
    formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
    
    // Stripe Payment Link (create at stripe.com/dashboard)
    stripePaymentLink: 'https://buy.stripe.com/YOUR_LINK_HERE',
    
    // PDF file name
    pdfFileName: 'annapolis-boat-show-guide.pdf',
};

// Email validation
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Handle form submission
async function handleSubmit() {
    const email = document.getElementById('email').value.trim();
    
    if (!email || !isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    try {
        await fetch(CONFIG.formspreeEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                _subject: 'New Boat Show Guide Signup'
            })
        });
        
        alert('Success! Check your email for the guide.');
    } catch (error) {
        alert('Error. Please try again.');
    }
}