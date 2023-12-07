<script setup>


useHead({
  bodyAttrs: {
    class: 'bg-white text-black font-proxima-nova overflow-x-hidden scroll-smooth'
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


    function handleVideoState() {
      if (video.paused) {
        playIcon.classList.add('hidden')
        pauseIcon.classList.remove('hidden')
      } 
      else {
        pauseIcon.classList.add('hidden')
        playIcon.classList.remove('hidden')
      }
    }
    
    video?.addEventListener('canplay', function() {
      handleVideoState()
    });

    playButton?.addEventListener('click', () => {
      handleVideoState()

      if (video.paused) {
        video.play();
      } 
      else {
        video.pause();
      }
    })

});

</script>


<style scoped lang="scss">
@import 'assets/style.scss';
</style>


<!-- Template in backend/templates/Front/Pages/LifeInsurance/free_management.html.twig -->

<template>
  
<section id="offer" class="flex flex-col relative md:max-h-[670px] md:min-h-[670px] px-5 py-8 lg:pt-14 lg:pb-5 lg:pr-16 lg:pl-[100px] xl:pl-[150px]">
  <img class="h-full w-full inset-0 z-[-1] absolute object-cover md:object-[50%]" src="@/assets/img/life_insurancev3_hero.jpg" alt="hero backround image" />
  <div class="flex-1 flex flex-col md:flex-row justify-between items-stretch gap-5 lg:gap-16">
    <div class="flex flex-col flex-1 lg:max-w-[490px] lg:mt-[80px] max-md:bg-white/95 rounded-xl max-md:p-4">
      <p class="text-xl font-semibold">Anaxago Patrimony</p>
      <h1 class="text-h1 leading-[58px] mt-2 mb-8">L’assurance vie de <span class="font-lora italic">la prochaine
          décennie</span></h1>
      <p class="text-justify leading-[28px] ">Un <b>contrat d'assurance-vie</b> permettant de bénéficier de l'expertise d'Anaxago tout
        en disposant d'une poche de liquidité grâce au fonds en euros Netissima de Generali Vie.</p>
    </div>

    <div class="flex-1 rounded-xl p-4 bg-slate-500 w-full min-h-[100px] lg:max-w-[430px] max-md:mx-auto">
    </div>
  </div>

  <p class="mt-3 text-center text-mini text-primary-dark/40">*Anaxago Value est un contrat libellé en euros et/ou en
    unités de compte et/ou en Engagements croissance donnant lieu à la constitution d’une provision de diversification
    (fonds croissance).</p>
</section>

<section class="px-5 pt-8 pb-5 lg:pt-14 lg:pb-8 lg:px-[100px] xl:pr-5 xl:pl-[150px] bg-secondary-neutral">
  <div class="flex flex-col xl:flex-row justify-between items-center gap-5 lg:gap-[50px] xl:gap-[5vw]">
    <div class="flex flex-col flex-1 xl:max-w-[380px] max-lg:mx-auto">
      <h2 class="text-h2 leading-[48px] mb-10">Un contrat dédié à <br class="hidden xl:block"> <span class="font-lora italic">l’immobilier d’avenir</span></h2>
      <p style="border: solid 1px #F2ECE5" class="w-full text-center md:w-fit py-3 px-5 rounded-lg mb-6">Objectif de rendement du FCPR : <b>7% / an*</b></p>
      <p class="text-justify text-m">
        Le contrat d’assurance vie Anaxago Value est le seul contrat vous permettant d’investir dans le FCPR Anaxago
        Society 2023, offrant une exposition au marché de la réhabilitation immobilière et classé article 8 au sens de
        la réglementation SFDR.
        <br><br>
        Le fonds en euros Netissima, de Generali Vie, offre également une poche de liquidité à votre contrat d’assurance
        vie dans la limite de 40%*.
      </p>
      
      <div class="max-md:text-center mt-5">
        <a href="#offer" class='tw-cta tw-cta--secondary font-semibold'>Découvrir l'offre</a>
      </div>
      <p class="md:hidden text-mini mt-2 text-center text-primary-dark/40">
          *Objectif de rentabilité annuel, net de frais d'Anaxago Patrimony concernant le FCPR Anaxago Society 2023, avant
          fiscalité et prélèvements. Ce taux ne présente pas une garantie de performance. Plus le taux est élevé, plus le
          risque est important. **L'investissement sur le fonds en euros Netissima est conditionné à un investissement minimum
          de 40% sur les supports en unités de compte.
      </p>
    </div>
    <div class="hidden group/wrapper md:flex md:flex-row items-stretch gap-1 hover:gap-0 duration-300 min-h-[300px] lg:gap-2 flex-1 w-full max-h-[700px] max-w-[785px] h-[700px]">
      <div class="group/item group-hover/wrapper:grow-0 overflow-hidden hover:!grow duration-300 flex-1 rounded-md bg-slate-500 relative">
          <div class="w-full h-full flex items-stretch">
            <img src="@/assets/img/life_insurancev3_realestate-1.png" alt="realestate-1" class="w-[388px] min-w-[388px] max-w-[388px] group-hover/item:min-w-[250px] group-hover/item:max-w-[300px] duration-300 h-full object-cover object-left">
            <div style="border-left: solid 1px #F2ECE5" class="bg-secondary-neutral p-8">
              <h4 class="text-justify text-xl font-semibold mb-8">Anaxago Value - Society 2023</h4>
              <p class="text-justify">Un contrat qui donne accès au dernier fonds de private equity immobilier de la gamme Anaxago Society, ayant pour vocation de permettre une exposition au marché de la réhabilitation immobilière, de la promotion et de l’immobilier géré, en ciblant des actifs bénéficiant d’un effet de rareté.</p>
              <ul style="border: solid 1px #F2ECE5" class="rounded-l px-4 py-2 mt-10 mb-8">
                <li class="flex items-center my-4 gap-3">
                  <svg class="min-w-[15px]" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3501 1.21521L5.45762 9.10995L1.87012 5.52143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p class="text-[15px]">Taille du fonds cible : 50 millions d’euros</p>
                </li>
                <li class="flex items-center my-4 gap-3">
                  <svg class="min-w-[15px]" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3501 1.21521L5.45762 9.10995L1.87012 5.52143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p class="text-[15px]">Centré sur la recherche de la <b>performance</b></p>
                </li>
                <li class="flex items-center my-4 gap-3">
                  <svg class="min-w-[15px]" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3501 1.21521L5.45762 9.10995L1.87012 5.52143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p class="text-[15px]"><b>Allocation diversifiée</b>, visant à saisir les opportunités du marché immobilier français</p>
                </li>
                <li class="flex items-center my-4 gap-3">
                  <svg class="min-w-[15px]" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3501 1.21521L5.45762 9.10995L1.87012 5.52143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p class="text-[15px]">Classé article 8 au sens de la réglementation SFDR</p>
                </li>
              </ul>
              <div class="grid grid-cols-2 gap-2 w-full mt-4">
                <a href="#offer" class='tw-cta tw-cta--secondary font-semibold max-lg:w-full'>Découvrir l'offre</a>
                <a
                  href="https://meetings.hubspot.com/contact-anaxago/anaxago-value"
                  class="tw-cta tw-cta--tertiary font-semibold max-lg:w-full"
                  target="_blank"
                >
                  Découvrir le fonds
                </a>
              </div>
            </div>

            <div class="group-hover/item:!bg-none duration-200 absolute inset-0 pt-4 pb-8 px-8 flex flex-col pointer-events-none" style="background: linear-gradient(0deg,rgba(0, 4, 7, 0.85) 6.52%,rgba(0, 4, 7, 0.72) 21%,rgba(0, 4, 7, 0.64) 36.61%,rgba(0, 4, 7, 0) 61.77%);">
              <svg class="group-hover/item:rotate-180 duration-200 ml-auto translate-x-4" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="group-hover/item:fill-black" fill-rule="evenodd" clip-rule="evenodd" d="M28.7599 22.1395L20.6033 13.5556C20.3179 13.2554 19.8432 13.2433 19.5429 13.5286C19.2427 13.8139 19.2306 14.2886 19.5159 14.5889L27.1847 22.6594L19.5159 30.7299C19.2306 31.0302 19.2427 31.5049 19.5429 31.7902C19.8432 32.0756 20.3179 32.0634 20.6033 31.7632L28.7599 23.1793C29.0366 22.8919 29.0405 22.4348 28.763 22.1428L28.7599 22.1395Z" fill="white"/>
                <path class="group-hover/item:fill-black" d="M28.7599 22.1395L28.4699 22.4151L28.4699 22.4151L28.7599 22.1395ZM20.6033 13.5556L20.3133 13.8312L20.3133 13.8312L20.6033 13.5556ZM19.5429 13.5286L19.2674 13.2386L19.2674 13.2386L19.5429 13.5286ZM19.5159 14.5889L19.2259 14.8644L19.2259 14.8644L19.5159 14.5889ZM27.1847 22.6594L27.4747 22.9349C27.6214 22.7805 27.6214 22.5383 27.4747 22.3839L27.1847 22.6594ZM19.5159 30.7299L19.8059 31.0055H19.8059L19.5159 30.7299ZM19.5429 31.7902L19.8185 31.5003H19.8185L19.5429 31.7902ZM20.6033 31.7632L20.8932 32.0387H20.8932L20.6033 31.7632ZM28.7599 23.1793L28.4718 22.9018L28.4699 22.9037L28.7599 23.1793ZM28.763 22.1428L29.053 21.8672L29.053 21.8672L28.763 22.1428ZM29.0499 21.864L20.8932 13.2801L20.3133 13.8312L28.4699 22.4151L29.0499 21.864ZM20.8932 13.2801C20.4557 12.8197 19.7278 12.8011 19.2674 13.2386L19.8185 13.8185C19.9586 13.6854 20.1801 13.691 20.3133 13.8312L20.8932 13.2801ZM19.2674 13.2386C18.807 13.6761 18.7884 14.404 19.2259 14.8644L19.8059 14.3134C19.6727 14.1732 19.6784 13.9517 19.8185 13.8185L19.2674 13.2386ZM19.2259 14.8644L26.8947 22.9349L27.4747 22.3839L19.8059 14.3134L19.2259 14.8644ZM19.8059 31.0055L27.4747 22.9349L26.8947 22.3839L19.2259 30.4544L19.8059 31.0055ZM19.8185 31.5003C19.6784 31.3671 19.6727 31.1456 19.8059 31.0055L19.2259 30.4544C18.7884 30.9148 18.807 31.6427 19.2674 32.0802L19.8185 31.5003ZM20.3133 31.4876C20.1801 31.6278 19.9586 31.6334 19.8185 31.5003L19.2674 32.0802C19.7278 32.5177 20.4557 32.4991 20.8932 32.0387L20.3133 31.4876ZM28.4699 22.9037L20.3133 31.4876L20.8932 32.0387L29.0499 23.4548L28.4699 22.9037ZM29.048 23.4567C29.4725 23.016 29.4786 22.3151 29.053 21.8672L28.473 22.4183C28.6025 22.5545 28.6007 22.7679 28.4718 22.9018L29.048 23.4567ZM29.053 21.8672L29.0499 21.864L28.4699 22.4151L28.473 22.4183L29.053 21.8672Z" fill="white"/>
              </svg>      
              <div class="mt-auto text-white group-hover/wrapper:opacity-0 group-hover/wrapper:min-w-[300px] duration-100 group-hover/item:!min-w-full overflow-hidden max-h-[350px]">
                <h3 class="text-xl font-bold">L’expertise d’Anaxago</h3>
                <p class="mt-4 text-m text-justify">Anaxago Value vous donne accès au dernier millésime de la gamme Anaxago Society ; un fonds de dette privée et de private equity immobilier.</p>
              </div>
            </div>
          </div>
      </div>
      <div class="group/item group-hover/wrapper:grow-0 overflow-hidden hover:!grow duration-300 flex-1 rounded-md bg-slate-500 relative">
          <div class="w-full h-full">
            <img src="@/assets/img/life_insurancev3_realestate-2.png" alt="realestate-2" class="w-[388px] min-w-[388px] max-w-[388px] h-full object-cover">
            <div class="absolute inset-0 pt-4 pb-8 px-8 flex flex-col" style="background: linear-gradient(0deg,rgba(0, 4, 7, 0.85) 6.52%,rgba(0, 4, 7, 0.72) 21%,rgba(0, 4, 7, 0.64) 36.61%,rgba(0, 4, 7, 0) 61.77%);">
              <svg class="group-hover/item:rotate-180 duration-200 ml-auto translate-x-4" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="group-hover/item:fill-black" fill-rule="evenodd" clip-rule="evenodd" d="M28.7599 22.1395L20.6033 13.5556C20.3179 13.2554 19.8432 13.2433 19.5429 13.5286C19.2427 13.8139 19.2306 14.2886 19.5159 14.5889L27.1847 22.6594L19.5159 30.7299C19.2306 31.0302 19.2427 31.5049 19.5429 31.7902C19.8432 32.0756 20.3179 32.0634 20.6033 31.7632L28.7599 23.1793C29.0366 22.8919 29.0405 22.4348 28.763 22.1428L28.7599 22.1395Z" fill="white"/>
                <path class="group-hover/item:fill-black" d="M28.7599 22.1395L28.4699 22.4151L28.4699 22.4151L28.7599 22.1395ZM20.6033 13.5556L20.3133 13.8312L20.3133 13.8312L20.6033 13.5556ZM19.5429 13.5286L19.2674 13.2386L19.2674 13.2386L19.5429 13.5286ZM19.5159 14.5889L19.2259 14.8644L19.2259 14.8644L19.5159 14.5889ZM27.1847 22.6594L27.4747 22.9349C27.6214 22.7805 27.6214 22.5383 27.4747 22.3839L27.1847 22.6594ZM19.5159 30.7299L19.8059 31.0055H19.8059L19.5159 30.7299ZM19.5429 31.7902L19.8185 31.5003H19.8185L19.5429 31.7902ZM20.6033 31.7632L20.8932 32.0387H20.8932L20.6033 31.7632ZM28.7599 23.1793L28.4718 22.9018L28.4699 22.9037L28.7599 23.1793ZM28.763 22.1428L29.053 21.8672L29.053 21.8672L28.763 22.1428ZM29.0499 21.864L20.8932 13.2801L20.3133 13.8312L28.4699 22.4151L29.0499 21.864ZM20.8932 13.2801C20.4557 12.8197 19.7278 12.8011 19.2674 13.2386L19.8185 13.8185C19.9586 13.6854 20.1801 13.691 20.3133 13.8312L20.8932 13.2801ZM19.2674 13.2386C18.807 13.6761 18.7884 14.404 19.2259 14.8644L19.8059 14.3134C19.6727 14.1732 19.6784 13.9517 19.8185 13.8185L19.2674 13.2386ZM19.2259 14.8644L26.8947 22.9349L27.4747 22.3839L19.8059 14.3134L19.2259 14.8644ZM19.8059 31.0055L27.4747 22.9349L26.8947 22.3839L19.2259 30.4544L19.8059 31.0055ZM19.8185 31.5003C19.6784 31.3671 19.6727 31.1456 19.8059 31.0055L19.2259 30.4544C18.7884 30.9148 18.807 31.6427 19.2674 32.0802L19.8185 31.5003ZM20.3133 31.4876C20.1801 31.6278 19.9586 31.6334 19.8185 31.5003L19.2674 32.0802C19.7278 32.5177 20.4557 32.4991 20.8932 32.0387L20.3133 31.4876ZM28.4699 22.9037L20.3133 31.4876L20.8932 32.0387L29.0499 23.4548L28.4699 22.9037ZM29.048 23.4567C29.4725 23.016 29.4786 22.3151 29.053 21.8672L28.473 22.4183C28.6025 22.5545 28.6007 22.7679 28.4718 22.9018L29.048 23.4567ZM29.053 21.8672L29.0499 21.864L28.4699 22.4151L28.473 22.4183L29.053 21.8672Z" fill="white"/>
              </svg>      
              <div class="mt-auto text-white group-hover/wrapper:opacity-0 group-hover/item:!opacity-100 group-hover/wrapper:min-w-[300px] duration-200 group-hover/item:!min-w-full">
                <h3 class="text-xl font-bold">Fonds en euros attractif</h3>
                <p class="mt-4 text-m text-justify">Retrouvez le fonds en euros Netissima, conçu par Generali Vie, offrant un rendement attractif et une liquidité dans la limite de 40%**.</p>
              </div>
            </div>
          </div>
          <div class="group/overlay w-full h-full flex absolute z-10 inset-0 opacity-0 group-hover/item:opacity-100 group-hover/item:duration-300 duration-100">
            <svg class="group-hover/overlay:rotate-180 duration-200 ml-auto absolute right-4 top-4" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="group-hover/item:fill-black" fill-rule="evenodd" clip-rule="evenodd" d="M28.7599 22.1395L20.6033 13.5556C20.3179 13.2554 19.8432 13.2433 19.5429 13.5286C19.2427 13.8139 19.2306 14.2886 19.5159 14.5889L27.1847 22.6594L19.5159 30.7299C19.2306 31.0302 19.2427 31.5049 19.5429 31.7902C19.8432 32.0756 20.3179 32.0634 20.6033 31.7632L28.7599 23.1793C29.0366 22.8919 29.0405 22.4348 28.763 22.1428L28.7599 22.1395Z" fill="white"/>
                <path class="group-hover/item:fill-black" d="M28.7599 22.1395L28.4699 22.4151L28.4699 22.4151L28.7599 22.1395ZM20.6033 13.5556L20.3133 13.8312L20.3133 13.8312L20.6033 13.5556ZM19.5429 13.5286L19.2674 13.2386L19.2674 13.2386L19.5429 13.5286ZM19.5159 14.5889L19.2259 14.8644L19.2259 14.8644L19.5159 14.5889ZM27.1847 22.6594L27.4747 22.9349C27.6214 22.7805 27.6214 22.5383 27.4747 22.3839L27.1847 22.6594ZM19.5159 30.7299L19.8059 31.0055H19.8059L19.5159 30.7299ZM19.5429 31.7902L19.8185 31.5003H19.8185L19.5429 31.7902ZM20.6033 31.7632L20.8932 32.0387H20.8932L20.6033 31.7632ZM28.7599 23.1793L28.4718 22.9018L28.4699 22.9037L28.7599 23.1793ZM28.763 22.1428L29.053 21.8672L29.053 21.8672L28.763 22.1428ZM29.0499 21.864L20.8932 13.2801L20.3133 13.8312L28.4699 22.4151L29.0499 21.864ZM20.8932 13.2801C20.4557 12.8197 19.7278 12.8011 19.2674 13.2386L19.8185 13.8185C19.9586 13.6854 20.1801 13.691 20.3133 13.8312L20.8932 13.2801ZM19.2674 13.2386C18.807 13.6761 18.7884 14.404 19.2259 14.8644L19.8059 14.3134C19.6727 14.1732 19.6784 13.9517 19.8185 13.8185L19.2674 13.2386ZM19.2259 14.8644L26.8947 22.9349L27.4747 22.3839L19.8059 14.3134L19.2259 14.8644ZM19.8059 31.0055L27.4747 22.9349L26.8947 22.3839L19.2259 30.4544L19.8059 31.0055ZM19.8185 31.5003C19.6784 31.3671 19.6727 31.1456 19.8059 31.0055L19.2259 30.4544C18.7884 30.9148 18.807 31.6427 19.2674 32.0802L19.8185 31.5003ZM20.3133 31.4876C20.1801 31.6278 19.9586 31.6334 19.8185 31.5003L19.2674 32.0802C19.7278 32.5177 20.4557 32.4991 20.8932 32.0387L20.3133 31.4876ZM28.4699 22.9037L20.3133 31.4876L20.8932 32.0387L29.0499 23.4548L28.4699 22.9037ZM29.048 23.4567C29.4725 23.016 29.4786 22.3151 29.053 21.8672L28.473 22.4183C28.6025 22.5545 28.6007 22.7679 28.4718 22.9018L29.048 23.4567ZM29.053 21.8672L29.0499 21.864L28.4699 22.4151L28.473 22.4183L29.053 21.8672Z" fill="white"/>
            </svg>    
            <div class="flex-1 max-w-fit">
              <img src="@/assets/img/life_insurancev3_realestate-2-stats.png" alt="Statistics" class="w-full h-full object-contain">
            </div>
            <div style="border-left: solid 1px #F2ECE5" class="flex-1 bg-secondary-neutral p-8">
              <h4 class="text-justify text-xl font-semibold mb-8">Un fonds en euros attractif</h4>
              <p class="text-justify">Netissima, conçu par l’assureur Generali, est un fonds en euros avec une composante immobilière supérieure à celle des fonds en euros classiques.</p>
              <ul style="border: solid 1px #F2ECE5" class="rounded-l px-4 py-2 mt-10 mb-8">
                <li class="flex items-center my-4 gap-3">
                  <svg class="min-w-[15px]" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3501 1.21521L5.45762 9.10995L1.87012 5.52143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p class="text-[15px]">Constitué d’<b>obligations et d’emprunts d’État</b> à l’instar d’un fonds en euros classique</p>
                </li>
                <li class="flex items-center my-4 gap-3">
                  <svg class="min-w-[15px]" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3501 1.21521L5.45762 9.10995L1.87012 5.52143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p class="text-[15px]"><b>Diversification</b> de votre épargne avec un portefeuille immobilier</p>
                </li>
                <li class="flex items-center my-4 gap-3">
                  <svg class="min-w-[15px]" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.3501 1.21521L5.45762 9.10995L1.87012 5.52143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <p class="text-[15px]">Rendement net <b>majoré à hauteur de 4,36%* maximum</b> jusqu'en 2024</p>
                </li>
              </ul>
              <p class="text-mini lg:text-s text-muted text-justify mx-auto">Le taux affiché n’est pas garanti et n’est pas contractuel. *Hypothèse d’un rendement de base 2023 similaire à celui de 2022 : 1,43%. Ajout du coefficient multiplicateur de 200% car la part en UC est > 60% : 1,43%*200% = 2,86%. Ajout de 1% pour une souscription faite avant le 31/07/2023 : 2,86% + 1% = 3,86%. Brut de frais de gestion de 0,85% / an.</p>
              <a href="#offer" class='tw-cta tw-cta--secondary font-semibold max-lg:w-full mt-4'>Découvrir l'offre</a>
            </div>
          </div>
      </div>
    </div>

    <div class="md:hidden flex flex-col gap-4 w-full">
      <div class="flex flex-col items-stretch">     
        <img src="@/assets/img/life_insurancev3_realestate-1.png" alt="realestate-1" class="w-full h-[300px] object-cover">
          <div class="bg-secondary-neutral p-5">
            <h4 class="text-justify text-xl font-semibold mb-4">Anaxago Value - Society 2023</h4>
            <p class="text-justify">Un contrat qui donne accès au dernier fonds de private equity immobilier de la gamme Anaxago Society, ayant pour vocation de permettre une exposition au marché de la réhabilitation immobilière, de la promotion et de l’immobilier géré, en ciblant des actifs bénéficiant d’un effet de rareté.</p>
            <ul style="border: solid 1px #F2ECE5" class="rounded-l px-4 py-2 mt-4 mb-2">
              <li class="flex items-center my-4 gap-3">
                <svg class="min-w-[15px]" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3501 1.21521L5.45762 9.10995L1.87012 5.52143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="text-[15px]">Taille du fonds cible : 50 millions d’euros</p>
              </li>
              <li class="flex items-center my-4 gap-3">
                <svg class="min-w-[15px]" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3501 1.21521L5.45762 9.10995L1.87012 5.52143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="text-[15px]">Centré sur la recherche de la <b>performance</b></p>
              </li>
              <li class="flex items-center my-4 gap-3">
                <svg class="min-w-[15px]" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3501 1.21521L5.45762 9.10995L1.87012 5.52143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="text-[15px]"><b>Allocation diversifiée</b>, visant à saisir les opportunités du marché immobilier français</p>
              </li>
              <li class="flex items-center my-4 gap-3">
                <svg class="min-w-[15px]" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.3501 1.21521L5.45762 9.10995L1.87012 5.52143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p class="text-[15px]">Classé article 8 au sens de la réglementation SFDR</p>
              </li>
            </ul>
            <div class="grid md:grid-cols-2 gap-2 w-full mt-2 place-items-center">
              <a href="#offer" class='tw-cta tw-cta--secondary font-semibold max-lg:w-full'>Découvrir l'offre</a>
              <a
                href="https://meetings.hubspot.com/contact-anaxago/anaxago-value"
                class="tw-cta tw-cta--tertiary font-semibold max-lg:w-full"
                target="_blank"
              >
                Découvrir le fonds
              </a>
            </div>
          </div>
      </div> 
      <div class="flex flex-col items-stretch">
        <img src="@/assets/img/life_insurancev3_realestate-2-stats-hz.png" alt="" class="w-full h-full max-h-[300px] mx-auto object-contain">
        <div class=" bg-secondary-neutral  p-5">
          <h4 class="text-justify text-xl font-semibold mb-4">Un fonds en euros attractif</h4>
          <p class="text-justify">Netissima, conçu par l’assureur Generali, est un fonds en euros avec une composante immobilière supérieure à celle des fonds en euros classiques.</p>
          <ul style="border: solid 1px #F2ECE5" class="rounded-l px-4 py-2 mt-4 mb-2">
            <li class="flex items-center my-4 gap-3">
              <svg class="min-w-[15px]" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3501 1.21521L5.45762 9.10995L1.87012 5.52143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p class="text-[15px]">Constitué d’<b>obligations et d’emprunts d’État</b> à l’instar d’un fonds en euros classique</p>
            </li>
            <li class="flex items-center my-4 gap-3">
              <svg class="min-w-[15px]" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3501 1.21521L5.45762 9.10995L1.87012 5.52143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p class="text-[15px]"><b>Diversification</b> de votre épargne avec un portefeuille immobilier</p>
            </li>
            <li class="flex items-center my-4 gap-3">
              <svg class="min-w-[15px]" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3501 1.21521L5.45762 9.10995L1.87012 5.52143" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p class="text-[15px]">Rendement net <b>majoré à hauteur de 4,36%* maximum</b> jusqu'en 2024</p>
            </li>
          </ul>
          <p class="text-mini lg:text-s text-muted text-justify mx-auto">Le taux affiché n’est pas garanti et n’est pas contractuel. *Hypothèse d’un rendement de base 2023 similaire à celui de 2022 : 1,43%. Ajout du coefficient multiplicateur de 200% car la part en UC est > 60% : 1,43%*200% = 2,86%. Ajout de 1% pour une souscription faite avant le 31/07/2023 : 2,86% + 1% = 3,86%. Brut de frais de gestion de 0,85% / an.</p>
          <a href="#offer" class='tw-cta tw-cta--secondary font-semibold !block w-full mt-4 mx-auto'>Découvrir l'offre</a>
        </div>
      </div>
    </div>
    
  </div>

  <p class="hidden md:block text-mini lg:text-s mt-2 lg:mt-8 text-center text-primary-dark/40">
    *Objectif de rentabilité annuel, net de frais d'Anaxago Patrimony concernant le FCPR Anaxago Society 2023, avant
    fiscalité et prélèvements. Ce taux ne présente pas une garantie de performance. Plus le taux est élevé, plus le
    risque est important. **L'investissement sur le fonds en euros Netissima est conditionné à un investissement minimum
    de 40% sur les supports en unités de compte.
  </p>
</section>

<section class="bg-primary-dark text-white">
  <div class="flex flex-col lg:flex-row items-stretch relative">
    <!--
    <div class="play-button cursor-pointer absolute z-10 top-[300px] left-1/2 -translate-y-1/2 lg:inset-x-1/2 -translate-x-1/2 lg:translate-y-1/2 w-[64px] h-[64px] p-4 lg:w-[100px] lg:h-[100px] lg:top-[50px] lg:p-8 bg-white rounded-full flex justify-center items-center duration-300 hover:bg-secondary-dark">
      <svg class="play w-full h-full translate-x-1" width="30" height="35" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.668 17.5007L0.917969 34.0995V0.901831L29.668 17.5007Z" fill="#031E31"/>
      </svg>
      <svg class="pause w-full h-full" width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H10V36H0V0Z" fill="#031E31"/>
        <path d="M14 0H24V36H14V0Z" fill="#031E31"/>
      </svg>
    </div>-->
    <div class="flex items-stretch flex-1 min-h-[300px] max-lg:max-h-[300px] lg:max-w-[50%] relative overflow-hidden">
      <div class="w-full relative">
        <img class="object-cover w-full h-full object-bottom" src="@/assets/img/life_insurancev3_video_placeholder.png" alt="Buildings">
      <!--
        <video id="video" class="w-full h-full object-cover" autoplay muted loop poster="@/assets/img/life_insurancev3_video_placeholder.png">
            <source src="@/assets/video/video.mp4" type="video/mp4">
        </video>-->
      </div>
    </div>
    <div class="flex flex-col flex-1 lg:max-w-[50%] items-stretch gap-8 p-5 pt-16 lg:px-12 xl:px-20 md:pb-10">
        <h2 class="font-bold text-xl">Une offre en gestion libre vous permettant de <br class="hidden xl:block"> piloter vous même
          votre contrat d’assurance vie</h2>
        <ul class="flex flex-col flex-1 items-stretch gap-4">
          <li style="border: solid 1px #233A4A" class="flex max-md:flex-col items-center gap-6 px-6 py-5">
            <div class="flex items-center justify-center w-[64px] min-w-[64px] lg:w-[48px] lg:min-w-[48px] aspect-square p-3 bg-primary-light rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none">
                <path
                  d="M19.0075 17.0938H3.6861C2.14769 17.0938 0.900391 15.9079 0.900391 14.4453H21.7932C21.7932 15.9079 20.5459 17.0938 19.0075 17.0938Z"
                  stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M2.99023 11.797V2.52736C2.99023 1.79572 3.61354 1.20312 4.38309 1.20312H18.3116C19.0812 1.20312 19.7045 1.79572 19.7045 2.52736V11.797"
                  stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

            <p class="font-light"><span class="font-semibold">Parcours 100% en ligne</span> : pilotage en toute liberté de votre éparge. Ouverture, versements, suivi,
              rachats et avances* effectuées en ligne sur votre compte Anaxago.</p>
          </li>

          <li style="border: solid 1px #233A4A" class="flex max-md:flex-col items-center gap-6 px-6 py-5">
              <div class="flex items-center justify-center w-[64px] min-w-[64px] lg:w-[48px] lg:min-w-[48px] aspect-square p-3 bg-primary-light rounded-full">

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                  <path
                    d="M0.210938 10.4391C0.210938 8.16141 0.210938 5.87833 0.210938 3.60064C0.210938 3.24525 0.26863 3.19141 0.64363 3.19141C4.78017 3.19141 8.91094 3.19141 13.0475 3.19141C13.4052 3.19141 13.4686 3.25064 13.4686 3.58987C13.4686 8.16679 13.4686 12.7437 13.4686 17.3206C13.4686 17.6599 13.4052 17.7191 13.0475 17.7191C8.90517 17.7191 4.76286 17.7191 0.626322 17.7191C0.280168 17.7191 0.210938 17.6599 0.210938 17.326C0.210938 15.0376 0.210938 12.7383 0.210938 10.4391ZM12.909 10.4606C12.909 8.29064 12.909 6.11525 12.909 3.94525C12.909 3.76756 12.8686 3.71371 12.6667 3.71371C8.78401 3.7191 4.89555 3.7191 1.01286 3.71371C0.810937 3.71371 0.770553 3.76756 0.770553 3.94525C0.770553 8.28525 0.770553 12.6253 0.770553 16.9599C0.770553 17.1178 0.853245 17.1968 1.01863 17.1968C4.89555 17.1968 8.77825 17.1968 12.6552 17.1968C12.8206 17.1968 12.9032 17.1178 12.9032 16.9599C12.9032 14.7953 12.9032 12.6253 12.9032 10.4606H12.909Z"
                    fill="white" stroke="white" stroke-width="0.1" />
                  <path
                    d="M15.7823 8.59368C15.7823 10.9629 15.7823 13.3321 15.7823 15.7014C15.7823 15.9921 15.7015 16.1052 15.5054 16.1052C15.3035 16.1052 15.2227 15.9921 15.2227 15.7014C15.2227 11.076 15.2227 6.4506 15.2227 1.82522C15.2227 1.52906 15.2573 1.56137 14.9285 1.56137C10.7573 1.56137 6.58038 1.56137 2.40923 1.56137C2.32846 1.56137 2.24192 1.56137 2.16115 1.5506C2.01692 1.52368 1.94769 1.42137 1.95346 1.28675C1.95346 1.15752 2.02846 1.07137 2.16692 1.04445C2.21884 1.03906 2.28807 1.03906 2.35153 1.03906C6.69 1.03906 11.0285 1.03906 15.3669 1.03906C15.7131 1.03906 15.7765 1.10368 15.7765 1.43214C15.7765 3.81752 15.7765 6.20829 15.7765 8.59368H15.7823Z"
                  fill="white" stroke="white" stroke-width="0.1" />
                <path
                  d="M6.82272 7.48954C5.72656 7.48954 4.63041 7.48954 3.53425 7.48954C3.47656 7.48954 3.41887 7.48954 3.36118 7.48954C3.19387 7.47339 3.10156 7.38724 3.10156 7.23108C3.10156 7.07493 3.1881 6.98339 3.35541 6.96724C3.4131 6.96185 3.47079 6.96724 3.52849 6.96724C5.7381 6.96724 7.94772 6.96724 10.1573 6.96724C10.1746 6.96724 10.1977 6.96724 10.215 6.96724C10.4631 6.96724 10.59 7.05878 10.5843 7.23647C10.5843 7.40878 10.4631 7.49493 10.2266 7.49493C10.0477 7.49493 9.86887 7.49493 9.69002 7.49493C8.7381 7.49493 7.78041 7.49493 6.82849 7.49493L6.82272 7.48954Z"
                  fill="white" stroke="white" stroke-width="0.1" />
                <path
                  d="M6.84002 10.72C5.7381 10.72 4.63618 10.72 3.53425 10.72C3.47656 10.72 3.41887 10.72 3.36118 10.72C3.19387 10.7039 3.10156 10.6177 3.10156 10.4616C3.10156 10.3054 3.1881 10.2139 3.35541 10.1977C3.4131 10.1923 3.47079 10.1977 3.52849 10.1977C5.7381 10.1977 7.94772 10.1977 10.1573 10.1977C10.1746 10.1977 10.1977 10.1977 10.215 10.1977C10.4631 10.1977 10.59 10.2892 10.5843 10.4669C10.5843 10.6392 10.4631 10.7254 10.2266 10.7254C10.0419 10.7254 9.85733 10.7254 9.66695 10.7254C8.72656 10.7254 7.78618 10.7254 6.84002 10.7254V10.72Z"
                  fill="white" stroke="white" stroke-width="0.1" />
                <path
                  d="M4.51502 13.9574C4.15733 13.9574 3.79964 13.9574 3.44195 13.9574C3.22272 13.9574 3.10733 13.8658 3.10156 13.6989C3.10156 13.532 3.21695 13.4351 3.43041 13.4297C4.16887 13.4297 4.90156 13.4297 5.64002 13.4297C5.85925 13.4297 5.97464 13.532 5.96887 13.6989C5.96887 13.8658 5.84772 13.9574 5.62849 13.9574C5.25925 13.9574 4.88425 13.9574 4.51502 13.9574V13.9574Z"
                  fill="white" stroke="white" stroke-width="0.1" />
              </svg>
            </div>

            <p class="font-light"><span class="font-semibold">Diversification de votre épargne</span> : accès à plus de 300 supports en unités de comptes (actions françaises ou internationales, obligations, OPC indiciels (ETF)).</p>
          </li>

          <li style="border: solid 1px #233A4A" class="flex max-md:flex-col items-center gap-6 px-6 py-5">
              <div class="flex items-center justify-center w-[64px] min-w-[64px] lg:w-[48px] lg:min-w-[48px] aspect-square p-3 bg-primary-light rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                  <path d="M0.141963 6.26959C0.137595 6.08377 0.144146 5.89795 0.15834 5.71259C0.215659 4.98477 0.422554 4.28739 0.782301 3.62181C1.6339 2.04804 3.26122 0.841816 5.23737 0.320255C5.59821 0.224848 5.96614 0.154428 6.34063 0.107633C6.73968 0.0581122 7.14037 0.0340332 7.54379 0.0399394C7.79599 0.043574 8.04711 0.0581122 8.29822 0.0830999C8.98387 0.150794 9.64331 0.298448 10.2782 0.523791C11.8433 1.07943 13.1409 2.08756 13.9161 3.34876C14.2201 3.84397 14.4385 4.36371 14.5706 4.9089C14.6197 5.11243 14.6557 5.31824 14.6792 5.52541C14.7076 5.77302 14.7174 6.02062 14.7092 6.26913C14.7038 6.4445 14.6983 6.62032 14.6863 6.79524C14.6732 6.98469 14.6497 7.17323 14.6203 7.36132C14.5695 7.68571 14.4958 8.00646 14.3932 8.32221C14.1792 8.98098 13.8347 9.58931 13.3707 10.1509C13.1463 10.4221 12.9029 10.681 12.649 10.9332C12.4187 11.1622 12.1861 11.3898 11.9568 11.6197C11.7308 11.8464 11.5174 12.0813 11.323 12.3284C10.9027 12.8631 10.6166 13.4433 10.4682 14.0707C10.4136 14.3006 10.3754 14.5319 10.3513 14.7654C10.3301 14.9726 10.3213 15.1802 10.3213 15.3883C10.3213 15.4946 10.2891 15.5927 10.2039 15.674C10.0675 15.8044 9.89442 15.8535 9.69353 15.8108C9.4921 15.7681 9.37091 15.6545 9.3256 15.4859C9.31741 15.4551 9.31796 15.4219 9.31796 15.3896C9.31796 15.1675 9.32614 14.9458 9.34689 14.7245C9.3649 14.5314 9.39056 14.3388 9.42604 14.1475C9.57016 13.3697 9.88405 12.6446 10.395 11.9804C10.6199 11.6874 10.8699 11.4098 11.1353 11.1422C11.3804 10.8946 11.6298 10.6502 11.8766 10.4035C12.1261 10.1536 12.3641 9.89598 12.5786 9.62429C13.0224 9.06185 13.3298 8.45124 13.5012 7.79338C13.5569 7.5803 13.6 7.36587 13.6316 7.14915C13.689 6.75571 13.7124 6.36091 13.7004 5.96519C13.6786 5.22465 13.4755 4.51954 13.0917 3.85124C12.3559 2.57051 11.0419 1.60144 9.42604 1.14712C9.10397 1.05671 8.77533 0.98947 8.43961 0.944493C8.06785 0.894517 7.69337 0.869075 7.3167 0.876344C5.89245 0.903604 4.61669 1.28069 3.50251 2.01987C2.46039 2.71089 1.75837 3.59546 1.38443 4.65947C1.30036 4.89799 1.2414 5.14106 1.20046 5.38684C1.15242 5.67534 1.13823 5.96519 1.14314 6.25641C1.14751 6.49448 1.16225 6.73254 1.19009 6.96924C1.23867 7.38585 1.32711 7.79611 1.47013 8.19773C1.66938 8.7579 1.97618 9.27447 2.37632 9.75378C2.59796 10.0191 2.84088 10.2708 3.09199 10.517C3.35839 10.7787 3.62697 11.0391 3.88245 11.3085C4.14285 11.5829 4.38632 11.8664 4.59813 12.1685C4.94313 12.6601 5.18715 13.1844 5.33563 13.74C5.40223 13.9903 5.45082 14.2429 5.48357 14.4978C5.52124 14.7931 5.53925 15.0893 5.5398 15.386C5.5398 15.4305 5.53598 15.4746 5.52124 15.5177C5.44973 15.7195 5.23628 15.8131 5.06159 15.8194C4.78919 15.8294 4.54244 15.6536 4.53589 15.406C4.53207 15.2606 4.5288 15.1157 4.5217 14.9703C4.51024 14.7404 4.47912 14.5119 4.43599 14.2847C4.37922 13.9894 4.29515 13.6996 4.17888 13.4165C3.996 12.9704 3.73342 12.5583 3.40971 12.1721C3.20445 11.9268 2.97899 11.6946 2.74808 11.4657C2.49697 11.2167 2.24421 10.9695 1.99692 10.7178C1.70323 10.4194 1.43356 10.1063 1.19773 9.77331C0.831431 9.2572 0.569946 8.70566 0.402902 8.12322C0.328114 7.86198 0.271886 7.59802 0.23149 7.33179C0.201465 7.13371 0.177992 6.93471 0.167074 6.73527C0.158885 6.57989 0.150697 6.42497 0.142509 6.26959H0.141963Z" fill="white"/>
                  <path d="M7.42185 17.6011C6.58772 17.6011 5.75359 17.6011 4.91945 17.6011C4.85886 17.6011 4.79827 17.6002 4.73931 17.5857C4.52914 17.5343 4.36755 17.3721 4.37738 17.1659C4.3872 16.9664 4.56408 16.8029 4.79608 16.7729C4.8343 16.7679 4.87305 16.7656 4.91181 16.7656C6.5899 16.7656 8.26744 16.7656 9.94553 16.7656C9.99357 16.7656 10.0427 16.7688 10.0897 16.7774C10.3211 16.8192 10.4865 17.0014 10.4761 17.199C10.4658 17.393 10.3102 17.5484 10.0831 17.5916C10.0547 17.597 10.0258 17.5984 9.99685 17.6002C9.9701 17.6016 9.94335 17.6011 9.9166 17.6011C9.0852 17.6011 8.25325 17.6011 7.42185 17.6011V17.6011Z" fill="white"/>
                  <path d="M7.42135 19.5972C6.58722 19.5972 5.75309 19.5972 4.91896 19.5972C4.85836 19.5972 4.79777 19.5963 4.73881 19.5818C4.52755 19.53 4.36706 19.3673 4.37743 19.162C4.38725 18.9625 4.56413 18.799 4.79668 18.7694C4.83707 18.7644 4.87856 18.7622 4.91951 18.7622C6.59268 18.7622 8.26531 18.7622 9.93849 18.7617C9.99472 18.7617 10.0499 18.7649 10.1044 18.7772C10.3294 18.8271 10.4833 18.9984 10.4767 19.1901C10.4696 19.3896 10.3026 19.555 10.0684 19.5909C10.0258 19.5972 9.98161 19.5972 9.93794 19.5972C9.63497 19.5977 9.332 19.5972 9.02848 19.5972H7.42081H7.42135Z" fill="white"/>
                </svg>
              </div>

              <p class="font-light"><span class="font-semibold">Fiscalité avantageuse</span> : tant que l’épargne est investie ; exonération d’imposition. Fiscalité allégée après 8 ans de détention.</p>
          </li>
        </ul>

        <div class="flex flex-col items-center lg:items-stretch max-md:justify-center md:flex-row lg:flex-col xl:flex-row gap-3 mt-4">
          <a href="#offer" class='tw-cta tw-cta--primary font-semibold max-lg:w-full'>Découvrir l'offre</a>
          <a
              href="https://meetings.hubspot.com/contact-anaxago/anaxago-value"
              class="tw-cta tw-cta--tertiary font-semibold max-lg:w-full border !border-white !bg-transparent !text-white hover:!text-primary-light hover:!bg-white"
              target="_blank"
            >
                <span>Être rappelé par un conseiller</span>
            </a>
        </div>

        <p class="text-mini text-gray-dark/90 lg:text-s">*Les modalités de souscription, consultation et gestion en ligne du contrat sont précisées dans la Note d’Information valant Conditions Générales du contrat d’assurance vie Anaxago Value. </p>
    </div>
</div>
</section>

<section class="p-5 md:px-20 lg:pt-14 lg:pb-8 lg:px-[100px] xl:px-[150px]">
    <div class="flex flex-col justify-center gap-8 text-center items-stretch relative">
        <h2 class="text-h2 font-lora italic leading-[48px]">Des frais réduits*</h2>
        
        <ul class="grid grid-cols-2 gap-7 lg:grid-cols-4 lg:gap-14">
           <li>
            <p class="text-[28px] font-semibold mb-3 leading-8">0%</p>
            <p style="border: solid 1px #F2ECE5" class="text-[#8E837A] bg-secondary-neutral w-full px-2 py-1 rounded-md">de frais d’entrée</p>
           </li>
           <li>
            <p class="text-[28px] font-semibold mb-3 leading-8">0%</p>
            <p style="border: solid 1px #F2ECE5" class="text-[#8E837A] bg-secondary-neutral w-full px-2 py-1 rounded-md">de frais d’arbitrage</p>
           </li>
           <li>
            <p class="text-[28px] font-semibold mb-3 leading-8">0,85%</p>
            <p style="border: solid 1px #F2ECE5" class="text-[#8E837A] bg-secondary-neutral w-full px-2 py-1 rounded-md">de frais de gestion</p>
           </li>
           <li>
            <p class="text-[28px] font-semibold mb-3 leading-8">0%</p>
            <p style="border: solid 1px #F2ECE5" class="text-[#8E837A] bg-secondary-neutral w-full px-2 py-1 rounded-md">de frais de sortie</p>
           </li>
        </ul>

        <div class="grid max-lg:w-full max-md:place-items-center md:grid-cols-2 gap-3 mt-4 mx-auto">
          <a 
              href="#offer" 
              class='tw-cta tw-cta--secondary font-semibold max-lg:w-full lg:w-[310px] whitespace-nowrap flex-1'
            >
                Découvrir l'offre
          </a>
       
          <a
              href="https://meetings.hubspot.com/contact-anaxago/anaxago-value"
              class="tw-cta tw-cta--tertiary font-semibold max-lg:w-full flex-1 lg:w-[310px] whitespace-nowrap "
              target="_blank"
            >
                Être rappelé par un conseiller
            </a>
        </div>


        <p class="text-mini text-muted lg:text-s max-w-[80%] mx-auto">
          *Hors frais éventuels qui s’appliquent aux supports d’investissement. Le contrat comporte des frais annuels de gestion précisés dans la Note d’Information valant Conditions Générales du contrat d’assurance vie Anaxago Value.
        </p>
  </div>
</section>

<section class="bg-primary-dark text-white">
    <div class="flex flex-col items-stretch pb-5 lg:pb-10">

      <div class="flex items-stretch min-h-[150px] md:min-h-[300px] relative">
        <img class="h-full w-full inset-0 z-[1] absolute" src="@/assets/img/life_insurancev3_partnership.jpg" alt="hero backround image" />
      </div>
      <div class="flex flex-col md:justify-center md:flex-row items-start gap-6 py-8 px-6 lg:pt-20 lg:pb-10 lg:px-[100px] xl:px-[150px]">
        <svg width="72" height="67" viewBox="0 0 72 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.98">
            <path d="M0 5C0 2.23857 2.23858 0 5 0H67C69.7614 0 72 2.23858 72 5V61.5217C72 64.2832 69.7614 66.5217 67 66.5217H5C2.23857 66.5217 0 64.2832 0 61.5217V5Z" fill="#C62F2A"/>
            <path d="M22.8028 47.889L22.8066 44.8297C24.7239 44.8297 25.4266 44.7346 25.7615 47.086H25.9638V44.4668L20.7435 44.4716V44.8307H21.6466V51.5633H20.6508V51.9192H26.0311V49.1658H25.7615C25.492 51.2461 24.9666 51.5615 23.4868 51.5615H22.8V48.2904H23.1951C23.8584 48.3045 24.2347 48.6905 24.3711 49.8342H24.6157L24.611 46.4502C24.6063 46.4549 24.3711 46.4502 24.3711 46.4502C24.3711 46.4643 24.324 47.9045 23.1622 47.881H22.7953L22.8028 47.889ZM20.6687 48.0236H17.7241V48.3591H18.733V50.7783C18.5628 51.3948 17.6568 51.6504 17.3878 51.6504C15.5048 51.6504 15.6403 48.8962 15.6403 48.1605C15.6403 47.4866 15.573 44.6683 17.3873 44.6683C18.6658 44.6683 19.3375 45.9414 19.6075 47.0841H19.8112C19.8112 46.6135 19.8173 44.3722 19.8131 44.377C19.8131 44.3605 18.9334 45.0104 18.9334 45.0001C18.9522 44.9954 18.5289 44.3977 17.3859 44.3977C15.1657 44.3977 14.3519 46.6144 14.3566 48.1605C14.3665 49.5744 15.0203 51.9855 17.3863 51.9855C18.1295 51.9855 18.6531 51.6076 18.9339 51.176C18.9358 51.168 19.8714 51.9135 19.8747 51.9182V48.3591H20.6677L20.6687 48.0236ZM55.0829 49.1682C54.8158 51.2485 54.288 51.5591 52.8091 51.5591H52.7197V44.826H53.6605V44.4636H50.5663V44.826H51.5071V51.5572H50.7615L48.0131 44.2649H47.6076C47.617 44.2588 45.3253 50.8832 45.3201 50.903C45.3258 50.8818 45.1479 51.4702 44.7698 51.5431C44.4231 51.56 44.4485 51.3784 44.4485 51.3148V50.0394C44.4485 49.7052 44.4226 48.9428 44.0745 48.5931C43.6841 48.201 43.019 48.1723 43.0331 48.1582C43.0331 48.1582 44.7241 47.8085 44.7241 46.2003C44.7241 45.0745 43.9409 44.5153 42.6328 44.4654H38.9186V44.8278H39.8688V51.56H38.9186V51.9177H41.9653V51.56H41.0152V48.3238H42.2814C44.4809 48.5041 41.9051 51.9206 44.7858 51.9187H46.5967V51.5586C46.4932 51.5586 45.83 51.5789 45.7877 51.1153C45.7594 50.7811 46.2251 49.5762 46.2251 49.5762H48.6946C48.6899 49.5715 49.4614 51.5624 49.4661 51.5624H48.6053V51.9201H55.3412V49.1715H55.0731L55.0829 49.1682ZM42.2283 47.9464H41.0194V44.826H42.5655C43.4687 44.9624 43.5063 46.012 43.5063 46.3462C43.5063 47.151 43.1676 47.9464 42.2222 47.9464H42.2283ZM46.3898 49.2313L47.4622 46.0111L48.6053 49.2313H46.3898ZM35.2515 44.8269C37.1707 44.8269 37.8777 44.7346 38.2103 47.086H38.4144V44.4692H30.8064V44.8269H31.0054C31.2744 44.8269 31.9123 44.8467 31.948 45.4058V49.701L28.3872 44.4687H26.4492V44.8264H26.7705C27.1515 44.8264 27.6896 44.8405 27.7132 45.4053V50.9072C27.7132 51.4391 26.9102 51.6462 26.5739 51.6462H26.5701V51.9144H29.1949V51.6462C28.8576 51.6462 28.049 51.4391 28.049 50.9072L28.0584 46.0595C29.4682 48.0739 32.1287 51.9144 32.1531 51.9097H32.2848V45.4058C32.3225 44.8467 32.9594 44.8269 33.2279 44.8269H34.1019V51.5643H33.1047V51.9182H38.4859V49.1649H38.2154C37.9473 51.2452 37.4252 51.5643 35.9435 51.5643H35.2567V48.2932H35.6565C36.3245 48.3092 36.7008 48.6957 36.8325 49.8379H37.0771V46.4539C37.0724 46.4634 36.8419 46.4539 36.8419 46.4539C36.8419 46.4728 36.7949 47.9115 35.633 47.8894H35.2661V44.8269H35.2515ZM58.7317 44.8269V44.4645H55.6977V44.8269H56.6512L56.6545 51.5544H55.6996V51.9182H58.7383V51.5544H57.7834V44.8269H58.7317ZM50.7178 39.87L51.6585 39.5142L51.6717 39.5076C53.0076 38.9541 53.1958 38.611 53.1337 37.7219V34.1327C54.1483 36.7119 55.1093 38.5267 57.0769 38.5267C57.345 38.5267 57.6272 38.4924 57.9377 38.4232L58.7044 38.2491L58.1776 37.6669C57.8389 37.2932 57.6743 37.0051 57.4861 36.6719C57.4109 36.5354 57.3309 36.3919 57.2321 36.2342C56.7711 35.4868 55.6752 35.2341 54.7861 35.6318C54.3816 34.8326 53.9771 33.7896 53.4879 32.5019L53.3797 32.2572L53.1257 31.6783V31.6453H53.1116C52.8105 30.9662 52.4859 30.2852 52.1002 29.6451C51.7474 29.0648 51.3947 28.5635 51.0089 28.1136C49.9788 26.904 48.6241 26.1557 46.9683 25.8827C45.8253 25.6897 45.0162 25.6521 43.9908 25.6003C43.7791 25.5909 43.5533 25.5768 43.3182 25.5673C42.8525 25.5391 41.8929 25.4638 40.9662 25.3838C40.3406 25.332 39.7009 25.2802 39.1976 25.2426C39.2305 25.1014 39.2493 24.9508 39.2493 24.8002C39.2493 24.5931 39.2305 24.4095 39.1929 24.2495H45.7736C47.4669 24.2495 48.6946 23.4965 49.4237 22.0233C51.1077 22.0045 52.326 21.242 53.0457 19.7501H53.2809C55.0354 19.7501 56.2914 18.95 57.0063 17.3686L57.3027 16.7144H35.0399C33.576 16.7144 32.329 17.6698 31.8624 19.1476L31.8483 19.1994C31.4696 18.1404 30.7758 17.2462 29.8868 16.7144C28.6497 15.9755 27.2456 15.7307 26.1237 16.0508C25.7545 16.1543 25.3852 16.3237 25.0842 16.5214C24.8302 16.6908 24.468 16.9638 24.2064 17.298C23.9242 17.6604 23.6467 18.1028 23.4444 18.517C23.3174 18.6252 23.2186 18.7288 23.1481 18.8323L22.88 19.3312L22.8658 19.3594C22.546 20.0795 22.1556 20.5831 21.8545 20.9361C21.5535 21.2844 21.5394 21.6186 21.5817 21.8351C21.624 22.0751 21.751 22.2681 21.8874 22.414L21.878 22.4281C21.7887 22.5787 21.7416 22.7575 21.7416 22.9364C21.7416 23.5247 22.2543 23.9671 22.88 23.9671C23.3362 23.9671 23.7125 23.7506 24.1077 23.4918C24.2676 23.3835 24.6909 23.1011 24.8321 23.087C25.0061 23.087 25.166 23.247 25.166 23.4212C25.166 23.9012 24.5451 24.1648 24.0983 24.1977L23.1904 24.2919C22.5366 24.3531 22.2261 24.6966 22.2261 25.0073C22.2261 25.3179 22.3719 25.492 22.4754 25.5956L22.5413 25.6615L22.7718 25.8686L21.8122 27.4123C21.1254 26.7769 20.3258 26.3957 19.6155 26.3722C19.1545 26.3533 18.7594 26.4945 18.4678 26.7722C18.3831 26.8522 18.3078 26.9416 18.242 27.0452H18.2279C17.4705 27.0452 16.859 27.4499 16.558 27.9065C16.2334 28.4054 16.351 29.2667 16.7603 29.9256L14.3477 30.5708V42.1583H58.7896V39.8521H50.7178V39.87ZM56.4499 36.7166C56.5378 36.8602 56.6126 36.9943 56.6869 37.1237C56.7763 37.2838 56.8643 37.4381 56.9678 37.5977C56.2707 37.5553 55.7419 37.1684 55.2527 36.437C55.709 36.2799 56.25 36.3919 56.4522 36.7171L56.4499 36.7166ZM46.8324 26.7915C48.2652 27.0268 49.4393 27.6716 50.3203 28.7071C50.5084 28.9301 50.69 29.1655 50.8683 29.4206C48.4576 29.1043 47.6193 28.7522 46.2708 26.7049C46.4504 26.7284 46.6353 26.7567 46.8319 26.7896L46.8324 26.7915ZM45.7924 23.336H41.2673C41.653 22.9943 41.9776 22.558 42.241 22.0299H48.3889C47.8103 22.9166 46.973 23.336 45.7924 23.336ZM49.3913 21.1107H44.8681C45.2679 20.7596 45.6019 20.3073 45.8667 19.7567H52.0193C51.4431 20.6777 50.5941 21.1107 49.3913 21.1107ZM49.6984 17.6439H55.8261C55.2509 18.4544 54.4338 18.837 53.3035 18.837H48.7807C49.1396 18.517 49.4473 18.1216 49.698 17.6416L49.6984 17.6439ZM24.9346 17.8769C25.0804 17.6886 25.3133 17.4862 25.5964 17.3027C25.8147 17.1521 26.1026 17.025 26.382 16.945C26.8255 16.8179 27.3368 16.8085 27.8651 16.9073L26.239 17.915C26.0367 17.8943 25.8354 17.8844 25.6463 17.8844C25.3688 17.8844 25.1148 17.9065 24.8843 17.9456C24.8993 17.9221 24.9172 17.8985 24.9313 17.8797L24.9346 17.8769ZM23.0357 25.0642C23.0498 24.9997 23.1015 24.9498 23.1561 24.9513L23.9463 24.9762C24.9134 24.9433 25.8965 24.5456 26.0066 23.5393C26.0066 22.8578 25.524 22.1961 24.84 22.1961C24.4779 22.1961 24.0663 22.4488 23.6053 22.7543C23.3089 22.9519 23.0691 23.1101 22.8903 23.1101C22.768 23.1101 22.6739 23.0282 22.6739 22.9618C22.6739 22.951 22.6739 22.9383 22.6833 22.9289L23.1914 22.2511L22.7539 21.9565C22.6645 21.8967 22.5187 21.7809 22.4999 21.6953C22.4952 21.6548 22.5516 21.5823 22.5704 21.5597C22.7539 21.3494 22.9609 21.0919 23.1725 20.7737C23.3042 20.5925 23.3795 20.4932 23.5959 20.4932C23.8123 20.4932 23.9863 20.665 23.9863 20.8754C23.9863 21.0143 24.1368 21.1239 24.3297 21.1239C24.5178 21.1239 24.6025 20.9902 24.7201 20.8754C24.7201 20.8754 25.1717 20.4612 24.9318 20.2659C24.659 20.0428 23.5677 20.4979 23.8734 19.494L23.9487 19.3514C24.0663 19.1961 24.5884 18.8088 25.6703 18.8088C25.8725 18.8088 26.0889 18.8229 26.3147 18.8511L26.4746 18.87L28.7654 17.4533C28.7842 17.5004 28.7936 17.5333 28.7936 17.5333V17.5474C28.9112 18.2393 28.4785 19.0676 27.7776 19.4677L27.4954 19.6277L27.6788 20.6631C27.0908 20.842 26.6816 21.3126 26.6816 21.8821C26.6816 22.0751 26.7239 22.3057 26.7851 22.5975C26.8509 22.9223 26.9215 23.2894 26.9403 23.6659C26.9403 24.739 25.4586 25.4497 24.2027 25.412L24.1698 25.4073C24.118 25.4073 23.3184 25.3414 23.1208 25.1861C23.0832 25.1532 23.0549 25.092 23.0643 25.0449L23.0357 25.0642ZM17.3821 28.4336C17.5656 28.1559 17.9795 27.9159 18.4969 28.0053L18.8873 28.0759L19.0096 27.6947C19.0473 27.5911 19.0896 27.5158 19.1508 27.4594C19.2636 27.3558 19.4283 27.3088 19.6352 27.3135C20.1903 27.3323 20.8818 27.7182 21.4462 28.3254C21.6532 28.5419 21.8366 28.8007 21.9966 29.0596C22.0295 29.1113 22.0671 29.1678 22.0954 29.2196C22.1424 29.2902 22.18 29.3514 22.1894 29.3655C22.213 29.4032 22.4905 29.8173 22.4717 29.8456C22.6645 29.5773 22.8527 29.309 23.0455 29.0408C23.0502 29.036 23.0455 29.0125 23.0267 28.9749C22.9844 28.8854 22.8856 28.7254 22.8245 28.6313L22.7821 28.5607V28.556L22.721 28.4571C22.6598 28.3583 22.5657 28.2124 22.5281 28.1324L23.7276 26.2121C24.0286 26.2733 24.2826 26.2827 24.4049 26.2827H24.4379C26.1313 26.2827 27.8811 25.3038 27.8811 23.6706V23.6283C27.8576 23.1811 27.7776 22.7575 27.707 22.414C27.6647 22.1881 27.6224 21.9763 27.6224 21.8727C27.6224 21.6892 27.8717 21.4915 28.2339 21.4915H28.7795L28.5302 20.0748C29.3016 19.5053 29.772 18.5829 29.7485 17.698C30.5811 18.3334 31.1644 19.4394 31.2726 20.6161C31.3055 20.9549 31.2349 21.435 31.1267 21.9339L31.0703 22.141H31.0797C30.8821 22.9599 30.5952 23.8024 30.44 24.2024L30.2989 24.5696L30.6422 24.7625C31.2584 25.1108 31.6395 25.365 31.6395 26.1792C31.6395 27.1139 30.7975 27.8265 29.9884 27.9771L28.8783 28.1889L29.8144 28.8148C30.1154 29.0125 30.2942 29.342 30.2942 29.6903C30.2942 30.2739 29.8003 30.7492 29.184 30.7492H28.8313L28.7325 31.074C28.3891 32.1955 28.0175 32.7448 26.8133 32.8624C26.8698 32.5236 26.9074 32.1941 26.9074 31.7282C26.9074 31.6199 26.898 31.314 26.8933 31.218L26.8415 30.1713L26.103 30.9196C25.8537 31.1737 25.4116 31.3724 24.9271 31.4674V30.5708L19.663 29.206L17.7937 29.6907C17.375 29.2718 17.2904 28.5819 17.3957 28.4218L17.3821 28.4336ZM15.8679 39.8587L19.6498 38.8731L23.427 39.8592H15.8529L15.8679 39.8587ZM23.9868 39.0515L19.6498 37.922L15.3129 39.0468V31.3004L19.6498 30.1741L23.9868 31.3008V39.0666V39.0515ZM26.0047 37.5407C25.611 38.1055 25.564 38.8821 25.8589 39.8563H24.8843V32.42C25.2248 32.3683 25.5922 32.2741 25.9332 32.1141C25.9125 32.4389 25.8702 32.6977 25.8086 33.0413C25.7954 33.1213 25.7803 33.206 25.7662 33.2954L25.674 33.832H26.2197C27.0334 33.832 27.6402 33.7049 28.1059 33.4649V36.5665C28.1059 36.6465 28.0448 36.7124 27.9695 36.7124H27.8284C27.0146 36.7124 26.342 37.0136 25.9751 37.5454L26.0047 37.5407ZM35.966 37.7431C35.6321 38.1243 35.3075 38.788 35.5192 39.861H29.8939C30.4997 39.7999 30.9381 39.6587 31.2415 39.3433C31.6103 38.9574 31.6427 38.4303 31.6305 38.0584C31.6427 38.0208 31.7044 37.8937 31.98 37.7713L32.4659 37.5454L32.1743 37.0983C31.6935 36.3547 31.9033 34.7403 32.0896 33.8602H32.1329C34.0426 33.8602 35.2779 33.4649 36.5804 33.046C36.9205 32.9378 37.2718 32.8248 37.6411 32.7165H37.6519C37.6604 32.7118 38.0414 32.5895 38.5597 32.4718L40.3957 35.5127L40.4126 35.5372C40.596 35.7988 40.6186 35.9702 40.2856 36.3585L39.3636 37.3506L37.856 37.071H37.8434C37.1613 36.9675 36.4275 37.2357 35.9736 37.7535L35.966 37.7431ZM36.4689 39.8714C36.3024 39.2219 36.371 38.6995 36.6679 38.3606C36.9548 38.0359 37.3875 37.937 37.698 37.9794L39.4478 38.3041L39.4949 38.3135H39.7395L40.9766 36.9816L40.9907 36.9722C41.2024 36.7274 41.8421 35.9791 41.1883 35.0331L39.5372 32.3127C39.81 32.2751 40.0876 32.2515 40.3416 32.2515H40.3557C40.3651 32.2515 41.193 32.2421 42.082 32.7598C42.2043 33.0187 42.3689 33.3576 42.5571 33.7341C42.9052 34.4401 43.3379 35.3155 43.4555 35.6685C43.4931 35.7814 43.6107 36.1203 43.1968 36.5486L40.0311 39.8902H36.4891L36.4689 39.8714ZM47.2595 39.8714H41.2772L43.8408 37.1604C44.3582 36.6286 44.5237 35.9838 44.3064 35.3531C44.1804 34.9907 43.8417 34.2895 43.4908 33.5741C44.5087 34.0494 46.0497 34.473 49.1909 34.7272C49.57 34.7601 49.6693 34.8872 49.7445 35.2355L49.8857 36.591L48.244 36.9581C47.6937 37.071 47.2656 37.4287 47.0587 37.9558C46.8376 38.5347 46.9128 39.2172 47.2656 39.8855L47.2595 39.8714ZM47.9195 38.29C48.0088 38.0594 48.1876 37.9135 48.4275 37.8664L50.8876 37.3205L50.6618 35.0802C50.6006 34.7978 50.4172 33.9224 49.2789 33.8282C44.8902 33.4752 43.8694 32.821 42.8017 32.1339V32.1245L42.797 32.1292L42.7264 32.0868C41.5881 31.3479 40.4545 31.3432 40.3463 31.3479C39.1045 31.3479 37.5287 31.8421 37.4017 31.8844C37.0206 31.9974 36.6679 32.1103 36.3245 32.2186C34.951 32.661 33.7609 33.0469 31.7665 32.9858L31.4043 32.9763L31.3102 33.3293C31.2396 33.6023 30.6799 35.805 31.2208 37.2263C30.741 37.6076 30.741 38.05 30.741 38.1065C30.7598 38.5912 30.6469 38.7136 30.6093 38.7512C30.3788 38.9913 29.6121 39.0242 28.9677 39.0242H28.7231L28.5867 39.2172C28.1868 39.7632 27.3307 39.8949 26.7804 39.7537C26.5405 39.0195 26.5358 38.4547 26.7663 38.1206C27.0438 37.7252 27.6271 37.6829 27.8623 37.6829H28.0034C28.5867 37.6829 29.0617 37.2028 29.0617 36.6192V32.6657C29.2405 32.3927 29.3816 32.0727 29.5086 31.7197C30.4729 31.5644 31.2114 30.7455 31.2114 29.7618C31.2114 29.3853 31.0985 29.0182 30.9009 28.7075C31.79 28.2792 32.552 27.4038 32.552 26.2554C32.552 25.107 31.9734 24.5799 31.4231 24.2316C31.5783 23.7939 31.837 23.0173 32.0064 22.2361L32.7778 19.4733C33.1212 18.3908 34.0243 17.6896 35.078 17.6896H48.6627C48.0888 18.4991 47.2703 18.8803 46.1414 18.8803H37.9097L37.4816 19.8028H44.8286C44.2486 20.7253 43.4019 21.1583 42.1991 21.1583H36.8508L36.4209 22.0807H41.1859C40.612 22.9656 39.7748 23.3845 38.5941 23.3845H35.6824L35.2544 24.3055H38.3072C38.3354 24.3432 38.4106 24.4844 38.4106 24.8562C38.4106 25.4445 37.9167 25.9293 37.3052 25.9293C37.0983 25.9293 36.9195 25.8803 36.6044 25.7532C36.4708 25.6949 36.3353 25.6379 36.1998 25.5819L35.4943 26.2173L35.8894 26.3867C36.5009 26.655 36.8443 26.7915 37.3085 26.7915C37.8716 26.7915 38.3787 26.5609 38.7371 26.1891C39.2606 26.222 40.104 26.2926 40.922 26.3585C41.8981 26.4385 42.8195 26.5166 43.2975 26.5421C43.5374 26.5562 43.7594 26.5656 43.9748 26.575C44.3793 26.5985 44.7509 26.6174 45.1197 26.6409C46.973 29.6531 47.9232 30.0484 51.5122 30.4814C51.771 30.9474 52.0014 31.4368 52.2225 31.931V37.8189C52.2413 38.0919 52.2413 38.1813 52.2037 38.2284C52.0767 38.3931 51.5217 38.6237 51.3288 38.7037L48.3042 39.8474C47.8997 39.3014 47.7586 38.7367 47.9185 38.3244" fill="white"/>
            <path d="M22.9999 32.493L20.1024 31.74V32.6907L22.9999 33.4438V32.493ZM16.248 33.4438L19.1466 32.6907V31.74L16.248 32.493V33.4438ZM16.248 35.3546L19.1466 34.6016V33.6508L16.248 34.4025V35.3546ZM22.9999 34.4025L20.1024 33.6541V34.6049L22.9999 35.3579V34.4025ZM22.9999 36.318L20.1024 35.565V36.5157L22.9999 37.2735V36.318ZM16.248 37.2735L19.1466 36.5204V35.5697L16.248 36.3227" fill="white"/>
            </g>
        </svg>

        <div style="border-left: solid 1px #415461" class="flex flex-col items-stretch gap-8 pl-6">
          <h2 class="font-lora text-h2">Un partenaire de premier rang</h2>

          <div class="flex flex-col gap-2 text-m">
            <p>Nous avons développé cette offre afin de mêler recherche de performance, investissements sectoriels forts et fiscalité avantageuse.</p>
            <p>Notre contrat d’assurance vie a été développé avec Generali Vie, l’assureur n°3 en Europe*.</p>
            <p class="font-bold text-m mt-3 -mb-2">Vous avez besoin de liquidités ?</p>
            <ul class="ml-2 pl-2">
              <li class="list-disc">Demande de virement simplifiée, fonds sur votre compte bancaire en 48  heures**</li>
              <li class="list-disc">Nantissement de votre contrat pour obtenir un crédit en quelques clics (en savoir plus)</li>
            </ul>
          </div>
        </div>
      </div>

      <p class="text-mini text-center text-gray-dark/90 max-md:max-w-[80%] mx-auto lg:text-s">*Le Groupe Generali est 3ème assureur européen selon l’Argus de l’assurance. <br>
              **Selon les conditions prévues dans la Note d’information valant Conditions Générales du contrat, et en l’absence de bénéficiaire acceptant ou de mise sous garantie du contrat.</p>
  </div>
</section>

<section class="p-5 lg:pt-20 lg:pb-10 lg:px-[100px] xl:px-[150px] flex flex-col gap-8 justify-center">
  <article class="flex flex-col max-sm:w-full sm:flex-row rounded-xl overflow-hidden bg-secondary-neutral text-primary-light lg:max-w-[980px] mx-auto">
      <div class="flex-2 flex flex-col justify-between max-md:items-center p-6 lg:py-16 lg:px-10">
          <h3 class="text-xl font-semibold mb-4">Vous souhaitez plus d’informations ?</h3>
          <p>Prenez contact avec votre conseiller dédié</p>
          <ul class="my-4 pl-6 text-base">
            <li class="list-disc">Lundi au vendredi  |  9h à 19h</li>
            <li class="list-disc">Sur rendez-vous le soir et le week-end</li>
          </ul>

          <a href="{{ path('anaxago_hubspot_meeting_relation_clientele_privee') }}" class="tw-cta tw-cta--secondary font-semibold w-fit min-w-[290px]">Prendre rendez-vous</a>

          <p class="text-center text-muted mt-3">Par téléphone au +33 1 84 17 41 76 </p>
      </div>

      <div class="flex-1 relative">
        <div class="absolute inset-0 py-8 px-10 flex flex-col pointer-events-none text-white" style="background: linear-gradient(0deg, rgba(3, 4, 14, 0.85) 6.52%, rgba(3, 4, 14, 0.72) 21%, rgba(3, 4, 14, 0.64) 36.61%, rgba(3, 4, 14, 0.00) 61.77%)">
          <h3 class="text-xl font-bold mt-auto">Alexandre Trigo</h3>
          <p class="text-s font-semibold">Relations Investisseurs</p>
        </div>
        <img class="h-full w-full object-cover max-md:max-h-[300px] object-left-top" src="@/assets/img/life_insurancev3_alexandre.png" alt="alexandre picture" />
      </div>
  </article>
  <p class="text-muted text-mini md:text-s text-center max-w-[80%] mx-auto">Les images disponibles sur cette page ne sont pas contractuelles et ne correspondent pas nécessairement aux investissements faits à travers Anaxago Value.</p>
</section>

<!-- TODO Remove div -->
<div class="pb-[200px]"></div>

</template>
