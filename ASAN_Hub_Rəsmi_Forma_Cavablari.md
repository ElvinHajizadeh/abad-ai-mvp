# ASAN AI Hub Tətbiq (Müraciət) Forması Üçün Yekun Cavablar

**Təlimat:** Aşağıdakı cavablar ASAN AI Hub qeydiyyat formasındakı xanalar (suallar) üçün xüsusi olaraq optimallaşdırılmışdır. Hər bir bölmənin altındakı mətnləri kopyalayaraq birbaşa rəsmi formaya yapışdıra bilərsiniz.

---

### 1. Həllin adı
**ASAN Vision: Ağıllı Monitorinq və İcra Nəzarəti Sistemi**

---

### 2. Həllin təsviri
Təklif etdiyimiz "ASAN Vision" həlli, "ASAN Müraciət" informasiya sisteminə daxil olan vətəndaş şikayətlərinin (fotofaktların) analizi və icraçı dövlət qurumları tərəfindən görülən işlərin vizual doğruluğunun avtomatik yoxlanması üçün nəzərdə tutulmuş *Süni İntellekt əsaslı (AI-driven)* monitorinq infrastrukturudur.
Hazırkı vəziyyətdə (As-Is) müraciətlərin incələnməsi, icra olunmaq üçün aidiyyəti idarəyə yönləndirilməsi və ən əsası qurum tərəfindən geriyə göndərilən "iş icra olundu" şəkillərinin tutuşdurulması insan (operator) faktorundan asılıdır. Bu da vaxt itkisinə və mümkün saxtakarlıqlara yol açır. 
"ASAN Vision" bu problemi iki mərhələdə həll edir: 
**İlkin Analiz:** Vətəndaşın yüklədiyi obyekti tanıyır, təsvirini yazır, uyğun quruma avtomatik yönləndirir. 
**Yekun Doğrulama (İcra Nəzarəti):** İcraçı qurumun hesabat şəklini ilkin müraciətlə (GPS, obyektin aradan qaldırılıb-qaldırılmaması) tutuşdurur, saxtakarlıq ehtimalı olduqda isə "Müraciətin qapanması" sorğusunu rədd edərək dərhal "Uyğunsuzluq" xəbərdarlığı verir.

---

### 3. Texniki yanaşma
Sistemin dərin (deep) analitik arxitekturası xüsusiləşdirilmiş Süni İntellekt (Computer Vision və LLM) kəsişməsində fəaliyyət göstərməsi üçün dizayn edilmişdir.
1. **Vizual Tanıma (Computer Vision - YOLOv8):** Görüntüdəki obyekti (çuxur, zibil, qırıq boru və s.) deteksiya edir və fiziki strukturun bərpa olunub-olunmadığını qradiyent fərqi ilə təyin edir.
2. **Multimodal LLM (Vision-to-Text):** Təyin edilmiş vizual dataları insan dilinə tərcümə edərək müraciətin "Kateqoriyasını", "Problemin növünü" və "Təhlükə dərəcəsini" saniyələr içində təsnifatlaşdırır.
3. **Məlumat Node'u (API İnteqrasiyası):** Sistem monolit yox, Microservice (məs: FastAPI + Async) strukturunda prototiplənərək, mövcud "ASAN Müraciət" arxitekturasına kənardan "Tax və İşlət" (Plug & Play) məntiqi ilə asanlıqla inteqrasiya oluna bilən müstəqil vizual təhlil modulu rolunu oynayır.

---

### 4. Gözlənilən nəticələr
Həllimizin tam tətbiqindən sonra yaranacaq strateji və əməliyyat faydaları aşağıdakılardır:
* **Avtomatlaşdırma və Vaxt Qənaəti:** Vətəndaş müraciətlərinin çeşidlənməsi və yönləndirilməsi prosesindəki insan amilinin aradan qaldırılması hesabına əməliyyat vaxtına 90% qənaət (dərhal qərarlaşdırma).
* **Saxtakarlığın və Uyğunsuzluğun Sıfırlanması:** Qurumlar tərəfindən arxiv şəkillərinin yüklənməsi (olunmamış işlərin həll edilmiş kimi qeydə alınması hallarının) Süni İntellekt vasitəsi ilə yerindəcə müəyyən edilməsi və bloklanması.
* **Resurs Effektivliyinin Artması:** İdarəetmə panelinin vizual uyğunluq faizlərini göstərməsi sayəsində ASAN əməkdaşlarının sadəcə alqoritmik qərarları təsdiq edərək, minlərlə şikayəti gündəlik, dayanmadan emal edə bilmə qabiliyyəti. Yekun etibarilə isə birbaşa Vətəndaş Məmnunluğunun yüksəlməsi.

---

### 5. Komanda üzvləri haqqında məlumat
DİQQƏT: Formanı doldurarkən buradakı adları/rolları və təcrübəni özünüzə və ya komandanıza aid faktlarla əvəz edin!

Komandamız rəqəmsal transformasiya, tətbiqi proqramlaşdırma və müasir Veb İnkişafı (Full-stack / Frontend) üzrə biliklərə və real praktiki layihə inkişaf etdirmə bacarığına malik şəxslərdən təşkil olunmuşdur. Layihənin prototipində (MVP) istifadə olunan müasir "Glassmorphism" vizual standartları, alqoritmik qərar qəbuletmə (şərt) məntiqləri komandamızın əsas İT bacarıqları vasitəsilə sıfırdan formalaşdırılmışdır. Hazırladığımız tam işlək və analitik simulyasiya strukturu, komandamızın texniki baxış bucağının, mürəkkəb prosesləri sadə və tətbiq edilə bilən sistemlərə çevirə bilmə qabiliyyətinin bariz sübutudur.

---

### 6. Əvvəlki təcrübə və hüquqi status
DİQQƏT: Bu hissəni öz mövcud statusunuza (Tələbə / Fiziki Şəxs / MMC) görə mütləq korrektə edin. Həmçinin əgər fərdi müraciət edirsinizsə, cümlələri cəm haldan təkt halına çevirin (məsələn: "fəaliyyət göstərmişik" => "fəaliyyət göstərmişəm")

**Əvvəlki Təcrübə:** İT sektorunda, xüsusilə də dinamik web platformaların qurulması, istifadəçi mərkəzli (User-Centric) dizaynların incəlikləri və arxitektura məntiqlərinin yazılması üzrə təcrübəyə sahibik. İnnovasiya və kodlaşdırma mühitində intensiv araşdırmalar tətbiq edir, həmçinin fərdi olaraq effektiv rəqəmsal həllərin prototipləşdirilməsi üzərində daimi fəaliyyət göstəririk. 
**Hüquqi Status:** Müsabiqəyə müraciət [Tələbə / Fiziki Şəxs / Fərdi Sahibkar (və ya VÖEN: XXX)] hüquqi statusu altında, müstəqil innovasiya qrupu olaraq təqdim edilir. 
(Korporativ hüquqi şəxs deyilik, rəqəmsal innovasiyalar yaradan və bu cür Hackathonlarda ölkənin istifadəsi üçün mükəmməl həllər verə bilən gəncləriyik.)
