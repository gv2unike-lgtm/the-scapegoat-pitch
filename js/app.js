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

function cssImageUrl(src) {
  if (!src) return "";
  if (src.startsWith("images/")) return `../${src}`;
  return src;
}

function cleanCssUrl(value) {
  const raw = String(value || "").trim();
  return raw.replace(/^url\(["']?/, "").replace(/["']?\)$/, "").replace(/^\.\.\//, "");
}

function applySectionBackgrounds() {
  Object.entries(C.sectionBackgrounds || {}).forEach(([id, image]) => {
    const section = document.getElementById(id);
    if (section && image) section.style.setProperty("--section-bg", `url('${cssImageUrl(image)}')`);
  });
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
  const credits = c.credits.map((cr) =>
    `<article class="cover-credit-card">
      ${cr.image ? `<img src="${cr.image}" alt="${esc(cr.role)}">` : ""}
      <div class="cover-credit-card__body">
        <div class="role">${esc(cr.role)}</div>
        <div class="name">${esc(cr.name)}</div>
      </div>
    </article>`).join("");
  el("cover-credits").innerHTML = credits;
})();

/* ---------- LOGLINE ---------- */
el("logline-text").textContent = C.logline.text;

/* ---------- SYNOPSIS ---------- */
el("synopsis-body").innerHTML = C.synopsis.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");

/* ---------- THEME ---------- */
el("theme-lead").textContent = C.theme.intro;
el("theme-grid").innerHTML = C.theme.items.map((t) =>
  `<article class="theme-cell">
    ${t.image ? `<img src="${t.image}" alt="${esc(t.title)}">` : ""}
    <div class="theme-cell__body"><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></div>
  </article>`).join("");

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
  <figure class="tone-item"><img src="${t.image}" alt="${esc(t.caption)}">
    <figcaption>${esc(t.caption)}</figcaption></figure>`).join("");

/* ---------- MARKET COMPARISON ---------- */
el("comp-lead").textContent = C.marketComparison.intro;
el("comp-grid").innerHTML = C.marketComparison.items.map((m) => `
  <div class="comp-card"><img src="${m.image}" alt="${esc(m.title)}">
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
    <img src="${p.image}" alt="${esc(p.name)}">
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
applySectionBackgrounds();
addSectionIcons();

/* ============================================================================
   ADMIN EDITOR — client-side edits saved in this browser.
   ============================================================================ */
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin@232789";
const EDIT_STORE = "scapegoat.block.edits.v1";
const SESSION_STORE = "scapegoat.admin.session";
const UPLOAD_MAX_EDGE = 1800;
const UPLOAD_RETRY_EDGE = 1300;
const UPLOAD_JPEG_QUALITY = .82;
const UPLOAD_RETRY_QUALITY = .74;
const UPLOAD_MAX_DATA_URL = 2200000;
const editableSelector = [
  "h1", "h2", ".h-en", ".lead", "p", "li", ".cover__eyebrow", ".cover__tagline",
  ".role", ".name", ".char-card__name", ".char-card__actor", ".char-card__role",
  ".char-card__bio", ".cast-card__name", ".cast-card__as", ".cast-card__note",
  ".comp-card__title", ".comp-card__note", ".dept", ".detail", ".phase", ".period",
  ".budget-total", ".budget-note", ".footer__title", ".footer__en", ".footer__contact"
].join(",");

function readEdits() {
  try { return JSON.parse(localStorage.getItem(EDIT_STORE) || "{}"); }
  catch { return {}; }
}

function writeEdits(edits) {
  try {
    localStorage.setItem(EDIT_STORE, JSON.stringify(edits));
  } catch (error) {
    const quota = error?.name === "QuotaExceededError" || error?.code === 22;
    throw new Error(quota
      ? "Bộ nhớ chỉnh sửa trong trình duyệt đã đầy. Hãy xoá sửa block cũ hoặc dùng đường dẫn ảnh trong thư mục images."
      : "Không thể lưu chỉnh sửa. Vui lòng thử lại.");
  }
}

function editableElements(block) {
  return [...block.querySelectorAll(editableSelector)]
    .filter((node) => {
      if (node.closest(".admin-modal") || node.closest(".edit-block-btn")) return false;
      const rect = node.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    });
}

function imageTargets(block) {
  return [...block.querySelectorAll(".cover-credit-card img, .theme-cell img, .char-card__img, .tone-item img, .comp-card img, .cast-card img")]
    .filter((node) => {
      const rect = node.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    })
    .map((node, index) => {
      const card = node.closest(".cover-credit-card, .char-card, .tone-item, .comp-card, .cast-card");
      const label = card?.querySelector(".role, .char-card__name, .cast-card__name, .comp-card__title, figcaption")?.textContent?.trim();
      const current = node.tagName === "IMG"
        ? node.getAttribute("src")
        : cleanCssUrl(node.style.backgroundImage);
      return { node, index, label: label || `Ảnh ${index + 1}`, current };
    });
}

function applyImageTarget(target, src) {
  if (!src) return;
  if (target.node.tagName === "IMG") target.node.setAttribute("src", src);
  else target.node.style.backgroundImage = `url('${src}')`;
}

function applyStoredEdits() {
  const edits = readEdits();
  Object.entries(edits).forEach(([id, data]) => {
    const block = document.getElementById(id) || document.querySelector(`[data-edit-block="${id}"]`);
    if (!block) return;
    if (data.bg) block.style.setProperty(id === "cover" ? "--unused" : "--section-bg", `url('${cssImageUrl(data.bg)}')`);
    if (id === "cover" && data.bg) el("cover-bg").style.backgroundImage = `url('${data.bg}')`;

    const nodes = editableElements(block);
    (data.texts || []).forEach((text, i) => {
      if (nodes[i]) nodes[i].textContent = text;
    });

    const targets = imageTargets(block);
    (data.images || []).forEach((src, i) => {
      if (targets[i]) applyImageTarget(targets[i], src);
    });
  });
}

function ensureAdminModal() {
  let modal = document.getElementById("admin-modal");
  if (modal) return modal;
  modal = document.createElement("div");
  modal.id = "admin-modal";
  modal.className = "admin-modal";
  modal.innerHTML = `<div class="admin-panel" role="dialog" aria-modal="true"></div>`;
  document.body.appendChild(modal);
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("is-open"); });
  return modal;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Không đọc được file ảnh."));
    reader.readAsDataURL(file);
  });
}

function loadImageFromFile(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Không đọc được kích thước ảnh."));
    };
    img.src = url;
  });
}

function drawCompressedImage(img, maxEdge, quality) {
  const scale = Math.min(1, maxEdge / Math.max(img.naturalWidth, img.naturalHeight));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(img.naturalWidth * scale));
  canvas.height = Math.max(1, Math.round(img.naturalHeight * scale));
  const ctx = canvas.getContext("2d", { alpha: false });
  ctx.fillStyle = "#16100a";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", quality);
}

async function imageToDataUrl(file) {
  if (!file) return "";
  if (!file.type.startsWith("image/")) throw new Error("File tải lên không phải ảnh.");

  if (file.type === "image/svg+xml" || file.type === "image/gif") {
    const dataUrl = await readFileAsDataUrl(file);
    if (dataUrl.length > UPLOAD_MAX_DATA_URL) {
      throw new Error("Ảnh quá lớn để lưu trong trình duyệt. Hãy dùng JPG/PNG nhẹ hơn hoặc URL ảnh.");
    }
    return dataUrl;
  }

  const img = await loadImageFromFile(file);
  let dataUrl = drawCompressedImage(img, UPLOAD_MAX_EDGE, UPLOAD_JPEG_QUALITY);
  if (dataUrl.length > UPLOAD_MAX_DATA_URL) {
    dataUrl = drawCompressedImage(img, UPLOAD_RETRY_EDGE, UPLOAD_RETRY_QUALITY);
  }
  if (dataUrl.length > UPLOAD_MAX_DATA_URL) {
    throw new Error("Ảnh vẫn quá lớn sau khi nén. Hãy dùng ảnh nhỏ hơn hoặc URL ảnh.");
  }
  return dataUrl;
}

function openLogin() {
  const modal = ensureAdminModal();
  const panel = modal.querySelector(".admin-panel");
  panel.innerHTML = `
    <h3>Đăng nhập admin</h3>
    <div class="admin-field"><label>Tài khoản</label><input id="admin-user" autocomplete="username"></div>
    <div class="admin-field"><label>Mật khẩu</label><input id="admin-pass" type="password" autocomplete="current-password"></div>
    <div class="admin-actions">
      <button class="primary" id="admin-submit" type="button">Đăng nhập</button>
      <button id="admin-close" type="button">Đóng</button>
    </div>`;
  modal.classList.add("is-open");
  panel.querySelector("#admin-close").onclick = () => modal.classList.remove("is-open");
  panel.querySelector("#admin-submit").onclick = () => {
    const user = panel.querySelector("#admin-user").value.trim();
    const pass = panel.querySelector("#admin-pass").value;
    if (user !== ADMIN_USER || pass !== ADMIN_PASS) {
      panel.querySelector("#admin-pass").value = "";
      panel.querySelector("#admin-pass").placeholder = "Sai tài khoản hoặc mật khẩu";
      return;
    }
    sessionStorage.setItem(SESSION_STORE, "1");
    document.body.classList.add("is-admin");
    modal.classList.remove("is-open");
  };
}

function openBlockEditor(blockId) {
  const block = document.getElementById(blockId);
  if (!block) return;
  const modal = ensureAdminModal();
  const panel = modal.querySelector(".admin-panel");
  const nodes = editableElements(block);
  const targets = imageTargets(block);
  const edits = readEdits();
  const saved = edits[blockId] || {};
  const title = block.querySelector("h2, h1, .footer__title")?.textContent?.trim() || blockId;
  const bgValue = saved.bg || (blockId === "cover" ? C.cover.image : C.sectionBackgrounds?.[blockId] || "");

  panel.innerHTML = `
    <h3>Sửa: ${esc(title)}</h3>
    <div class="admin-field">
      <label>Ảnh nền URL</label>
      <input id="edit-bg" value="${esc(bgValue)}" placeholder="images/bg-logline.jpg hoặc https://...">
    </div>
    <div class="admin-field">
      <label>Tải ảnh nền từ máy</label>
      <input id="edit-file" type="file" accept="image/*">
    </div>
    <div id="edit-text-fields"></div>
    <div id="edit-image-fields"></div>
    <div class="admin-error" id="edit-error" role="alert"></div>
    <div class="admin-actions">
      <button class="primary" id="edit-save" type="button">Lưu block</button>
      <button id="edit-reset" type="button">Xoá sửa block</button>
      <button id="edit-close" type="button">Đóng</button>
    </div>`;

  const fields = panel.querySelector("#edit-text-fields");
  nodes.forEach((node, i) => {
    const wrap = document.createElement("div");
    wrap.className = "admin-field";
    wrap.innerHTML = `<label>Text ${i + 1}</label><textarea data-edit-index="${i}"></textarea>`;
    wrap.querySelector("textarea").value = saved.texts?.[i] ?? node.textContent.trim();
    fields.appendChild(wrap);
  });

  const imageFields = panel.querySelector("#edit-image-fields");
  if (targets.length) {
    const imageTitle = document.createElement("div");
    imageTitle.className = "admin-field";
    imageTitle.innerHTML = `<label>Ảnh trong block</label>`;
    imageFields.appendChild(imageTitle);
  }
  targets.forEach((target, i) => {
    const src = saved.images?.[i] ?? target.current;
    const wrap = document.createElement("div");
    wrap.className = "admin-field";
    wrap.innerHTML = `
      <label>${esc(target.label)}</label>
      <input data-image-index="${i}" value="${esc(src)}" placeholder="images/actor-lankhue.jpg hoặc https://...">
      <input data-image-file="${i}" type="file" accept="image/*">`;
    imageFields.appendChild(wrap);
  });

  panel.querySelector("#edit-close").onclick = () => modal.classList.remove("is-open");
  panel.querySelector("#edit-reset").onclick = () => {
    const all = readEdits();
    delete all[blockId];
    writeEdits(all);
    location.reload();
  };
  panel.querySelector("#edit-save").onclick = async () => {
    const saveBtn = panel.querySelector("#edit-save");
    const errorBox = panel.querySelector("#edit-error");
    saveBtn.disabled = true;
    saveBtn.textContent = "Đang lưu...";
    errorBox.textContent = "";
    try {
      const bgFile = panel.querySelector("#edit-file").files[0];
      const bgUpload = await imageToDataUrl(bgFile);
      const bg = bgUpload || panel.querySelector("#edit-bg").value.trim();
      const texts = [...panel.querySelectorAll("textarea[data-edit-index]")].map((x) => x.value);
      const images = [];
      for (const input of [...panel.querySelectorAll("input[data-image-index]")]) {
        const i = Number(input.dataset.imageIndex);
        const fileInput = panel.querySelector(`input[data-image-file="${i}"]`);
        const upload = await imageToDataUrl(fileInput?.files?.[0]);
        images[i] = upload || input.value.trim();
      }
      const all = readEdits();
      all[blockId] = { bg, texts, images };
      writeEdits(all);
      applyStoredEdits();
      modal.classList.remove("is-open");
    } catch (error) {
      errorBox.textContent = error?.message || "Không thể lưu chỉnh sửa. Vui lòng thử lại.";
    } finally {
      saveBtn.disabled = false;
      saveBtn.textContent = "Lưu block";
    }
  };
  modal.classList.add("is-open");
}

function setupAdminEditor() {
  el("admin-login")?.addEventListener("click", () => {
    if (document.body.classList.contains("is-admin")) {
      sessionStorage.removeItem(SESSION_STORE);
      document.body.classList.remove("is-admin");
      return;
    }
    openLogin();
  });

  const blocks = ["cover", "logline", "synopsis", "theme", "characters", "tone", "market", "vision", "cast", "crew", "budget", "revenue", "timeline-sec"];
  blocks.forEach((id) => {
    const block = document.getElementById(id);
    if (!block || block.querySelector(".edit-block-btn")) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "edit-block-btn";
    btn.textContent = "Sửa";
    btn.addEventListener("click", () => openBlockEditor(id));
    block.appendChild(btn);
  });

  if (sessionStorage.getItem(SESSION_STORE) === "1") document.body.classList.add("is-admin");
  applyStoredEdits();
}

setupAdminEditor();
