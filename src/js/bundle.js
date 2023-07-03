import formStyling from './form-styling';
import customLightbox from "./custom-lightbox";

import suitesGridLightbox from './suites-grid-lightbox';
import customSlider from './custom-slider';

import splashPage from './splash-page';

(function() {

    var pageIds = {
        suites: "342",
        home: '2',
        location: '302'
    }


    if(document.querySelector(`body.page-id-${pageIds.suites}`)) {
        const sgl = suitesGridLightbox();
        sgl.init();
    }

    if(document.querySelector(`body.page-id-${pageIds.home}`)) {
        const cs = customSlider();
        cs.init(2);
    }

    if(document.querySelector(`body.page-id-${pageIds.location}`)) {
        const cs = customSlider();
        cs.init(6);
    }

    const fs = formStyling();
    const cl = customLightbox();
    // const sp = splashPage();

    fs.init();
    cl.init();
    // sp.init();

    document.querySelectorAll('.register-link').forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            launchLightbox();
        });
    });

    document.querySelectorAll('.lightbox-dismiss').forEach(function(el) {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            dismissLightbox();
        });
    });

    function launchLightbox() {
        var lightboxForm = document.querySelector('#lightboxForm');
        document.querySelector('body').classList.add('modal-open');
        lightboxForm.classList.add('lightbox-open');
        
        document.addEventListener("keyup", function(e) {
            if(e.key == 'Escape') {
                dismissLightbox();
            }
        });

        gsap.fromTo(lightboxForm, {
            opacity: 0,
        },
        {
            opacity: 1,
            duration: 0.15
        });
    }

    function dismissLightbox() {
        fs.closeDropdown();
        document.querySelector('body').classList.remove('modal-open');
        document.querySelector('#lightboxForm').classList.remove('lightbox-open');
    }
    console.log('Website development by vanessarusu.com')
}

());
