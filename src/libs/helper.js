export const pageview = url => {
    window.gtag("config", process.env.NEXT_PUBLIC_Google_Analytics, {
        page_path: url,
    });
};