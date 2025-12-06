// --- HARİTA AYARLARI ---
var map = L.map('map', { zoomControl: false }).setView([38.680, 39.550], 10);

L.control.zoom({ position: 'topright' }).addTo(map);

L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map);


var redIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});




// --- GÜNCELLENMİŞ VE DETAYLANDIRILMIŞ İÇERİK ---
const places = [
    {
        name: "1. Kaşpınar (Pağnik) Köyü",
        lat: 38.92634385867963,
        lng: 38.722516003784214,
        desc: "Roma döneminde sınır karakolu olarak kullanılan Pağnik, Ağın ilçesine yakındır. Fırat Nehri'nin kıyısında stratejik bir noktada bulunur ve tarihi kalıntılarıyla dikkat çeker.",
        evliya: "Nehir kenarında, kervanların geçiş güzergahında bulunan şirin bir köydür. Eski çağlardan kalma yapıları ve verimli arazileriyle bilinir.",
        img: "https://upload.wikimedia.org/wikipedia/commons/9/98/Euphrates_River_near_Halfeti.jpg" 
        // Kendi resmin için burayı 'images/2.jpg' yap
    },
    {
        name: "2. Aşvan (Muratçık) Köyü",
        lat: 38.84568340605829,
        lng: 38.96038914488417,
        desc: "Murat Nehri kıyısında yer alan Aşvan, M.Ö. 3000'li yıllara uzanan tarihiyle bölgenin en eski yerleşimlerindendir.",
        evliya: "Murat Nehri kenarında, bağlık bahçelik, mamur bir köydür.",
        // Resimlerini 'images/dosya_adi.jpg' şeklinde yazmalısın
        images: [
            "images/aşvan1.jpg", 
            "images/aşvan2.jpg",
            "images/aşvan3.jpg",
        ]
    },
    
    {
        name: "3. Harput Kalesi (Süt Kalesi)",
        lat: 38.7041,
        lng: 39.2573,
        desc: "Urartular tarafından M.Ö. 8. yüzyılda yapılan kale, harcına su yerine süt katıldığı efsanesiyle 'Süt Kalesi' olarak anılır. Artuklu, Selçuklu ve Osmanlı dönemlerinde de kullanılmıştır.",
        evliya: "Göklere baş uzatmış, yalçın kayalar üzerinde eşsiz bir kaledir. İçinde darphane, zindanlar ve yüzlerce asker evi vardır. Fethedilmesi güç, heybetli bir yapıdır.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Harput_Kalesi_2.jpg/800px-Harput_Kalesi_2.jpg"
    },
    {
        name: "4. Ulu Cami",
        lat: 38.7061,
        lng: 39.2552,
        desc: "1156 yılında Artuklu Hükümdarı Fahrettin Karaaslan tarafından yaptırılmıştır. Minaresi, Pisa Kulesi'nden daha eğri olmasıyla (yaklaşık 7 derece) dünyaca ünlüdür.",
        evliya: "Cemaati çok, eski tarz tuğla minaresi olan sanatlı bir camidir. Avlusunda ulu çınarlar vardır ve halk buraya büyük hürmet gösterir.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Elaz%C4%B1g_Harput_Ulu_Cami.jpg/640px-Elaz%C4%B1g_Harput_Ulu_Cami.jpg"
    },
    {
        name: "5. Sarahatun Camii",
        lat: 38.7047,
        lng: 39.2530,
        desc: "Akkoyunlu Hükümdarı Uzun Hasan'ın annesi Sara Hatun tarafından 1465 yılında mescit olarak yaptırılmış, daha sonra camiye çevrilmiştir. Harput'un en zarif taş işçiliklerinden birine sahiptir.",
        evliya: "Minaresiz, ahşap sütunlu, ferah ve cemaati bol bir ibadethanedir. Şehrin merkezinde, herkesin uğradığı nurlu bir mekandır.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Harput_Sarahatun_Camii.jpg/640px-Harput_Sarahatun_Camii.jpg"
    },
    {
        name: "6. Tarihi Hamamlar (Kale Hamamı)",
        lat: 38.7045,
        lng: 39.2569,
        desc: "Harput'ta Osmanlı ve Selçuklu döneminden kalan Kale Hamamı, Cimşit Hamamı ve Hoca Hamamı gibi yapılar, dönemin gelişmiş su mimarisini yansıtır.",
        evliya: "Suyu ve havası hoş, kubbeleri ferah, seçkin ve halkın rağbet ettiği hamamlardır. İçerisi her daim sıcaktır ve hizmeti güzeldir.",
        img: "https://kulturportali.gov.tr/repoKulturPortali/large/27022013/f73e9702-c948-4389-a292-6905545a9957.jpg?format=jpg&quality=50"
    },
    {
        name: "7. Esadiye Medresesi",
        lat: 38.7059,
        lng: 39.2503,
        desc: "13. yüzyılda yapılan bu medrese, dönemin üniversitesi niteliğindedir. Günümüze sadece kalıntıları ulaşsa da, taç kapısındaki taş işlemeler sanat şaheseridir.",
        evliya: "İlim tahsil edilen, alimlerin toplandığı, taş işçiliğiyle bezeli bir irfan yuvasıdır. Buradan nice âlimler yetişmiştir.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Harput_Reliefs.jpg/640px-Harput_Reliefs.jpg"
    },
    {
        name: "8. Buzluk Mağarası",
        lat: 38.73584286284866, 
        lng: 39.282839115522414,
        desc: "Jeomorfolojik yapısı nedeniyle yazın içinde buz oluşan, kışın ise sıcak hava üfleyen dünyadaki ender mağaralardan biridir.",
        evliya: "Temmuz sıcağında içine girilmez, buz parçaları çıkarılır. Kışın ise hamam gibi sıcaktır. Kudret-i İlahi bir ibret yeridir.",
        img: "https://mapio.net/images-p/34415894.jpg"
    },
    {
        name: "9. Yurtbaşı Şifalı Suları",
        lat: 38.639616936883314, 
        lng: 39.3436911618069,
        desc: "Eski adıyla Hoğu köyü, yer altı kaynak suları ve verimli arazileriyle bilinir. Sularının çeşitli hastalıklara iyi geldiğine inanılır.",
        evliya: "Suyu gayet latiftir, içenlere şifa olur. Bağlık bahçelik, mamur bir köydür ve havası insanı zinde tutar.",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/57/Elaz%C4%B1g_Ovas%C4%B1.jpg"
    },
    {
        name: "10. Habusu (İkizdemir) Köyü",
        lat: 38.637715,
        lng: 39.385421,
        desc: "Tarihi İpek Yolu güzergahında bulunan köy, eski dönemlerde kervanların konaklama ve güvenlik noktalarından biriydi.",
        evliya: "Yolcuların uğrak noktası, kervanların dinlendiği, suyu bol bir menzildir. Halkı gariplere dosttur.",
        img: "https://upload.wikimedia.org/wikipedia/commons/1/18/Elazig_landscape.jpg"
    },
    {
        name: "11. Hazar Gölü (Gölcük)",
        lat: 38.5000,
        lng: 39.4000,
        desc: "22 km uzunluğunda tektonik bir göldür. Doğunun Bodrum'u olarak bilinir. Suyu sodalı ve tuzludur.",
        evliya: "Etrafı dağlarla çevrili, suyu berrak ve tatlı (o dönemde), içinde balıkların oynaştığı bir göldür. Kıyısında dinlenmek ruha şifadır.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Lake_Hazar_2.jpg/800px-Lake_Hazar_2.jpg"
    },
    {
        name: "12. Batık Kent",
        lat: 38.4800,
        lng: 39.4200,
        desc: "Hazar Gölü'nün suları altında kalan 11. yüzyıla ait yerleşim ve manastır kalıntılarıdır. Dalış turizmi için önemli bir noktadır.",
        evliya: "Göl suları yükselmeden önce burada mamur bir şehir ve ibadethaneler olduğu rivayet edilir. Sular altında gizemli bir tarihtir.",
        img: "https://kulturportali.gov.tr/repoKulturPortali/large/27022013/86b5c20c-c9e2-45e0-81f3-181580911760.jpg?format=jpg&quality=50"
    },
    {
        name: "13. Sarıkamış Köyü",
        lat: 38.595081752040024,
        lng: 39.680367393078605,
        desc: "Tarihi Palu yolu üzerinde bulunan, eski bir yerleşim birimidir. Tarım ve hayvancılıkla geçinen, geleneksel yapısını koruyan bir köydür.",
        evliya: "Palu seferinde ordunun konakladığı, arazisi verimli bir köydür. Yaylaları serin ve otlaktır.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Elaz%C4%B1g_mountains.jpg/800px-Elaz%C4%B1g_mountains.jpg"
    },
    {
        name: "14. Tırhe Köyü (Keklikdere)",
        lat: 38.6134023077807, 
        lng: 39.829101551079326,
        desc: "Dağların eteğinde, Murat Nehri'ne bakan yamaçlarda kuruludur. Doğal güzellikleri ve tarihi köprüleriyle bilinir.",
        evliya: "Kekliği bol, suyu soğuk, dağların eteğinde şirin bir kasabadır. Avcıların uğrak yeridir.",
        img: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Murat_River_Palu.jpg"
    },
    {
        name: "15. Palu Kalesi",
        lat: 38.70242864690166, 
        lng: 39.954387808665544,
        desc: "Urartu Kralı Menua tarafından yaptırılan kitabeleriyle ünlüdür. Murat Nehri'ne hakim sarp bir kayalık üzerindedir.",
        evliya: "Bir koç başı gibi Murat Nehri'ne uzanmış, fethedilmesi güç, heybetli ve sarp bir kaledir. Timur Han bile burayı zorlamıştır.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Palu_Kalesi_ve_Murat_Nehri.jpg/800px-Palu_Kalesi_ve_Murat_Nehri.jpg"
    },
    {
        name: "16. Demirkapı (Çakmakkaya)",
        lat: 38.50480384638581, 
        lng: 39.8740171434155,
        desc: "Sarp dağlar arasında doğal bir geçit formundadır. Tarih boyunca orduların ve kervanların zorlu geçiş noktası olmuştur.",
        evliya: "Dağların arasında demirden bir kapı gibidir, geçit vermez sarp kayalıkları vardır. Rüzgarı sert, geçidi çetindir.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Eastern_Taurus_Mountains.jpg/800px-Eastern_Taurus_Mountains.jpg"
    }
];

const placeList = document.getElementById('place-list');
const modal = document.getElementById('modal');

// --- DÖNGÜ VE İŞLEVLER ---
places.forEach(place => {
    // Haritaya Marker Ekle
    const marker = L.marker([place.lat, place.lng], {icon: redIcon}).addTo(map);
    
    // Harita ikonuna tıklayınca MODAL AÇ
    marker.on('click', () => openModal(place));

    // Sol Listeye Ekle
    const li = document.createElement('li');
    li.textContent = place.name;
    
    // Listeye tıklayınca HARİTADA GİT
    li.onclick = () => {
        document.querySelectorAll('.sidebar li').forEach(item => {
            item.classList.remove('active');
        });
        li.classList.add('active');
        map.flyTo([place.lat, place.lng], 18);
    };
    
    placeList.appendChild(li);
});

// -- SIDEBAR AÇMA / KAPAMA
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');

if (sidebar && toggleBtn) {
    toggleBtn.onclick = () => {
        // Hem Sidebar'a hem Butona 'closed' sınıfını ekle/çıkar
        sidebar.classList.toggle('closed');
        toggleBtn.classList.toggle('closed');
        
        // Ok yönünü değiştir
        if (sidebar.classList.contains('closed')) {
            toggleBtn.textContent = '❯'; 
        } else {
            toggleBtn.textContent = '❮'; 
        }

        // Haritayı Yenile
        setTimeout(() => {
            map.invalidateSize();
        }, 400);
    };
}

// Toast Bildirim Kontrolü
const urlParams = new URLSearchParams(window.location.search);
if(urlParams.get('status') === 'success'){
    showToast();
    window.history.replaceState(null, null, window.location.pathname);
}

function showToast() {
    const toast = document.getElementById("toast-message");
    toast.classList.remove("hidden");
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 3000);
}

// --- GALERİ VE MODAL MANTIĞI ---
let currentImageIndex = 0;
let currentPlaceImages = [];

function openModal(place) {
    // Bilgileri Doldur
    document.getElementById('modal-title').textContent = place.name;
    document.getElementById('modal-desc').textContent = place.desc;
    document.getElementById('modal-evliya').textContent = `"${place.evliya}"`;
    document.getElementById('place_name_input').value = place.name;
    
    // Resim dizisi kontrolü (Eski veri 'img' ise diziye çevir)
    if (place.images) {
        currentPlaceImages = place.images;
    } else if (place.img) {
        currentPlaceImages = [place.img];
    } else {
        currentPlaceImages = ["https://via.placeholder.com/600x400?text=Resim+Yok"];
    }
    
    currentImageIndex = 0;
    updateModalImage();
    modal.style.display = "flex";
}

function updateModalImage() {
    const imgElement = document.getElementById('modal-img');
    const counterElement = document.getElementById('image-counter');
    
    imgElement.src = currentPlaceImages[currentImageIndex];
    counterElement.textContent = `${currentImageIndex + 1} / ${currentPlaceImages.length}`;
}

// İleri - Geri Butonları
document.getElementById('next-btn').onclick = () => {
    currentImageIndex = (currentImageIndex + 1) % currentPlaceImages.length;
    updateModalImage();
};

document.getElementById('prev-btn').onclick = () => {
    currentImageIndex = (currentImageIndex - 1 + currentPlaceImages.length) % currentPlaceImages.length;
    updateModalImage();
};

// Modalı Kapatma
document.querySelector('.close-btn').onclick = () => {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}