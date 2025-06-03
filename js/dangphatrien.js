// Tạo popup HTML
function createPopup() {
    const popup = document.createElement('div');
    popup.id = 'dev-popup';
    popup.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    `;

    const popupContent = document.createElement('div');
    popupContent.style.cssText = `
        background: white;
        border-radius: 10px;
        padding: 30px;
        max-width: 400px;
        text-align: center;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    `;

    popupContent.innerHTML = `
        <h3 style="margin: 0 0 15px 0; color: #333;">Thông báo</h3>
        <p style="margin: 0 0 20px 0; color: #666; line-height: 1.5;">
            Mục này đang được phát triển, vui lòng quay lại sau
        </p>
        <p style="margin: 0 0 20px 0; color: #666;">
            Theo dõi dự án tại: 
            <a href="https://github.com/phancddev" target="_blank" style="color: #007bff; text-decoration: none;">
                Phan Công Dũng - GitHub
            </a>
        </p>
        <button id="popup-ok-btn" style="
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 30px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        ">OK</button>
    `;

    popup.appendChild(popupContent);
    return popup;
}

// Hiển thị popup
function showPopup() {
    const existingPopup = document.getElementById('dev-popup');
    if (existingPopup) {
        existingPopup.remove();
    }

    const popup = createPopup();
    document.body.appendChild(popup);

    // Xử lý click nút OK
    document.getElementById('popup-ok-btn').addEventListener('click', function() {
        popup.remove();
    });

    // Xử lý click ngoài popup để đóng
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.remove();
        }
    });
}

// Gắn sự kiện click cho các button
document.addEventListener('DOMContentLoaded', function() {
    const buttonIds = ['dpt1', 'dpt2', 'dpt3', 'dpt4'];
    
    buttonIds.forEach(function(id) {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                showPopup();
            });
        }
    });
});

// Nếu DOM đã load sẵn, chạy ngay lập tức
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        // Code đã được thực hiện ở trên
    });
} else {
    // DOM đã sẵn sàng
    const buttonIds = ['dpt1', 'dpt2', 'dpt3', 'dpt4'];
    
    buttonIds.forEach(function(id) {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                showPopup();
            });
        }
    });
}