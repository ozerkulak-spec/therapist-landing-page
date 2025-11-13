// Phone Number Configuration Script
// This script updates all phone numbers and WhatsApp links dynamically

document.addEventListener('DOMContentLoaded', function() {
    const config = window.SITE_CONFIG;
    
    if (!config) {
        console.error('SITE_CONFIG not found');
        return;
    }
    
    // Support new structure (SITE_CONFIG.contact) with fallback to legacy fields
    const contact = config.contact || {};
    const countryCode = contact.countryCode || config.countryCode || '';
    const phone = contact.phone || config.phoneNumber || '';
    const email = contact.email || config.email || '';
    const location = contact.location || config.location || '';

    const formattedPhone = countryCode && phone ? `+${countryCode}${phone}` : '';
    const whatsappLink = countryCode && phone ? `https://wa.me/${countryCode}${phone}` : '';
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
        if (email) {
            el.textContent = email;
            if (el.tagName === 'A') {
                el.href = `mailto:${email}`;
            }
        }
    });
    
    // Update location displays
    const locationDisplays = document.querySelectorAll('.location-display');
    locationDisplays.forEach(el => {
        if (location) {
            el.textContent = location;
        }
    });
    
    console.log('Site configuration applied:', {
        phone: formattedPhone,
        email,
        location
    });
});
