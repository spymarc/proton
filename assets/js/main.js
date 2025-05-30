// Aktualny język
let currentLanguage = 'pl';

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll dla linków nawigacyjnych
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hash) {
                e.preventDefault();
                document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });

                // Zamknij menu hamburgera po kliknięciu w link
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarToggler && navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });

    // Aktualny rok w stopce
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Inicjalizacja filtrów projektów
    initProjectFilters();

    // Ustaw język
    setLanguage(currentLanguage);
});

// Zmiana języka
function changeLanguage(lang) {
    currentLanguage = lang;
    setLanguage(lang);

    // Zmień atrybut lang w tagu html
    document.documentElement.lang = lang;

    return false; // Zapobiega przewijaniu strony
}

// Ustawienie języka
function setLanguage(lang) {
    // Elementy z atrybutem data-lang
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Placeholdery
    document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
        const key = element.getAttribute('data-lang-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Odśwież listę projektów dla aktualnie wybranego roku
    // Sprawdź najpierw desktop, potem mobile
    const activeYearItem = document.querySelector('#years-list-desktop .list-group-item.active, #years-list .list-group-item.active');
    if (activeYearItem) {
        const selectedYear = activeYearItem.getAttribute('data-year');
        showProjectsForYear(selectedYear);
    }

    // Dodaj tłumaczenie dla nowych elementów mobilnych
    if (!translations[lang]['projects-filters']) {
        // Dodaj brakujące tłumaczenia jeśli nie istnieją
        translations[lang]['projects-filters'] = lang === 'pl' ? 'Filtry' : 'Filters';
    }
}

// Inicjalizacja projektów w układzie wertykalnym
function initProjectFilters() {
    // Pobierz wszystkie projekty
    const projects = getAllProjects();

    // Inicjalizacja listy lat
    initYearsList(projects);

    // Inicjalizacja akordeonów na mobile
    initMobileAccordions();

    // Dodaj efekt hover dla kart projektów
    document.querySelectorAll('.project-card').forEach(projectCard => {
        projectCard.addEventListener('mouseenter', function() {
            this.classList.add('project-card-hover');
        });

        projectCard.addEventListener('mouseleave', function() {
            this.classList.remove('project-card-hover');
        });
    });

    // Domyślnie pokaż projekty dla wszystkich lat
    showProjectsForYear('all');
}

// Inicjalizacja akordeonów na mobile
function initMobileAccordions() {
    // Obsługa akordeonu filtrów
    const filtersToggle = document.getElementById('filters-toggle');
    const filtersContent = document.getElementById('filters-content');

    if (filtersToggle && filtersContent) {
        // Domyślnie pokaż filtry
        filtersContent.classList.add('show');

        filtersToggle.addEventListener('click', function() {
            filtersContent.classList.toggle('show');
            this.classList.toggle('collapsed');
        });
    }

    // Obsługa akordeonu listy projektów
    const projectsToggle = document.getElementById('projects-toggle');
    const projectsContent = document.getElementById('projects-content');

    if (projectsToggle && projectsContent) {
        // Domyślnie pokaż listę projektów
        projectsContent.classList.add('show');

        projectsToggle.addEventListener('click', function() {
            projectsContent.classList.toggle('show');
            this.classList.toggle('collapsed');
        });
    }
}

// Pobierz wszystkie projekty z zewnętrznego pliku
function getAllProjects() {
    const projectsWithTranslations = [];

    // Użyj globalnej zmiennej projects z pliku projects.js
    projects.forEach(project => {
        const titleKey = project.titleKey;
        const descKey = project.descKey;
        const clientKey = project.clientKey;
        const dateKey = project.dateKey;

        // Pobierz tłumaczenia dla aktualnego języka
        const title = translations[currentLanguage][titleKey];
        const desc = translations[currentLanguage][descKey];
        const client = translations[currentLanguage][clientKey];
        const date = translations[currentLanguage][dateKey];

        // Pobierz tłumaczenia dla statusu i kategorii
        const statusKey = "project-status-" + project.status;
        const categoryKey = "project-category-" + project.category;
        const statusText = translations[currentLanguage][statusKey];
        const categoryText = translations[currentLanguage][categoryKey];

        projectsWithTranslations.push({
            id: project.id,
            year: project.year,
            status: project.status,
            category: project.category,
            title: title,
            desc: desc,
            client: client,
            date: date,
            image: project.image,
            statusText: statusText,
            categoryText: categoryText
        });
    });

    return projectsWithTranslations;
}

// Inicjalizacja listy lat i kategorii
function initYearsList(projects) {
    // Inicjalizacja dla desktop
    initYearsListForDevice('desktop');

    // Inicjalizacja dla mobile
    initYearsListForDevice('mobile');
}

// Inicjalizacja listy lat i kategorii dla konkretnego urządzenia
function initYearsListForDevice(device) {
    // Określ ID elementów w zależności od urządzenia
    const yearsListId = device === 'desktop' ? 'years-list-desktop' : 'years-list';
    const categorySelectId = device === 'desktop' ? 'category-select' : 'category-select-mobile';

    const yearsList = document.getElementById(yearsListId);
    const categorySelect = document.getElementById(categorySelectId);

    if (yearsList) {
        // Dodaj obsługę kliknięcia dla każdego elementu listy lat
        yearsList.querySelectorAll('.list-group-item').forEach(yearItem => {
            yearItem.addEventListener('click', function() {
                // Usuń klasę active z wszystkich elementów listy lat (na obu urządzeniach)
                document.querySelectorAll('#years-list .list-group-item, #years-list-desktop .list-group-item').forEach(item => {
                    item.classList.remove('active');
                });

                // Dodaj klasę active do klikniętego elementu
                this.classList.add('active');

                // Dodaj klasę active do odpowiadającego elementu na drugim urządzeniu
                const selectedYear = this.getAttribute('data-year');
                const otherYearsListId = device === 'desktop' ? 'years-list' : 'years-list-desktop';
                const otherYearsList = document.getElementById(otherYearsListId);
                if (otherYearsList) {
                    const correspondingItem = otherYearsList.querySelector(`[data-year="${selectedYear}"]`);
                    if (correspondingItem) {
                        correspondingItem.classList.add('active');
                    }
                }

                // Pokaż projekty dla wybranego roku
                showProjectsForYear(selectedYear);
            });
        });
    }

    // Dodaj obsługę zmiany kategorii
    if (categorySelect) {
        categorySelect.addEventListener('change', function() {
            // Synchronizuj wartość z drugim dropdown
            const otherCategorySelectId = device === 'desktop' ? 'category-select-mobile' : 'category-select';
            const otherCategorySelect = document.getElementById(otherCategorySelectId);
            if (otherCategorySelect) {
                otherCategorySelect.value = this.value;
            }

            // Pobierz aktualnie wybrany rok
            const activeYearItem = document.querySelector('#years-list .list-group-item.active, #years-list-desktop .list-group-item.active');
            const selectedYear = activeYearItem ? activeYearItem.getAttribute('data-year') : 'all';

            // Pokaż projekty dla wybranego roku i kategorii
            showProjectsForYear(selectedYear);
        });
    }
}

// Pokaż projekty dla wybranego roku i kategorii
function showProjectsForYear(year) {
    const projects = getAllProjects();

    // Pobierz elementy dla desktop i mobile
    const projectsListDesktop = document.getElementById('projects-list');
    const projectsListMobile = document.getElementById('projects-list-mobile');
    const noProjectsMessageDesktop = document.getElementById('no-projects-message');
    const noProjectsMessageMobile = document.getElementById('no-projects-message-mobile');

    // Pobierz wybraną kategorię (z dowolnego dropdown - są zsynchronizowane)
    const categorySelect = document.getElementById('category-select') || document.getElementById('category-select-mobile');
    const selectedCategory = categorySelect ? categorySelect.value : 'all';

    // Wyczyść listy projektów
    if (projectsListDesktop) projectsListDesktop.innerHTML = '';
    if (projectsListMobile) projectsListMobile.innerHTML = '';

    // Filtruj projekty według roku i kategorii
    let filteredProjects = projects;

    // Filtruj według roku
    if (year !== 'all') {
        filteredProjects = filteredProjects.filter(project => project.year === year);
    }

    // Filtruj według kategorii
    if (selectedCategory !== 'all') {
        filteredProjects = filteredProjects.filter(project => project.category === selectedCategory);
    }

    // Jeśli nie ma projektów, pokaż komunikat
    if (filteredProjects.length === 0) {
        if (noProjectsMessageDesktop) noProjectsMessageDesktop.style.display = 'block';
        if (noProjectsMessageMobile) noProjectsMessageMobile.style.display = 'block';
        return;
    }

    // Ukryj komunikat o braku projektów
    if (noProjectsMessageDesktop) noProjectsMessageDesktop.style.display = 'none';
    if (noProjectsMessageMobile) noProjectsMessageMobile.style.display = 'none';

    // Funkcja do tworzenia elementu listy projektu
    function createProjectListItem(project, index, isMobile) {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.setAttribute('data-project-index', index);

        const titleDiv = document.createElement('div');
        titleDiv.className = 'project-title';
        titleDiv.textContent = project.title;

        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'project-category';
        categoryDiv.textContent = project.categoryText;

        listItem.appendChild(titleDiv);
        listItem.appendChild(categoryDiv);

        // Dodaj obsługę kliknięcia
        listItem.addEventListener('click', function() {
            // Usuń klasę active z wszystkich elementów listy projektów (na obu urządzeniach)
            document.querySelectorAll('#projects-list .list-group-item, #projects-list-mobile .list-group-item').forEach(item => {
                item.classList.remove('active');
            });

            // Dodaj klasę active do klikniętego elementu
            this.classList.add('active');

            // Dodaj klasę active do odpowiadającego elementu na drugim urządzeniu
            const otherList = isMobile ? projectsListDesktop : projectsListMobile;
            if (otherList) {
                const correspondingItem = otherList.querySelector(`[data-project-index="${index}"]`);
                if (correspondingItem) {
                    correspondingItem.classList.add('active');
                }
            }

            // Pokaż szczegóły projektu
            showProjectDetails(project);
        });

        return listItem;
    }

    // Dodaj projekty do list
    filteredProjects.forEach((project, index) => {
        // Dodaj do listy desktop
        if (projectsListDesktop) {
            const listItemDesktop = createProjectListItem(project, index, false);
            projectsListDesktop.appendChild(listItemDesktop);
        }

        // Dodaj do listy mobile
        if (projectsListMobile) {
            const listItemMobile = createProjectListItem(project, index, true);
            projectsListMobile.appendChild(listItemMobile);
        }
    });

    // Domyślnie wybierz pierwszy projekt
    if (filteredProjects.length > 0) {
        // Zaznacz pierwszy projekt na desktop
        if (projectsListDesktop) {
            const firstProjectItemDesktop = projectsListDesktop.querySelector('.list-group-item');
            if (firstProjectItemDesktop) {
                firstProjectItemDesktop.classList.add('active');
            }
        }

        // Zaznacz pierwszy projekt na mobile
        if (projectsListMobile) {
            const firstProjectItemMobile = projectsListMobile.querySelector('.list-group-item');
            if (firstProjectItemMobile) {
                firstProjectItemMobile.classList.add('active');
            }
        }

        // Pokaż szczegóły pierwszego projektu
        showProjectDetails(filteredProjects[0]);
    }
}

// Pokaż szczegóły wybranego projektu
function showProjectDetails(project) {
    // Aktualizuj elementy na desktop
    updateProjectDetails(project, 'desktop');

    // Aktualizuj elementy na mobile
    updateProjectDetails(project, 'mobile');
}

// Aktualizuj szczegóły projektu dla konkretnego urządzenia
function updateProjectDetails(project, device) {
    // Określ ID elementów w zależności od urządzenia
    const suffix = device === 'desktop' ? '-desktop' : '-mobile';

    const projectImage = document.getElementById('project-image' + suffix);
    const projectStatus = document.getElementById('project-status' + suffix);
    const projectCategory = document.getElementById('project-category' + suffix);
    const projectTitle = document.getElementById('project-title' + suffix);
    const projectDesc = document.getElementById('project-desc' + suffix);
    const projectClient = document.getElementById('project-client' + suffix);
    const projectDate = document.getElementById('project-date' + suffix);

    if (projectImage) {
        projectImage.setAttribute('src', project.image);
        projectImage.setAttribute('alt', project.title);
    }

    if (projectStatus) {
        projectStatus.textContent = project.statusText;

        // Ustaw odpowiedni kolor dla statusu
        projectStatus.className = 'badge';
        if (project.status === 'completed') {
            projectStatus.classList.add('bg-success');
        } else if (project.status === 'in-progress') {
            projectStatus.classList.add('bg-primary');
        } else if (project.status === 'planned') {
            projectStatus.classList.add('bg-secondary');
        }

        // Dodaj klasę category-badge dla kategorii
        if (device === 'desktop') {
            projectCategory.classList.add('category-badge');
        } else {
            projectCategory.classList.add('category-badge');
        }
    }

    if (projectCategory) projectCategory.textContent = project.categoryText;
    if (projectTitle) projectTitle.textContent = project.title;
    if (projectDesc) projectDesc.textContent = project.desc;
    if (projectClient) projectClient.textContent = project.client;
    if (projectDate) projectDate.textContent = project.date;
}
