

$(function () {
  $('#fullpage').fullpage({
    navigation: !0,
    navigationPosition: 'left',
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    onLeave: function (index, nextIndex, direction) {
      var leavingSection = $(this);

      //after leaving section 2
      if (index == 1 && direction == 'down') {
        $('.scroll__icon, .fv__title').css('opacity', '0');
      }
      if (nextIndex == 2) {
        anime({
          targets: '.section__title',
          translateX: ["-190%", 0],
          easing: 'easeInOutQuad',
          opacity: [0, 1],
        });
        anime.timeline({
        }).add({
          targets: '.cloud1',
          translateX: ["-100px", 0],
          opacity: [0, 1],
          easing: 'easeInOutQuad'
        }, 1000).add({
          targets: '.cloud3',
          translateX: ["-100px", 0],
          easing: 'easeInOutQuad',
          duration: 1500,
          opacity: [0, 1],
        }, 1000).add({
          targets: '.cloud2',
          translateX: ["100px", 0],
          easing: 'easeInOutQuad',
          duration: 1500,
          opacity: [0, 1],
        }, 1000).add({
          targets: '.cloud-s1',
          translateX: ["100px", 0],
          easing: 'easeInOutQuad',
          duration: 1500,
          opacity: [0, 1],
        }, 1000).add({
          targets: '.cloud4',
          translateX: ["100px", 0],
          easing: 'easeInOutQuad',
          duration: 1500,
          opacity: [0, 1],
        }, 1000).add({
          targets: '.prf-wrap',
          translateX: ["120%", 0],
          opacity: [0, 1],
          easing: 'easeInOutQuad'
        }, 200).add({
          targets: '.about__content-wrap',
          translateX: ["100%", 0],
          opacity: [0, 1],
          easing: 'easeInOutQuad'
        }, 300)
      } else if (nextIndex == 3) {
        anime({
          targets: '.skill--common',
          translateY: [130, 0],
          delay: anime.stagger(100, { start: 700 }),
          duration: 400,
          easing: 'easeInOutQuad',
        });
        anime({
          targets: '.skill__content',
          translateY: [150, 0],
          duration: 200,
          delay: 1500,
          easing: 'linear'
        });
        anime({
          targets: '.section__title',
          translateX: ["-190%", 0],
          easing: 'easeInOutQuad',
          opacity: [0, 1],
        });
        anime({
          targets: '.skill__pc-img, .skill__sp-img',
          translateX: ['400%', 0],
          delay: 1000,
        });
        anime.timeline({
        }).add({
          targets: '.skill-cloud1',
          translateX: ["-100px", 0],
          opacity: [0, 1],
          easing: 'easeInOutQuad',
        }, 1000).add({
          targets: '.skill-cloud2',
          translateX: ["-100px", 0],
          duration: 1500,
          opacity: [0, 1],
          easing: 'easeInOutQuad'
        }, 1000).add({
          targets: '.skill-cloud3',
          translateX: ["100px", 0],
          duration: 1500,
          opacity: [0, 1],
          easing: 'easeInOutQuad'
        }, 1000).add({
          targets: '.skill-cloud4',
          translateX: ["100px", 0],
          duration: 1500,
          opacity: [0, 1],
          easing: 'easeInOutQuad'
        }, 1000).add({
          targets: '.skill-cloud5',
          translateX: ["-100px", 0],
          duration: 1500,
          opacity: [0, 1],
          easing: 'easeInOutQuad'
        }, 1000).add({
          targets: '.skill-cloud6',
          translateX: ["-100px", 0],
          duration: 1500,
          opacity: [0, 1],
          easing: 'easeInOutQuad'
        }, 1000).add({
          targets: '.skill-cloud7',
          translateX: ["100px", 0],
          duration: 1500,
          opacity: [0, 1],
          easing: 'easeInOutQuad'
        }, 1000).add({
          targets: '.skill-cloud8',
          translateX: ["100px", 0],
          duration: 1500,
          opacity: [0, 1],
          easing: 'easeInOutQuad'
        }, 1000)
      } else if (nextIndex == 4) {
        anime({
          targets: '.section__title',
          translateX: ["-190%", 0],
          easing: 'easeInOutQuad',
          opacity: [0, 1],
        });
        anime({
          targets: '.work__info-img',
          opacity: [0, 1],
          easing: 'easeInOutQuad',
          delay: 200,
          duration: 2000
        });
        anime({
          targets: '.work__info-conent',
          translateY: [200, 0],
          duration: 200,
          delay: 1500,
          easing: 'linear'
        });
        anime.timeline({
        }).add({
          targets: '.work-cloud1',
          translateX: ["-100px", 0],
          opacity: [0, 1],
          easing: 'easeInOutQuad',
        }, 1000).add({
          targets: '.work-cloud2',
          translateX: ["100px", 0],
          duration: 1500,
          opacity: [0, 1],
          easing: 'easeInOutQuad'
        }, 1000).add({
          targets: '.work-cloud3',
          translateX: ["100px", 0],
          duration: 1500,
          opacity: [0, 1],
          easing: 'easeInOutQuad'
        }, 1000).add({
          targets: '.work-cloud4',
          translateX: ["-100px", 0],
          duration: 1500,
          opacity: [0, 1],
          easing: 'easeInOutQuad'
        }, 1000).add({
          targets: '.work-cloud5',
          translateX: ["-100px", 0],
          duration: 1500,
          opacity: [0, 1],
          easing: 'easeInOutQuad'
        }, 1000).add({
          targets: '.work-cloud6',
          translateX: ["100px", 0],
          duration: 1500,
          opacity: [0, 1],
          easing: 'easeInOutQuad'
        }, 1000)

      } else if (nextIndex == 5) {
        anime({
          targets: '.section__title',
          translateX: ["-190%", 0],
          easing: 'easeInOutQuad',
          opacity: [0, 1],
        });
        anime({
          targets: '.contact__form-wrap',
          translateX: ['200%', 0],
          easing: 'easeInOutQuad',
          opacity: [0, 1],
        });
        anime.timeline({
        }).add({
          targets: '.contact-cloud1',
          translateX: ["-100px", 0],
          duration: 1500,
          opacity: [0, 1],
          easing: 'easeInOutQuad',
        }, 1000).add({
          targets: '.contact-cloud2',
          translateX: ["100px", 0],
          duration: 1500,
          opacity: [0, 1],
          easing: 'easeInOutQuad',
        }, 1000).add({
          targets: '.contact-cloud3',
          translateX: ["100px", 0],
          duration: 1500,
          opacity: [0, 1],
          easing: 'easeInOutQuad',
        }, 1000).add({
          targets: '.contact-cloud4',
          translateX: ["100px", 0],
          duration: 1500,
          opacity: [0, 1],
          easing: 'easeInOutQuad',
        }, 1000).add({
          targets: '.contact-cloud5',
          translateY: ["100px", 0],
          duration: 1500,
          opacity: [0, 1],
          easing: 'easeInOutQuad',
        }, 1000);
      }
    },

    afterLoad: function (anchorLink, index) {
      var loadedSection = $(this);

      //using index
      if (index == 1) {
        anime({
          targets: '.fv__title',
          translateX: ["-100%", 0],
          duration: 600,
          opacity: [0, 1],
          delay: 300,
          easing: 'easeInOutQuad'
        });
        anime({
          targets: '.scroll__icon',
          translateY: ["100%", 0],
          opacity: [0, 1],
          duration: 400,
          delay: 700,
          easing: 'easeInOutQuad'
        });
      }
    }
  });
});
