(function() {
    // Detect current page location and build correct base path
    const currentPath = window.location.pathname;
    const isSubpage = currentPath.includes('/pages/') || currentPath.endsWith('register.html') || 
                      currentPath.endsWith('call-for-papers.html') || currentPath.endsWith('submit-abstract.html') || 
                      currentPath.endsWith('schedule.html') || currentPath.endsWith('about.html') ||
                      currentPath.endsWith('privacy.html') || currentPath.endsWith('terms.html') ||
                      currentPath.endsWith('team.html') || currentPath.endsWith('thank-you.html') ||
                      currentPath.endsWith('registration-confirmation.html') || currentPath.endsWith('sponsors.html');
    
    // For local files and GitHub Pages subdirectories
    let basePath;
    if (currentPath.includes('bichatyoungresearchers')) {
        // GitHub Pages subdirectory
        basePath = '/bichatyoungresearchers';
    } else {
        // Local file system - use relative paths
        basePath = isSubpage ? '..' : '.';
    }

    // Add favicon set to head
    const favicons = [
        { rel: 'icon', type: 'image/x-icon', href: basePath + '/images/favicon/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: basePath + '/images/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: basePath + '/images/favicon/favicon-16x16.png' },
        { rel: 'apple-touch-icon', href: basePath + '/images/favicon/apple-touch-icon.png' },
        { rel: 'manifest', href: basePath + '/images/favicon/site.webmanifest' }
    ];

    favicons.forEach(faviconConfig => {
        const link = document.createElement('link');
        link.rel = faviconConfig.rel;
        if (faviconConfig.type) link.type = faviconConfig.type;
        if (faviconConfig.sizes) link.sizes = faviconConfig.sizes;
        link.href = faviconConfig.href;
        document.head.appendChild(link);
    });

    const style = document.createElement('style');
    style.textContent = `
        .navbar {
            background-color: #ffffff;
            border-bottom: 1px solid #e2e8f0;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12);
        }
        .navbar .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            max-width: 1000px;
            margin: 0 auto;
        }
        .nav-brand h1 {
            font-size: 24px;
            color: #d62057;
            margin: 0;
        }
        .nav-brand a {
            text-decoration: none;
            color: inherit;
        }
        .nav-links {
            display: flex;
            list-style: none;
            gap: 30px;
            margin: 0;
            padding: 0;
            align-items: center;
        }
        .nav-links > li {
            position: relative;
        }
        .nav-links a {
            text-decoration: none;
            color: #1e293b;
            font-weight: 500;
            transition: color 0.2s;
            border-bottom: 3px solid transparent;
            padding-bottom: 5px;
            cursor: pointer;
        }
        .nav-links a:hover {
            color: #d62057;
            border-bottom-color: #d62057;
        }
        .dropdown-toggle::after {
            content: " ▼";
            font-size: 10px;
        }
        .dropdown-menu {
            display: none;
            position: absolute;
            top: calc(100% + 12px);
            left: 0;
            background-color: #ffffff;
            list-style: none;
            padding: 8px 0;
            margin: 0;
            border: 1px solid #e2e8f0;
            border-radius: 6px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
            z-index: 999;
            min-width: 200px;
        }
        .dropdown-menu.show {
            display: block;
        }
        .dropdown-menu li {
            margin: 0;
            padding: 0;
        }
        .dropdown-menu a {
            display: block;
            padding: 10px 20px;
            color: #1e293b;
            border-bottom: none;
            white-space: nowrap;
            cursor: pointer;
        }
        .dropdown-menu a:hover {
            background-color: #f8fafc;
            color: #d62057;
            border-bottom: none;
        }
        
        .hamburger {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 24px;
            flex-direction: column;
            justify-content: space-between;
        }
        .hamburger span {
            width: 100%;
            height: 3px;
            background-color: #d62057;
            border-radius: 2px;
            transition: all 0.3s;
        }
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(8px, 8px);
        }
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -7px);
        }
        
        @media (max-width: 768px) {
            .hamburger {
                display: flex;
            }
            .nav-links {
                position: fixed;
                top: 60px;
                left: -100%;
                width: 100%;
                height: calc(100vh - 60px);
                background-color: #ffffff;
                flex-direction: column;
                gap: 20px;
                padding: 20px;
                margin: 0;
                transition: left 0.3s;
                z-index: 998;
                align-items: flex-start;
                overflow-y: auto;
            }
            .nav-links.active {
                left: 0;
            }
            .nav-links > li {
                width: 100%;
            }
            .nav-links a {
                display: block;
                padding: 12px 0;
                border-bottom: none;
            }
            .dropdown-menu {
                position: static;
                display: none;
                box-shadow: none;
                border: none;
                padding: 10px 0 10px 20px;
                background-color: transparent;
                margin-top: 0;
                top: auto;
            }
            .dropdown-menu.show {
                display: block;
            }
            .dropdown-menu a {
                padding: 8px 0;
            }
        }
    `;
    document.head.appendChild(style);

    const nav = document.createElement('nav');
    nav.className = 'navbar';
    nav.innerHTML = `
        <div class="container">

            <div class="nav-brand">
                <a href="${basePath}/index.html">
                    <h1>Bichat-Beaujon Young Researchers</h1>
                </a>
            </div>

            <button class="hamburger" aria-label="Toggle navigation menu">
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul class="nav-links">
                <li><a href="${basePath}/index.html">Home</a></li>
                <li>
                    <a href="#" class="dropdown-toggle">BYRD 2026</a>
                    <ul class="dropdown-menu">
                        <li><a href="${basePath}/pages/register.html">Register</a></li>
                        <li><a href="${basePath}/pages/call-for-papers.html">Call for Abstracts</a></li>
                        <li><a href="${basePath}/pages/submit-abstract.html">Submit Abstract</a></li>
                        <li><a href="${basePath}/pages/schedule.html">BYRD Schedule</a></li>
                        <li><a href="${basePath}/pages/sponsors.html">Our sponsors</a></li>
                    </ul>
                </li>
                <li><a href="${basePath}/pages/about.html">About us</a></li>
            </ul>
            
        </div>
    `;

    document.body.insertBefore(nav, document.body.firstChild);

    // Get all elements
    const hamburger = nav.querySelector('.hamburger');
    const navLinks = nav.querySelector('.nav-links');
    const dropdownToggle = nav.querySelector('.dropdown-toggle');
    const dropdownMenu = nav.querySelector('.dropdown-menu');

    // Hamburger menu functionality (mobile)
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a non-dropdown link is clicked (mobile)
    const regularLinks = nav.querySelectorAll('.nav-links > li > a:not(.dropdown-toggle)');
    regularLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Dropdown toggle for both desktop and mobile
    dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        dropdownMenu.classList.toggle('show');
    });

    // Dropdown links should navigate and close menu
    const dropdownLinks = nav.querySelectorAll('.dropdown-menu a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Let the link navigate naturally, but close the menu
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            dropdownMenu.classList.remove('show');
        });
    });

    // Close dropdown when clicking outside (desktop)
    document.addEventListener('click', function(e) {
        if (!nav.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
})();
