 // Mobile menu toggle functionality
        document.getElementById('nav-toggle').addEventListener('click', function() {
            const nav = document.getElementById('nav');
            nav.classList.toggle('active');
            
            // Change toggle button icon
            this.textContent = nav.classList.contains('active') ? '✕' : '☰';
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', () => {
                const nav = document.getElementById('nav');
                nav.classList.remove('active');
                document.getElementById('nav-toggle').textContent = '☰';
            });
        });





document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Initialize slider position
    updateSlider();
    
    // Dot click navigation
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            currentSlide = parseInt(this.getAttribute('data-index'));
            updateSlider();
            resetAutoSlide(); // Reset auto-slide when manually navigating
        });
    });
    
    // Auto slide every 5 seconds
    let slideInterval = setInterval(function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }, 5000);
    
    function updateSlider() {
        // Update slider position
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update active slide and dot
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        slides[currentSlide].classList.add('active');
        
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        dots[currentSlide].classList.add('active');
    }
    
    function resetAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(function() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }, 5000);
    }
    
    // Optional: Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
            resetAutoSlide();
        } else if (e.key === 'ArrowRight') {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
            resetAutoSlide();
        }
    });
});

          
        // Form Submission
        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your booking request! Elena will contact you soon to confirm your appointment.');
            this.reset();
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });

         // Mobile dropdown functionality
        if (window.innerWidth <= 768) {
            const dropdown = document.querySelector('.dropdown');
            const dropdownLink = document.querySelector('.dropdown > a');
            
            dropdownLink.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
        }



// Slide-in panel functionality footer services...................//


           document.addEventListener('DOMContentLoaded', function() {
            // Get all elements
            const panelTriggers = document.querySelectorAll('.panel-trigger');
            const panels = document.querySelectorAll('.slide-panel');
            const overlay = document.querySelector('.overlay');
            const closeButtons = document.querySelectorAll('.panel-close');
            
            // Add click event to each trigger
            panelTriggers.forEach(trigger => {
                trigger.addEventListener('click', function() {
                    const panelType = this.getAttribute('data-panel');
                    const targetPanel = document.getElementById(panelType + '-panel');
                    
                    // Close all panels first
                    panels.forEach(panel => {
                        panel.classList.remove('active');
                    });
                    
                    // Open the target panel
                    if (targetPanel) {
                        targetPanel.classList.add('active');
                        overlay.classList.add('active');
                    }
                });
            });
            
            // Close panels when close button is clicked
            closeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const panel = this.closest('.slide-panel');
                    panel.classList.remove('active');
                    overlay.classList.remove('active');
                });
            });
            
            // Close panels when overlay is clicked
            overlay.addEventListener('click', function() {
                panels.forEach(panel => {
                    panel.classList.remove('active');
                });
                this.classList.remove('active');
            });
            
            // Close panels when Escape key is pressed
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    panels.forEach(panel => {
                        panel.classList.remove('active');
                    });
                    overlay.classList.remove('active');
                }
            });
        });



         // Simple function to open panels
        function openPanel(panelName) {
            // Close all panels first
            closePanels();
            
            // Open the selected panel
            const panel = document.getElementById(panelName + 'Panel');
            const overlay = document.getElementById('overlay');
            
            if (panel && overlay) {
                panel.classList.add('active');
                overlay.classList.add('active');
            }
        }
        
        // Function to close all panels
        function closePanels() {
            const panels = document.querySelectorAll('.slide-panel');
            const overlay = document.getElementById('overlay');
            
            panels.forEach(panel => {
                panel.classList.remove('active');
            });
            
            if (overlay) {
                overlay.classList.remove('active');
            }
        }
        
        // Close panels when Escape key is pressed
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closePanels();
            }
        });
        
        
        
        
        // Lightbox implementation
    function initLightbox() {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      const lightboxClose = document.getElementById('lightbox-close');
      const galleryItems = document.querySelectorAll('.gallery-item');
      

         
      // Lightbox functionality
      initLightbox();
      
      // Check if lightbox elements exist
      if (!lightbox || !lightboxImg || !lightboxClose) {
        console.error('Lightbox elements not found');
        return;
      }
      
      // Open lightbox when gallery item is clicked
      galleryItems.forEach(item => {
        item.addEventListener('click', function() {
          const img = this.querySelector('img');
          if (img && img.complete && img.naturalHeight !== 0) {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
          }
        });
      });
      
      // Close lightbox
      lightboxClose.addEventListener('click', function() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
      });
      
      // Close lightbox when clicking outside the image
      lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
          lightbox.classList.remove('active');
          document.body.style.overflow = 'auto';
        }
      });
      
      // Keyboard navigation
      document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
          lightbox.classList.remove('active');
          document.body.style.overflow = 'auto';
        }
      });
    }

    // Image error handling
    function handleImageError(img) {
      console.log('Image failed to load:', img.src);
      img.style.display = 'none';
      img.parentElement.style.background = 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)';
      img.parentElement.style.display = 'flex';
      img.parentElement.style.alignItems = 'center';
      img.parentElement.style.justifyContent = 'center';
      
      const errorDiv = document.createElement('div');
      errorDiv.innerHTML = `
        <div style="text-align: center; color: #777;">
          <p>Image not available</p>
          <small>${img.alt}</small>
        </div>
      `;
      
      img.parentElement.appendChild(errorDiv);
    }


     // Simple animation for the hero text
        document.addEventListener('DOMContentLoaded', function() {
            const heroText = document.querySelector('.hero-text');
            heroText.style.opacity = '0';
            heroText.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                heroText.style.transition = 'opacity 1s ease, transform 1s ease';
                heroText.style.opacity = '1';
                heroText.style.transform = 'translateY(0)';
            }, 300);
        });


        