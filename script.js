// **BƯỚC 1: ĐẶT NGÀY SINH NHẬT CHÍNH XÁC**
// Đặt ngày sinh nhật TẠI ĐÂY (Năm, Tháng-1, Ngày, Giờ, Phút, Giây)
// Ví dụ: Ngày 12/12/2025 lúc 0 giờ 0 phút 0 giây (00:00:00)
// HÃY ĐỔI SANG NĂM HIỆN TẠI HOẶC TƯƠNG LAI BẠN MUỐN
const birthdayDate = new Date("December 12, 2025 00:00:00").getTime(); 

// Hàm cập nhật bộ đếm
function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    // Tính toán thời gian
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Hiển thị kết quả trong các thẻ HTML
    document.getElementById("days").innerHTML = String(days).padStart(2, '0');
    document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

    // **BƯỚC 2: KHI BỘ ĐẾM KẾT THÚC**
    if (distance < 0) {
        clearInterval(countdownInterval);
        showSurprise();
    }
}

// Hàm hiển thị nội dung bất ngờ và kích hoạt animation ảnh
function showSurprise() {
    // Ẩn container đếm ngược và hiện container chúc mừng
    document.getElementById("countdown-container").classList.add('hidden');
    document.getElementById("surprise-container").classList.remove('hidden');
    
    // Đổi màu nền sang màu lễ hội hơn
    document.body.style.backgroundColor = '#290033'; 

    // **BƯỚC 3: KÍCH HOẠT ANIMATION ẢNH CÓ ĐỘ TRỄ**
    // Lấy danh sách ảnh
    const photos = document.querySelectorAll('.gallery-item');
    
    // Lặp qua từng ảnh và thêm class animation với độ trễ tăng dần
    photos.forEach((photo, index) => {
        // Độ trễ (delay) cho mỗi ảnh: 0s, 0.4s, 0.8s, ...
        const delay = (index * 0.4) + 2.0; // Bắt đầu sau 2.0s để lời chúc hiện ra trước
        
        // Dùng setTimeout để thêm class animation sau độ trễ
        setTimeout(() => {
            photo.classList.add('photo-animate');
        }, delay * 1000); // Nhân 1000 để chuyển từ giây sang mili giây
    });

    // Thêm hiệu ứng pháo hoa (Nếu bạn muốn, cần thêm thư viện)
    // startFireworks();
    
    document.title = "🎉 Happy Birthday! 🎉";
}

// Chạy hàm đếm ngược mỗi giây
const countdownInterval = setInterval(updateCountdown, 1000);

// Chạy lần đầu tiên để tránh bị độ trễ 1 giây
updateCountdown();
