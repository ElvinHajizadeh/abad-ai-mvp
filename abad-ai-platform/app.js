// app.js - Logic for ABAD.AI Dashboard

// 1. Initialize Lucide Icons
lucide.createIcons();

// 2. Initialize Chart.js for Market Research
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('marketChart');
    if(ctx) {
        const context2D = ctx.getContext('2d');
        const data = {
            labels: ['Şəkər Nİsbəti (%)', 'Görünüş Dəyəri', 'Mürəkkəblik', 'Rəflərdə Seçim (%)', 'Təbii Algı'],
            datasets: [{
                label: 'Bizim AI Dizaynı',
                data: [65, 90, 45, 85, 92],
                backgroundColor: 'rgba(34, 197, 94, 0.2)',
                borderColor: '#22c55e',
                pointBackgroundColor: '#16a34a',
                pointBorderColor: '#fff',
                borderWidth: 2,
            }, {
                label: 'Bazar Ortalaması',
                data: [85, 60, 70, 50, 65],
                backgroundColor: 'rgba(156, 163, 175, 0.2)',
                borderColor: '#9ca3af',
                pointBackgroundColor: '#6b7280',
                pointBorderColor: '#fff',
                borderdash: [5, 5],
                borderWidth: 2,
            }]
        };

        const config = {
            type: 'radar',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: { color: 'rgba(0, 0, 0, 0.05)' },
                        grid: { color: 'rgba(0, 0, 0, 0.05)' },
                        pointLabels: { font: { family: 'Inter', size: 10, weight: '600' }, color: '#6b7280' },
                        ticks: { display: false, min: 0, max: 100 }
                    }
                },
                plugins: {
                    legend: { position: 'bottom', labels: { usePointStyle: true, font: { family: 'Inter', size: 11 }, padding: 20 } },
                    tooltip: { backgroundColor: 'rgba(17, 24, 39, 0.9)', cornerRadius: 8, displayColors: false }
                }
            },
        };

        let marketChart = new Chart(context2D, config);

        const refreshBtn = document.getElementById('refreshChart');
        if(refreshBtn) {
            refreshBtn.addEventListener('click', (e) => {
                const btn = e.currentTarget;
                btn.classList.add('animate-spin');
                setTimeout(() => btn.classList.remove('animate-spin'), 1000);
                marketChart.data.datasets[0].data = marketChart.data.datasets[0].data.map(v => v + (Math.random() * 10 - 5));
                marketChart.update();
            });
        }
    }

    // 3. AI Text Typing Effect
    const aiText = "Tərkibi: Seçilmiş heyva, təmizlənmiş içməli su, şəkər tozu, limon turşusu.\n\nTəbii heyva meyvələrindən Azərbaycanın ənənəvi resepti üzrə, müasir gigiyenik şəraitdə, heç bir süni qatqı və ya konservant əlavə edilmədən hazırlanmışdır. Sərin və quru yerdə, birbaşa günəş şüalarından uzaq saxlayın.\n\nEnerji dəyəri: 100q üçün 245 kkal.";
    const typingContainer = document.getElementById('aiTypingText');
    
    if(typingContainer) {
        let idx = 0;
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        
        setTimeout(() => {
            const interval = setInterval(() => {
                if (idx < aiText.length) {
                    let char = aiText.charAt(idx);
                    if(char === '\n') {
                         typingContainer.innerHTML = aiText.substring(0, idx) + '<br/>';
                    } else {
                         typingContainer.innerHTML = aiText.substring(0, idx + 1).replace(/\n/g, '<br/>');
                    }
                    typingContainer.appendChild(cursor);
                    idx++;
                } else {
                    clearInterval(interval);
                    cursor.style.display = 'none'; // hide cursor after finish
                }
            }, 15);
        }, 800);
    }

    // 4. TAB NAVIGATION LOGIC
    const navBtns = document.querySelectorAll('.nav-btn');
    const views = document.querySelectorAll('.content-view');

    navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = btn.getAttribute('data-target');
            
            // Adjust buttons active states
            navBtns.forEach(b => {
                b.classList.remove('bg-brand-50', 'text-brand-700');
                b.classList.add('text-gray-600');
            });
            btn.classList.add('bg-brand-50', 'text-brand-700');
            btn.classList.remove('text-gray-600');
            
            // Toggle view visibility
            views.forEach(v => {
                v.classList.add('hidden');
                v.classList.remove('block');
            });
            
            const targetView = document.getElementById('view-' + target);
            if(targetView) {
                targetView.classList.remove('hidden');
                targetView.classList.add('block');
                
                // re-initialize lucide icons inside newly shown tab just in case
                lucide.createIcons();
            }
        });
    });

    // 5. MODAL LOGIC (Yeni Məhsul Əlavə Et)
    const newProductBtn = document.getElementById('newProductBtn');
    const addProductModal = document.getElementById('addProductModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const cancelModalBtn = document.getElementById('cancelModalBtn');
    const saveProductBtn = document.getElementById('saveProductBtn');
    const toastNotification = document.getElementById('toastNotification');

    const openModal = () => {
        addProductModal.classList.remove('hidden');
        setTimeout(() => addProductModal.classList.remove('opacity-0'), 10);
    };

    const closeModal = () => {
        addProductModal.classList.add('opacity-0');
        setTimeout(() => addProductModal.classList.add('hidden'), 300);
    };

    const showToast = (title, message, isSuccess = true) => {
        document.getElementById('toastTitle').innerText = title;
        document.getElementById('toastMsg').innerText = message;
        
        toastNotification.classList.remove('translate-y-20', 'opacity-0');
        setTimeout(() => {
            toastNotification.classList.add('translate-y-20', 'opacity-0');
        }, 3000);
    };

    if(newProductBtn) newProductBtn.addEventListener('click', openModal);
    if(closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if(cancelModalBtn) cancelModalBtn.addEventListener('click', closeModal);
    if(saveProductBtn) {
        saveProductBtn.addEventListener('click', () => {
            closeModal();
            showToast("Məhsul Qeydiyyatı", "Yeni məhsul uğurla sistemə əlavə edildi.");
        });
    }

    // 6. TABLE ROW CLICK (RAG tabına keçid)
    const productRows = document.querySelectorAll('.product-row');
    productRows.forEach(row => {
        row.addEventListener('click', () => {
            // Sətrə klikləyəndə RAG (Compliance) tabına keç
            const complianceBtn = document.querySelector('[data-target="compliance"]');
            if(complianceBtn) complianceBtn.click();
            showToast("Məhsul Seçildi", "Audit üçün məlumatlar RAG motoruna yükləndi.");
        });
    });

    // 7. RAG FIX LOGIC (Düzəlişi Mətnə Tətbiq Et)
    const applyRagFixBtn = document.getElementById('applyRagFixBtn');
    if(applyRagFixBtn) {
        applyRagFixBtn.addEventListener('click', () => {
            // Update left panel text
            const targetText = document.getElementById('rag-target-text');
            const alertIcon = document.getElementById('rag-alert-icon');
            
            if(targetText) {
                targetText.classList.remove('bg-red-50/40', 'border-red-200', 'hover:bg-red-50');
                targetText.classList.add('bg-green-50/40', 'border-green-200', 'hover:bg-green-50');
                targetText.innerHTML = `
                    <div class="absolute -right-2 -top-2 bg-green-500 text-white w-5 h-5 rounded-full flex items-center justify-center shadow-md"><i data-lucide="check" class="w-3 h-3"></i></div>
                    "Seçilmiş heyvalar, şəkər tozu, təmizlənmiş içməli su. Gözəl və təbii tərkibli ev mürəbbəsidir. Enerji dəyəri: 100qr üçün 245 kkal, Karbohidratlar: 62 qr. Təbii şəraitdə ərsəyə gəlib. Tam gigiyenikdir. İstehsal tarixi: 15.04.2026. Yararlıq müddəti 2 ildir. Allergen xəbərdarlığı: Qoz-fındıq izləri ola bilər."
                `;
            }

            // Update Right Panel Alert Box
            const alertBox = document.getElementById('rag-alert-box');
            const alertHeader = document.getElementById('rag-alert-header');
            const alertIconLeft = document.getElementById('rag-alert-icon-left');
            const alertTitle = document.getElementById('rag-alert-title');
            const alertMsg = document.getElementById('rag-alert-msg');
            const actionFooter = document.getElementById('rag-action-footer');

            if(alertHeader) {
                alertHeader.classList.remove('bg-red-50', 'border-red-100');
                alertHeader.classList.add('bg-green-50', 'border-green-100');
                
                alertIconLeft.classList.remove('bg-red-100');
                alertIconLeft.classList.add('bg-green-100');
                alertIconLeft.innerHTML = '<i data-lucide="check-circle-2" class="w-4 h-4 text-green-600"></i>';

                alertTitle.classList.remove('text-red-800');
                alertTitle.classList.add('text-green-800');
                alertTitle.innerText = 'Sistem Yeniləndi: Uğurlu Audit';

                alertMsg.classList.remove('text-red-600');
                alertMsg.classList.add('text-green-600');
                alertMsg.innerText = 'Bütün dövlət standartlarına (AQTA, AZS) uyğunluq təmin edildi və yadda saxlanıldı.';
            }

            if(actionFooter) {
                actionFooter.style.display = 'none';
            }

            showToast("Təsdiqləndi", "Düzəlişlər qəbul edildi və mətn yeniləndi.", true);
            lucide.createIcons();
        });
    }

    // 8. AI STORYTELLING (Yeni Versiya İstə)
    const newStoryBtn = document.getElementById('newStoryBtn');
    if (newStoryBtn) {
        newStoryBtn.addEventListener('click', () => {
            const icon = document.getElementById('newStoryIcon');
            const sloganText = document.getElementById('sloganText');
            const storyText = document.getElementById('storyText');

            // Simulating loading
            icon.classList.add('animate-spin');
            newStoryBtn.classList.add('opacity-70', 'cursor-not-allowed');

            setTimeout(() => {
                // Stop loading
                icon.classList.remove('animate-spin');
                newStoryBtn.classList.remove('opacity-70', 'cursor-not-allowed');

                // Update text
                if (sloganText) {
                    sloganText.innerText = '"Dağların bərəkəti, nənələrin irsi."';
                    sloganText.classList.remove('text-brand-900');
                    sloganText.classList.add('text-green-800');
                }
                
                if (storyText) {
                    storyText.innerText = '"Böyük Qafqazın ətəklərində yetişən bu heyvalar, keçmişdən gələn xüsusi reseptlə, mis qazanlarda qaynayıb. İçində nə süni rəngləndirici, nə də dadlandırıcı var - yalnız ana təbiətin saf ləzzəti. Çay süfrənizə fərqlilik qatacaq əsl ev mürəbbəsi."';
                }

                showToast("Yeni Mətn", "Süni intellekt tərəfindən yeni sloqan və hekayə generasiya edildi.", true);
            }, 1200); // 1.2s delay for visual effect
        });
    }
});
