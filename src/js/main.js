const mobileNav = () => {
	const navBtn = document.querySelector('.mobile-nav-btn')
	const nav = document.querySelector('.nav')
	const menuIcon = document.querySelector('.nav-icon')
	const htmlDocument = document.querySelector('html')

	nav.classList.toggle('mobile-nav--open')
	menuIcon.classList.toggle('nav-icon--active')
	htmlDocument.classList.toggle('no-scroll')

	nav.addEventListener('click', e => {
		const navList = nav.querySelector('.nav__list')
		const navLink = nav.querySelector('.nav__link')

		if (e.target === navList || navLink) {
			nav.classList.remove('mobile-nav--open')
			menuIcon.classList.remove('nav-icon--active')
			htmlDocument.classList.remove('no-scroll')
		}
	})
}
document
	.querySelector('.mobile-nav-btn')
	.addEventListener('click', () => mobileNav())
