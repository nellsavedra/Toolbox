export const getCookie = (name: string): string => {
    return `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
};