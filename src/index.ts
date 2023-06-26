/**
 * @param {string} name - Name of the cookie
 * @returns {string} Value of the cookie
 * @description Returns the value of the cookie
 */
export const getCookie = (name: string): string => {
    return `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
};

/**
 * @param {string} email - Email to validate
 * @returns {boolean} Is email valid or not
 * @description Validates the email address
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

/**
 * @param {number} digits - Number of digits in the random number
 * @returns {number} Random number
 * @description Returns a random number with the specified number of digits
 */
export const getRandomInt = (digits: number): number => {
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * @returns {string} GUID v4
 * @description Returns a GUID v4 made with random numbers (not cryptographically secure)
 */
export const createGuid = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
