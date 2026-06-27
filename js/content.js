/* ============================================================================
   HỒ SƠ DỰ ÁN — "THẾ THÂN"
   ----------------------------------------------------------------------------
   ĐÂY LÀ FILE DUY NHẤT BẠN CẦN SỬA để thay đổi NỘI DUNG và ẢNH.
   Không cần đụng tới các file khác.

   CÁCH SỬA:
   • Text:  sửa phần chữ nằm trong dấu nháy "..."  (giữ nguyên dấu nháy).
   • Ảnh:   thay file trong thư mục /images bằng ảnh của bạn, GIỮ NGUYÊN TÊN FILE;
            hoặc đổi đường dẫn trong dòng image: "images/....jpg".
   • Mỗi dòng kết thúc bằng dấu phẩy ","  — đừng xoá dấu phẩy.

   GỢI Ý: tất cả dàn diễn viên & nhân sự ở đây đang để dạng "ĐỀ BẠT" (đề xuất),
   bạn có thể chỉnh badge ở mục cast.badge bên dưới.
   ============================================================================ */

const CONTENT = {

  /* ----- THÔNG TIN CHUNG (hiện ở thanh trên cùng) ----- */
  meta: {
    fileCode: "HỒ SƠ MẬT · CASE FILE 2025",   // dòng nhỏ góc trái thanh nav
    projectTitle: "THẾ THÂN",                  // tên ngắn trên thanh nav
  },

  sectionBackgrounds: {
    logline: "images/bg-logline.jpg",
    synopsis: "images/bg-synopsis.jpg",
    theme: "images/bg-theme.jpg",
    characters: "images/Characters.png",
    tone: "images/bg-tone.jpg",
    market: "images/bg-market.jpg",
    vision: "images/bg-vision.jpg",
    cast: "images/bg-cast.jpg",
    crew: "images/bg-crew.jpg",
    budget: "images/bg-budget.jpg",
    revenue: "images/bg-revenue.jpg",
    "timeline-sec": "images/bg-timeline.jpg",
  },

  /* ============================ 01 · COVER ============================ */
  cover: {
    eyebrow: "FEATURE FILM · ĐỀ XUẤT SẢN XUẤT",
    title: "THẾ THÂN",                 // Tên phim (tiếng Việt) — ĐỔI TẠI ĐÂY
    titleEn: "THE SCAPEGOAT",          // Tên tiếng Anh
    tagline: "Khi tội ác của giới siêu giàu được định giá bằng mạng sống kẻ nghèo.",
    genre: "Tâm lý tội phạm · Kinh dị xã hội",
    year: "2025",
    location: "Việt Nam · Hồng Kông",
    // Khối credit ở chân cover (giống poster phim):
    credits: [
      { role: "Đạo diễn", name: "David Ren (任浩瑜)", image: "images/info-case.jpg" },
      { role: "Biên kịch", name: "Zhang Jianwei (张建伟) · Sunshine Pham", image: "images/theme-justice.jpg" },
      { role: "Diễn viên (đề bạt)", name: "Lan Khuê · Thanh Hằng · Kim Lý · Trần Bảo Sơn", image: "images/theme-identity.jpg" },
      { role: "Producer (đề bạt)", name: "Irene Trịnh", image: "images/tone-luxury.jpg" },
    ],
    image: "images/cover.jpg",         // ảnh nền cover — thay file này
  },

  /* ============================ 02 · LOGLINE ============================ */
  logline: {
    text:
      "Giữa thành phố xa hoa nơi tội ác của giới siêu giàu được định giá bằng mạng sống " +
      "kẻ nghèo, một nữ chuyên gia tuyển dụng thâm nhập đường dây thế thân tội phạm lớn " +
      "nhất nước — quyết tâm lật đổ đế chế từ bên trong, mà không hề biết kẻ đứng đầu " +
      "chính là người mẹ đã bỏ rơi cô.",
  },

  /* ============================ 03 · SYNOPSIS ============================ */
  synopsis: {
    paragraphs: [
      "Minh Phương — một nữ chuyên gia tuyển dụng — thâm nhập vào đế chế của Jennifer, " +
      "đường dây thế thân tội phạm lớn nhất nước, với tham vọng lật đổ nó từ bên trong. " +
      "Tại đây cô đối mặt với Vũ, kẻ nắm giữ những bí mật quá khứ có thể khiến cả đế chế " +
      "lung lay, và Lão Sói — đối tác lão luyện trong việc dàn dựng hiện trường giả.",

      "Minh Phương nhận ra mình đang chơi một ván cờ tử thần: nơi mỗi con người đều mang " +
      "một bí mật chết người, và ranh giới giữa kẻ săn mồi cùng con mồi liên tục bị xoá nhoà.",

      "Jennifer từng là người giúp việc trong một gia đình thượng lưu, bị ông chủ hãm hiếp " +
      "và truy sát. Trong cơn hoảng loạn, bà bỏ lại đứa con vừa sinh giữa đêm mưa lạnh giá. " +
      "Chính Lão Sói — một đặc vụ ngầm trong lúc làm nhiệm vụ — đã nhặt được đứa bé ấy và " +
      "nuôi dạy cô thành Minh Phương.",

      "Jennifer sau đó được một tài phiệt cưu mang, kết hôn và bước chân vào giới siêu giàu. " +
      "Khi người chồng chết với tội danh rửa tiền và buôn ma tuý, bà phát minh ra dịch vụ " +
      "dùng người nghèo cùng công nghệ deepfake để rửa tội cho giới thượng lưu.",

      "Bí mật cuối cùng vỡ òa khi Minh Phương bắn người mẹ ruột của mình một phát chí mạng — " +
      "mà không hề hay biết.",
    ],
  },

  /* ============================ 04 · THEME ============================ */
  theme: {
    intro: "Một lát cắt tâm lý xã hội về quyền lực, danh tính và cái giá của sự sống còn.",
    items: [
      { title: "Bất bình đẳng giai cấp", text: "Mạng sống kẻ nghèo trở thành hàng hoá che chắn cho tội ác của giới siêu giàu.", image: "images/theme-class.jpg" },
      { title: "Danh tính & nguỵ trang", text: "Khi ai cũng là 'thế thân' của một người khác, sự thật về chính mình là thứ đắt nhất.", image: "images/Danh tính & nguỵ trang.jpg" },
      { title: "Kẻ săn mồi & con mồi", text: "Ranh giới giữa thợ săn và con mồi liên tục bị xoá nhoà cho tới khoảnh khắc cuối cùng.", image: "images/Kẻ săn mồi & con mồi.jpg" },
      { title: "Tình mẫu tử & sự ruồng bỏ", text: "Đứa con bị bỏ rơi trong đêm mưa trở về như một định mệnh không thể tránh.", image: "images/theme-mother.jpg" },
      { title: "Công nghệ & sự thật", text: "Deepfake biến tội lỗi thành thứ có thể mua bán, chỉnh sửa và xoá bỏ.", image: "images/theme-tech.jpg" },
      { title: "Công lý hay báo thù", text: "Lật đổ một đế chế từ bên trong — nhưng cái giá phải trả là máu mủ ruột thịt.", image: "images/theme-justice.jpg" },
    ],
  },

  /* ===================== 05 · CHARACTER BREAKDOWN ===================== */
  /* "secret" hiển thị như một dòng hồ sơ bị che (redacted) — click để lộ. */
  characters: {
    items: [
      {
        name: "Minh Phương",
        actor: "Lan Khuê (đề bạt)",
        role: "Nữ chính · Chuyên gia tuyển dụng",
        bio: "Được Lão Sói nhặt về và đào tạo. Thâm nhập đế chế Jennifer để lật đổ từ bên trong.",
        secret: "Là đứa con thất lạc Jennifer đã bỏ rơi trong đêm mưa.",
        image: "images/actor-lankhue.jpg",
      },
      {
        name: "Jennifer",
        actor: "Thanh Hằng (đề bạt)",
        role: "Phản diện chính · Bà trùm đế chế thế thân",
        bio: "Từ người giúp việc bị hãm hiếp & truy sát trở thành phu nhân tài phiệt, rồi kiến tạo đường dây 'rửa tội' bằng người nghèo và deepfake.",
        secret: "Mẹ ruột của Minh Phương — bị chính con gái mình bắn chết mà không hay biết.",
        image: "images/actor-thanhhang.jpg",
      },
      {
        name: "Vũ",
        actor: "Kim Lý (đề bạt)",
        role: "Người giữ bí mật",
        bio: "Nắm giữ những bí mật quá khứ có thể khiến cả đế chế lung lay. Mảnh ghép nguy hiểm nhất trong ván cờ.",
        secret: "Quá khứ của Vũ là chìa khoá mở ra toàn bộ sự thật.",
        image: "images/actor-kimly.jpg",
      },
      {
        name: "Lão Sói",
        actor: "Trần Bảo Sơn (đề bạt)",
        role: "Đối tác · Bậc thầy hiện trường giả",
        bio: "Đặc vụ ngầm, lão luyện trong việc dàn dựng hiện trường giả. Người đã nuôi dạy Minh Phương.",
        secret: "Người duy nhất biết Minh Phương là con ai.",
        image: "images/actor-tranbaoson.jpg",
      },
      {
        name: "Chồng của Jennifer",
        actor: "Thành Long (đề bạt · khách mời)",
        role: "Tài phiệt Hồng Kông",
        bio: "Người cưu mang và đưa Jennifer vào giới siêu giàu.",
        secret: "Chết với tội danh rửa tiền và buôn ma tuý — khởi nguồn của đế chế thế thân.",
        image: "images/actor-thanhlong.jpg",
      },
      {
        name: "Vai khách mời",
        actor: "Lý Nhã Kỳ (đề bạt · khách mời)",
        role: "Diễn viên khách mời · Lựa chọn thay thế",
        bio: "Phương án casting bổ sung, linh hoạt cho một tuyến nhân vật quyền lực trong giới thượng lưu.",
        secret: "",
        image: "images/actor-lynhaky.jpg",
      },
    ],
  },

  /* ============================ 06 · VISUAL TONE ============================ */
  visualTone: {
    intro:
      "Tông màu ẤM — vàng hổ phách, đồng, espresso. Vẻ xa hoa ấm áp che giấu sự mục ruỗng " +
      "bên dưới: ánh đèn neon vàng của thành phố về đêm, lụa và vàng, bóng tối màu cà phê đặc.",
    keywords: ["Golden hour xa hoa", "Neon hổ phách", "Bóng tối espresso", "Lụa & ánh kim", "Tương phản nóng–lạnh"],
    images: [
      { image: "images/tone-hongkong.jpg", caption: "Hong Kong về đêm — neon ướt" },
      { image: "images/tone-luxury.jpg", caption: "Khách sạn thượng lưu — vàng & gỗ tối" },
      { image: "images/tone-surveillance.jpg", caption: "Giám sát & deepfake — công nghệ che tội" },
      { image: "images/tone-rain.jpg", caption: "Đêm mưa châu Á — ký ức ruồng bỏ" },
    ],
  },

  /* ====================== 07 · MARKET COMPARISON ====================== */
  /* Phim tham chiếu để định vị thị trường. */
  marketComparison: {
    intro:
      "Định vị: phim noir xa hoa châu Á cho liên hoan phim quốc tế và nền tảng streaming — " +
      "giao điểm giữa phim tội phạm tâm lý và phê phán giai cấp đang được khán giả toàn cầu ưa chuộng.",
    items: [
      { title: "Parasite (Ký Sinh Trùng)", note: "Phê phán giai cấp · đời sống đô thị châu Á", image: "images/comp-class.jpg" },
      { title: "The Menu", note: "Giới thượng lưu bị bóc trần · thriller cao cấp", image: "images/comp-alley.jpg" },
      { title: "Triangle of Sadness", note: "Châm biếm giàu–nghèo · xa hoa mục ruỗng", image: "images/comp-city.jpg" },
      { title: "Squid Game", note: "Người nghèo thành vật thế · quyền lực giám sát", image: "images/comp-monitor.jpg" },
    ],
  },

  /* ======================= 08 · DIRECTOR VISION ======================= */
  directorVision: {
    director: "David Ren (任浩瑜)",
    role: "Đạo diễn",
    quote:
      "Tôi muốn khán giả bước vào một thế giới đẹp đến nghẹt thở rồi nhận ra mỗi ánh vàng " +
      "đều được trả bằng một mạng người. 'Thế Thân' không chỉ là một phim tội phạm — nó là " +
      "tấm gương soi vào cái giá của sự sống còn, nơi kẻ săn mồi và con mồi có chung một khuôn mặt.",
    filmography: [
      "Đạo diễn — «Về tôi, ký ức và tương lai» (2024)",
      "Đạo diễn — «Thiên hạ vô địch» Ever Victorious (2023)",
      "Đạo diễn — phim ngắn «Cô ấy, người máy»",
      "Diễn viên — «Đường phân giới» (2022), «Phù Dao» (2018), «Toàn Chức Cao Thủ» (2011)",
    ],
  },

  /* ======================= 09 · CAST PROPOSAL ======================= */
  cast: {
    badge: "ĐỀ BẠT",   // nhãn dán trên mỗi diễn viên (đổi thành "" để ẩn)
    items: [
      { name: "Lan Khuê",       as: "vai Minh Phương", note: "Diễn viên · người mẫu", image: "images/actor-lankhue.jpg" },
      { name: "Thanh Hằng",     as: "vai Jennifer",    note: "Diễn viên · người mẫu", image: "images/actor-thanhhang.jpg" },
      { name: "Kim Lý",         as: "vai Vũ",          note: "Diễn viên",            image: "images/actor-kimly.jpg" },
      { name: "Trần Bảo Sơn",   as: "vai Lão Sói",     note: "Diễn viên",            image: "images/actor-tranbaoson.jpg" },
      { name: "Thành Long",     as: "vai chồng Jennifer · khách mời", note: "Tài phiệt Hồng Kông", image: "images/actor-thanhlong.jpg" },
      { name: "Lý Nhã Kỳ",      as: "khách mời · lựa chọn khác", note: "Diễn viên",   image: "images/actor-lynhaky.jpg" },
    ],
  },

  /* ======================= 10 · CREW / NHÂN SỰ (đề bạt) ======================= */
  crew: {
    note: "Toàn bộ nhân sự ở dạng ĐỀ BẠT.",
    items: [
      { dept: "Producer",        name: "Irene Trịnh", detail: "Có mối quan hệ với Netflix" },
      { dept: "Đạo diễn",        name: "David Ren (任浩瑜)", detail: "" },
      { dept: "Biên kịch",       name: "Zhang Jianwei (张建伟) · Sunshine Pham", detail: "" },
      { dept: "Âm nhạc",         name: "Nathan Wang (王宗贤)", detail: "Ho Szu Yin · Yên Yu Lap" },
      { dept: "Quay phim",       name: "Kuo-Lung Chen (陈国隆)", detail: "Busan IFF · Golden Bell Awards" },
      { dept: "Dựng phim",       name: "Belle Wong (李佩華) · Tzu Ying Wu", detail: "Giải Golden Bell" },
      { dept: "Thiết kế sản xuất", name: "Charles McCarry", detail: "Excellence in Production 2007" },
      { dept: "Thiết kế phục trang", name: "Patricia Field", detail: "The Devil Wears Prada" },
    ],
  },

  /* ============================ 11 · BUDGET ============================ */
  budget: {
    total: "16.000.000 USD",
    note: "Tổng vốn 16 triệu USD — ĐÃ bao gồm marketing tại Cannes và marketing toàn cầu.",
    // Phân bổ chỉ mang tính tham khảo — bạn chỉnh số % cho phù hợp.
    breakdown: [
      { label: "Sản xuất & bối cảnh",        percent: 34 },
      { label: "Diễn viên & ê-kíp",          percent: 22 },
      { label: "Hậu kỳ & VFX (deepfake)",    percent: 16 },
      { label: "Marketing toàn cầu",         percent: 14 },
      { label: "Marketing tại Cannes",       percent: 8  },
      { label: "Dự phòng",                   percent: 6  },
    ],
  },

  /* ======================== 12 · REVENUE MODEL ======================== */
  revenue: {
    intro:
      "Phát hành theo ba vòng kết hợp với bản quyền streaming toàn cầu thông qua mối quan hệ " +
      "của Producer Irene Trịnh với Netflix.",
    rounds: [
      { round: "Vòng 1", text: "Mang phim tới Liên hoan phim Cannes." },
      { round: "Vòng 2", text: "Phát hành tại Anh, Mỹ, Hàn Quốc, Nhật Bản, Singapore…" },
      { round: "Vòng 3", text: "Phát hành tại Hồng Kông, Trung Quốc và Việt Nam." },
    ],
    // Tỷ trọng nguồn thu — chỉ mang tính tham khảo, chỉnh số % tuỳ ý.
    streams: [
      { label: "Phòng vé quốc tế",        percent: 38 },
      { label: "Bản quyền streaming (Netflix)", percent: 30 },
      { label: "Phòng vé châu Á",         percent: 20 },
      { label: "Bản quyền & thương mại",  percent: 12 },
    ],
  },

  /* ===================== 13 · PRODUCTION TIMELINE ===================== */
  timeline: {
    phases: [
      { phase: "Kịch bản",   period: "T5 – T12 / 2024" },
      { phase: "Tiền kỳ",    period: "T2 – T6 / 2025" },
      { phase: "Quay phim",  period: "T6 – T7 / 2025" },
      { phase: "Hậu kỳ",     period: "T8 / 2025 – T3 / 2026" },
      { phase: "Cannes",     period: "T3 – T5 / 2026" },
      { phase: "Phát hành",  period: "Từ T6 / 2026" },
    ],
  },

  /* ============================ LIÊN HỆ (chân trang) ============================ */
  contact: {
    line: "Sunshine emotion",
    phone: "(+84) 799119261",
    email: "phammi2001@gmail.com",
  },
};
