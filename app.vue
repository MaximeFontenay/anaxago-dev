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

  // Flex cards 
  const flexCards = document.querySelectorAll('.flex-cards')
  flexCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
      flexCards.forEach(card => {
        card.classList.remove('active')
      })
      this.classList.add('active')
    })
  })


});
</script>


<style scoped lang="scss">
@import 'assets/style.scss';

.scrollbar-hide {
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
        src="@/assets/img/success_stories/success_stories-hero.png" alt="hero background image" draggable="false"
        decoding="async">
      <div class="flex flex-col justify-center items-center mx-auto text-black text-center lg:max-w-[750px]">
        <p class="text-xl text-center mb-3">Success stories</p>
        <h1 class="text-h1 font-lora leading-[58px] mt-2 max-lg:text-center mb:mb-6">
          Des <i>opportunités uniques</i> dans l’immobilier et l’innovation depuis 2012
        </h1>
        <a href="https://www.anaxago.com/operations-en-cours?type=investissement-participatif&product=innovation"
          class="tw-cta tw-cta--secondary max-md:mx-auto text-white w-full !py-3 max-w-[287px] mt-6 lg:mt-10">
          Découvrir nos opportunités
        </a>
      </div>
    </div>
  </section>

  <section class="bg-secondary-neutral relative py-6 md:py-10 lg:py-16"
    style="border-top: 1px solid #F2ECE5;border-bottom: 1px solid #F2ECE5;">
    <div class="max-w-[1184px] px-5 mx-auto flex max-lg:flex-col justify-center w-full gap-8 lg:gap-16">
      <h2 class="text-h2 font-lora lg:basis-1/2">Découvrez quelques <i>opérations phares</i> financées avec Anaxago</h2>
      <p class="text-black text-justify text-m lg:text-l lg:basis-1/2">
        En plus de 10 ans, Anaxago a financé plus de <span class="font-semibold">350 projets dans l’immobilier</span> et
        le venture capital avec <span class="font-semibold">plus de 15
          000 investisseurs</span> à ses côtés. Ce sont plus de <span class="font-semibold">850 M€ investis</span> dans
        l’économie réelle au profit de projets de
        réhabilitation, de rénovation énergétique ou encore pour accompagner les entrepreneurs qui pensent et bâtissent le
        monde de demain.
      </p>
    </div>
  </section>

  <section class="bg-white py-14 lg:py-16">
    <div class="max-w-[1184px] px-5 mx-auto">
      <h2 class="text-h2 font-lora lg:basis-1/2">L’<i>immobilier</i> chez Anaxago</h2>
      <div class="group select-none flex lg:justify-center w-full gap-4 max-lg:pb-4 lg:gap-2 mt-10 max-lg:overflow-x-scroll">
        <article class="active flex-cards group/card flex items-stretch max-lg:flex-col rounded bg-white min-w-[140px] lg:min-h-[400px] lg:max-h-[400px] overflow-clip transition-400 hover:max-w-[700px]">
          <div class="relative max-lg:min-w-[250px] w-full lg:min-w-[140px] lg:max-w-[140px] duration-300 h-full overflow-clip group-[.active]/card:lg:max-w-[220px]">
            <img class="h-full w-full object-cover object-left pointer-events-none"
              src="@/assets/img/success_stories/success_stories-flex-card-1.png" alt="health tech" draggable="false"
              decoding="async">
              <div class="group-[.active]/card:opacity-0 duration-200 p-4 absolute top-0 left-0 w-full h-full flex items-end" style="background: linear-gradient(0deg, rgba(3, 4, 14, 0.80) 12.4%, rgba(3, 4, 14, 0.00) 61.27%, rgba(3, 4, 14, 0.00) 86.89%)">
                <h3 class="text-white font-bold">Oline</h3>
              </div>
          </div>
          <div class="flex flex-col gap-6 text-black text-m rounded-md duration-500 ease-in-out overflow-clip relative max-lg:p-6 lg:py-8 lg:text-l lg:max-w-[0px] group-[.active]/card:lg:px-12 group-[.active]/card:max-w-[900px]" style="border-top: solid 1px #F3F0EC;border-right: solid 1px #F3F0EC;border-bottom: solid 1px #F3F0EC">
            <p class="bg-[#FAFAFA] rounded-full px-6 py-2 text-[#565665] font-bold text-s text-center w-fit whitespace-nowrap">Remboursement 2023</p>
            <div class="flex flex-col gap-4">
              <h3 class="line-clamp-1 font-semibold text-[18px] whitespace-nowrap">Paris - Pool d’opérations</h3>
              <p class="text-xs line-clamp-3 overflow-clip">Rendre les systèmes de santé plus efficaces et faciliter le
                travail du personnel médical.</p>
            </div>
            <div class="flex items-stretch gap-2">
              <div style="border: solid 1px #F3F0EC" class="px-4 py-2 rounded-lg basis-full whitespace-nowrap">
                <p class="text-xs">Remboursés*</p>
                <p class="font-semibold text-m">5,9 M€</p>
              </div>
              <div style="border: solid 1px #F3F0EC" class="px-4 py-2 rounded-lg basis-full whitespace-nowrap">
                <p class="text-xs">TRI distribué*</p>
                <p class="font-semibold text-m">12,1 %</p>
              </div>
              <div style="border: solid 1px #F3F0EC" class="px-4 py-2 rounded-lg basis-full whitespace-nowrap">
                <p class="text-xs">Investissement</p>
                <p class="font-semibold text-m">28 mois</p>
              </div>
            </div>
            <a href="#" class="hidden justify-center items-center gap-2 w-fit rounded-tl-md py-4 px-6 font-semibold absolute bottom-0 right-0 duration-300 bg-secondary-light hover:bg-secondary-dark">
              <span>Découvrir</span>
              <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.72461 5.57812L10.2089 5.45162" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.11426 1.15625L11.5389 5.62137L7.11426 10.0865" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </article>
        <article class="flex-cards group/card flex items-stretch max-lg:flex-col rounded bg-white min-w-[140px] lg:min-h-[400px] lg:max-h-[400px] overflow-clip transition-400 hover:max-w-[700px]">
          <div class="relative max-lg:min-w-[250px] w-full lg:min-w-[140px] lg:max-w-[140px] duration-300 h-full overflow-clip group-[.active]/card:lg:max-w-[220px]">
            <img class="h-full w-full object-cover object-left pointer-events-none"
              src="@/assets/img/success_stories/success_stories-flex-card-2.png" alt="health tech" draggable="false"
              decoding="async">
              <div class="group-[.active]/card:opacity-0 duration-200 p-4 absolute top-0 left-0 w-full h-full flex items-end" style="background: linear-gradient(0deg, rgba(3, 4, 14, 0.80) 12.4%, rgba(3, 4, 14, 0.00) 61.27%, rgba(3, 4, 14, 0.00) 86.89%)">
                <h3 class="text-white font-bold">Oline</h3>
              </div>
          </div>
          <div class="flex flex-col gap-6 text-black text-m rounded-md duration-500 ease-in-out overflow-clip relative max-lg:p-6 lg:py-8 lg:text-l lg:max-w-[0px] group-[.active]/card:lg:px-12 group-[.active]/card:max-w-[900px]" style="border-top: solid 1px #F3F0EC;border-right: solid 1px #F3F0EC;border-bottom: solid 1px #F3F0EC">
            <p class="bg-[#FAFAFA] rounded-full px-6 py-2 text-[#565665] font-bold text-s text-center w-fit whitespace-nowrap">Remboursement 2023</p>
            <div class="flex flex-col gap-4">
              <h3 class="line-clamp-1 font-semibold text-[18px] whitespace-nowrap">Oline</h3>
              <p class="text-xs line-clamp-3 overflow-clip">Refinancement de la participation d’un partenaire financier historique sortant d’un groupe hôtelier parisien ; Oline.</p>
            </div>
            <div class="flex items-stretch gap-2">
              <div style="border: solid 1px #F3F0EC" class="px-4 py-2 rounded-lg basis-full whitespace-nowrap">
                <p class="text-xs">Remboursés*</p>
                <p class="font-semibold text-m">6,2 M€</p>
              </div>
              <div style="border: solid 1px #F3F0EC" class="px-4 py-2 rounded-lg basis-full whitespace-nowrap">
                <p class="text-xs">TRI distribué*</p>
                <p class="font-semibold text-m">9 %</p>
              </div>
              <div style="border: solid 1px #F3F0EC" class="px-4 py-2 rounded-lg basis-full whitespace-nowrap">
                <p class="text-xs">Investissement</p>
                <p class="font-semibold text-m">37 mois</p>
              </div>
            </div>
            <a href="#" class="hidden justify-center items-center gap-2 w-fit rounded-tl-md py-4 px-6 font-semibold absolute bottom-0 right-0 duration-300 bg-secondary-light hover:bg-secondary-dark">
              <span>Découvrir</span>
              <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.72461 5.57812L10.2089 5.45162" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.11426 1.15625L11.5389 5.62137L7.11426 10.0865" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </article>
        <article class="flex-cards group/card flex items-stretch max-lg:flex-col rounded bg-white min-w-[140px] lg:min-h-[400px] lg:max-h-[400px] overflow-clip transition-400 hover:max-w-[700px]">
          <div class="relative max-lg:min-w-[250px] w-full lg:min-w-[140px] lg:max-w-[140px] duration-300 h-full overflow-clip group-[.active]/card:lg:max-w-[220px]">
            <img class="h-full w-full object-cover object-left pointer-events-none"
              src="@/assets/img/success_stories/success_stories-flex-card-3.png" alt="health tech" draggable="false"
              decoding="async">
              <div class="group-[.active]/card:opacity-0 duration-200 p-4 absolute top-0 left-0 w-full h-full flex items-end" style="background: linear-gradient(0deg, rgba(3, 4, 14, 0.80) 12.4%, rgba(3, 4, 14, 0.00) 61.27%, rgba(3, 4, 14, 0.00) 86.89%)">
                <h3 class="text-white font-bold">Babel</h3>
              </div>
          </div>
          <div class="flex flex-col gap-6 text-black text-m rounded-md duration-500 ease-in-out overflow-clip relative max-lg:p-6 lg:py-8 lg:text-l lg:max-w-[0px] group-[.active]/card:lg:px-12 group-[.active]/card:max-w-[900px]" style="border-top: solid 1px #F3F0EC;border-right: solid 1px #F3F0EC;border-bottom: solid 1px #F3F0EC">
            <p class="bg-[#FAFAFA] rounded-full px-6 py-2 text-[#565665] font-bold text-s text-center w-fit whitespace-nowrap">Remboursement 2023</p>
            <div class="flex flex-col gap-4">
              <h3 class="line-clamp-1 font-semibold text-[18px] whitespace-nowrap">Babel - Saint-Ferréol</h3>
              <p class="text-xs line-clamp-3 overflow-clip">Acquisition, réhabilitation et mise en exploitation d’un site occupé historiquement par les Galeries Lafayette et devenu un des nouveaux lieux phares de Marseille.</p>
            </div>
            <div class="flex items-stretch gap-2">
              <div style="border: solid 1px #F3F0EC" class="px-4 py-2 rounded-lg basis-full whitespace-nowrap">
                <p class="text-xs">Remboursés*</p>
                <p class="font-semibold text-m">6,3 M€</p>
              </div>
              <div style="border: solid 1px #F3F0EC" class="px-4 py-2 rounded-lg basis-full whitespace-nowrap">
                <p class="text-xs">TRI distribué*</p>
                <p class="font-semibold text-m">13,4 %</p>
              </div>
              <div style="border: solid 1px #F3F0EC" class="px-4 py-2 rounded-lg basis-full whitespace-nowrap">
                <p class="text-xs">Investissement</p>
                <p class="font-semibold text-m">45 mois</p>
              </div>
            </div>
            <a href="#" class="hidden justify-center items-center gap-2 w-fit rounded-tl-md py-4 px-6 font-semibold absolute bottom-0 right-0 duration-300 bg-secondary-light hover:bg-secondary-dark">
              <span>Découvrir</span>
              <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.72461 5.57812L10.2089 5.45162" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.11426 1.15625L11.5389 5.62137L7.11426 10.0865" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </article>
        <article class="flex-cards group/card flex items-stretch max-lg:flex-col rounded bg-white min-w-[140px] lg:min-h-[400px] lg:max-h-[400px] overflow-clip transition-400 hover:max-w-[700px]">
          <div class="relative max-lg:min-w-[250px] w-full lg:min-w-[140px] lg:max-w-[140px] duration-300 h-full overflow-clip group-[.active]/card:lg:max-w-[220px]">
            <img class="h-full w-full object-cover object-left pointer-events-none"
              src="@/assets/img/success_stories/success_stories-flex-card-4.png" alt="health tech" draggable="false"
              decoding="async">
              <div class="group-[.active]/card:opacity-0 duration-200 p-4 absolute top-0 left-0 w-full h-full flex items-end" style="background: linear-gradient(0deg, rgba(3, 4, 14, 0.80) 12.4%, rgba(3, 4, 14, 0.00) 61.27%, rgba(3, 4, 14, 0.00) 86.89%)">
                <h3 class="text-white font-bold">Damesme</h3>
              </div>
          </div>
          <div class="flex flex-col gap-6 text-black text-m rounded-md duration-500 ease-in-out overflow-clip relative max-lg:p-6 lg:py-8 lg:text-l lg:max-w-[0px] group-[.active]/card:lg:px-12 group-[.active]/card:max-w-[900px]" style="border-top: solid 1px #F3F0EC;border-right: solid 1px #F3F0EC;border-bottom: solid 1px #F3F0EC">
            <p class="bg-[#FAFAFA] rounded-full px-6 py-2 text-[#565665] font-bold text-s text-center w-fit whitespace-nowrap">Remboursement 2022</p>
            <div class="flex flex-col gap-4">
              <h3 class="line-clamp-1 font-semibold text-[18px] whitespace-nowrap">Damesme</h3>
              <p class="text-xs line-clamp-3 overflow-clip">Restructuration et transformation partielle « bureaux / logements » d’un ensemble immobilier de 1.474 m².</p>
            </div>
            <div class="flex items-stretch gap-2">
              <div style="border: solid 1px #F3F0EC" class="px-4 py-2 rounded-lg basis-full whitespace-nowrap">
                <p class="text-xs">Remboursés*</p>
                <p class="font-semibold text-m">6,1 M€</p>
              </div>
              <div style="border: solid 1px #F3F0EC" class="px-4 py-2 rounded-lg basis-full whitespace-nowrap">
                <p class="text-xs">TRI distribué*</p>
                <p class="font-semibold text-m">20,09 %</p>
              </div>
              <div style="border: solid 1px #F3F0EC" class="px-4 py-2 rounded-lg basis-full whitespace-nowrap">
                <p class="text-xs">Investissement</p>
                <p class="font-semibold text-m">3 mois</p>
              </div>
            </div>
            <a href="#" class="hidden justify-center items-center gap-2 w-fit rounded-tl-md py-4 px-6 font-semibold absolute bottom-0 right-0 duration-300 bg-secondary-light hover:bg-secondary-dark">
              <span>Découvrir</span>
              <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.72461 5.57812L10.2089 5.45162" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7.11426 1.15625L11.5389 5.62137L7.11426 10.0865" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </article>
      </div>
      <p class="text-center text-muted mt-12 text-s">
        *Les performances obtenues avec de précédents projets ne préjugent pas des performances futures. L’investissement dans des entreprises non cotées comporte des risques spécifiques : la perte totale ou partielle du capital investi, l’illiquidité des titres dont la revente peut être incertaine voire impossible.
      </p>
    </div>
  </section>

  <section class="bg-secondary-neutral relative py-6 md:py-10 lg:py-16"
    style="border-top: 1px solid #F2ECE5;border-bottom: 1px solid #F2ECE5;">
    <div class="max-w-[1184px] px-5 mx-auto flex max-lg:flex-col gap-8 lg:mb-12">
      <h2 class="text-xl font-medium w-fit">Découvrez les autres opérations immobilières financées par Anaxago</h2>
    </div>
    <div class="overflow-y-clip overflow-x-scroll scrollbar-hide flex items-stretch gap-5 px-5">
        <article class="p-6 relative flex flex-col justify-between rounded-md bg-primary-dark/10 overflow-clip duration-500 pointer-events-auto min-h-[350px] min-w-[300px]">
          <img class="h-full w-full max-w-full object-cover object-left pointer-events-none absolute bottom-0 left-0 z-[1]"
            src="@/assets/img/success_stories/success_stories-immo-1.png" alt="agriodor" draggable="false" decoding="async">
          <div class="absolute top-0 left-0 w-full h-full z-[2]" style="background: linear-gradient(0deg, rgba(0, 2, 2, 0.85) 7%, rgba(0, 4, 7, 0.75) 28%, rgba(0, 4, 7, 0.7) 40%, rgba(0, 4, 7, 0.00) 70%);"></div>
          <div class="text-white flex justify-between flex-col gap-6 relative h-full z-[3] flex-1">
            <div class="flex justify-between items-center w-full">
              <p class="whitespace-nowrap text-[12px] text-white font-medium flex items-center gap-2 bg-white/25 backdrop-blur-sm rounded-full select-none py-2 px-6">
                <svg class="min-w-[13px]" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.90175 11.1258H5.96364C6.03126 11.1204 6.09927 11.1155 6.16142 11.1109C4.59791 11.0059 3.28182 10.3844 2.24638 9.22564C1.20625 8.06155 0.767294 6.68748 0.886121 5.15209C0.994395 3.75043 1.59166 2.55799 2.63413 1.60043C3.67465 0.644788 4.91999 0.140145 6.3553 0.109874C6.3252 0.106425 6.2951 0.105276 6.265 0.10336C6.20051 0.0991451 6.13562 0.094547 6.07113 0.090332C6.35764 0.090332 6.64455 0.090332 6.93106 0.090332C6.8439 0.0941638 6.75673 0.0979956 6.66956 0.10221C6.64924 0.102977 6.6293 0.10451 6.60898 0.106042C8.07008 0.147808 9.33301 0.663181 10.3802 1.65446C11.4289 2.64727 11.9937 3.87075 12.0864 5.29617C12.0907 5.26206 12.0957 5.22451 12.1004 5.18658V6.01041C12.095 5.9855 12.0895 5.96021 12.0844 5.9353C11.9871 7.32777 11.4488 8.52749 10.4369 9.51264C9.42604 10.497 8.20259 11.0208 6.79191 11.1105C6.82122 11.1147 6.86149 11.1201 6.90175 11.1258ZM5.4254 7.83241C5.55009 7.83931 5.6439 7.79256 5.72637 7.71976C5.94566 7.52664 6.16377 7.33275 6.38266 7.13924C6.73445 6.82811 7.08624 6.51697 7.43842 6.20659C7.7351 5.94488 8.03217 5.68432 8.32884 5.42261C8.70292 5.0927 9.0766 4.76278 9.45067 4.43287C9.59451 4.30566 9.74187 4.18227 9.88181 4.05084C9.99321 3.94624 10.0249 3.81251 9.98383 3.66767C9.94435 3.52819 9.84936 3.43699 9.70513 3.40021C9.55699 3.36227 9.43034 3.40289 9.31855 3.50252C8.97575 3.80676 8.63138 4.10947 8.2878 4.41256C7.64168 4.98273 6.99556 5.55289 6.34904 6.12306C6.05745 6.38056 5.76585 6.63767 5.47465 6.89554C5.45276 6.91509 5.43869 6.92428 5.41132 6.89976C5.05133 6.58096 4.69015 6.26369 4.32937 5.94527C4.09836 5.74142 3.86774 5.5368 3.63713 5.33218C3.4839 5.19654 3.24547 5.18849 3.10201 5.31532C2.91713 5.47856 2.91517 5.74103 3.09967 5.90542C3.2439 6.03455 3.39048 6.16138 3.5355 6.28936C4.0753 6.76565 4.6151 7.24155 5.15374 7.71899C5.23465 7.79064 5.32494 7.83356 5.4254 7.83203V7.83241Z" fill="white"/>
                </svg>
                Opération financée</p>
            </div>
            <div class="flex flex-col text-white">
              <h3 class="text-[21px] font-bold">Rue Laroche - Bordeaux</h3>
              <p class="">Club-deal • Dette privée</p>
              <ul class="mt-5">
                <li><span class="uppercase text-s">montant investi</span><span class="ml-2 font-bold">4 100 000€</span></li>
                <li><span class="uppercase text-s">taux cible</span><span class="ml-2 font-bold">9,5 %* / an</span></li>
                <li><span class="uppercase text-s">horizon cible</span><span class="ml-2 font-bold">6 - 18 mois</span></li>
              </ul>
            </div>
          </div>
        </article>
        <article class="p-6 relative flex flex-col justify-between rounded-md bg-primary-dark/10 overflow-clip duration-500 pointer-events-auto min-h-[350px] min-w-[300px]">
          <img class="h-full w-full max-w-full object-cover object-left pointer-events-none absolute bottom-0 left-0 z-[1]"
            src="@/assets/img/success_stories/success_stories-immo-2.png" alt="agriodor" draggable="false" decoding="async">
          <div class="absolute top-0 left-0 w-full h-full z-[2]" style="background: linear-gradient(0deg, rgba(0, 2, 2, 0.85) 7%, rgba(0, 4, 7, 0.75) 28%, rgba(0, 4, 7, 0.7) 40%, rgba(0, 4, 7, 0.00) 70%);"></div>
          <div class="text-white flex justify-between flex-col gap-6 relative h-full z-[3] flex-1">
            <div class="flex justify-between items-center w-full">
              <p class="whitespace-nowrap text-[12px] text-white font-medium flex items-center gap-2 bg-white/25 backdrop-blur-sm rounded-full select-none py-2 px-6">
                <svg class="min-w-[13px]" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.90175 11.1258H5.96364C6.03126 11.1204 6.09927 11.1155 6.16142 11.1109C4.59791 11.0059 3.28182 10.3844 2.24638 9.22564C1.20625 8.06155 0.767294 6.68748 0.886121 5.15209C0.994395 3.75043 1.59166 2.55799 2.63413 1.60043C3.67465 0.644788 4.91999 0.140145 6.3553 0.109874C6.3252 0.106425 6.2951 0.105276 6.265 0.10336C6.20051 0.0991451 6.13562 0.094547 6.07113 0.090332C6.35764 0.090332 6.64455 0.090332 6.93106 0.090332C6.8439 0.0941638 6.75673 0.0979956 6.66956 0.10221C6.64924 0.102977 6.6293 0.10451 6.60898 0.106042C8.07008 0.147808 9.33301 0.663181 10.3802 1.65446C11.4289 2.64727 11.9937 3.87075 12.0864 5.29617C12.0907 5.26206 12.0957 5.22451 12.1004 5.18658V6.01041C12.095 5.9855 12.0895 5.96021 12.0844 5.9353C11.9871 7.32777 11.4488 8.52749 10.4369 9.51264C9.42604 10.497 8.20259 11.0208 6.79191 11.1105C6.82122 11.1147 6.86149 11.1201 6.90175 11.1258ZM5.4254 7.83241C5.55009 7.83931 5.6439 7.79256 5.72637 7.71976C5.94566 7.52664 6.16377 7.33275 6.38266 7.13924C6.73445 6.82811 7.08624 6.51697 7.43842 6.20659C7.7351 5.94488 8.03217 5.68432 8.32884 5.42261C8.70292 5.0927 9.0766 4.76278 9.45067 4.43287C9.59451 4.30566 9.74187 4.18227 9.88181 4.05084C9.99321 3.94624 10.0249 3.81251 9.98383 3.66767C9.94435 3.52819 9.84936 3.43699 9.70513 3.40021C9.55699 3.36227 9.43034 3.40289 9.31855 3.50252C8.97575 3.80676 8.63138 4.10947 8.2878 4.41256C7.64168 4.98273 6.99556 5.55289 6.34904 6.12306C6.05745 6.38056 5.76585 6.63767 5.47465 6.89554C5.45276 6.91509 5.43869 6.92428 5.41132 6.89976C5.05133 6.58096 4.69015 6.26369 4.32937 5.94527C4.09836 5.74142 3.86774 5.5368 3.63713 5.33218C3.4839 5.19654 3.24547 5.18849 3.10201 5.31532C2.91713 5.47856 2.91517 5.74103 3.09967 5.90542C3.2439 6.03455 3.39048 6.16138 3.5355 6.28936C4.0753 6.76565 4.6151 7.24155 5.15374 7.71899C5.23465 7.79064 5.32494 7.83356 5.4254 7.83203V7.83241Z" fill="white"/>
                </svg>
                Opération financée</p>
            </div>
            <div class="flex flex-col text-white">
              <h3 class="text-[21px] font-bold">Château de Chasselas</h3>
              <p class="">Club-deal • Dette privée</p>
              <ul class="mt-5">
                <li><span class="uppercase text-s">montant investi</span><span class="ml-2 font-bold">5 600 000€</span></li>
                <li><span class="uppercase text-s">taux cible</span><span class="ml-2 font-bold">9 %* / an</span></li>
                <li><span class="uppercase text-s">horizon cible</span><span class="ml-2 font-bold">12 mois</span></li>
              </ul>
            </div>
          </div>
        </article>
    </div>
  </section>


  <!--- -------- --->



  <div class="pb-[300px]"></div>

  <NuxtPage />
</template>
