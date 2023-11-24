<script setup>
useHead({
  bodyAttrs: {
    class: 'bg-white text-black font-proxima overflow-x-hidden'
  }
})
</script>

<template>
  <section class="flex flex-col h-[100svh] max-h-[700px] !min-h-fit p-5 lg:pt-14 lg:pb-5 lg:px-20 bg-light">

    <div class="flex-1 flex flex-col lg:flex-row justify-between items-stretch gap-5 lg:gap-16 ">
      <div class="flex flex-col flex-1 max-w-[490px] pt-[80px]">
        <p>Anaxago Patrimony</p>
        <h1 class="text-h1 leading-[58px] mt-4 mb-12">L’assurance vie de <span class="font-lora italic">la prochaine
            décennie</span></h1>
        <p class="text-justify">Un <b>contrat d'assurance-vie</b> permettant de bénéficier de l'expertise d'Anaxago tout
          en disposant d'une poche de liquidité grâce au fonds en euros Netissima de Generali Vie.</p>
      </div>

      <div class="flex-1 rounded-xl bg-slate-500 w-full max-w-[430px]">
      </div>
    </div>

    <p class="mt-3 text-center text-mini text-primary-dark/40">*Anaxago Value est un contrat libellé en euros et/ou en
      unités de compte et/ou en Engagements croissance donnant lieu à la constitution d’une provision de diversification
      (fonds croissance).</p>
  </section>

  <section class="p-3 lg:pt-14 lg:pb-8 lg:pl-20 bg-secondary-neutral">
    <div class="flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-16 ">
      <div class="flex flex-col flex-1 lg:max-w-[380px]">
        <h2 class="text-h2 leading-[48px] mb-10">Un contrat dédié à <br> <span class="font-lora italic">l’immobilier
            d’avenir</span></h2>
        <p class="border border-secondary-light w-full text-center lg:w-fit py-3 px-5 rounded-lg mb-6">Objectif de
          rendement du FCPR : <b>7% / an*</b></p>
        <p class="text-justify text-m">
          Le contrat d’assurance vie Anaxago Value est le seul contrat vous permettant d’investir dans le FCPR Anaxago
          Society 2023, offrant une exposition au marché de la réhabilitation immobilière et classé article 8 au sens de
          la réglementation SFDR.
          <br><br>
          Le fonds en euros Netissima, de Generali Vie, offre également une poche de liquidité à votre contrat d’assurance
          vie dans la limite de 40%*.
        </p>
        <button class="w-full border  border-primary mt-10">Découvrir l’offre</button>
      </div>
      <div class="flex items-stretch gap-1 min-h-[300px] lg:gap-2 flex-1 w-full lg:max-w-[800px] lg:h-[700px]">
        <div class="flex-1 rounded-md bg-slate-500 "></div>
        <div class="flex-1 rounded-md bg-slate-500 "></div>
      </div>
    </div>

    <p class="text-mini lg:text-s mt-2 lg:mt-8 text-center text-primary-dark/40">
      *Objectif de rentabilité annuel, net de frais d'Anaxago Patrimony concernant le FCPR Anaxago Society 2023, avant
      fiscalité et prélèvements. Ce taux ne présente pas une garantie de performance. Plus le taux est élevé, plus le
      risque est important. **L'investissement sur le fonds en euros Netissima est conditionné à un investissement minimum
      de 40% sur les supports en unités de compte.
    </p>
  </section>

  <section class="bg-primary-dark text-white">
    <div class="flex flex-col lg:flex-row items-stretch relative">
      <div class="absolute inset-x-1/2 -translate-x-1/2 translate-y-1/2 w-[100px] h-[100px]">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="106" height="105" viewBox="0 0 106 105" fill="none">
          <circle cx="53" cy="52.5" r="52.5" fill="#FEFAF5"/>
          <path d="M72.168 52.4987L43.418 69.0975V35.8999L72.168 52.4987Z" fill="#031E31"/>
        </svg>
      </div>
      <div class="flex items-stretch flex-1 min-h-[300px] lg:max-w-[50%]">
        <div class="bg-slate-400 w-full">

        </div>
      </div>
      <div class="flex flex-col flex-1 lg:max-w-[50%] items-stretch gap-8 p-20">
        <h2 class="text-balance font-bold text-xl">Une offre en gestion libre vous permettant de piloter vous même
          votre contrat d’assurance vie</h2>
        <ul class="flex flex-col flex-1 items-stretch gap-4">
          <li class="flex items-center gap-6 px-6 py-5 border border-gray-dark/25">
            <div class="flex items-center justify-center w-[48px] min-w-[48px] aspect-square p-3 bg-primary-light rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none">
                <path
                  d="M19.0075 17.0938H3.6861C2.14769 17.0938 0.900391 15.9079 0.900391 14.4453H21.7932C21.7932 15.9079 20.5459 17.0938 19.0075 17.0938Z"
                  stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M2.99023 11.797V2.52736C2.99023 1.79572 3.61354 1.20312 4.38309 1.20312H18.3116C19.0812 1.20312 19.7045 1.79572 19.7045 2.52736V11.797"
                  stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>

            <p><b>Parcours 100% en ligne</b> : pilotage en toute liberté de votre éparge. Ouverture, versements, suivi,
              rachats et avances* effectués en ligne sur votre compte Anaxago.</p>
          </li>

          <li class="flex items-center gap-6 px-6 py-5 border border-gray-dark/25">
            <div class="flex items-center justify-center w-[48px] min-w-[48px] aspect-square p-3 bg-primary-light rounded-full">

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

          <p><b>Diversification de votre épargne</b> : accès à plus de 300 supports en unités de comptes (actions françaises ou internationales, obligations, OPC indiciels (ETF)).</p>
        </li>

        <li class="flex items-center gap-6 px-6 py-5 border border-gray-dark/25">
            <div class="flex items-center justify-center w-[48px] min-w-[48px] aspect-square p-3 bg-primary-light rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
                <path d="M0.141963 6.26959C0.137595 6.08377 0.144146 5.89795 0.15834 5.71259C0.215659 4.98477 0.422554 4.28739 0.782301 3.62181C1.6339 2.04804 3.26122 0.841816 5.23737 0.320255C5.59821 0.224848 5.96614 0.154428 6.34063 0.107633C6.73968 0.0581122 7.14037 0.0340332 7.54379 0.0399394C7.79599 0.043574 8.04711 0.0581122 8.29822 0.0830999C8.98387 0.150794 9.64331 0.298448 10.2782 0.523791C11.8433 1.07943 13.1409 2.08756 13.9161 3.34876C14.2201 3.84397 14.4385 4.36371 14.5706 4.9089C14.6197 5.11243 14.6557 5.31824 14.6792 5.52541C14.7076 5.77302 14.7174 6.02062 14.7092 6.26913C14.7038 6.4445 14.6983 6.62032 14.6863 6.79524C14.6732 6.98469 14.6497 7.17323 14.6203 7.36132C14.5695 7.68571 14.4958 8.00646 14.3932 8.32221C14.1792 8.98098 13.8347 9.58931 13.3707 10.1509C13.1463 10.4221 12.9029 10.681 12.649 10.9332C12.4187 11.1622 12.1861 11.3898 11.9568 11.6197C11.7308 11.8464 11.5174 12.0813 11.323 12.3284C10.9027 12.8631 10.6166 13.4433 10.4682 14.0707C10.4136 14.3006 10.3754 14.5319 10.3513 14.7654C10.3301 14.9726 10.3213 15.1802 10.3213 15.3883C10.3213 15.4946 10.2891 15.5927 10.2039 15.674C10.0675 15.8044 9.89442 15.8535 9.69353 15.8108C9.4921 15.7681 9.37091 15.6545 9.3256 15.4859C9.31741 15.4551 9.31796 15.4219 9.31796 15.3896C9.31796 15.1675 9.32614 14.9458 9.34689 14.7245C9.3649 14.5314 9.39056 14.3388 9.42604 14.1475C9.57016 13.3697 9.88405 12.6446 10.395 11.9804C10.6199 11.6874 10.8699 11.4098 11.1353 11.1422C11.3804 10.8946 11.6298 10.6502 11.8766 10.4035C12.1261 10.1536 12.3641 9.89598 12.5786 9.62429C13.0224 9.06185 13.3298 8.45124 13.5012 7.79338C13.5569 7.5803 13.6 7.36587 13.6316 7.14915C13.689 6.75571 13.7124 6.36091 13.7004 5.96519C13.6786 5.22465 13.4755 4.51954 13.0917 3.85124C12.3559 2.57051 11.0419 1.60144 9.42604 1.14712C9.10397 1.05671 8.77533 0.98947 8.43961 0.944493C8.06785 0.894517 7.69337 0.869075 7.3167 0.876344C5.89245 0.903604 4.61669 1.28069 3.50251 2.01987C2.46039 2.71089 1.75837 3.59546 1.38443 4.65947C1.30036 4.89799 1.2414 5.14106 1.20046 5.38684C1.15242 5.67534 1.13823 5.96519 1.14314 6.25641C1.14751 6.49448 1.16225 6.73254 1.19009 6.96924C1.23867 7.38585 1.32711 7.79611 1.47013 8.19773C1.66938 8.7579 1.97618 9.27447 2.37632 9.75378C2.59796 10.0191 2.84088 10.2708 3.09199 10.517C3.35839 10.7787 3.62697 11.0391 3.88245 11.3085C4.14285 11.5829 4.38632 11.8664 4.59813 12.1685C4.94313 12.6601 5.18715 13.1844 5.33563 13.74C5.40223 13.9903 5.45082 14.2429 5.48357 14.4978C5.52124 14.7931 5.53925 15.0893 5.5398 15.386C5.5398 15.4305 5.53598 15.4746 5.52124 15.5177C5.44973 15.7195 5.23628 15.8131 5.06159 15.8194C4.78919 15.8294 4.54244 15.6536 4.53589 15.406C4.53207 15.2606 4.5288 15.1157 4.5217 14.9703C4.51024 14.7404 4.47912 14.5119 4.43599 14.2847C4.37922 13.9894 4.29515 13.6996 4.17888 13.4165C3.996 12.9704 3.73342 12.5583 3.40971 12.1721C3.20445 11.9268 2.97899 11.6946 2.74808 11.4657C2.49697 11.2167 2.24421 10.9695 1.99692 10.7178C1.70323 10.4194 1.43356 10.1063 1.19773 9.77331C0.831431 9.2572 0.569946 8.70566 0.402902 8.12322C0.328114 7.86198 0.271886 7.59802 0.23149 7.33179C0.201465 7.13371 0.177992 6.93471 0.167074 6.73527C0.158885 6.57989 0.150697 6.42497 0.142509 6.26959H0.141963Z" fill="white"/>
                <path d="M7.42185 17.6011C6.58772 17.6011 5.75359 17.6011 4.91945 17.6011C4.85886 17.6011 4.79827 17.6002 4.73931 17.5857C4.52914 17.5343 4.36755 17.3721 4.37738 17.1659C4.3872 16.9664 4.56408 16.8029 4.79608 16.7729C4.8343 16.7679 4.87305 16.7656 4.91181 16.7656C6.5899 16.7656 8.26744 16.7656 9.94553 16.7656C9.99357 16.7656 10.0427 16.7688 10.0897 16.7774C10.3211 16.8192 10.4865 17.0014 10.4761 17.199C10.4658 17.393 10.3102 17.5484 10.0831 17.5916C10.0547 17.597 10.0258 17.5984 9.99685 17.6002C9.9701 17.6016 9.94335 17.6011 9.9166 17.6011C9.0852 17.6011 8.25325 17.6011 7.42185 17.6011V17.6011Z" fill="white"/>
                <path d="M7.42135 19.5972C6.58722 19.5972 5.75309 19.5972 4.91896 19.5972C4.85836 19.5972 4.79777 19.5963 4.73881 19.5818C4.52755 19.53 4.36706 19.3673 4.37743 19.162C4.38725 18.9625 4.56413 18.799 4.79668 18.7694C4.83707 18.7644 4.87856 18.7622 4.91951 18.7622C6.59268 18.7622 8.26531 18.7622 9.93849 18.7617C9.99472 18.7617 10.0499 18.7649 10.1044 18.7772C10.3294 18.8271 10.4833 18.9984 10.4767 19.1901C10.4696 19.3896 10.3026 19.555 10.0684 19.5909C10.0258 19.5972 9.98161 19.5972 9.93794 19.5972C9.63497 19.5977 9.332 19.5972 9.02848 19.5972H7.42081H7.42135Z" fill="white"/>
              </svg>
            </div>

            <p><b>Fiscalité avantageuse</b> : tant que l’épargne est investie ; exonération d’imposition. Fiscalité allégée après 8 ans de détention.</p>
        </li>

        </ul>

        <div class="flex gap-3 mt-4">
          <button>Découvrir l'offre</button>
          <button>Conseiller</button>
        </div>

        <p class="text-mini text-gray-dark/90 lg:text-s">*Les modalités de souscription, consultation et gestion en ligne du contrat sont précisées dans la Note d’Information valant Conditions Générales du contrat d’assurance vie Anaxago Value. </p>
    </div>
  </div>
</section>

<section class="p-3 lg:pt-14 lg:pb-8 lg:px-20">
    <div class="flex flex-col justify-center gap-8 text-center items-stretch relative">
        <h2 class="text-h2 font-lora italic leading-[48px]">Des frais réduits*</h2>
        
        <ul class="grid grid-cols-2 gap-7 lg:grid-cols-4 lg:gap-14">
           <li>
            <p class="text-[28px] font-medium mb-3 leading-8">0%</p>
            <p class="text-muted bg-secondary-neutral w-full px-2 py-1 border border-secondary-light rounded-md">de frais d’entrée</p>
           </li>
           <li>
            <p class="text-[28px] font-medium mb-3 leading-8">0%</p>
            <p class="text-muted bg-secondary-neutral w-full px-2 py-1 border border-secondary-light rounded-md">de frais d’arbitrage</p>
           </li>
           <li>
            <p class="text-[28px] font-medium mb-3 leading-8">0,85%</p>
            <p class="text-muted bg-secondary-neutral w-full px-2 py-1 border border-secondary-light rounded-md">de frais de gestion</p>
           </li>
           <li>
            <p class="text-[28px] font-medium mb-3 leading-8">0%</p>
            <p class="text-muted bg-secondary-neutral w-full px-2 py-1 border border-secondary-light rounded-md">de frais de sortie</p>
           </li>
        </ul>

        <div class="flex gap-3 mt-4 mx-auto">
          <button>Découvrir l'offre</button>
          <button>Conseiller</button>
        </div>


        <p class="text-mini text-muted lg:text-s">
          *Hors frais éventuels qui s’appliquent aux supports d’investissement. Le contrat comporte des frais annuels de gestion précisés dans la Note d’Information valant Conditions Générales du contrat d’assurance vie Anaxago Value.
        </p>
  </div>
</section>

<section class="bg-primary-dark text-white">
    <div class="flex flex-col items-stretch ">

      <div class="flex items-stretch min-h-[300px]">
        <div class="bg-slate-400 w-full">

        </div>
      </div>
      <div class="">
        
        <div class="flex flex-col items-stretch gap-8 p-20 border-l border-">
          <h2 class="font-lora text-h2">Un partenaire de premier rang</h2>

          <div class="flex flex-col gap-4 text-m">
            <p>Nous avons développé cette offre afin de mêler recherche de performance, investissements sectoriels forts et fiscalité avantageuse.</p>
            <p>Notre contrat d’assurance vie a été développé avec Generali Vie, l’assureur n°3 en Europe*.</p>
            <p class="font-bold text-m mt-3">Vous avez besoin de liquidités ?</p>
            <ul class="ml-2 pl-2">
              <li class="list-disc">Demande de virement simplifiée, fonds sur votre compte bancaire en 48  heures**</li>
              <li class="list-disc">Nantissement de votre contrat pour obtenir un crédit en quelques clics (en savoir plus)</li>
            </ul>
          </div>

          <p class="text-mini text-center text-gray-dark/90 lg:text-s">*Le Groupe Generali est 3ème assureur européen selon l’Argus de l’assurance. <br>
              **Selon les conditions prévues dans la Note d’information valant Conditions Générales du contrat, et en l’absence de bénéficiaire acceptant ou de mise sous garantie du contrat.</p>
        </div>
      </div>

  </div>
</section>


<div class="pb-[200px]"></div>

</template>
