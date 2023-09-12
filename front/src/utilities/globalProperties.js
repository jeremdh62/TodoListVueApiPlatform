let docStyle = getComputedStyle(document.documentElement);

// colors
export let Colors = {
    blue: docStyle.getPropertyValue('--bs-blue'),
    indigo: docStyle.getPropertyValue('--bs-indigo'),
    purple: docStyle.getPropertyValue('--bs-purple'),
    pink: docStyle.getPropertyValue('--bs-pink'),
    red: docStyle.getPropertyValue('--bs-red'),
    orange: docStyle.getPropertyValue('--bs-orange'),
    yellow: docStyle.getPropertyValue('--bs-yellow'),
    green: docStyle.getPropertyValue('--bs-green'),
    teal: docStyle.getPropertyValue('--bs-teal'),
    cyan: docStyle.getPropertyValue('--bs-cyan'),
    black: docStyle.getPropertyValue('--bs-black'),
    white: docStyle.getPropertyValue('--bs-white'),
    gray: docStyle.getPropertyValue('--bs-gray'),
    grayDark: docStyle.getPropertyValue('--bs-gray-dark'),
    gray100: docStyle.getPropertyValue('--bs-gray-100'),
    gray200: docStyle.getPropertyValue('--bs-gray-200'),
    gray300: docStyle.getPropertyValue('--bs-gray-300'),
    gray400: docStyle.getPropertyValue('--bs-gray-400'),
    gray500: docStyle.getPropertyValue('--bs-gray-500'),
    gray600: docStyle.getPropertyValue('--bs-gray-600'),
    gray700: docStyle.getPropertyValue('--bs-gray-700'),
    gray800: docStyle.getPropertyValue('--bs-gray-800'),
    gray900: docStyle.getPropertyValue('--bs-gray-900'),
    primary: docStyle.getPropertyValue('--bs-primary'),
    secondary: docStyle.getPropertyValue('--bs-secondary'),
    success: docStyle.getPropertyValue('--bs-success'),
    info: docStyle.getPropertyValue('--bs-info'),
    warning: docStyle.getPropertyValue('--bs-warning'),
    danger: docStyle.getPropertyValue('--bs-danger'),
    light: docStyle.getPropertyValue('--bs-light'),
    dark: docStyle.getPropertyValue('--bs-dark'),
    darker: docStyle.getPropertyValue('--bs-darker'),
    bodyColor: docStyle.getPropertyValue('--bs-body-color'),
    bodyBg: docStyle.getPropertyValue('--bs-body-bg'),
    borderColor: docStyle.getPropertyValue('--bs-border-color'),
    borderColorTranslucent: docStyle.getPropertyValue('--bs-border-color-translucent'),
    headingColor: docStyle.getPropertyValue('--bs-heading-color'),
    linkColor: docStyle.getPropertyValue('--bs-link-color'),
    linkHoverColor: docStyle.getPropertyValue('--bs-link-hover-color'),
    codeColor: docStyle.getPropertyValue('--bs-code-color'),
    highlightBg: docStyle.getPropertyValue('--bs-highlight-bg'),
};

// list of all months in english word
export let monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


let getToday = function(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    return yyyy + '-' + mm + '-' + dd;
};
export let today = getToday();


let getTesterday = function(){
    let today = new Date();
    let yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    let y_dd = String(yesterday.getDate()).padStart(2, '0');
    let y_mm = String(yesterday.getMonth() + 1).padStart(2, '0');
    let y_yyyy = yesterday.getFullYear();

    return  y_yyyy + '-' + y_mm + '-' + y_dd;
};
export let yesterday = getTesterday();

let getCurrentMonth = function(){
    let today = new Date();
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    return yyyy + '-' + mm;
};

export let currentMonth = getCurrentMonth();

export let Break = { mb: 420, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1540, any: Infinity };
