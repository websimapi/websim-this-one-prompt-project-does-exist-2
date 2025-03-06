document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "This Minigame Idea Does Not Exist",
            url: "https://websim.ai/@api/this-minigame-idea-does-not-exist",
            description: "AI-generated minigame concepts brought to life",
            thumbnail: "minigame",
            color: "#FF6B6B"
        },
        {
            title: "This Programming Language Does Not Exist",
            url: "https://websim.ai/@api/this-programming-language-does-not-exist",
            description: "Fictional programming languages with unique features",
            thumbnail: "programming",
            color: "#4ECDC4"
        },
        {
            title: "This Date Does Not Exist",
            url: "https://websim.ai/@api/this-date-does-not-exist",
            description: "Create impossible dates and calendar scenarios",
            thumbnail: "date",
            color: "#FF9F1C"
        },
        {
            title: "This Soda Does Not Exist",
            url: "https://websim.ai/@api/this-soda-does-not-exist",
            description: "Fictional soda brands and flavors",
            thumbnail: "soda",
            color: "#E71D36"
        },
        {
            title: "This Cat Does Not Exist",
            url: "https://websim.ai/@api/this-cat-does-not-exist",
            description: "AI-generated fictional cats with unique traits",
            thumbnail: "cat",
            color: "#FF9F1C"
        },
        {
            title: "This Wireframe Does Not Exist",
            url: "https://websim.ai/@api/this-wireframe-does-not-exist/1",
            description: "Generated UI wireframes for non-existent applications",
            thumbnail: "wireframe",
            color: "#2EC4B6"
        },
        {
            title: "This Classic Arcade Game Does Not Exist",
            url: "https://websim.ai/@api/this-classic-arcade-game-does-not-exist/",
            description: "Imaginary retro arcade games with unique mechanics",
            thumbnail: "arcade",
            color: "#7209B7"
        },
        {
            title: "This Slideshow Cartoon Does Not Exist",
            url: "https://websim.ai/@api/this-slideshow-cartoon-does-not-exist",
            description: "Generated animated stories and characters",
            thumbnail: "cartoon",
            color: "#3A86FF"
        },
        {
            title: "This Fridge Does Not Exist",
            url: "https://websim.ai/@api/this-fridge-does-not-exist/",
            description: "Virtual refrigerators with imaginary contents",
            thumbnail: "fridge",
            color: "#8AC926"
        },
        {
            title: "This Planet Does Not Exist",
            url: "https://websim.ai/@api/this-planet-does-not-exist",
            description: "Explore fictional planets with unique characteristics",
            thumbnail: "planet",
            color: "#6A4C93"
        },
        {
            title: "This Tetris Game Does Not Exist",
            url: "https://websim.ai/@api/this-tetris-game-does-not-exist",
            description: "Tetris-inspired games with creative twists",
            thumbnail: "tetris",
            color: "#F15BB5"
        },
        {
            title: "This Snake Game Does Not Exist",
            url: "https://websim.ai/@api/this-snake-game-does-not-exist",
            description: "Snake games reimagined with unique mechanics",
            thumbnail: "snake",
            color: "#06D6A0"
        }
    ];

    const projectGrid = document.querySelector('.project-grid');
    const modal = document.querySelector('.modal-container');
    const iframe = document.getElementById('project-iframe');
    const modalTitle = document.getElementById('modal-title');
    const openNewTabLink = document.getElementById('open-new-tab');
    const closeBtn = document.querySelector('.close-btn');

    // Create project cards
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-url', project.url);
        card.setAttribute('data-title', project.title);
        
        const generatePatternSVG = (color) => {
            const patterns = [
                `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <rect width="100%" height="100%" fill="${color}" opacity="0.8"/>
                    <circle cx="20" cy="20" r="15" fill="white" opacity="0.2"/>
                    <circle cx="70" cy="70" r="25" fill="white" opacity="0.1"/>
                    <path d="M0 50 L100 50" stroke="white" stroke-width="2" opacity="0.1"/>
                    <path d="M50 0 L50 100" stroke="white" stroke-width="2" opacity="0.1"/>
                </svg>`,
                `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <rect width="100%" height="100%" fill="${color}" opacity="0.8"/>
                    <polygon points="0,0 100,100 0,100" fill="white" opacity="0.1"/>
                    <circle cx="80" cy="20" r="15" fill="white" opacity="0.2"/>
                </svg>`,
                `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <rect width="100%" height="100%" fill="${color}" opacity="0.8"/>
                    <rect x="10" y="10" width="80" height="80" rx="10" stroke="white" stroke-width="2" fill="none" opacity="0.2"/>
                    <circle cx="50" cy="50" r="20" stroke="white" stroke-width="2" fill="none" opacity="0.2"/>
                </svg>`
            ];
            return patterns[Math.floor(Math.random() * patterns.length)];
        };

        // Convert SVG to data URL
        const svgToDataURL = (svg) => {
            return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
        };
        
        const pattern = generatePatternSVG(project.color);
        
        card.innerHTML = `
            <div class="project-thumbnail" style="background-image: url('${svgToDataURL(pattern)}')">
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.description}</p>
                </div>
                <div class="prompt-badge">
                    <div class="prompt-icon">1</div>
                    <span>prompt</span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', function() {
            openProject(this.getAttribute('data-url'), this.getAttribute('data-title'));
        });
        
        projectGrid.appendChild(card);
    });

    // Functions to handle modal
    function openProject(url, title) {
        modalTitle.textContent = title;
        iframe.src = url;
        openNewTabLink.href = url;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeProject() {
        modal.style.display = 'none';
        iframe.src = 'about:blank'; // Unload the iframe
        document.body.style.overflow = ''; // Restore scrolling
    }

    closeBtn.addEventListener('click', closeProject);
    
    // Close modal when clicking outside the content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeProject();
        }
    });

    // Handle escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeProject();
        }
    });
});

