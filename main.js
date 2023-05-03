const navButton = document.querySelector('.menu');
const navigation = document.querySelector('.nav-items');
console.log(navButton);
console.log(navigation);

navButton.addEventListener('click', () => {
    navigation.classList.toggle('show');
    if (navButton.getAttribute('aria-expanded') === 'false') {
        navButton.setAttribute('aria-expanded', 'true')
    } else {
        navButton.setAttribute('aria-expanded', 'false');
        navigation.classList.remove('show')
    }
});


