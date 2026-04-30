# ABAD AI - Rəqəmsal Brendinq və Etiketləmə üzrə İnteqrasiya Olunmuş Platforma

## İcra Xülasəsi və Missiyamız: Ailə Bizneslərinin Rəqəmsal Qanadı

abad.AI sadəcə bir avtomatlaşdırma aləti deyil, eyni zamanda ucqar regionlarda fəaliyyət göstərən ailə təsərrüfatlarının məhsullarını premium bazarlara (rəflərə) daşıyan bir "Katalizator"dur. 

> **Hekayəmiz (Problemin Həlli Yolu):** Əvvəllər ABAD komandası ucqar bir kənddə heyva mürəbbəsi istehsal edən kiçik sahibkarın məhsuluna etiket dizayn etmək, bazar araşdırması aparmaq və onun AQTA qida standartlarına uyğunluğunu manual yoxlamaq üçün **14 günə qədər** vaxt sərf edirdi. 
> 
> Bizim asan və güclü süni intellekt platformamız sayəsində bu dövr **cüzi müddətə - cəmi 2 günə** düşəcək. Nəticədə, biz mövcud məhdud insan resursunu genişləndirmədən, illik idarə və təsdiq edilə bilən fərqli **məhsul çeşidini 300% artıra** biləcəyik. Bu yalnız vaxt qənaəti deyil, kiçik bizneslərin böyümə sürətinin artırılmasıdır.

---

## 1. Təklif olunan həllin texniki təsviri

Biz “ABAD”ın mövcud manual brendinq proseslərini mərkəzləşdirilmiş və avtomatlaşdırılmış şəkildə idarə edəcək **abad.AI** adlı inteqrasiya olunmuş platforma təklif edirik. Sistem vahid pəncərə (single-window dashboard) prinsipi ilə çalışacaq və aşağıdakı əsas modullardan ibarət olacaq:

*   **Bazar Araşdırması və Analitika Modulu:** Sistemə məhsul (məsələn, "heyva mürəbbəsi") daxil edildikdə avtomatik olaraq daxili və açıq məlumat bazaları (web scraping/search API) vasitəsilə mövcud bazar konyunkturasını təhlil edir. Oxşar rəqib məhsullarının etiketlərini, rəng trendlərini və qablaşdırma stillərini toplayaraq vizual ilham lövhəsi (moodboard) formalaşdırır.
*   **Ağıllı Etiket (Copywriting & Proofreading) Modulu:** Məhsulun spesifikasiyalarına uyğun olaraq məzmun yaradır. Orfoqrafik və terminoloji səhvləri tapıb düzəldir. Tərkib, istifadə qaydaları və digər mətnlərin aydın dildə təqdimatını təmin edir. Məhsul şüarları (slogan) təklif edir.
*   **Hüquqi və Normativ Uyğunluğun Yoxlanılması (Compliance Checker) Modulu:** Platformanın nüvəsini təşkil edəcək bu modul AR Qida Təhlükəsizliyi Qanununun (17.2.1), eləcə də ГОСТ, AZS və ISO standartlarının tələblərini özündə birləşdirən RAG (Retrieval-Augmented Generation) alqoritmi əsasında işləyəcək. AI modeli daxil edilən etiket məlumatlarının tamlığını (kalori, allergenlər, yararlılıq müddəti, saxlanma şəraiti və s.) avtomatik yoxlayaraq qırmızı bayraqlar (red flags) təqdim edəcək.
*   **Vizual Dizayn Tövsiyəçisi Modulu:** Generativ süni intellekt modelləri məhsul kateqoriyasına uyğun rəng psixologiyası və vizual standartları əsas götürərək şrift (typography), rəng palitrası və vektor konseptləri avtomatik generasiya edir.

## 2. İstifadə ediləcək texnologiyalar və arxitektura

Sistem müasir bulud və mikroservis arxitekturası əsasında qurulacaq:

*   **Frontend (İstifadəçi İnterfeysi):** `React.js` və ya `Next.js` istifadə edərək sürətli (SPA), dizayn baxımından dinamik və istifadəsi rahat panellər (Dashboard) yardılacaq. `Tailwind CSS` ilə vahid və cəlbedici “UI/UX” standartı təmin ediləcək.
*   **Backend (Məntiq qatı):** Yüksək sürətli və asinxron arxitekturaya malik `Python (FastAPI)` və ya `Node.js` tətbiq olunacaq ki, bu da AI modellərinin paralel çağırışları üçün mükəmməldir.
*   **Süni İntellekt (AI Core):**
    *   Mətn modeli və RAG arxitekturası üçün: `GPT-4o` və ya `Claude 3.5` API-ləri `LangChain` çərçivəsi ilə birlikdə.
    *   Hüquqi sənədlərin (standartların) bazası üçün: `Pinecone` və ya `Qdrant` Vektor Məlumat Bazası (Vector DB).
*   **Məlumat Bazası:** Relaysiyalı məlumatların saxlanılması və status idarəedilməsi (workflow) üçün `PostgreSQL`.
*   **Hostinq və Avtomatlaşdırma:** `Docker` ilə konteynerləşdirmə prosesi tətbiq ediləcək; CI/CD vasitəsilə daim yenilənən bir mexanizm yaradılacaq.

## 3. İnteqrasiya yanaşması (Dövlət Sistemləri - ASAN Vision)

Təklif etdiyimiz həll qapalı və izolyasiya olunmuş bir sistem deyil, **ASAN GovTech ekosisteminin məntiqi davamı olan qlobal inteqrasiya modulu** kimi dizayn edilmişdir:

*   **ASAN Login (Vahid Avtorizasiya):** Sistemə sərbəst qeydiyyat əvəzinə tam təhlükəsizliyi təmin edən qlobal "ASAN Login" (SSO/OAuth 2.0) protokolu inteqrasiya ediləcək. Beləliklə, hər bir ABAD əməkdaşı və layihə iştirakçısı ASAN İmza və ya elektron qeydiyyat rekvizitləri ilə mərkəzi sistem üzərindən daxil olacaq.
*   **ASAN Finans və Dövlət Reyestrləri:** Ailə biznesinin VÖEN-i daxil edildiyi an, sahibkarın statusunu Dövlət Vergi Xidmətinin təqdim etdiyi mərkəzləşdirilmiş məlumat bazasından (ASAN Finans infrastrukturundan) avtomatik təsdiqləmək üçün API çıxışı və mikroxidmətlər (microservices) istifadə ediləcək.
*   **AQTA və Rəqəmsal Qeydiyyat:** Gələcəkdə məhsulların elektron təsdiqi, barkod (GS1) arxivləşdirməsi üçün AQTA sistemidə birbaşa inteqrasiya qapıları (webhook və API) hazır vəziyyətdə qurulacaq.
*   **Daxili İnteqrasiyalar (ABAD):** Sistem ABAD-ın mövcud daxili inventar və ya CRM platformalarına qapalı `RESTful API` vasitəsilə asanlıqla qoşula bilər.

## 4. Komanda haqqında məlumat və təcrübə
*(Layihəni təqdim edərkən komandanızın real CV və ad-soyaddan ibarət strukturunu bura daxil edin. Aşağıdakı sadəcə təklifdir)*

Təqdim olunan komanda data elmləri, proqramlaşdırma və hüquqi uyğunluq (compliance) sahəsində xüsusi biliklərə malik profillərdən ibarətdir:
1.  **Layihə Rəhbəri / Məhsul Meneceri:** B2B SaaS həllərinin idarə olunması təcrübəsinə malik şəxs.
2.  **Süni İntellekt / RAG Mühəndisi:** Dil modellərinin yerli verilənlərə əsaslanaraq "hallucinate" etmədən dəqiq hüquqi cavablar optimallaşdırmasını quran mütəxəssis.
3.  **Full-Stack Veb Tərtibatçısı:** İstifadəçi dostu panellərin və API arxitekturasının yaradıcısı.
4.  **Dizayn və Biznes Analitikasi üzrə Məsləhətçi:** "ABAD"-ın məhsul portfelini və qida sənayesi tələblərini anlayan mütəxəssis.

## 5. Pilot tətbiq planı və vaxt cədvəli

Pilot layihənin inkişaf etdirilib ilkin tətbiqə tam hazır olması üçün **12 həftəlik (3 aylıq) çevik (Agile)** yanaşma nəzərdə tutulur:

*   **Həftə 1 - 2 (Arxitektura və Tələblər):** Mövcud brendinq addımlarının tam Xəritələnməsi. Qanunvericilik və standart sənədlərinin (ГОСТ, AZS) rəqəmsallaşdırılaraq Vektor bazasına yüklənməsi.
*   **Həftə 3 - 5 (AI Modullarının Yığılması):** Avtomatik mətn (copywriting) yaradan, orfoqrafiyanı yoxlayan və hüquqi tələbləri analiz edən xüsusi RAG modelinin qurulması.
*   **Həftə 6 - 8 (Platfomanın / Dashboardun Programlanması):** Məlumatların daxil edildiyi və uyğunluğun vizual hesabat kimi çıxarıldığı istifadəçi interfeysinin (Frontend) yaradılması və API-lərinin tamamlanması.
*   **Həftə 9 - 10 (Beta İnteqrasiya və Dizayn Modulu):** Rəng tövsiyələri, etiket istiqamətləri verən modulun tətbiqi. İlk sınaqlar – sistemin daxili test mühitində sınaq istifadəçiləri tərəfindən istifadəsi.
*   **Həftə 11 - 12 (Pilot İstifadə və Monitorinq):** Məhdud sayda real məhsul (məsələn, 20 yeni ailə biznesinin məhsulu) üzərində tam prosesin icrası. Təkliflərin nəzərə alınması və bug-ların təmizlənməsi (fine-tuning). Layihənin yekun təhvili.
