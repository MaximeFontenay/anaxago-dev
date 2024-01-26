export default {
  theme: {
    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {
      colors: {
        transparent: "transparent",
        primary: {
          light: "#0E2D43",
          dark: "#01192A",
          neutral: "#FFFFFF",
        },
        secondary: {
          light: "#F8EBD6",
          lighter: "#FBF4E8",
          dark: "#DAB575",
          neutral: "#FEFAF5",
        },
        gray: {
          dark: "#8D929F",
          light: "#D4D8E0",
          neutral: "#EAEDF0",
        },
        muted: {
          DEFAULT: "#C9C0B9",
        },
        white: {
          DEFAULT: "#ffffff",
        },
        black: {
          DEFAULT: "#000000",
        },
        saltpan: {
          DEFAULT: "#F0F6F3",
        },
      },
      fontSize: {
        h1: ["40px", "58px"],
        h2: ["32px", "45px"],
        h3: ["22px", "34px"],
        xl: ["20px", "34px"],
        l: ["16px", "32px"],
        m: ["16px", "28px"],
        body: ["16px", "28px"] /* same as m */,
        s: ["14px", "24px"],
        xs: ["13px", "22px"],
        "2xs": ["10px", "16px"],
        mini: ["10px", "16px"] /* same as 2xs */,
      },
      fontFamily: {
        sans: ["Proxima"],
        "proxima-nova": ["Proxima", "sans-serif"],
        lora: ["Lora"],
      },
    },
  },
}

// <article class="px-6 relative flex flex-col justify-between rounded-md py-4 bg-primary-dark/10  overflow-clip  duration-500 pointer-events-auto">
//           <img class="h-full w-[800px] max-w-[800px] object-cover object-left pointer-events-none absolute bottom-0 left-0 z-[1]"
//             src="@/assets/img/success_stories/immo-1.png" alt="agriodor" draggable="false" decoding="async">
//           <div class="flex justify-between flex-col gap-6 relative h-full z-[2] flex-1">
//             <div class="flex justify-between items-center w-full">
//               <p class="whitespace-nowrap text-[12px] text-white font-medium flex items-center gap-2 bg-white/25 backdrop-blur-sm rounded-full select-none py-2 px-6">
//                 <svg class="min-w-[13px]" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M6.90175 11.1258H5.96364C6.03126 11.1204 6.09927 11.1155 6.16142 11.1109C4.59791 11.0059 3.28182 10.3844 2.24638 9.22564C1.20625 8.06155 0.767294 6.68748 0.886121 5.15209C0.994395 3.75043 1.59166 2.55799 2.63413 1.60043C3.67465 0.644788 4.91999 0.140145 6.3553 0.109874C6.3252 0.106425 6.2951 0.105276 6.265 0.10336C6.20051 0.0991451 6.13562 0.094547 6.07113 0.090332C6.35764 0.090332 6.64455 0.090332 6.93106 0.090332C6.8439 0.0941638 6.75673 0.0979956 6.66956 0.10221C6.64924 0.102977 6.6293 0.10451 6.60898 0.106042C8.07008 0.147808 9.33301 0.663181 10.3802 1.65446C11.4289 2.64727 11.9937 3.87075 12.0864 5.29617C12.0907 5.26206 12.0957 5.22451 12.1004 5.18658V6.01041C12.095 5.9855 12.0895 5.96021 12.0844 5.9353C11.9871 7.32777 11.4488 8.52749 10.4369 9.51264C9.42604 10.497 8.20259 11.0208 6.79191 11.1105C6.82122 11.1147 6.86149 11.1201 6.90175 11.1258ZM5.4254 7.83241C5.55009 7.83931 5.6439 7.79256 5.72637 7.71976C5.94566 7.52664 6.16377 7.33275 6.38266 7.13924C6.73445 6.82811 7.08624 6.51697 7.43842 6.20659C7.7351 5.94488 8.03217 5.68432 8.32884 5.42261C8.70292 5.0927 9.0766 4.76278 9.45067 4.43287C9.59451 4.30566 9.74187 4.18227 9.88181 4.05084C9.99321 3.94624 10.0249 3.81251 9.98383 3.66767C9.94435 3.52819 9.84936 3.43699 9.70513 3.40021C9.55699 3.36227 9.43034 3.40289 9.31855 3.50252C8.97575 3.80676 8.63138 4.10947 8.2878 4.41256C7.64168 4.98273 6.99556 5.55289 6.34904 6.12306C6.05745 6.38056 5.76585 6.63767 5.47465 6.89554C5.45276 6.91509 5.43869 6.92428 5.41132 6.89976C5.05133 6.58096 4.69015 6.26369 4.32937 5.94527C4.09836 5.74142 3.86774 5.5368 3.63713 5.33218C3.4839 5.19654 3.24547 5.18849 3.10201 5.31532C2.91713 5.47856 2.91517 5.74103 3.09967 5.90542C3.2439 6.03455 3.39048 6.16138 3.5355 6.28936C4.0753 6.76565 4.6151 7.24155 5.15374 7.71899C5.23465 7.79064 5.32494 7.83356 5.4254 7.83203V7.83241Z" fill="white"/>
//                 </svg>
//                 Opération financée</p>
//             </div>
//             <img class="pointer-events-none min-w-[180px] max-w-[180px] select-none"
//               src="@/assets/img/success_stories/immo-1.png" alt="agriodor" draggable="false" decoding="async">
//           </div>
          
//         </article>
  
