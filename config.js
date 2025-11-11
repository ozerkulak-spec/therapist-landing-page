// Phone Number Configuration Script
// This script updates all phone numbers and WhatsApp links dynamically

document.addEventListener('DOMContentLoaded', function() {
    const config = window.SITE_CONFIG;
    
    if (!config) {
        console.error('SITE_CONFIG not found');
        return;
    }
    
    const formattedPhone = `+${config.countryCode}${config.phoneNumber}`;
    const whatsappLink = `https://wa.me/${config.countryCode}${config.phoneNumber}`;
    const telLink = `tel:${formattedPhone}`;
    
    // Update all WhatsApp links
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.href = whatsappLink;
    });
    
    // Update all phone links
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.href = telLink;
    });
    
    // Update phone number displays
    const phoneDisplays = document.querySelectorAll('.phone-display');
    phoneDisplays.forEach(el => {
        el.textContent = formattedPhone;
    });
    
    // Update email displays
    const emailDisplays = document.querySelectorAll('.email-display');
    emailDisplays.forEach(el => {
        el.textContent = config.email;
        if (el.tagName === 'A') {
            el.href = `mailto:${config.email}`;
        }
    });
    
    // Update location displays
    const locationDisplays = document.querySelectorAll('.location-display');
    locationDisplays.forEach(el => {
        el.textContent = config.location;
    });
    
    console.log('Site configuration applied:', config);
});
