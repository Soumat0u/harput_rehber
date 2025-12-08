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
        id: 1,
        name: "1. Aşvan (Muratçık) Köyü",
        lat: 38.84568340605829,
        lng: 38.96038914488417,
        desc: "Murat Nehri kıyısında yer alan Aşvan, M.Ö. 3000'li yıllara uzanan tarihiyle bölgenin en eski yerleşimlerindendir.",
        evliya: "Harput sınırında bu mahalde Fırat Nehri ve Murat Nehri'nin birbirine yakın geçtiği yerdir. Zira bir menzil uzaklıkta Çat adlı yerde birbirine katılırlar. Onun için Murad ve Fırat bir günde geçilir. Adı geçen Aşıvan Köyü Ermeni köyüdür. Murat kenarında bağsız ve bahçesiz bakımlı büyük köydür.",
        
    },
    
    {
        id: 2,
        name: "2. Harput Kalesi (Süt Kalesi)",
        lat: 38.7041,
        lng: 39.2573,
        desc: "Urartular tarafından M.Ö. 8. yüzyılda yapılan kale, harcına su yerine süt katıldığı efsanesiyle 'Süt Kalesi' olarak anılır. Artuklu, Selçuklu ve Osmanlı dönemlerinde de kullanılmıştır.",
        evliya: "Hüsn-i Ziyad şehri, Harbid beldesi yani Harput Kalesi'nin özellikleri \
                Mığdısl Tarihi'nin yazdığına göre Hazret-i Zekeriyya zamanında Buhtunnasr yapısıdır. Daha sonra Hazret-i İsa \
                göklere yükseldiğinde İsa Peygamberin eşeği kalınca havarileri ve ümmetieri bu \"İsa Eşeği\"ni bu Harput \
                çeragahına (otluk) koyup ta Hazret-i Risalet-penahın kutlu zamanlarında eşek hala hayatta olup bütün Mesih \
                milletleri o eşeğe taptıklarından Acem dilinde bu şehre \"Dar-ı Har-put\" dediler.\
                Başka bir görüşe göre yine Acem dilinde havarilere gölgelik olmuş bir dikenli söğüt-ağacı var idi. Onun için \
                Har-bid dediler. Başka bir görüşte Harberid derler, yani diken getirici derler. Nicesi Har-bürd derler (---). \
                Kimileri Har-bfid yani (---) (---) derler. (---) (---) (---) (---) (---) Sözün kısası her değişik dillerin \
                lehçeleri üzere birer türlü isimlendirilme sebebi var, ama Osmanlıların eski Defterhanesinde Hüsn-i Ziyad ülkesi \
                yazıldığında sefer-i hümayfinlar olduğunda her vilayetin birer çeşit isimleri olup alaylarda ve büyük toplanhlarda \
                bir şehir halkı bulunmak istense Haleb şehri halkında \"Ya ahad\" derler, buna oran derler. Bu \"Ya ahad\" sesini \
                Haleb halkı işitince onlar da \"Ya ahad\" derler. Kalabalık seferlerde her kavim oranıyla bulunur. \
                Sivas'a \"Rum Rum\" çağırılır, Diyarbakır'a \"Amid Amid\" oran çağırilır, ama bu Harput'a \"Hüsn-i Ziyad\" \
                çağınlır. Gerçekten de mahbub ve mahhubesi çok olduğundan Hüsn-i ziyad derler. Hakk daha,fazla eyleye. Bu kale \
                nice yüzmelikten melike kalmışhr. Sonunda(---) tarihinde Sultan I. Selim Çıldır (Çaldıran) savaşından sonra \
                veziri Bıyıklı Vezir Mehmed Paşa'yı kumandan tayin edip Diyarbakır'ı (---) (---) elinden aman ile fethettiğinde \
                bu Harput Kalesi de itaat edip aman ile kaleyl teslim ettiler. Hala Diyarbakır eyaletinde •sancakbeyi tahhdır. \
                Beyinin hassı (---) yük akçedir. Timarı (---) ve zeameti vardır. Alaybeyi, çeribaşı ve yüzbaşısı vardır. Sefer \
                sırasında beyinin askeriyle tamamı 1.200 silahlı asker olur. 300 payesiyle kazadır. Tamamı (---) adet nahiye \
                köyleri vardır. Bu nahiyelerden kadıya senede alh kese hasıl olur. Sancakbeyine sancağında 20 kaza yerden 18.000 \
                guruş hasıl olur. Müftüsü, nakibüleşrafı, sipah kethüdayeri, yeniçeri serdarı, şehir subaşısı ve muhtesibi vardır. ",
        images: [
            "images/2- HARPUT KALESİ/5-bin-yillik-harput-kalesi-nde_1692527402_WDidph-12.webp",
            "images/2- HARPUT KALESİ/2025-06-14-at-1741059055.webp",
            "images/2- HARPUT KALESİ/2025-06-14-at-1741059055.webp",
            "images/2- HARPUT KALESİ/ARAZİ-FOTO-1-4-scaled.jpg",
            "images/2- HARPUT KALESİ/Harput_kalesi-Harput-Elazığ_-_panoramio.jpg",
            "images/2- HARPUT KALESİ/Harput-fortress.jpg",
            "images/2- HARPUT KALESİ/images (1).jpg",
            "images/2- HARPUT KALESİ/images.jpg",
        ]

    },
    {
        id:3,
        name: "3. Ulu Cami",
        lat: 38.7061,
        lng: 39.2552,
        desc: "1156 yılında Artuklu Hükümdarı Fahrettin Karaaslan tarafından yaptırılmıştır. Minaresi, Pisa Kulesi'nden daha eğri olmasıyla (yaklaşık 7 derece) dünyaca ünlüdür.",
        evliya: "Gerçekten de hepsinden büyük camidir. Bunların içinde eski bir mabedgah ve dua kabul olunan bir secde mekanıdır. Bir sanatlı eski tarz minaresi vardır.",
    },
    {
        id: 4,
        name: "4. Sarahatun Camii",
        lat: 38.7047,
        lng: 39.2530,
        desc: "Akkoyunlu Hükümdarı Uzun Hasan'ın annesi Sara Hatun tarafından 1465 yılında mescit olarak yaptırılmış, daha sonra camiye çevrilmiştir. Harput'un en zarif taş işçiliklerinden birine sahiptir.",
        evliya: " Akkoyunlu Hükümdarı Uzun Hasan’ın annesi Sara (Saray) Hatun tarafından mescit olarak inşa edilen cami 1843 yılında yıkılarak bugünkü şeklinde yeniden inşa edilmiştir.",
    

    },

    {
        id: 5,
        name: "5. Esadiye Medresesi",
        lat: 38.7059,
        lng: 39.2503,
        desc: "13. yüzyılda yapılan bu medrese, dönemin üniversitesi niteliğindedir. Günümüze sadece kalıntıları ulaşsa da, taç kapısındaki taş işlemeler sanat şaheseridir.",
        evliya: "Esad Bey de yüksek bir medrese yaptırmıştır. İlim talebeleriyle doludur. Aynı zamanda riyazet ehlinin de sığındığı bir yerdir.",

    },
    {
        id: 6,
        name: "6. Tarihi Hamamlar (Kale Hamamı)",
        lat: 38.7045,
        lng: 39.2569,
        desc: "Harput'ta Osmanlı ve Selçuklu döneminden kalan Kale Hamamı, Cimşit Hamamı ve Hoca Hamamı gibi yapılar, dönemin gelişmiş su mimarisini yansıtır.",
        evliya: "Suyu ve havası hoş, kubbeleri ferah, seçkin ve halkın rağbet ettiği hamamlardır. İçerisi her daim sıcaktır ve hizmeti güzeldir. \
        Tamamı (---)adet hamamdır. Evvela kale hamamı, bunlar seçkin, halk herkes için hoş hamamlardır, ama 120 adet hane hamamları vardır.	",
        
    },
    
    {
        id: 7,
        name: "7. Buzluk Mağarası",
        lat: 38.73584286284866, 
        lng: 39.282839115522414,
        desc: "Jeomorfolojik yapısı nedeniyle yazın içinde buz oluşan, kışın ise sıcak hava üfleyen dünyadaki ender mağaralardan biridir.",
        evliya: "Acaip ve garip sırlı hikmet: \
                Harput şehrinin kıblesi tarafındaki bağlar içinde yalçın kayalarda büyük mağaralar vardır. Orada Temmuz ayı olunca akan sular donup buz olur. \
                O şiddetli sıcaklarda donmuş buzlardan halk kullanıp ciğerleri tazelenir. Temmuz günleri gidip şiddetli kış gelince bütün buzlar eriyip suları \
                hamam suyu gibi olur. Mağaraların içi o kadar sıcak olur ki nice memleketinden ayrı düşmüş insanlar oraya varıp hamam gibi yıkanırlar. Gariplik \
                bunda ki şiddetli sıcaklarda sıcak olup sert kış günlerinde soğuk olacakken Fail-i Muhtar Allah gücünü göstermek için böyle yaratmış. Ayet (---) (---)\
                \"Allah dilediğini yaratır ... \" [Nur, 45]",

    },
    {
        id: 8,
        name: "8. Yurtbaşı Şifalı Suları",
        lat: 38.637316936883314, 
        lng: 39.3416911618069,
        desc: "Eski adıyla Hoğu köyü, yer altı kaynak suları ve verimli arazileriyle bilinir. Sularının çeşitli hastalıklara iyi geldiğine inanılır.",
        evliya: "Tanrı'nın diğer bir sanatı: \
                Bu şehrin ovasında bir çeşit kaynak su çıkar. Her sene kabak mevsimi geldiğinde bütün uzak ve yakın yerlerden zengin ve yoksul, garip ve miskinler gelip bu ovada \
                çadırları ve ağırlıklarıyla konaklarlar. Öncelikle ij.ç gün tuzlu yemeden, yağlı ve ağır yemek yemeden kaçıhıp sabahleyin bir fincan içince üç amel •eder, bir \
                fincan daha içene üç ame1 eder. Bu tertip üzere on fincan içen sağlam bünyeli adama tam otuz amel eder. Bazı adamlara istifra ettirip tahammül edemeyene tövbe \
                ettirir. \"Günahından tövbe eden, günahsız kimse gibidir.\" [Hadis-i Şerif] Sözü uyarınca pak ve temiz olup sıkınh ve darlıklarından, bütün hastalık ve \
                rahatsızlıklarından temizlenir. Onun için bu Harput halkı sağlam bünyeli, kırmızı yanaklı olup hekimlere muhtaç değillerdir. Ancak Hakim-i Mutlak'a muhtaçlardır \
                ki ayet; \"Yeryüzünde yürüyen her canlının rızkı, yalnızca Allah'ın üzerinedir.\" [Hud, 6]",
    },
    {
        id: 9,
        name: "9. Mollaköy (Mollakendi)",
        lat: 38.58231983949784, 
        lng: 39.33854825530195,
        desc: "Tarihi İpek Yolu güzergahında bulunan köy, eski dönemlerde kervanların konaklama ve güvenlik noktalarından biriydi.",
        evliya: "Molla Efendi Köyü menzili: \
                Harput nahiyelerinden yüz haneli, bir camili, mamur ve zeamet Müslüman köyüdür. Molla Efendi hazretleri, camii yanında gömülüdür. Bakımlı ve bereketli zeamet \
                köydür. Bu mahalde paşa ağaları Harput köylerine, Başhan, Ortahan, Şerbetin, Eğil ve Ergani, Çermik ve Hani ve Palu köylerine dağılıp yafta ile konaklar verildi. \
                Paşa efendimiz bu Molla Köyünde on gün konaklamaya karar verdi. Diğer köylerden zahireler gelirdi. Bu sırada paşa efendimizin fermanlarıyla,",
        
    },
    {
        id: 10,
        name: "10. Hazar Gölü ve Batık Kent",
        lat: 38.4900,
        lng: 39.4100,
        desc: "22 km uzunluğunda tektonik bir göldür. Doğunun Bodrum'u olarak bilinir. Suyu sodalı ve tuzludur.",
        evliya: "İbret verici Harput Gölü'nün özellikleri: \
                Bu şehrin batı tarafında bağ ve bahçeler ile komşu şehirden iki saat uzaklıkta bir göl vardır. Bir günde süratle iki adam dolaşabilir. Yılan zehiri gibi çok acı bir \
                göldür. Bazı tarihçiler: \"Bu gölün kaynağı Van denizidir ki yer altından geçit yeri bulup bu Harput'ta göl olmuştur\" derler. Zira Van denizinin balıkları bu gölde \
                de bulunur. \"Gerçekten Allah 'ın her şeye gücü yeter.\"[Bakara, 20] 'Bu göl içinde bir ada vardır. Onda bir büyük Ermeni Köyü vardır. Tahminen 300 hane vardır. \
                Bütün halkı boyacı ve terzi Ermenilerdir. Adı geçen gölün çevresinde olan Habusı Köyü'nden ve başka köylerinden kayıklar ile bütün halk gelip bu gölü seyreder gezip \
                dolaşırlar. Acaiplik ve gariplik:  Bu adada bir Ermeni kilisesi vardır. Hazret-i İsa'nın eşeği (---) sene yaşayıp öldüğünde bütün bıtrik, keşiş, ruhhan ve papazlar İsa \
                eşeğinin ölüsünü mumyalamışlar. Bu kilise içinde yer allında saklanmaktadır ki onu o kilisenin hizmetçileri bile bilmezler. Hala eşek vücudu endamıyla dört ayak üzerinde \
                ayakta durur şeb-çerag gözlü yaldızlı çullu bir eşektir diye gücenilir, insanlardan haber aldık, ama bu hakir görmedim. Eski zamanlarda Hıristiyan milletler bu eşeğe \
                tapındıklarından \"Har-put şehri\" derler. ",
        
    },
    
    {
        id: 11,
        name: "11. Sarıkamış Köyü",
        lat: 38.595081752040024,
        lng: 39.680367393078605,
        desc: "Tarihi Palu yolu üzerinde bulunan, eski bir yerleşim birimidir. Tarım ve hayvancılıkla geçinen, geleneksel yapısını koruyan bir köydür.",
        evliya: "Diyarbakır toprağında (—) sancağı sınırında Kürt ve Ermeni köyüdür, bağlı ve bahçeli mamur zeamettir. ",
    },
    {
        id: 12,
        name: "12. Tırhe Köyü (Keklikdere)",
        lat: 38.6134023077807, 
        lng: 39.829101551079326,
        desc: "Dağların eteğinde, Murat Nehri'ne bakan yamaçlarda kuruludur. Doğal güzellikleri ve tarihi köprüleriyle bilinir.",
        evliya: "Diyarbakır hükmünde ve (—) sancağı sınırında bütün halkı Kürtlerdir, camii var zeamettir ve Şat kenarıdır. ",
    },
    {
        id: 13,
        name: "13. Palu Kalesi",
        lat: 38.70242864690166, 
        lng: 39.954387808665544,
        desc: "Urartu Kralı Menua tarafından yaptırılan kitabeleriyle ünlüdür. Murat Nehri'ne hakim sarp bir kayalık üzerindedir.",
        evliya: "Sağlam Kahkaha Kalesi, dayanıklı sur, Palu Kalesi'nin özellikleri: \
                isimlenın esinin sebebi (---) ( ---) ( ---) ( ---) \"( ---) ( ---) ( ---) ( ---) yapıcısı ( ---) ( ---) ( ---) ( ---) 921 [1515] tarihinde Selim Han veziri Bıyıklı \
                Mehmed Paşa'ya hakimi itaat etmiştir. Yine kendine mülkiyet üzere vilayeti bağışlanmıştır. Hala Diyarbakır eyaletinde ebedi hükumettir. Evlattan evlada mutasarrıf \
                olurlar. Emirlerinde bunlara da \"Cem-cenab\" yazılır. Eyaleti geliri kendilerine hass-ı hümayun olarak ayrılmıştır. Yönetimi altında timar, zeamet, alaybeyi ve çeribaşı\
                 yoktur. Savaş sırasında hakimi 2.000 askerle sefere katılır. Bütün askeri silahlı, cesur kavim, başı telli, alaca serbendli (sarıklı), şal şabikli, pansadi \
                 (bir çeşit kundura), sıdisi (bir çeşit kundura) ve hezarı mıhlı, poçikli (yemeninin arkasında bulunan, giyerken tutup çekmeye yarayan kuyruk), papuşlu, alaca sakallı \
                 acaip suratlı yiğit askerler ile sefer eşer. ( ---) ( ---) ( ---) İstanbul tarafından 150 akçe kazadır. Müftüsü, nakibüleşrafı, kethüdayeri, yeniçeri serdarı, dizdan\
                  ve neferatları yoktur, ama muhtesibi ve şehir voyvodası vardır. Palu Kalesi'nin şekilleri: Murat Nehri kenarında gerçekten de Kahkaha Kalesi'ne denk göklere baş \
                  çekmiş bir taş yapı küçük bir kaledir, ama bir taraftan havalesi olmadığından bir şekilde zafer mümkün değildir. Hatta Timur görüp asla ilgilenmeyerek geçmiştir. \
                  Kale içinde İbrahim Bey'den başka askeriyle sakin olur hiçbir fert yoktur ve sakin olması da mümkün değildir. Zira her zaman kaleye çıkmakta zorluk çekerler. Kale \
                  içinde bir cami, cebehane, mahzenler ve su sarnıçları vardır. Murat Nehri'ne iner kayalar içinde gizlenmiş bir su yolu vardır. Bütün burçları ve bedenleri gayet \
                  dayanıklıdır ve (---) tarafına açılır bir sağlam demir kapısı vardır.",
    },
    {
        id: "14",
        name: "14. Demirkapı (Çakmakkaya)",
        lat: 38.50480384638581, 
        lng: 39.8740171434155,
        desc: "Sarp dağlar arasında doğal bir geçit formundadır. Tarih boyunca orduların ve kervanların zorlu geçiş noktası olmuştur.",
        evliya: "Demirkapı Köyü menzili: \
                Diyarbakır toprağında (—) sancağı sınırında Kürt ve Ermeni köyüdür ve zeamettir. Bu mahalde Diyarbakır'ın reyhan bostanlığına uğrayan Şat Nehri'nin ilk başının bir \
                bölüğü de bu Demirkapı yakınında Çınarlıdere adlı yerden derilip Diyarbakır'a gider. Eski zamanda bu Demirkapı yerinde Âdil Enûşirvân bir demir kapı yaptırdığından \
                Demirkapı derler. Daha önce bu yerlere defalarca geçip hâlâ yine kâh kuzeye ve güneye serseri gezdik. ",
    }
];

const placeList = document.getElementById('place-list');
const modal = document.getElementById('modal');

// --- DÖNGÜ: Harita ve Liste Oluşturma ---
places.forEach(place => {
    // Haritaya Marker Ekle
    const marker = L.marker([place.lat, place.lng], {icon: redIcon}).addTo(map);
    
    // Marker'a tıklayınca MODAL AÇ
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
        map.flyTo([place.lat, place.lng], 14);
    };
    
    placeList.appendChild(li);
});

// --- SIDEBAR AÇMA / KAPAMA ---
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');

if (sidebar && toggleBtn) {
    toggleBtn.onclick = () => {
        sidebar.classList.toggle('closed');
        toggleBtn.classList.toggle('closed');
        
        if (sidebar.classList.contains('closed')) {
            toggleBtn.textContent = '❯'; 
        } else {
            toggleBtn.textContent = '❮'; 
        }

        setTimeout(() => {
            map.invalidateSize();
        }, 400);
    };
}

// --- TOAST BİLDİRİM ---
const urlParams = new URLSearchParams(window.location.search);
if(urlParams.get('status') === 'success'){
    showToast();
    window.history.replaceState(null, null, window.location.pathname);
}

function showToast() {
    const toast = document.getElementById("toast-message");
    if(toast) {
        toast.classList.remove("hidden");
        setTimeout(() => {
            toast.classList.add("hidden");
        }, 3000);
    }
}

// --- MEKAN BİLGİ KARTI (MODAL) MANTIĞI ---
let currentImageIndex = 0;
let currentPlaceImages = [];

function openModal(place) {
    // 1. Bilgileri Doldur
    document.getElementById('modal-title').textContent = place.name;
    document.getElementById('modal-desc').textContent = place.desc;
    document.getElementById('modal-evliya').textContent = `"${place.evliya}"`;
    document.getElementById('place_name_input').value = place.name;
    
    // 2. GİRİŞ KONTROLÜ
    const savedName = localStorage.getItem('student_name');
    
    const commentSection = document.getElementById('comment-section');
    const warningSection = document.getElementById('login-warning-section');
    const hiddenNameInput = document.getElementById('hidden_user_name');
    const commenterDisplay = document.getElementById('commenter-display');

    if (savedName) {
        commentSection.style.display = 'block'; 
        warningSection.style.display = 'none';  
        hiddenNameInput.value = savedName;      
        commenterDisplay.textContent = savedName; 
    } else {
        commentSection.style.display = 'none';  
        warningSection.style.display = 'block'; 
    }

    // 3. Resimleri Sunucudan İste
    const folderId = place.id; 

    fetch(`/api/images/${folderId}`)
        .then(response => response.json())
        .then(images => {
            if (images && images.length > 0) {
                currentPlaceImages = images;
            } else {
                currentPlaceImages = ["https://via.placeholder.com/600x400?text=Resim+Yok"];
            }
            currentImageIndex = 0;
            updateModalImage();
            modal.style.display = "flex"; 
        })
        .catch(err => {
            console.error("Resim yüklenirken hata:", err);
            currentPlaceImages = ["https://via.placeholder.com/600x400?text=Resim+Bulunamadi"];
            updateModalImage();
            modal.style.display = "flex";
        });

    // 4. (SİLİNDİ) ÖĞRENCİLER ARTIK YORUMLARI GÖREMEYECEK.
} // <-- BURADAKİ PARANTEZ EKSİKTİ, DÜZELTİLDİ.

function updateModalImage() {
    const imgElement = document.getElementById('modal-img');
    const counterElement = document.getElementById('image-counter');
    if(imgElement && currentPlaceImages.length > 0) {
        imgElement.src = currentPlaceImages[currentImageIndex];
        counterElement.textContent = `${currentImageIndex + 1} / ${currentPlaceImages.length}`;
    }
}

document.getElementById('next-btn').onclick = () => {
    if(currentPlaceImages.length > 0) {
        currentImageIndex = (currentImageIndex + 1) % currentPlaceImages.length;
        updateModalImage();
    }
};

document.getElementById('prev-btn').onclick = () => {
    if(currentPlaceImages.length > 0) {
        currentImageIndex = (currentImageIndex - 1 + currentPlaceImages.length) % currentPlaceImages.length;
        updateModalImage();
    }
};

// --- ÖĞRETMEN PANELİ MANTIĞI ---

const loginModal = document.getElementById('login-modal');
const dashboardModal = document.getElementById('dashboard-modal');
const adminPassInput = document.getElementById('admin-pass');
const loginErrorMsg = document.getElementById('login-error');
const commentsBody = document.getElementById('comments-body');

const ogretmenBtn = document.getElementById('ogretmen-giris');
if (ogretmenBtn) {
    ogretmenBtn.onclick = () => {
        loginModal.style.display = "flex";
        adminPassInput.value = "";
        loginErrorMsg.style.display = "none";
        adminPassInput.focus();
    };
}

// DÜZELTME: ID Eşleşmesi sağlandı (HTML'de tutorial-button idi)
const tutorialBtn = document.getElementById('tutorial-button');
const tutorialModal = document.getElementById('tutorial-modal');
const closeTutorialBtn = document.querySelector('.close-tutorial-btn');if (tutorialBtn) {
    tutorialBtn.onclick = () => {
        // Alert yerine artık pencereyi açıyoruz
        tutorialModal.style.display = "flex";
    };
}

// Çarpı (X) butonuna basınca kapat
if (closeTutorialBtn) {
    closeTutorialBtn.onclick = () => {
        tutorialModal.style.display = "none";
    };
}

document.getElementById('admin-login-btn').onclick = () => {
    attemptLogin();
};

if(adminPassInput){
    adminPassInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            attemptLogin();
        }
    });
}

function attemptLogin() {
    const password = adminPassInput.value;
    if (password === "1234") {
        loginModal.style.display = "none";     
        dashboardModal.style.display = "flex"; 
        loadAdminComments();                   
    } else {
        loginErrorMsg.style.display = "block";
    }
}

function loadAdminComments() {
    fetch('/api/comments')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('grouped-comments-container');
            const noCommentsMsg = document.getElementById('no-comments-msg');
            
            // Önce temizle
            container.innerHTML = "";

            if (data.length === 0) {
                if(noCommentsMsg) noCommentsMsg.style.display = 'block';
                return;
            }
            
            if(noCommentsMsg) noCommentsMsg.style.display = 'none';

            // --- 1. VERİLERİ İSME GÖRE GRUPLA ---
            const groupedData = {};
            
            data.forEach(item => {
                if (!groupedData[item.name]) {
                    groupedData[item.name] = [];
                }
                groupedData[item.name].push(item);
            });

            // --- 2. HER GRUP İÇİN KART OLUŞTUR ---
            Object.keys(groupedData).forEach(studentName => {
                const comments = groupedData[studentName];

                // --- [YENİ EKLENEN] MEKAN NUMARASINA GÖRE SIRALAMA ---
                // Mekan isimleri "1. Aşvan", "10. Hazar" gibi olduğu için
                // parseInt ile baştaki sayıyı alıp ona göre kıyaslıyoruz.
                comments.sort((a, b) => {
                    const numA = parseInt(a.place); // "1. Aşvan..." -> 1 olur
                    const numB = parseInt(b.place); // "10. Hazar..." -> 10 olur
                    return numA - numB; // Küçükten büyüğe sıralar
                });
                // -----------------------------------------------------

                // Kart Kutusu
                const card = document.createElement('div');
                card.className = 'student-card';

                // Başlık
                const title = document.createElement('h3');
                title.className = 'student-title';
                title.innerHTML = `👤 ${studentName} <span style="font-size:12px; color:#777; font-weight:normal; margin-left:10px;">(${comments.length} yorum)</span>`;
                
                // Mini Tablo Başlığı
                const table = document.createElement('table');
                table.className = 'student-table';
                table.innerHTML = `
                    <thead>
                        <tr>
                            <th style="width:25%">Mekan</th>
                            <th style="width:45%">Yorum</th>
                            <th style="width:20%">Tarih</th>
                            <th style="width:10%">İşlem</th>
                        </tr>
                    </thead>
                `;

                // Tablo Gövdesi
                const tbody = document.createElement('tbody');
                
                comments.forEach(comment => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td style="color:#e67e22; font-weight:bold;">${comment.place}</td>
                        <td style="font-style:italic;">"${comment.comment}"</td>
                        <td style="color:#999; font-size:11px;">${comment.date}</td>
                        <td style="text-align:center;">
                            <button onclick="deleteCommentDB(${comment.id})" style="background:#c0392b; color:white; border:none; padding:6px 10px; border-radius:4px; cursor:pointer;">Sil</button>
                        </td>
                    `;
                    tbody.appendChild(tr);
                });

                table.appendChild(tbody);
                card.appendChild(title);
                card.appendChild(table);
                
                // Kartı ana konteynera ekle
                container.appendChild(card);
            });
        })
        .catch(err => console.error(err));
}

window.deleteCommentDB = (id) => {
    if(confirm("Yorumu silmek istiyor musunuz?")) {
        fetch(`/api/comments/${id}`, { method: 'DELETE' })
            .then(() => loadAdminComments());
    }
};

// --- ÖĞRENCİ GİRİŞ SİSTEMİ ---

const studentBtn = document.getElementById('ogrenci-giris');
const studentModal = document.getElementById('student-login-modal');
const studentNameInput = document.getElementById('student-name-input');
const studentSubmitBtn = document.getElementById('student-login-submit');
const closeStudentBtn = document.querySelector('.close-student-btn');

document.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem('student_name');
    if (savedName) {
        studentLoggedInUI(savedName);
    }
});

if (studentBtn) {
    studentBtn.onclick = () => {
        const savedName = localStorage.getItem('student_name');
        if (savedName) {
            if(confirm(`Şu an "${savedName}" olarak giriş yaptınız. Çıkış yapmak ister misiniz?`)){
                localStorage.removeItem('student_name');
                location.reload(); 
            }
        } else {
            studentModal.style.display = "flex";
            if(studentNameInput) studentNameInput.focus();
        }
    };
}

if(studentSubmitBtn){
    studentSubmitBtn.onclick = () => {
        const name = studentNameInput.value.trim();
        if (name.length > 2) {
            // 1. İSMİ KAYDET VE PENCEREYİ KAPAT
            localStorage.setItem('student_name', name); 
            studentModal.style.display = "none";
            studentLoggedInUI(name);

            // --- [YENİ EKLENEN KISIM] --- 
            // Giriş yapıldığı an, eğer arkada bir mekan penceresi açıksa
            // onu anında güncelle (Yenilemeye gerek kalmadan).
            
            const commentSection = document.getElementById('comment-section');
            const warningSection = document.getElementById('login-warning-section');
            const hiddenNameInput = document.getElementById('hidden_user_name');
            const commenterDisplay = document.getElementById('commenter-display');

            // Eğer bu elemanlar sayfada varsa (ki modal açıksa vardır)
            if (commentSection && warningSection) {
                warningSection.style.display = 'none';   // Uyarıyı gizle
                commentSection.style.display = 'block';  // Formu aç
                
                // Formun içine ismi yerleştir ki gönderince doğru gitsin
                hiddenNameInput.value = name;            
                commenterDisplay.textContent = name;     
            }
            // -----------------------------
        } 
    };
}

if(studentNameInput){
    studentNameInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") studentSubmitBtn.click();
    });
}

function studentLoggedInUI(name) {
    if(studentBtn) {
        studentBtn.textContent = `👤 ${name}`; 
        studentBtn.classList.add('logged-in');
        
        // DÜZELTME: İsmin üzerine gelince tam halini göster (Tooltip)
        studentBtn.title = name;
    }
}

// --- TÜM KAPATMA İŞLEMLERİ (BİRLEŞTİRİLMİŞ) ---

document.querySelector('.close-btn').onclick = () => { modal.style.display = "none"; }
document.querySelector('.close-login-btn').onclick = () => { loginModal.style.display = "none"; }
document.querySelector('.close-dashboard-btn').onclick = () => { dashboardModal.style.display = "none"; }
if(closeStudentBtn) closeStudentBtn.onclick = () => { studentModal.style.display = "none"; }

// --- TÜM PENCERELER İÇİN DIŞARI TIKLAMA KONTROLÜ ---
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
    if (event.target == loginModal) loginModal.style.display = "none";
    if (event.target == dashboardModal) dashboardModal.style.display = "none";
    if (event.target == studentModal) studentModal.style.display = "none";
    
    // YENİ EKLENEN SATIR:
    if (event.target == tutorialModal) tutorialModal.style.display = "none";
}

// --- SİTE İLK AÇILDIĞINDA REHBER PENCERESİNİ GÖSTER ---
document.addEventListener("DOMContentLoaded", function() {
    // 'tutorial-id' kısmını kendi pencerenizin ID'si ile değiştirin
    const tutorialPenceresi = document.getElementById("tutorial-modal");
    
    // Pencereyi görünür yap (CSS'te display: none ise block yapıyoruz)
    if (tutorialPenceresi) {
        tutorialPenceresi.style.display = "flex"; 
        // Veya bir class ekliyorsanız: tutorialPenceresi.classList.add("aktif");
    }
});

