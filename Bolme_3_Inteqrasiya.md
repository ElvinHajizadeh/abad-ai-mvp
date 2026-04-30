# XÜSUSİ SƏNƏD - BÖLMƏ 3
**İnteqrasiya Yanaşması (API və ya Modul Əsaslı Həll)**

*Qeyd: Bu mətni müsabiqənin rəsmi müraciət formasına, "İnteqrasiya yanaşması" qutusuna birbaşa kopyalayıb yapışdıra bilərsiniz.*

---

**1. İnteqrasiyanın Fəlsəfəsi: "API-First" və Qlobal Eko-Sistem**
abad.AI platforması qapalı, lokal miqyasda işləyən təkbaşına proqram (monolit) kimi yox, qlobal ölçəkləndirilə bilən (Scalable) və digər dövlət sistemlərinə asanlıqla calana bilən **API-First Modul Arxitekturası** əsasında qurulmuşdur. Bu o deməkdir ki, sistemin bütün AI qanunvericilik və dizayn bacarıqlarından yalnız tək panedən yox, həm də gələcəkdə hər hansı üçüncü tərəf proqramlarından istifadə etmək mümkün olacaq.

**2. ASAN GovTech Sistemi ilə Strateji İnteqrasiya Vizyonu**
Həllimiz dövlət resurslarını optimallaşdırmaq məqsədi daşıdığı üçün, ASAN mərkəzi texnoloji infrastrukturu ilə sıx təmasda işləyəcək şəkildə dizayn edilib:
*   **Vahid Avtorizasiya (ASAN Login):** Platformaya sərbəst istifadəçi (Username/Password) qeydiyyatı əvəzinə, dövlətin rəsmi "ASAN Login" (SSO/OAuth 2.0) protokolu inteqrasiya ediləcək. Beləliklə, layihədə iştirak edən menecerlər və ya ekspertlər tamamilə təhlükəsiz şəkildə rəsmi elektron imza, Asan İmza və ya qeydiyyat rekvizitləri vasitəsilə mərkəzi sistem üzərindən avtorizasiyadan keçəcəklər.
*   **Ailə Biznesi Məlumatlarının Avtomatik Yoxlanılması (ASAN Finans API):** Sistemə yeni kənd təsərrüfatı və ya ailə biznesinin VÖEN kodu (Vergi Ödəyicisinin Eyniləşdirmə Nömrəsi) daxil edildiyi an, birbaşa Dövlət Vergi Xidmətinin təqdim etdiyi mərkəzləşdirilmiş məlumat bazasından (ASAN Finans) sahibkarın qanuni statusunu və fəaliyyət növünü avtomatlaşdırılmış API sorğusu (microservices) vasitəsilə təsdiqləyəcək. Bu, onlarla sənədin fiziki toplanmasını rəqəmsallaşdırır.

**3. Daxili Koorporativ İnteqrasiya (ABAD və AQTA)**
*   **Daxili Sistemlər (ABAD):** Sistem ABAD-ın (və sənətkarlıq, ailə biznesi departamentlərinin) mövcud sənəd dövriyyəsi bazasına və ya CRM platformalarına qapalı `RESTful API` vasitəsilə asanlıqla qoşula bilər. Yeni məhsul brendinqi prosesi mövcud korporativ proqramın daxilindən "Sorğu" kimi göndərilə və izlənilə bilər.
*   **Xarici Lisenziya Reyestrləri (AQTA və GS1):** Abad.AI tərəfindən uğurla dizayn edilmiş və qanunvericilik auditindən (RAG) keçmiş Qida məhsullarının dövlət qeydiyyatı, həmçinin Barkodlarının (GS1) mərkəzi bazada arxivləşdirilməsi üçün AQTA-nın elektron infrastrukturu ilə sərbəst əlaqə qura bilən interfeys qapıları (Webhook-lar və Backend API Event-ləri) daim açıq və konfiqurasiyaya hazır vəziyyətdə (Event-driven) qurulacaq. 

**4. Məlumat Təhlükəsizliyi (Role-Based Access Control)**
Göstərilən xarici və daxili inteqrasiyalar son dərəcə məxfi ticari kodlardan istifadə edəcəyi üçün JWT (JSON Web Tokens) bazalı Rol-əsaslı giriş protokolu tətbiq olunacaq. Sistem ancaq autentikasiyadan keçmiş icazəli sorğulara məlumat buraxışını təmin edəcək.
