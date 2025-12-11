body {
    font-family: 'Arial', sans-serif;
    background-color: #121212; /* Nền tối sang trọng */
    color: #ffffff;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    transition: background-color 1s ease-in-out; /* Chuyển đổi màu nền mượt mà */
}

/* Định kiểu cho đồng hồ đếm ngược */
#countdown-container h1 {
    font-size: 2.5em;
    color: #FFD700; /* Vàng */
    margin-bottom: 20px;
}

#countdown-timer {
    font-size: 3.5em;
    font-weight: bold;
    letter-spacing: 3px;
    margin-bottom: 30px;
    color: #FF69B4; /* Hồng */
}

#countdown-timer span {
    display: inline-block;
    min-width: 60px;
    background: rgba(255, 255, 255, 0.1);
    padding: 10px;
    border-radius: 8px;
    margin: 0 5px;
}

/* Định kiểu cho phần bất ngờ */
#surprise-container {
    padding: 30px;
    max-width: 900px;
}

#surprise-container h1 {
    font-size: 3em;
    color: #00FFFF; /* Xanh ngọc */
    margin-bottom: 40px;
}

.hidden {
    display: none;
}

/* Bộ sưu tập ảnh */
.photo-gallery {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
}

.gallery-item {
    width: 200px;
    height: 200px;
    object-fit: cover; /* Đảm bảo ảnh vừa khung */
    border-radius: 50%; /* Ảnh tròn */
    border: 5px solid #FFD700;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
    transition: transform 0.5s ease;
}

.gallery-item:hover {
    transform: scale(1.05);
}

.message p {
    font-size: 1.2em;
    line-height: 1.6;
    margin: 15px 0;
}

.signature {
    font-style: italic;
    color: #FF69B4;
    margin-top: 30px !important;
}

/* Hiệu ứng Fade In cho lời chúc */
.fade-in {
    opacity: 0;
    animation: fadeIn 2s forwards;
}

@keyframes fadeIn {
    to {
        opacity: 1;
    }
}