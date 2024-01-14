<script setup>

useHead({
  bodyAttrs: {
    class: 'bg-white text-black font-proxima-nova scroll-smooth'
  },
  htmlAttrs: {
    class: 'scroll-smooth'
  }
})


onMounted(() => {

  // JS in backend/assets/js/front/pages/life_insurance/free_management.js

  const video = document.querySelector('#video')
  const playButton = document.querySelector('.play-button')
  const playIcon = document.querySelector('.play')
  const pauseIcon = document.querySelector('.pause')
  const accordionTriggers = document.querySelectorAll('[data-toggle-accordion]')

  // Accordions
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', function (e) {
      const accordionContent = this.nextElementSibling

      this.querySelector('svg').classList.toggle('scale-y-[-1]')
      accordionContent.classList.toggle('active')

      if (accordionContent.classList.contains('active')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
      } else {
        accordionContent.style.maxHeight = null
      }
    })
  })

  // Carousels
  const carouselsControls = document.querySelectorAll('[data-carousel-control]')
  carouselsControls.forEach(control => {
    control.addEventListener('click', function () {
      const carousel = this.parentElement.nextElementSibling
    
      console.log(carousel)
      const carouselItems = carousel.querySelectorAll('article')
      const carouselItemWidth = carouselItems[0].offsetWidth

      if (this.dataset.carouselControl === 'left') {
        carousel.scrollBy({
          left: -carouselItemWidth,
          behavior: 'smooth'
        })
      } else {
        console.log('right');
        carousel.scrollBy({
          left: carouselItemWidth,
          behavior: 'smooth'
        })
      }

      carousel.addEventListener('scroll', function () {
        if(control.dataset.carouselControl === 'left') {
          if (carousel.scrollLeft === 0) {
            control.classList.add(...['!opacity-20', '!pointer-events-none'])
          } else {
            control.classList.remove(...['!opacity-20', '!pointer-events-none'])
          }
        }
        else if(control.dataset.carouselControl === 'right') {
          if (carousel.scrollLeft + carousel.offsetWidth === carousel.scrollWidth) {
            control.classList.add(...['!opacity-20', '!pointer-events-none'])
          } else {
            control.classList.remove(...['!opacity-20', '!pointer-events-none'])
          }
        }
      })
      
    })
  })




  // Sticky element: aside navbar
  const scrollViewerHandler = document.querySelector('.scroll-viewer div')
  const sticky = document.querySelector('aside.sticky')

  const scrollViewerObserver = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting === true) {
      sticky.classList.add('isSticky')
      const stickyParentHeight = sticky.parentElement.offsetHeight

      // on window scroll, if sticky element has class isSticky, calculate the percentage of the scroll position based on the height of the parent element
      window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY
        const scrollPercentage = (scrollPosition / stickyParentHeight) * 100

        // 35px is the height of scrollViewerHandler : not a magic number
        scrollViewerHandler.style.top = scrollPercentage - 35 + '%'
      })
    } else {
      sticky.classList.remove('isSticky')
    }
  }, {
    rootMargin: '60px 0px 0px 0px',
    threshold: [.95],
  });

  scrollViewerObserver.observe(sticky)

  const stickySections = document.querySelectorAll('[data-sticky-section]')
  const stickySectionsNavItem = sticky.querySelectorAll('nav ol li')

  const stickySectionsObserver = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting === true) {
        stickySections.forEach(item => {
          item.classList.remove('active')
        })
        entry.target.classList.add('active')

        sticky.querySelector('nav ol').scrollTo({
          left: stickySectionsNavItem[entry.target.dataset.stickySection - 1].offsetLeft - 20,
          behavior: 'smooth'
        })

        stickySectionsNavItem.forEach(item => {
          item.classList.remove('text-secondary-dark')
        })
        stickySectionsNavItem[entry.target.dataset.stickySection - 1].classList.add('text-secondary-dark')
      }
    })
  }, {
    rootMargin: '-33% 0px -66% 0px',
    threshold: [0],
  });

  stickySections.forEach(item => {
    stickySectionsObserver.observe(item)
  })


  // Video
  function handleVideoState() {
    playIcon.classList.toggle('hidden')
    pauseIcon.classList.toggle('hidden')
  }

  video?.addEventListener('canplay', function () {
    handleVideoState()
  });

  playButton?.addEventListener('click', () => {
    handleVideoState()
    console.log('click');

  })

});

</script>


<style scoped lang="scss">
@import 'assets/style.scss';

.scrollbar-hide{
  -ms-overflow-style: none; 
  scrollbar-width: none;  

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>


<!-- Template in backend/templates/Front/Pages/LifeInsurance/free_management.html.twig -->

<template>
  <div class="sticky top-0 left-0 h-[60px] z-[1100] bg-secondary-light w-full"></div>


  <section class="flex relative lg:max-h-[530px] md:min-h-[530px] px-5 py-8 lg:py-6">
    <div class="max-w-[1184px] mx-auto flex flex-col items-center justify-center w-full">
      <img class="h-full w-full inset-0 z-[-1] absolute object-cover object-left pointer-events-none"
        src="@/assets/img/venture_capital/venture_hero.png" alt="hero background image" draggable="false"
        decoding="async">
      <div class="flex flex-col justify-center items-center mx-auto text-black lg:max-w-[750px]">
        <p class="text-xl text-center font-semibold mb-3">Investir / Venture Capital</p>
        <h1 class="text-h1 font-lora leading-[58px] mt-2 mb:mb-6">Investissez dans les secteurs qui <br>
          façonneront le <i>monde de demain</i></h1>
        <a href="https://share.hsforms.com/1SrQQ3Wv0TqmrD9p1zaZmwQ1fcvu"
          class="tw-cta tw-cta--secondary max-md:mx-auto text-white w-full !py-3 max-w-[287px] mt-6 lg:mt-10">
          Découvrir nos opportunités
        </a>
      </div>
    </div>
  </section>

  <section class="relative bg-white py-8 lg:py-16">
    <div class="max-w-[1184px] px-5 mx-auto w-full">
      <ul class="grid grid-cols-1 gap-4 justify-center items-center place-items-center md:gap-8 lg:gap-20 md:grid-cols-3">
        <li class="flex justify-center items-center flex-col gap-2 w-[250px]">
          <p class="text-[28px] font-medium">Clubdeal</p>
          <p class="flex justify-center items-center text-center text-s text-[#8E837A] bg-secondary-neutral border border-[#F2ECE5] py-1 px-10 w-full">
            Mode d’investissement</p>
        </li>
        <li class="flex justify-center items-center flex-col gap-2 w-[250px]">
          <p class="text-[28px] font-medium">> 5 ans*</p>
          <p class="flex justify-center items-center text-center text-s text-[#8E837A] bg-secondary-neutral border border-[#F2ECE5] py-1 px-10 w-full">
            Horizon</p>
        </li>
        <li class="flex justify-center items-center flex-col gap-2 w-[250px]">
          <p class="text-[28px] font-medium">x 2,5*</p>
          <p class="flex justify-center items-center text-center text-s text-[#8E837A] bg-secondary-neutral border border-[#F2ECE5] py-1 px-10 w-full">
            Multiple cible</p>
        </li>
      </ul>
      <p class="text-center text-muted text-xs mt-6 lg:mt-10">*Ces données sont fournies à titre indicatif et ne
        présentent pas de
        garantie de performance. Plus le taux est élevé, plus le risque de perte en capital ou d’impayé des intérêts est
        important.</p>
    </div>
  </section>

  <section class="bg-secondary-neutral relative py-6 md:py-10 lg:py-16"
    style="border-top: 1px solid #F2ECE5;border-bottom: 1px solid #F2ECE5;">
    <div class="max-w-[1184px] px-5 mx-auto flex max-lg:flex-col justify-center w-full gap-8 lg:gap-16">
      <h2 class="text-h2 font-lora">Qu'est-ce que le <br> <span class="whitespace-nowrap"><i>Venture Capital</i>
          ?</span></h2>

      <p class="text-black text-m lg:text-l">
        Le Venture Capital, ou Capital-Risque, est une activité d'investissement dans des entreprises en phase de
        démarrage ou de développement précoce. Les investisseurs en capital-risque injectent des capitaux dans ces jeunes
        entreprises afin de stimuler leur croissance et leur développement. Ce type de financement est particulièrement
        adapté aux entreprises innovantes à fort potentiel de croissance.
        <br> <br>
        Le Venture Capital est considéré comme une activité risquée en raison de l'instabilité économique et de
        l'incertitude entourant les jeunes entreprises. Il permet en contrepartie de viser des rendements élevés pour les
        investisseurs lors de la cession de leurs participations.
      </p>
    </div>
    <div class="group max-w-[1184px] mx-auto flex max-lg:flex-col justify-center w-full gap-8 lg:gap-2 mt-20 px-5">
      <article
        class="group/card flex items-stretch max-lg:flex-col rounded bg-white lg:max-w-[650px] lg:max-h-[250px] overflow-clip">
        <div class="min-w-[250px] w-full max-lg:max-h-[250px] lg:max-w-[250px] h-full overflow-clip">
          <img class="h-full w-full object-cover object-left pointer-events-none"
            src="@/assets/img/venture_capital/venture_health-tech.png" alt="health tech" draggable="false"
            decoding="async">
        </div>
        <div class="flex flex-col gap-4 text-black max-lg:p-6 lg:py-8 text-m lg:text-l lg:max-w-[0px] duration-500 ease-in-out group-hover/card:px-12 group-hover/card:max-w-[900px]">
          <h3 class="line-clamp-1 font-semibold text-[18px]">Health Tech</h3>
          <p class="text-xs line-clamp-3 overflow-clip">Accompagner les entreprises afin de leur permettre une efficacité
            et une productivité optimale</p>
          <p class="text-[12px] line-clamp-2 leading-5 mt-auto italic pt-4 border-t border-black/5 text-black/50 font-medium">
            Des secteurs porteurs : Une spécialisation dans trois thématiques d’avenir.
          </p>
        </div>
      </article>
      <article
        class="group/card flex items-stretch max-lg:flex-col rounded bg-white lg:max-w-[650px] lg:max-h-[250px] overflow-clip">
        <div class="min-w-[250px] w-full max-lg:max-h-[250px] lg:max-w-[250px] h-full overflow-clip">
          <img class="h-full w-full object-cover object-left pointer-events-none"
            src="@/assets/img/venture_capital/venture_property-tech.png" alt="property tech" draggable="false"
            decoding="async">
        </div>
        <div class="flex flex-col gap-4 text-black max-lg:p-6 lg:py-8 text-m lg:text-l lg:max-w-[0px] duration-500 ease-in-out group-hover/card:px-12 group-hover/card:max-w-[900px]">
          <h3 class="line-clamp-1 font-semibold text-[18px]">Enterprise Tech</h3>
          <p class="text-xs line-clamp-3 overflow-clip">Accompagner la transformation digitale, enjeu de compétitivité
            pour les entreprises</p>
          <p class="text-[12px] line-clamp-2 leading-5 mt-auto italic pt-4 border-t border-black/5 text-black/50 font-medium">
            Des secteurs porteurs : Une spécialisation dans trois thématiques d’avenir.
          </p>
        </div>
      </article>
      <article
        class="group/card flex items-stretch max-lg:flex-col rounded bg-white lg:max-w-[650px] lg:max-h-[250px] overflow-clip">
        <div class="min-w-[250px] w-full max-lg:max-h-[250px] lg:max-w-[250px] h-full overflow-clip">
          <img class="h-full w-full object-cover object-left pointer-events-none"
            src="@/assets/img/venture_capital/venture_climate-tech.png" alt="climate tech" draggable="false"
            decoding="async">
        </div>
        <div class="flex flex-col gap-4 text-black max-lg:p-6 lg:py-8 text-m lg:text-l lg:max-w-[0px] duration-500 ease-in-out group-hover/card:px-12 group-hover/card:max-w-[900px]">
          <h3 class="line-clamp-1 font-semibold text-[18px]">Climate tech</h3>
          <p class="text-xs line-clamp-3 overflow-clip">Apporter une réponse concrète aux enjeux liés au réchauffement
            climatique grâce à l’innovation.</p>
          <p class="text-[12px] line-clamp-2 leading-5 mt-auto italic pt-4 border-t border-black/5 text-black/50 font-medium">
            Des secteurs porteurs : Une spécialisation dans trois thématiques d’avenir.
          </p>
        </div>
      </article>
    </div>
  </section>

  <section class="bg-primary-dark text-white py-6 md:py-10 lg:py-16">
    <div class="max-w-[1184px] px-5 mx-auto flex max-lg:flex-col justify-center items-center w-full gap-8 lg:gap-16">
      <div class="flex items-stretch w-full min-h-[300px] max-lg:max-h-[300px] lg:max-w-[50%] relative overflow-hidden">
        <div class="w-full relative overflow-clip rounded-lg select-none">
          <div
            class="play-button cursor-pointer absolute z-10 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[64px] h-[64px] p-4 lg:w-[100px] lg:h-[100px] lg:p-8 bg-white rounded-full flex justify-center items-center duration-300 hover:bg-secondary-dark">
            <svg class="play w-full h-full translate-x-1" width="30" height="35" viewBox="0 0 30 35" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M29.668 17.5007L0.917969 34.0995V0.901831L29.668 17.5007Z" fill="#031E31" />
            </svg>
            <svg class="pause hidden w-full h-full" width="24" height="36" viewBox="0 0 24 36" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0H10V36H0V0Z" fill="#031E31" />
              <path d="M14 0H24V36H14V0Z" fill="#031E31" />
            </svg>
          </div>
          <video id="video" class="w-full h-full object-cover" muted loop
            poster="@/assets/img/venture_capital/venture_health-tech.png">
            <source src="@/assets/video/video.mp4" type="video/mp4">
          </video>
        </div>
      </div>

      <ul class="flex flex-col gap-8 items-stretch lg:max-w-[400px]">
        <li class="flex items-center gap-8 px-6 py-5 border border-white/10">
          <svg class="min-w-[50px] max-w-[50px]" width="50" height="50" viewBox="0 0 50 50" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" rx="25" fill="#0B273A" />
            <path d="M27.0827 27.082H22.916V36.457H27.0827V27.082Z" stroke="white" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M34.8952 19.791H30.7285V36.4577H34.8952V19.791Z" stroke="white" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M19.2702 31.25H15.1035V36.4583H19.2702V31.25Z" stroke="white" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M34.8965 13.5417L34.8965 15.625L32.8132 17.1875L30.7298 15.625L30.7298 13.5417L34.8965 13.5417Z"
              stroke="white" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div class="flex flex-col">
            <p class="font-black">Dynamisme</p>
            <p class="">Des opportunités centrées sur la recherche de performance pour dynamiser votre portefeuille</p>
          </div>
        </li>
        <li class="flex items-center gap-8 px-6 py-5 border border-white/10">
          <svg class="min-w-[50px] max-w-[50px]" width="50" height="50" viewBox="0 0 50 50" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" rx="25" fill="#0B273A" />
            <g clip-path="url(#clip0_1604_14505)">
              <path d="M27.7344 14.4531H23.0469V19.1406H27.7344V14.4531Z" stroke="white" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M25.3906 22.2656V28.5156" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16.0156 28.5156V25.3906H34.7656V28.5156" stroke="white" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
                d="M16.0156 36.3281C17.31 36.3281 18.3594 35.2788 18.3594 33.9844C18.3594 32.69 17.31 31.6406 16.0156 31.6406C14.7212 31.6406 13.6719 32.69 13.6719 33.9844C13.6719 35.2788 14.7212 36.3281 16.0156 36.3281Z"
                stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M25.3906 36.3281C26.685 36.3281 27.7344 35.2788 27.7344 33.9844C27.7344 32.69 26.685 31.6406 25.3906 31.6406C24.0962 31.6406 23.0469 32.69 23.0469 33.9844C23.0469 35.2788 24.0962 36.3281 25.3906 36.3281Z"
                stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              <path
                d="M34.7656 36.3281C36.06 36.3281 37.1094 35.2788 37.1094 33.9844C37.1094 32.69 36.06 31.6406 34.7656 31.6406C33.4712 31.6406 32.4219 32.69 32.4219 33.9844C32.4219 35.2788 33.4712 36.3281 34.7656 36.3281Z"
                stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_1604_14505">
                <rect width="25" height="25" fill="white" transform="translate(12.5 12.5)" />
              </clipPath>
            </defs>
          </svg>
          <div class="flex flex-col">
            <p class="font-black">Diversification</p>
            <p class="">De l’amorçage au développement, investissez dans des entreprises à différent niveau de maturité
            </p>
          </div>
        </li>
        <li class="flex items-center gap-8 px-6 py-5 border border-white/10">
          <svg class="min-w-[50px] max-w-[50px]" width="50" height="50" viewBox="0 0 50 50" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="50" rx="25" fill="#0B273A" />
            <path
              d="M21.0652 23.4137C20.6891 22.6211 19.8809 22.0703 18.9453 22.0703H15.8203C14.5258 22.0703 13.4766 23.1195 13.4766 24.4141V27.5391L15.0391 28.3203L15.4297 33.7891H19.7266"
              stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M17.3828 19.7266C18.6772 19.7266 19.7266 18.6772 19.7266 17.3828C19.7266 16.0884 18.6772 15.0391 17.3828 15.0391C16.0884 15.0391 15.0391 16.0884 15.0391 17.3828C15.0391 18.6772 16.0884 19.7266 17.3828 19.7266Z"
              stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M29.3262 23.4137C29.7023 22.6211 30.5105 22.0703 31.4461 22.0703H34.5711C35.8656 22.0703 36.9148 23.1195 36.9148 24.4141V27.5391L35.3523 28.3203L34.9617 33.7891H30.6648"
              stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M33.0078 19.7266C34.3022 19.7266 35.3516 18.6772 35.3516 17.3828C35.3516 16.0884 34.3022 15.0391 33.0078 15.0391C31.7134 15.0391 30.6641 16.0884 30.6641 17.3828C30.6641 18.6772 31.7134 19.7266 33.0078 19.7266Z"
              stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M27.5391 36.9141H22.8516L22.4609 30.6641L20.5078 30.2734V25.1953C20.5078 23.4695 21.907 22.0703 23.6328 22.0703H26.7578C28.4836 22.0703 29.8828 23.4695 29.8828 25.1953V30.2734L27.9297 30.6641L27.5391 36.9141Z"
              stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M25.1953 19.7266C26.9212 19.7266 28.3203 18.3275 28.3203 16.6016C28.3203 14.8757 26.9212 13.4766 25.1953 13.4766C23.4694 13.4766 22.0703 14.8757 22.0703 16.6016C22.0703 18.3275 23.4694 19.7266 25.1953 19.7266Z"
              stroke="white" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div class="flex flex-col">
            <p class="font-black">Co-investissement</p>
            <p class="">Des opportunités aux côtés et dans les mêmes conditions que les acteurs professionnels de
              l’investissement</p>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <!-- TODO: Remove MT -->
  <section class="mt-4">
    <div class="flex max-lg:flex-col lg:items-stretch mx-auto w-full">
      <h2 class="lg:hidden text-h2 font-lora font-medium italic uppercase pt-8 px-6 bg-primary-dark text-white lg:mb-20">Le guide du Venture Capital</h2>

      <aside
        class="flex justify-end sticky top-[60px] left-0 z-[10] w-full px-7 py-7 max-md:pb-4 lg:max-w-[36%] lg:min-w-[36%] lg:h-[calc(100vh-60px)] lg:py-20 bg-primary-dark text-white">

        <div class="lg:max-w-[360px]">
          <h2 class="max-lg:hidden text-h2 font-lora font-medium italic uppercase lg:mb-20">Le guide du <br> Venture Capital</h2>
          <nav class="max-lg:sticky max-lg:top-[60px] flex items-stretch gap-6 max-lg:w-screen max-lg:-mx-7 max-lg:flex-col">
            <div class="hidden lg:block scroll-viewer bg-white/20 max-w-[2px] w-[2px] min-w-[2px] relative rounded-full overflow-clip max-md:order-2">
              <div class="bg-secondary-dark w-full h-[35px] rounded-full absolute top-0 left-0 -translate-y-1/2"></div>
            </div>
            <ol class="flex gap-1 justify-start list-decimal scroll-pl-12 snap-x snap-mandatory max-lg:overflow-x-scroll max-lg:overflow-y-clip max-lg:pb-4 max-lg:gap-10 max-lg:px-8 lg:flex-col lg:pl-5">
              <li class="snap-start duration-200 hover:text-secondary-dark text-s max-lg:max-w-[225px] max-lg:min-w-fit"><a href="#venture-1">Le développement duCapital-Risque</a></li>
              <li class="snap-start duration-200 hover:text-secondary-dark text-s max-lg:max-w-[225px] max-lg:min-w-fit"><a href="#venture-2">Différence entre le Capital-Risque et le Capital-Investissement</a></li>
              <li class="snap-start duration-200 hover:text-secondary-dark text-s max-lg:max-w-[225px] max-lg:min-w-fit"><a href="#venture-3">Capital-Risque : les points clés à retenir</a></li>
              <li class="snap-start duration-200 hover:text-secondary-dark text-s max-lg:max-w-[225px] max-lg:min-w-fit"><a href="#venture-4">Les autres formes de Capital-Investissement</a></li>
              <li class="snap-start duration-200 hover:text-secondary-dark text-s max-lg:max-w-[225px] max-lg:min-w-fit"><a href="#venture-5">Les différents stades de maturités d’une startup</a></li>
              <li class="snap-start duration-200 hover:text-secondary-dark text-s max-lg:max-w-[225px] max-lg:min-w-fit"><a href="#venture-6">Comment fonctionne le Capital-Risque</a></li>
              <li class="snap-start duration-200 hover:text-secondary-dark text-s max-lg:max-w-[225px] max-lg:min-w-fit"><a href="#venture-7">L’histoire du Capital-Risque</a></li>
              <li class="snap-start duration-200 hover:text-secondary-dark text-s max-lg:max-w-[225px] max-lg:min-w-fit"><a href="#venture-8">Les acteurs du Capital-Risque</a></li>
              <li class="snap-start duration-200 hover:text-secondary-dark text-s max-lg:max-w-[225px] max-lg:min-w-fit"><a href="#venture-9">Pourquoi Investir dans une startup</a></li>
              <li class="snap-start duration-200 hover:text-secondary-dark text-s max-lg:max-w-[225px] max-lg:min-w-fit"><a href="#venture-10">Une fiscalité attractive</a></li>
              <li class="snap-start duration-200 hover:text-secondary-dark text-s max-lg:max-w-[225px] max-lg:min-w-fit"><a href="#venture-11">Les risques</a></li>
            </ol>
          </nav>
        </div>
      </aside>
      <div class="w-full lg:max-w-[64%]">
        <div data-sticky-section="1" id="venture-1" class="px-8 py-10 w-full lg:-mt-4 lg:px-14 lg:pt-20 lg:pb-16 bg-secondary-neutral">
          <div class="lg:max-w-[720px]">
            <h2 class="text-h2 font-lora text-left mb-6">Le développement du <i>Capital-Risque</i></h2>
  
            <p class="text-justify">Dès sa création, le financement d’une startup est primordial. Les
              fondateurs, leur
              réseau amical
              et familial (love money), dotent l’entreprise de ses premiers fonds propres. Ils sont nécessaires mais très
              rarement suffisants. À ce stade de développement, l’autofinancement ne permettant pas à la société
              d’accompagner sa croissance, les créateurs doivent se tourner vers d’autres sources de financement pour
              assurer le développement de leur entreprise :</p>
  
            <div class="flex flex-col w-full mt-10">
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Les aides publiques
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6">De soutiens publics, tel que la Banque Publique d’Investissement, Bourse French Tech,
                    Régions...</p>
                </div>
              </div>
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Les concours
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6">Publics ou privés d’innovation ou de création d’entreprise.</p>
                </div>
              </div>
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  L’emprunt bancaire
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6">Prêts bancaires classiques, obligations convertibles...</p>
                </div>
              </div>
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Le capital-risque
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6">Le capital-risque
                    Fonds de venture capital qui prennent une participation dans l’entreprise.</p>
                </div>
              </div>
            </div>

            <p class="text-justify mt-6">Les 2 premières sources de financement étant limitées, et l’emprunt auprès d’établissements bancaires contraints par les garanties exigées, le capital-risque est devenu incontournable pour les entreprises innovantes.</p>
  
          </div>
        </div>
        <div data-sticky-section="2" id="venture-2" class="px-8 py-10 w-full lg:-mt-4 lg:px-14 lg:pt-20 lg:pb-16 bg-white border-y border-secondary-light">
          <div class="lg:max-w-[720px]">
            <h2 class="text-h2 font-lora text-left mb-6">Différence entre le <i>Capital-Risque et le Capital
                Investissement</i></h2>
            <p class="text-justify">Deux termes fréquemment confondus sont le capital-risque (ou venture
              capital) et le capital-investissement (private equity). Bien que ces deux concepts soient liés, il est
              important de comprendre leurs différences pour les investisseurs, les entrepreneurs et les professionnels de
              la finance.</p>
            <div class="flex flex-col w-full mt-10">
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Le capital-investissement
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">Le capital-investissement, également connu sous le nom de private equity,
                    fait référence
                    aux fonds d'investissement qui acquièrent et gèrent des participations dans des entreprises existantes.
                    Au lieu d'acheter des actions de sociétés cotées en bourse, les sociétés de capital-investissement
                    investissent dans des entreprises privées ou retirent des entreprises de la cote. L'objectif est
                    d'améliorer, de développer et de revendre ces entreprises avec un bénéfice.
                    <br><br>
                    Les stratégies utilisées peuvent inclure :
                  <ul class="pl-6 list-disc">
                    <li>la restructuration des opérations</li>
                    <li>l’amélioration de la gestion</li>
                    <li>le lancement de nouvelles lignes de produits</li>
                    <li>l’expansion vers de nouveaux marchés</li>
                  </ul>
                  <br><br>
                  Les fonds de capital-investissement peuvent prendre une participation de contrôle ou une participation
                  majoritaire dans une entreprise.</p>
                </div>
              </div>
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Le capital-risque
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">Le capital-risque est une branche du capital-investissement qui se concentre
                    sur les investissements dans des startups ou des entreprises en croissance rapide. Ces investissements
                    sont à haut risque, mais offrent un potentiel de rendement plus élevé. Les investisseurs en
                    capital-risque fournissent des fonds en échange de participations, dans l'espoir que ces startups
                    deviennent très rentables à l'avenir ou que leurs parts se valorisent.
                    <br><br>
                    Les investissements en capital-risque se caractérisent généralement par :
                  <ul class="pl-6 list-disc">
                    <li>Le financement initial pour démarrer l'entreprise</li>
                    <li>Les séries A, B, C, etc. pour soutenir la croissance de l'entreprise</li>
                    <li>Une stratégie de sortie, souvent par une vente de l'entreprise ou une introduction en bourse</li>
                  </ul>
                  <br><br>
                  Les fonds de capital-risque prennent généralement une participation minoritaire dans les entreprises dans
                  lesquelles ils investissent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-sticky-section="3" id="venture-3" class="px-8 py-10 w-full lg:-mt-4 lg:px-14 lg:pt-20 lg:pb-16 bg-secondary-neutral">
          <div class="lg:max-w-[720px]">
            <h2 class="text-h2 font-lora text-left mb-6"><i>Venture Capital</i> : les points clés à retenir</h2>
            <p class="text-justify">Il est important de comprendre les caractéristiques clés du venture capital (ou
              capital-risque) pour prendre des décisions éclairées en tant qu'investisseur ou entrepreneur.</p>
            <div class="flex flex-col w-full mt-10">
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Entreprise cibles
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">Le capital-risque se concentre sur les startups et les entreprises en
                    développement qui ont un fort potentiel de croissance. Les investisseurs en capital-risque prennent
                    généralement une participation minoritaire dans ces entreprises.</p>
                </div>
              </div>
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Industries cibles
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">
                    Les investisseurs en capital-risque se concentrent principalement sur les secteurs à forte croissance
                    tels que la technologie, les biotechnologies et les énergies alternatives. Ils recherchent des
                    entreprises innovantes avec un fort potentiel de développement.
                  </p>
                </div>
              </div>
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Objectifs de retour sur investissements
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">
                    Les sociétés de capital-risque sont conscientes que la plupart des startups échoueront, mais elles
                    recherchent une entreprise qui connaîtra une croissance exponentielle et générera un rendement élevé
                    pour compenser les pertes des autres investissements.
                  </p>
                </div>
              </div>
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Tailles des investissements
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">
                    Les investissements en capital-risque sont généralement de moins de 10 millions d'euros. Cependant,
                    certains fonds de capital-risque peuvent investir davantage selon le potentiel de croissance d'une
                    entreprise. En comparaison, dans d’autres secteurs du private equity, les investissements peuvent
                    atteindre plusieurs millions, voire plusieurs milliards d'euros.
                  </p>
                </div>
              </div>
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Horizon de liquidités
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">
                    Les fonds de capital-risque ont généralement un horizon de liquidités plus court que le private equity
                    traditionnel, avec une sortie prévue après environ 4 ans. Ils cherchent à investir dans des entreprises
                    en croissance rapide qui peuvent atteindre rapidement une valeur élevée.
                  </p>
                </div>
              </div>
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Structure du financement
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">
                    Les investisseurs en capital-risque fournissent principalement des capitaux propres aux entreprises dans
                    lesquelles ils investissent.
                  </p>
                </div>
              </div>
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Rôle de l’investisseur
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">
                    Les investisseurs en capital-risque apportent souvent des conseils, un soutien stratégique et un réseau
                    de contacts aux startups dans lesquelles ils investissent. Ils peuvent également surveiller les dépenses
                    de trésorerie et aider les entrepreneurs à prendre les bonnes décisions stratégiques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-sticky-section="4" id="venture-4" class="px-8 py-10 w-full lg:-mt-4 lg:px-14 lg:pt-20 lg:pb-16 bg-white border-y border-secondary-light">
          <div class="lg:max-w-[720px]">
            <h2 class="text-h2 font-lora text-left mb-6">Les autres formes de <i>Capital-Investissement</i></h2>
            <div class="flex flex-col w-full mt-10">
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Le capital-développement
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">Le capital-développement est une forme de capital-investissement destinée aux
                    entreprises qui ont déjà atteint un certain niveau de rentabilité et qui souhaitent passer à une
                    nouvelle étape de leur développement. Contrairement au capital-risque, le capital-développement
                    s'adresse à des entreprises plus matures, qui ont déjà démontré leur viabilité commerciale.
                    <br><br>
                    Les investisseurs en capital-développement fournissent des fonds propres ou quasi-fonds propres à ces
                    entreprises, leur permettant d'augmenter leurs capacités de production, d'améliorer leurs activités de
                    vente, de développer de nouveaux produits et services, de financer des acquisitions ou d'accroître leur
                    fonds de roulement. Ces investissements visent à soutenir la croissance et l'expansion des entreprises
                    déjà établies, en leur donnant les moyens financiers nécessaires pour atteindre leurs objectifs de
                    développement.
                  </p>
                </div>
              </div>
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Le capital-transmission
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">Le capital-transmission intervient lors de la cession ou du rachat d'une
                    entreprise. Il s'agit d'une forme de capital-investissement qui vise à faciliter la transmission
                    d'entreprises familiales ou à soutenir leur redressement en cas de difficultés financières. Les
                    investisseurs en capital-transmission peuvent être les dirigeants de l'entreprise ou des investisseurs
                    extérieurs, tels que des fonds d'investissement.
                    <br><br>
                    L'objectif du capital-transmission est de permettre la continuité de l'entreprise tout en offrant une
                    sortie aux actionnaires sortants. Il peut être réalisé sous différentes formes, telles que des
                    opérations de rachat d'entreprise par les dirigeants (management buy-out), des opérations de rachat par
                    des investisseurs extérieurs (buy-in), ou des opérations de transmission familiale. Les investisseurs en
                    capital-transmission apportent non seulement des fonds, mais également leur expertise en matière de
                    gestion et de redressement d'entreprise, afin d'assurer la pérennité et la croissance de l'entreprise.
                  </p>
                </div>
              </div>
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Le capital retournement ou restructuration
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">Également connu sous le nom de capital restructuration, il intervient lorsque
                    l'entreprise traverse une crise financière ou opérationnelle et nécessite un soutien financier pour se
                    redresser. Les investisseurs en capital retournement injectent des fonds propres dans l'entreprise en
                    difficulté, afin de lui permettre de surmonter ses problèmes et de retrouver une situation financière
                    saine.
                    <br><br>
                    L'objectif du capital retournement est de restructurer l'entreprise en difficulté, en mettant en place
                    des mesures correctives pour améliorer sa rentabilité et sa compétitivité. Les investisseurs en capital
                    retournement peuvent également apporter leur expertise en matière de gestion et de restructuration
                    d'entreprise, afin d'accompagner l'entreprise dans sa phase de redressement.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-fit mx-auto mt-6 lg:ml-10 lg:mt-10">
              <a href="https://share.hsforms.com/1SrQQ3Wv0TqmrD9p1zaZmwQ1fcvu"
                class="tw-cta tw-cta--secondary text-white w-full !py-3 max-w-[287px]">
                Découvrir nos opportunités
              </a>
            </div>
          </div>
        </div>
        <div data-sticky-section="5" id="venture-5" class="py-10 w-full lg:-mt-4 lg:pt-20 lg:pb-16 bg-primary-dark text-white">
          <div class="lg:max-w-[720px] px-8 lg:px-14">
            <h2 class="text-h2 font-lora text-left mb-6">Les stades de maturité d’une <i>startup</i></h2>
            <p class="mt-6 text-justify">Les startups connaissent différents stades de maturité au cours de leur parcours.
              De leur phase initiale de
              développement à leur expansion à grande échelle, ces étapes jouent un rôle crucial dans la progression et la
              réussite de l'entreprise. Dans cet article, nous explorerons en détail les différentes étapes de maturité des
              startups, en mettant l'accent sur les phases de pré-amorçage, de seed, de série A, de série B et de série C.
            </p>
          </div>
          <div class="w-full mt-6">
            <div class="px-8 lg:px-14 flex items-center gap-2 justify-end">
              <button data-carousel-control="left" type="button" class="flex items-center justify-center p-1 cursor-pointer bg-white w-[50px] aspect-square rounded-full duration-200 hover:opacity-60">
                <svg class="rotate-180" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1886 15.5629L15.4599 9.48416C15.1758 9.18271 14.7011 9.16864 14.3997 9.45272C14.0982 9.73681 14.0842 10.2115 14.3683 10.5129L19.6158 16.0812L14.3683 21.6494C14.0842 21.9508 14.0982 22.4255 14.3997 22.7096C14.7011 22.9937 15.1758 22.9796 15.4599 22.6782L21.1886 16.5994C21.2447 16.5407 21.2895 16.4751 21.323 16.4053C21.4202 16.2022 21.4212 15.9636 21.324 15.7591C21.2904 15.6885 21.2453 15.6221 21.1886 15.5629Z" fill="#01192A"/>
                  <path d="M21.1886 15.5629L20.8975 15.8373L20.8997 15.8396L21.1886 15.5629ZM15.4599 9.48416L15.751 9.20982L15.751 9.20982L15.4599 9.48416ZM14.3997 9.45272L14.1253 9.16162L14.1253 9.16162L14.3997 9.45272ZM14.3683 10.5129L14.6594 10.2386L14.6594 10.2386L14.3683 10.5129ZM19.6158 16.0812L19.9069 16.3555C20.0521 16.2014 20.0521 15.9609 19.9069 15.8068L19.6158 16.0812ZM14.3683 21.6494L14.6594 21.9237H14.6594L14.3683 21.6494ZM14.3997 22.7096L14.1253 23.0007L14.3997 22.7096ZM15.4599 22.6782L15.1688 22.4038H15.1688L15.4599 22.6782ZM21.1886 16.5994L20.8997 16.3227L20.8975 16.325L21.1886 16.5994ZM21.323 16.4053L20.9622 16.2325L21.323 16.4053ZM21.324 15.7591L20.9627 15.9307L20.9627 15.9309L21.324 15.7591ZM21.4797 15.2886L15.751 9.20982L15.1688 9.75849L20.8975 15.8373L21.4797 15.2886ZM15.751 9.20982C15.3154 8.7476 14.5876 8.72603 14.1253 9.16162L14.674 9.74382C14.8147 9.61125 15.0362 9.61782 15.1688 9.75849L15.751 9.20982ZM14.1253 9.16162C13.6631 9.59722 13.6416 10.325 14.0772 10.7873L14.6594 10.2386C14.5268 10.0979 14.5333 9.8764 14.674 9.74382L14.1253 9.16162ZM14.0772 10.7873L19.3247 16.3555L19.9069 15.8068L14.6594 10.2386L14.0772 10.7873ZM14.6594 21.9237L19.9069 16.3555L19.3247 15.8068L14.0772 21.3751L14.6594 21.9237ZM14.674 22.4185C14.5333 22.2859 14.5268 22.0644 14.6594 21.9237L14.0772 21.3751C13.6416 21.8373 13.6631 22.5651 14.1253 23.0007L14.674 22.4185ZM15.1688 22.4038C15.0362 22.5445 14.8147 22.5511 14.674 22.4185L14.1253 23.0007C14.5876 23.4363 15.3154 23.4147 15.751 22.9525L15.1688 22.4038ZM20.8975 16.325L15.1688 22.4038L15.751 22.9525L21.4797 16.8737L20.8975 16.325ZM21.4776 16.876C21.5634 16.7863 21.6323 16.6855 21.6838 16.578L20.9622 16.2325C20.9468 16.2647 20.9261 16.2952 20.8997 16.3227L21.4776 16.876ZM21.6838 16.578C21.8329 16.2666 21.8346 15.9014 21.6852 15.5873L20.9627 15.9309C21.0079 16.0259 21.0076 16.1378 20.9622 16.2325L21.6838 16.578ZM20.8997 15.8396C20.9263 15.8674 20.9472 15.8982 20.9627 15.9307L21.6853 15.5875C21.6337 15.4788 21.5642 15.3769 21.4775 15.2863L20.8997 15.8396Z" fill="#01192A"/>
                </svg>
              </button>
              <button data-carousel-control="right" type="button" class="flex items-center justify-center p-1 cursor-pointer bg-white w-[50px] aspect-square rounded-full duration-200 hover:opacity-60">
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1886 15.5629L15.4599 9.48416C15.1758 9.18271 14.7011 9.16864 14.3997 9.45272C14.0982 9.73681 14.0842 10.2115 14.3683 10.5129L19.6158 16.0812L14.3683 21.6494C14.0842 21.9508 14.0982 22.4255 14.3997 22.7096C14.7011 22.9937 15.1758 22.9796 15.4599 22.6782L21.1886 16.5994C21.2447 16.5407 21.2895 16.4751 21.323 16.4053C21.4202 16.2022 21.4212 15.9636 21.324 15.7591C21.2904 15.6885 21.2453 15.6221 21.1886 15.5629Z" fill="#01192A"/>
                  <path d="M21.1886 15.5629L20.8975 15.8373L20.8997 15.8396L21.1886 15.5629ZM15.4599 9.48416L15.751 9.20982L15.751 9.20982L15.4599 9.48416ZM14.3997 9.45272L14.1253 9.16162L14.1253 9.16162L14.3997 9.45272ZM14.3683 10.5129L14.6594 10.2386L14.6594 10.2386L14.3683 10.5129ZM19.6158 16.0812L19.9069 16.3555C20.0521 16.2014 20.0521 15.9609 19.9069 15.8068L19.6158 16.0812ZM14.3683 21.6494L14.6594 21.9237H14.6594L14.3683 21.6494ZM14.3997 22.7096L14.1253 23.0007L14.3997 22.7096ZM15.4599 22.6782L15.1688 22.4038H15.1688L15.4599 22.6782ZM21.1886 16.5994L20.8997 16.3227L20.8975 16.325L21.1886 16.5994ZM21.323 16.4053L20.9622 16.2325L21.323 16.4053ZM21.324 15.7591L20.9627 15.9307L20.9627 15.9309L21.324 15.7591ZM21.4797 15.2886L15.751 9.20982L15.1688 9.75849L20.8975 15.8373L21.4797 15.2886ZM15.751 9.20982C15.3154 8.7476 14.5876 8.72603 14.1253 9.16162L14.674 9.74382C14.8147 9.61125 15.0362 9.61782 15.1688 9.75849L15.751 9.20982ZM14.1253 9.16162C13.6631 9.59722 13.6416 10.325 14.0772 10.7873L14.6594 10.2386C14.5268 10.0979 14.5333 9.8764 14.674 9.74382L14.1253 9.16162ZM14.0772 10.7873L19.3247 16.3555L19.9069 15.8068L14.6594 10.2386L14.0772 10.7873ZM14.6594 21.9237L19.9069 16.3555L19.3247 15.8068L14.0772 21.3751L14.6594 21.9237ZM14.674 22.4185C14.5333 22.2859 14.5268 22.0644 14.6594 21.9237L14.0772 21.3751C13.6416 21.8373 13.6631 22.5651 14.1253 23.0007L14.674 22.4185ZM15.1688 22.4038C15.0362 22.5445 14.8147 22.5511 14.674 22.4185L14.1253 23.0007C14.5876 23.4363 15.3154 23.4147 15.751 22.9525L15.1688 22.4038ZM20.8975 16.325L15.1688 22.4038L15.751 22.9525L21.4797 16.8737L20.8975 16.325ZM21.4776 16.876C21.5634 16.7863 21.6323 16.6855 21.6838 16.578L20.9622 16.2325C20.9468 16.2647 20.9261 16.2952 20.8997 16.3227L21.4776 16.876ZM21.6838 16.578C21.8329 16.2666 21.8346 15.9014 21.6852 15.5873L20.9627 15.9309C21.0079 16.0259 21.0076 16.1378 20.9622 16.2325L21.6838 16.578ZM20.8997 15.8396C20.9263 15.8674 20.9472 15.8982 20.9627 15.9307L21.6853 15.5875C21.6337 15.4788 21.5642 15.3769 21.4775 15.2863L20.8997 15.8396Z" fill="#01192A"/>
                </svg>
              </button>
            </div>

            <div class="flex justify-start snap-x snap-mandatory overflow-x-scroll overflow-y-clip scrollbar-hide mt-10 px-8 gap-8 scroll-pl-8 lg:gap-14 lg:scroll-pl-14 lg:px-14">
              <article class="flex flex-col w-full bg-primary-light border border-white/10 rounded-lg snap-start p-6 max-w-[90%] min-w-[90%] lg:p-12 lg:max-w-[570px] lg:min-w-[570px]">
                  <p class="font-medium text-[28px] text-white/20 select-none">01.</p>
                  <h3 class="mt-6 mb-4 font-semibold text-xl">Phase de Pré-Amorçage : les premiers pas vers la réalisation de l’idée</h3>
                  <p class="text-justify text-m">
                    La phase de pré-amorçage, également connue sous le nom de capital amorçage, marque les premiers pas d'une startup vers la réalisation de son idée. À ce stade, l'entreprise est encore en phase de recherche, de développement et de mise au point de son produit ou service. Les besoins de financement se concentrent notamment sur les salaires, les équipements et les dépenses de fonctionnement. Les montants levés lors de la phase de pré-amorçage sont généralement de l'ordre de quelques centaines de milliers d'euros. Les investisseurs à ce stade sont souvent des amis, des membres de la famille (love-money), des business angels ou des fonds de capital-risque.
                  </p>
              </article>
              <article class="flex flex-col w-full bg-primary-light border border-white/10 rounded-lg snap-start p-6 max-w-[90%] min-w-[90%] lg:p-12 lg:max-w-[570px] lg:min-w-[570px]">
                <p class="font-medium text-[28px] text-white/20 select-none">02.</p>
                <h3 class="mt-6 mb-4 font-semibold text-xl">Phase de Seed : le premier tour de table pour lancer l’activité</h3>
                <p class="text-justify text-m">
                  La phase de seed, ou premier tour de table, intervient lorsque la startup a finalisé son produit ou service et est prête à le lancer sur le marché. Les fonds levés lors de cette étape sont principalement destinés à financer l'acquisition de clients, le recrutement d'équipes de vente et de support, ainsi que les autres dépenses liées à l'activité de l'entreprise. Les montants levés lors de la phase de seed varient généralement de quelques centaines de milliers d'euros à un million d'euros.
                </p>
              </article>
              <article class="flex flex-col w-full bg-primary-light border border-white/10 rounded-lg snap-start p-6 max-w-[90%] min-w-[90%] lg:p-12 lg:max-w-[570px] lg:min-w-[570px]">
                <p class="font-medium text-[28px] text-white/20 select-none">03.</p>
                <h3 class="mt-6 mb-4 font-semibold text-xl">Phase de Série A : accélérer la croissance et atteindre la rentabilité</h3>
                <p class="text-justify text-m">
                  La phase de série A marque une étape clé dans la croissance de la startup. À ce stade, l'entreprise a déjà un produit ou service sur le marché et génère un chiffre d'affaires. L'objectif de la série A est d'accélérer la croissance de l'entreprise et de tendre vers la rentabilité. Les fonds levés lors de cette étape sont utilisés pour développer l'activité à l'échelle nationale, voire internationale. Les montants levés lors de la série A varient généralement de quelques millions d'euros.
                </p>
              </article>
              <article class="flex flex-col w-full bg-primary-light border border-white/10 rounded-lg snap-start p-6 max-w-[90%] min-w-[90%] lg:p-12 lg:max-w-[570px] lg:min-w-[570px]">
                <p class="font-medium text-[28px] text-white/20 select-none">04.</p>
                <h3 class="mt-6 mb-4 font-semibold text-xl">Phase de Série B : consolider la position de l’entreprise et se préparer à l’expansion</h3>
                <p class="text-justify text-m">
                  La phase de série B intervient après la série A et vise à consolider la position de l'entreprise sur le marché. À ce stade, l'entreprise a déjà une certaine traction et un modèle économique cohérent. Les fonds levés lors de la série B sont principalement utilisés pour l'expansion de l'entreprise, que ce soit par le biais d'internationalisation, d'acquisitions ou d'intégrations verticales. Les montants levés lors de la série B peuvent atteindre plusieurs dizaines ou centaines de millions d'euros.
                </p>
              </article>
              <article class="flex flex-col w-full bg-primary-light border border-white/10 rounded-lg snap-start p-6 max-w-[90%] min-w-[90%] lg:p-12 lg:max-w-[570px] lg:min-w-[570px]">
                <p class="font-medium text-[28px] text-white/20 select-none">05.</p>
                <h3 class="mt-6 mb-4 font-semibold text-xl">Phase de Série C : accélérer et s’internationaliser</h3>
                <p class="text-justify text-m">
                  À ce stade, l'entreprise peut continuer à croître rapidement, attaquer de nouveaux marchés et avoir une stratégie agressive envers ses concurrents. Les montants levés lors de la série C peuvent aller de quelques dizaines à des centaines de millions d'euros. Les investissements à ce stade sont généralement réalisés par des fonds spéculatifs et marquent souvent le moment des introductions en bourse.
                  <br><br>
                  Chaque phase de financement correspond à des objectifs spécifiques et nécessite une stratégie adaptée. En comprenant les caractéristiques et les besoins de chaque étape, les entrepreneurs et les investisseurs peuvent prendre des décisions éclairées pour soutenir la croissance et la progression des startups.
                </p>
              </article>
            </div>
          </div>
        </div>
        <div data-sticky-section="6" id="venture-6" class="py-10 w-full lg:-mt-4 lg:pt-20 lg:pb-16 bg-secondary-neutral">
          <div class="lg:max-w-[720px] px-8 lg:px-14">
            <h2 class="text-h2 font-lora text-left mb-6">Comment fonctionne le <i>Capital-Risque</i></h2>
            <p class="text-justify">
              Le processus de capital-risque implique plusieurs étapes clés. Tout d'abord, une jeune entreprise en recherche
              de financement soumet son projet à des investisseurs en capital-risque. Ces investisseurs, souvent des fonds
              spécialisés ou des business angels, étudient le potentiel de croissance de l'entreprise et évaluent les
              risques associés.
              <br><br>
              Si le projet est jugé prometteur, les investisseurs entament une phase de négociation avec l'entreprise. Ils
              déterminent les conditions de l'investissement, telles que le montant des fonds à investir, la part de capital
              à acquérir et les éventuels droits de décision dans la gestion de l'entreprise.
              <br><br>
              Une fois les négociations finalisées, les investisseurs fournissent les fonds à l'entreprise en échange d'une
              participation au capital. Cette injection de capital permet à l'entreprise de financer ses opérations, de
              développer ses produits ou services, d'élargir sa clientèle et de poursuivre sa croissance.
            </p>
            <div class="flex flex-col w-full mt-10">
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Le processus d’investissement en Capital-Risque
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">Le processus d'investissement en capital-risque comporte plusieurs étapes
                    clés. Voici les principales :
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full mt-6">
            <div class="flex items-center gap-2 justify-end px-8 lg:px-14">
              <button data-carousel-control="left" type="button" class="flex items-center justify-center p-1 cursor-pointer bg-white w-[50px] aspect-square rounded-full duration-200 hover:opacity-60">
                <svg class="rotate-180" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1886 15.5629L15.4599 9.48416C15.1758 9.18271 14.7011 9.16864 14.3997 9.45272C14.0982 9.73681 14.0842 10.2115 14.3683 10.5129L19.6158 16.0812L14.3683 21.6494C14.0842 21.9508 14.0982 22.4255 14.3997 22.7096C14.7011 22.9937 15.1758 22.9796 15.4599 22.6782L21.1886 16.5994C21.2447 16.5407 21.2895 16.4751 21.323 16.4053C21.4202 16.2022 21.4212 15.9636 21.324 15.7591C21.2904 15.6885 21.2453 15.6221 21.1886 15.5629Z" fill="#01192A"/>
                  <path d="M21.1886 15.5629L20.8975 15.8373L20.8997 15.8396L21.1886 15.5629ZM15.4599 9.48416L15.751 9.20982L15.751 9.20982L15.4599 9.48416ZM14.3997 9.45272L14.1253 9.16162L14.1253 9.16162L14.3997 9.45272ZM14.3683 10.5129L14.6594 10.2386L14.6594 10.2386L14.3683 10.5129ZM19.6158 16.0812L19.9069 16.3555C20.0521 16.2014 20.0521 15.9609 19.9069 15.8068L19.6158 16.0812ZM14.3683 21.6494L14.6594 21.9237H14.6594L14.3683 21.6494ZM14.3997 22.7096L14.1253 23.0007L14.3997 22.7096ZM15.4599 22.6782L15.1688 22.4038H15.1688L15.4599 22.6782ZM21.1886 16.5994L20.8997 16.3227L20.8975 16.325L21.1886 16.5994ZM21.323 16.4053L20.9622 16.2325L21.323 16.4053ZM21.324 15.7591L20.9627 15.9307L20.9627 15.9309L21.324 15.7591ZM21.4797 15.2886L15.751 9.20982L15.1688 9.75849L20.8975 15.8373L21.4797 15.2886ZM15.751 9.20982C15.3154 8.7476 14.5876 8.72603 14.1253 9.16162L14.674 9.74382C14.8147 9.61125 15.0362 9.61782 15.1688 9.75849L15.751 9.20982ZM14.1253 9.16162C13.6631 9.59722 13.6416 10.325 14.0772 10.7873L14.6594 10.2386C14.5268 10.0979 14.5333 9.8764 14.674 9.74382L14.1253 9.16162ZM14.0772 10.7873L19.3247 16.3555L19.9069 15.8068L14.6594 10.2386L14.0772 10.7873ZM14.6594 21.9237L19.9069 16.3555L19.3247 15.8068L14.0772 21.3751L14.6594 21.9237ZM14.674 22.4185C14.5333 22.2859 14.5268 22.0644 14.6594 21.9237L14.0772 21.3751C13.6416 21.8373 13.6631 22.5651 14.1253 23.0007L14.674 22.4185ZM15.1688 22.4038C15.0362 22.5445 14.8147 22.5511 14.674 22.4185L14.1253 23.0007C14.5876 23.4363 15.3154 23.4147 15.751 22.9525L15.1688 22.4038ZM20.8975 16.325L15.1688 22.4038L15.751 22.9525L21.4797 16.8737L20.8975 16.325ZM21.4776 16.876C21.5634 16.7863 21.6323 16.6855 21.6838 16.578L20.9622 16.2325C20.9468 16.2647 20.9261 16.2952 20.8997 16.3227L21.4776 16.876ZM21.6838 16.578C21.8329 16.2666 21.8346 15.9014 21.6852 15.5873L20.9627 15.9309C21.0079 16.0259 21.0076 16.1378 20.9622 16.2325L21.6838 16.578ZM20.8997 15.8396C20.9263 15.8674 20.9472 15.8982 20.9627 15.9307L21.6853 15.5875C21.6337 15.4788 21.5642 15.3769 21.4775 15.2863L20.8997 15.8396Z" fill="#01192A"/>
                </svg>
              </button>
              <button data-carousel-control="right" type="button" class="flex items-center justify-center p-1 cursor-pointer bg-white w-[50px] aspect-square rounded-full duration-200 hover:opacity-60">
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1886 15.5629L15.4599 9.48416C15.1758 9.18271 14.7011 9.16864 14.3997 9.45272C14.0982 9.73681 14.0842 10.2115 14.3683 10.5129L19.6158 16.0812L14.3683 21.6494C14.0842 21.9508 14.0982 22.4255 14.3997 22.7096C14.7011 22.9937 15.1758 22.9796 15.4599 22.6782L21.1886 16.5994C21.2447 16.5407 21.2895 16.4751 21.323 16.4053C21.4202 16.2022 21.4212 15.9636 21.324 15.7591C21.2904 15.6885 21.2453 15.6221 21.1886 15.5629Z" fill="#01192A"/>
                  <path d="M21.1886 15.5629L20.8975 15.8373L20.8997 15.8396L21.1886 15.5629ZM15.4599 9.48416L15.751 9.20982L15.751 9.20982L15.4599 9.48416ZM14.3997 9.45272L14.1253 9.16162L14.1253 9.16162L14.3997 9.45272ZM14.3683 10.5129L14.6594 10.2386L14.6594 10.2386L14.3683 10.5129ZM19.6158 16.0812L19.9069 16.3555C20.0521 16.2014 20.0521 15.9609 19.9069 15.8068L19.6158 16.0812ZM14.3683 21.6494L14.6594 21.9237H14.6594L14.3683 21.6494ZM14.3997 22.7096L14.1253 23.0007L14.3997 22.7096ZM15.4599 22.6782L15.1688 22.4038H15.1688L15.4599 22.6782ZM21.1886 16.5994L20.8997 16.3227L20.8975 16.325L21.1886 16.5994ZM21.323 16.4053L20.9622 16.2325L21.323 16.4053ZM21.324 15.7591L20.9627 15.9307L20.9627 15.9309L21.324 15.7591ZM21.4797 15.2886L15.751 9.20982L15.1688 9.75849L20.8975 15.8373L21.4797 15.2886ZM15.751 9.20982C15.3154 8.7476 14.5876 8.72603 14.1253 9.16162L14.674 9.74382C14.8147 9.61125 15.0362 9.61782 15.1688 9.75849L15.751 9.20982ZM14.1253 9.16162C13.6631 9.59722 13.6416 10.325 14.0772 10.7873L14.6594 10.2386C14.5268 10.0979 14.5333 9.8764 14.674 9.74382L14.1253 9.16162ZM14.0772 10.7873L19.3247 16.3555L19.9069 15.8068L14.6594 10.2386L14.0772 10.7873ZM14.6594 21.9237L19.9069 16.3555L19.3247 15.8068L14.0772 21.3751L14.6594 21.9237ZM14.674 22.4185C14.5333 22.2859 14.5268 22.0644 14.6594 21.9237L14.0772 21.3751C13.6416 21.8373 13.6631 22.5651 14.1253 23.0007L14.674 22.4185ZM15.1688 22.4038C15.0362 22.5445 14.8147 22.5511 14.674 22.4185L14.1253 23.0007C14.5876 23.4363 15.3154 23.4147 15.751 22.9525L15.1688 22.4038ZM20.8975 16.325L15.1688 22.4038L15.751 22.9525L21.4797 16.8737L20.8975 16.325ZM21.4776 16.876C21.5634 16.7863 21.6323 16.6855 21.6838 16.578L20.9622 16.2325C20.9468 16.2647 20.9261 16.2952 20.8997 16.3227L21.4776 16.876ZM21.6838 16.578C21.8329 16.2666 21.8346 15.9014 21.6852 15.5873L20.9627 15.9309C21.0079 16.0259 21.0076 16.1378 20.9622 16.2325L21.6838 16.578ZM20.8997 15.8396C20.9263 15.8674 20.9472 15.8982 20.9627 15.9307L21.6853 15.5875C21.6337 15.4788 21.5642 15.3769 21.4775 15.2863L20.8997 15.8396Z" fill="#01192A"/>
                </svg>
              </button>
            </div>

            <div class="flex justify-start snap-x snap-mandatory overflow-x-scroll overflow-y-clip scrollbar-hide mt-10 px-8 gap-8 scroll-pl-8 lg:gap-14 lg:scroll-pl-14 lg:px-14">
              <article class="flex flex-col w-full bg-secondary-lighter border border-secondary-light rounded-lg snap-start p-6 max-w-[90%] min-w-[90%] lg:p-12 lg:max-w-[570px] lg:min-w-[570px]">
                <p class="font-medium text-[28px] text-[#E2D9CD] select-none">01.</p>
                <h3 class="mt-6 mb-4 font-semibold text-xl">Sourcing des opportunités d’investissement</h3>
                <p class="text-justify text-m">
                  La première étape du processus consiste à identifier des opportunités d'investissement intéressantes. Les investisseurs en capital-risque utilisent différentes méthodes pour repérer ces opportunités, telles que la veille médiatique, les bases de données de startups, les rencontres et les recommandations de leur réseau professionnel. L'objectif est d'identifier des entreprises prometteuses avec un fort potentiel de croissance.
                </p>
              </article>
              <article class="flex flex-col w-full bg-secondary-lighter border border-secondary-light rounded-lg snap-start p-6 max-w-[90%] min-w-[90%] lg:p-12 lg:max-w-[570px] lg:min-w-[570px]">
                <p class="font-medium text-[28px] text-[#E2D9CD] select-none">02.</p>
                <h3 class="mt-6 mb-4 font-semibold text-xl">Évaluation des Opportunités d’investissement</h3>
                <p class="text-justify text-m">
                  Une fois les opportunités d'investissement identifiées, les investisseurs en capital-risque procèdent à une évaluation approfondie de chaque entreprise. Cette évaluation comprend une analyse de l'équipe dirigeante, du modèle commercial, du marché cible, des perspectives de croissance et de la concurrence. Les investisseurs peuvent également rencontrer les fondateurs de l'entreprise pour mieux comprendre leur vision et leur stratégie.
                </p>
              </article>
              <article class="flex flex-col w-full bg-secondary-lighter border border-secondary-light rounded-lg snap-start p-6 max-w-[90%] min-w-[90%] lg:p-12 lg:max-w-[570px] lg:min-w-[570px]">
                <p class="font-medium text-[28px] text-[#E2D9CD] select-none">03.</p>
                <h3 class="mt-6 mb-4 font-semibold text-xl">Due Diligence</h3>
                <p class="text-justify text-m">
                  La due diligence est une étape essentielle du processus d'investissement en capital-risque. Elle implique une vérification approfondie de tous les aspects de l'entreprise, tels que les états financiers, les contrats, les brevets, les litiges en cours, les aspects juridiques et les risques potentiels. Cette étape est souvent réalisée en collaboration avec des experts externes, tels que des avocats et des comptables, pour garantir une évaluation objective de l'entreprise.
                </p>
              </article>
              <article class="flex flex-col w-full bg-secondary-lighter border border-secondary-light rounded-lg snap-start p-6 max-w-[90%] min-w-[90%] lg:p-12 lg:max-w-[570px] lg:min-w-[570px]">
                <p class="font-medium text-[28px] text-[#E2D9CD] select-none">04.</p>
                <h3 class="mt-6 mb-4 font-semibold text-xl">Négociation des termes de l’investissement</h3>
                <p class="text-justify text-m">
                  Une fois que les investisseurs ont décidé d'investir dans une entreprise, ils entament des négociations sur les termes de l'investissement. Cela comprend la valorisation de l'entreprise, les droits des actionnaires, les modalités de gouvernance et les mécanismes de sortie potentiels. Les investisseurs cherchent à obtenir les meilleures conditions possibles pour protéger leur investissement et maximiser leur retour sur investissement.
                </p>
              </article>
              <article class="flex flex-col w-full bg-secondary-lighter border border-secondary-light rounded-lg snap-start p-6 max-w-[90%] min-w-[90%] lg:p-12 lg:max-w-[570px] lg:min-w-[570px]">
                <p class="font-medium text-[28px] text-[#E2D9CD] select-none">05.</p>
                <h3 class="mt-6 mb-4 font-semibold text-xl">Closing de l’Investissement</h3>
                <p class="text-justify text-m">
                  Une fois les termes de l'investissement convenus, les investisseurs procèdent à la clôture de l'investissement. Cela implique la rédaction et la signature des documents juridiques, tels que les accords d'investissement, les statuts de l'entreprise et les accords de gouvernance. Une fois cette étape terminée, les fonds sont transférés à l'entreprise et l'investissement est officiellement réalisé.
                </p>
              </article>
              <article class="flex flex-col w-full bg-secondary-lighter border border-secondary-light rounded-lg snap-start p-6 max-w-[90%] min-w-[90%] lg:p-12 lg:max-w-[570px] lg:min-w-[570px]">
                <p class="font-medium text-[28px] text-[#E2D9CD] select-none">06.</p>
                <h3 class="mt-6 mb-4 font-semibold text-xl">Suivi de l’Investissement</h3>
                <p class="text-justify text-m">
                  Après l'investissement, les investisseurs suivent de près l'évolution de l'entreprise. Ils participent généralement aux réunions du conseil d'administration et fournissent un soutien opérationnel et stratégique à l'entreprise lorsque cela est nécessaire. Les investisseurs surveillent les performances financières de l'entreprise et travaillent en étroite collaboration avec l'équipe dirigeante pour maximiser la valeur de leur investissement.
                </p>
              </article>
              <article class="flex flex-col w-full bg-secondary-lighter border border-secondary-light rounded-lg snap-start p-6 max-w-[90%] min-w-[90%] lg:p-12 lg:max-w-[570px] lg:min-w-[570px]">
                <p class="font-medium text-[28px] text-[#E2D9CD] select-none">07.</p>
                <h3 class="mt-6 mb-4 font-semibold text-xl">Sortie de l’Investissement</h3>
                <p class="text-justify text-m">
                  La sortie de l'investissement est l'étape finale du processus d'investissement en capital-risque. Elle intervient lorsque l'entreprise atteint un stade de développement suffisamment avancé pour permettre aux investisseurs de réaliser un retour sur investissement. Les options de sortie comprennent la vente de la participation à un autre investisseur, l'introduction en bourse de l'entreprise ou son acquisition par une autre entreprise.
                </p>
              </article>
            </div>
          </div>

          <div class="lg:max-w-[720px] px-8 lg:px-14">
            <div class="flex flex-col w-full mt-10">
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  L’importance du VC pour l’Écosystème des startups
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">Le Venture Capital joue un rôle essentiel dans l'écosystème des startups en
                    fournissant les ressources financières nécessaires à leur développement. Il permet aux jeunes
                    entreprises innovantes de concrétiser leurs idées, de développer leurs produits ou services et de
                    s'implanter sur le marché.
                    <br><br>
                    En plus du financement, le capital-risque offre aux entrepreneurs un accompagnement et des conseils
                    précieux. Les investisseurs en capital-risque apportent leur expertise, leur expérience et leur réseau
                    de contacts pour aider les startups à surmonter les défis et à maximiser leurs chances de réussite.
                    <br><br>
                    Enfin, le Venture Capital favorise l'innovation, la création d'emplois et la croissance économique. Il
                    encourage les entrepreneurs à prendre des risques et à développer de nouvelles idées, ce qui contribue à
                    dynamiser l'économie et à créer de la valeur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-sticky-section="7" id="venture-7" class="py-10 w-full lg:-mt-4 lg:pt-20 lg:pb-16 bg-primary-dark text-white">
          <div class="lg:max-w-[720px] px-8 lg:px-14">
            <h2 class="text-h2 font-lora text-left mb-6">L’histoire du VC</h2>
          </div>
          <div class="w-full">
            <div class="px-8 lg:px-14 flex items-center gap-2 justify-end">
              <button data-carousel-control="left" type="button" class="flex items-center justify-center p-1 cursor-pointer bg-white w-[50px] aspect-square rounded-full duration-200 hover:opacity-60">
                <svg class="rotate-180" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1886 15.5629L15.4599 9.48416C15.1758 9.18271 14.7011 9.16864 14.3997 9.45272C14.0982 9.73681 14.0842 10.2115 14.3683 10.5129L19.6158 16.0812L14.3683 21.6494C14.0842 21.9508 14.0982 22.4255 14.3997 22.7096C14.7011 22.9937 15.1758 22.9796 15.4599 22.6782L21.1886 16.5994C21.2447 16.5407 21.2895 16.4751 21.323 16.4053C21.4202 16.2022 21.4212 15.9636 21.324 15.7591C21.2904 15.6885 21.2453 15.6221 21.1886 15.5629Z" fill="#01192A"/>
                  <path d="M21.1886 15.5629L20.8975 15.8373L20.8997 15.8396L21.1886 15.5629ZM15.4599 9.48416L15.751 9.20982L15.751 9.20982L15.4599 9.48416ZM14.3997 9.45272L14.1253 9.16162L14.1253 9.16162L14.3997 9.45272ZM14.3683 10.5129L14.6594 10.2386L14.6594 10.2386L14.3683 10.5129ZM19.6158 16.0812L19.9069 16.3555C20.0521 16.2014 20.0521 15.9609 19.9069 15.8068L19.6158 16.0812ZM14.3683 21.6494L14.6594 21.9237H14.6594L14.3683 21.6494ZM14.3997 22.7096L14.1253 23.0007L14.3997 22.7096ZM15.4599 22.6782L15.1688 22.4038H15.1688L15.4599 22.6782ZM21.1886 16.5994L20.8997 16.3227L20.8975 16.325L21.1886 16.5994ZM21.323 16.4053L20.9622 16.2325L21.323 16.4053ZM21.324 15.7591L20.9627 15.9307L20.9627 15.9309L21.324 15.7591ZM21.4797 15.2886L15.751 9.20982L15.1688 9.75849L20.8975 15.8373L21.4797 15.2886ZM15.751 9.20982C15.3154 8.7476 14.5876 8.72603 14.1253 9.16162L14.674 9.74382C14.8147 9.61125 15.0362 9.61782 15.1688 9.75849L15.751 9.20982ZM14.1253 9.16162C13.6631 9.59722 13.6416 10.325 14.0772 10.7873L14.6594 10.2386C14.5268 10.0979 14.5333 9.8764 14.674 9.74382L14.1253 9.16162ZM14.0772 10.7873L19.3247 16.3555L19.9069 15.8068L14.6594 10.2386L14.0772 10.7873ZM14.6594 21.9237L19.9069 16.3555L19.3247 15.8068L14.0772 21.3751L14.6594 21.9237ZM14.674 22.4185C14.5333 22.2859 14.5268 22.0644 14.6594 21.9237L14.0772 21.3751C13.6416 21.8373 13.6631 22.5651 14.1253 23.0007L14.674 22.4185ZM15.1688 22.4038C15.0362 22.5445 14.8147 22.5511 14.674 22.4185L14.1253 23.0007C14.5876 23.4363 15.3154 23.4147 15.751 22.9525L15.1688 22.4038ZM20.8975 16.325L15.1688 22.4038L15.751 22.9525L21.4797 16.8737L20.8975 16.325ZM21.4776 16.876C21.5634 16.7863 21.6323 16.6855 21.6838 16.578L20.9622 16.2325C20.9468 16.2647 20.9261 16.2952 20.8997 16.3227L21.4776 16.876ZM21.6838 16.578C21.8329 16.2666 21.8346 15.9014 21.6852 15.5873L20.9627 15.9309C21.0079 16.0259 21.0076 16.1378 20.9622 16.2325L21.6838 16.578ZM20.8997 15.8396C20.9263 15.8674 20.9472 15.8982 20.9627 15.9307L21.6853 15.5875C21.6337 15.4788 21.5642 15.3769 21.4775 15.2863L20.8997 15.8396Z" fill="#01192A"/>
                </svg>
              </button>
              <button data-carousel-control="right" type="button" class="flex items-center justify-center p-1 cursor-pointer bg-white w-[50px] aspect-square rounded-full duration-200 hover:opacity-60">
                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1886 15.5629L15.4599 9.48416C15.1758 9.18271 14.7011 9.16864 14.3997 9.45272C14.0982 9.73681 14.0842 10.2115 14.3683 10.5129L19.6158 16.0812L14.3683 21.6494C14.0842 21.9508 14.0982 22.4255 14.3997 22.7096C14.7011 22.9937 15.1758 22.9796 15.4599 22.6782L21.1886 16.5994C21.2447 16.5407 21.2895 16.4751 21.323 16.4053C21.4202 16.2022 21.4212 15.9636 21.324 15.7591C21.2904 15.6885 21.2453 15.6221 21.1886 15.5629Z" fill="#01192A"/>
                  <path d="M21.1886 15.5629L20.8975 15.8373L20.8997 15.8396L21.1886 15.5629ZM15.4599 9.48416L15.751 9.20982L15.751 9.20982L15.4599 9.48416ZM14.3997 9.45272L14.1253 9.16162L14.1253 9.16162L14.3997 9.45272ZM14.3683 10.5129L14.6594 10.2386L14.6594 10.2386L14.3683 10.5129ZM19.6158 16.0812L19.9069 16.3555C20.0521 16.2014 20.0521 15.9609 19.9069 15.8068L19.6158 16.0812ZM14.3683 21.6494L14.6594 21.9237H14.6594L14.3683 21.6494ZM14.3997 22.7096L14.1253 23.0007L14.3997 22.7096ZM15.4599 22.6782L15.1688 22.4038H15.1688L15.4599 22.6782ZM21.1886 16.5994L20.8997 16.3227L20.8975 16.325L21.1886 16.5994ZM21.323 16.4053L20.9622 16.2325L21.323 16.4053ZM21.324 15.7591L20.9627 15.9307L20.9627 15.9309L21.324 15.7591ZM21.4797 15.2886L15.751 9.20982L15.1688 9.75849L20.8975 15.8373L21.4797 15.2886ZM15.751 9.20982C15.3154 8.7476 14.5876 8.72603 14.1253 9.16162L14.674 9.74382C14.8147 9.61125 15.0362 9.61782 15.1688 9.75849L15.751 9.20982ZM14.1253 9.16162C13.6631 9.59722 13.6416 10.325 14.0772 10.7873L14.6594 10.2386C14.5268 10.0979 14.5333 9.8764 14.674 9.74382L14.1253 9.16162ZM14.0772 10.7873L19.3247 16.3555L19.9069 15.8068L14.6594 10.2386L14.0772 10.7873ZM14.6594 21.9237L19.9069 16.3555L19.3247 15.8068L14.0772 21.3751L14.6594 21.9237ZM14.674 22.4185C14.5333 22.2859 14.5268 22.0644 14.6594 21.9237L14.0772 21.3751C13.6416 21.8373 13.6631 22.5651 14.1253 23.0007L14.674 22.4185ZM15.1688 22.4038C15.0362 22.5445 14.8147 22.5511 14.674 22.4185L14.1253 23.0007C14.5876 23.4363 15.3154 23.4147 15.751 22.9525L15.1688 22.4038ZM20.8975 16.325L15.1688 22.4038L15.751 22.9525L21.4797 16.8737L20.8975 16.325ZM21.4776 16.876C21.5634 16.7863 21.6323 16.6855 21.6838 16.578L20.9622 16.2325C20.9468 16.2647 20.9261 16.2952 20.8997 16.3227L21.4776 16.876ZM21.6838 16.578C21.8329 16.2666 21.8346 15.9014 21.6852 15.5873L20.9627 15.9309C21.0079 16.0259 21.0076 16.1378 20.9622 16.2325L21.6838 16.578ZM20.8997 15.8396C20.9263 15.8674 20.9472 15.8982 20.9627 15.9307L21.6853 15.5875C21.6337 15.4788 21.5642 15.3769 21.4775 15.2863L20.8997 15.8396Z" fill="#01192A"/>
                </svg>
              </button>
            </div>

            <div class="flex justify-start snap-x snap-mandatory overflow-x-scroll overflow-y-clip scrollbar-hide mt-10 px-8 gap-8 scroll-pl-8 lg:gap-14 lg:scroll-pl-14 lg:px-14">
              <article class="flex flex-col w-full bg-primary-light border border-white/10 rounded-lg snap-start p-6 max-w-[90%] min-w-[90%] lg:p-12 lg:max-w-[570px] lg:min-w-[570px]">
                  <p class="font-medium text-[28px] text-white/20 select-none">01.</p>
                  <h3 class="mt-6 mb-4 font-semibold text-xl">Les Origines</h3>
                  <p class="text-justify text-m">
                    L'histoire du capital risque remonte à bien avant le XXe siècle. En fait, des formes de financement risqué existaient déjà au XVe siècle, où des monarques, des investisseurs et des riches industriels finançaient des projets incertains. Toutefois, le concept de capital risque tel que nous le connaissons aujourd'hui n'a réellement émergé qu'au XXe siècle.
                  </p>
              </article>
              <article class="flex flex-col w-full bg-primary-light border border-white/10 rounded-lg snap-start p-6 max-w-[90%] min-w-[90%] lg:p-12 lg:max-w-[570px] lg:min-w-[570px]">
                <p class="font-medium text-[28px] text-white/20 select-none">02.</p>
                <h3 class="mt-6 mb-4 font-semibold text-xl">L’Émergence du VC au XXe siècle</h3>
                <p class="text-justify text-m">
                  Après la Seconde Guerre mondiale, le capital risque commence à se formaliser en tant qu'industrie à part entière. C'est à cette époque que Georges Doriot, un investisseur français ayant étudié à Harvard, devient l'un des premiers venture capitalists. Dans les années 1940 et 1950, Doriot investit dans de jeunes entreprises prometteuses, posant ainsi les bases du capital risque moderne.
                  <br><br>
                  Le développement du capital risque est favorisé par l'accumulation de capitaux aux États-Unis après la Seconde Guerre mondiale. Ces capitaux trouvent leur place dans de nouvelles entreprises investissant dans des startups. Cela permet de financer des projets innovants et favorise la croissance économique.
                </p>
              </article>
              <article class="flex flex-col w-full bg-primary-light border border-white/10 rounded-lg snap-start p-6 max-w-[90%] min-w-[90%] lg:p-12 lg:max-w-[570px] lg:min-w-[570px]">
                <p class="font-medium text-[28px] text-white/20 select-none">03.</p>
                <h3 class="mt-6 mb-4 font-semibold text-xl">L’Âge d’Or du Capital-Risque</h3>
                <p class="text-justify text-m">
                  Les années 1990 sont une période de croissance fulgurante pour le capital risque aux États-Unis. Le succès de la bourse de croissance Nasdaq stimule les investissements dans les jeunes entreprises, notamment dans le domaine de la technologie. Des sociétés emblématiques comme AOL, Amazon, Yahoo et eBay sont financées grâce au capital risque. Les biotechnologies bénéficient également de cet engouement, avec des sociétés telles que Amgen, Genentech et Decode Genetics.
                  <br><br>
                  Au début du XXIe siècle, les fonds levés par les sociétés de capital risque connaissent une augmentation significative. En 2004, environ 20,9 milliards de dollars sont mobilisés, dont une part importante dans le cadre de seed rounds, qui permettent de financer les jeunes entreprises dès leur création.
                </p>
              </article>
              <article class="flex flex-col w-full bg-primary-light border border-white/10 rounded-lg snap-start p-6 max-w-[90%] min-w-[90%] lg:p-12 lg:max-w-[570px] lg:min-w-[570px]">
                <p class="font-medium text-[28px] text-white/20 select-none">04.</p>
                <h3 class="mt-6 mb-4 font-semibold text-xl">Le Capital-Risque dans le Monde</h3>
                <p class="text-justify text-m">
                  Le capital risque ne se limite pas aux États-Unis. Il est également présent dans d'autres pays, notamment au Canada, en Chine, au Japon et en Europe.
                  <br><br>
                  Au Canada, le capital risque se développe dans les années qui ont suivi son émergence aux États-Unis.
                  <br><br>
                  En Chine, le capital risque fait son apparition en 1985. Initialement entièrement public, il vise à reproduire les succès américains dans ce domaine. Le Japon s'est également inspiré des pratiques américaines pour développer son secteur de capital-risque. Toutefois, les investissements par capital risque au Japon restent relativement faibles par rapport aux États-Unis.
                  <br><br>
                  En Europe, les investissements dans le capital risque ont considérablement augmenté ces dernières années. En France, par exemple, les capitaux investis ont connu une hausse significative avec 758 millions d'euros investis dans 499 sociétés en 2015.
                </p>
              </article>
              <article class="flex flex-col w-full bg-primary-light border border-white/10 rounded-lg snap-start p-6 max-w-[90%] min-w-[90%] lg:p-12 lg:max-w-[570px] lg:min-w-[570px]">
                <p class="font-medium text-[28px] text-white/20 select-none">05.</p>
                <h3 class="mt-6 mb-4 font-semibold text-xl">Le Marché du Venture Capital</h3>
                <p class="text-justify text-m">
                  Le marché du Venture Capital connaît une croissance significative ces dernières années. Aux États-Unis, le marché du VC est particulièrement dynamique, avec de nombreux fonds et investisseurs actifs dans la Silicon Valley. En France, le marché du capital-risque se développe également rapidement, soutenu par des entrepreneurs à succès tels que Xavier Niel et Marc Simoncini.
                  <br><br>
                  Les montants investis en Venture Capital varient considérablement, allant de quelques milliers d'euros à plusieurs millions d'euros. Ces montants dépendent des besoins de l'entreprise, du stade de développement et du potentiel de croissance.
                </p>
              </article>
            </div>
          </div>
        </div>
        <div data-sticky-section="8" id="venture-8" class="px-8 py-10 w-full lg:-mt-4 lg:px-14 lg:pt-20 lg:pb-16 bg-white border-b border-secondary-light">
          <div class="lg:max-w-[720px]">
            <h2 class="text-h2 font-lora text-left mb-6">Les <i>acteurs</i> du VC</h2>
            <div class="flex flex-col w-full mt-10">
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Les Fonds de Venture Capital
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">
                    Les fonds de Venture Capital sont les principaux acteurs du capital-risque. Ce sont des fonds
                    d'investissement spécialisés dans le financement des startups et des entreprises en phase de
                    développement précoce. Ces fonds lèvent des capitaux auprès d'investisseurs institutionnels, de family
                    offices et de particuliers fortunés, et les investissent dans des startups prometteuses.
                    <br><br>
                    Il existe différents types de fonds de Venture Capital, tels que les fonds de capital-risque
                    généralistes, qui investissent dans divers secteurs d'activité, et les fonds de capital-risque
                    spécialisés, qui se concentrent sur des domaines spécifiques tels que la technologie, la santé ou les
                    énergies renouvelables.
                    <br><br>
  
                    Les fonds de Venture Capital jouent un rôle crucial dans le financement des startups, en leur
                    fournissant les ressources financières nécessaires à leur développement. Ils apportent également un
                    soutien stratégique et opérationnel, en aidant les entrepreneurs à développer leur entreprise, à
                    structurer leur équipe et à accéder à leur réseau de contacts.
                  </p>
                </div>
              </div>
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Le Corporate Venture
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">
                    Le Corporate Venture est une forme de capital-risque dans laquelle des grandes entreprises investissent
                    directement dans des startups. Cela leur permet d'accéder à de nouvelles technologies, d'innover et de
                    rester compétitives sur leur marché.
                    <br><br>
                    Le Corporate Venture présente des avantages pour les grandes entreprises, telles que l'accès à des
                    innovations technologiques, l'acquisition de nouvelles compétences et l'accès à de nouveaux marchés.
                    Pour les startups, cela peut représenter une opportunité de bénéficier du soutien financier et
                    stratégique d'une grande entreprise, ainsi que de tirer parti de son réseau de clients et de
                    partenaires.
                  </p>
                </div>
              </div>
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Business Angel
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">
                    Un Business Angel est une personne physique qui investit son propre argent dans des startups en
                    développement. Souvent, ils interviennent dès le début de l'aventure entrepreneuriale, lors des phases
                    de pré-amorçage ou d'amorçage. Les Business Angels apportent non seulement des fonds, mais aussi leur
                    expérience, leur réseau et leurs conseils pour aider la startup à réussir. Ils jouent un rôle clé dans
                    l'écosystème des startups en France.
                    <br><br>
                    Les Business Angels sont souvent plus flexibles que les fonds de capital-risque. Ils peuvent prendre des
                    décisions plus rapidement et sont prêts à investir dans des entreprises à un stade plus précoce de
                    développement. Leur expérience personnelle en tant qu'entrepreneurs peut être extrêmement précieuse pour
                    les startups, car ils comprennent les défis auxquels elles sont confrontées et peuvent fournir des
                    conseils pratiques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-sticky-section="9" id="venture-9" class="px-8 py-10 w-full lg:-mt-4 lg:px-14 lg:pt-20 lg:pb-16 bg-secondary-neutral">
          <div class="lg:max-w-[720px]">
            <h2 class="text-h2 font-lora text-left mb-6">Pourquoi Investir dans une startup ?</h2>
            <p class="text-justify">
              Investir dans une start-up, c’est s’associer à une aventure humaine, une gageure d’innovation, de talents et
              de maitrise financière et juridique. L’enjeu est d’accompagner ceux qui pensent et bâtissent notre monde de
              demain.
              <br><br>
              Investir dans une jeune entreprise innovante, c’est avant tout adhérer à une « vision » qui se fonde sur une
              rupture technologique, sur un nouveau marché, sur un nouveau process ou mode d’organisation. De façon
              corolaire, répondre au besoin de financement d’une start-up, qui le plus souvent ne possède pas ou très peu
              d’actifs corporels, mais qui offre des perspectives de forte croissance, demeure un acte volontaire qui
              présente des risques.
            </p>
            <div class="flex flex-col w-full mt-10">
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Accéder à des opportunités d’investissement ultra-compétitives, pré-ipo
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">L'une des principales raisons d'investir dans le capital-risque d'entreprise
                    est l'accès à des opportunités d'investissement pré-IPO très compétitives. Le nombre d'entreprises
                    cotées en bourse aux États-Unis a atteint son apogée à la fin des années 1990 et a depuis diminué de
                    manière constante. Si vous investissez exclusivement sur les marchés publics, cela pourrait ne pas être
                    une bonne nouvelle pour vous. De nombreuses entreprises connaissent maintenant leur "hyper-croissance"
                    alors qu'elles sont encore privées (c'est-à-dire avant leur introduction en bourse). Des entreprises
                    telles que Slack, Lyft et Uber sont quelques exemples de sociétés ayant connu une croissance
                    exceptionnelle sur le marché privé et des introductions en bourse décevantes. Aujourd'hui, il n'est pas
                    rare que les entreprises fassent leur introduction en bourse avec des valorisations allant d'un milliard
                    à plusieurs dizaines de milliards de dollars. Si vous attendez l'introduction en bourse pour investir,
                    cela peut être une manière difficile de gagner de l'argent. Le capital-risque offre un accès aux
                    opportunités privées, pré-IPO, lorsque les valorisations sont plus basses, ce qui se traduit par des
                    rendements supérieurs à ceux obtenus en investissant uniquement après l'introduction en bourse des
                    entreprises.
                  </p>
                </div>
              </div>
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Diversifier votre portefeuille
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">La diversification de votre portefeuille sur des classes d'actifs
                    alternatives telles que le capital-risque et l'immobilier peut également être bénéfique. Le
                    capital-risque ne présente pas la même volatilité à court terme que les marchés cotés. Les rendements du
                    capital-risque ont historiquement été solides et ont une corrélation faible avec les rendements des
                    actions. Selon Cambridge Associates, il est recommandé aux investisseurs institutionnels de consacrer
                    jusqu'à 15 % de leur portefeuille à des entreprises privées en phase de démarrage à fort potentiel de
                    croissance.
                  </p>
                </div>
              </div>
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Soutenir l’innovation et aligner vos investissements avec vos valeurs
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">
                    Investir dans le capital-risque signifie investir dans des acteurs du changement, des innovations de
                    haute technologie et des modèles économiques perturbateurs. Voici quelques exemples de startups
                    financées par les investisseurs d’Anaxago :
                  <ul class="pl-10 list-disc">
                    <li>
                      Wandercraft : cette Medtech s’est donnée pour mission de remplacer les fauteuils roulants grâce à son
                      exosquelette unique au monde. Anaxago a participé à deux financements, en 2015 et 2019. Des
                      investisseurs institutionnels reconnus (dont BPIFrance et Idinvest Partners) ont rejoint l’aventure au
                      gré des différents tours de table.
                    </li>
                    <li> Acticor Biotech : a développé un nouveau médicament "first in class" destiné au traitement de la
                      phase
                      aiguë de l'AVC ischémique. Suite à l’évolution positive des essais cliniques, Acticor Biotech a
                      procédé
                      à son introduction en bourse le 1er novembre 2021</li>
                    <li>Sunology : la société conçoit et commercialise des panneaux solaires made in France innovants et
                      accessibles pour tous. Les stations solaires sont livrées prêtes à l’emploi, produisant de l’énergie
                      grâce à un simple branchement sur prise.</li>
                  </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-sticky-section="10" id="venture-10" class="px-8 py-10 w-lg:-mt-4 lg:px-14 lg:pt-20 fullblg:py-16 bg-white border-y border-secondary-light">
          <div class="lg:max-w-[720px]">
            <h2 class="text-h2 font-lora text-left mb-6">Investir dans une startup : <i>une fiscalité attractive</i></h2>
            <p class="text-justify">
              Les investisseurs personnes physiques, domiciliées fiscalement en France, peuvent bénéficier, sous certaines
              conditions, de différents mécanismes et enveloppes fiscales.
              <br><br>
              Les entreprises faisant l’objet de ces investissements doivent toutefois se situer dans l’Espace Economique
              Européen élargi et satisfaire des conditions d’éligibilité.
            </p>
            <div class="flex flex-col w-full mt-10">
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Le dispositif “IR-PME”
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">
                    L’entreprise doit répondre à certaines conditions dont :
                    Réaliser un CA inférieur à 50 millions d’euros ou son bilan inférieur à 43 millions d’euros
                    Employer moins de 250 salariés
                    Ne pas être âgée de plus de 7 ans
                    <br><br>
                    Actuellement, le plafond de la réduction (12 500 €), pour investir dans des startups correspond à un
                    investissement maximal de 50 000 €, pour une personne seule. Pour en savoir plus sur ce mécanisme,
                    consultez notre page dédiée : réduire son impôt sur le revenu en investissant dans une startup .
                  </p>
                </div>
              </div>
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Les Fonds de Capital-Investment (FCPR, FCPI, FIP)
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">
                    Investir dans une start-up via ces fonds, au même titre que le dispositif IR-PME, ouvre droit à une
                    réduction de 18 % (ou 25 %), dans la mesure où ils sont investis en titres de sociétés innovantes non
                    cotées en bourse, à hauteur minimum de :
  
                    50 % pour les fonds communs de placement à risques (FCPR)
                    70 % pour les fonds communs de placement dans l’innovation (FCPI) et les fonds d’investissement de
                    proximité (FIP)
  
                    Actuellement, le plafond de la réduction par catégorie (2 160 €), correspond à un investissement maximal
                    de 12 000 €, pour une personne seule.
                    Ces réductions sont octroyées dans la limite du plafond annuel des niches fiscales de 10 000 € par an et
                    par foyer fiscal.
                  </p>
                </div>
              </div>
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  L’enveloppe PEA / PEA-PME
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">
                    Toute personne physique, domiciliée fiscalement en France qui s’engage à conserver ses titres pendant 5
                    ans, bénéficie d’une exonération de l’impôt sur le revenu sur les revenus et plus-values réalisées.
                    Depuis la loi PACTE, la plupart des titres proposés pour investir dans une start-up, y sont éligibles :
                  </p>
  
                  <ul class="pl-10 list-disc">
                    <li>titres participatifs</li>
                    <li>actions non cotées</li>
                    <li>obligations à taux fixe</li>
                    <li>parts de fonds professionnels de capital investissement (FPCI)</li>
                  </ul>
                  <p class="mt-6 text-justify">Anaxago a développé une forte expertise dans le domaine de l’investissement
                    en capital dans de jeunes sociétés, notamment dans les secteurs innovants de la santé, de la finance et
                    de la « proptech ». Nous négocions opération par opération des conditions juridiques préférentielles
                    afin de protéger vos intérêts. Notre part de responsabilités dans la sélection de projets proposés au
                    Club Investisseurs se traduit par un investissement de nos capitaux dans chaque aventure
                    entrepreneuriale retenue.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-sticky-section="11" id="venture-11" class="flex flex-col px-8 py-10 w-full lg:-mt-4 lg:px-14 lg:pt-20 fullblg:py-16 bg-secondary-neutral">
          <div class="lg:max-w-[720px]">
            <h2 class="text-h2 font-lora text-left mb-6">Les risques</h2>
            <div class="flex flex-col w-full mt-10">
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Risque de perte en capital
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">Le risque de perte totale ou partielle du capital est une réalité, avec un
                    nombre significatif de startups qui ne parviennent pas à survivre sur le long terme. Les investisseurs
                    doivent donc être préparés à cette éventualité et investir des fonds qu'ils peuvent se permettre de
                    perdre.</p>
                </div>
              </div>
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Illiquidité des investissements
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">
                    Les fonds investis dans des entreprises en démarrage sont souvent bloqués pour une période prolongée,
                    parfois jusqu'à 10 ans. Cela signifie que les investisseurs ne peuvent pas facilement convertir ces
                    investissements en cash en cas de besoin, ce qui peut poser des problèmes en cas de changements imprévus
                    dans leurs situations financières personnelles.
                  </p>
                </div>
              </div>
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Risques sectoriels et de marché
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">Les tendances du marché et les évolutions sectorielles peuvent avoir un
                    impact significatif sur les investissements en VC. Par exemple, un changement technologique majeur dans
                    un secteur donné peut rendre obsolètes certaines startups. De même, les fluctuations économiques
                    globales peuvent affecter le financement et la croissance des entreprises en démarrage.
                  </p>
                </div>
              </div>
              <div class="flex flex-col w-full border-t border-[#7C868B] py-4">
                <h3 data-toggle-accordion
                  class="flex justify-between gap-6 items-center text-l font-semibold cursor-pointer duration-200 select-none hover:opacity-70">
                  Risques sectoriels et de marché
                  <svg class="duration-200" width="12" height="12" viewBox="0 0 12 12" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.89453 10.8145L5.75342 2.33055" stroke="#222222" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M0.960938 5.42578L5.94204 1.00114L10.9231 5.42578" stroke="#222222" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </h3>
                <div class="duration-200 overflow-clip max-h-[0]">
                  <p class="mt-6 text-justify">La réussite d'une entreprise en démarrage dépend fortement de ses fondateurs
                    et de son équipe de gestion. Un risque majeur pour les investisseurs en VC est donc la dépendance à une
                    petite équipe, qui peut manquer d'expérience dans la gestion d'une entreprise à grande échelle. Les
                    changements dans cette équipe peuvent également affecter de manière significative les performances de
                    l'entreprise.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-fit mx-auto mt-6 lg:ml-10 lg:mt-10">
              <a href="#"
                class="tw-cta tw-cta--secondary text-white w-full !py-3 max-w-[310px] whitespace-nowrap">
                Guide : Choisir sa plateforme
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="flex items-center justify-center relative py-14 px-5 lg:py-[100px]">
    <img class="h-full w-full top-0 left-0 z-[-1] absolute object-cover object-bottom" src="@/assets/img/venture_capital/venture_footer-banner.png" alt="" draggable="false" decoding="async">
    <a href="https://share.hsforms.com/1SrQQ3Wv0TqmrD9p1zaZmwQ1fcvu" class="tw-cta tw-cta--primary !bg-[#FDF4E8] w-full !py-3 max-w-[287px]">Découvrir nos opportunités</a>
  </section>


  <div class="pb-[300px]"></div>

  <NuxtPage />
</template>
