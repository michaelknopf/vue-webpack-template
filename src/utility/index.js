const Utility = {
    isDev: isDev,
    getBaseUrl: getBaseUrl,
}

function isDev() {
    return process.env.NODE_ENV === 'development'
}

function getBaseUrl() {
    let href = "/";
    try {
        href = document.getElementsByTagName('base')[0].href
    } catch (e) {
        console.error("Failed to get base href")
    }
    return href;
}

export default Utility
