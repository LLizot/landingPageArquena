function redirectTo(platform) {
    switch (platform) {
        case 'instagram':
            window.location.href = 'https://www.instagram.com/arquenaservicos/';
            break;
        case 'whatsapp':
            window.location.href = 'https://wa.me/5511998368596';
            break;
        case 'email':
            window.location.href = 'mailto:contato@arquenaservicos.com.br ';
            break;
        case 'site':
            window.location.href = 'https://arquenaservicos.com.br';
            break;
    }
}
