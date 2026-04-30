# ASAN AI Hub: "ASAN Müraciət" İnformasiya Sistemi üçün Həll - Texniki Təklif Sənədi

## 1. Təklif olunan həllin texniki təsviri
"ASAN Müraciət" informasiya sisteminə vətəndaşlar tərəfindən daxil olan vizual materialların (şəkil və video) süni intellekt vasitəsilə tam avtomatlaşdırılmış emalını, kateqoriyalaşdırılmasını və qərarvermə mexanizmini həyata keçirən innovativ **"Avtomatlaşdırılmış AI Monitorinq Və Analiz Modulu"** təklif edirik. Təklifimizi fərqləndirən əsas xüsusiyyətlər həm müraciətin verilməsi, həm də icrasının təsdiqi zamanı AI müdaxiləsinin mövcudluğudur:

**Problemin Təyini (Vətəndaş Tərəfi):**
- **Səhnə və Obyekt Analizi:** Vətəndaş sistemi vasitəsilə problemi obyektiv izah edə bilməsə belə, Kompüter Görməsi (Computer Vision) müraciətin mahiyyətini (məsələn, "yolda yaranmış dərin çuxur", "qırılmış elektrik dirəyi") detallarla aşkarlayır.
- **Vizualdan Mətnə Generasiya:** Təsvir olunan problem dəqiq cümlə bloklarına çevrilərək informasiya sisteminin "Müraciət Mətni" daxiletmə sahəsini avtomatik doldurur.
- **Avtomatlaşdırılmış Təsnifat və Prioritetləşdirmə:** Problemin xarakterinə əsasən müvafiq icraçı qurum domeninə (İnfrastruktur, Ekologiya, Kommunal və s.) uyğunlaşdırılır və gözlənilən təhlükə ehtimalı (Risklərin idarəolunması) çərçivəsində Təcili/Yüksək/Orta indeks təyin olunur.

**Nəzarət Və Qiymətləndirmə (İcra Tərəfi):**
- **Uyğunluq İndeksi və Saxtakarlıq Xəbərdarlığı:** İcraçı qurum müraciəti bağlamaq üçün "təmir sənədi / şəkli" yüklədikdə, AI modeli əvvəlki ilkin şəkli və yeni şəkli piksel quruluşu, obyekt dəyişimi və GPS coğrafi məlumatlarında (EXİF) müqayisə edir. Qüsurlu icra olduqda qırmızı *Uyğunsuzluq bildirişi* mexanizmini aktivləşdirib keyfiyyət qorunmasını təmin edir.

---

## 2. İstifadə ediləcək texnologiyalar və arxitektura
Bizim hazırladığımız sistem modern, mikroservisə meylli yanaşma və "API-first" prinsipi üzərində qurulacaqdır:
- **Süni İntellekt və Modelləşdirmə:** 
  - Müraciətin məzmununun və semantikasının anlaşılması, mətni generasiya etmək üçün **Multimodal LLM-lər** (Böyük Dil Modelləri).
  - Təsvirlərdə spesifik zədələri/qüsurları anında anlamaq üçün obyekti tapma alqoritmləri (**YOLOv8, OpenCV**).
- **Arxa Plan (Backend):** Sürətli, asinxron işləyən və çoxsaylı sorğuları asanlıqla idarə edən **Python (FastAPI)** arxitekturası.
- **Məlumat Bazası (Database) Mühiti:** Strukturlaşmış müraciətlər üçün ənənəvi PostgreSQL, NLP axtarışları və bənzər problemlərin qruplaşdırılması üçün *Vector Database* (məs. Pinecone və ya Qdrant).
- **Növbə mexanizmi:** Müraciət axınından qaynaqlanan yüklənmələrin (pik saatların) qarşısını almaq üçün asinxron **RabbitMQ** və ya **Redis Queue** tətbiqi.
- **Təhlükəsizlik:** Sürətli və etibarlı JWT/OAuth2.0 identifikasiyası, vizual faylların 256-bit AES standartı ilə şifrələnib izolə edilməsi (Məxfilik normaları qorunaraq).

---

## 3. İnteqrasiya yanaşması (API və ya modul əsaslı həll)
Həllimiz heç bir frontend asılılığı olmadan tam "Plug & Play" xarakterli RESTful API (Modul) tiplidir. "ASAN Müraciət" infrastrukturuna zərər vermədən "Köməkçi Modul" kimi sistemin özəyinə kənardan inteqrasiya edilir:
1. **Endpoint əlaqəsi:** ASAN Müraciət platforması vizual müraciəti qəbul edir və bizim daxili HTTPS POST API xidmətimizə göndərir.
2. **Qapalı Emal:** Modul tələb olunan təhlili aparır (Gələcəkdə bu dövlətin tətbiq etdiyi on-premise serverlərdə qapalı sferada da saxlanıla bilər).
3. **Məlumat İxracı:** Təhlilin nəticəsi strukturlaşdırılmış (kateqoriya, təhlükə, mətn, uyğunluq faizi) şəkildə standart **JSON qablaşdırması**nda ASAN Baza Sisteminə ixrac edilir.

Bu çevik modul əsaslı struktur, ASAN Müraciətin istər Web platformasında, istərsə də mobil iOS/Android tətbiqlərində rahatlıqla vahid back-end üzərindən xidmət verə bilməsini təmin edir.

---

## 4. Komanda haqqında məlumat və təcrübə
*(Qeyd: Elvin bəy, buraya komanda və ya fərdi fəaliyyətinizlə bağlı qısa məlumat yazmalısınız. Aşağıdakı nümunəni özünüzə görə kiçik redaktə edə bilərsiniz)*

Biz, proqram təminatı arxitekturası, tətbiqi süni intellektin formalaşdırılması, Data analitikası və veb texnologiyalar üzrə qabaqcıl layihələr işləmiş biliklərə sahibik. İndiyədək böyük həcmli məlumatlarla işləyən idarəetmə və avtomatlaşdırma sistemlərinin (məsələn, MVP səviyyəsində hazırladığımız monitorinq panellərinin) hazırlanmasında praktiki nailiyyətlərimiz mövcuddur. Hədəfimiz, istifadəçi məmnuniyyətini birbaşa mərkəzə qoyan təmiz (Clean Code) standartlarına cavab verən və dövlət layihələri səviyyəsində xidmət göstərə biləcək dayanıqlı həllər təqdim etməkdir.

---

## 5. Pilot tətbiq planı və vaxt cədvəli
Pilot tətbiq üçün proqram təminatı bazarının təsdiqlədiyi çevik **Agile (Scrum)** metodologiyasından istifadə ediləcək. Layihənin canlı mühitə çıxarılması **ümumi 6-8 həftəlik (Sprint)** dövrü əhatə edir:

- **Həftə 1-2 (Baza Dizaynı və Data Təhlili):** ASAN Müraciət daxilində ehtiyac duyulan vizual kateqoriyaların (Tarixi və xarakterik vətəndaş müraciət fotoları) toplanması, Süni İntellekt (Computer Vision və LLM) modellərinin bu şəkillərə uyğun kalibrasiyası (Prompt Engineering & Fine-tuning yönü ilə).
- **Həftə 3-4 (Backend API Və Modul İnşası):** ASAN standartlarına cavab verəcək API infrastrukturunun (FastAPI üzərindən) qurulması. İş axınının kodlaşdırılması (Təsvirin generasiyası, Təsnifat strukturu və İcra Şəkillərinin uyğunluq nisbətini tapan mexanizm).
- **Həftə 5-6 (Struktur İnteqrasiyası Və Stress Testlər):** Hazırladığımız AI Modulunun mövcud ASAN Müraciət platforması ilə birgə çalışması (İnteqrasiyası). Sistemin eyni anda daxil olan 10.000-dən çox şəklə reaksiyasının yoxlanması üçün "Yüklənmə Testi (Load Testing)".
- **Həftə 7-8 (Pilot Nümayiş Və Tam Keçid):** Tamamlanmış Demo (MVP pilotu) versiyasının reallaşdırılması, operator/mütəxəssis sorğularının incələnilməsi, saxtakarlıq filtrlərinin məntiqinin kəskinləşdirilməsi və "Production" (Canlı Rəsmi Xidmət) mühitinə reliz edilməsi.
