import { absoluteUrl, siteConfig } from "@/lib/site";
import { images } from "@/lib/images";
import { getPracticeArea, practiceAreas } from "@/lib/data/practice-areas";
import type { Lawyer } from "@/lib/data/lawyers";
import type { Article } from "@/lib/articles";

const ORG_ID = `${siteConfig.url}/#organization`;

export function legalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": ORG_ID,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: images.officeLobby.src,
    logo: absoluteUrl("/logo.svg"),
    foundingDate: String(siteConfig.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.street}, ${siteConfig.address.neighborhood}`,
      addressLocality: siteConfig.address.district,
      addressRegion: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: { "@type": "City", name: siteConfig.city },
    knowsLanguage: ["tr", "en", "de"],
    openingHoursSpecification: siteConfig.openingHoursSpec.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: spec.days,
      opens: spec.opens,
      closes: spec.closes,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Çalışma Alanları",
      itemListElement: practiceAreas.map((area) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: area.title,
          url: absoluteUrl(`/calisma-alanlari/${area.slug}`),
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    inLanguage: "tr-TR",
    publisher: { "@id": ORG_ID },
  };
}

export type Crumb = { name: string; href: string };

export function breadcrumbSchema(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function personSchema(lawyer: Lawyer) {
  return {
    "@context": "https://schema.org",
    "@type": ["Person"],
    "@id": absoluteUrl(`/avukatlar/${lawyer.slug}#person`),
    name: lawyer.name.replace(/^Av\.\s*/, ""),
    honorificPrefix: "Av.",
    jobTitle: lawyer.title,
    image: images[lawyer.image].src,
    email: lawyer.email,
    url: absoluteUrl(`/avukatlar/${lawyer.slug}`),
    worksFor: { "@id": ORG_ID },
    knowsLanguage: lawyer.languages,
    knowsAbout: lawyer.areas.map((slug) => getPracticeArea(slug)?.title).filter(Boolean),
    alumniOf: lawyer.education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
    memberOf: lawyer.memberships.map((name) => ({ "@type": "Organization", name })),
  };
}

export function attorneySchema(lawyer: Lawyer) {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: lawyer.name,
    image: images[lawyer.image].src,
    url: absoluteUrl(`/avukatlar/${lawyer.slug}`),
    telephone: siteConfig.phone,
    parentOrganization: { "@id": ORG_ID },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.district,
      addressRegion: siteConfig.address.city,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
  };
}

export function articleSchema(article: Article, authorName: string, authorSlug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: [images[article.image].src],
    datePublished: article.date,
    dateModified: article.updated ?? article.date,
    inLanguage: "tr-TR",
    mainEntityOfPage: absoluteUrl(`/makaleler/${article.slug}`),
    articleSection: article.categoryTitle,
    author: {
      "@type": "Person",
      name: authorName,
      url: absoluteUrl(`/avukatlar/${authorSlug}`),
    },
    publisher: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: siteConfig.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/logo.svg") },
    },
  };
}
