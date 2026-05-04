// app.js - Logic for ABAD.AI Dashboard (Internal Team Focus)

// 1. Initialize Lucide Icons
lucide.createIcons();

// 2. Initialize Chart.js for Dashboard
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('marketChart');
    if(ctx) {
        const context2D = ctx.getContext('2d');
        const data = {
            labels: ['Məhsuldarlıq Artımı (%)', 'Uyğunluq Xətası', 'Koordinasiya Sürəti', 'Avtomatlaşdırma Dəyəri', 'Brendinq Vaxtı'],
            datasets: [{
                label: 'abad.AI ilə İdarəetmə',
                data: [95, 5, 90, 85, 95],
                backgroundColor: 'rgba(34, 197, 94, 0.2)',
                borderColor: '#22c55e',
                pointBackgroundColor: '#16a34a',
                pointBorderColor: '#fff',
                borderWidth: 2,
            }, {
                label: 'Əvvəlki Manual Proses',
                data: [40, 60, 30, 10, 20],
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
    }

    // 2.5 TOAST NOTIFICATION LOGIC
    const toastNotification = document.getElementById('toastNotification');
    const showToast = (title, message, isSuccess = true) => {
        if(!toastNotification) return;
        document.getElementById('toastTitle').innerText = title;
        document.getElementById('toastMsg').innerText = message;
        
        toastNotification.classList.remove('translate-y-20', 'opacity-0');
        setTimeout(() => {
            toastNotification.classList.add('translate-y-20', 'opacity-0');
        }, 3000);
    };

    // 3. TAB NAVIGATION LOGIC
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
                lucide.createIcons(); // re-init icons
            }
        });
    });

    // 4. MARKET RESEARCH LOGIC (Bazar Araşdırması)
    const marketSearchBtn = document.getElementById('marketSearchBtn');
    const marketResults = document.getElementById('marketResults');
    const marketInput = document.getElementById('marketInput');

    if(marketSearchBtn && marketResults) {
        marketSearchBtn.addEventListener('click', () => {
            const btnIcon = marketSearchBtn.querySelector('svg') || marketSearchBtn.querySelector('i');
            const originalIcon = btnIcon ? btnIcon.getAttribute('data-lucide') : 'search';
            
            // Loading state
            if(btnIcon) {
                btnIcon.setAttribute('data-lucide', 'loader-2');
                btnIcon.classList.add('animate-spin');
            }
            marketSearchBtn.classList.add('opacity-75', 'cursor-not-allowed');
            lucide.createIcons();

            setTimeout(() => {
                // Restore state
                const updatedIcon = marketSearchBtn.querySelector('svg') || marketSearchBtn.querySelector('i');
                if(updatedIcon) {
                    updatedIcon.setAttribute('data-lucide', originalIcon);
                    updatedIcon.classList.remove('animate-spin');
                }
                marketSearchBtn.classList.remove('opacity-75', 'cursor-not-allowed');
                
                // Show results
                marketResults.classList.remove('opacity-0');
                lucide.createIcons();
            }, 1200);
        });
    }

    // 5. LABEL GENERATION LOGIC (Etiket və Uyğunluq)
    const generateLabelBtn = document.getElementById('generateLabelBtn');
    const aiResultArea = document.getElementById('aiResultArea');
    const aiEmptyState = document.getElementById('aiEmptyState');
    const aiPromptInput = document.getElementById('aiPromptInput');
    const generatedText = document.getElementById('generatedText');

    if(generateLabelBtn && aiResultArea) {
        generateLabelBtn.addEventListener('click', () => {
            if(!aiPromptInput.value.trim()) {
                aiPromptInput.focus();
                return;
            }

            const btnIcon = generateLabelBtn.querySelector('svg') || generateLabelBtn.querySelector('i');
            
            // Loading state
            if(btnIcon) {
                btnIcon.setAttribute('data-lucide', 'loader-2');
                btnIcon.classList.add('animate-spin');
            }
            generateLabelBtn.classList.add('opacity-75', 'cursor-not-allowed');
            lucide.createIcons();

            setTimeout(() => {
                // Restore state
                const updatedIcon = generateLabelBtn.querySelector('svg') || generateLabelBtn.querySelector('i');
                if(updatedIcon) {
                    updatedIcon.setAttribute('data-lucide', 'sparkles');
                    updatedIcon.classList.remove('animate-spin');
                }
                generateLabelBtn.classList.remove('opacity-75', 'cursor-not-allowed');
                
                // Show result area, hide empty state
                aiEmptyState.classList.add('hidden');
                aiResultArea.classList.remove('hidden');
                aiResultArea.classList.add('flex');
                
                lucide.createIcons();
            }, 1500);
        });
    }

    // 6. BULK SCAN LOGIC
    const openBulkScanBtn = document.getElementById('openBulkScanBtn');
    const bulkScanModal = document.getElementById('bulkScanModal');
    const closeBulkScanBtn = document.getElementById('closeBulkScanBtn');
    const startBulkScanBtn = document.getElementById('startBulkScanBtn');
    
    const bulkScanInitial = document.getElementById('bulkScanInitial');
    const bulkScanLoading = document.getElementById('bulkScanLoading');
    const bulkScanResults = document.getElementById('bulkScanResults');
    const scanProgressText = document.getElementById('scanProgressText');

    if(openBulkScanBtn && bulkScanModal) {
        openBulkScanBtn.addEventListener('click', () => {
            bulkScanModal.classList.remove('hidden');
            setTimeout(() => bulkScanModal.classList.remove('opacity-0'), 10);
            
            // Reset to initial state
            bulkScanInitial.classList.remove('hidden');
            bulkScanLoading.classList.add('hidden');
            bulkScanResults.classList.add('hidden');
        });

        closeBulkScanBtn.addEventListener('click', () => {
            bulkScanModal.classList.add('opacity-0');
            setTimeout(() => bulkScanModal.classList.add('hidden'), 300);
        });

        startBulkScanBtn.addEventListener('click', () => {
            bulkScanInitial.classList.add('hidden');
            bulkScanLoading.classList.remove('hidden');
            
            let count = 0;
            const interval = setInterval(() => {
                count += Math.floor(Math.random() * 25) + 10;
                if(count > 500) count = 500;
                scanProgressText.innerText = `${count} / 500 məhsul yoxlanıldı`;
                
                if(count === 500) {
                    clearInterval(interval);
                    setTimeout(() => {
                        bulkScanLoading.classList.add('hidden');
                        bulkScanResults.classList.remove('hidden');
                    }, 500);
                }
            }, 100);
        });
    }

    // 7. KANBAN DRAG AND DROP LOGIC
    const draggables = document.querySelectorAll('[draggable="true"]');
    const zones = document.querySelectorAll('.kanban-zone');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('opacity-50');
            draggable.classList.add('dragging');
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('opacity-50');
            draggable.classList.remove('dragging');
        });
    });

    zones.forEach(zone => {
        zone.addEventListener('dragover', e => {
            e.preventDefault(); // Necessary to allow dropping
            const draggingElement = document.querySelector('.dragging');
            if(draggingElement) {
                zone.appendChild(draggingElement);
            }
        });
    });

    // 8. QR CODE GENERATION LOGIC
    const applyFixAndQRBtn = document.getElementById('applyFixAndQRBtn');
    const qrResultArea = document.getElementById('qrResultArea');

    if(applyFixAndQRBtn && qrResultArea) {
        applyFixAndQRBtn.addEventListener('click', () => {
            const btnIcon = applyFixAndQRBtn.querySelector('svg') || applyFixAndQRBtn.querySelector('i');
            if(btnIcon) {
                btnIcon.setAttribute('data-lucide', 'loader-2');
                btnIcon.classList.add('animate-spin');
            }
            applyFixAndQRBtn.classList.add('opacity-75', 'cursor-not-allowed');
            lucide.createIcons();

            setTimeout(() => {
                const updatedIcon = applyFixAndQRBtn.querySelector('svg') || applyFixAndQRBtn.querySelector('i');
                if(updatedIcon) {
                    updatedIcon.setAttribute('data-lucide', 'check-circle');
                    updatedIcon.classList.remove('animate-spin');
                }
                applyFixAndQRBtn.classList.remove('opacity-75', 'cursor-not-allowed');
                
                qrResultArea.classList.remove('hidden');
                qrResultArea.classList.add('flex');
                setTimeout(() => {
                    qrResultArea.classList.remove('scale-95');
                    qrResultArea.classList.add('scale-100');
                }, 10);
                
                lucide.createIcons();
                showToast("Uğurlu Tətbiq", "Etiket mətni qanunvericiliyə uyğunlaşdırıldı.");
            }, 800);
        });
    }

    // 9. EXTRA INTERACTIVITY (TOASTS & BUTTONS)
    const newProducerBtn = document.getElementById('newProducerBtn');
    const newProducerModal = document.getElementById('newProducerModal');
    const closeProducerModalBtn = document.getElementById('closeProducerModalBtn');
    const voenSearchBtn = document.getElementById('voenSearchBtn');
    const voenInput = document.getElementById('voenInput');
    const voenResultForm = document.getElementById('voenResultForm');
    const addProducerSubmitBtn = document.getElementById('addProducerSubmitBtn');

    if(newProducerBtn && newProducerModal) {
        newProducerBtn.addEventListener('click', () => {
            newProducerModal.classList.remove('hidden');
            setTimeout(() => newProducerModal.classList.remove('opacity-0'), 10);
            
            // Reset form
            if(voenInput) voenInput.value = '';
            if(voenResultForm) voenResultForm.classList.add('hidden');
        });

        if(closeProducerModalBtn) {
            closeProducerModalBtn.addEventListener('click', () => {
                newProducerModal.classList.add('opacity-0');
                setTimeout(() => newProducerModal.classList.add('hidden'), 300);
            });
        }

        if(voenSearchBtn && voenResultForm) {
            voenSearchBtn.addEventListener('click', () => {
                const btnIcon = voenSearchBtn.querySelector('svg') || voenSearchBtn.querySelector('i');
                if(!voenInput.value.trim()) {
                    voenInput.focus();
                    return;
                }
                
                // Loading state
                if(btnIcon) {
                    btnIcon.setAttribute('data-lucide', 'loader-2');
                    btnIcon.classList.add('animate-spin');
                }
                voenSearchBtn.classList.add('opacity-75', 'cursor-not-allowed');
                lucide.createIcons();

                setTimeout(() => {
                    // Restore state
                    const updatedIcon = voenSearchBtn.querySelector('svg') || voenSearchBtn.querySelector('i');
                    if(updatedIcon) {
                        updatedIcon.setAttribute('data-lucide', 'search');
                        updatedIcon.classList.remove('animate-spin');
                    }
                    voenSearchBtn.classList.remove('opacity-75', 'cursor-not-allowed');
                    
                    // Show results
                    voenResultForm.classList.remove('hidden');
                    lucide.createIcons();
                }, 1000);
            });
        }

        if(addProducerSubmitBtn) {
            addProducerSubmitBtn.addEventListener('click', () => {
                newProducerModal.classList.add('opacity-0');
                setTimeout(() => {
                    newProducerModal.classList.add('hidden');
                    
                    // Inject new row into the table
                    const productsTableBody = document.getElementById('productsTableBody');
                    const categorySelect = document.getElementById('newCategorySelect');
                    const categoryValue = categorySelect ? categorySelect.value : 'Yeni Kateqoriya';
                    
                    if(productsTableBody) {
                        const newRow = document.createElement('tr');
                        newRow.className = 'hover:bg-brand-50 transition cursor-pointer bg-green-50/50 animate-pulse';
                        newRow.innerHTML = `
                            <td class="p-4">
                                <div class="font-bold text-gray-900 border-l-2 border-brand-500 pl-2">Yeni Məhsul (Qeydiyyat)</div>
                                <div class="text-gray-400 text-xs pl-2.5 mt-0.5">ID: ABD-${Math.floor(Math.random() * 900) + 100}</div>
                            </td>
                            <td class="p-4"><div class="flex items-center"><div class="w-6 h-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-bold text-xs mr-2">A</div> ABAD Təbii Qida...</div></td>
                            <td class="p-4"><span class="px-2 py-1 bg-brand-50 text-brand-700 border border-brand-200 rounded text-xs font-bold">${categoryValue}</span></td>
                            <td class="p-4"><span class="flex items-center text-gray-500 font-medium"><i data-lucide="clock" class="w-4 h-4 mr-1"></i> RAG Yoxlanışı Gözlənilir</span></td>
                            <td class="p-4 text-right"><span class="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg text-xs font-bold">0% Hazırdır</span></td>
                        `;
                        productsTableBody.prepend(newRow);
                        lucide.createIcons();
                        
                        setTimeout(() => {
                            newRow.classList.remove('animate-pulse', 'bg-green-50/50');
                        }, 4000);
                    }

                    showToast("Qeydiyyat Uğurlu", "İstehsalçı ASAN Finans məlumatları əsasında reyestrə əlavə olundu.");
                }, 300);
            });
        }
    }

    const downloadQrBtn = document.getElementById('downloadQrBtn');
    if(downloadQrBtn) {
        downloadQrBtn.addEventListener('click', () => {
            showToast("Yükləmə Tamamlandı", "QR Kod PNG formatında cihazınıza saxlanıldı.");
        });
    }

    const autoFixBtns = document.querySelectorAll('.auto-fix-btn');
    autoFixBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const button = e.currentTarget;
            button.classList.remove('bg-gray-100', 'text-gray-800');
            button.classList.add('bg-green-100', 'text-green-700');
            button.innerHTML = '<i data-lucide="check" class="w-3 h-3 inline mr-1"></i> Düzəldildi';
            lucide.createIcons();
            showToast("Avto-Düzəliş", "Məhsulun xətası uğurla bərpa edildi.");
        });
    });

    const bulkFixAllBtn = document.getElementById('bulkFixAllBtn');
    if(bulkFixAllBtn) {
        bulkFixAllBtn.addEventListener('click', () => {
            showToast("Kütləvi Düzəliş", "Bütün 24 məhsulun etiketi yeni qanunvericiliyə uyğunlaşdırıldı.");
            setTimeout(() => {
                const bulkScanModal = document.getElementById('bulkScanModal');
                if(bulkScanModal) {
                    bulkScanModal.classList.add('opacity-0');
                    setTimeout(() => bulkScanModal.classList.add('hidden'), 300);
                }
            }, 1500);
        });
    }

    const approveKanbanBtn = document.getElementById('approveKanbanBtn');
    if(approveKanbanBtn) {
        approveKanbanBtn.addEventListener('click', (e) => {
            const btn = e.currentTarget;
            btn.classList.remove('bg-purple-100', 'text-purple-700', 'hover:bg-purple-200');
            btn.classList.add('bg-green-100', 'text-green-700');
            btn.innerText = 'Təsdiqləndi';
            showToast("Təsdiq Verildi", "Məhsul rəhbərlik tərəfindən uğurla təsdiqləndi və çapa göndərildi.");
            
            // Optionally move it to the done column
            setTimeout(() => {
                const card = btn.closest('[draggable="true"]');
                const doneZone = document.querySelector('.kanban-zone[data-status="done"]');
                if(card && doneZone) {
                    doneZone.appendChild(card);
                }
            }, 1000);
        });
    }

    // 10. DESIGN STUDIO LOGIC
    const generateDesignBtn = document.getElementById('generateDesignBtn');
    const designEmptyState = document.getElementById('designEmptyState');
    const designResultArea = document.getElementById('designResultArea');

    if(generateDesignBtn && designResultArea) {
        generateDesignBtn.addEventListener('click', () => {
            const btnIcon = generateDesignBtn.querySelector('svg') || generateDesignBtn.querySelector('i');
            
            // Loading state
            if(btnIcon) {
                btnIcon.setAttribute('data-lucide', 'loader-2');
                btnIcon.classList.add('animate-spin');
            }
            generateDesignBtn.classList.add('opacity-75', 'cursor-not-allowed');
            lucide.createIcons();

            setTimeout(() => {
                // Restore state
                const updatedIcon = generateDesignBtn.querySelector('svg') || generateDesignBtn.querySelector('i');
                if(updatedIcon) {
                    updatedIcon.setAttribute('data-lucide', 'palette');
                    updatedIcon.classList.remove('animate-spin');
                }
                generateDesignBtn.classList.remove('opacity-75', 'cursor-not-allowed');
                
                // Show result area, hide empty state
                designEmptyState.classList.add('hidden');
                designResultArea.classList.remove('hidden');
                designResultArea.classList.add('flex');
                
                lucide.createIcons();
                showToast("Dizayn Hazırdır", "3D Qablaşdırma vizualizasiyası və satış hekayəsi yaradıldı.");
            }, 2000);
        });
    }

    const sendToKanbanBtn = document.getElementById('sendToKanbanBtn');
    if(sendToKanbanBtn) {
        sendToKanbanBtn.addEventListener('click', () => {
            showToast("Kanbana Göndərildi", "Məhsul dizaynı 'Rəhbər Təsdiqi' mərhələsinə göndərildi.");
            setTimeout(() => {
                const kanbanTabBtn = document.querySelector('.nav-btn[data-target="kanban"]');
                if(kanbanTabBtn) kanbanTabBtn.click();
            }, 1500);
        });
    }

    const downloadMockupBtn = document.getElementById('downloadMockupBtn');
    if(downloadMockupBtn) {
        downloadMockupBtn.addEventListener('click', () => {
            showToast("Yükləmə Tamamlandı", "Qablaşdırma dizaynı PDF və PNG formatında yadda saxlanıldı.");
        });
    }

    const downloadReportBtn = document.getElementById('downloadReportBtn');
    if(downloadReportBtn) {
        downloadReportBtn.addEventListener('click', () => {
            showToast("Hesabat Hazırdır", "İdarə heyəti üçün həftəlik analitik PDF hesabat yüklənildi.");
        });
    }
});
