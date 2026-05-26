import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Osceola Sewer and Drain Cleaning",
    tagline: "Clear Drains, Happy Home, Fast.",
    phone: "(407) 325-7883",
    phoneHref: "tel:+14073257883",
    email: "info@osceolaplumbing.com",
    address: "1757 Attilburgh Blvd, Melbourne, FL 32904, USA",
    city: "Melbourne",
    serviceAreas: ["Melbourne", "Kissimmee", "St. Cloud", "Orlando", "Palm Bay", "Cocoa"],
    license: "FL CFC1429000",
    since: "2008",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "navy",
    niche: "plumbing",
  },

  services: [
    { icon: "droplets", title: "Drain Cleaning", desc: "We clear clogs fast, restoring flow to your sinks, showers, and toilets.", urgent: true },
    { icon: "thermometer", title: "Water Heater Repair", desc: "Expert repair and installation for all types of water heaters, ensuring hot water when you need it.", urgent: true },
    { icon: "droplets", title: "Leak Repair", desc: "Pinpoint and repair leaks quickly to prevent water damage and conserve water.", urgent: true },
    { icon: "clock", title: "Emergency Service", desc: "24/7 rapid response for all your urgent plumbing needs, day or night.", urgent: true },
    { icon: "wrench", title: "Pipe Repair", desc: "From minor fixes to major replacements, we handle all pipe repair with precision.", urgent: false },
    { icon: "home", title: "Fixture Installation", desc: "Professional installation of new faucets, toilets, showers, and other plumbing fixtures.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah J.", location: "Kissimmee, FL", stars: 5, text: "Our kitchen drain was completely blocked, and Osceola Sewer and Drain Cleaning came out within an hour on a Saturday. The technician, Mike, was incredibly professional and had it cleared in no time. The price was fair, and the service was exceptional. Highly recommend!" },
    { name: "David R.", location: "St. Cloud, FL", stars: 5, text: "I had a persistent leak under my sink that other plumbers couldn't find. Osceola's team used advanced diagnostics and fixed it on the first visit. They were courteous, clean, and explained everything clearly. So relieved to finally have it resolved after weeks of frustration." },
    { name: "Emily P.", location: "Melbourne, FL", stars: 5, text: "Our water heater suddenly stopped working. Called Osceola Sewer and Drain Cleaning, and they sent someone out the same day. He diagnosed the issue quickly and had it repaired, saving us from a cold shower. Fantastic service and very knowledgeable staff!" }
  ],

  trustBadges: [
    "GAF Master Elite", "NATE Certified", "BBB A+ Rated", "24/7 Emergency Service", "Licensed & Insured", "5-Star Rated"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1500, label: "Jobs Done", suffix: "+", decimals: 0 },
    { value: 15, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize your emergency, arriving quickly to resolve plumbing issues." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "No surprises! You'll know the cost before any work begins." },
    { icon: "award", title: "Certified Pros", desc: "Our technicians are highly trained, licensed, and experienced." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work with a commitment to your complete satisfaction." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Our AI assistant is always ready to help schedule service or answer questions." },
    { icon: "truck", title: "Fully Equipped", desc: "Our vans are stocked with the right tools and parts for efficient service." }
  ],

  formServiceOptions: ["Drain Cleaning", "Water Heater Repair", "Leak Repair", "Emergency Service", "Pipe Repair", "Fixture Installation"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!