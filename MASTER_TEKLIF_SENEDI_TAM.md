# abad.AI – Ailə Bizneslərinin Rəqəmsal Brendinq və Uyğunluq Platforması
### ASAN AI Hub Müsabiqəsi üçün Konseptual Təklif və Prototip (MVP) Sənədi

---

## 1. İcra Xülasəsi və Missiyamız: Ailə Bizneslərinin Rəqəmsal Qanadı
"abad.AI" sadəcə texnoloji avtomatlaşdırma aləti deyil, ucqar regionlarda fəaliyyət göstərən ailə təsərrüfatlarının məhsullarını qlobal rəflərə (marketlərə) daşıyan bir **Rəqəmsal Katalizator**dur. 

**Problemin Həlli Yolu:** Hazırda ABAD tərəfindən bir lokal məhsulun (məs. ucqar kənddə istehsal olunan heyva mürəbbəsinin) tərkib təhlili, etiket mətninin tam yazılması, mədəni dizaynlaşdırılması və ən əsası AQTA (Qida Təhlükəsizliyi) standartlarına hüquqi uyğunluğunun manual yoxlanılması təqribən **14 iş günü** və böyük insan resursu tələb edir. Bizim ərsəyə gətirdiyimiz işlək *Süni İntellekt Platforması* isə bu dövrü **cüzi müddətə - cəmi 2 günə** endirir. Nəticədə mövcud komandanı (insan resursunu) genişləndirmədən, platformamız sayəsində müraciətləri qarşılama (ölçəklənmə) gücümüz **300% artır**.

> *(Buraya 1-ci şəkli əlavə edin: "İdarə Paneli və ROI Missiyası" olan ekran görüntüsü)*

---

## 2. Platformanın Dizaynı və Vahid Pəncərə Arxitekturası
Sistemimiz fərqli proqramlara ehtiyac duymadan işləyən "Vahid Pəncərə" (Single-Window Dashboard) formatında qurulub. Platformanın **"Məhsullar"** paneli respublika üzrə (Quba Almasından cəmindən tutmuş Gədəbəy balına qədər) bütün aktiv kənd təsərrüfatı layihələrini bir mərkəzə cəmləyir. Layihələr üzrə AI analiz faizləri, AQTA qırmızı/yaşıl statusları və təsdiq prosesləri vahid ekrandan vizual olaraq izlənilir.

> *(Buraya 2-ci şəkli əlavə edin: "Ailə Biznesi Məhsulları" cədvəli olan ekran görüntüsü)*

---

## 3. Əsas İnnovasiya: "RAG Motoru" və Hüquq Radarı (0 Uydurma)
Süni İntellektin tətbiqində cəmiyyəti ən çox narahat edən məqam modelin "uydurmalar" (hallucination) verməsidir. Biz platformanın nüvəsində spesifik olaraq **RAG (Retrieval-Augmented Generation)** modeli istifadə etmişik.

Sistemə Azərbaycan Respublikasının "Qida Təhlükəsizliyi Qanunu" (Maddə 17.2.1), AZS və ГОСТ texniki reqlamentləri vektor verilənlər bazası olaraq (Embedding) yüklənmişdir. Məsələn, layihəçinin təklif etdiyi etiket mətni sistemə daxil edildiyi an, **Süni İntellekt (AI) kənar heç bir qeyri-rəsmi mənbəyə baxmadan sırf Dövlət Bazasından axtarış edir**. Əgər mətndə kalori və ya allergen miqdarı qeyd olunmayıbsa, AI onu "Qanunvericilik Xətası!" kimi qırmızı ilə işarələyir, Dövlət Qanunundan hərfi-hərfinə sitat gətirir və **avtomatik Ağıllı Düzəliş** mətni generasiya edərək istifadəçiyə 1 kliklə həll yolu təqdim edir.

> *(Buraya 3-cü şəkli əlavə edin: Qırmızı/Sarı rəngli analizlərlə dolu olan "Qanunvericiliyə Uyğunluq Radarı" ekran görüntüsü)*

---

## 4. Mədəniyyət Könüllüsü (Generativ AI) Dizayn Studiyası
Məhsullarımız sadəcə mağaza malları deyil, Azərbaycan irsinin elçiləridir. Proqramın daxilindəki Generativ AI (DALL-E / Stable Diffusion inteqrasiyası) mürəbbə, şərab və ya şirniyyat bankalarının/qablaşdırmalarının avtomatik vizuallarını qurur. O, məhsulu "Klassik Lüks", "Orqanik" və xüsusi ixracat üçün **"Milli Üslub (#Buta / #Şəbəkə)"** ornamentləri ilə bəzəyərək 1 dəqiqə içində tam hazır rəqəmsal konseptə (mockup) çevirir. 

> *(Buraya 4-cü şəkli əlavə edin: "Buta" naxışlı məhsulların göründüyü "Mədəniyyət Könüllüsü" ekran görüntüsü)*

---

## 5. Dövlət İnteqrasiyaları və Texnoloji Sinerji (ASAN GovTech)
abad.AI qapalı proqram deyil, **ASAN GovTech** qlobal ekosisteminin məntiqi davamıdır. 
- İnterfeysimizdə də göründüyü kimi, əməkdaşlar üçün yalnız xüsusi və nəzarət edilən **ASAN Login (SSO)** avtorizasiya infrastrukturu tətbiq edilmişdir.
- Ailə biznesinin VÖEN-i daxil edildiyi an, **ASAN Finans API** (Aktiv Yaşıl İndikator) vasitəsilə sahibkarın statusu mərkəzləşdirilmiş vergi reyestrindən çəkilərək avtomatik yoxlanılır.
- Ümumi arxitektura Microservices, *Python (FastAPI)*, *React.js* Frontend və yüksək tutumlu Vektor Bazaları (*Pinecone/Qdrant*) üzərində formalaşdırılacaqdır.

---

## 6. Komanda və İcra Planı
Layihə elmi (Data Science) və çevik proqram mühəndisliyidir (Agile Software Eng.) üzrə özünü təsdiqləmiş, startap ekosistemindən çıxmış mütəxəssislər tərəfindən icra edilir:
*   **Elvin Hacızadə (Layihə Vissioneri / AI & RAG Mühəndisi):** İDDA layihələrindən təcrübəsi olan və həllin hüquq-AI məntiqini sıfırdan quran Süni intellekt startapı təsisçisi.
*   **Nemət Zərbiyev (Proqram Arxitektoru / Full-Stack & Mobile):** Qlobal "Holberton School"un məzunu, vahid pəncərənin mürəkkəb asinxron interfeysini və dövlət API körpülərini idarə edən mütəxəssis.

**Pilot Vaxt Cədvəli:**
Layihə mövcud MVP vəziyyətindən tam işlək, sınaqdan keçirilmiş məhsula cəmi **12 Həftəliyə (3 Ay)** çatdırılacaq. İlk ay qanunların (AZS, ГОСТ) vektorlaşdırılmasına, ikinci ay AI ilə Frontend-in birləşdirilməsinə sərf olunacaq. Sonuncu - üçüncü ayda isə ABAD tərəfindən dəstəklənən 20 **real** ailə biznesinin məhsulları sırf platformamızın pilot testləri üzərində canlı brendləşdirilib bazara buraxılacaq!
