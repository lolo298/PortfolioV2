export async function GET() {
	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
      <url>
        <loc>https://lorenzoa.dev/</loc>
        <lastmod>2024-06-11</lastmod>
      </url>
      <url>
        <loc>https://lorenzoa.dev/projets</loc>
        <lastmod>2024-06-11</lastmod>
      </url>
      <url>
        <loc>https://lorenzoa.dev/Apidex</loc>
        <lastmod>2024-06-11</lastmod>
      </url>
      <url>
        <loc>https://lorenzoa.dev/Asul</loc>
        <lastmod>2024-06-11</lastmod>
      </url>
      <url>
        <loc>https://lorenzoa.dev/Portfolio</loc>
        <lastmod>2024-06-11</lastmod>
      </url>
      <url>
        <loc>https://lorenzoa.dev/StudentLimitedTime</loc>
        <lastmod>2024-06-11</lastmod>
      </url>
      <url>
        <loc>https://lorenzoa.dev/CVAouliniLorenzo.pdf</loc>
        <lastmod>2024-06-11</lastmod>
      </url>
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml',
			},
		},
	);
}