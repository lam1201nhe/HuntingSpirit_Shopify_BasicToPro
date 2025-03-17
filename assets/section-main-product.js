document.addEventListener('DOMContentLoaded', function() {
    // Chỉ xử lý chức năng toggle cho các nút
    const toggleButtons = document.querySelectorAll('.toggle-description-button');
    
    toggleButtons.forEach(button => {
      button.addEventListener('click', function() {
        const description = this.previousElementSibling;
        
        if (description.classList.contains('collapsed')) {
          description.classList.remove('collapsed');
          description.classList.add('expanded');
        } else {
          description.classList.remove('expanded');
          description.classList.add('collapsed');
          
          // Cuộn lên đầu phần mô tả khi thu gọn (tùy chọn)
          description.scrollIntoView({behavior: 'smooth', block: 'nearest'});
        }
      });
    });
    
    // Kiểm tra xem có cần hiển thị nút không - chỉ khi nội dung thực sự dài hơn 80px
    const descriptions = document.querySelectorAll('.product__description');
    descriptions.forEach(description => {
      // Nếu chiều cao thực tế nhỏ hơn hoặc bằng 80px, ẩn nút
      if (description.scrollHeight <= 80) {
        const button = description.nextElementSibling;
        if (button && button.classList.contains('toggle-description-button')) {
          button.style.display = 'none';
          description.classList.remove('collapsed');
        }
      }
    });
  });
  