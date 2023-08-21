/**Main JS file for co-curriculars website by Kishan H
 *Credits and code (unmodifed) came from some external resources and templates - Bootstrapmade.com getbootsrap.com and W3 Schools
 URL's to original sources are linked in evidence template
 */

document.addEventListener('DOMContentLoaded', () => {
    "use strict";
  
    /*Preloader - gives loading sign for visibility of system status (rotates using css animation)*/
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  
    /*Scroll top button - arrow logo*/
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
      const togglescrollTop = function() {
        window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
      }
      window.addEventListener('load', togglescrollTop);
      document.addEventListener('scroll', togglescrollTop);
      scrollTop.addEventListener('click', window.scrollTo({
        top: 0,
        behavior: 'smooth'
      }));
    }

    /* Filter layout - adapated from bootstrapmade.com impact template*/
    let activitiesnIsotope = document.querySelector('.activities-isotope');

    if (activitiesnIsotope) {

      let activitiesFilter = activitiesnIsotope.getAttribute('data-activities-filter') ? activitiesnIsotope.getAttribute('data-activities-filter') : '*';
      let activitiesLayout = activitiesnIsotope.getAttribute('data-activities-layout') ? activitiesnIsotope.getAttribute('data-activities-layout') : 'masonry';
      let activitiesSort = activitiesnIsotope.getAttribute('data-activities-sort') ? activitiesnIsotope.getAttribute('data-activities-sort') : 'original-order';

      window.addEventListener('load', () => {
        let activitiesIsotope = new Isotope(document.querySelector('.activities-container'), {
          itemSelector: '.activities-item',
          layoutMode: activitiesLayout,
          filter: activitiesFilter,
          sortBy: activitiesSort
        });

        let menuFilters = document.querySelectorAll('.activities-isotope .activities-flters li');
        menuFilters.forEach(function(el) {
          el.addEventListener('click', function() {
            document.querySelector('.activities-isotope .activities-flters .filter-active').classList.remove('filter-active');
            this.classList.add('filter-active');
            activitiesIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
            if (typeof aos_init === 'function') {
              aos_init();
            }
          }, false);
        });

      });

    }    

    /*Animation on scroll function and init*/
    function aos_init() {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
    window.addEventListener('load', () => {
      aos_init();
    });
  
  });