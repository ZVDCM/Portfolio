import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { ENV } from './config/env';

export function middleware(request: NextRequest) {
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

    const cspHeader = `
        default-src 'self';
        connect-src 'self';
        script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${ENV.NODE_ENV === 'development' ? "'unsafe-eval'" : ''};
        style-src 'self' 'unsafe-inline';
        img-src 'self' blob: data:;
        font-src 'self';
        object-src 'none';
        base-uri 'self';
        form-action 'self';
        frame-ancestors 'none';
        upgrade-insecure-requests;
    `;

    const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, ' ').trim();

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-nonce', nonce);

    requestHeaders.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
    response.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue);

    return response;
}

export const config = {
    matcher: [
        {
            source: '/((?!api|_next/static|_next/image|images|favicon.ico|sitemap.xml|robots.txt).*)',
            missing: [
                { type: 'header', key: 'next-router-prefetch' },
                { type: 'header', key: 'purpose', value: 'prefetch' },
            ],
        },
    ],
};
