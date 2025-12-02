import React from "react";
import { Helmet } from "react-helmet-async";

export default function SEO({ title, description, keywords }) {
    const siteTitle = "Danar Septiyanto";
    const fullTitle = title ? `${title} - ${siteTitle}` : siteTitle;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
            <meta property="og:title" content={fullTitle} />
            {description && (
                <meta property="og:description" content={description} />
            )}
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            {description && (
                <meta name="twitter:description" content={description} />
            )}
        </Helmet>
    );
}
