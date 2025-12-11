// **BƯỚC 1: CẦN CHỈNH SỬA NGÀY SINH NHẬT TẠI ĐÂY**
// Đặt ngày và giờ chính xác bạn muốn bất ngờ (Tháng ngày, Năm Giờ:Phút:Giây)
// Ví dụ: Ngày 12/12/2025 lúc 00:00:00
const birthdayDate = new Date("December 12, 2025 00:00:00").getTime(); 

// **BƯỚC 2: CẦN CHỈNH SỬA LỜI CHÚC TẠI ĐÂY**
// Dùng \n để xuống dòng (newline)
const message = `Tuy giấy tờ là 12/1, nhưng hôm nay mới là ngày Anh muốn tri ân người con gái tuyệt vời nhất trong đời. Cảm ơn em đã đến bên Anh. Chúc em luôn hạnh phúc, xinh đẹp và mỉm cười thật tươi!
\nAnh yêu em rất nhiều.`;
let charIndex = 0;
const typingSpeed = 50; 

// Khai báo các biến DOM
const countdownContainer = document.getElementById("countdown-container");
const surpriseContainer = document.getElementById("surprise-container");
const typedMessageSpan = document.getElementById('typed-message');
const signatureText = document.getElementById('signature-text');
const photos = document.querySelectorAll('.gallery-item');


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
    
    // Đổi nền và hiện container chúc mừng
    document.body.style.backgroundImage = 'none'; 
    document.body.style.backgroundColor = '#290033'; 
    surpriseContainer.classList.remove('hidden');
    
    setTimeout(() => {
        surpriseContainer.style.opacity = '1';
        typeLetter(); // Bắt đầu chạy chữ
        startFireworks(); // Bắt đầu pháo hoa
    }, 100); 
    
    document.title = "🎉 Happy Birthday! 🎉";
}

/* --- HÀM CHẠY CHỮ (TYPING EFFECT) --- */
function typeLetter() {
    if (charIndex < message.length) {
        // Nếu gặp ký tự xuống dòng (\n) thì thêm <br>
        if (message.charAt(charIndex) === '\n') {
            typedMessageSpan.innerHTML += '<br>';
        } else {
            typedMessageSpan.textContent += message.charAt(charIndex);
        }
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
        // Bắt đầu hiện ảnh sau khi lời chúc chạy xong
        const delay = (index * 0.4) + 1.0; 
        
        setTimeout(() => {
            photo.classList.add('photo-animate');
        }, delay * 1000);
    });
}

/* --- HÀM KÍCH HOẠT PHÁO HOA --- */
function startFireworks() {
    // Chỉ kích hoạt nếu thư viện đã được nhúng trong HTML
    if (typeof Fireworks !== 'undefined') {
        const container = document.getElementById('fireworks-canvas');
        container.style.display = 'block';
        
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
}


// Chạy hàm đếm ngược
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
