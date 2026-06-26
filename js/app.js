/* ============================================================================
   app.js — đọc dữ liệu từ content.js và dựng trang.
   Bạn KHÔNG cần sửa file này. Mọi nội dung nằm ở js/content.js.
   ============================================================================ */

const C = CONTENT;
const el = (id) => document.getElementById(id);
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (m) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));

const SECTION_ICONS = {
  logline: "quote",
  synopsis: "scroll-text",
  theme: "scale",
  characters: "users-round",
  tone: "aperture",
  market: "chart-no-axes-combined",
  vision: "eye",
  cast: "clapperboard",
  crew: "id-card",
  budget: "coins",
  revenue: "trending-up",
  "timeline-sec": "calendar-clock",
};

function addSectionIcons() {
  Object.entries(SECTION_ICONS).forEach(([sectionId, iconName]) => {
    const head = document.querySelector(`#${sectionId} .sec-head`);
    if (!head || head.querySelector(".sec-icon")) return;

    const icon = document.createElement("span");
    icon.className = "sec-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.innerHTML = `<i data-lucide="${iconName}"></i>`;
    head.insertBefore(icon, head.querySelector("h2"));
  });

  if (window.lucide) lucide.createIcons();
}

/* ---------- thanh nav ---------- */
el("nav-code").textContent  = C.meta.fileCode;
el("nav-brand").textContent = C.meta.projectTitle;
document.title = `${C.cover.title} — ${C.cover.titleEn} · Pitch Deck`;

/* ---------- COVER ---------- */
(() => {
  const c = C.cover;
  el("cover-bg").style.backgroundImage = `url('${c.image}')`;
  el("cover-eyebrow").textContent = c.eyebrow;
  el("cover-title").innerHTML = `${esc(c.title)}<span class="en">${esc(c.titleEn)}</span>`;
  el("cover-tagline").textContent = c.tagline;
  el("cover-facts").innerHTML =
    [c.genre, c.year, c.location].filter(Boolean).map((f) => `<span>${esc(f)}</span>`).join("");
  el("cover-credits").innerHTML = c.credits.map((cr) =>
    `<div><div class="role">${esc(cr.role)}</div><div class="name">${esc(cr.name)}</div></div>`).join("");
})();

/* ---------- LOGLINE ---------- */
el("logline-text").textContent = C.logline.text;

/* ---------- SYNOPSIS ---------- */
el("synopsis-body").innerHTML = C.synopsis.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");

/* ---------- THEME ---------- */
el("theme-lead").textContent = C.theme.intro;
el("theme-grid").innerHTML = C.theme.items.map((t) =>
  `<div class="theme-cell"><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></div>`).join("");

/* ---------- CHARACTERS ---------- */
el("char-grid").innerHTML = C.characters.items.map((ch) => `
  <article class="char-card">
    <div class="char-card__img" style="background-image:url('${ch.image}')"></div>
    <div class="char-card__body">
      <div class="char-card__name">${esc(ch.name)}</div>
      <div class="char-card__actor">${esc(ch.actor)}</div>
      <div class="char-card__role">${esc(ch.role)}</div>
      <p class="char-card__bio">${esc(ch.bio)}</p>
      ${ch.secret ? `<div class="redacted" tabindex="0" role="button" aria-label="Hé lộ bí mật">
        <span class="lbl">Bí mật ▸ chạm để mở</span>
        <span class="txt">${esc(ch.secret)}</span></div>` : ""}
    </div>
  </article>`).join("");

/* ---------- VISUAL TONE ---------- */
el("tone-lead").textContent = C.visualTone.intro;
el("tone-keys").innerHTML = C.visualTone.keywords.map((k) => `<span>${esc(k)}</span>`).join("");
el("tone-grid").innerHTML = C.visualTone.images.map((t) => `
  <figure class="tone-item"><img src="${t.image}" alt="${esc(t.caption)}" loading="lazy">
    <figcaption>${esc(t.caption)}</figcaption></figure>`).join("");

/* ---------- MARKET COMPARISON ---------- */
el("comp-lead").textContent = C.marketComparison.intro;
el("comp-grid").innerHTML = C.marketComparison.items.map((m) => `
  <div class="comp-card"><img src="${m.image}" alt="${esc(m.title)}" loading="lazy">
    <div class="comp-card__body"><div class="comp-card__title">${esc(m.title)}</div>
      <div class="comp-card__note">${esc(m.note)}</div></div></div>`).join("");

/* ---------- DIRECTOR VISION ---------- */
(() => {
  const v = C.directorVision;
  el("vision-quote").textContent = v.quote;
  el("vision-by").innerHTML = `<b>${esc(v.director)}</b> · <span>${esc(v.role)}</span>`;
  el("vision-film").innerHTML = v.filmography.map((f) => `<li>${esc(f)}</li>`).join("");
})();

/* ---------- CAST ---------- */
el("cast-grid").innerHTML = C.cast.items.map((p) => `
  <article class="cast-card">
    ${C.cast.badge ? `<span class="cast-card__badge">${esc(C.cast.badge)}</span>` : ""}
    <img src="${p.image}" alt="${esc(p.name)}" loading="lazy">
    <div class="cast-card__body">
      <div class="cast-card__name">${esc(p.name)}</div>
      <div class="cast-card__as">${esc(p.as)}</div>
      <div class="cast-card__note">${esc(p.note)}</div>
    </div></article>`).join("");

/* ---------- CREW ---------- */
el("crew-note").textContent = C.crew.note;
el("crew-list").innerHTML = C.crew.items.map((r) => `
  <div class="crew-row"><div class="dept">${esc(r.dept)}</div>
    <div><div class="name">${esc(r.name)}</div>
    ${r.detail ? `<div class="detail">${esc(r.detail)}</div>` : ""}</div></div>`).join("");

/* ---------- BUDGET ---------- */
(() => {
  const b = C.budget;
  el("budget-total").textContent = b.total;
  el("budget-note").textContent = b.note;
  el("budget-bars").innerHTML = b.breakdown.map((row) => `
    <div class="bar-row">
      <div class="bar-label"><span>${esc(row.label)}</span><span class="pct">${row.percent}%</span></div>
      <div class="bar-track"><div class="bar-fill" data-pct="${row.percent}"></div></div>
    </div>`).join("");
})();

/* ---------- REVENUE ---------- */
(() => {
  const r = C.revenue;
  el("revenue-lead").textContent = r.intro;
  el("revenue-rounds").innerHTML = r.rounds.map((x) => `
    <div class="round-card"><div class="r">${esc(x.round)}</div><p>${esc(x.text)}</p></div>`).join("");
  el("revenue-bars").innerHTML = r.streams.map((row) => `
    <div class="bar-row">
      <div class="bar-label"><span>${esc(row.label)}</span><span class="pct">${row.percent}%</span></div>
      <div class="bar-track"><div class="bar-fill" data-pct="${row.percent}"></div></div>
    </div>`).join("");
})();

/* ---------- TIMELINE ---------- */
el("timeline").innerHTML = C.timeline.phases.map((p) => `
  <div class="tl-item"><div class="phase">${esc(p.phase)}</div>
    <div class="period">${esc(p.period)}</div></div>`).join("");

/* ---------- FOOTER ---------- */
(() => {
  const f = C.contact, cv = C.cover;
  el("footer-title").textContent = cv.title;
  el("footer-en").textContent = cv.titleEn;
  el("footer-contact").innerHTML =
    `${esc(f.line)}<br>${esc(f.phone)}<br><a href="mailto:${esc(f.email)}">${esc(f.email)}</a>`;
})();

/* ============================================================================
   TƯƠNG TÁC
   ============================================================================ */

/* hé lộ bí mật nhân vật */
document.addEventListener("click", (e) => {
  const r = e.target.closest(".redacted");
  if (r) r.classList.toggle("is-open");
});
document.addEventListener("keydown", (e) => {
  if ((e.key === "Enter" || e.key === " ") && e.target.classList?.contains("redacted")) {
    e.preventDefault(); e.target.classList.toggle("is-open");
  }
});

/* reveal khi cuộn + chạy thanh % */
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    en.target.classList.add("is-in");
    en.target.querySelectorAll?.(".bar-fill").forEach((f) => { f.style.width = f.dataset.pct + "%"; });
    io.unobserve(en.target);
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((n) => io.observe(n));
addSectionIcons();
