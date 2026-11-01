import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forklift & Crane Services in Narela Delhi | M.D Forklift",
  description:
    "Reliable forklift on rent, crane services & heavy machinery transportation in Narela DSIIDC, Delhi NCR. Quick dispatch. Call/WhatsApp: +91 9220893841.",
  keywords: [
    "Forklift services in Narela Delhi",
    "Forklift on rent in Narela",
    "Crane services in Delhi",
    "Industrial transportation services in Delhi",
    "Forklift rental Narela DSIIDC",
    "Hydra crane in Narela",
    "Heavy machinery handling Delhi NCR",
    "JCB Telehandler rental Delhi",
    "ACE Forklift on hire",
    "Material handling equipment Delhi",
    "Bawana industrial forklift services",
    "Kundli crane services",
  ],
  authors: [{ name: "M.D Forklift Cranes & Transport Services" }],
  creator: "M.D Forklift Cranes & Transport Services",
  metadataBase: new URL("https://mdforkliftservices.in"),
  alternates: {
    canonical: "https://mdforkliftservices.in",
  },
  openGraph: {
    title: "Forklift & Crane Services in Narela Delhi | M.D Forklift",
    description:
      "Reliable forklift on rent, crane services & heavy machinery transportation in Narela DSIIDC, Delhi NCR. Quick dispatch. Call/WhatsApp: +91 9220893841.",
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
    title: "Forklift & Crane Services in Narela Delhi | M.D Forklift",
    description:
      "Reliable forklift on rent, crane services & heavy machinery transportation in Narela DSIIDC, Delhi NCR. Quick dispatch. Call/WhatsApp: +91 9220893841.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://mdforkliftservices.in/#localbusiness",
      "name": "M.D Forklift Cranes and Transport Services",
      "url": "https://mdforkliftservices.in",
      "logo": "https://mdforkliftservices.in/images/logo.png",
      "image": [
        "https://mdforkliftservices.in/images/logo.png",
        "https://mdforkliftservices.in/images/jcb-telehandler.jpg",
        "https://mdforkliftservices.in/images/ace-forklift.jpg",
      ],
      "telephone": ["+919220893841", "+919213391241"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "A-219 Narela DSIIDC Industrial Area",
        "addressLocality": "Narela",
        "addressRegion": "Delhi",
        "postalCode": "110040",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.8524,
        "longitude": 77.0945,
      },
      "hasMap": "https://maps.app.goo.gl/fnogrbWydWvUGumR7?g_st=aw",
      "sameAs": [
        "https://maps.app.goo.gl/fnogrbWydWvUGumR7?g_st=aw",
      ],
      "priceRange": "₹₹",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          "opens": "07:00",
          "closes": "21:00",
        },
      ],
      "areaServed": [
        "Narela Industrial Area",
        "DSIIDC Narela",
        "Bawana Industrial Area",
        "Kundli",
        "Rai Industrial Area",
        "Alipur",
        "North Delhi",
        "Delhi NCR",
      ],
      "description":
        "Reliable forklift rental, crane services, heavy machinery handling, and industrial transportation services for factories, warehouses, and construction sites in Narela Industrial Area, Delhi NCR.",
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://mdforkliftservices.in/#catalog",
      "name": "Industrial Machinery & Transport Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Forklift Rental & Material Handling Services",
            "description":
              "Forklift equipment solutions for warehouse, factory, and yard loading operations in Narela, Bawana, and Delhi NCR.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Crane Services & Heavy Lifting",
            "description":
              "Industrial crane hire and machinery lifting service coordination for manufacturing plants and construction sites.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "JCB Telehandler Equipment Rental",
            "description":
              "Telescopic material handler for extended reach and heavy construction material positioning.",
          },
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Industrial Equipment Transportation",
            "description":
              "Heavy machinery and material transportation across Delhi NCR industrial hubs.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://mdforkliftservices.in/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://mdforkliftservices.in/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://mdforkliftservices.in/#services",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Machinery",
          "item": "https://mdforkliftservices.in/#machinery",
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Service Areas",
          "item": "https://mdforkliftservices.in/#service-areas",
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Contact",
          "item": "https://mdforkliftservices.in/#contact",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Narela, Delhi" />
        <meta name="geo.position" content="28.8524;77.0945" />
        <meta name="ICBM" content="28.8524, 77.0945" />
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
