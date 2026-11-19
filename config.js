/*
  TAJ SAMPLE ENGINE — CUSTOMER CONFIGURATION
  Edit this file to personalize the website.
  Keep the quotes and commas. Do not edit app.js or index.html for normal changes.
*/
const SITE_CONFIG = {
  // BUSINESS DETAILS
  businessName: "Shaikh Brothers Pizza",
  tagline: "Freshly baked. Always delicious.",
  brandInitial: "S",
  announcement: "A little something delicious is waiting for you",

  // HERO SECTION
  heroEyebrow: "GOOD FOOD. GOOD MOOD.",
  heroTitle: "A little taste of <em>something special.</em>",
  heroDescription: "Freshly made favourites, generous toppings and flavours worth coming back for.",
  heroNote: "Freshly prepared, every day",
  heroImageCaption: "A table worth gathering around",

  // CONTACT — use digits only for phone and WhatsApp, including country code
  phone: "919876543210",
  whatsapp: "919876543210",
  address: "Mumbra, Thane, Maharashtra",
  mapsUrl: "https://maps.google.com/?q=Mumbra+Thane",
  hoursShort: "Every day · 12 PM – 11 PM",
  openingHours: "Monday – Sunday | 12:00 PM – 11:00 PM",
  instagramHandle: "@shaikhbrotherspizza",
  instagramUrl: "https://instagram.com/",

  // BRAND COLOURS — change these three values
  theme: {
    primary: "#b83b2e",
    ink: "#22211f",
    paper: "#f7f5f0",
    accent: "#e9c7a7"
  },

  // HERO / STORY / GALLERY IMAGES
  // Use a direct image URL, or a path such as assets/your-photo.jpg
  images: {
    hero: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1400&q=85",
    story: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=1100&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85"
    ]
  },

  // ABOUT SECTION
  storyTitle: "Good food brings people <em>together.</em>",
  storyText: "We believe the best meals are the ones shared. From freshly prepared bases to generous toppings, every order is made with care and served with a little extra love.",
  visitText: "Questions, reservations or a craving you need to satisfy? We’re just a message away.",
  promise: "Freshness in every bite",

  // MENU — add, remove or edit items as needed
  menu: [
    {
      name: "Classic Margherita",
      description: "A timeless favourite with rich tomato, mozzarella and basil.",
      price: "₹199",
      tag: "A CLASSIC",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85"
    },
    {
      name: "Farmhouse Pizza",
      description: "Loaded with colourful vegetables, cheese and signature sauce.",
      price: "₹299",
      tag: "CUSTOMER FAVOURITE",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85"
    },
    {
      name: "Cheese Burst",
      description: "A golden crust with a rich, creamy cheese-filled centre.",
      price: "₹349",
      tag: "EXTRA CHEESY",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85"
    }
  ],

  // DISPLAY SETTINGS
  showAnnouncement: true,
  showInstagram: true,
  showPrices: true,
  currency: "₹"
};