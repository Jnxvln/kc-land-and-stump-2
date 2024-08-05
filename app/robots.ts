import {MetadataRoute} from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '',
            crawlDelay: 86400
        },
        sitemap: 'https://kclandandstump.com/sitemap.xml'
    };
}