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
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            const thumbnails = document.querySelectorAll('.thumbnail');
            
            let currentSlide = 0;
            const totalSlides = slides.length;
            
            // Initialize slider position
            updateSlider();
            
            // Next button click
            nextBtn.addEventListener('click', function() {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateSlider();
            });
            
            // Previous button click
            prevBtn.addEventListener('click', function() {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                updateSlider();
            });
            
            // Thumbnail click
            thumbnails.forEach(thumbnail => {
                thumbnail.addEventListener('click', function() {
                    currentSlide = parseInt(this.getAttribute('data-index'));
                    updateSlider();
                });
            });
            
            // Auto slide every 5 seconds
            setInterval(function() {
                currentSlide = (currentSlide + 1) % totalSlides;
                updateSlider();
            }, 5000);
            
            function updateSlider() {
                // Update slider position
                slider.style.transform = `translateX(-${currentSlide * 100}%)`;
                
                // Update active thumbnail
                thumbnails.forEach(thumbnail => {
                    thumbnail.classList.remove('active');
                });
                thumbnails[currentSlide].classList.add('active');
            }
        });



           // Gallery Filtering
        const filterButtons = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Filter gallery items (simplified for demo)
                // In a real implementation, you would filter based on data attributes
                galleryItems.forEach(item => {
                    item.style.display = 'block';
                });
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


        