# THẾ THÂN (The Scapegoat) — Film Pitch Deck

Landing page giới thiệu dự án phim, tông màu ấm, concept **Hồ sơ mật**.
Toàn bộ nội dung & ảnh đều **sửa dễ dàng** mà không cần biết lập trình.

---

## 1. Sửa NỘI DUNG (text)

Mở **`js/content.js`** bằng bất kỳ trình soạn thảo nào (Notepad, VS Code, hoặc sửa
trực tiếp trên GitHub). Mọi câu chữ nằm trong dấu nháy `"..."`.

> Quy tắc: chỉ sửa phần chữ, **giữ nguyên dấu nháy** và **dấu phẩy `,` ở cuối dòng**.

Ví dụ đổi tên phim:
```js
title: "THẾ THÂN",        // ← đổi chữ ở đây
titleEn: "THE SCAPEGOAT", // ← và ở đây
```

---

## 2. Thay ẢNH

Tất cả ảnh nằm trong thư mục **`images/`**. Có 2 cách:

**Cách A (dễ nhất):** thay file ảnh của bạn vào, **đặt trùng tên** file cũ.
**Cách B:** đổi đường dẫn trong `content.js`, ví dụ `image: "images/anh-cua-toi.jpg"`.

### Danh sách ảnh và kích thước gợi ý

| File | Dùng cho | Tỷ lệ / kích thước |
|---|---|---|
| `cover.jpg` | Ảnh nền trang bìa | ngang, ~1600×1000 |
| `actor-lankhue.jpg` | Lan Khuê / Minh Phương | dọc 3:4, ~720×960 |
| `actor-thanhhang.jpg` | Thanh Hằng / Jennifer | dọc 3:4 |
| `actor-kimly.jpg` | Kim Lý / Vũ | dọc 3:4 |
| `actor-tranbaoson.jpg` | Trần Bảo Sơn / Lão Sói | dọc 3:4 |
| `actor-thanhlong.jpg` | Thành Long (khách mời) | dọc 3:4 |
| `actor-lynhaky.jpg` | Lý Nhã Kỳ (khách mời) | dọc 3:4 |
| `tone-1.jpg` … `tone-4.jpg` | Tông thị giác (mood) | dọc 4:5, ~640×800 |
| `comp-1.jpg` … `comp-4.jpg` | Poster phim tham chiếu | dọc 2:3, ~500×750 |

> Ảnh diễn viên dùng chung cho mục **Tuyến nhân vật** và **Đề bạt diễn viên** —
> thay 1 lần là cập nhật cả 2 nơi.

---

## 3. Xem thử trên máy

Chỉ cần **mở file `index.html`** bằng trình duyệt (nhấp đúp). Xong.

---

## 4. Đưa lên GitHub Pages (làm landing page online)

1. Tạo repo mới trên GitHub (ví dụ tên `the-scapegoat`).
2. Tải toàn bộ thư mục này lên (kéo–thả các file vào repo, hoặc dùng Git).
3. Vào **Settings → Pages**.
4. Mục **Source**, chọn nhánh **`main`** và thư mục **`/ (root)`**, nhấn **Save**.
5. Đợi 1–2 phút, GitHub sẽ cấp link dạng:
   `https://<tên-tài-khoản>.github.io/the-scapegoat/`

Mỗi lần sửa `content.js` hoặc thay ảnh rồi commit, trang sẽ tự cập nhật.

---

## 5. Cấu trúc thư mục

```
the-scapegoat-pitch/
├── index.html         ← khung trang (không cần sửa)
├── css/styles.css     ← giao diện, tông màu (không cần sửa)
├── js/
│   ├── content.js     ← ⭐ SỬA NỘI DUNG & ẢNH TẠI ĐÂY
│   └── app.js         ← bộ dựng trang (không cần sửa)
├── images/            ← ⭐ THAY ẢNH TẠI ĐÂY
└── README.md
```

---

## Ghi chú

- Toàn bộ **dàn diễn viên và nhân sự** đang ở dạng **ĐỀ BẠT** (đề xuất).
  Muốn ẩn nhãn "ĐỀ BẠT" trên thẻ diễn viên: trong `content.js` đặt `badge: ""`.
- Phần phân bổ **Vốn** và **doanh thu** chỉ mang tính tham khảo — chỉnh số `percent` tuỳ ý.
- Font hiển thị (Bodoni Moda, Manrope, Barlow Condensed) tải tự động khi xem online.
- Các mục theo thứ tự: Cover · Logline · Synopsis · Theme · Character breakdown ·
  Visual tone · Market comparison · Director vision · Cast proposal · Crew · Budget ·
  Revenue model · Production timeline.
