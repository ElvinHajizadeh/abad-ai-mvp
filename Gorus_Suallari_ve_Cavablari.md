# ASAN AI Hub & ABAD Görüşü: Mümkün Suallar və Cavablar (Cheat Sheet)

Bu sənəd 30 aprel tarixində baş tutacaq onlayn görüşdə Münsiflər (ASAN AI Hub və ABAD nümayəndələri) tərəfindən verilə biləcək ən kritik sualları və onlara verilməli olan ideal, inamlı cavabları ehtiva edir.

---

## 1. Biznes və Funksional Suallar (ABAD Nümayəndələri üçün)

**Sual 1: Sizin sisteminiz ABAD-ın hansı əsas problemini həll edir? Niyə bu layihəyə ehtiyac var?**
**Cavab:** Hazırda kiçik ailə təsərrüfatlarının məhsullarının qablaşdırılması və etiketlənməsi zamanı hüquqi və qida təhlükəsizliyi standartlarına (AQTA, AZS) uyğunluğu yoxlamaq çox böyük insan əməyi və vaxt tələb edir. İnsan faktoru olduğu üçün səhvlər qaçınılmazdır. Bizim AI platformamız bu audit prosesini saniyələrə endirir. Nəticədə, həm ABAD əməkdaşlarının yükü azalır, həm də sahibkarların məhsulları bazara daha tez və qaydalara tam uyğun şəkildə çıxır.

**Sual 2: Təqdimatda "300% məhsuldarlıq artımı" qeyd etmisiniz. Bu rəqəmi necə əsaslandırırsınız?**
**Cavab:** Bu rəqəm sadə bir riyazi modelə əsaslanır. Hazırda bir məhsulun etiketinin bütün standartlara (şrift ölçüsü, inqrediyentlərin düzgün yazılışı, xəbərdarlıqlar və s.) uyğunluğunu əl ilə yoxlamaq (manual audit) məsələn, 30-40 dəqiqə və ya bəzən günlər alırsa, AI modeli bunu RAG sistemi vasitəsilə saniyələr ərzində edir. Eyni vaxt çərçivəsində əvvəl 10 məhsul təsdiqlənirdisə, indi avtomatlaşdırma sayəsində bu rəqəm 30-40-a çıxacaq. Bu, ən azı 3 qat (300%) səmərəlilik deməkdir.

**Sual 3: Regionlarda yaşayan sadə bir kəndli (ABADçı) bu mürəkkəb süni intellekt sistemindən necə istifadə edəcək?**
**Cavab:** Sistemin "arxa tərəfi" (backend) nə qədər mürəkkəb olsa da, istifadəçi interfeysi (UI) maksimum sadələşdirilmişdir. Sahibkar sadəcə ASAN Login ilə sistemə daxil olur və məhsulunun məlumatlarını (və ya etiket şəklini) yükləyir. Sistem ondan heç bir texniki bilik tələb etmir. Sadəcə yaşıl ("Hər şey qaydasındadır") və ya qırmızı ("Filan tərkib qeyd edilməyib") rəngli, anlaşıqlı məsləhətlər verir. 

---

## 2. Texniki Suallar (ASAN AI Hub / Ləman xanım üçün)

**Sual 4: Layihənizin əsasında RAG (Retrieval-Augmented Generation) dayandığını qeyd etmisiniz. Niyə sadəcə ChatGPT-dən istifadə etmədiniz, RAG-a niyə ehtiyac duyuldu?**
**Cavab:** Dövlət və qida təhlükəsizliyi kimi həssas mövzularda "Hallucination" (AI-ın yalandan məlumat uydurması) yolverilməzdir. Standart LLM-lər (məsələn ChatGPT) qanunvericiliyin ən son, lokal (Azərbaycan) və spesifik detallarını bilmir. RAG (Məlumat-Axtarışla Dəstəklənən Generasiya) sayəsində biz modeli qapalı bazaya (yalnız AQTA qaydaları, AZS və GOST standartları olan bazaya) bağlayırıq. AI cavab verəndə internetdən deyil, məhz bizim verdiyimiz rəsmi sənədlərdən oxuyub cavab verir. Bu, 100% dəqiqlik təmin edir.

**Sual 5: Bəs AQTA qanunları və ya standartlar dəyişərsə, sistem necə yenilənəcək? Yenidən model öyrədiləcək (train ediləcək)?**
**Cavab:** Xeyr, RAG-ın ən böyük üstünlüyü də elə budur! Qanun dəyişdikdə modeli yenidən "train" etməyə (böyük hesablama gücü və pul xərcləməyə) ehtiyac yoxdur. Sadəcə olaraq bizim sistemin vektor bazasındakı (Vector Database) köhnə PDF/Mətn faylını silib, yenisini yükləyirik. Sistem dərhal yeni qanunla işləməyə başlayır.

**Sual 6: Sistemdə İnteqrasiyaları (ASAN Login, GovTech) necə qurmağı düşünürsünüz?**
**Cavab:** Biz MVP-ni "API-first" yanaşması ilə yığmışıq. Yəni bütün sistem modulyardır. İdentifikasiya tamamilə "ASAN Login" API-ləri üzərindən OAuth 2.0 protokolu ilə idarə olunacaq. Bizneslərin VÖEN və qeydiyyat məlumatlarını isə istifadəçidən əl ilə istəmək əvəzinə, birbaşa "GovTech"in təqdim etdiyi aidiyyəti açıq API-lər vasitəsilə e-Hökumət portalından çəkəcəyik. Bu, həm məlumatın dürüstlüyünü, həm də istifadəçi rahatlığını təmin edəcək.

**Sual 7: Məlumatların (Data) təhlükəsizliyi necə təmin ediləcək?**
**Cavab:** İlk növbədə, RAG modelimiz "On-Premise" (lokal serverlərdə) qurulmağa tam uyğundur. Yəni ABAD-ın kommersiya sirləri və ya istifadəçi məlumatları kənar xarici API-lərə (məsələn, OpenAI serverlərinə) göndərilmək məcburiyyətində deyil. Açıq mənbəli (Open-source) güclü LLM-lərdən istifadə edərək sistemi daxili serverlərdə tam izolyasiya olunmuş şəkildə işlədə bilərik. 

---

## 3. Ümumi / Yekunlaşdırıcı Suallar

**Sual 8: Yaxşı, MVP-nizi gördük. Bəs layihəni tam, real işlək vəziyyətə (Production) gətirmək üçün sizə nə qədər vaxt lazımdır?**
**Cavab:** Biz MVP-də arxitekturanı və əsas sübutu (Proof of Concept) artıq qurmuşuq. Əgər dövlət API-lərinə (ASAN Login və s.) çıxışlar təmin edilərsə və bizə standartların rəsmi məlumat bazası (PDF/Mətn formatında) təqdim olunarsa, tam "Production" versiyasını 2-3 ay ərzində təhvil verə bilərik. Bunun ilk 1 ayı sırf API inteqrasiyaları və RAG modelinin Azərbaycan dilində optimizasiyasına, qalan vaxt isə sınaq (UAT - User Acceptance Testing) və təhlükəsizlik testlərinə sərf ediləcək.

**Sual 9: Layihəni hazırlayarkən ən çox hansı hissədə çətinlik çəkdiniz?**
*(Məsləhət: Burada səmimi olub kiçik bir çətinlik, lakin onu necə həll etdiyinizi demək sizi çox professional göstərir)*
**Cavab:** Ən böyük çətinlik AI modelinə hüquqi mətnləri (məsələn, qida kodeksi) düzgün "başa salmaq" idi. Sadə modellər bəzən mürəkkəb hüquqi cümlələri səhv yozurdu. Lakin biz problemi RAG sistemindəki vektor bazasını təkmilləşdirərək (text chunking - mətnləri düzgün kiçik parçalara bölmək metodu ilə) həll etdik. Hazırda sistem qanunun hansı maddəsinə istinad etdiyini tam dəqiq tapır və istifadəçiyə sübut olaraq göstərir.

---

## 4. Dərinləşdirilmiş və Çətin (Tricky) Suallar

**Sual 10: Rəqabət və Alternativlər:** Bazarda hazır AI həlləri (məsələn ChatGPT Plus) varkən niyə ABAD sıfırdan sizin platformanı almalı/qurmalıdır?
**Cavab:** Hazır platformalar "General-purpose" (ümumi məqsədli) LLM-lərdir və dövlət/korporativ məxfilik (Privacy) təmin etmir. Həmçinin, standart ChatGPT-yə hər dəfə qanunları və məhsul şəkillərini əllə yükləmək, ona xüsusi "prompt" (əmr) yazmaq lazımdır ki, bu da sadə sahibkar üçün çox qəlizdir. Bizim sistem isə avtomatlaşdırılmışdır, qaydalar içində gömülüdür (RAG) və xüsusi olaraq Azərbaycanın hüquqi bazasına (AQTA, AZS) köklənib. İstifadəçi sadəcə bir düymə basır.

**Sual 11: Xərc (Cost) və İnfrastruktur:** Bu sistemin saxlanması və işləməsi ABAD-a / ASAN-a nə qədər başa gələcək? Çox bahalı API xərcləri çıxmayacaq ki?
**Cavab:** Sistem büdcəyə qənaət baxımından optimallaşdırılıb. Biz kommersiya API-lərinə (məsələn, OpenAI) hər sorğu üçün pul ödəmək əvəzinə, "Open-source" (Llama 3, Mistral) modellərini lokal olaraq ABAD və ya ASAN serverlərində (On-Premise) quraşdıra bilərik. Bu halda aylıq API xərci tam sıfıra (0) enir. Əsas xərc yalnız ilkin mərhələdə güclü server (GPU) ayrılması olacaq ki, bu da "G-Cloud" (Hökumət Buludu) daxilində rahatlıqla həll edilə bilər.

**Sual 12: Məsuliyyət və Risk:** Bəs əgər süni intellekt səhv qərar versə və qaydalara uyğun olmayan məhsula "uyğundur" desə? Cəzanı kim çəkəcək?
**Cavab:** Bizim həllimiz "Human-in-the-loop" (İnsan nəzarətində olan) AI arxitekturasıdır. Yəni AI burada son qərarverici deyil, "Ağıllı Assistent" (Copilot) rolunu oynayır. O, saniyələr ərzində auditi edib nəticəni və istinad etdiyi qanun maddəsini ABAD ekspertinin və ya hüquqşünasının ekranına çıxarır. Yekun "Təsdiq" düyməsini yenə də mütəxəssis basır. Əvvəllər 30 dəqiqəyə etdiyi işi indi hazır təhlilə baxaraq 1 dəqiqəyə yekunlaşdırır. Məsuliyyət hər zaman insanda qalır.

**Sual 13: Miqyaslanma (Scalability):** Bu sistemi gələcəkdə yalnız ABAD üçün yox, başqa qurumlar üçün də istifadə edə bilərikmi?
**Cavab:** Bəli, mütləq! Platformanın arxitekturası modulyardır. Gələcəkdə eyni platformanı KOBİA, AZPROMO və ya sərbəst sahibkarlar da istifadə edə bilər. Məsələn, kimsə məhsulunu Avropaya ixrac etmək istəyirsə, biz sadəcə RAG bazasına Avropa Birliyi (CE mark) standartlarını yükləyirik. Sistem dərhal həmin məhsulun Avropa standartlarına uyğun olub-olmadığını yoxlamağa başlayır.

**Sual 14: Sürət və Yükə Dözümlülük:** Eyni anda 1000 sahibkar sistemə etiket yükləsə, bir yoxlanış nə qədər vaxt aparacaq? Sistem çökməyəcək?
**Cavab:** Biz sistemi "Microservices" arxitekturasında qururuq. Yük artdıqda, "Auto-scaling" sayəsində server resursları avtomatik çoxalır. Normal şərtlərdə bir məhsul etiketinin (şəkil və ya mətn forması) RAG vasitəsilə onlarla PDF sənədi arasında yoxlanması və hesabatın çıxarılması orta hesabla 3-5 saniyə çəkəcək. Bu da istifadəçinin gözləmə vaxtını minimuma endirir.

## 5. Çox Dərin Texniki Suallar (Sırf Ləman xanım - ASAN AI Hub üçün)

Bu suallar sizin arxitekturanı həqiqətən özünüzün qurub-qurmadığınızı yoxlamaq üçün verilə bilər.

**Sual 15: Etiketin üzərindəki yazıları (şəkli) sistemə necə daxil edəcəksiniz?**
**Cavab:** Bunun üçün iki yolumuz var. Birincisi, OCR (Optical Character Recognition - Optik Simvol Tanıma) texnologiyasından istifadə edərək şəkildəki yazını mətnə çevirib RAG-a ötürmək. İkincisi və daha müasiri, birbaşa "Multimodal LLM" (məsələn, GPT-4o və ya Claude 3.5 Sonnet) istifadə etməkdir. Bu modellər birbaşa şəkli "görür", onu analiz edir və qanunla müqayisə edir. Biz MVP-də "Multimodal" yanaşmasına üstünlük veririk, çünki o həm də şriftin ölçüsünü və loqoların düzgün yerləşdiyini anlaya bilir. 

*Xüsusi Qeyd:* MVP (prototip) mərhələsində şəkli sürətli oxumaq üçün GPT-4o (və ya Claude) API-sindən istifadə etmişik. Amma dövlət (ABAD) layihəni tam alıb öz serverinə qoyanda təhlükəsizlik və məxfilik üçün biz bu xarici modelləri çıxarıb, onların yerinə açıq mənbəli (Open-source) və şəkli oxuya bilən daxili "LLaVA" və ya "Llama-3-Vision" modellərini qoşacağıq. RAG arxitekturasında əsas beyni (LLM-i) dəyişmək cəmi bir neçə dəqiqə alır.

**Sual 16: RAG qurarkən qanunları bazaya necə yükləmisiniz? "Chunking" (parçalama) strategiyanız nədir?**
**Cavab:** Hüquqi mətnləri sistemə yükləyəndə "Fixed-size" (yəni sadəcə hər 500 sözdən bir kəsmək) strategiyası işləmir, çünki qanunun bir maddəsi yarımçıq kəsilə bilər. Biz **"Semantic Chunking"** (Məna üzrə parçalama) metodundan istifadə edirik. Yəni hər bir qanun maddəsini və ya bəndini bütöv bir blok (chunk) olaraq saxlayırıq. Belə olduqda AI axtarış edəndə tam maddəni tapır və kontekst itmir.

**Sual 17: Vektor Bazası (Vector Database) olaraq nə istifadə etməyi düşünürsünüz?**
**Cavab:** İlkin MVP (Prototip) üçün lokal işləyən yüngül bazalardan (məsələn: ChromaDB və ya FAISS) istifadə edə bilərik. Lakin Production (real işlək) versiyada, miqyaslanma və sürət üçün "Pinecone", "Qdrant" və ya mövcud PostgreSQL bazasının üzərinə "pgvector" əlavəsi qurmaq ən ideal variantdır. Bu, bizə milyonlarla qanun maddəsi arasında saniyənin mində biri qədər sürətlə "Semantik Axtarış" (Semantic Search) etməyə imkan verəcək.

**Sual 18: System Prompt (AI-a verilən əsas əmr) necə yazılıb ki, səhv etməsin?**
**Cavab:** Bizim "System Prompt" çox sərt hüquqi qaydalarla çərçivələnib. Prompt təxminən belədir: *"Sən çox sərt və dəqiq bir hüquqi auditorsan. Sənə verilən məhsul məlumatlarını YALNIZ təqdim edilən kontekstə (AQTA standartlarına) əsasən yoxla. Əgər sualın cavabı sənə verilən bazada yoxdursa, heç nə uydurma, sadəcə 'Məlumat tapılmadı' de."* Bu "zero-tolerance" (sıfır dözümlülük) promptu Hallucination riskini minimuma endirir.

## 6. Gözlənilməz (Sürpriz) Ssenari Sualları

**Sual 19: Biznes Modeli (Monetizasiya): Bu layihə ABAD-a pul qazandıracaqmı, yoxsa sadəcə xərcdir?**
**Cavab:** Bu layihə birbaşa "Cost-saving" (xərclərin azaldılması) modelidir, yəni qənaət edilən hər saat və hər manat əslində qazanılmış resursdur. Ekspertlərin 1 aya etdiyi auditi sistem 1 günə bitirir. Beləliklə, ABAD eyni işçi heyəti ilə daha çox sahibkara xidmət edir. Əlavə olaraq, gələcəkdə platformanın özü SaaS (Software as a Service) lisenziyası ilə digər qurumlara (KOBİA, özəl audit şirkətləri, ixracatçılar) satıla və böyük gəlir gətirə bilər.

**Sual 20: Regionlarda (məsələn ucqar dağ kəndlərində) internet zəif olarsa, sistem necə işləyəcək?**
**Cavab:** Platformanın interfeysi çox yüngül dizayn edilib və PWA (Progressive Web App) texnologiyası ilə oflayn rejimə dəstək verə bilər. Sahibkar internet olmayan yerdə etiket məlumatlarını və şəkilləri daxil edə bilər. Sistem bunu lokal yaddaşda (keşdə) saxlayır. İnternet bağlantısı bərpa olunan kimi məlumatları arxa planda serverə göndərir, auditi həyata keçirir və nəticəni dərhal SMS vasitəsilə fermerin nömrəsinə göndərir.

**Sual 21: Layihə hazırda ancaq "Qida" məhsulları üçün nəzərdə tutulub. Bəs sabah ABAD kosmetika və ya sənətkarlıq (əl işləri) məhsulları buraxsa, sistem necə adaptasiya olacaq?**
**Cavab:** RAG arxitekturasının "ölümsüz" (future-proof) olmasının səbəbi məhz budur. Sistem kodun içinə "hardcoded" (sərt) yazılmış qaydalarla işləmir. Əgər kosmetika istehsal olunacaqsa, biz sadəcə kosmetika standartlarının PDF sənədlərini Vektor Bazasına (Vector DB) "upload" edirik. Süni intellekt dərhal yeni qanunvericiliyi mənimsəyir və kod səviyyəsində heç bir dəyişiklik etmədən yeni kateqoriyalar üzrə auditi həyata keçirir.

**Sual 22: Dizayn hissəsindəki Mədəni Hekayə (Storytelling) bölməsində AI-ın "tarixi saxtalaşdırmayacağına" (Hallucination) necə zəmanət verirsiniz?**
**Cavab:** Bu çox həssas və kritik məqamdır. Storytelling hissəsində də AI-ı sərbəst buraxmırıq! Biz sistemin axtarış bazasına yalnız Azərbaycanın rəsmi etnoqrafik lüğətlərini, Mədəniyyət Nazirliyinin məlumatlarını və dürüst tarixi mənbələri yükləyirik. Modeli belə məhdudlaşdırırıq: *"Sloqan yaradarkən YALNIZ sənə verilmiş tarixi sənədlərdəki faktlara əsaslan. Mədəni faktları və tarixləri əsla uydurma"*. Beləcə alınan hekayə həm kreativ, həm də rəsmi faktlara əsaslanan olur.


**Tövsiyə:** Bu sənədi görüş zamanı ekranınızın bir tərəfində açıq saxlayın ki, sual veriləndə sürətlə göz gəzdirib əsas açar sözləri (RAG, Hallucination, On-Premise, Human-in-the-loop, Microservices, OCR, Multimodal, Semantic Chunking, Vector DB) xatırlaya biləsiniz. Özünüzə və qurduğunuz arxitekturaya güvənin. Uğurlar!
