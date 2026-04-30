# XÜSUSİ SƏNƏD - BÖLMƏ 2
**İstifadə ediləcək texnologiyalar və arxitektura barədə məlumat (Genişləndirilmiş Format)**

*Qeyd: Bu mətni müsabiqənin rəsmi müraciət formasına, "İstifadə ediləcək texnoloji həllər və arxitektura" hissəsinə kopyalayıb yapışdıra bilərsiniz.*

---

**1. Ümumi Arxitektura Topologiyası**
abad.AI platforması davamlı, genişlənə bilən və təhlükəsiz fəaliyyət üçün qlobal **Mikroservis (Microservices) və API-First** arxitekturası əsasında dizayn edilmişdir. Modulların bir-birindən asılı olmadan, asinxron işləməsi ABAD əməkdaşlarının gecikmələr (latency) olmadan sürətli qərarlar almasını təmin edəcəkdir. Sistem 3 əsas komponentə ayrılır: "Client-side (Müştəri interfeysi)", "Server-side (Verilənlər Məntiqi)" və "Müstəqil AI Nüvəsi".

**2. Tətbiq ediləcək Əsas Texnologiya Steki (Tech Stack)**

**2.1. Süni İntellekt və Vektor Mühərriki (AI Core Layer)**
Sistemin ən mühüm qatı olan AI nüvəsi aşağıdakı mürəkkəb alqoritmlər zəncirini istifadə edir:
*   **LLM Dili (Böyük Dil Modelləri):** Ağıllı kopiraytinq (etiket şüarları) və semantik təhlillər üçün **GPT-4o** və ya **Claude 3.5 Sonnet** modellərindən API xətti ilə istifadə olunacaq.
*   **RAG (Retrieval-Augmented Generation) Çərçivəsi:** Dil modellərinin dövlət sənədlərinə istinad verməsini təşkil edən, onları uydurmalardan təmizləyən orkestrasyon aləti olaraq **LangChain** və ya **LlamaIndex** infrastrukturu tətbiq ediləcək.
*   **Vektor Məlumat Bazası (Vector DB):** AQTA-nın qida standartları (Maddə 17.2.1), AZS və beynəlxalq ГОСТ sənədlərinin qeyri-strukturlaşdırılmış mətnlərdən "Embedding" (vektor izi) formatına çevrilərək millisaniyələr içində axtarıla bilməsi üçün **Pinecone** və ya **Qdrant** bazalarından istifadə ediləcək.
*   **Generativ Vizuallar:** Şəbəkə, Qızılı Buta və digər milli ornamentlərə malik unikal məhsul mock-up'larını avtomatik qurmaq üçün **Stable Diffusion XL** və ya **DALL-E 3** API istifadə ediləcək.

**2.2. Backend (Məntiq və İdarəetmə Qatı)**
AI infrastrukturunda çoxsaylı riyazi və asinxron modellər çalışacağı üçün platformanın arxa fəaliyyəti (Backend) sırf olaraq proqramlaşdırma sənayesinin ən populyar, AI təmayüllü steki - **Python (FastAPI)** çərçivəsində cəmləşdiriləcəkdir. Bu çərçivə xüsusilə Vektor bazaları və AI API-lərinin yüksək tələbli paralel çağırışlarını gecikmədən (non-blocking) edə bilmək gücünə malikdir. Yalnız bildirişlər və server tapşırıqları üçün Node.js istifadə edilə bilər.

**2.3. Frontend (İstifadəçi İnterfeysi Qatı)**
Təqdimat dövründə vizual demo formasını göstərdiyimiz mürəkkəb vahid pəncərə (Dashboard) müasir proqramlaşdırma qanunlarına uyğun olaraq SPA (Single Page Application) şəklində dizayn ediləcək. 
*   Bunun üçün **React.js** və ya **Next.js** kitabxanalarının tətbiqi nəzərdə tutulur. 
*   Vizual standartların (həm istifadəyə davamlı, həm də göz oxşayan interfeysin) formalaşması üçün **Tailwind CSS** freymvorkundan (design system) istifadə ediləcək.

**2.4. Məlumatların Saxlanması (Data Warehouse) və Davamlılıq**
*   **Relaysiya Bazası:** İstifadəçi rekvizitləri, statuslar, məhsul jurnalı və arxiv idarəetməsi kimi stabil məlumatlar üçün dünyanın ən təhlükəsiz, open-source münasibət bazası olan **PostgreSQL** tətbiq ediləcək.
*   **Hostinq, DevOps:** İnteqrasiyanın kəsilmədən (Zero-downtime) təlimlənməsi və tətbiqi üçün sistem kodları **Docker** ilə konteynerlərə yığılacaq. Şəbəkə isə böyüməyə (Elastic) sərbəst imkan verən bulud arxitekturası üzərində (Məs. AWS, Microsoft Azure və ya lokal hökümət buludu (G-Cloud)) işləyəcək.
