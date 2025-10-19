import Head from 'next/head';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>SaaS Landing Page</title>
        <meta name="description" content="SaaS Landing Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
        {children}
      </body>
    </html>
  );
}