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

    const address = email.split("@");
    if (address[0].length > 64) return false;

    const domain = address[1].split(".");
    if (domain.some((item) => item.length > 63)) return false;

    return true;
};