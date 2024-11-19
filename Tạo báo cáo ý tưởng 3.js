// Lấy các phần tử HTML
const toggleButton = document.getElementById('toggle-report');
const reportSection = document.getElementById('report');

// Thêm sự kiện click cho nút "Hiển thị Báo cáo"
toggleButton.addEventListener('click', () => {
    // Kiểm tra xem phần báo cáo có đang ẩn không
    if (reportSection.classList.contains('hidden')) {
        // Nếu đang ẩn, hiển thị báo cáo
        reportSection.classList.remove('hidden');
        toggleButton.textContent = 'Ẩn Báo cáo';
    } else {
        // Nếu đang hiển thị, ẩn báo cáo
        reportSection.classList.add('hidden');
        toggleButton.textContent = 'Hiển thị Báo cáo';
    }
});
