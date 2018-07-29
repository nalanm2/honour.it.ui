export default function () {
    if (window.location.hostname === 'honourit.com.au') {
        const apiBase = 'https://api.honourit.com.au';
        return {
            url: apiBase,
            slug: 'honour-it',
            env: 'prod',
            resources: 'https://api.honourit.com.au/resources',
        };
    }
    return {
        url: 'https://localhost:8080/api',
        slug: 'honour-it',
        env: 'dev',
        resources: 'http://localhost:8080/resources',
    };
}