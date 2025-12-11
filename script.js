// --- CẤU HÌNH ---
// Đổi ngày giờ sinh nhật tại đây (Tháng/Ngày/Năm Giờ:Phút:Giây)
const targetDate = new Date("December 12, 2025 00:00:00").getTime();

// Lời chúc của bạn (dùng \n để xuống dòng)
const message = "Chúc mừng sinh nhật em yêu! 🎉\nTuổi mới rực rỡ, xinh đẹp và luôn hạnh phúc nhé.\nAnh luôn ở đây bên em. Yêu em nhiều! ❤️";

// --- LOGIC ---
const page1 = document.getElementById('countdown-page');
const page2 = document.getElementById('surprise-page');
const timerElement = document.getElementById('timer');

// Hàm chạy pháo hoa (dùng thư viện canvas-confetti)
function startFireworks() {
    var duration = 15 * 1000; // Pháo hoa bắn trong 15 giây
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Hàm gõ chữ (Typing Effect)
function typeWriter() {
    const textElement = document.getElementById('typing-text');
    let i = 0;
    const speed = 50; // Tốc độ gõ (ms)

    function type() {
        if (i < message.length) {
            textElement.textContent += message.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Sau khi gõ xong chữ thì hiện ảnh
            showPhotos();
        }
    }
    type();
}

// Hàm hiện ảnh
function showPhotos() {
    const photos = document.querySelectorAll('.photo');
    photos.forEach((photo, index) => {
        setTimeout(() => {
            photo.classList.add('show');
        }, index * 500); // Mỗi ảnh hiện cách nhau 0.5 giây
    });
}

// Hàm Đếm Ngược Chính
const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Tính toán thời gian
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Hiển thị ra màn hình
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // KHI ĐẾM NGƯỢC KẾT THÚC
    if (distance < 0) {
        clearInterval(x);
        
        // 1. Ẩn trang đếm ngược
        page1.style.display = 'none';
        
        // 2. Hiện trang chúc mừng (đổi từ display:none sang flex)
        page2.style.display = 'flex';
        
        // 3. Kích hoạt hiệu ứng
        startFireworks(); // Bắn pháo hoa
        typeWriter();     // Chạy chữ và sau đó hiện ảnh
    }
}, 1000);
