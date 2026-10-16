'use strict';

// English copy. Spanish remains the source language in index.html and app.js.
// Modes: "text" replaces textContent; "html" preserves intentional markup.
window.PORTFOLIO_EN = {
  page: [
    ['title', 'text', 'Daniel Castillo — Software brought to life'],
    ['.skip-link', 'text', 'Skip to content'],
    ['.desktop-nav a[href="#proyectos"]', 'html', 'Projects <span>08</span>'],
    ['.desktop-nav a[href="#sobre-mi"], #mobile-menu a[href="#sobre-mi"]', 'text', 'About me'],
    ['.desktop-nav a[href="#trayectoria"], #mobile-menu a[href="#trayectoria"]', 'text', 'My journey'],
    ['.header-contact', 'html', 'Let’s talk <span aria-hidden="true">↗</span>'],
    ['#mobile-menu a[href="#proyectos"]', 'text', 'Projects'],
    ['#mobile-menu a[href="#contacto"]', 'text', 'Let’s talk ↗'],
    ['.hero-topline > span:first-child', 'html', '<i class="status-dot"></i> SOFTWARE DEVELOPER'],
    ['.hero-topline > span:last-child', 'html', 'CÁDIZ, SPAIN <span aria-hidden="true">↗</span>'],
    ['.hero-intro', 'text', 'Hi, I’m Daniel Castillo.'],
    ['#hero-title', 'html', 'Ideas that<br>come <span class="serif-accent">alive.</span>'],
    ['.hero-description', 'html', 'I connect code with the real world.<br>I build web applications, mobile experiences<br class="desktop-break"> and systems that reach beyond the screen.'],
    ['.hero-actions a[href="#proyectos"]', 'html', 'Explore projects <span aria-hidden="true">↘</span>'],
    ['.hero-actions a[href="#sobre-mi"]', 'html', 'A little about me <span aria-hidden="true">→</span>'],
    ['.visual-top > span:first-child', 'text', 'SOFTWARE × PHYSICAL WORLD'],
    ['.visual-point', 'html', '<span class="point-dot"></span>One idea. Many connections.'],
    ['.visual-caption .micro-label', 'text', 'FEATURED PROJECT / FINAL DEGREE PROJECT'],
    ['.visual-caption strong', 'text', 'One hand. Endless possibilities.'],
    ['.hero-bottom > span', 'text', 'COMPUTER ENGINEERING · UNIVERSITY OF CÁDIZ'],
    ['.hero-bottom a', 'html', 'KEEP EXPLORING <span aria-hidden="true">↓</span>'],
    ['.technology-strip > span:last-of-type', 'text', 'INTERACTIVE EXPERIENCES'],
    ['.work .section-heading > .eyebrow', 'text', '01 / WHAT I BUILD'],
    ['#work-title', 'html', 'From idea<br>to <span class="serif-accent">code.</span>'],
    ['.work .heading-line > p', 'html', 'Different challenges. The same curiosity.<br>A selection of projects that put<br class="desktop-break"> my knowledge into practice.'],
    ['.filter[data-filter="all"]', 'html', 'All <sup>08</sup>'],
    ['.media-robot .media-index', 'text', '01 / FINAL DEGREE PROJECT'],
    ['.media-robot .media-note, .media-vr .media-note', 'text', 'PROJECT ILLUSTRATION'],
    ['.robot-media-label', 'html', 'Beyond<br>the screen.'],
    ['[data-project="robot"] .project-kind', 'text', 'ANDROID · ROBOTICS · COMPUTER VISION'],
    ['[data-project="robot"] h3', 'text', 'Robotic hand'],
    ['[data-project="robot"] .project-meta p', 'text', 'Software that turns into movement.'],
    ['.media-calendar .media-index', 'text', '02 / CROSS-PLATFORM'],
    ['.media-calendar .media-note, .media-books .media-note', 'text', 'VISUAL CONCEPT'],
    ['[data-project="calendar"] h3', 'text', 'Collaborative calendar'],
    ['[data-project="calendar"] .project-meta p', 'text', 'One team. Everyone on the same page.'],
    ['.media-books .media-index', 'text', '03 / API + MOBILE APP'],
    ['[data-project="books"] .project-meta p', 'text', 'Every book, a place. Every read, a story.'],
    ['.media-vr .media-index', 'text', '04 / VIRTUAL REALITY'],
    ['.award-badge', 'text', '✳ WINNING PROJECT'],
    ['[data-project="vr"] .project-kind', 'text', 'UNITY · META QUEST · EDUCATION'],
    ['[data-project="vr"] h3', 'text', 'Learning inside the lab'],
    ['[data-project="vr"] .project-meta p', 'text', 'Explore, interact and understand in virtual reality.'],
    ['.more-label .eyebrow', 'text', 'MORE IDEAS IN ACTION'],
    ['[data-project="menu"] .row-title small', 'text', 'Digital menu and admin panel'],
    ['[data-project="nature"] .row-title small', 'text', 'Booking natural spaces'],
    ['[data-project="order"] .row-title small', 'text', 'Complete venue management'],
    ['[data-project="party"] .row-title small', 'text', 'Designing festival experiences'],
    ['.about > .eyebrow', 'text', '02 / BEHIND THE CODE'],
    ['#about-title', 'html', 'Curious by<br><span class="serif-accent">nature.</span><br>A developer<br>at heart.'],
    ['.portrait-line > div > span', 'text', 'From Cádiz, with plenty of ideas.'],
    ['.about-lead', 'text', 'I’m interested in what happens when an idea starts to work.'],
    ['.about-copy > p:nth-of-type(2)', 'text', 'I study Computer Engineering at the University of Cádiz, specialising in Information Technology. I have broadened my studies with courses in Software Engineering and Information Systems to understand projects from different perspectives.'],
    ['.about-copy > p:nth-of-type(3)', 'text', 'I particularly enjoy Android development with Jetpack Compose, but my curiosity also takes me into backend development, automation and interactive systems. My final degree project brings many of these interests together: an application for controlling a robotic hand.'],
    ['.personal-notes > div:first-child > span', 'text', 'HOW I WORK'],
    ['.personal-notes > div:first-child > p', 'text', 'Learning, collaborating and caring about the details.'],
    ['.personal-notes > div:last-child > span', 'text', 'LANGUAGES'],
    ['.personal-notes > div:last-child > p', 'text', 'Native Spanish · Cambridge B1 English'],
    ['.about-copy > .text-link', 'html', 'Let’s connect on LinkedIn <span aria-hidden="true">↗</span>'],
    ['.stack-heading h3', 'text', 'My toolkit.'],
    ['.stack-heading p', 'text', 'Technologies I have learned and used to build projects.'],
    ['.stack-grid > div:nth-child(3) h4', 'text', 'Data & cloud'],
    ['.stack-grid > div:nth-child(4) h4', 'text', 'Beyond the code'],
    ['.journey-intro > .eyebrow', 'text', '03 / THE JOURNEY SO FAR'],
    ['#journey-title', 'html', 'Always<br>in <span class="serif-accent">motion.</span>'],
    ['.journey-intro > p:not(.eyebrow)', 'html', 'Every project adds something.<br>Every experience does, too.'],
    ['.timeline article:nth-child(1) .timeline-type', 'text', 'EXPERIENCE'],
    ['.timeline article:nth-child(1) h3', 'text', 'Software development'],
    ['.timeline article:nth-child(1) h4', 'text', 'El Torno Town Council · Internship'],
    ['.timeline article:nth-child(1) p', 'text', 'Application development and maintenance, new features, API management and user support. Automated testing and continuous integration and delivery practices.'],
    ['.timeline article:nth-child(2) .timeline-type', 'text', 'RECOGNITION'],
    ['.timeline article:nth-child(2) h3', 'html', 'Isabel Miranda Sierra Award <span class="small-star" aria-hidden="true">✳</span>'],
    ['.timeline article:nth-child(2) h4', 'text', 'University of Cádiz'],
    ['.timeline article:nth-child(3) .timeline-date', 'text', '2022 — PRESENT'],
    ['.timeline article:nth-child(3) .timeline-type', 'text', 'EDUCATION'],
    ['.timeline article:nth-child(3) h3', 'text', 'Degree in Computer Engineering'],
    ['.timeline article:nth-child(3) h4', 'text', 'University of Cádiz · Puerto Real'],
    ['.timeline article:nth-child(3) p', 'text', 'Specialisation in Information Technology. Additional coursework in Software Engineering and Information Systems.'],
    ['.timeline article:nth-child(4) .timeline-date', 'text', 'CONTINUOUS LEARNING'],
    ['.timeline article:nth-child(4) .timeline-type', 'text', 'ADDITIONAL TRAINING'],
    ['.timeline article:nth-child(4) h3', 'text', 'Always keep learning'],
    ['.timeline article:nth-child(4) p', 'text', 'Android development with Jetpack Compose, Linux and LPIC preparation, CCNA v7: Introduction to Networks and CCNP Enterprise Advanced Routing (v9).'],
    ['.contact-top > .eyebrow', 'text', '04 / THE NEXT IDEA'],
    ['.contact-top > span', 'html', 'STARTS WITH A CONVERSATION <span aria-hidden="true">↙</span>'],
    ['#contact-title', 'html', 'Let’s build<br><span class="serif-accent">together.</span><span class="contact-star" aria-hidden="true">✳</span>'],
    ['.contact-bottom > p', 'html', 'If you have a project, an opportunity<br>or a good idea, I’d love to hear from you.'],
    ['.footer-name > span', 'text', 'SOFTWARE WITH CURIOSITY.'],
    ['.back-top', 'text', 'Back to top ↑']
  ],
  attributes: [
    ['meta[name="description"]', 'content', 'Daniel Castillo Cortijo’s portfolio. Android development, web applications and experiences that connect software with the physical world.'],
    ['meta[property="og:title"]', 'content', 'Daniel Castillo — Software brought to life'],
    ['meta[property="og:description"]', 'content', 'Android, web and interactive systems. Explore my projects, my journey and the way I build software.'],
    ['.wordmark', 'aria-label', 'Daniel Castillo, home'],
    ['.desktop-nav', 'aria-label', 'Main navigation'],
    ['#mobile-menu', 'aria-label', 'Mobile navigation'],
    ['.hero-visual', 'aria-label', 'Explore the robotic hand project'],
    ['.robot-hero', 'alt', 'Technical illustration of an articulated robotic hand'],
    ['.technology-strip', 'aria-label', 'Areas of work'],
    ['.filters', 'aria-label', 'Filter projects'],
    ['[data-project="robot"]', 'aria-label', 'View the Robotic hand project'],
    ['.media-robot img', 'alt', 'Articulated robotic hand'],
    ['[data-project="calendar"]', 'aria-label', 'View the Collaborative calendar project'],
    ['.media-calendar img', 'alt', 'Visual concept for a shared calendar'],
    ['[data-project="books"]', 'aria-label', 'View the My Book Repository project'],
    ['.media-books img', 'alt', 'Visual concept for a personal digital library'],
    ['[data-project="vr"]', 'aria-label', 'View the Virtual reality laboratory project'],
    ['.media-vr img', 'alt', 'Concept illustration of laboratory equipment in virtual reality']
  ],
  projects: {
    robot: {
      title: 'Robotic hand',
      label: 'FINAL DEGREE PROJECT / ANDROID + ROBOTICS',
      summary: 'An Android application that connects the user with a robotic hand, combining software, computer vision and sensors.',
      tags: ['Android', 'Raspberry Pi', 'Python', 'FastAPI', 'OpenCV'],
      context: 'My final degree project explores how to make interaction between a person and a robotic device easier. The system connects an Android application with a Raspberry Pi and a backend developed in Python.',
      features: [
        'Control of the hand from an Android application.',
        'Integration of voice commands and computer vision with OpenCV.',
        'Capacitive sensors to adjust the fingers’ grip on contact with objects.'
      ],
      status: 'Academic project · Final degree project.'
    },
    calendar: {
      title: 'Collaborative calendar',
      label: 'WEB AND ANDROID APPLICATION',
      summary: 'A shared space for organising an organisation’s events and tasks.',
      tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Android', 'Web'],
      context: 'A cross-platform application focused on organising teamwork. Profiles, roles and permissions help manage users’ participation in the shared calendar.',
      features: [
        'Authentication, user profiles, roles and permissions.',
        'Shared event and task management, with notifications.',
        'Android application built with Kotlin and Jetpack Compose.',
        'Firebase for data and file management.'
      ]
    },
    books: {
      title: 'My Book Repository',
      label: 'REST API + MOBILE APPLICATION',
      summary: 'A personal digital library combining a structured API with a mobile experience for organising reading.',
      tags: ['Java', 'Spring Boot', 'MongoDB Atlas', 'React Native', 'Expo', 'TypeScript'],
      context: 'The API manages users and personal libraries through an architecture organised into controllers, services, repositories and DTOs. The mobile application builds on this foundation with screens, forms and reusable components.',
      features: [
        'Book management and reading progress tracking.',
        'Data validation and password encryption.',
        'Browsing books, reading statuses and favourites in the mobile app.'
      ],
      status: 'The mobile application built with React Native, Expo and TypeScript is in development.'
    },
    vr: {
      title: 'Virtual reality laboratory',
      label: 'WINNING PROJECT / EDUCATIONAL EXPERIENCE',
      summary: 'Learning how laboratory equipment works by exploring it within an immersive experience.',
      tags: ['Unity', 'Meta Quest', 'Virtual reality', 'Teamwork'],
      context: 'A project developed by a team of seven students to recreate a vertical laboratory evaporator. I contributed to its development and to leading and coordinating the team.',
      features: [
        'Interactive environment developed in Unity for Meta Quest.',
        'Exploration of the components of a vertical evaporator.',
        'Interaction with the equipment’s controls to understand how it works.'
      ],
      status: 'Winning project developed by a team of seven students.'
    },
    menu: {
      title: 'Punto Cero × La Glotona',
      label: 'WEB DEVELOPMENT AND DEPLOYMENT',
      summary: 'A mobile-friendly digital menu with an admin panel to keep the bar’s content up to date.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Cloudflare Pages', 'Cloudflare D1'],
      context: 'I designed and developed a mobile-friendly interface organised by category and accessible through a link or QR code. Deployment on Cloudflare Pages and a D1 database make updates available to all customers.',
      features: [
        'Digital menu organised by category.',
        'Protected admin panel.',
        'Editing of products, prices, photographs and content.',
        'Deployment on Cloudflare Pages with D1 storage.'
      ]
    },
    nature: {
      title: 'Natureat',
      label: 'CROSS-PLATFORM APPLICATION',
      summary: 'An application for booking natural spaces within a municipality’s parks.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Android', 'Jetpack Compose', 'Node.js'],
      context: 'A project connecting web and mobile interfaces to a shared backend to manage the information needed for booking natural spaces.',
      features: [
        'Web version developed with HTML, CSS and JavaScript.',
        'Android application built with Jetpack Compose.',
        'Node.js backend for managing data and information.'
      ]
    },
    order: {
      title: 'OrderFlow',
      label: 'MANAGEMENT / WEB APPLICATION',
      summary: 'Venue management, from tables and customers to orders and inventory.',
      tags: ['Java', 'Spring Boot', 'Vaadin'],
      context: 'An application built in Java with Spring Boot on the backend and Vaadin on the frontend, bringing a venue’s different management processes together.',
      features: [
        'Table and customer management.',
        'Organisation of orders and deliveries.',
        'Venue inventory management.'
      ]
    },
    party: {
      title: 'iParty',
      label: 'USER EXPERIENCE DESIGN',
      summary: 'Design and prototyping of an interactive system for the festival experience.',
      tags: ['UX', 'Design Thinking', 'Prototyping', 'User-centred design'],
      context: 'A design project that starts with people: their needs, usage scenarios and requirements for a festival system. The work takes shape through web and mobile prototypes.',
      features: [
        'Creation of user profiles and scenarios.',
        'Definition of system requirements.',
        'Web and mobile prototypes.',
        'Planning of usability and accessibility evaluations.'
      ],
      status: 'Design and prototyping project. Usability and accessibility evaluations are planned.'
    }
  }
};
