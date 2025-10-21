const flowersData = {
    pagibig: [
        {
            name: "Rose",
            tagalog: "Rosas",
            image: "https://tse4.mm.bing.net/th/id/OIP.jUKVwQoiY_W1RJhr7JkkNgHaEK?rs=1&pid=ImgDetMain",
            meaning: "Bulaklak ng pag-ibig at pagmamahalan. Simbolo ng malalim na pagmamahal at romansa.",
            significance: "Ginagamit sa mga pagdiriwang ng Araw ng mga Puso at sa mga propesyon ng pag-ibig. Ang rosas ay naging sentro ng kulturang Pilipino pagdating sa pagpapahayag ng damdamin.",
            location: "Baguio, Benguet at iba't ibang lugar sa Pilipinas"
        },
        {
            name: "Tulip",
            tagalog: "Tulip",
            image: "https://hgtvhome.sndimg.com/content/dam/images/grdn/fullset/2014/5/5/0/20140410-154558.jpg.rend.hgtvcom.1280.960.suffix/1452854942650.jpeg",
            meaning: "Nagpapakita ng bagong simula at pag-asa. Simbolo ng perpektong pag-ibig.",
            significance: "Kahit hindi katutubong bulaklak ng Pilipinas, naging popular ito sa mga regalo at dekorasyon bilang simbolo ng bagong yugto sa buhay.",
            location: "Import mula sa ibang bansa, ngunit mabibili sa mga flower shops"
        },
        {
            name: "Orchid",
            tagalog: "Orkidyas",
            image: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Orchid_X_Doritaenopsis_%27Dorado%27_Flower_2721px.jpg",
            meaning: "Kilala sa ganda at kakaibang anyo. Sumisimbolo ng kagandahan, pagmamahal, at karunungan.",
            significance: "Ang Pilipinas ay kilala sa iba't ibang uri ng orkidyas. Ang waling-waling ay isa sa pinakamahalagang orkidyas sa mundo at pambansang bulaklak ng Davao.",
            location: "Mindanao, Luzon, at Visayas - lalo na sa mga bundok"
        },
        {
            name: "Peony",
            tagalog: "Piony",
            image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=800",
            meaning: "Bulaklak ng kasaganaan at kagandahan. Simbolo ng masaganang pag-ibig at kaligayahan.",
            significance: "Ginagamit sa mga kasal at mahahalagang okasyon bilang tanda ng prosperidad at maligayang buhay mag-asawa.",
            location: "Import, ngunit popular sa mga flower arrangements"
        }
    ],
    paggalang: [
        {
            name: "Sampaguita",
            tagalog: "Sampaguita (Arabian Jasmine)",
            image: "https://mail.google.com/mail/u/1?ui=2&ik=fefad663a8&attid=0.19&permmsgid=msg-f:1845585618981849384&th=199cd65795fb8928&view=att&disp=safe&realattid=199cd62dd9fc1ac55816&zw",
            meaning: "Pambansang bulaklak ng Pilipinas. Simbolo ng kadalisayan at kababaang-loob. Sumisimbolo ng kadalisayan, paggalang, at yumyurak na pag-asa.",
            significance: "Ginagamit sa mga relihiyosong seremonya, kasal, at parangal sa mga bayani. Ang sampaguita garland ay tradisyonal na alay ng paggalang.",
            location: "Buong Pilipinas, partikular sa Bulacan"
        },
        {
            name: "White Lily",
            tagalog: "Puting Liryo",
            image: "https://images.fineartamerica.com/images-medium-large-5/white-lilies-davorin-mance.jpg",
            meaning: "Simbolo ng kalinisan at bagong yugto. Kinakatawan ng kadalisayan, kabutihan, at kabanalan.",
            significance: "Ginagamit sa mga misa at procession bilang alay sa Birhen Maria at mga santo. Madalas nakikita sa mga relihiyosong altar.",
            location: "Malamig na lugar sa Pilipinas"
        },
        {
            name: "Chrysanthemum",
            tagalog: "Krisantemo",
            image: "https://tse1.mm.bing.net/th/id/OIP.Z-XgSnXmJB72joide297WQHaF9?rs=1&pid=ImgDetMain&o=7&rm=3",
            meaning: "Nagbibigay ng tibay at mahabang buhay. Sa Pilipinas, sumisimbolo ng paggalang sa mga yumaong mahal sa buhay at pag-alaala.",
            significance: "Tradisyonal na bulaklak na dadalhin sa sementeryo tuwing Undas o All Saints' Day.",
            location: "Baguio at iba pang malamig na rehiyon"
        },
        {
            name: "Camellia",
            tagalog: "Kamelya",
            image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=800",
            meaning: "Sagisag ng pagkakaibigan at paghanga. Simbolo ng perpektong kagandahan.",
            significance: "Ginagamit upang ipakita ang mataas na paggalang at pagpapahalaga sa isang tao.",
            location: "Malamig na klima, mabibili sa specialty gardens"
        }
    ],
    kalungkutan: [
        {
            name: "White Carnation",
            tagalog: "Puting Karnasyon",
            image: "https://cdn11.bigcommerce.com/s-c49b6/images/stencil/1280x1280/products/513/3288/Carnation_Grenadin_White_Seeds_Dianthus_Caryophyllus__75366.1565200709.jpg?c=2",
            meaning: "Sumisimbolo ng pagmamahal at katapatan. Ang puting karnasyon ay simbolo ng walang hanggang pag-ibig at alaala sa mga yumaong mahal sa buhay.",
            significance: "Ginagamit sa mga libing at memorial service bilang tanda ng pakikiramay at paggalang.",
            location: "Import mula sa ibang bansa, ngunit mabibili sa buong Pilipinas"
        },
        {
            name: "Forget-me-not",
            tagalog: "Huwag-mo-'kong-kalilimutan",
            image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800",
            meaning: "Paalala ng alaala at tunay na pagmamahal. Simbolo ng walang hanggang alaala.",
            significance: "Ipinapahiwatig ang pangmatagalang pag-alala sa mga taong mahalaga sa ating buhay.",
            location: "Malamig na klima, specialty flowers"
        },
        {
            name: "Lavender",
            tagalog: "Lavanda",
            image: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=800",
            meaning: "Kilala sa bango at nakapapawi ng pagod. Simbolo ng katahimikan at kapayapaan.",
            significance: "Ginagamit para sa relaxation at bilang tanda ng pakikiramay sa panahon ng kalungkutan.",
            location: "Imported, mabibili sa specialty shops"
        }
    ],
    kasiyahan: [
        {
            name: "Sunflower",
            tagalog: "Mirasol",
            image: "https://philippineculturaleducation.com.ph/wp-content/uploads/2020/04/mirasol.jpg",
            meaning: "Sumusunod sa araw, simbolo ng kasiyahan. Sumisimbolo ng kasiyahan, pag-asa, at loyalty. Ang kanyang kulay ay nagdadala ng liwanag at saya.",
            significance: "Naging popular sa mga celebration at gift-giving. Ang sunflower farms ay naging tourist attraction.",
            location: "Nueva Ecija, Bataan, at iba pang bahagi ng Luzon"
        },
        {
            name: "Daisy",
            tagalog: "Margarita",
            image: "https://tse1.mm.bing.net/th/id/OIP.xtitZA9By0O78n8WJrk83wHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
            meaning: "Paalala ng kasimplehan at saya. Kinakatawan ng inosenteng kasiyahan, simpleng kagandahan, at true love.",
            significance: "Ginagamit sa mga casual celebration at simbolo ng walang maliw na pagmamahal.",
            location: "Baguio at malamig na lugar"
        },
        {
            name: "Gumamela",
            tagalog: "Gumamela (Hibiscus)",
            image: "https://garvillo.com/wp-content/uploads/2023/07/a-pink-gumamela-flower.jpg",
            meaning: "Bulaklak ng sigla at mainit na pagtanggap. Kumakatawan sa kagandahan, kadalisayan, at kabataang-loob.",
            significance: "Isa sa mga pinakakilalang bulaklak sa Pilipinas. Ginagamit sa paggawa ng tea at tradisyonal na gamot. Madalas makita sa mga hardin ng tahanan.",
            location: "Buong Pilipinas, lalo na sa mga tropikal na lugar"
        },
        {
            name: "Kalachuchi",
            tagalog: "Kalachuchi (Frangipani)",
            image: "https://tse1.mm.bing.net/th/id/OIP.wPBdGaB25z5G6ZlMWiwewgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
            meaning: "Madalas makita sa bakuran, simbolo ng katatagan. Kumakatawan din ng bagong simula.",
            significance: "Kilala sa matamis na amoy at ginagamit sa mga dekorasyon. Simbolo ng Filipino tropical beauty.",
            location: "Buong Pilipinas, lalo na sa mga bakuran"
        }
    ]
};

const flowerOfDay = [
    {
        name: "Gumamela",
        image: "https://garvillo.com/wp-content/uploads/2023/07/a-pink-gumamela-flower.jpg",
        meaning: "Simbolo ng kagandahan at kadalisayan",
        quote: "Ang tunay na ganda ay mula sa puso."
    },
    {
        name: "Sampaguita",
        image: "https://mail.google.com/mail/u/1?ui=2&ik=fefad663a8&attid=0.19&permmsgid=msg-f:1845585618981849384&th=199cd65795fb8928&view=att&disp=safe&realattid=199cd62dd9fc1ac55816&zw",
        meaning: "Simbolo ng paggalang at pag-asa",
        quote: "Sa kadalisayan ng kalooban, makikita ang tunay na yaman."
    },
    {
        name: "Rosas",
        image: "https://tse4.mm.bing.net/th/id/OIP.jUKVwQoiY_W1RJhr7JkkNgHaEK?rs=1&pid=ImgDetMain",
        meaning: "Simbolo ng pag-ibig at pagmamahal",
        quote: "Ang pagmamahal ay bulaklak na hindi nalalanta."
    },
    {
        name: "Mirasol",
        image: "https://img.freepik.com/premium-photo/pink-mirasol-flower-cosmos-bipinnatus-field_142883-3519.jpg",
        meaning: "Simbolo ng kasiyahan at liwanag",
        quote: "Harapin ang araw at mamuhay nang may ngiti."
    }
];

const quizQuestions = [
    {
        question: "Anong bulaklak ang pambansang bulaklak ng Pilipinas?",
        options: ["Rosas", "Sampaguita", "Gumamela", "Orkidyas"],
        correct: 1
    },
    {
        question: "Alin ang simbolo ng pag-ibig at romansa?",
        options: ["Mirasol", "Rosas", "Liryo", "Krisantemo"],
        correct: 1
    },
    {
        question: "Anong bulaklak ang dadalhin sa Undas?",
        options: ["Gumamela", "Antoryo", "Krisantemo", "Mirasol"],
        correct: 2
    },
    {
        question: "Saang lugar kilala ang waling-waling orkidyas?",
        options: ["Luzon", "Visayas", "Mindanao", "Metro Manila"],
        correct: 2
    },
    {
        question: "Anong bulaklak ang sumisimbolo ng kasiyahan at liwanag?",
        options: ["Mirasol", "Liryo", "Rosas", "Sampaguita"],
        correct: 0
    }
];

let currentQuizIndex = 0;

const loadingScreen = document.getElementById('loading-screen');
const mobileToggle = document.getElementById('mobile-toggle');
const mainNav = document.getElementById('main-nav');
const navLinks = document.querySelectorAll('.nav-link');
const themeTabs = document.querySelectorAll('.theme-tab');
const galleryGrid = document.getElementById('gallery-grid');
const modal = document.getElementById('flower-modal');
const modalClose = document.querySelector('.modal-close');
const dictionaryGrid = document.getElementById('dictionary-grid');
const flowerSearch = document.getElementById('flower-search');

document.addEventListener('DOMContentLoaded', () => {
    // Hide loading screen
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);

    // Set flower of the day
    setFlowerOfDay();

    // Load gallery
    loadGallery('pagibig');

    // Load dictionary
    loadDictionary();

    // Load quiz
    loadQuiz();

    // Event listeners
    mobileToggle.addEventListener('click', toggleMobileMenu);
    themeTabs.forEach(tab => tab.addEventListener('click', handleThemeTab));
    modalClose.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href');
            scrollToSection(target.substring(1));
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            if (window.innerWidth <= 768) {
                mainNav.classList.remove('active');
            }
        });
    });

    flowerSearch.addEventListener('input', filterDictionary);

    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

function toggleMobileMenu() {
    mainNav.classList.toggle('active');
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function setFlowerOfDay() {
    const today = new Date().getDay();
    const flower = flowerOfDay[today % flowerOfDay.length];
    
    document.getElementById('fotd-name').textContent = flower.name;
    document.getElementById('fotd-meaning').textContent = flower.meaning;
    document.getElementById('fotd-quote').textContent = flower.quote;
    document.getElementById('fotd-image').src = flower.image;
    document.getElementById('fotd-image').alt = flower.name;
}

function handleThemeTab(e) {
    const theme = e.target.dataset.theme;
    themeTabs.forEach(tab => tab.classList.remove('active'));
    e.target.classList.add('active');
    loadGallery(theme);
}

function loadGallery(theme) {
    galleryGrid.innerHTML = '';
    const flowers = flowersData[theme];
    
    flowers.forEach(flower => {
        const card = document.createElement('div');
        card.classList.add('flower-card');
        card.innerHTML = `
            <img class="flower-icon" src="${flower.image}" alt="${flower.name}">
            <h3>${flower.name}</h3>
            <p class="tagalog-name">${flower.tagalog}</p>
            <p class="meaning">${flower.meaning.substring(0, 80)}...</p>
        `;
        card.addEventListener('click', () => openModal(flower));
        galleryGrid.appendChild(card);
    });
}

function openModal(flower) {
    document.getElementById('modal-image').src = flower.image;
    document.getElementById('modal-image').alt = flower.name;
    document.getElementById('modal-name').textContent = flower.name;
    document.getElementById('modal-tagalog').textContent = flower.tagalog;
    document.getElementById('modal-meaning').textContent = flower.meaning;
    document.getElementById('modal-significance').textContent = flower.significance;
    document.getElementById('modal-location').textContent = flower.location;
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

function loadDictionary() {
    const allFlowers = [];
    Object.values(flowersData).forEach(theme => {
        allFlowers.push(...theme);
    });

    allFlowers.forEach(flower => {
        const item = document.createElement('div');
        item.classList.add('dictionary-item');
        item.innerHTML = `
            <img class="icon" src="${flower.image}" alt="${flower.name}">
            <h4>${flower.name}</h4>
            <p class="tagalog">${flower.tagalog}</p>
        `;
        item.addEventListener('click', () => openModal(flower));
        dictionaryGrid.appendChild(item);
    });
}

function filterDictionary() {
    const searchTerm = flowerSearch.value.toLowerCase();
    const items = dictionaryGrid.querySelectorAll('.dictionary-item');
    
    items.forEach(item => {
        const name = item.querySelector('h4').textContent.toLowerCase();
        const tagalog = item.querySelector('.tagalog').textContent.toLowerCase();
        
        if (name.includes(searchTerm) || tagalog.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function loadQuiz() {
    const question = quizQuestions[currentQuizIndex];
    document.getElementById('quiz-question-text').textContent = question.question;
    
    const optionsContainer = document.querySelector('.quiz-options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('quiz-option');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });
    
    document.getElementById('quiz-result').classList.remove('show', 'correct', 'wrong');
    document.getElementById('quiz-next').style.display = 'none';
}

function checkAnswer(selectedIndex) {
    const question = quizQuestions[currentQuizIndex];
    const options = document.querySelectorAll('.quiz-option');
    const result = document.getElementById('quiz-result');
    const nextButton = document.getElementById('quiz-next');
    
    options.forEach(option => option.disabled = true);
    
    if (selectedIndex === question.correct) {
        options[selectedIndex].classList.add('correct');
        result.textContent = '✓ Tama! Magaling!';
        result.classList.add('show', 'correct');
    } else {
        options[selectedIndex].classList.add('wrong');
        options[question.correct].classList.add('correct');
        result.textContent = '✗ Mali. Ang tamang sagot ay: ' + question.options[question.correct];
        result.classList.add('show', 'wrong');
    }
    
    nextButton.style.display = 'block';
    nextButton.onclick = () => {
        currentQuizIndex = (currentQuizIndex + 1) % quizQuestions.length;
        loadQuiz();
    };
}

// Header shadow on scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});
