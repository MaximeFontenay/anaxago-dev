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

  const fixedSubNav = document.querySelector('.sub-nav')
  const tabs = [...document.querySelectorAll('.tabs > div')]
  const slides = [...document.querySelectorAll('.slide')]
  const slideBgs = [...document.querySelectorAll('.slide-bg')]
  const sliderContainer = document.querySelector('.slide-container')

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      fixedSubNav.style.cssText = `opacity: 1; pointer-events: all; transform: translateY(0)`
    } else {
      fixedSubNav.style.cssText = `opacity: 0; pointer-events: none; transform: translateY(-100%)`
    }
  });
  

	function hideSlides() {
		slides.forEach(slide => slide.style.cssText = `opacity: 0; pointer-events: none`)
		slideBgs.forEach(bg => bg.style.cssText = `opacity: 0; pointer-events: none`)
		tabs.forEach(tab => tab.style.cssText = `border-bottom: solid 4px transparent`)
	}

	function setSliderContainer(currentSlide) {
		const currentSlideHeight = currentSlide.clientHeight
		sliderContainer.style.height = currentSlideHeight + 'px'
	}

	// Set Height at loading
	setSliderContainer(document.querySelector('.slide-1'))

    tabs.forEach(tab => {
	    tab.addEventListener('click', () => {
		    hideSlides()
			const slideNumber = tab.getAttribute('data-slide')
			const currentSlide = document.querySelector('.slide-' + slideNumber)
		    const activeTab = document.querySelector('[data-slide="' + slideNumber + '"]')
			activeTab.style.cssText = `border-bottom: solid 4px black`
			setSliderContainer(currentSlide)
			currentSlide.style.cssText = `opacity: 1; pointer-events: all`
			document.querySelector('.bg-' + slideNumber).style.cssText = `opacity: 1; pointer-events: all`
        })
    })


});

</script>


<style scoped lang="scss">
@import 'assets/style.scss';
</style>


<!-- Template in backend/templates/Front/Pages/LifeInsurance/free_management.html.twig -->

<template>
<div class="sticky top-0 left-0 h-[60px] z-[1100] bg-secondary-light w-full"></div>

<section class="sub-nav duration-300 opacity-0 pointer-none -translate-y-full fixed top-[60px] left-0 bg-white px-5 py-4 w-full xl:max-h-[84px] z-[6]">
  <div class="flex justify-between items-center md:items-start lg:items-center flex-col lg:flex-row max-md:gap-3 max-w-[1184px] mx-auto">
    <div class="hidden md:flex max-md:w-full flex-col">
      <p class="text-[#0E332B] text-m font-bold">AXClimat I</p>
      <p class="text-[#0E332B] text-s pb-[1.5px]">Le meilleur du private equity européen dédié à la décarbonation</p>
    </div>
	  <div class="flex items-center w-full max-sm:flex-col md:ml-auto md:mt-4 lg:mt-0 lg:ml-0 gap-2 lg:gap-4 md:max-w-[650px]">
		  <a href="https://share.hsforms.com/1SrQQ3Wv0TqmrD9p1zaZmwQ1fcvu" class="tw-cta tw-cta--secondary !p-0 !font-semibold max-lg:ml-auto !border border-[#0E332B] hover:border-[#10392f] !bg-[#0E332B] hover:!bg-[#10392f] whitespace-nowrap text-white !w-full h-[45px] !py-[10px] max-md:!max-w-full md:!max-w-[278px]">Accéder à la documentation</a>
		  <a href="https://meetings.hubspot.com/contact-anaxago/axclimat" class="tw-cta tw-cta--tertiary !p-0 !font-semibold max-lg:ml-auto !border !border-[#0E332B] whitespace-nowrap w-full h-[45px] !py-[10px] max-md:!max-w-full md:!max-w-[278px]">Être rappelé par un conseiller</a>
	  </div>
  </div>
</section>

<section class="flex relative lg:max-h-[530px] md:min-h-[530px] px-5 py-8 lg:pt-14 lg:pb-5">
  <div class="max-w-[1184px] mx-auto flex flex-col items-start justify-between w-full">
    <img class="h-full w-full inset-0 z-[-1] absolute object-cover pointer-events-none" src="@/assets/img/axclimat/axclimat_hero.png" alt="hero background image" draggable="false" decoding="async">
    <div class="flex-1 flex flex-col lg:flex-row justify-between items-start gap-6 w-full">
      <div class="flex flex-col text-white lg:max-w-[650px]">
        <p class="text-xl font-semibold mb-3">AxClimat I</p>
        <h1 class="text-h1 font-lora leading-[58px] mt-2 mb:mb-6 md:mb-8">Accédez aux gérants européens de 1er plan du private equity à <i>impact</i></h1>
        <p class="text-m lg:max-w-[600px] text-justify">Un <b>fonds européen</b> visant les fonds de private equity dédié à la décarbonation et la transition énergétique</p>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 items-stretch text-center mt-8 pt-6 w-full lg:w-fit" style="border-top: solid 1px rgba(255, 255, 255, 0.50)">
            <div class="flex flex-col items-center justify-center flex-1">
              <p class="text-xl font-semibold">Article 9</p>
              <p class="font-semibold bg-white/30 backdrop-blur-sm whitespace-nowrap w-full px-5 py-1 rounded-full">classification SFDR</p>
            </div>
            <div class="flex flex-col items-center justify-center flex-1">
              <p class="text-xl font-semibold">100 000€</p>
              <p class="font-semibold bg-white/30 backdrop-blur-sm whitespace-nowrap w-full px-5 py-1 rounded-full">Ticket minimum</p>
            </div>
            <div class="flex flex-col items-center justify-center flex-1">
              <p class="text-xl font-semibold">100 M€</p>
              <p class="font-semibold bg-white/30 backdrop-blur-sm whitespace-nowrap w-full px-5 py-1 rounded-full">Taille cible</p>
            </div>
        </div>
      </div>

      <article class="flex flex-col justify-center items-center text-center rounded-xl p-6 md:min-w-[400px] max-lg:mt-8 max-lg:mx-auto max-md:w-full lg:mt-8 lg:px-10 lg:py-8 bg-white">
        <h2 class="font-xl mb-5 text-[#0E332B] font-semibold">Vous voulez en savoir plus ?</h2>
        <p class="font-m mb-9 text-[#0E2333]">Le fonds est <span class="font-semibold">ouvert sur invitation</span> dans <br> un premier temps.</p>
        <a href="https://share.hsforms.com/1SrQQ3Wv0TqmrD9p1zaZmwQ1fcvu" class="tw-cta tw-cta--secondary !py-[11px] !px-0  !font-semibold !bg-[#0E332B] hover:!bg-[#10392f] text-white w-full">Envoyer ma demande</a>
      </article>
    </div>
  </div>
</section>

<section class="relative bg-secondary-neutral border-y border-secondary-lighter py-8 lg:py-16">
  <div class="max-w-[1184px] px-5 mx-auto flex flex-col items-center justify-center w-full">
      <h2 class="text-h2 font-lora text-center mb-6 lg:mb-14">Ne pas transiger entre <i>impact et performance</i></h2>

      <div class="flex max-md:flex-col items-stretch justify-center gap-4">
        <article class="flex flex-col flex-1 text-m bg-white rounded-md p-8 md:p-10" style="border: 1px solid #F2ECE5">
          <svg class="w-[45px] min-w-[45px] h-[45px] min-h-[45px]" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.1537 46C17.5936 45.9425 17.019 45.8995 16.4589 45.8133C9.21993 44.7648 4.04924 40.9299 1.34899 34.1505C-2.83065 23.7086 3.07255 12.1463 13.9454 9.30247C18.6708 8.06725 23.2382 8.65613 27.5471 11.0404C28.0499 11.3133 28.5382 11.6149 29.1414 11.9596C29.0696 11.3133 29.0122 10.7388 28.9547 10.1643C28.8398 9.23065 28.7249 8.29706 28.61 7.36346C28.5526 6.97566 28.6675 6.65967 28.9404 6.37241C30.7645 4.40468 32.5742 2.43694 34.3839 0.454844C34.6568 0.153221 34.9441 -0.0765879 35.375 0.0239533C35.7772 0.124495 35.8777 0.454844 35.9782 0.799557C36.4809 2.52312 36.9837 4.26105 37.4864 5.98461C37.5294 6.12824 37.5869 6.27187 37.6444 6.48732C37.9172 6.22878 38.1471 6.0277 38.3769 5.79789C39.253 4.93611 40.1148 4.05996 40.9909 3.19818C41.4218 2.76729 41.8671 2.73857 42.2118 3.08328C42.5421 3.41363 42.5134 3.88761 42.0969 4.30414C41.0197 5.39573 39.9281 6.47295 38.8365 7.55018C38.7072 7.66508 38.5349 7.7369 38.3912 7.82308C38.42 7.88053 38.463 7.93798 38.4918 7.99543C38.6354 8.05289 38.779 8.11034 38.9227 8.15343C40.6893 8.6705 42.4703 9.18756 44.2513 9.70463C44.6104 9.80517 44.9551 9.93444 45.0557 10.351C45.1562 10.7675 44.912 11.0404 44.6391 11.2989C42.6858 13.1087 40.718 14.9184 38.779 16.7282C38.42 17.0585 38.0322 17.1734 37.5582 17.1016C36.4953 16.9436 35.4468 16.8143 34.3839 16.6851C34.226 16.6707 34.068 16.6851 33.8525 16.6851C34.0105 16.958 34.1541 17.1734 34.2978 17.4032C38.7503 24.5129 37.9173 33.8058 32.2008 39.9532C28.7393 43.6732 24.4447 45.6697 19.3459 45.8995C19.1735 45.8995 19.0155 45.9569 18.8432 46H18.1681H18.1537ZM26.7572 19.8162C31.2815 24.8289 30.0032 31.9242 26.0965 35.4575C21.9168 39.235 15.6402 39.4505 11.4462 35.8453C6.57713 31.6657 6.59149 25.346 9.26301 21.2525C10.7568 18.9544 12.825 17.3601 15.4966 16.6276C19.1448 15.6366 22.4626 16.3834 25.4214 18.581C26.8434 17.1734 28.2078 15.7946 29.5867 14.4157C24.5453 9.58973 14.6061 8.09597 7.33837 14.5162C-0.0873157 21.1089 -0.302761 32.5993 6.80694 39.5797C13.5576 46.2011 24.9043 45.842 31.2097 38.7036C37.7018 31.3354 36.3948 21.2094 30.8219 15.5073C29.4862 16.9436 28.136 18.3655 26.7715 19.8306L26.7572 19.8162ZM25.3783 20.7929C25.2922 20.9365 25.206 21.0945 25.0911 21.2238C23.3962 22.9186 21.7158 24.6135 20.0209 26.3083C19.5182 26.811 19.0155 27.3424 18.4697 27.802C18.2686 27.96 17.8808 28.0749 17.6654 27.9888C17.4356 27.9026 17.177 27.5722 17.1627 27.3281C17.1483 27.0839 17.3494 26.7535 17.5361 26.5668C19.5757 24.4986 21.6439 22.459 23.6979 20.4051C23.9133 20.204 24.1 19.9742 24.3011 19.7588C20.7103 16.8861 14.8646 16.9723 11.3169 21.1807C7.88416 25.2598 8.47305 31.3497 12.6383 34.725C16.7605 38.0572 22.7499 37.3678 26.0247 33.1882C29.4431 28.8362 28.0642 23.2633 25.3783 20.8073V20.7929ZM42.7289 10.8968C40.9335 10.3797 39.253 9.89135 37.5869 9.38865C37.1991 9.27374 36.9693 9.35992 36.7108 9.63282C35.3606 11.0117 33.9961 12.3618 32.6173 13.7263C32.3875 13.9561 32.1146 14.1428 31.8991 14.3152C32.1577 14.861 32.5455 14.9184 32.9189 14.9615C34.2978 15.1339 35.6766 15.2775 37.0411 15.4929C37.5438 15.5791 37.8742 15.4355 38.2332 15.1051C39.2674 14.1141 40.3302 13.1518 41.3787 12.1751C41.8096 11.7729 42.2262 11.3707 42.7289 10.9111V10.8968ZM30.8794 13.1805C30.9799 13.123 31.0374 13.0943 31.0804 13.0512C32.7609 11.3851 34.4558 9.70463 36.1219 8.02416C36.2368 7.90925 36.2942 7.62199 36.2368 7.43528C35.9352 6.32932 35.6048 5.23773 35.2888 4.13178C35.1165 3.55726 34.9585 2.98274 34.7717 2.37949C34.6712 2.4513 34.6138 2.48003 34.5707 2.52312C33.1487 4.07433 31.7268 5.61117 30.3192 7.17674C30.2187 7.29164 30.1756 7.52145 30.1899 7.69381C30.2761 8.58432 30.391 9.46046 30.4916 10.351C30.6065 11.2702 30.7357 12.2038 30.865 13.1661L30.8794 13.1805Z" fill="#2A403A"/>
          </svg>
          <h3 class="text-xl font-bold mt-4 mb-6">TRI cible (non garanti) > 12% net de tous frais</h3>
          <p>Sélection des meilleurs gérants européens pour accéder aux meilleures performances financières et extra-financières</p>
          <br>
          <p>Fonds de private equity et infrastructure :</p>
          <ul class="pl-6 list-disc font-bold">
            <li>6 à 8 gérants européens </li>
            <li>80 actifs sous-jacents</li>
            <li>Poche de co-investissements </li>
          </ul>
        </article>
        <article class="flex flex-col flex-1 text-m bg-white rounded-md p-8 md:p-10" style="border: 1px solid #F2ECE5">
          <svg class="w-[45px] min-w-[45px] h-[45px] min-h-[45px]" width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.4707 39.0068C14.6303 38.9997 9.96555 37.1929 6.38415 33.9376C2.80206 30.682 0.559129 26.2106 0.0909429 21.3929C0.0656406 21.1247 0.199227 20.8665 0.432937 20.7321C0.881308 20.4783 1.29757 20.1716 1.67354 19.8193C3.35523 18.2223 4.95607 17.4569 6.41189 17.5435C7.62693 17.6523 8.73729 18.2764 9.46206 19.2575C9.6721 19.5238 9.86363 19.8043 10.0353 20.0968C10.5767 20.9718 10.8733 21.344 11.4202 21.2362C12.1877 21.0863 12.2968 20.5754 12.2538 19.0033V19.003C12.1482 18.1727 12.272 17.3293 12.6118 16.5642C12.9174 16.0764 13.3489 15.68 13.8609 15.4166C14.373 15.1535 14.9465 15.0335 15.5211 15.0691H15.5619C17.4265 15.0846 19.4506 16.1865 20.2706 17.6326C21.2498 19.3594 20.3076 20.7162 19.6198 21.7036C18.8314 22.8368 18.5185 23.377 19.4073 24.3032H19.407C19.6759 24.5439 19.9746 24.7491 20.2959 24.9131C21.0838 25.3691 22.0663 25.9364 22.1444 27.2023C22.2083 28.2487 21.4677 28.9172 20.8724 29.4528C20.5905 29.7061 20.2056 30.0536 20.2067 30.2358C20.2067 30.5509 20.8719 31.0839 21.3107 31.4368C21.6974 31.7173 22.0456 32.047 22.3465 32.4176C23.4843 34.0105 23.4451 34.9633 22.9143 36.6278C22.7331 37.1984 22.5563 37.7841 22.3824 38.3783L22.3821 38.3786C22.3046 38.6433 22.0763 38.8362 21.8024 38.8686C21.0286 38.96 20.2502 39.006 19.471 39.0063L19.4707 39.0068ZM1.50727 21.6876C2.07508 26.3749 4.44998 30.6557 8.12644 33.618C11.8032 36.5805 16.4907 37.9909 21.1921 37.5493C21.3265 37.0972 21.463 36.6496 21.6023 36.2113C22.0363 34.8517 22.0561 34.3797 21.2258 33.218L21.2255 33.2177C20.9926 32.9549 20.7317 32.7182 20.4479 32.5111C19.6919 31.9055 18.8346 31.2144 18.8297 30.245C18.8248 29.4454 19.4228 28.9064 19.9504 28.4311C20.4597 27.9724 20.7919 27.6449 20.7699 27.2879C20.7391 26.7846 20.3079 26.5109 19.6068 26.1063C19.1704 25.881 18.7683 25.5945 18.4129 25.2555C16.7098 23.4776 17.7385 21.9983 18.4888 20.9184C19.2142 19.8756 19.5989 19.24 19.0724 18.3123C18.2663 17.1598 16.9546 16.4654 15.5483 16.4467C15.2095 16.4122 14.8681 16.4701 14.5596 16.614C14.2511 16.7577 13.9874 16.9824 13.7962 17.2637C13.6136 17.8117 13.5573 18.3937 13.6307 18.9666C13.6667 20.2508 13.7194 22.1917 11.6841 22.5878C10.1385 22.8944 9.37451 21.6451 8.86516 20.8223L8.86543 20.8221C8.72559 20.5837 8.57105 20.3544 8.40237 20.1354C7.91891 19.4514 7.1647 19.0079 6.33189 18.9179C5.26347 18.8556 4.01903 19.4933 2.62443 20.8177H2.62416C2.27972 21.1415 1.90593 21.4326 1.50761 21.6872L1.50727 21.6876Z" fill="#2A403A"/>
            <path d="M21.7218 38.8743C21.505 38.8743 21.3009 38.7723 21.1711 38.599C21.0411 38.4256 21.0003 38.2012 21.061 37.9933C21.2378 37.3904 21.4179 36.7924 21.6024 36.2124C22.0363 34.8528 22.0562 34.3808 21.2258 33.219H21.2256C20.9927 32.956 20.732 32.719 20.448 32.512C19.6919 31.9063 18.8346 31.2153 18.8297 30.2459C18.8248 29.4463 19.4229 28.9073 19.9504 28.432C20.4597 27.9733 20.7919 27.6457 20.7699 27.2888C20.7392 26.7855 20.3079 26.5118 19.6068 26.1072C19.1704 25.8819 18.7683 25.5954 18.413 25.2564C16.7098 23.4784 17.7385 21.9992 18.4889 20.9193C19.2142 19.8764 19.5989 19.2409 19.0725 18.3131C18.2663 17.1607 16.9547 16.4663 15.5483 16.4476C15.2096 16.413 14.8681 16.471 14.5596 16.6149C14.2511 16.7586 13.9875 16.9833 13.7962 17.2646C13.6136 17.8125 13.5573 18.3945 13.6308 18.9675C13.6667 20.2517 13.7195 22.1926 11.6841 22.5887C10.1385 22.8953 9.37455 21.646 8.8652 20.8232L8.86548 20.8229C8.72563 20.5846 8.57109 20.3553 8.40242 20.1362C7.91895 19.452 7.16474 19.0083 6.33194 18.9182C5.26351 18.8559 4.01907 19.4936 2.62448 20.818H2.6242C2.16903 21.2452 1.66464 21.6166 1.12158 21.9243C0.918884 22.0413 0.670485 22.047 0.462629 21.9395C0.254766 21.8323 0.115466 21.6264 0.0934288 21.3935C-0.188437 18.5273 0.169333 15.6341 1.14145 12.9227C2.11355 10.2115 3.67552 7.75006 5.71466 5.71601C8.02564 3.39744 10.8846 1.7 14.0267 0.781179C17.1685 -0.137572 20.4916 -0.247758 23.6878 0.460407C23.9732 0.523254 24.1876 0.759142 24.2232 1.04916C24.3174 1.68417 24.3255 2.32926 24.2474 2.96641C23.829 5.92082 21.6592 6.35641 19.7442 6.74004C19.07 6.85512 18.407 7.0268 17.7616 7.25344C15.8563 7.99291 15.1394 8.67966 15.1046 9.04309C15.0815 9.28496 15.3992 9.63784 15.9554 9.98747C16.9582 10.6184 18.1161 10.579 19.3423 10.5381C21.2207 10.4753 23.3524 10.4032 24.9083 12.9182L24.9086 12.9179C25.2533 13.5657 25.4963 14.2625 25.6296 14.984C25.905 16.1194 26.1675 17.1916 26.9698 17.5804C27.6669 17.9175 30.2352 17.7395 30.886 17.391H30.8863C31.6089 16.9726 32.1392 16.288 32.3631 15.4835C32.5938 14.8958 32.8321 14.288 33.4963 14.0981C34.1416 13.9153 34.8966 14.2203 36.1944 15.1872C36.4724 15.3943 36.7451 15.6046 37.0144 15.8122C37.5533 16.2279 38.0634 16.6204 38.5853 16.9641H38.5856C38.7584 17.0775 38.871 17.2626 38.8922 17.468C39.4304 22.5652 37.9389 27.6696 34.7407 31.6751C31.5428 35.6808 26.8954 38.2652 21.8061 38.8693C21.7783 38.8725 21.7503 38.8742 21.7226 38.8742L21.7218 38.8743ZM15.5208 15.0701H15.5616C17.4262 15.0856 19.4503 16.1875 20.2703 17.6335C21.2495 19.3604 20.3073 20.7171 19.6195 21.7045C18.8311 22.8377 18.5182 23.378 19.407 24.3041H19.4067C19.6756 24.5449 19.9743 24.75 20.2956 24.9141C21.0835 25.3701 22.066 25.9373 22.1441 27.2033C22.208 28.2496 21.4674 28.9181 20.8721 29.4538C20.5902 29.7071 20.2053 30.0545 20.2064 30.2368C20.2064 30.5518 20.8716 31.0848 21.3104 31.4377C21.6971 31.7182 22.0453 32.0479 22.3462 32.4185C23.484 34.0115 23.4448 34.9643 22.914 36.6288C22.8392 36.8655 22.7641 37.1057 22.6898 37.3446V37.3448C27.1463 36.551 31.1439 34.1173 33.8958 30.5233C36.6475 26.9292 37.954 22.4348 37.5575 17.9257C37.0874 17.6014 36.6263 17.2455 36.1777 16.8998C35.9151 16.6965 35.649 16.4911 35.3764 16.289V16.2892C34.9487 15.9021 34.4454 15.6074 33.8985 15.424C33.7981 15.6031 33.7138 15.7905 33.6463 15.9842C33.3067 17.0956 32.5517 18.0332 31.5383 18.6021C30.5101 19.1528 27.5067 19.3668 26.3714 18.8168C24.9855 18.145 24.6181 16.6378 24.2939 15.3073C24.1877 14.7283 24.0014 14.1671 23.7399 13.64C22.6035 11.8036 21.1854 11.8509 19.3898 11.9116C18.0733 11.9557 16.5815 12.0057 15.2236 11.15C14.1576 10.4799 13.6571 9.7255 13.7367 8.90872C13.842 7.81013 14.9967 6.8475 17.266 5.96713H17.2658C17.9835 5.71057 18.7224 5.51658 19.4739 5.38762C21.4717 4.98686 22.616 4.66744 22.8881 2.77032H22.8878C22.9335 2.41663 22.9409 2.05913 22.9099 1.70384C20.0047 1.14148 17.0059 1.30173 14.1772 2.17071C11.3488 3.03973 8.77688 4.59049 6.68843 6.68681C4.93409 8.43564 3.55802 10.5265 2.64547 12.8298C1.7332 15.1329 1.30415 17.599 1.38495 20.0748C1.48507 19.9921 1.58111 19.9097 1.67307 19.8199C3.35476 18.2228 4.95559 17.4575 6.41141 17.544C7.62646 17.6528 8.73681 18.2769 9.46159 19.258C9.67163 19.5244 9.86316 19.8049 10.0348 20.0974C10.5763 20.9723 10.8728 21.3445 11.4197 21.2368C12.1872 21.0869 12.2963 20.5759 12.2533 19.0039V19.0036C12.1478 18.1732 12.2716 17.3298 12.6114 16.5647C12.9169 16.0769 13.3484 15.6805 13.8605 15.4171C14.3725 15.154 14.946 15.034 15.5206 15.0697L15.5208 15.0701Z" fill="#2A403A"/>
            <path d="M28.4197 19.14C27.7219 19.1726 27.0246 19.0635 26.3697 18.8195C24.9838 18.1477 24.6164 16.6405 24.2922 15.31C24.1861 14.7311 23.9997 14.1701 23.738 13.6427C22.6015 11.8063 21.1835 11.8536 19.3878 11.9143C18.0713 11.9584 16.5796 12.0084 15.2217 11.1528C14.1557 10.4826 13.6551 9.72821 13.7348 8.91142C13.8401 7.81284 14.9947 6.85021 17.2641 5.96983C17.9818 5.71327 18.7207 5.51928 19.4722 5.3906C21.47 4.98984 22.6143 4.67042 22.8864 2.7733H22.8861C22.9452 2.25582 22.9359 1.73287 22.8587 1.21816C22.8315 0.996963 22.9128 0.776313 23.0771 0.626134C23.2417 0.475676 23.4686 0.414189 23.6863 0.460987C27.6868 1.33844 31.3095 3.45349 34.039 6.50666C36.7693 9.55955 38.4681 13.3949 38.8944 17.4681C38.9222 17.7326 38.7948 17.9894 38.5676 18.1276C38.3405 18.2659 38.054 18.2607 37.8317 18.1146C37.2661 17.7429 36.7122 17.3155 36.1759 16.903C35.9134 16.6998 35.6473 16.4944 35.3747 16.2922V16.2925C34.947 15.9054 34.4437 15.611 33.8968 15.4273C33.7964 15.6063 33.7121 15.7938 33.6446 15.9875C33.305 17.0989 32.55 18.0365 31.5366 18.6054C30.5446 18.9928 29.4843 19.1748 28.4197 19.14L28.4197 19.14ZM20.2568 10.518C21.8862 10.518 23.6011 10.8037 24.9089 12.9182H24.9086C25.2533 13.566 25.4966 14.2628 25.6296 14.9843C25.905 16.1197 26.1675 17.1919 26.9698 17.5806C27.6669 17.9177 30.2352 17.7398 30.886 17.3913H30.8863C31.6089 16.9728 32.1392 16.2883 32.3631 15.4838C32.5938 14.8961 32.8322 14.2883 33.4963 14.0984C34.1417 13.9155 34.8966 14.2205 36.1944 15.1875C36.4725 15.3945 36.7451 15.6048 37.0144 15.8124L37.2843 16.02C36.6373 12.7103 35.0792 9.64679 32.7848 7.17519C30.4906 4.70318 27.5518 2.92112 24.2993 2.02954C24.3061 2.34269 24.2879 2.65557 24.2444 2.9657C23.8259 5.9201 21.6562 6.35569 19.7411 6.73933H19.7408C19.0669 6.85441 18.4039 7.02609 17.7585 7.25272C15.8532 7.99219 15.1363 8.67894 15.1015 9.04237C15.0784 9.28425 15.3962 9.63712 15.9523 9.98676C16.9551 10.6177 18.113 10.5782 19.3393 10.5374C19.6418 10.5284 19.9479 10.5181 20.257 10.5181L20.2568 10.518Z" fill="#2A403A"/>
          </svg>

          <h3 class="text-xl font-bold mt-4 mb-6">Objectif net zéro carbone</h3>

          <div class="flex max-md:flex-col gap-4 md:gap-6 items-stretch font-semibold font-m mb-6">
            <div class="w-fit flex-1">
              <p>Trois secteurs clés :</p>
              <ul class="pl-6 list-disc">
                <li class="">Décarbonation de l'industrie</li>
                <li class="">Énergies renouvelables</li>
                <li class="">Economie circulaire</li>
              </ul>
            </div>
            <div class="block min-h-[1px] max-md:bg-[#DFE3EA]" style="border-right: 1px dashed #DFE3EA;"></div>
            <div class="w-fit flex-1">
              <p>Trois indicateurs précis : </p>
              <ul class="pl-6 list-disc">
                <li class="">Tonnes de CO2 évitées, </li>
                <li class="">MW installés en capacité de production d'énergie renouvelable</li>
              </ul>
            </div>
          </div>

          <p>
            La nouvelle révolution industrielle soutenue par une réglementation européenne 
            croissante pour atteindre le Net Zéro Carbone :
            <br>
            <b>≈ 1 000 milliards€/ an d’ici 2030</b>
          </p>
        </article>
      </div>
      <p class="text-xs text-black/50 mt-6 lg:mt-12 lg:text-[15px]">*L’objectif de rendement communiqué à titre indicatif n’est ni contractuel ni garanti. Il existe un risque d’illiquidité et de perte en capital.</p>  
    </div>
</section>

<section class="lg:flex relative bg-[#1E3C35] text-white">
  <img class="h-full w-full max-lg:max-h-[200px] lg:absolute lg:w-1/3 lg:max-w-[33%] object-cover" src="@/assets/img/axclimat/axclimat_elements.png" alt="" draggable="false" decoding="async">
  <div class="max-w-[1184px] px-5 mx-auto flex items-stretch justify-center w-full">
    <div class="flex flex-col py-10 lg:py-16 px lg:max-w-[60%] lg:ml-auto">
      <h2 class="text-h2 font-lora text-center mb-6">Les <i>éléments clés</i> d’AxClimat I</h2>
      <div class="bg-white text-black rounded-lg text-l px-14 py-10" style="border: 1px solid #E4EBF5">
        <ul class="max-lg:list-disc mb-4">
          <li class="lg:flex items-center gap-2">
            <svg class="max-lg:hidden" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2.5" cy="2.5" r="2.5" fill="#0E2333" fill-opacity="0.15"/>
            </svg>
            Taille cible du fonds : <b>100 M€</b>
          </li>
          <li class="lg:flex items-center gap-2">
            <svg class="max-lg:hidden" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2.5" cy="2.5" r="2.5" fill="#0E2333" fill-opacity="0.15"/>
            </svg>
            Durée de vie du fonds* : <b>10 ans, prorogeable 2x 1 an</b>
          </li>
          <li class="lg:flex items-center gap-2">
            <svg class="max-lg:hidden" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2.5" cy="2.5" r="2.5" fill="#0E2333" fill-opacity="0.15"/>
            </svg>
            Distribution de la plus-value : <b>à partir de la 6ème année</b>
          </li>
          <li class="lg:flex items-center gap-2">
            <svg class="max-lg:hidden" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2.5" cy="2.5" r="2.5" fill="#0E2333" fill-opacity="0.15"/>
            </svg>
            Appels de fonds : <b>20% à la souscription puis 10% par semestre</b>
          </li>
          <li class="lg:flex items-center gap-2">
            <svg class="max-lg:hidden" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2.5" cy="2.5" r="2.5" fill="#0E2333" fill-opacity="0.15"/>
            </svg>
            Format : <b>Société de Libre Partenariat (SLP)</b>
          </li>
          <li class="lg:flex items-center gap-2">
            <svg class="max-lg:hidden" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2.5" cy="2.5" r="2.5" fill="#00B67A"/>
            </svg>
            <b class="text-[#00B67A]">Fonds classé Article 9</b> selon SFDR**
          </li>
          <li class="lg:flex items-center gap-2">
            <svg class="max-lg:hidden" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2.5" cy="2.5" r="2.5" fill="#0E2333" fill-opacity="0.15"/>
            </svg>
            <b>Poche investissement durable à 100%</b>
          </li>
          <li class="lg:flex items-center gap-2">
            <svg class="max-lg:hidden" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2.5" cy="2.5" r="2.5" fill="#0E2333" fill-opacity="0.15"/>
            </svg>
            Période de souscription initiale : <b>12 mois</b>
          </li>
          <li class="lg:flex items-center gap-2">
            <svg class="max-lg:hidden" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2.5" cy="2.5" r="2.5" fill="#0E2333" fill-opacity="0.15"/>
            </svg>
            Période d’investissement : Fonds : 2 ans (+ extension 1 an possible)
          </li>
          <li class="lg:flex items-center gap-2">
            <svg class="max-lg:hidden" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2.5" cy="2.5" r="2.5" fill="#0E2333" fill-opacity="0.15"/>
            </svg>
            Période de co-investissement : 5 ans maximum
          </li>
        </ul>
        <dl class="space-y-4">
          <div class="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2" style="border-top: 1px dotted #DFE3EA">
            <dt class="lg:flex h-fit items-center gap-2">
              <svg class="max-lg:hidden" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#0E2333" fill-opacity="0.15"/>
              </svg>
              Souscription minimum :
            </dt>
            <dd class="space-y-1">
              <div>Parts A : <span class="font-bold">1 000 000€</span></div>
              <div>Parts B : <span class="font-bold">100 000€</span></div>
              <div>Parts I : <span class="font-bold">2 000 000€</span></div>
            </dd>
          </div>
          <div class="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2" style="border-top: 1px dotted #DFE3EA">
            <dt class="lg:flex h-fit items-center gap-2">
              <svg class="max-lg:hidden" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#0E2333" fill-opacity="0.15"/>
              </svg>
              Frais d’entrée :
            </dt>
            <dd class="space-y-1">
              <div>Parts A : <span class="font-bold">1.5%</span></div>
              <div>Parts B : <span class="font-bold">2%</span></div>
              <div>Parts I : <span class="font-bold">1%</span></div>
            </dd>
          </div>
          <div class="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2" style="border-top: 1px dotted #DFE3EA">
            <dt class="lg:flex h-fit items-center gap-2">
              <svg class="max-lg:hidden" width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#0E2333" fill-opacity="0.15"/>
              </svg>
              Frais de gestion récurrents :
            </dt>
            <dd class="space-y-1">
              <div>Parts A : <span class="font-bold">1,3%/an***</span></div>
              <div>Parts B : <span class="font-bold">1,7%/an***</span></div>
              <div>Parts I : <span class="font-bold">1%/an***</span></div>
              <div>Parts D <i>(assurance vie)</i> : <span class="font-bold">1,70%/an***</span></div>
            </dd>
          </div>
        </dl>
      </div>
      <p class="text-white/50 text-s w-full mt-8">
        *Les taux et horizons indiqués ne présentent pas une garantie de performance. L’attention des souscripteurs est attirée sur le fait que votre argent est bloqué pendant une durée de 10 années soit jusqu’en 2034 et au plus tard jusqu’en 2036, sauf en cas de déblocage anticipé par le Règlement.
        <br>
        **Article 9 du règlement européen SFDR (Sustainable Finance Disclosure Regulation) ; Fonds qui promeuvent des caractéristiques environnementales ou sociales.
        <br>
        ***Frais de gestion de N à N+5, puis dégressivité de 0,1 point/an à partir de la 6ème année, sauf pour l’assurance vie.
      </p>
    </div>
  </div>
</section>

<section class="bg-white relative pt-10 lg:pt-16">
  <div class="max-w-[1184px] px-5 mx-auto w-full">
    <div class="p-6 md:p-10 bg-secondary-neutral text-center mb-10 lg:mb-16" style="border: solid 1px #F2ECE5">
      <h2 class="text-h2 font-lora font-bold mb-8">Nos <i>thèses</i> d’investissement</h2>
      <p class="max-md:text-justify text-[18px]">L'objectif d'investissement durable du fonds est de contribuer à la <span class="font-semibold">neutralité carbone</span> en investissant dans des fonds qui s'engagent sur une trajectoire de <span class="font-semibold">décarbonation significative.</span></p>
    </div>
  </div>

  <div class="max-md:py-6 bg-secondary-neutral w-full select-none">
    <div class="tabs flex max-md:flex-col max-md:gap-2 items-stretch max-w-[1184px] px-5 mx-auto w-full mb-[1px]">
      <div data-slide="1" class="p-4 flex justify-center items-center text-center duration-200 cursor-pointer font-medium text-l flex-1" style="border-bottom: solid 4px black">
        Transition énergétique
      </div>
      <div data-slide="2" class="p-4 flex justify-center items-center text-center duration-200 cursor-pointer font-medium text-l flex-1" style="border-bottom: solid 4px transparent">
        Transition des modèles industriels
      </div>
      <div data-slide="3" class="p-4 flex justify-center items-center text-center duration-200 cursor-pointer font-medium text-l flex-1" style="border-bottom: solid 4px transparent">
        Économie circulaire
      </div>
    </div>
  </div>

  <div class="relative h-[150px] lg:h-[240px]">
    <img src="@/assets/img/axclimat/axclimat_bg-1.png" alt="" class="slide-bg bg-1 cabsolute top-0 left-0 w-full h-full object-cover" draggable="false" decoding="async">
    <img src="@/assets/img/axclimat/axclimat_bg-2.png" alt="" class="slide-bg bg-2 duration-300 opacity-0 absolute top-0 left-0 w-full h-full object-cover" draggable="false" decoding="async">
    <img src="@/assets/img/axclimat/axclimat_bg-3.png" alt="" class="slide-bg bg-3 duration-300 opacity-0 absolute top-0 left-0 w-full h-full object-cover" draggable="false" decoding="async">
  </div>

  <div class="bg-secondary-neutral px-5 py-6 md:py-10 lg:py-16">
    <div class="slide-container relative max-w-[1184px] px-5 mx-auto">
      <div class="slide slide-1 duration-300  absolute top-0 left-0 w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-20">
        <div>
          <p class="text-[15px] font-semibold mb-4">Transition énergétique</p>
          <h2 class="text-h2 font-lora uppercase italic mb-10">PARTICIPER À LA CRÉATION D'UN MONDE NEUTRE EN CARBONE</h2>
          <div class="text-m">
            <p>La souveraineté énergétique de l'Europe est cruciale et urgente. À la suite de l'invasion de l'Ukraine par la Russie, la Commission européenne a lancé le plan RePowerEU 2022 qui vise d'ici 2030 :</p>
            <ul class="p-6 md:p-8 rounded-md font-bold my-6 lg:my-10" style="border: 1px solid #F2ECE5">
              <li>x3 sur la capacité de production d'énergie solaire</li>
              <li>x4 sur la capacité de production d'énergie éolien</li>
            </ul>
            <p>Le solaire et l'éolien se révèlent être les technologies les plus pertinentes et dont le potentiel est le plus important pour <span class="font-semibold">réduire les émissions de CO2</span> (dernier rapport du Giec).</p>
          </div>
          <a href="https://share.hsforms.com/1SrQQ3Wv0TqmrD9p1zaZmwQ1fcvu" class="tw-cta tw-cta--secondary !block max-md:mx-auto !py-[11px] !px-0  !font-semibold !bg-[#0E332B] hover:!bg-[#10392f] text-white w-full max-w-[278px] mt-6 lg:mt-10">Accéder à la documentation</a>
        </div>
        <div>
          <img src="@/assets/img/axclimat/axclimat_stats-1.png" alt="Energy Statistics" class="w-full object-contain" draggable="false" decoding="async">
        </div>
      </div>
      <div class="slide slide-2 duration-300 opacity-0 absolute top-0 left-0 w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-20" style="pointer-events: none" >
        <div>
          <p class="text-[15px] font-semibold mb-4">Transition des modèles industriels</p>
          <h2 class="text-h2 font-lora uppercase mb-10">Décarbonation des modèles industriels</h2>
          <div class="text-m">
            <p>Seules les entreprises les mieux préparées seront les plus résilientes, les mieux valorisées et les plus liquides :</p>
            <ul class="pl-3 list-disc">
              <li>Loi industrie verte / Commandes publiques / Appels d’offres</li>
              <li>Une décote déjà visible pour les actifs les plus émissifs</li>
              <li>Une plus grande difficulté d’accès aux financements (banque, fonds etc.)</li>
            </ul>
            <ul class="list-disc p-6 md:p-8 rounded-md my-6 lg:my-10" style="border: 1px solid #F2ECE5">
              <li class="font-bold text-[17px] list-none mb-4">Mise en oeuvre :</li>
              <li><b>Réduire les émissions de gaz à effet de serre</b> (entreprises en transition)</li>
              <li><b>Éviter les émissions de gaz à effet de serre</b> (entreprises alignées)</li>
            </ul>
          </div>
          <a href="https://share.hsforms.com/1SrQQ3Wv0TqmrD9p1zaZmwQ1fcvu" class="tw-cta tw-cta--secondary !block max-md:mx-auto !py-[11px] !px-0  !font-semibold !bg-[#0E332B] hover:!bg-[#10392f] text-white w-full max-w-[278px] mt-6 lg:mt-10">Accéder à la documentation</a>
        </div>
        <div>
          <img src="@/assets/img/axclimat/axclimat_stats-2.png" alt="Sectors Statistics" class="w-full object-contain" draggable="false" decoding="async">
        </div>
      </div>
      <div class="slide slide-3 duration-300 opacity-0 absolute top-0 left-0 w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-20" style="pointer-events: none" >
        <div>
          <p class="text-[15px] font-semibold mb-4">Économie circulaire</p>
          <h2 class="text-h2 font-lora uppercase italic mb-10">Gestion des ressources et économie circulaire</h2>
          <div class="text-m">
            <p>Les ressources de la terre sont limitées et ne sont pas utilisées efficacement. Plusieurs facteurs indiquent que le modèle linéaire est de plus en plus remis en cause par la raréfaction et le coût des ressources. Une mutation plus profonde du fonctionnement de notre économie est nécessaire.</p>
            <ul class="pl-3 list-disc">
              <li>Loi industrie verte / Commandes publiques / Appels d’offres</li>
              <li>Une décote déjà visible pour les actifs les plus émissifs</li>
              <li>Une plus grande difficulté d’accès aux financements (banque, fonds etc.)</li>
            </ul>
            
            <ul class="list-disc p-6 md:p-8 rounded-md mt-6" style="border: 1px solid #F2ECE5">
              <li class="font-bold text-[17px] list-none mb-4">Quelques exemples :</li>
              <li>L’aluminium recyclé permet d’éviter<b> 85% d’émissions de GES </b> et est recyclable à l’infini sans dégrader ses propriétés physiques</li>
              <li>En Europe, une voiture est garée en moyenne <b>92 % du temps,</b></li>
              <li><b>31 % des aliments</b> sont gaspillés le long de la chaîne de valeur</li> 
            </ul>
          </div>
          <a href="https://share.hsforms.com/1SrQQ3Wv0TqmrD9p1zaZmwQ1fcvu" class="tw-cta tw-cta--secondary !block max-md:mx-auto !py-[11px] !px-0  !font-semibold !bg-[#0E332B] hover:!bg-[#10392f] text-white w-full max-w-[278px] mt-6 lg:mt-10">Accéder à la documentation</a>
        </div>
        <div>
          <img src="@/assets/img/axclimat/axclimat_stats-3.png" alt="Circular Statistics" class="w-full object-contain" draggable="false" decoding="async">
        </div>
      </div>
    </div>
  </div>
</section>

<section class="relative">
  <img class="h-full w-full max-lg:max-h-[200px] lg:absolute lg:w-1/3 lg:max-w-[33%] object-cover" src="@/assets/img/axclimat/axclimat_performance.png" alt="" draggable="false" decoding="async">
  <div class="max-w-[1184px] px-5 mx-auto flex items-stretch justify-center w-full">
    <div class="flex flex-col py-10 lg:py-16 px lg:max-w-[60%] lg:ml-auto">
      <h2 class="text-h2 font-lora text-left mb-6">
        La <i>performance</i> du private <br class="hidden md:block"> equity européen 
      </h2>

      <p class="mb-8">Les fonds de fonds de private equity représentent le meilleur couple risque/rendement du marché européen.</p>
      
      <div class="flex max-md:flex-col items-stretch gap-4 mb-8 rounded-md p-6 lg:p-8" style="border: 1px solid #F2ECE5">
        <div class="flex items-start md:flex-col gap-4">
          <svg class="min-w-[24px] min-h-[24px] w-[24px] h-[24px]" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1415_12084)">
              <path d="M12.7969 0.984375H0.984375V14.7656H12.7969V0.984375Z" stroke="#496F65" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.422 5.79858L20.2946 7.10255L16.7312 20.4152L5.32031 17.3611" stroke="#496F65" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0_1415_12084">
              <rect width="21" height="21" fill="white"/>
              </clipPath>
              </defs>
          </svg>
          <p><span class="font-bold">Une diversification sous-jacente forte</span> permettant de limiter le risque</p>
        </div>
        <div class="block min-h-[1px] max-md:bg-[#DFE3EA]" style="border-right: 1px dashed #DFE3EA;"></div>
        <div class="flex items-start md:flex-col gap-4">
          <svg class="min-w-[24px] min-h-[24px] w-[24px] h-[24px]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 23.5V21.5L1.938 17.048C1.65469 16.6937 1.50024 16.2536 1.5 15.8V10C1.5 9.60218 1.65804 9.22064 1.93934 8.93934C2.22064 8.65804 2.60218 8.5 3 8.5V8.5C3.39782 8.5 3.77936 8.65804 4.06066 8.93934C4.34196 9.22064 4.5 9.60218 4.5 10V13.086" stroke="#496F65" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.4998 23.5001V18.3281C10.4997 17.7977 10.2889 17.2891 9.91383 16.9141L6.49983 13.5001C6.23451 13.235 5.87483 13.0862 5.49983 13.0862C5.12482 13.0862 4.76514 13.235 4.49983 13.5001V13.5001C4.2348 13.7654 4.08594 14.1251 4.08594 14.5001C4.08594 14.8751 4.2348 15.2348 4.49983 15.5001L7.49983 18.5001" stroke="#496F65" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M19.5 23.5V21.5L23.062 17.048C23.3453 16.6937 23.4998 16.2536 23.5 15.8V10C23.5 9.60218 23.342 9.22064 23.0607 8.93934C22.7794 8.65804 22.3978 8.5 22 8.5V8.5C21.6022 8.5 21.2206 8.65804 20.9393 8.93934C20.658 9.22064 20.5 9.60218 20.5 10V13.086" stroke="#496F65" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M14.5 23.5001V18.3281C14.5001 17.7977 14.7109 17.2891 15.086 16.9141L18.5 13.5001C18.7653 13.235 19.125 13.0862 19.5 13.0862C19.875 13.0862 20.2347 13.235 20.5 13.5001V13.5001C20.765 13.7654 20.9139 14.1251 20.9139 14.5001C20.9139 14.8751 20.765 15.2348 20.5 15.5001L17.5 18.5001" stroke="#496F65" stroke-linecap="round" stroke-linejoin="round"/>
              <rect x="9.5" y="2.5" width="6" height="8" stroke="#496F65"/>
          </svg>
          <p><span class="font-bold">Une sélection des meilleurs gérants</span> par des professionnels du secteur</p>
        </div>
      </div>

      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-2">Entre 2006 et 2020 :</h3>
        <ul class="list-disc pl-5">
          <li>Le private equity européen a surpassé le marché français <span class="font-semibold">≈75% du temps</span></li>
          <li><span class="font-semibold">66% du temps</span> cet écart était supérieur à 5% de TRI</li>
          <li>Lorsque le marché français a fait mieux que le marché européen, l'écart était <span class="font-semibold">&lt; 2% de TRI</span></li>
        </ul>
      </div>

      <a href="https://share.hsforms.com/1SrQQ3Wv0TqmrD9p1zaZmwQ1fcvu" class="tw-cta tw-cta--secondary max-md:mx-auto !py-[11px] !px-0  !font-semibold !bg-[#0E332B] hover:!bg-[#10392f] text-white w-full max-w-[278px]">Accéder à la documentation</a>
      
    </div>
  </div>
</section>

<section class="bg-secondary-neutral relative py-6 md:py-10 lg:py-16" style="border-top: 1px solid #F2ECE5;border-bottom: 1px solid #F2ECE5;">
  <div class="max-w-[1184px] px-5 mx-auto flex flex-col items-center justify-center w-full">
    <h2 class="text-h2 font-lora mb-6">La composition du portefeuille</h2>
    <img src="@/assets/img/axclimat/axclimat_wallet-graph.png" alt="wallet statistics" class="hidden sm:block w-full object-contain" draggable="false" decoding="async">
    <img src="@/assets/img/axclimat/axclimat_wallet-graph-mobile.png" alt="wallet statistics" class="sm:hidden w-full max-h-[1000px] object-contain" draggable="false" decoding="async">
    <p class="text-xs text-black/50 mt-6 lg:mt-12 lg:text-[15px]">*L’objectif de rendement communiqué à titre indicatif n’est ni contractuel ni garanti. Il existe un risque d’illiquidité et de perte en capital.</p>  
  </div>
</section>

<section class="relative py-6 md:py-10 lg:py-16">
  <div class="max-w-[1184px] px-5 mx-auto flex flex-col items-center justify-center w-full">
    <h2 class="text-h2 font-lora mb-6">Offrir une exposition à des fonds difficiles d’accès</h2>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div class="flex flex-col items-center w-full rounded-md py-4 lg:py-6" style="border: 1px solid #F2ECE5;">
          <h3 class="bg-secondary-light py-2 px-4 rounded-full text-[18px] font-semibold text-center min-w-fit mb-3 md:min-w-[160px] lg:w-1/2 lg:px-6">Fonds cible I</h3>
          <p class="text-center font-semibold text-s px-3 lg:px-6">400 M€<br>SFDR 9</p>
          <div class="bg-[#F2ECE5] w-full h-[1px] mt-3 mb-6"></div>
          <ul class="pl-6 pr-3 text-[15px] leading-[27px] list-disc lg:pl-9 lg:pr-6">
            <li>Thèse de décarbonation forte sur des entreprises matures sous efficientes</li>
            <li>Buyout majoritaire très opérationnel</li>
            <li>Spin-off d’une société de gestion réputée</li>
            <li>80% des membres seniors de l’équipe travaillent ensemble depuis +8 ans</li>
            <li>2 deals en portefeuille</li>
            <li>Fonds sursouscrit - closing final fin 2023</li>
          </ul>
        </div>
        <div class="flex flex-col items-center w-full rounded-md py-4 lg:py-6" style="border: 1px solid #F2ECE5;">
          <h3 class="bg-secondary-light py-2 px-4 rounded-full text-[18px] font-semibold text-center min-w-fit mb-3 md:min-w-[160px] lg:w-1/2 lg:px-6">Fonds cible II</h3>
          <p class="text-center font-semibold text-s px-3 lg:px-6">500 M€<br>SFDR 9</p>
          <div class="bg-[#F2ECE5] w-full h-[1px] mt-3 mb-6"></div>
          <ul class="pl-6 pr-3 text-[15px] leading-[27px] list-disc lg:pl-9 lg:pr-6">
            <li>Fonds d’infrastructures equity investissant dans des projets d’énergie renouvelable</li>
            <li>Société de gestion spécialisée sur les énergies renouvelables depuis +10 ans</li>
            <li>+4 Mds€ sous gestion</li>
            <li>Late primary avec déjà plusieurs investissements en portefeuille</li>
            <li>Frais réduits</li>
          </ul>
        </div>
        <div class="flex flex-col items-center w-full rounded-md py-4 lg:py-6" style="border: 1px solid #F2ECE5;">
          <h3 class="bg-secondary-light py-2 px-4 rounded-full text-[18px] font-semibold text-center min-w-fit mb-3 md:min-w-[160px] lg:w-1/2 lg:px-6">Fonds cible III</h3>
          <p class="text-center font-semibold text-s px-3 lg:px-6">600 M€<br>SFDR 9</p>
          <div class="bg-[#F2ECE5] w-full h-[1px] mt-3 mb-6"></div>
          <ul class="pl-6 pr-3 text-[15px] leading-[27px] list-disc lg:pl-9 lg:pr-6">
            <li>Stratégie d’investissement axée sur la décarbonation de l’économie européenne</li>
            <li>Capital développement majoritaire</li>
            <li>2ème millésime de cette stratégie </li>
            <li>Société de gestion nordique ayant +20 ans d’ancienneté </li>
            <li>+4 Mds€ investis dans +400 opérations (build up inclus) via +10 fonds</li>
            <li>Début de la levée Q1 2024</li>
          </ul>
        </div>
    </div>
  </div>
</section>

<section class="relative bg-[#FEFAF5] py-6 md:py-10 lg:py-16">
  <div class="max-w-[1184px] px-5 mx-auto flex flex-col gap-6 lg:gap-10 w-full">
    <div class="flex max-md:flex-col max-md:items-stretch w-full lg:justify-between">
      <h2 class="text-h2 font-lora text-center mb-6"><i>Calendrier prévisionnel</i> du fonds</h2>
      <ul class="p-6 md:p-8 rounded-md my-6 lg:mt-[-10px]" style="border: 1px solid #F2ECE5">
        <li>Durée du fonds : <b>10 ans, prolongeable 2 x 1an</b></li>
        <li>Création du fonds : <b>Décembre 2023</b></li>
      </ul>
    </div>

    <img class="block w-full mx-auto object-contain" src="@/assets/img/axclimat/axclimat_timeline.png" alt="timeline" draggable="false" decoding="async">

   
  </div>
</section>

<section class="relative py-10 px-5 lg:py-[100px]">
  <img class="h-full w-full top-0 left-0 z-[-1] absolute object-cover" src="@/assets/img/axclimat/axclimat_leaves.png" alt="" draggable="false" decoding="async">
  <article class="bg-white flex flex-col justify-center items-center text-center rounded-xl p-6 max-w-[700px] mx-auto lg:px-10 lg:py-8">
      <h2 class="font-xl mb-5 text-[#0E332B] font-semibold">Vous voulez en savoir plus ?</h2>
      <p class="font-m mb-5 text-[#0E2333]">Le fonds est <span class="font-semibold">ouvert sur invitation</span> dans un premier temps.</p>
      <a href="https://share.hsforms.com/1SrQQ3Wv0TqmrD9p1zaZmwQ1fcvu" class="tw-cta tw-cta--secondary !py-[11px] !px-0  !font-semibold !bg-[#00B67A] hover:!bg-[#0cae78] text-white w-full max-w-[325px] mx-auto">Envoyer ma demande</a>
  </article>
</section>

<!-- TODO Remove div -->
<div class="pb-[1000px]"></div>

  <NuxtPage />
</template>
