import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M.D Forklift Cranes & Transport Services | Narela Industrial Area, Delhi",
  description:
    "Reliable forklift, crane, heavy machinery handling, and industrial transportation services in Narela Industrial Area, Delhi. Contact +91 9220893841 / +91 9213391241.",
  keywords: [
    "Forklift services in Narela",
    "Forklift services in Delhi",
    "Crane services in Delhi",
    "Industrial transportation services in Delhi",
    "Forklift and crane services in Narela Industrial Area",
    "Heavy machinery handling Delhi",
    "Material handling equipment rental",
    "JCB Telehandler Delhi",
    "ACE Forklift rental Delhi",
  ],
  authors: [{ name: "M.D Forklift Cranes & Transport Services" }],
  creator: "M.D Forklift Cranes & Transport Services",
  metadataBase: new URL("https://mdforkliftservices.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "M.D Forklift Cranes & Transport Services | Industrial Equipment & Lifting",
    description:
      "Powering your heavy lifting & transport needs. Reliable forklift, crane and transport services in Narela Industrial Area, Delhi.",
    url: "https://mdforkliftservices.in",
    siteName: "M.D FORKLIFT CRANES & TRANSPORT SERVICES",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 400,
        alt: "M.D Forklift Cranes and Transport Services Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "M.D Forklift Cranes & Transport Services | Delhi",
    description:
      "Reliable forklift, crane, and industrial transport services in Narela Industrial Area, Delhi.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "M.D Forklift Cranes and Transport Services",
  image: "https://mdforkliftservices.in/images/logo.png",
  telephone: ["+919220893841", "+919213391241"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "A-219 Narela DSIIDC Industrial Area",
    addressLocality: "Narela",
    addressRegion: "Delhi",
    postalCode: "110040",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.8524",
    longitude: "77.0945",
  },
  description:
    "Reliable forklift, crane, heavy machinery handling, and industrial transportation services for industrial, construction, and warehouse operations in Narela Industrial Area, Delhi.",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Delhi NCR, India",
  },
  priceRange: "₹₹",
  serviceType: [
    "Forklift Services",
    "Crane Services",
    "Heavy Equipment Handling",
    "Industrial Transportation Services",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen bg-[#F4F5F7] text-[#171C24] selection:bg-[#F5A623] selection:text-[#171C24]">
        {children}
      </body>
    </html>
  );
}
