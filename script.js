document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const surpriseMessage = document.getElementById('surprise-message');
    const buttonsArea = document.getElementById('buttons-area');

    // **"Hayır" Butonunun Kaçma Fonksiyonu**
    noBtn.addEventListener('mouseover', () => {
        // Rastgele yeni bir pozisyon hesapla
        // Butonu "buttons-area" içinde tutmak için alanı referans al
        const containerRect = buttonsArea.getBoundingClientRect();
        const buttonRect = noBtn.getBoundingClientRect();

        // Rastgele X ve Y koordinatları belirle (kendi genişliği/yüksekliği içinde kalacak şekilde)
        const newX = Math.random() * (containerRect.width - buttonRect.width);
        const newY = Math.random() * (containerRect.height - buttonRect.height);

        // Yeni pozisyonu uygula
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    });

    // **"Evet" Butonuna Tıklandığında Yapılacaklar**
    yesBtn.addEventListener('click', () => {
        // Buton alanını gizle
        buttonsArea.style.display = 'none';
        
        // Sürpriz mesajı göster
        surpriseMessage.classList.remove('hidden');
        
        // Opsiyonel: Mesajı vurgulamak için bir animasyon ekleyebilirsiniz.
    });
});