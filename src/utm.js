function saveUtmToSession() {
    const urlParams = new URLSearchParams(window.location.search);
    let utmData = {};

    for (let [key, value] of urlParams) {
        if (key.startsWith('utm_')) {
            utmData[key] = value;
        }
    }

    // Если метки найдены, сохраняем их в сессию
    if (Object.keys(utmData).length > 0) {
        sessionStorage.setItem('utm_data', JSON.stringify(utmData));
        console.log('UTM-метки сохранены в сессии');
    }
}

// Вызываем при загрузке страницы
saveUtmToSession();