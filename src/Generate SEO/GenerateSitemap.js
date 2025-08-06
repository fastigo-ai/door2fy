const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

// An array with your links
const links = [
    { url: '/', changefreq: 'daily', priority: 0.3 },
    { url: '/macbook-support', changefreq: 'daily', priority: 0.3 },
    { url: '/laptop-support', changefreq: 'daily', priority: 0.3 },
    { url: '/desktop-support', changefreq: 'daily', priority: 0.3 },
    { url: '/upgrade-support', changefreq: 'daily', priority: 0.3 },
    { url: '/service-support', changefreq: 'daily', priority: 0.3 },
];

// Create a stream to write to
const stream = new SitemapStream({ hostname: 'https://door2fy.com' });

// Return a promise that resolves with your XML string
streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
console.log(data.toString());
});