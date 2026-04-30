# XÜSUSİ SƏNƏD - BÖLMƏ 2
**İstifadə ediləcək texnologiyalar və arxitektura barədə məlumat (Genişləndirilmiş Format)**

*Qeyd: Bu mətni müsabiqənin rəsmi müraciət formasına, "İstifadə ediləcək texnoloji həllər və arxitektura" hissəsinə kopyalayıb yapışdıra bilərsiniz.*

---

**1. Ümumi Arxitektura Topologiyası**
abad.AI platforması davamlı, genişlənə bilən və təhlükəsiz fəaliyyət üçün qlobal **Mikroservis (Microservices) və API-First** arxitekturası əsasında dizayn edilmişdir. Modulların bir-birindən asılı olmadan, asinxron işləməsi ABAD əməkdaşlarının gecikmələr (latency) olmadan sürətli qərarlar almasını təmin edəcəkdir. Sistem 3 əsas komponentə ayrılır: "Client-side (Müştəri interfeysi)", "Server-side (Verilənlər Məntiqi)" və "Müstəqil AI Nüvəsi".

**2. Tətbiq ediləcək Əsas Texnologiya Steki (Tech Stack)**

Sistemin hər bir hissəsi ən müasir "Sənaye Standartları"na uyğun seçilmişdir. Aşağıda hər bir alətin nə iş gördüyü və niyə seçildiyi sadə dildə izah edilmişdir:

**2.1. Süni İntellekt və Vektor Mühərriki (AI Core Layer)**
Sistemin ən mühüm qatı olan AI nüvəsi aşağıdakı mürəkkəb alqoritmlər zəncirini istifadə edir:
*   **Böyük Dil Modelləri (GPT-4o / Claude 3.5):** Sistemin **"Beyni"**. O, insan dilini başa düşür, etiketlərdəki xətaları analiz edir və yaradıcı sloqanlar (copywriting) yazır. 
*   **RAG Çərçivəsi (LangChain / LlamaIndex):** Sistemin **"Meneceri"**. AI modelini rəsmi qanunvericilik sənədləri ilə "calaşdıran" körpüdür. AI-ın uydurma (hallucination) danışmasının qarşısını alır və onu yalnız qanun maddələrinə istinad verməyə məcbur edir.
*   **Vektor Məlumat Bazası (Qdrant / Pinecone):** Sistemin **"Yaddaş Bankı"**. Minlərlə səhifəlik qanunu adi mətn kimi yox, riyazi kodlar (vektorlar) kimi saxlayır. Bu, AI-ın minlərlə sənəd arasından bizə lazım olan maddəni millisaniyələr içində tapmasına imkan verir. (Qeyd: Məxfilik üçün lokal quraşdırılan **Qdrant**-a üstünlük verilir).
*   **Generativ Vizuallar (Stable Diffusion XL / DALL-E 3):** Sistemin **"Rəssamı"**. Məhsulun tərkibini və adını vizuallaşdırır, üzərinə milli ornamentləri (Buta, Şəbəkə) 1 kliklə əlavə edərək hazır dizaynlar yaradır.

**2.2. Backend (Məntiq və İdarəetmə Qatı)**
*   **Python (FastAPI):** Sistemin **"Mühərriki"**. Bütün AI modellərini və bazanı bir-birinə bağlayan asinxron və çox sürətli bir mərkəzdir. AI sahəsində ən peşəkar və standart seçimdir.

**2.3. Frontend (İstifadəçi İnterfeysi Qatı)**
*   **React.js / Next.js:** Sistemin **"Siması"**. İstifadəçilər (sahibkarlar və ekspertlər) üçün sadə, sürətli və bütün cihazlarda (mobil/desktop) mükəmməl görünən bir interfeys təmin edir.
*   **Tailwind CSS:** Vizual standartların (həm istifadəyə davamlı, həm də göz oxşayan interfeysin) formalaşması üçün istifadə edilən müasir dizayn sistemi.

**2.4. Məlumatların Saxlanması və İnfrastruktur**
*   **PostgreSQL:** Relaysiya bazası - istifadəçi məlumatlarının və arxiv jurnallarının ən təhlükəsiz şəkildə saxlanılması üçün.
*   **Docker:** Sistemin **"Konteyneri"**. Proqramın işləməsi üçün lazım olan hər şeyi bir qutuya yığır. Bu, layihənin istənilən dövlət serverində (G-Cloud) heç bir texniki problem olmadan saniyələr içində quraşdırılmasını təmin edir.

---
**Texniki Üstünlüyümüz:** Bizim sistem "Monolit" (hər şey bir yerdə) deyil, **"Microservices"** (parçalara ayrılmış) arxitekturasındadır. Bu o deməkdir ki, gələcəkdə hər hansı bir AI modelini daha yenisi ilə əvəz etmək və ya sistemə yeni funksiyalar (məsələn: avtomatik barkod generasiyası) əlavə etmək çox asandır.
