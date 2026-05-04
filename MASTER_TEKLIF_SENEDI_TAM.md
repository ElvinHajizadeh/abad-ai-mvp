# abad.AI – ABAD Komandası üçün İnteraktiv Brendinq və Etiketləmə Platforması
### ASAN AI Hub Müsabiqəsi üçün Konseptual Təklif və Prototip (MVP) Sənədi

---

## 1. İcra Xülasəsi və Missiyamız: Brendinq Proseslərinin Avtomatlaşdırılması
"abad.AI" ABAD komandasının (brendinq, dizayn və keyfiyyətə nəzarət şöbələrinin) gündəlik manual iş yükünü kökündən asanlaşdıran, məhsulların bazar araşdırmasını və hüquqi uyğunluğunu tək bir mərkəzdə cəmləyən **İnteqrasiya Olunmuş Süni İntellekt Platformasıdır**.

**Problemin Həlli Yolu:** Hazırda ABAD tərəfindən hər hansı bir lokal məhsulun bazar araşdırması, etiket dizaynına aid rəng nəzəriyyəsinin qurulması, tərkib mətninin yazılması və ən əsası bu mətnin AQTA (Qida Təhlükəsizliyi) standartlarına və ya ГОСТ tələblərinə uyğunluğunun yoxlanılması tamamilə manual və əmək tutumlu bir prosesdir. Bizim ərsəyə gətirdiyimiz işlək *Süni İntellekt Platforması* bu çoxşaxəli və günlər alan prosesi vahid paneldə avtomatlaşdırır. Nəticədə məhdud insan resursları ilə yüzlərlə məhsul çeşidi daha effektiv, xətasız və çevik şəkildə idarə olunur.

> *(Buraya 1-ci şəkli əlavə edin: "İdarə Paneli və Səmərəlilik Missiyası" olan ekran görüntüsü)*

---

## 2. Bazar Araşdırması və Rəng Nəzəriyyəsi (Color Theory)
Platformanın ən vacib innovasiyalarından biri dizayn və brendinq qərarlarını subyektivlikdən çıxarıb data əsaslı etməsidir. 
Sistemə məhsul növü daxil edildiyi an (məsələn: süd məhsulları), AI qlobal və lokal bazar trendlərini analiz edir. Bazardakı mövcud etiket nümunələrini toplayır və ABAD dizaynerinə həmin məhsul kateqoriyasına ən uyğun olan **Rəng Palitrasını (Color Palette)**, vizual yanaşmaları tövsiyə edir. Bu, vahid brend yanaşma üslubuna uyğun olaraq vizual ardıcıllığın təmin olunmasına kömək edir.

> *(Buraya 2-ci şəkli əlavə edin: "Bazar Araşdırması və Rəng Nəzəriyyəsi" ekran görüntüsü)*

---

## 3. Qısa İfadədən Ağıllı Etiket Generasiyası
ABAD əməkdaşı artıq saatlarla tərkib və məhsul mətni yazmaq məcburiyyətində deyil. Sistemə sadəcə "heyva mürəbbəsi" kimi qısa ifadələr daxil edilir. 
Platformanın arxitekturasındakı Böyük Dil Modeli (LLM) dərhal məhsula uyğun:
*   Mükəmməl Azərbaycan dilində təqdimat mətni,
*   Məhsulun ehtimal edilən qida və enerji dəyəri,
*   Standart saxlanma şəraiti və allergen xəbərdarlıqları generasiya edir.
Daha sonra mətn avtomatik olaraq orfoqrafik və terminoloji cəhətdən yoxlanılır.

> *(Buraya 3-cü şəkli əlavə edin: Qısa sözdən tam etiket yaradılmasını göstərən interfeys)*

---

## 4. Qanunvericilik RAG Radarı (0 Uydurma - Tam Uyğunluq)
Süni İntellektin tətbiqində cəmiyyəti ən çox narahat edən məqam modelin "uydurmalar" (hallucination) verməsidir. Biz etiket mətnlərinin tam hüquqi uyğunluğunu təmin etmək üçün spesifik olaraq **RAG (Retrieval-Augmented Generation)** modeli istifadə etmişik.

Sistemə Azərbaycan Respublikasının "Qida Təhlükəsizliyi Qanunu" (Maddə 17.2.1), AZS və ГОСТ texniki reqlamentləri vektor verilənlər bazası olaraq (Embedding) yüklənmişdir. Təsdiq edilməzdən əvvəl yaradılmış etiket bu sistemdən keçirilir. Əgər allergen miqdarı və ya istehsalçı ünvanı unudulubsa, AI onu "Qanunvericilik Xətası!" kimi qırmızı ilə işarələyir, Dövlət Qanunundan hərfi-hərfinə sitat gətirir və **avtomatik Ağıllı Düzəliş** mətni generasiya edərək riskləri minimuma endirir.

> *(Buraya 4-cü şəkli əlavə edin: Qırmızı/Sarı rəngli analizlərlə dolu olan "Qanunvericiliyə Uyğunluq Radarı" ekran görüntüsü)*

---

## 5. Kanban İş Axını (Avtomatlaşdırılmış Menecment)
Ənənəvi kağız-kuğuz və süründürməçiliyin qarşısını almaq üçün sistemə xüsusi Kanban İş Axını (Workflow) inteqrasiya edilmişdir. Hər bir məhsul vizual lövhədə sürüşdürülə bilən (drag-and-drop) kart kimi təmsil olunur:
- **Dizayn Gözləyir:** ASAN Finans VÖEN-i ilə qeydiyyata alınan yeni sahibkarların məhsulları.
- **AI RAG Auditi:** Süni İntellekt tərəfindən avtomatik etiket yazılan və hüquqi yoxlanılan məhsullar.
- **Rəhbər Təsdiqi:** Yalnız insan təsdiqi gözləyən, tam qüsursuz məhsullar.
- **Çapa Hazır:** Prosesi tamamlanmış məhsullar.
Bu vahid pəncərə (single-window) prinsipi bütün departamentlərin eyni anda və sinxron işləməsini təmin edir.

---

## 6. ASAN GovTech İnteqrasiyaları və Kütləvi Audit
abad.AI qapalı proqram deyil, **ASAN GovTech** qlobal ekosisteminin məntiqi davamıdır. 
- İnterfeysimizdə də göründüyü kimi, əməkdaşlar üçün yalnız xüsusi və nəzarət edilən **ASAN Login (SSO)** avtorizasiya infrastrukturu tətbiq edilmişdir.
- Yeni sahibkar qeydiyyatı zamanı **ASAN Finans API** vasitəsilə VÖEN daxil edildiyi an istehsalçının hüquqi adı, ünvanı və statusu mərkəzləşdirilmiş vergi reyestrindən çəkilərək avtomatik yoxlanılır.
- **Kütləvi Audit Modulu:** Yeni AQTA qanunu və ya ГОСТ standartı təsdiq edildikdə, sistem eyni anda yüzlərlə məhsulun etiketini 1 saniyə içində RAG mühərrikində tarayır və cərimə riski olanları avtomatik bərpa edir.

---

## 7. 3D Vizual Dizayn və Hekayə (Storytelling)
Platforma eyni zamanda Generativ AI dəstəkli Vizual Dizayn studiyası rolunu oynayır. Rəng nəzəriyyəsi və bazar trendlərinə uyğun olaraq, sistem məhsulun vizual 3D Qablaşdırmasını (Mockup) generasiya edir. Bununla yanaşı, arxa etiketdə istifadə olunması üçün məhsulun emosional satış hekayəsini (storytelling) yazır və dizaynerlərə ilham verir.

---

## 8. Uğur Göstəriciləri (KPI) və Komanda
**Layihənin Uğur Göstəriciləri:**
1. Brendin daha çox alıcı kütləsinin diqqətini cəlb etməsi və məhsulun tanınması.
2. Mövcud məhdud insan resursları ilə yüzlərlə məhsul çeşidinin daha effektiv idarə olunması.
3. Brendinq və yoxlama əməliyyatlarında manual iş yükünün kəskin azalması.
4. Etiketlərin Azərbaycan Respublikasının qanunvericiliyinə, AQTA və ISO/GOST tələblərinə tam şəkildə, xətasız hazırlanması.

**İcra Komandası:**
Layihə Süni İntellekt (Data Science) və çevik proqram mühəndisliyi üzrə özünü təsdiqləmiş mütəxəssislər tərəfindən icra edilir:
*   **Elvin Hacızadə (AI Mühəndisi / Layihə Rəhbəri):** Həllin hüquq-AI RAG məntiqini və prompt mühəndisliyini quran mütəxəssis.
*   **Nemət Zərbiyev (Proqram Arxitektoru / Full-Stack):** Vahid pəncərənin mürəkkəb asinxron interfeysini, "Bazar Araşdırması" və UI/UX qismini idarə edən mütəxəssis.
