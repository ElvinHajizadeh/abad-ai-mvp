# abad.AI - ABAD Komandası üçün İnteraktiv Brendinq və Etiketləmə Platforması

## İcra Xülasəsi və Missiyamız: Brendinq Proseslərinin Avtomatlaşdırılması

abad.AI sadəcə bir avtomatlaşdırma aləti deyil, eyni zamanda ABAD komandasının (brendinq, dizayn və hüquq şöbələrinin) gündəlik manual iş yükünü kökündən asanlaşdıran, operativ səmərəliliyi artıran bir "Rəqəmsal İşçi Ekosistemi"dir.

> **Hekayəmiz (Problemin Həlli Yolu):** Hazırda ABAD komandası ucqar bir kənddə istehsal olunan heyva mürəbbəsi üçün bazar araşdırması aparmaq, dizayn üçün rəng nəzəriyyəsini (color theory) formalaşdırmaq, etiket mətnini yazmaq və onun AQTA (Qida Təhlükəsizliyi), ГОСТ standartlarına uyğunluğunu manual yoxlamaq üçün böyük vaxt və koordinasiya sərf edir.
> 
> Bizim inteqrasiya olunmuş süni intellekt platformamız sayəsində bu çoxşaxəli və günlər alan proses vahid paneldə saniyələr içində icra ediləcək. Nəticədə, biz mövcud məhdud insan resursunu genişləndirmədən, illik idarə və təsdiq edilə bilən məhsul çeşidini xətasız olaraq **300% artıra** biləcəyik. 

---

## 1. Təklif olunan həllin texniki təsviri

Biz “ABAD”ın mövcud manual brendinq proseslərini mərkəzləşdirilmiş şəkildə idarə edəcək **abad.AI** adlı platforma təklif edirik. Sistem vahid pəncərə (single-window dashboard) prinsipi ilə çalışacaq və aşağıdakı əsas modullardan ibarət olacaq:

*   **Bazar Araşdırması və Rəng Nəzəriyyəsi (Color Theory):** Sistemə məhsul (məsələn, "süd məhsulu") daxil edildikdə avtomatik olaraq bazar trendlərini analiz edir. Oxşar rəqib məhsullarının etiketlərini toplayır və ABAD dizaynerinə kateqoriyaya ən uyğun olan vizual yanaşmaları, həmçinin rəng palitralarını tövsiyə edir.
*   **Qısa İfadədən Ağıllı Etiket Generasiyası:** ABAD əməkdaşı sadəcə "heyva mürəbbəsi" kimi qısa sözlər daxil edir. Model dərhal məhsula uyğun dolğun tərkib, qida və enerji dəyəri hazırlayır. Eyni zamanda orfoqrafik və terminoloji səhvləri tapıb avtomatik düzəldir.
*   **Hüquqi Uyğunluğun Yoxlanılması (RAG Radar) və Kütləvi Audit:** AR Qida Təhlükəsizliyi Qanununun (17.2.1), AZS və ISO standartlarını özündə birləşdirən RAG (Retrieval-Augmented Generation) alqoritmi ilə işləyir. AI modeli generasiya olunmuş mətndə çatışmazlıq (məs: allergenlər) taparsa qırmızı bayraq (red flag) verir. Həmçinin, yeni qanun dəyişdiyi zaman "Kütləvi Audit" funksiyası ilə minlərlə məhsul 1 saniyədə taranır.
*   **3D Vizual Dizayn və Hekayə:** Azərbaycan mədəni elementləri ilə zənginləşdirilmiş 3D Mockup vizuallaşdırmaları və məhsulun arxa etiketi üçün tarixə əsaslanan "Storytelling" (hekayə) mətnləri avtomatik generasiya olunur.
*   **Avtomatlaşdırılmış İş Axını (Kanban ERP):** Sahibkarların kağızsız "ASAN Finans" vasitəsilə qeydiyyata alınması, dizayn və hüquqi yoxlanış proseslərinin hamısı vizual sürüşdürülə bilən Kanban lövhəsində cəmlənir, beləliklə bütün komanda bir paneldən işləyir.

## 2. İstifadə ediləcək texnologiyalar və arxitektura

Sistem müasir bulud və mikroservis arxitekturası əsasında qurulacaq:

*   **Frontend (İstifadəçi İnterfeysi):** `React.js` və ya `Next.js` istifadə edərək ABAD əməkdaşları üçün çevik və funksional panellər (Dashboard) yaradılacaq. `Tailwind CSS` ilə vahid UI/UX standartı təmin ediləcək.
*   **Backend (Məntiq qatı):** Yüksək sürətli və asinxron arxitekturaya malik `Python (FastAPI)` tətbiq olunacaq.
*   **Süni İntellekt (AI Core):**
    *   Mətn və etiket generasiyası, orfoqrafik düzəlişlər: `GPT-4o` və ya `Claude 3.5 Sonnet`.
    *   Hüquqi sənədlərin bazası (RAG) üçün: `Pinecone` və ya `Qdrant` Vektor Məlumat Bazası (Vector DB).
*   **Məlumat Bazası:** Layihələrin status idarəedilməsi üçün `PostgreSQL`.

## 3. İnteqrasiya yanaşması (Dövlət Sistemləri - ASAN Vision)

Təklif etdiyimiz həll qapalı və izolyasiya olunmuş bir sistem deyil, **ASAN GovTech ekosisteminin məntiqi davamı olan qlobal inteqrasiya modulu** kimi dizayn edilmişdir:

*   **ASAN Login (Vahid Avtorizasiya):** Sistemə sərbəst qeydiyyat əvəzinə tam təhlükəsizliyi təmin edən qlobal "ASAN Login" inteqrasiya ediləcək. Beləliklə, ABAD əməkdaşları fərdi məlumatları ilə təhlükəsiz şəraitdə daxil ola biləcək.
*   **ASAN Finans və Dövlət Reyestrləri:** İstehsalçının VÖEN-i daxil edildiyi an, məlumatlar ASAN Finans infrastrukturundan avtomatik çəkiləcək.
*   **AQTA və Rəqəmsal Qeydiyyat:** Gələcəkdə məhsulların elektron təsdiqi və GS1 barkod arxivləşdirməsi üçün AQTA sisteminə birbaşa inteqrasiya qapıları (webhook) hazır vəziyyətdə qurulacaq.

## 4. Komanda haqqında məlumat və təcrübə

Təqdim olunan komanda AI, proqramlaşdırma və layihələrin idarə olunması sahəsində təcrübəli profillərdən ibarətdir:
1.  **Elvin Hacızadə (Süni İntellekt / RAG Mühəndisi):** RAG modelinin qurulması, "hallucinate" etmədən dəqiq hüquqi cavabların generasiyası və arxitekturanın planlaşdırılması.
2.  **Nemət Zərbiyev (Proqram Arxitektoru / Full-Stack):** İstifadəçi dostu ABAD idarə panelinin (Frontend) və API inteqrasiyalarının qurulması.

## 5. Pilot tətbiq planı və vaxt cədvəli

Pilot layihənin inkişaf etdirilib ilkin tətbiqə tam hazır olması üçün **12 həftəlik (3 aylıq) çevik (Agile)** yanaşma nəzərdə tutulur:

*   **Həftə 1 - 2:** Qanunvericilik və standart sənədlərinin (ГОСТ, AZS, AQTA reqlamentləri) rəqəmsallaşdırılaraq Vektor bazasına yüklənməsi.
*   **Həftə 3 - 5:** Qısa ifadədən etiket mətnləri yaradan, orfoqrafiyanı yoxlayan və hüquqi tələbləri analiz edən xüsusi LLM/RAG modelinin (Backend) qurulması.
*   **Həftə 6 - 8:** ABAD işçiləri üçün məlumatların daxil edildiyi vahid istifadəçi interfeysinin (Frontend Dashboard) yaradılması.
*   **Həftə 9 - 10:** Bazar Araşdırması və Rəng tövsiyələri (Color Theory) modulunun tətbiqi. İlk testlərin icrası.
*   **Həftə 11 - 12 (Pilot İstifadə və Monitorinq):** Real məhsullar üzərində (məsələn, 20 növ məhsul) prosesin tamamilə abad.AI üzərindən icrası. Təkliflərin nəzərə alınması və sistemin təhvili.
