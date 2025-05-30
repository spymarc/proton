// Tłumaczenia
const translations = {
    pl: {
        // Nawigacja
        "nav-contact": "Kontakt",
        "nav-about": "O firmie",
        "nav-studio": "Studio",
        "nav-projects": "Projekty",
        "nav-gallery": "Galeria",

        // Projekty - nowe elementy
        "projects-titles": "Tytuły:",

        // Hero
        "hero-modern": "Nowoczesna",
        "hero-postproduction": "postprodukcja dźwięku.",
        "hero-description-1": "Profesjonalna realizacja dźwięku dla filmu, reklamy i gier.",
        "hero-description-2": "Twój projekt w najlepszych rękach.",
        "hero-contact-btn": "Skontaktuj się",

        // O firmie
        "about-title": "O firmie",
        "about-description": "Jesteśmy zespołem pasjonatów dźwięku z wieloletnim doświadczeniem w branży filmowej, reklamowej i gamingowej. Nasze studio to połączenie nowoczesnych technologii, kreatywności i dbałości o każdy detal. Realizujemy projekty dla największych marek oraz niezależnych twórców.",
        "about-service-1": "Kompleksowa postprodukcja dźwięku",
        "about-service-2": "Nagrania lektorskie i dubbing",
        "about-service-3": "Sound design, miks, mastering",
        "about-more-btn": "Więcej",

        // Modal O firmie
        "about-modal-title": "O firmie – więcej informacji",
        "about-modal-p1": "Firma Pro-Ton Krzysztof Jastrząb działa od 1998 roku. Oferuje profesjonalne usługi w zakresie realizacji dźwięku na planie filmowym oraz kompleksową postprodukcję dźwięku włącznie z końcowym zgraniem.",
        "about-modal-p2": "Założycielem i właścicielem firmy jest dr Krzysztof Jastrząb - absolwent i wieloletni pedagog Wydziału Reżyserii Dźwięku Uniwersytetu Muzycznego Fryderyka Chopina w Warszawie, autor dźwięku do wielu filmów fabularnych, seriali telewizyjnych, teatrów TV i reklam.",
        "about-modal-p3": "Profesjonalne wyposażenie studia oraz twórcza współpraca z najlepszymi absolwentami Wydziału Reżyserii Dźwięku Uniwersytetu Muzycznego w Warszawie są gwarancją najwyższej jakości usług firmy Pro-Ton Krzysztof Jastrząb.",
        "about-modal-close": "Zamknij",

        // Studio
        "studio-title": "Studio",
        "studio-recordings": "Nagrania",
        "studio-recordings-desc": "Izolowana kabina, mikrofony klasy premium, nagrania lektorskie, wokalne i instrumentów.",
        "studio-postproduction": "Postprodukcja",
        "studio-postproduction-desc": "Zaawansowane oprogramowanie, miks, mastering, sound design, restauracja dźwięku.",
        "studio-monitoring": "Odsłuch",
        "studio-monitoring-desc": "Profesjonalne monitory studyjne, akustyka pomieszczeń, komfortowa przestrzeń do pracy.",

        // Projekty
        "projects-title": "Projekty",
        "projects-filter-category": "Kategoria:",
        "projects-filter-year": "Rok:",
        "projects-filter-status": "Status:",
        "projects-all-categories": "Wszystkie",
        "projects-category-film": "Film fabularny",
        "projects-category-serial": "Serial",
        "projects-category-commercial": "Reklama",
        "projects-category-documentary": "Dokument",
        "projects-category-game": "Gra",
        "projects-category-audio": "Audiobook",
        "projects-all-years": "Wszystkie lata",
        "projects-2023": "2023",
        "projects-2022": "2022",
        "projects-2021": "2021",
        "projects-2020": "2020",
        "projects-all-status": "Wszystkie",
        "projects-completed": "Ukończone",
        "projects-in-progress": "W trakcie",
        "projects-planned": "Zaplanowane",
        "projects-no-results": "Brak projektów spełniających wybrane kryteria. Zmień filtry, aby zobaczyć więcej projektów.",
        "project-status-completed": "Ukończony",
        "project-status-in-progress": "W trakcie",
        "project-status-planned": "Zaplanowany",
        "project-category-film": "Film fabularny",
        "project-category-serial": "Serial",
        "project-category-commercial": "Reklama",
        "project-category-documentary": "Dokument",
        "project-category-game": "Gra",
        "project-category-audio": "Audiobook",

        // Projekty - szczegóły
        "project1-title": "Film: \"Cisza Nocy\"",
        "project1-desc": "Nagrania dialogów, sound design, miks i mastering do nagradzanego dramatu.",
        "project1-client": "Klient: Studio Filmowe Kadr",
        "project1-date": "Ukończony: Czerwiec 2023",

        "project2-title": "Serial: \"Nowy Świt\"",
        "project2-desc": "Postprodukcja dźwięku dla serialu telewizyjnego, 8 odcinków.",
        "project2-client": "Klient: TVP",
        "project2-date": "Planowane ukończenie: Grudzień 2023",

        "project3-title": "Gra: \"Mroczny Las\"",
        "project3-desc": "Tworzenie efektów dźwiękowych i muzyki do gry przygodowej.",
        "project3-client": "Klient: GameDev Studio",
        "project3-date": "Planowany start: Styczeń 2024",

        "project4-title": "Reklama: \"Nowa Energia\"",
        "project4-desc": "Kompleksowa postprodukcja dźwięku, efekty specjalne audio, lektor.",
        "project4-client": "Klient: Agencja Reklamowa Vision",
        "project4-date": "Ukończony: Listopad 2022",

        "project5-title": "Film dokumentalny: \"Głębia\"",
        "project5-desc": "Nagrania terenowe, miks i mastering dla filmu dokumentalnego.",
        "project5-client": "Klient: National Geographic",
        "project5-date": "Ukończony: Maj 2022",

        "project6-title": "Audiobook: \"Tajemnica Gór\"",
        "project6-desc": "Nagranie, edycja i mastering audiobooka, 12 godzin materiału.",
        "project6-client": "Klient: Wydawnictwo Słowo",
        "project6-date": "Ukończony: Grudzień 2021",

        "project7-title": "Film: \"Ostatni Rozdział\"",
        "project7-desc": "Kompleksowa realizacja dźwięku do thrillera psychologicznego, włącznie z nagraniami foley.",
        "project7-client": "Klient: Filmoteka Narodowa",
        "project7-date": "Ukończony: Sierpień 2022",

        "project8-title": "Kampania: \"Czyste Jutro\"",
        "project8-desc": "Seria spotów reklamowych dla kampanii ekologicznej, nagrania lektorskie i sound design.",
        "project8-client": "Klient: Ministerstwo Środowiska",
        "project8-date": "Planowane ukończenie: Listopad 2023",

        "project9-title": "Serial: \"Tajemnice Miasta\"",
        "project9-desc": "Postprodukcja dźwięku dla serialu kryminalnego, 10 odcinków, efekty specjalne i miks.",
        "project9-client": "Klient: Netflix",
        "project9-date": "Ukończony: Październik 2021",

        "project10-title": "Dokument: \"Dzika Polska\"",
        "project10-desc": "Nagrania terenowe, dźwięki natury, miks i mastering dla serii dokumentalnej.",
        "project10-client": "Klient: Discovery Channel",
        "project10-date": "Ukończony: Lipiec 2020",

        "project11-title": "Gra: \"Cyber Odyssey\"",
        "project11-desc": "Kompleksowa realizacja dźwięku do gry RPG, efekty środowiskowe i muzyka.",
        "project11-client": "Klient: CD Projekt Red",
        "project11-date": "Ukończony: Grudzień 2020",

        "project12-title": "Podcast: \"Historia Nieznana\"",
        "project12-desc": "Produkcja dźwiękowa serii podcastów historycznych, 20 odcinków.",
        "project12-client": "Klient: Polskie Radio",
        "project12-date": "Planowany start: Grudzień 2023",

        "project13-title": "Film: \"Zimowy Sen\"",
        "project13-desc": "Realizacja dźwięku do filmu artystycznego, nagrania ambientowe i sound design.",
        "project13-client": "Klient: Wajda Studio",
        "project13-date": "Ukończony: Luty 2023",

        "project14-title": "Serial: \"Druga Szansa\"",
        "project14-desc": "Postprodukcja dźwięku dla serialu obyczajowego, 12 odcinków.",
        "project14-client": "Klient: Canal+",
        "project14-date": "Ukończony: Kwiecień 2022",

        "project15-title": "Kampania: \"Przyszłość Jest Teraz\"",
        "project15-desc": "Realizacja dźwięku do serii spotów reklamowych dla firmy technologicznej.",
        "project15-client": "Klient: Samsung Polska",
        "project15-date": "Ukończony: Marzec 2021",

        "project16-title": "Dokument: \"Oceany Plastiku\"",
        "project16-desc": "Nagrania podwodne, miks i mastering dla filmu dokumentalnego o zanieczyszczeniu oceanów.",
        "project16-client": "Klient: WWF Polska",
        "project16-date": "Ukończony: Wrzesień 2020",

        "project17-title": "Gra: \"Kosmiczna Odyseja\"",
        "project17-desc": "Tworzenie efektów dźwiękowych i muzyki do gry science-fiction.",
        "project17-client": "Klient: 11 bit studios",
        "project17-date": "Planowane ukończenie: Październik 2023",

        "project18-title": "Audiobook: \"Kroniki Czasu\"",
        "project18-desc": "Nagranie, edycja i mastering audiobooka fantasy, 15 godzin materiału.",
        "project18-client": "Klient: Audioteka",
        "project18-date": "Ukończony: Czerwiec 2022",

        "project19-title": "Film: \"Granica Światów\"",
        "project19-desc": "Kompleksowa realizacja dźwięku do filmu science-fiction, efekty specjalne i sound design.",
        "project19-client": "Klient: Akson Studio",
        "project19-date": "Ukończony: Lipiec 2021",

        "project20-title": "Serial: \"Detektyw\"",
        "project20-desc": "Postprodukcja dźwięku dla serialu kryminalnego, 6 odcinków.",
        "project20-client": "Klient: HBO Polska",
        "project20-date": "Ukończony: Marzec 2020",

        "project21-title": "Dokument: \"Góry Świata\"",
        "project21-desc": "Nagrania terenowe w wysokich górach, miks i mastering dla serii dokumentalnej.",
        "project21-client": "Klient: National Geographic",
        "project21-date": "Planowany start: Październik 2023",

        "project22-title": "Kampania: \"Smaki Lata\"",
        "project22-desc": "Realizacja dźwięku do kampanii reklamowej produktów spożywczych.",
        "project22-client": "Klient: Tymbark",
        "project22-date": "Ukończony: Czerwiec 2022",

        "project23-title": "Gra: \"Królestwo Cieni\"",
        "project23-desc": "Tworzenie efektów dźwiękowych i muzyki do gry RPG fantasy.",
        "project23-client": "Klient: Techland",
        "project23-date": "Ukończony: Maj 2021",

        "project24-title": "Podcast: \"Nauka i Technologia\"",
        "project24-desc": "Produkcja dźwiękowa serii podcastów naukowych, 15 odcinków.",
        "project24-client": "Klient: Centrum Nauki Kopernik",
        "project24-date": "Ukończony: Listopad 2020",

        "project25-title": "Film: \"Ostatni Pociąg\"",
        "project25-desc": "Realizacja dźwięku do filmu historycznego, nagrania terenowe i sound design.",
        "project25-client": "Klient: WFDiF",
        "project25-date": "Planowane ukończenie: Grudzień 2023",

        "project26-title": "Serial: \"Mrok\"",
        "project26-desc": "Postprodukcja dźwięku dla serialu thriller, 8 odcinków.",
        "project26-client": "Klient: Player.pl",
        "project26-date": "Ukończony: Październik 2022",

        "project27-title": "Dokument: \"Życie Pszczół\"",
        "project27-desc": "Nagrania terenowe, miks i mastering dla filmu przyrodniczego.",
        "project27-client": "Klient: Animal Planet",
        "project27-date": "Ukończony: Kwiecień 2021",

        "project28-title": "Kampania: \"Bezpieczna Droga\"",
        "project28-desc": "Realizacja dźwięku do kampanii społecznej o bezpieczeństwie drogowym.",
        "project28-client": "Klient: Ministerstwo Infrastruktury",
        "project28-date": "Ukończony: Luty 2020",

        "project29-title": "Gra: \"Podwodny Świat\"",
        "project29-desc": "Tworzenie efektów dźwiękowych i muzyki do gry przygodowej o tematyce podwodnej.",
        "project29-client": "Klient: Flying Wild Hog",
        "project29-date": "Planowany start: Listopad 2023",

        "project30-title": "Audiobook: \"Zagadka Starego Zamku\"",
        "project30-desc": "Nagranie, edycja i mastering audiobooka dla dzieci, 8 godzin materiału.",
        "project30-client": "Klient: Empik Go",
        "project30-date": "Ukończony: Marzec 2022",

        "project31-title": "Film: \"Echo Przeszłości\"",
        "project31-desc": "Kompleksowa realizacja dźwięku do dramatu historycznego, nagrania archiwalne i sound design.",
        "project31-client": "Klient: Studio Munka",
        "project31-date": "Ukończony: Luty 2021",

        "project32-title": "Serial: \"Lekarze\"",
        "project32-desc": "Postprodukcja dźwięku dla serialu medycznego, 10 odcinków.",
        "project32-client": "Klient: TVN",
        "project32-date": "Ukończony: Styczeń 2020",

        "project33-title": "Dokument: \"Miasta Przyszłości\"",
        "project33-desc": "Nagrania terenowe, miks i mastering dla serii dokumentalnej o nowoczesnych metropoliach.",
        "project33-client": "Klient: Discovery Science",
        "project33-date": "Planowane ukończenie: Wrzesień 2023",

        "project34-title": "Kampania: \"Nowy Wymiar Dźwięku\"",
        "project34-desc": "Realizacja dźwięku do kampanii reklamowej sprzętu audio.",
        "project34-client": "Klient: Sony Polska",
        "project34-date": "Ukończony: Lipiec 2022",

        "project35-title": "Gra: \"Wyścig Legend\"",
        "project35-desc": "Tworzenie efektów dźwiękowych i muzyki do gry wyścigowej.",
        "project35-client": "Klient: PlayWay",
        "project35-date": "Ukończony: Wrzesień 2021",

        "project36-title": "Podcast: \"Rozmowy o Biznesie\"",
        "project36-desc": "Produkcja dźwiękowa serii podcastów biznesowych, 25 odcinków.",
        "project36-client": "Klient: Forbes Polska",
        "project36-date": "Ukończony: Październik 2020",

        "project37-title": "Film: \"Tajemnica Gór\"",
        "project37-desc": "Realizacja dźwięku do thrillera górskiego, nagrania terenowe i sound design.",
        "project37-client": "Klient: Opus Film",
        "project37-date": "Planowany start: Grudzień 2023",

        "project38-title": "Serial: \"Kroniki Rodzinne\"",
        "project38-desc": "Postprodukcja dźwięku dla serialu obyczajowego, 15 odcinków.",
        "project38-client": "Klient: Polsat",
        "project38-date": "Ukończony: Grudzień 2022",

        "project39-title": "Dokument: \"Tajemnice Kosmosu\"",
        "project39-desc": "Nagrania, miks i mastering dla filmu dokumentalnego o eksploracji kosmosu.",
        "project39-client": "Klient: Science Channel",
        "project39-date": "Ukończony: Listopad 2021",

        "project40-title": "Kampania: \"Świąteczna Magia\"",
        "project40-desc": "Realizacja dźwięku do świątecznej kampanii reklamowej sieci handlowej.",
        "project40-client": "Klient: Biedronka",
        "project40-date": "Ukończony: Grudzień 2020",


        // Galeria
        "gallery-title": "Galeria",
        "gallery-previous": "Poprzednie",
        "gallery-next": "Następne",
        "gallery-view-all": "Zobacz wszystkie",
        "gallery-modal-title": "Galeria zdjęć",
        "gallery-modal-close": "Zamknij",

        // Kontakt
        "contact-title": "Kontakt",
        "contact-name": "Imię i nazwisko",
        "contact-name-placeholder": "Twoje imię",
        "contact-email": "Adres email",
        "contact-email-placeholder": "Twój email",
        "contact-message": "Wiadomość",
        "contact-message-placeholder": "Napisz wiadomość",
        "contact-submit": "Wyślij",
        "contact-office": "Biuro",
        "contact-address": "ul. Wiosenna 8, 05-082 Koczargi Nowe",
        "contact-email-address": "kontakt@pro-ton-studio.pl",
        "contact-phone": "+48 501 283 077, (0 22) 752 90 35",
        "contact-person1-name": "Jan Kowalski",
        "contact-person1-title": "Manager Studia",
        "contact-person1-email": "jan.kowalski@example.com",
        "contact-person1-phone": "+48 123 456 789",
        "contact-person2-name": "Anna Nowak",
        "contact-person2-title": "Specjalista ds. Rezerwacji",
        "contact-person2-email": "anna.nowak@example.com",
        "contact-person2-phone": "+48 987 654 321",

        // Stopka
        "footer-copyright": "© 2023 Pro-Ton Studio. Wszelkie prawa zastrzeżone."
    },
    en: {
        // Navigation
        "nav-contact": "Contact",
        "nav-about": "About",
        "nav-studio": "Studio",
        "nav-projects": "Projects",
        "nav-gallery": "Gallery",

        // Projects - new elements
        "projects-titles": "Titles:",

        // Hero
        "hero-modern": "Modern",
        "hero-postproduction": "sound post-production.",
        "hero-description-1": "Professional sound design for film, advertising and games.",
        "hero-description-2": "Your project in the best hands.",
        "hero-contact-btn": "Contact us",

        // About
        "about-title": "About",
        "about-description": "We are a team of sound enthusiasts with many years of experience in the film, advertising and gaming industry. Our studio combines modern technology, creativity and attention to every detail. We carry out projects for the largest brands and independent creators.",
        "about-service-1": "Comprehensive sound post-production",
        "about-service-2": "Voice-over recordings and dubbing",
        "about-service-3": "Sound design, mixing, mastering",
        "about-more-btn": "More",

        // About Modal
        "about-modal-title": "About – more information",
        "about-modal-p1": "Pro-Ton Krzysztof Jastrząb has been operating since 1998. It offers professional services in the field of sound production on film sets and comprehensive sound post-production, including final mixing.",
        "about-modal-p2": "The founder and owner of the company is Dr. Krzysztof Jastrząb - a graduate and long-time teacher at the Sound Engineering Department of the Fryderyk Chopin University of Music in Warsaw, author of sound for many feature films, TV series, TV theaters and commercials.",
        "about-modal-p3": "Professional studio equipment and creative cooperation with the best graduates of the Sound Engineering Department of the University of Music in Warsaw are a guarantee of the highest quality services of Pro-Ton Krzysztof Jastrząb.",
        "about-modal-close": "Close",

        // Studio
        "studio-title": "Studio",
        "studio-recordings": "Recordings",
        "studio-recordings-desc": "Isolated booth, premium class microphones, voice-over, vocal and instrument recordings.",
        "studio-postproduction": "Post-production",
        "studio-postproduction-desc": "Advanced software, mixing, mastering, sound design, sound restoration.",
        "studio-monitoring": "Monitoring",
        "studio-monitoring-desc": "Professional studio monitors, room acoustics, comfortable workspace.",

        // Projects
        "projects-title": "Projects",
        "projects-filter-category": "Category:",
        "projects-filter-year": "Year:",
        "projects-filter-status": "Status:",
        "projects-all-categories": "All",
        "projects-category-film": "Feature Film",
        "projects-category-serial": "TV Series",
        "projects-category-commercial": "Commercial",
        "projects-category-documentary": "Documentary",
        "projects-category-game": "Game",
        "projects-category-audio": "Audiobook",
        "projects-all-years": "All years",
        "projects-2023": "2023",
        "projects-2022": "2022",
        "projects-2021": "2021",
        "projects-2020": "2020",
        "projects-all-status": "All",
        "projects-completed": "Completed",
        "projects-in-progress": "In progress",
        "projects-planned": "Planned",
        "projects-no-results": "No projects match your selected criteria. Change filters to see more projects.",
        "project-status-completed": "Completed",
        "project-status-in-progress": "In progress",
        "project-status-planned": "Planned",
        "project-category-film": "Feature Film",
        "project-category-serial": "TV Series",
        "project-category-commercial": "Commercial",
        "project-category-documentary": "Documentary",
        "project-category-game": "Game",
        "project-category-audio": "Audiobook",

        // Projects - details
        "project1-title": "Film: \"Night Silence\"",
        "project1-desc": "Dialogue recordings, sound design, mixing and mastering for an award-winning drama.",
        "project1-client": "Client: Kadr Film Studio",
        "project1-date": "Completed: June 2023",

        "project2-title": "TV Series: \"New Dawn\"",
        "project2-desc": "Sound post-production for a TV series, 8 episodes.",
        "project2-client": "Client: TVP",
        "project2-date": "Planned completion: December 2023",

        "project3-title": "Game: \"Dark Forest\"",
        "project3-desc": "Creating sound effects and music for an adventure game.",
        "project3-client": "Client: GameDev Studio",
        "project3-date": "Planned start: January 2024",

        "project4-title": "Commercial: \"New Energy\"",
        "project4-desc": "Comprehensive sound post-production, special audio effects, voice-over.",
        "project4-client": "Client: Vision Advertising Agency",
        "project4-date": "Completed: November 2022",

        "project5-title": "Documentary: \"Depth\"",
        "project5-desc": "Field recordings, mixing and mastering for a documentary film.",
        "project5-client": "Client: National Geographic",
        "project5-date": "Completed: May 2022",

        "project6-title": "Audiobook: \"Mystery of the Mountains\"",
        "project6-desc": "Recording, editing and mastering of an audiobook, 12 hours of material.",
        "project6-client": "Client: Word Publishing House",
        "project6-date": "Completed: December 2021",

        "project7-title": "Film: \"The Final Chapter\"",
        "project7-desc": "Comprehensive sound production for a psychological thriller, including foley recordings.",
        "project7-client": "Client: National Film Archive",
        "project7-date": "Completed: August 2022",

        "project8-title": "Campaign: \"Clean Tomorrow\"",
        "project8-desc": "Series of commercial spots for an environmental campaign, voice-over recordings and sound design.",
        "project8-client": "Client: Ministry of Environment",
        "project8-date": "Planned completion: November 2023",

        "project9-title": "TV Series: \"City Secrets\"",
        "project9-desc": "Sound post-production for a crime series, 10 episodes, special effects and mixing.",
        "project9-client": "Client: Netflix",
        "project9-date": "Completed: October 2021",

        "project10-title": "Documentary: \"Wild Poland\"",
        "project10-desc": "Field recordings, nature sounds, mixing and mastering for a documentary series.",
        "project10-client": "Client: Discovery Channel",
        "project10-date": "Completed: July 2020",

        "project11-title": "Game: \"Cyber Odyssey\"",
        "project11-desc": "Comprehensive sound production for an RPG game, environmental effects and music.",
        "project11-client": "Client: CD Projekt Red",
        "project11-date": "Completed: December 2020",

        "project12-title": "Podcast: \"Unknown History\"",
        "project12-desc": "Sound production for a series of historical podcasts, 20 episodes.",
        "project12-client": "Client: Polish Radio",
        "project12-date": "Planned start: December 2023",

        "project13-title": "Film: \"Winter Dream\"",
        "project13-desc": "Sound production for an artistic film, ambient recordings and sound design.",
        "project13-client": "Client: Wajda Studio",
        "project13-date": "Completed: February 2023",

        "project14-title": "TV Series: \"Second Chance\"",
        "project14-desc": "Sound post-production for a drama series, 12 episodes.",
        "project14-client": "Client: Canal+",
        "project14-date": "Completed: April 2022",

        "project15-title": "Campaign: \"Future Is Now\"",
        "project15-desc": "Sound production for a series of commercials for a technology company.",
        "project15-client": "Client: Samsung Poland",
        "project15-date": "Completed: March 2021",

        "project16-title": "Documentary: \"Plastic Oceans\"",
        "project16-desc": "Underwater recordings, mixing and mastering for a documentary about ocean pollution.",
        "project16-client": "Client: WWF Poland",
        "project16-date": "Completed: September 2020",

        "project17-title": "Game: \"Cosmic Odyssey\"",
        "project17-desc": "Creating sound effects and music for a science-fiction game.",
        "project17-client": "Client: 11 bit studios",
        "project17-date": "Planned completion: October 2023",

        "project18-title": "Audiobook: \"Chronicles of Time\"",
        "project18-desc": "Recording, editing and mastering of a fantasy audiobook, 15 hours of material.",
        "project18-client": "Client: Audioteka",
        "project18-date": "Completed: June 2022",

        "project19-title": "Film: \"Border of Worlds\"",
        "project19-desc": "Comprehensive sound production for a science-fiction film, special effects and sound design.",
        "project19-client": "Client: Akson Studio",
        "project19-date": "Completed: July 2021",

        "project20-title": "TV Series: \"Detective\"",
        "project20-desc": "Sound post-production for a crime series, 6 episodes.",
        "project20-client": "Client: HBO Poland",
        "project20-date": "Completed: March 2020",

        "project21-title": "Documentary: \"Mountains of the World\"",
        "project21-desc": "Field recordings in high mountains, mixing and mastering for a documentary series.",
        "project21-client": "Client: National Geographic",
        "project21-date": "Planned start: October 2023",

        "project22-title": "Campaign: \"Summer Flavors\"",
        "project22-desc": "Sound production for a food products advertising campaign.",
        "project22-client": "Client: Tymbark",
        "project22-date": "Completed: June 2022",

        "project23-title": "Game: \"Kingdom of Shadows\"",
        "project23-desc": "Creating sound effects and music for a fantasy RPG game.",
        "project23-client": "Client: Techland",
        "project23-date": "Completed: May 2021",

        "project24-title": "Podcast: \"Science and Technology\"",
        "project24-desc": "Sound production for a series of scientific podcasts, 15 episodes.",
        "project24-client": "Client: Copernicus Science Centre",
        "project24-date": "Completed: November 2020",

        "project25-title": "Film: \"The Last Train\"",
        "project25-desc": "Sound production for a historical film, field recordings and sound design.",
        "project25-client": "Client: WFDiF",
        "project25-date": "Planned completion: December 2023",

        "project26-title": "TV Series: \"Darkness\"",
        "project26-desc": "Sound post-production for a thriller series, 8 episodes.",
        "project26-client": "Client: Player.pl",
        "project26-date": "Completed: October 2022",

        "project27-title": "Documentary: \"Life of Bees\"",
        "project27-desc": "Field recordings, mixing and mastering for a nature film.",
        "project27-client": "Client: Animal Planet",
        "project27-date": "Completed: April 2021",

        "project28-title": "Campaign: \"Safe Road\"",
        "project28-desc": "Sound production for a social campaign about road safety.",
        "project28-client": "Client: Ministry of Infrastructure",
        "project28-date": "Completed: February 2020",

        "project29-title": "Game: \"Underwater World\"",
        "project29-desc": "Creating sound effects and music for an underwater-themed adventure game.",
        "project29-client": "Client: Flying Wild Hog",
        "project29-date": "Planned start: November 2023",

        "project30-title": "Audiobook: \"Mystery of the Old Castle\"",
        "project30-desc": "Recording, editing and mastering of a children's audiobook, 8 hours of material.",
        "project30-client": "Client: Empik Go",
        "project30-date": "Completed: March 2022",

        "project31-title": "Film: \"Echo of the Past\"",
        "project31-desc": "Comprehensive sound production for a historical drama, archival recordings and sound design.",
        "project31-client": "Client: Munk Studio",
        "project31-date": "Completed: February 2021",

        "project32-title": "TV Series: \"Doctors\"",
        "project32-desc": "Sound post-production for a medical series, 10 episodes.",
        "project32-client": "Client: TVN",
        "project32-date": "Completed: January 2020",

        "project33-title": "Documentary: \"Cities of the Future\"",
        "project33-desc": "Field recordings, mixing and mastering for a documentary series about modern metropolises.",
        "project33-client": "Client: Discovery Science",
        "project33-date": "Planned completion: September 2023",

        "project34-title": "Campaign: \"New Dimension of Sound\"",
        "project34-desc": "Sound production for an audio equipment advertising campaign.",
        "project34-client": "Client: Sony Poland",
        "project34-date": "Completed: July 2022",

        "project35-title": "Game: \"Race of Legends\"",
        "project35-desc": "Creating sound effects and music for a racing game.",
        "project35-client": "Client: PlayWay",
        "project35-date": "Completed: September 2021",

        "project36-title": "Podcast: \"Business Talks\"",
        "project36-desc": "Sound production for a series of business podcasts, 25 episodes.",
        "project36-client": "Client: Forbes Poland",
        "project36-date": "Completed: October 2020",

        "project37-title": "Film: \"Mountain Mystery\"",
        "project37-desc": "Sound production for a mountain thriller, field recordings and sound design.",
        "project37-client": "Client: Opus Film",
        "project37-date": "Planned start: December 2023",

        "project38-title": "TV Series: \"Family Chronicles\"",
        "project38-desc": "Sound post-production for a drama series, 15 episodes.",
        "project38-client": "Client: Polsat",
        "project38-date": "Completed: December 2022",

        "project39-title": "Documentary: \"Secrets of Space\"",
        "project39-desc": "Recordings, mixing and mastering for a documentary film about space exploration.",
        "project39-client": "Client: Science Channel",
        "project39-date": "Completed: November 2021",

        "project40-title": "Campaign: \"Christmas Magic\"",
        "project40-desc": "Sound production for a Christmas advertising campaign for a retail chain.",
        "project40-client": "Client: Biedronka",
        "project40-date": "Completed: December 2020",


        // Gallery
        "gallery-title": "Gallery",
        "gallery-previous": "Previous",
        "gallery-next": "Next",
        "gallery-view-all": "View all",
        "gallery-modal-title": "Photo gallery",
        "gallery-modal-close": "Close",

        // Contact
        "contact-title": "Contact",
        "contact-name": "Full name",
        "contact-name-placeholder": "Your name",
        "contact-email": "Email address",
        "contact-email-placeholder": "Your email",
        "contact-message": "Message",
        "contact-message-placeholder": "Write a message",
        "contact-submit": "Send",
        "contact-office": "Office",
        "contact-address": "Wiosenna 8 St., 05-082 Koczargi Nowe, Poland",
        "contact-email-address": "contact@pro-ton-studio.pl",
        "contact-phone": "+48 501 283 077, (0 22) 752 90 35",
        "contact-person1-name": "John Smith",
        "contact-person1-title": "Studio Manager",
        "contact-person1-email": "john.smith@example.com",
        "contact-person1-phone": "+48 123 456 789",
        "contact-person2-name": "Anna Johnson",
        "contact-person2-title": "Booking Specialist",
        "contact-person2-email": "anna.johnson@example.com",
        "contact-person2-phone": "+48 987 654 321",

        // Footer
        "footer-copyright": "© 2023 Pro-Ton Studio. All rights reserved."
    }
};