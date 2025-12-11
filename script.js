// **BƯỚC 1: ĐẶT NGÀY SINH NHẬT CHÍNH XÁC**
// Ngày hiện tại là 11/12/2025. Tôi đặt mục tiêu là 12/12/2025 00:00:00
const birthdayDate = new Date("December 12, 2025 00:00:00").getTime(); 
const musicElement = document.getElementById("bday-music");

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

    // **KHI BỘ ĐẾM KẾT THÚC**
    if (distance < 0) {
        clearInterval(countdownInterval);
        showSurprise();
    }
}

// Hàm hiển thị nội dung bất ngờ và kích hoạt animation ảnh
function showSurprise() {
    // Ẩn container đếm ngược
    document.getElementById("countdown-container").classList.add('hidden');
    
    // Hiện container chúc mừng và cho nó một chút thời gian để chuyển đổi nền mượt mà
    const surpriseContainer = document.getElementById("surprise-container");
    surpriseContainer.classList.remove('hidden');
    
    // Bắt đầu animation opacity của container chính
    setTimeout(() => {
        surpriseContainer.style.opacity = '1';
        document.body.style.backgroundColor = '#290033'; // Đổi màu nền lễ hội
    }, 10); 

    // **KÍCH HOẠT ANIMATION ẢNH CÓ ĐỘ TRỄ**
    const photos = document.querySelectorAll('.gallery-item');
    
    photos.forEach((photo, index) => {
        // Độ trễ (delay): Ảnh 1 hiện sau 2.5s, Ảnh 2 sau 2.9s, Ảnh 3 sau 3.3s
        const delay = (index * 0.4) + 2.5; 
        
        setTimeout(() => {
            photo.classList.add('photo-animate');
        }, delay * 1000);
    });

    // **KÍCH HOẠT NHẠC (NẾU CÓ)**
    if (musicElement) {
        // musicElement.play(); // Thường sẽ bị chặn bởi trình duyệt, nhưng nên thử
    }
    
    document.title = "🎉 Happy Birthday! 🎉";
}

// Chạy hàm đếm ngược mỗi giây
const countdownInterval = setInterval(updateCountdown, 1000);

// Chạy lần đầu tiên để tránh bị độ trễ 1 giây
updateCountdown();
