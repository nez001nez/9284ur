   
    const captchaVerified = sessionStorage.getItem('captchaVerified');
    if (!captchaVerified || captchaVerified !== 'true') {
        const currentPagePath = window.location.pathname;
        window.location.href = 'captcha.html' + currentPagePath.substring(1);
    }

