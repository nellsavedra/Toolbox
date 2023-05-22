/**
 * @param {string} name - Name of the cookie
 * @returns {string} Value of the cookie
 */
export const getCookie = (name: string): string => {
    return `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
};

/**
 * @param {string} email - Email to validate
 * @returns {boolean} Is email valid or not
 */
export const isEmailValid = (email: string): boolean => {
    if (!email) return false;
    if (email.length > 254) return false;

    const tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    const valid = tester.test(email);
    if (!valid) return false;

    const parts = email.split("@");
    if (parts[0].length > 64) return false;

    const domainParts = parts[1].split(".");
    if (domainParts.some((part) => part.length > 63)) return false;

    return true;
};