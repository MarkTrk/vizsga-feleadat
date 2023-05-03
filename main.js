const navButton = document.querySelectorAll('.hamburger')
const hamburger = document.querySelector('.menu')
const navigation = document.querySelector('.nav-items')
// console.log(navButton)
// console.log(navigation)

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('active')
  for (let i = 0; i < navButton.length; i++) {
    console.log(navButton[i])
    navButton[i].classList.toggle('hidden')
  }
})

navigation.addEventListener('click', () => {
  navigation.classList.remove('active')
})

// navButton.addEventListener('click', () => {
//     navigation.classList.toggle('show');
//     if (navButton.getAttribute('aria-expanded') === 'false') {
//         navButton.setAttribute('aria-expanded', 'true')
//     } else {
//         navButton.setAttribute('aria-expanded', 'false');
//         navigation.classList.remove('show')
//     }
// });
