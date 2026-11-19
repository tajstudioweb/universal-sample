/* TAJ SAMPLE ENGINE — rendering logic + live preview bridge. */
(() => {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const setText = (id, value) => { if ($(id) && value != null) $(id).textContent = value; };
  const setHTML = (id, value) => { if ($(id) && value != null) $(id).innerHTML = value; };
  const setImage = (id, src, alt) => {
    const el = $(id);
    if (el && src) { el.src = src; el.alt = alt || ""; el.style.display = ""; el.onerror = () => { el.style.display = "none"; }; }
  };
  const safeUrl = (value, fallback = "#") => {
    try {
      const u = new URL(value, window.location.href);
      return ["http:", "https:", "tel:"].includes(u.protocol) ? u.href : fallback;
    } catch { return fallback; }
  };
  const digits = (value) => String(value || "").replace(/\D/g, "");

  function render(c) {
    c = c || {};
    // Reset repeatable areas so live updates don't duplicate cards.
    $("menu-grid").replaceChildren();
    $("gallery-grid").replaceChildren();

    const theme = c.theme || {};
    document.documentElement.style.setProperty("--primary", theme.primary || "#b83b2e");
    document.documentElement.style.setProperty("--ink", theme.ink || "#22211f");
    document.documentElement.style.setProperty("--paper", theme.paper || "#f7f5f0");
    document.documentElement.style.setProperty("--accent", theme.accent || "#e9c7a7");

    document.title = `${c.businessName || "Restaurant"} | ${c.tagline || "Welcome"}`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = c.heroDescription || c.tagline || "";
    setText("business-name", c.businessName || "Restaurant");
    setText("brand-tagline", c.tagline || "");
    setText("brand-mark", c.brandInitial || (c.businessName || "R").charAt(0));
    setText("footer-name", c.businessName || "Restaurant");
    setText("footer-copy", `© ${new Date().getFullYear()} ${c.businessName || "Restaurant"}. All rights reserved.`);
    setText("announcement", c.announcement || "");
    $("announcement").hidden = c.showAnnouncement === false || !c.announcement;
    setText("hero-eyebrow", c.heroEyebrow || "GOOD FOOD. GOOD MOOD.");
    setHTML("hero-title", c.heroTitle || "A little taste of <em>something special.</em>");
    setText("hero-description", c.heroDescription || "");
    setText("hero-note", c.heroNote || "");
    setText("hero-image-caption", c.heroImageCaption || "");
    setImage("hero-image", c.images?.hero, "Featured food from " + (c.businessName || "the restaurant"));
    setImage("story-image", c.images?.story, "Food and hospitality");

    setHTML("story-title", c.storyTitle || "Good food brings people <em>together.</em>");
    setText("story-text", c.storyText || "");
    setText("visit-text", c.visitText || "");

    setText("hours-short", c.hoursShort || "");
    setText("full-hours", c.openingHours || "");
    setText("address-short", c.address || "");
    setText("full-address", c.address || "");
    setText("promise-short", c.promise || "");
    setText("social-name", c.instagramHandle || "");
    const phone = digits(c.phone);
    const whatsapp = digits(c.whatsapp || c.phone);
    $("phone-link").href = phone ? `tel:+${phone}` : "#";
    setText("phone-link", c.phone ? `Call ${c.phone}` : "Call us");
    $("whatsapp-link").href = whatsapp ? `https://wa.me/${whatsapp}?text=${encodeURIComponent("Hi! I'd like to know more.")}` : "#";
    $("maps-link").href = safeUrl(c.mapsUrl);
    $("social-link").href = safeUrl(c.instagramUrl);
    $("social-link").hidden = c.showInstagram === false || !c.instagramUrl;
    $("social-name").parentElement.hidden = c.showInstagram === false;

    const whatsappBase = whatsapp ? `https://wa.me/${whatsapp}?text=` : "";
    (Array.isArray(c.menu) ? c.menu : []).forEach((item) => {
      const card = document.createElement("article");
      card.className = "menu-card";
      const visual = document.createElement("div");
      visual.className = "menu-card-image";
      const img = document.createElement("img");
      img.src = item.image || "";
      img.alt = item.name || "Menu item";
      img.loading = "lazy";
      img.onerror = () => { img.style.display = "none"; };
      visual.append(img);
      const body = document.createElement("div");
      body.className = "menu-card-body";
      const tag = document.createElement("span");
      tag.className = "menu-tag";
      tag.textContent = item.tag || "FROM OUR MENU";
      const heading = document.createElement("h3");
      heading.textContent = item.name || "Menu item";
      const desc = document.createElement("p");
      desc.textContent = item.description || "";
      const line = document.createElement("div");
      line.className = "menu-card-bottom";
      const price = document.createElement("strong");
      price.textContent = item.price || "";
      price.hidden = c.showPrices === false;
      const order = document.createElement("a");
      order.className = "mini-order";
      order.textContent = "Enquire ↗";
      order.href = whatsappBase ? whatsappBase + encodeURIComponent("Hi! I'd like to order " + (item.name || "this item") + ".") : "#contact";
      order.target = whatsappBase ? "_blank" : "_self";
      order.rel = "noopener";
      line.append(price, order);
      body.append(tag, heading, desc, line);
      card.append(visual, body);
      $("menu-grid").append(card);
    });

    (Array.isArray(c.images?.gallery) ? c.images.gallery : []).slice(0, 3).forEach((src, i) => {
      const frame = document.createElement("div");
      frame.className = `gallery-item gallery-item-${i + 1}`;
      const img = document.createElement("img");
      img.src = src;
      img.alt = `Restaurant gallery image ${i + 1}`;
      img.loading = "lazy";
      img.onerror = () => { frame.style.display = "none"; };
      frame.append(img);
      $("gallery-grid").append(frame);
    });
  }

  render(window.SITE_CONFIG || {});

  // The editor sends updated config objects to this preview iframe.
  window.addEventListener("message", (event) => {
    if (event.data?.type === "TAJ_CONFIG_PREVIEW" && event.data.config && typeof event.data.config === "object") {
      render(event.data.config);
    }
  });

  const toggle = $("menu-toggle");
  const nav = $("nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }));
})();