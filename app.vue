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


});

</script>


<style scoped lang="scss">
@import 'assets/style.scss';
</style>


<!-- Template in backend/templates/Front/Pages/LifeInsurance/free_management.html.twig -->

<template>
  
<section id="offer" class="flex items-stretch relative md:max-h-[670px] md:min-h-[670px] px-5 py-8 lg:pt-14 lg:pb-5">
  <div class="max-w-[1184px] mx-auto flex flex-col w-full">
    <img class="h-full w-full inset-0 z-[-1] absolute object-cover pointer-events-none" src="@/assets/img/axclimat_hero.png" alt="hero background image" />
    <div class="flex-1 flex flex-col md:flex-row justify-between items-stretch gap-5 lg:gap-16">
      <div class="flex flex-col lg:max-w-[650px]">
        <p class="text-xl font-semibold mb-3">AxClimat I</p>
        <h1 class="text-h1 font-lora leading-[58px] mt-2 mb-8">
          Le meilleur du private equity <br class="hidden lg:block"> européen dédié à la <span class="italic">décarbonation</span>
        </h1>
        <p class="text-justify leading-[28px] ">Un <b>contrat d'assurance-vie</b> permettant de bénéficier de l'expertise d'Anaxago tout
          en disposant d'une poche de liquidité grâce au fonds en euros Netissima de Generali Vie.</p>
      </div>

      <div class="flex-1 rounded-xl p-4 bg-slate-500 w-full min-h-[100px] lg:max-w-[430px] max-md:mx-auto">
      </div>
    </div>
  </div>
</section>

<!-- TODO Remove div -->
<div class="pb-[200px]"></div>

</template>
