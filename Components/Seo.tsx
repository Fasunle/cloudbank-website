import Head from 'next/head';

type SEOType = {
  title: string;
  description: string;
  metaDescription?: string; // content description
  author?: string; // content author like Twitter Account name
};

/**
 * Generate SEO header for each page.
 * @param param0
 * @returns
 */
function SEO({ description, title, author = '', metaDescription = '' }: SEOType) {
  const metaData = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];
  return (
    <Head>
      <title>{title ?? 'Cloud bank App'}</title>
      <meta
        name='description'
        content={description ?? 'Cloudbank provides a seamless banking experience'}
      />
      {metaData.map((m) =>
        m?.property ? (
          <meta key={m.property} property={m.property} content={m.content} />
        ) : (
          <meta key={m.name} property={m.name} content={m.content} />
        ),
      )}
    </Head>
  );
}

export default SEO;
