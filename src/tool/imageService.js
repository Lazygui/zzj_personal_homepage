const images = ['bg0.jpg'];

function getRandomBg() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageName = images[randomIndex];
    return 'public/img/bg/' + imageName;
}

function getIcon(iconName) {
    return 'public/img/icon/' + iconName;
}

export { getRandomBg, getIcon };