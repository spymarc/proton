<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Studio Dźwiękowe | Postprodukcja Dźwięku</title>

    <link rel="stylesheet" href="assets/vendor/bootstrap-icons-1.13.1/bootstrap-icons.min.css">
    <link rel="stylesheet" href="assets/vendor/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark sticky-top shadow-sm">
    <div class="container">
        <a class="navbar-brand d-flex align-items-center gap-2" href="#">
            <img src="http://pro-ton-studio.pl/images/logo.png" alt="Pro-Ton Studio Logo" height="48" style="max-width:160px;" class="me-2">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Menu">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item"><a class="nav-link active" href="#kontakt">Kontakt</a></li>
                <li class="nav-item"><a class="nav-link" href="#o-firmie">O firmie</a></li>
                <li class="nav-item"><a class="nav-link" href="#studio">Studio</a></li>
                <li class="nav-item"><a class="nav-link" href="#filmografia">Filmografia</a></li>
                <li class="nav-item"><a class="nav-link" href="#galeria">Galeria</a></li>
            </ul>
        </div>
    </div>
</nav>


<!-- Hero -->
<section class="py-5 text-center bg-light">
    <div class="container">
        <h1 class="display-5 fw-bold mb-3"><span class="accent">Nowoczesna</span> postprodukcja dźwięku</h1>
        <p class="lead mb-4">Profesjonalna realizacja dźwięku dla filmu, reklamy i gier.<br>Twój projekt w najlepszych rękach.</p>
        <a href="#kontakt" class="btn btn-accent btn-lg">Skontaktuj się</a>
    </div>
</section>

<!-- O firmie -->
<section id="o-firmie" class="container py-5">
    <h2 class="section-title">O firmie</h2>
    <div class="row align-items-center">
        <div class="col-lg-6 mb-4 mb-lg-0">
            <p>
                Jesteśmy zespołem pasjonatów dźwięku z wieloletnim doświadczeniem w branży filmowej, reklamowej i gamingowej. Nasze studio to połączenie nowoczesnych technologii, kreatywności i dbałości o każdy detal. Realizujemy projekty dla największych marek oraz niezależnych twórców.
            </p>
            <ul class="list-unstyled">
                <li><i class="bi bi-check2-circle accent"></i> Kompleksowa postprodukcja dźwięku</li>
                <li><i class="bi bi-check2-circle accent"></i> Nagrania lektorskie i dubbing</li>
                <li><i class="bi bi-check2-circle accent"></i> Sound design, miks, mastering</li>
            </ul>
            <button class="btn btn-accent mt-3" data-bs-toggle="modal" data-bs-target="#aboutModal">
                Więcej
            </button>
        </div>
        <div class="col-lg-6 text-center">
            <img src="http://pro-ton-studio.pl/images/glowna.png" alt="Studio" class="img-fluid rounded shadow-lg">
        </div>
    </div>
</section>

<!-- Modal "Więcej o firmie" -->
<div class="modal fade" id="aboutModal" tabindex="-1" aria-labelledby="aboutModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header border-0">
                <h5 class="modal-title" id="aboutModalLabel">O firmie – więcej informacji</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Zamknij"></button>
            </div>
            <div class="modal-body position-relative">
                <img src="http://pro-ton-studio.pl/thumb/ja5.jpg" alt="Logo" class="rounded-circle shadow position-absolute" style="top:16px; right:16px; width:80px; height:80px; object-fit:contain; opacity:0.92;">
                <div style="padding-right:110px;">
                    <p>
                        Firma Pro-Ton Krzysztof Jastrząb działa od 1998 roku. Oferuje profesjonalne usługi w zakresie realizacji dźwięku na planie filmowym oraz kompleksową postprodukcję dźwięku włącznie z końcowym zgraniem.
                    </p>
                    <p>
                        Założycielem   i  właścicielem   firmy  jest  dr  Krzysztof  Jastrząb  - absolwent i wieloletni pedagog Wydziału Reżyserii Dźwięku Uniwersytetu Muzycznego Fryderyka Chopina w Warszawie, autor dźwięku do wielu filmów fabularnych, seriali telewizyjnych, teatrów TV i reklam.
                    </p>
                    <p>
                        Profesjonalne wyposażenie studia oraz twórcza współpraca z najlepszymi absolwentami Wydziału Reżyserii Dźwięku Uniwersytetu Muzycznego w Warszawie są gwarancją najwyższej jakości usług firmy Pro-Ton Krzysztof Jastrząb.
                    </p>
                </div>
            </div>
            <div class="modal-footer border-0">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Zamknij</button>
            </div>
        </div>
    </div>
</div>


<!-- Studio -->
<section id="studio" class="bg-light py-5">
    <div class="container">
        <h2 class="section-title">Studio</h2>
        <div class="row g-4">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body text-center">
                        <i class="bi bi-mic-fill display-4 accent mb-3"></i>
                        <h5 class="card-title">Nagrania</h5>
                        <p class="card-text">Izolowana kabina, mikrofony klasy premium, nagrania lektorskie, wokalne i instrumentów.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body text-center">
                        <i class="bi bi-sliders2-vertical display-4 accent mb-3"></i>
                        <h5 class="card-title">Postprodukcja</h5>
                        <p class="card-text">Zaawansowane oprogramowanie, miks, mastering, sound design, restauracja dźwięku.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body text-center">
                        <i class="bi bi-headphones display-4 accent mb-3"></i>
                        <h5 class="card-title">Odsłuch</h5>
                        <p class="card-text">Profesjonalne monitory studyjne, akustyka pomieszczeń, komfortowa przestrzeń do pracy.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Filmografia -->
<section id="filmografia" class="container py-5">
    <h2 class="section-title">Filmografia</h2>
    <div class="row g-4">
        <div class="col-md-4">
            <div class="card h-100">
                <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" class="card-img-top" alt="Film 1">
                <div class="card-body">
                    <h5 class="card-title">Film: "Cisza Nocy"</h5>
                    <p class="card-text">Nagrania dialogów, sound design, miks i mastering do nagradzanego dramatu.</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card h-100">
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" class="card-img-top" alt="Film 2">
                <div class="card-body">
                    <h5 class="card-title">Reklama: "Nowa Energia"</h5>
                    <p class="card-text">Kompleksowa postprodukcja dźwięku, efekty specjalne audio, lektor.</p>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card h-100">
                <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" class="card-img-top" alt="Film 3">
                <div class="card-body">
                    <h5 class="card-title">Gra: "CyberRun"</h5>
                    <p class="card-text">Tworzenie efektów dźwiękowych i muzyki do gry komputerowej.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Galeria -->
<section id="galeria" class="bg-light py-5">
    <div class="container">
        <h2 class="section-title mb-5">Galeria</h2>
        <div id="studioCarousel" class="carousel slide shadow-lg rounded-4 mb-4" data-bs-ride="carousel" data-bs-interval="3000" data-bs-wrap="true" data-bs-pause="hover">
            <!-- Indicators -->
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#studioCarousel" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#studioCarousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#studioCarousel" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#studioCarousel" data-bs-slide-to="3"></button>
            </div>
            <!-- Slides -->
            <div class="carousel-inner rounded-4">
                <div class="carousel-item active">
                    <img src="assets/images/pexels-karolina-grabowska-4016579.jpg" class="d-block w-100" alt="Konsola mikserska">
                </div>
                <div class="carousel-item">
                    <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80" class="d-block w-100" alt="Studio nagraniowe">
                </div>
                <div class="carousel-item">
                    <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80" class="d-block w-100" alt="Nagranie wokalu">
                </div>
                <div class="carousel-item">
                    <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" class="d-block w-100" alt="Oprogramowanie audio">
                </div>
            </div>
            <!-- Controls -->
            <button class="carousel-control-prev" type="button" data-bs-target="#studioCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
                <span class="visually-hidden">Poprzednie</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#studioCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
                <span class="visually-hidden">Następne</span>
            </button>
        </div>
        <div class="text-center">
            <button class="btn btn-accent btn-lg" data-bs-toggle="modal" data-bs-target="#galleryModal">
                <i class="bi bi-grid-3x3-gap"></i> Zobacz wszystkie
            </button>
        </div>
    </div>
</section>

<!-- Modal z siatką zdjęć (dynamicznie przez PHP) -->
<div class="modal fade" id="galleryModal" tabindex="-1" aria-labelledby="galleryModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header border-0">
                <h5 class="modal-title" id="galleryModalLabel">Galeria zdjęć</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Zamknij"></button>
            </div>
            <div class="modal-body">
                <div class="row g-3">
                    <?php
            $dir = "assets/images/";
            $allowed_types = array('jpg','jpeg','png','gif','webp');
            $files = scandir($dir);
            foreach($files as $file) {
                $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
                if (in_array($ext, $allowed_types)) {
                    echo '<div class="col-12 col-sm-6 col-md-3 mb-3">';
                    echo '<img src="'.$dir.$file.'" class="img-fluid rounded shadow-sm" alt="'.$file.'">';
                    echo '</div>';
                }
                }
                ?>
            </div>
        </div>
        <div class="modal-footer border-0">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Zamknij</button>
        </div>
    </div>
</div>
</div>



<!-- Kontakt -->
<section id="kontakt" class="container py-5">
    <h2 class="section-title">Kontakt</h2>
    <div class="row g-4">
        <div class="col-md-6">
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">Imię i nazwisko</label>
                    <input type="text" class="form-control" id="name" placeholder="Twoje imię">
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Adres email</label>
                    <input type="email" class="form-control" id="email" placeholder="Twój email">
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Wiadomość</label>
                    <textarea class="form-control" id="message" rows="4" placeholder="Napisz wiadomość"></textarea>
                </div>
                <button type="submit" class="btn btn-accent">Wyślij</button>
            </form>
            <div class="mt-4">
                <p><i class="bi bi-geo-alt accent"></i> ul. Wiosenna 8, 05-082 Koczargi Nowe</p>
                <p><i class="bi bi-envelope accent"></i> kontakt@pro-ton-studio.pl</p>
                <p><i class="bi bi-telephone accent"></i> +48 501 283 077, (0 22) 752 90 35</p>
            </div>
        </div>
        <div class="col-md-6">
            <div class="map-responsive rounded shadow">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.819418034027!2d20.788523490603467!3d52.24666360080822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471eb5250c60b4ab%3A0xb833151dc335fee5!2sWiosenna%208%2C%2005-082%20Koczargi%20Nowe!5e0!3m2!1spl!2spl!4v1747739550940!5m2!1spl!2spl" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</section>

<footer>
    &copy; 2025 © Pro-Ton Studio. Wszelkie prawa zastrzeżone.
</footer>

<!-- Bootstrap JS -->
<script src="assets/vendor/bootstrap.bundle.min.js"></script>
<script src="assets/js/main.js"></script>
</body>
</html>
