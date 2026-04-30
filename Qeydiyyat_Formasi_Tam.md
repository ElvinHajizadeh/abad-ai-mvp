# ASAN AI Hub - Rəsmi Müraciət Formasının Doldurulması

*Qeyd: Aşağıdakı mətnləri müraciət sisteminizdəki eyni adlı qutulara (xanılara) kopyalayıb yapışdıra bilərsiniz.*

---

### Həllin adı
abad.AI - Ailə Bizneslərinin Avtomatlaşdırılmış Brendinq və Uyğunluq Platforması

---

### Həllin təsviri
"abad.AI" kənd təsərrüfatı, sənətkarlıq və qida sahəsində fəaliyyət göstərən kiçik ailə təsərrüfatlarının məhsullarını daxili və qlobal rəflərə (marketlərə) sürətlə hazırlayan Mərkəzləşdirilmiş Süni İntellekt (Vahid Pəncərə) platformasıdır. Hazırda ABAD tərəfindən bir lokal məhsulun (məs. ucqar kənddə istehsal olunan heyva mürəbbəsinin) tərkib təhlili, etiket mətninin yazılması, mədəni dizaynı və ən əsası AQTA standartlarına uyğunluğunun manual yoxlanılması təqribən 14 iş günü tələb edir. Bizim platforma isə insan amilini ləğv etmədən bu mürəkkəb brendinq prosesini vahid bir interfeysdə sadələşdirərək 14 günlük əməliyyatı cəmi 2 günə qədər endirir. Sistem daxilindəki Generativ AI yerli irsimizi (məs. milli buta naxışlarını) dizaynlara tətbiq edir, Ağıllı Dil Modeli füsunkar satış hekayələri (copywriting) nəsilləşdirir və RAG hüquq radarı xətaları önləyir.

---

### Texniki yanaşma
Layihəmiz müstəqil işləyən "Microservices" və "API-first" arxitekturasında qurulub. Texnoloji ekosistemin mərkəzində uydurmalardan uzaq olan (Zero Hallucination) **RAG (Retrieval-Augmented Generation)** modeli dayanır. Biz AR "Qida Təhlükəsizliyi haqqında qanunu"nu (Maddə 17.2.1), AZS və ГОСТ reqlamentlərini rəqəmsallaşdırıb Vector Verilənlər Bazasında (Pinecone/Qdrant) yerləşdirmişik. Sürətli analizlər üçün Backend **Python (FastAPI)**, asinxron inteqrasiyalar üzərində və vizual panellər isə **React.js/Next.js** ilə qurulacaqdır. Sistem təcrid olunmuş bir applikasiya deyil, ASAN texnoloji zəncirinin davamıdır: platformaya daxilolma üçün **ASAN Login (SSO)**, ailə biznesinin VÖEN-ni təsdiqləmək üçün isə **ASAN Finans API**-lərinə xüsusi inteqrasiya protokolları (webhooks/OAuth) tətbiq ediləcəkdir.

---

### Gözlənilən nəticələr
1. **Vaxt ve Maliyyə Qənaəti:** Əl əməyinə əsaslanan 14 günlük ekspertiza və brendinq dövrünün 2 günə endirilməsi.
2. **Kəskin Ölçəkləndirmə (Scalability):** Mövcud komanda mütəxəssislərinin sayını artırmadan illik xidmət göstərilən məhsulların (ailə bizneslərinin) həcminin 300% artması.
3. **Sıfır İnsan Xətası (Compliance):** Etiketlərdəki hüquqi (enerji, kalori, allergen) xətaların AQTA qaydalarına uyğun RAG radarı ilə mütləq şəkildə bazara çıxmamışdan əvvəl tutulması.
4. **Mədəni İxrac Potensialı:** Məhsulların üstündəki etno-naxışların AI köməyi ilə avtomatik vizuallaşdırılaraq xarici turistlərin və qlobal bazarın diqqətini çəkməsi.

---

### Komanda üzvləri haqqında məlumat
Layihəmizdə texnoloji həllin fərqli qütblərini idarə edən həm Data/AI infrastrukturu, həm də Full-Stack məntiqi üzrə professionallar cəmləşib:
**1. Elvin Hacızadə (Süni İntellekt və RAG Mühəndisi / Layihə Vissioneri):** İnnovasiya və Rəqəmsal İnkişaf Agentliyinin (İDDA) təşkil etdiyi mürəkkəb layihələrdə və ekosistemlərdə aktiv iştirak etmiş mütəxəssisdir. Hazırda özünün fərdi Süni İntellekt startapı üzərində işləyir. Elvin "abad.AI" layihəsinin beyni sayılan RAG bazalarının qurulması, prompt mühəndisliyi və biznes fəlsəfəsinin yaradılmasına cavabdehdir.
**2. Nemət Zərbiyev (Proqram Arxitektoru / Full-Stack & Mobile Developer):** Qlobal "Holberton School" proqramlaşdırma məktəbinin Azərbaycan şəbəkəsinin məzunudur. Asinxron proqramlaşdırma, verilənlərin emalı və müasir interfeyslərin qurulması üzrə həm Backend, həm Frontend biliklərinə hakimdir. abad.AI-ın vahid panelli istifadəçi interfeysini, dövlət API-ləri (ASAN) ilə Backend arasındakı mikroxidmətlərini proqramlaşdırır.

---

### Əvvəlki təcrübə və hüquqi status
Komandamız sırf texniki mütəxəssislərdən ibarət deyil, eyni zamanda real "Startup" sahibkarlıq mühitinin yetirməsidir. Üzvlərimizin "İDDA" və "Holberton" kimi dövlət/beynəlxalq proqramlarında əldə etdikləri həm tətbiqi riyaziyyat (AI), həm də kommersiyalaşdırma bacarıqları bu layihənin yarımçıq deyil, tam başa çatacaq bir məhsul kimi dizayn edilməsinə kömək etmişdir. Layihəmizdə iştirak edən şəxslər innovativ təşəbbüskar hüquqi qismində bir araya gələrək, biznes potensialı yüksək olan "Startup Xətti" formatında çıxış edirlər. Qısa müddətdə kompleks AI API-ləri (GPT, RAG, Stable Diffusion) ilə ənənəvi e-Ticarət arxitekturasını birləşdirmə mədəniyyətinə və real layihə icra tarixcəsinə sahibik.
