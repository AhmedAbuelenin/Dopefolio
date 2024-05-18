var controller = new ScrollMagic.Controller()

function createScene(triggerElement, triggerHook = 0.8) {
  return new ScrollMagic.Scene({
    triggerElement: triggerElement,
    triggerHook,
    reverse: false
  })
    .setClassToggle(triggerElement, 'reveal--visible')
    .addTo(controller)
}

createScene('.heading-primary')
createScene('.text-primary')
createScene('#download-cv')
createScene('.about__content-main')
createScene('.about__content-skills')
createScene('.projects__row')
createScene('#contact-subheader')
createScene('.contact__email-container')
createScene('#social-heading')
createScene('.main-footer__social-cont')
createScene('#name-heading')
createScene('.main-footer__short-desc')
createScene('.main-footer__lower', 1)
