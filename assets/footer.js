(function () {
    "use strict";
  
    const initFooterMobile = () => {
      // Chỉ chạy trên mobile
      if (window.innerWidth >= 750) return;
  
      const headings = document.querySelectorAll(
        ".footer-block__heading:not(.footer-block--brand .footer-block__heading)"
      );
  
      // Chỉ cần sửa lại phần xử lý click trong JavaScript:
      headings.forEach((heading) => {
        heading.addEventListener("click", () => {
          // Đóng tất cả các menu đang mở trước
          document
            .querySelectorAll(".footer-block__heading.is-active")
            .forEach((activeHeading) => {
              if (activeHeading !== heading) {
                activeHeading.classList.remove("is-active");
                activeHeading.nextElementSibling?.classList.remove("is-active");
              }
            });
  
          // Toggle menu hiện tại
          heading.classList.toggle("is-active");
          const content = heading.nextElementSibling;
          if (content?.classList.contains("footer-block__details-content")) {
            content.classList.toggle("is-active");
          }
        });
      });
    };
  
    // Khởi tạo khi DOM ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initFooterMobile);
    } else {
      initFooterMobile();
    }
  
    // Xử lý resize window
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        // Reset tất cả trạng thái khi resize
        const activeHeadings = document.querySelectorAll(
          ".footer-block__heading.is-active"
        );
        const activeContents = document.querySelectorAll(
          ".footer-block__details-content.is-active"
        );
  
        activeHeadings.forEach((heading) =>
          heading.classList.remove("is-active")
        );
        activeContents.forEach((content) =>
          content.classList.remove("is-active")
        );
  
        // Khởi tạo lại nếu là mobile
        initFooterMobile();
      }, 250);
    });
  })();
  
  
  
  