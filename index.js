// Display elementini seçin
const display = document.getElementById('display');

// Klavye girişlerini dinleyin
document.addEventListener('keydown', function(event) {
    // Basılan tuşun değerini alın
    const key = event.key;
    
    // Eğer basılan tuş bir rakam veya işlemse, ekrana yazdırın
    if (/[\d.+\-*\/=]|Enter|Backspace|Delete/.test(key)) {
        if (key === 'Enter' || key === '=') {
            calculate();
        } else if (key === 'Backspace' || key === 'Delete') {
            clearDisplay();
        } else {
            appendToDisplay(key);
        }
    }
});

// Ekrana değer ekleyen fonksiyon
function appendToDisplay(value) {
    display.value += value;
}

// Ekrandaki değeri temizleyen fonksiyon
function clearDisplay() {
    display.value = '';
}

// Hesaplama yapan fonksiyon
function calculate() {
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = 'Error';
    }
}
