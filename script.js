// **BƯỚC 1: ĐẶT NGÀY SINH NHẬT CHÍNH XÁC**
// Ngày hiện tại là 11/12/2025. Nếu muốn làm bất ngờ vào ngày 12/12/2025 lúc 00:00:00
const birthdayDate = new Date("December 12, 2025 00:00:00").getTime(); 

// **BƯỚC 2: LỜI CHÚC (SẼ CHẠY CHỮ)**
const message = `Tuy giấy tờ là 12/1, nhưng hôm nay mới là ngày Anh muốn tri ân người con gái tuyệt vời nhất trong đời. Cảm ơn em đã đến bên Anh. Chúc em luôn hạnh phúc, xinh đẹp và mỉm cười thật tươi!
Anh yêu em rất nhiều.`;
let charIndex = 0;
const typingSpeed = 50; // Tốc độ chạy chữ (ms)

// Khai báo các biến DOM
const countdownContainer = document.getElementById("countdown-container");
const surpriseContainer = document.getElementById("surprise-container");
const typedMessageSpan = document.getElementById('typed-message');
const signatureText = document.getElementById('signature-text');
const photos = document.querySelectorAll('.gallery-item');
// const musicElement = document.getElementById("bday-music"); // Nếu dùng nhạc

/* --- HÀM CHÍNH CHO ĐẾM NGƯỢC --- */
function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthdayDate - now;

    if (distance < 0) {
        clearInterval(countdownInterval);
        showSurprise();
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = String(days).padStart(2, '0');
    document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');
}

/* --- HÀM KÍCH HOẠT HIỆU ỨNG CHÚC MỪNG --- */
function showSurprise() {
    countdownContainer.classList.add('hidden');
    
    // Đổi màu nền & hiện container chúc mừng
    document.body.style.backgroundImage = 'none'; // Xóa ảnh nền chờ
    document.body.style.backgroundColor = '#290033'; 
    surpriseContainer.classList.remove('hidden');
    
    setTimeout(() => {
        surpriseContainer.style.opacity = '1';
        // musicElement?.play(); // Kích hoạt nhạc (Nếu có)
        typeLetter();
        startFireworks();
    }, 100); 
    
    document.title = "🎉 Happy Birthday! 🎉";
}

/* --- HÀM CHẠY CHỮ (TYPING EFFECT) --- */
function typeLetter() {
    if (charIndex < message.length) {
        typedMessageSpan.textContent += message.charAt(charIndex);
        charIndex++;
        setTimeout(typeLetter, typingSpeed);
    } else {
        // Sau khi chạy chữ xong, hiện chữ ký và ảnh
        signatureText.style.opacity = '1';
        animatePhotos();
    }
}

/* --- HÀM HIỆN ẢNH CÓ ĐỘ TRỄ --- */
function animatePhotos() {
    photos.forEach((photo, index) => {
        // Bắt đầu hiện ảnh sau khi lời chúc chạy xong (khoảng 1s sau)
        const delay = (index * 0.4) + 1.0; 
        
        setTimeout(() => {
            photo.classList.add('photo-animate');
        }, delay * 1000);
    });
}

/* --- HÀM KÍCH HOẠT PHÁO HOA --- */
function startFireworks() {
    const container = document.getElementById('fireworks-canvas');
    container.style.display = 'block';
    
    // Kích hoạt thư viện pháo hoa đã nhúng (js-fireworks)
    const fireworks = new Fireworks.default(container, {
        autoresize: true,
        opacity: 0.9,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        speed: 5,
        particles: 50,
        trace: 3,
        explosion: 5,
        flickering: 50,
    });
    
    fireworks.start();
}


// Chạy hàm đếm ngược
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
