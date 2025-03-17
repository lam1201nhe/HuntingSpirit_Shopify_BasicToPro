document.addEventListener('DOMContentLoaded', function() {
    // Tìm tất cả các nút "Read more"
    const readMoreButtons = document.querySelectorAll('.read-more-button');
    
    readMoreButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Tìm phần mô tả liên quan
        const description = this.previousElementSibling;
        
        // Chuyển đổi trạng thái
        if (description.classList.contains('collapsed')) {
          description.classList.remove('collapsed');
          description.classList.add('expanded');
        } else {
          description.classList.remove('expanded');
          description.classList.add('collapsed');
          
          // Cuộn trang lên vị trí mô tả khi thu gọn
          description.scrollIntoView({behavior: 'smooth'});
        }
      });
    });
    
    // Kiểm tra xem có cần hiển thị nút Read More không
    const descriptions = document.querySelectorAll('.product__description');
    descriptions.forEach(description => {
      // Lưu trữ trạng thái ban đầu
      const initialHeight = description.scrollHeight;
      const maxHeight = 150; // Phải khớp với giá trị max-height trong CSS
      
      // Nếu mô tả ngắn hơn max-height, ẩn nút Read More
      if (initialHeight <= maxHeight) {
        const button = description.nextElementSibling;
        if (button && button.classList.contains('read-more-button')) {
          button.style.display = 'none';
          description.classList.remove('collapsed');
        }
      }
    });
  });