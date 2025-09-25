/**
 * Cloudflare Worker for serving Docusaurus static site on /spdockit route
 * This worker handles routing and serves static assets for testforce.uk/spdockit
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Handle requests to /spdockit route
    let pathname = url.pathname;
    
    // If the path starts with /spdockit, remove it for internal routing
    if (pathname.startsWith('/spdockit')) {
      pathname = pathname.replace('/spdockit', '') || '/';
    } else {
      // Return 404 for non-/spdockit routes to maintain consistency
      return new Response('Not Found - Please access via /spdockit route', { status: 404 });
    }
    
    // Create a new URL for the asset request
    const assetUrl = new URL(pathname, url.origin);
    const assetRequest = new Request(assetUrl, request);
    
    // Handle static assets from the build directory
    try {
      // Try to get the asset from the ASSETS binding
      const asset = await env.ASSETS.fetch(assetRequest);
      
      if (asset.status === 404) {
        // If the asset is not found, try to serve index.html for SPA routing
        const indexRequest = new Request(
          new URL('/index.html', url.origin),
          request
        );
        const indexAsset = await env.ASSETS.fetch(indexRequest);
        
        if (indexAsset.status === 200) {
          // Return index.html with proper headers for SPA routing
          return new Response(await indexAsset.text(), {
            status: 200,
            headers: {
              'Content-Type': 'text/html',
              'Cache-Control': 'no-cache',
            },
          });
        }
      }
      
      // Add proper cache headers for static assets
      if (asset.status === 200) {
        const response = new Response(asset.body, asset);
        
        // Handle downloadable files with proper headers
        if (pathname.match(/\.(zip|7z|rar|tar|gz|pdf|doc|docx|xls|xlsx|ppt|pptx|ps1)$/)) {
          const filename = pathname.split('/').pop();
          response.headers.set('Content-Disposition', `attachment; filename="${filename}"`);
          response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
        }
        // Cache static assets for a longer period
        else if (pathname.match(/\.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/)) {
          response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
        } else if (pathname.match(/\.(html)$/)) {
          response.headers.set('Cache-Control', 'public, max-age=3600');
        }
        
        return response;
      }
      
      return asset;
    } catch (error) {
      console.error('Error serving asset:', error);
      return new Response('Internal Server Error', { status: 500 });
    }
  },
};
