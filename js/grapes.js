// Initialize GrapesJS
const editor = grapesjs.init({
    canvas: {
        styles: [
            "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
            "https://unpkg.com/swiper@7/swiper-bundle.min.css"
        ]
    },
    styleManager: { // Configure the Style Manager
        clearProperties: 1,
    },
    blockManager: {
        appendTo: "#block",
    },
    panels: { defaults: [] },
    container: '#grapesjs-container',
    fromElement: true, // Pass true to load the initial HTML from the container
    storageManager: false, // You can configure storage options as needed
    // plugins: ['grapesjs-preset-webpage'], // Include any additional plugins you need

});

editor.BlockManager.add('navigations-left-block', {
    label: 'Navigations Left',
    content: '<div class="bg-white rounded-lg flex justify-between gap-2 items-center p-4 border border-2 border-gray-300 hover:border-blue-700 cursor-pointer">                        <div class="">                            <svg width="146" height="24" viewBox="0 0 146 24" fill="none" xmlns="http://www.w3.org/2000/svg">                                <g clip-path="url(#clip0_844_3130)">                                    <path d="M35.4229 17.4879V5.21833H37.6394V15.8491L37.5151 17.4879H35.4229ZM40.1666 17.6819C39.4623 17.6819 38.8616 17.4879 38.3644 17.1213C37.8672 16.7547 37.4944 16.2156 37.2458 15.5256C36.9972 14.8356 36.8522 14.0162 36.8522 13.0889C36.8522 12.1402 36.9765 11.3208 37.2458 10.6523C37.4944 9.96226 37.8672 9.44474 38.3644 9.0566C38.8616 8.69003 39.4416 8.49596 40.1666 8.49596C40.9331 8.49596 41.6167 8.69003 42.176 9.0566C42.7353 9.42318 43.191 9.96226 43.5017 10.6523C43.8125 11.3423 43.9782 12.1402 43.9782 13.0889C43.9782 14.0162 43.8125 14.8356 43.5017 15.5256C43.191 16.2156 42.756 16.7547 42.176 17.1213C41.6167 17.5094 40.9538 17.6819 40.1666 17.6819ZM39.6073 15.5687C40.0009 15.5687 40.3738 15.4609 40.6845 15.2453C40.9952 15.0296 41.2438 14.7493 41.4095 14.3612C41.5959 13.9946 41.6788 13.5633 41.6788 13.0889C41.6788 12.6146 41.5959 12.1833 41.4095 11.8167C41.2438 11.4501 40.9952 11.1698 40.6845 10.9542C40.3738 10.7385 40.0216 10.6307 39.6073 10.6307C39.2344 10.6307 38.8823 10.7385 38.5715 10.9542C38.2608 11.1698 38.033 11.4501 37.8672 11.8167C37.7015 12.1833 37.6187 12.6146 37.6187 13.0889C37.6187 13.5633 37.7015 13.9946 37.8672 14.3612C38.033 14.7278 38.2608 15.0296 38.5715 15.2453C38.8823 15.4609 39.2137 15.5687 39.6073 15.5687Z" fill="#1A53E7"/>                                    <path d="M45.2832 13.7358V8.71159H47.4997V13.1968L45.2832 13.7358ZM47.5204 13.1968C47.5204 13.779 47.5826 14.2318 47.7069 14.5768C47.8312 14.9003 48.0176 15.159 48.2662 15.2884C48.5148 15.4394 48.7841 15.504 49.0741 15.504C49.6541 15.5256 50.1098 15.3315 50.3998 14.9434C50.7106 14.5553 50.8556 14.0162 50.8556 13.283H51.622C51.622 14.2102 51.4977 15.0081 51.2284 15.655C50.9591 16.3019 50.5863 16.7978 50.1098 17.1429C49.6334 17.4879 49.0741 17.6604 48.4319 17.6604C47.4169 17.6604 46.6504 17.3369 46.1118 16.69C45.5732 16.0431 45.3039 15.0512 45.3039 13.7143L47.5204 13.1968ZM51.0006 17.4879L50.8763 15.8706V8.71159H53.0928V17.4663H51.0006V17.4879Z" fill="#1A53E7"/>                                    <path d="M58.1475 17.6819C57.6089 17.6819 57.1118 17.5957 56.6353 17.4232C56.1589 17.2507 55.7446 17.0135 55.3924 16.69C55.0403 16.3666 54.7502 15.9784 54.5431 15.504L56.4489 14.5984C56.6146 14.8787 56.8425 15.1159 57.1325 15.3315C57.4225 15.5256 57.7539 15.6334 58.1475 15.6334C58.5204 15.6334 58.8104 15.5687 58.9968 15.4609C59.204 15.3531 59.3076 15.1806 59.3076 14.9865C59.3076 14.7709 59.2247 14.6199 59.059 14.5121C58.8933 14.4043 58.6654 14.3181 58.3961 14.2534L57.6296 14.0377C56.8218 13.8221 56.1796 13.4555 55.7239 12.9811C55.2681 12.5067 55.0195 11.9461 55.0195 11.2992C55.0195 10.3935 55.2888 9.7035 55.8481 9.20755C56.4075 8.71159 57.1946 8.47439 58.2097 8.47439C58.7275 8.47439 59.2247 8.56065 59.6804 8.71159C60.1362 8.8841 60.5298 9.09973 60.8405 9.40162C61.1719 9.7035 61.3998 10.027 61.5034 10.4151L59.6597 11.2992C59.5769 11.062 59.3904 10.8679 59.0797 10.7385C58.769 10.5876 58.479 10.5229 58.1682 10.5229C57.8575 10.5229 57.6296 10.5876 57.4639 10.717C57.2982 10.8464 57.2153 11.0404 57.2153 11.2776C57.2153 11.4286 57.2982 11.558 57.4432 11.6442C57.6089 11.752 57.8161 11.8383 58.1061 11.903L59.204 12.1833C59.7633 12.3127 60.1983 12.5499 60.5298 12.8518C60.8612 13.1536 61.1098 13.4987 61.2548 13.8868C61.3998 14.2749 61.4826 14.6415 61.4826 15.0081C61.4826 15.5256 61.3376 16 61.0269 16.4097C60.7369 16.8194 60.3226 17.1213 59.8254 17.3369C59.3697 17.5741 58.7897 17.6819 58.1475 17.6819Z" fill="#1A53E7"/>                                    <path d="M64.0928 7.30997C63.7614 7.30997 63.4506 7.18059 63.2021 6.92183C62.9535 6.66307 62.8085 6.33962 62.8085 5.99461C62.8085 5.62803 62.9328 5.32615 63.2021 5.06739C63.4506 4.80863 63.7614 4.67925 64.0928 4.67925C64.445 4.67925 64.735 4.80863 64.9836 5.06739C65.2321 5.32615 65.3564 5.6496 65.3564 5.99461C65.3564 6.36119 65.2321 6.66307 64.9836 6.92183C64.735 7.18059 64.4242 7.30997 64.0928 7.30997ZM62.9742 17.4879V8.71159H65.1907V17.4663H62.9742V17.4879Z" fill="#1A53E7"/>                                    <path d="M67.2411 17.4879V8.7116H69.3333L69.4576 10.3288V17.4663H67.2411V17.4879ZM72.8134 13.0027C72.8134 12.3989 72.7513 11.9461 72.627 11.6226C72.5027 11.2992 72.3163 11.062 72.0884 10.9111C71.8606 10.7601 71.5705 10.6954 71.2598 10.6954C70.6798 10.6739 70.2448 10.8679 69.9341 11.2345C69.6233 11.6011 69.4783 12.1617 69.4783 12.8949H68.7326C68.7326 11.9677 68.8569 11.1698 69.1262 10.5229C69.3955 9.87602 69.7476 9.38006 70.2241 9.03505C70.7005 8.69003 71.2598 8.51752 71.8813 8.51752C72.8963 8.51752 73.6835 8.84097 74.2221 9.48788C74.7607 10.1348 75.03 11.1267 75.03 12.4636L72.8134 13.0027ZM72.8134 17.4879V13.0027L75.03 12.4852V17.4879H72.8134Z" fill="#1A53E7"/>                                    <path d="M80.6028 17.6819C79.7742 17.6819 79.0284 17.4879 78.407 17.0997C77.7648 16.7116 77.2677 16.1725 76.8948 15.4825C76.5219 14.7925 76.3562 13.9946 76.3562 13.1105C76.3562 12.2049 76.5426 11.407 76.9155 10.7385C77.2884 10.0485 77.8063 9.50944 78.4691 9.1213C79.132 8.73316 79.8778 8.53909 80.7271 8.53909C81.4521 8.53909 82.1357 8.73316 82.7572 9.14286C83.3786 9.55256 83.8758 10.1348 84.2694 10.9111C84.6422 11.6873 84.8494 12.6361 84.8494 13.7359H82.5914C82.6122 12.9596 82.5293 12.3558 82.3636 11.8814C82.1979 11.4286 81.97 11.0836 81.68 10.8895C81.39 10.6954 81.0378 10.5876 80.6442 10.5876C80.2092 10.5876 79.8363 10.6739 79.5256 10.8679C79.2149 11.062 78.987 11.3423 78.842 11.7089C78.697 12.097 78.6141 12.5714 78.6141 13.1968C78.6141 13.7143 78.7177 14.1671 78.9249 14.5121C79.132 14.8571 79.4013 15.1375 79.7328 15.31C80.0642 15.4825 80.4371 15.5903 80.8514 15.5903C81.2864 15.5903 81.6385 15.4825 81.9286 15.2884C82.1979 15.0943 82.405 14.8356 82.55 14.5121L84.6422 15.3531C84.4144 15.8491 84.1036 16.2588 83.7308 16.6253C83.3579 16.9919 82.9022 17.2507 82.3843 17.4447C81.8664 17.5957 81.2657 17.6819 80.6028 17.6819ZM77.8063 13.7143L77.827 11.903H83.7515V13.7143H77.8063Z" fill="#1A53E7"/>                                    <path d="M89.2614 17.6819C88.7228 17.6819 88.2257 17.5957 87.7492 17.4232C87.2728 17.2507 86.8585 17.0135 86.5063 16.69C86.1541 16.3666 85.8641 15.9784 85.657 15.504L87.5628 14.5984C87.7285 14.8787 87.9564 15.1159 88.2464 15.3315C88.5364 15.5256 88.8678 15.6334 89.2614 15.6334C89.6343 15.6334 89.9243 15.5687 90.1107 15.4609C90.3179 15.3531 90.4215 15.1806 90.4215 14.9865C90.4215 14.7709 90.3386 14.6199 90.1729 14.5121C90.0072 14.4043 89.7793 14.3181 89.51 14.2534L88.7435 14.0377C87.9356 13.8221 87.2935 13.4555 86.8377 12.9811C86.382 12.5067 86.1334 11.9461 86.1334 11.2992C86.1334 10.3935 86.4027 9.7035 86.962 9.20755C87.5213 8.71159 88.3085 8.47439 89.3236 8.47439C89.8414 8.47439 90.3386 8.56065 90.7943 8.71159C91.2501 8.8841 91.6436 9.09973 91.9544 9.40162C92.2858 9.7035 92.5137 10.027 92.6173 10.4151L90.7736 11.2992C90.6908 11.062 90.5043 10.8679 90.1936 10.7385C89.8829 10.5876 89.5929 10.5229 89.2821 10.5229C88.9714 10.5229 88.7435 10.5876 88.5778 10.717C88.4121 10.8464 88.3292 11.0404 88.3292 11.2776C88.3292 11.4286 88.4121 11.558 88.5571 11.6442C88.7228 11.752 88.93 11.8383 89.22 11.903L90.3179 12.1833C90.8772 12.3127 91.3122 12.5499 91.6436 12.8518C91.9751 13.1536 92.2237 13.4987 92.3687 13.8868C92.5137 14.2749 92.5965 14.6415 92.5965 15.0081C92.5965 15.5256 92.4515 16 92.1408 16.4097C91.8508 16.8194 91.4365 17.1213 90.9393 17.3369C90.5043 17.5741 89.9243 17.6819 89.2614 17.6819Z" fill="#1A53E7"/>                                    <path d="M97.1124 17.6819C96.5738 17.6819 96.0766 17.5957 95.6002 17.4232C95.1237 17.2507 94.7094 17.0135 94.3573 16.69C94.0051 16.3666 93.7151 15.9784 93.5079 15.504L95.4137 14.5984C95.5794 14.8787 95.8073 15.1159 96.0973 15.3315C96.3873 15.5256 96.7188 15.6334 97.1124 15.6334C97.4852 15.6334 97.7752 15.5687 97.9617 15.4609C98.1688 15.3531 98.2724 15.1806 98.2724 14.9865C98.2724 14.7709 98.1896 14.6199 98.0238 14.5121C97.8581 14.4043 97.6302 14.3181 97.3609 14.2534L96.5945 14.0377C95.7866 13.8221 95.1444 13.4555 94.6887 12.9811C94.233 12.5067 93.9844 11.9461 93.9844 11.2992C93.9844 10.3935 94.2537 9.7035 94.813 9.20755C95.3723 8.71159 96.1595 8.47439 97.1745 8.47439C97.6924 8.47439 98.1896 8.56065 98.6453 8.71159C99.101 8.8841 99.4946 9.09973 99.8053 9.40162C100.137 9.7035 100.365 10.027 100.468 10.4151L98.6246 11.2992C98.5417 11.062 98.3553 10.8679 98.0445 10.7385C97.7338 10.5876 97.4438 10.5229 97.1331 10.5229C96.8224 10.5229 96.5945 10.5876 96.4288 10.717C96.263 10.8464 96.1802 11.0404 96.1802 11.2776C96.1802 11.4286 96.263 11.558 96.408 11.6442C96.5738 11.752 96.7809 11.8383 97.0709 11.903L98.1688 12.1833C98.7281 12.3127 99.1632 12.5499 99.4946 12.8518C99.826 13.1536 100.075 13.4987 100.22 13.8868C100.365 14.2749 100.447 14.6415 100.447 15.0081C100.447 15.5256 100.302 16 99.9918 16.4097C99.7018 16.8194 99.2874 17.1213 98.7903 17.3369C98.3346 17.5741 97.7545 17.6819 97.1124 17.6819Z" fill="#1A53E7"/>                                    <path d="M105.895 20.9811V8.71159H107.987L108.112 10.3288V20.9811H105.895ZM110.66 17.6819C109.955 17.6819 109.355 17.4879 108.858 17.1213C108.36 16.7547 107.987 16.2156 107.739 15.5256C107.49 14.8356 107.345 14.0162 107.345 13.0889C107.345 12.1402 107.47 11.3208 107.739 10.6523C107.987 9.96226 108.36 9.44474 108.858 9.0566C109.355 8.69002 109.935 8.49595 110.66 8.49595C111.426 8.49595 112.11 8.69002 112.669 9.0566C113.228 9.42318 113.684 9.96226 113.995 10.6523C114.306 11.3423 114.471 12.1402 114.471 13.0889C114.471 14.0162 114.306 14.8356 113.995 15.5256C113.684 16.2156 113.249 16.7547 112.669 17.1213C112.089 17.5094 111.426 17.6819 110.66 17.6819ZM110.08 15.5687C110.473 15.5687 110.846 15.4609 111.157 15.2453C111.468 15.0296 111.716 14.7493 111.882 14.3612C112.068 13.9946 112.151 13.5633 112.151 13.0889C112.151 12.6146 112.068 12.1833 111.882 11.8167C111.716 11.4501 111.468 11.1698 111.157 10.9542C110.846 10.7385 110.494 10.6307 110.08 10.6307C109.707 10.6307 109.355 10.7385 109.044 10.9542C108.733 11.1698 108.505 11.4501 108.34 11.8167C108.174 12.1833 108.091 12.6146 108.091 13.0889C108.091 13.5633 108.174 13.9946 108.34 14.3612C108.505 14.7278 108.733 15.0296 109.044 15.2453C109.355 15.4609 109.707 15.5687 110.08 15.5687Z" fill="#1A53E7"/>                                    <path d="M115.922 17.4879V8.71159H118.138V17.4663H115.922V17.4879ZM117.496 12.8733C117.496 11.9245 117.683 11.1482 118.035 10.5229C118.387 9.89757 118.843 9.44474 119.402 9.14286C119.961 8.84097 120.541 8.69003 121.142 8.69003V10.9326C120.624 10.9326 120.148 10.9973 119.692 11.1267C119.236 11.2561 118.863 11.4717 118.594 11.752C118.304 12.0539 118.18 12.4205 118.18 12.8733H117.496Z" fill="#1A53E7"/>                                    <path d="M126.093 17.6819C125.264 17.6819 124.518 17.4879 123.897 17.0997C123.255 16.7116 122.758 16.1725 122.385 15.4825C122.012 14.7925 121.846 13.9946 121.846 13.1105C121.846 12.2049 122.033 11.407 122.406 10.7385C122.778 10.0485 123.296 9.50943 123.959 9.12129C124.622 8.73315 125.368 8.53908 126.217 8.53908C126.942 8.53908 127.626 8.73315 128.247 9.14286C128.869 9.55256 129.366 10.1348 129.759 10.9111C130.132 11.6873 130.339 12.6361 130.339 13.7358H128.081C128.102 12.9596 128.019 12.3558 127.854 11.8814C127.688 11.4286 127.46 11.0836 127.17 10.8895C126.88 10.6954 126.528 10.5876 126.134 10.5876C125.699 10.5876 125.326 10.6739 125.016 10.8679C124.705 11.062 124.477 11.3423 124.332 11.7089C124.187 12.097 124.104 12.5714 124.104 13.1968C124.104 13.7143 124.208 14.1671 124.415 14.5121C124.622 14.8571 124.891 15.1375 125.223 15.31C125.554 15.4825 125.927 15.5903 126.341 15.5903C126.776 15.5903 127.129 15.4825 127.419 15.2884C127.688 15.0943 127.895 14.8356 128.04 14.5121L130.132 15.3531C129.904 15.8491 129.594 16.2588 129.221 16.6253C128.848 16.9919 128.392 17.2507 127.874 17.4447C127.356 17.5957 126.756 17.6819 126.093 17.6819ZM123.296 13.7143L123.317 11.903H129.241V13.7143H123.296Z" fill="#1A53E7"/>                                    <path d="M134.773 17.6819C134.234 17.6819 133.737 17.5957 133.261 17.4232C132.784 17.2507 132.37 17.0135 132.018 16.69C131.665 16.3666 131.375 15.9784 131.168 15.504L133.074 14.5984C133.24 14.8787 133.468 15.1159 133.758 15.3315C134.048 15.5256 134.379 15.6334 134.773 15.6334C135.146 15.6334 135.436 15.5687 135.622 15.4609C135.829 15.3531 135.933 15.1806 135.933 14.9865C135.933 14.7709 135.85 14.6199 135.684 14.5121C135.519 14.4043 135.291 14.3181 135.021 14.2534L134.255 14.0377C133.447 13.8221 132.805 13.4555 132.349 12.9811C131.893 12.5067 131.645 11.9461 131.645 11.2992C131.645 10.3935 131.914 9.7035 132.473 9.20755C133.033 8.71159 133.82 8.47439 134.835 8.47439C135.353 8.47439 135.85 8.56065 136.306 8.71159C136.761 8.8841 137.155 9.09973 137.466 9.40162C137.797 9.7035 138.025 10.027 138.129 10.4151L136.285 11.2992C136.202 11.062 136.016 10.8679 135.705 10.7385C135.394 10.5876 135.104 10.5229 134.793 10.5229C134.483 10.5229 134.255 10.5876 134.089 10.717C133.923 10.8464 133.841 11.0404 133.841 11.2776C133.841 11.4286 133.923 11.558 134.068 11.6442C134.234 11.752 134.441 11.8383 134.731 11.903L135.829 12.1833C136.389 12.3127 136.824 12.5499 137.155 12.8518C137.486 13.1536 137.735 13.4987 137.88 13.8868C138.025 14.2749 138.108 14.6415 138.108 15.0081C138.108 15.5256 137.963 16 137.652 16.4097C137.362 16.8194 136.948 17.1213 136.451 17.3369C135.995 17.5741 135.415 17.6819 134.773 17.6819Z" fill="#1A53E7"/>                                    <path d="M142.602 17.6819C142.064 17.6819 141.567 17.5957 141.09 17.4232C140.614 17.2507 140.2 17.0135 139.847 16.69C139.495 16.3666 139.205 15.9784 138.998 15.504L140.904 14.5984C141.07 14.8787 141.297 15.1159 141.587 15.3315C141.877 15.5256 142.209 15.6334 142.602 15.6334C142.975 15.6334 143.265 15.5687 143.452 15.4609C143.659 15.3531 143.763 15.1806 143.763 14.9865C143.763 14.7709 143.68 14.6199 143.514 14.5121C143.348 14.4043 143.12 14.3181 142.851 14.2534L142.085 14.0377C141.277 13.8221 140.635 13.4555 140.179 12.9811C139.723 12.5067 139.474 11.9461 139.474 11.2992C139.474 10.3935 139.744 9.7035 140.303 9.20755C140.862 8.71159 141.65 8.47439 142.665 8.47439C143.182 8.47439 143.68 8.56065 144.135 8.71159C144.591 8.8841 144.985 9.09973 145.295 9.40162C145.627 9.7035 145.855 10.027 145.958 10.4151L144.115 11.2992C144.032 11.062 143.845 10.8679 143.535 10.7385C143.224 10.5876 142.934 10.5229 142.623 10.5229C142.312 10.5229 142.085 10.5876 141.919 10.717C141.753 10.8464 141.67 11.0404 141.67 11.2776C141.67 11.4286 141.753 11.558 141.898 11.6442C142.064 11.752 142.271 11.8383 142.561 11.903L143.659 12.1833C144.218 12.3127 144.653 12.5499 144.985 12.8518C145.316 13.1536 145.565 13.4987 145.71 13.8868C145.855 14.2749 145.938 14.6415 145.938 15.0081C145.938 15.5256 145.793 16 145.482 16.4097C145.192 16.8194 144.778 17.1213 144.28 17.3369C143.845 17.5741 143.265 17.6819 142.602 17.6819Z" fill="#1A53E7"/>                                    <path d="M21.9166 16.7978H8.05817C3.62514 16.7978 0 13.0243 0 8.38814C0 3.77359 3.62514 0 8.05817 0H21.9166C26.3703 0 29.9747 3.77359 29.9747 8.38814C29.9955 13.0243 26.3703 16.7978 21.9166 16.7978ZM8.05817 2.37197C4.86805 2.37197 2.27866 5.06739 2.27866 8.38814C2.27866 11.7089 4.86805 14.4043 8.05817 14.4043H21.9166C25.1067 14.4043 27.6961 11.7089 27.6961 8.38814C27.6961 5.06739 25.1067 2.37197 21.9166 2.37197H8.05817Z" fill="#1A53E7"/>                                    <path d="M21.9166 24H15.5985C14.6456 24 13.8584 23.1806 13.8584 22.1887V15.6119C13.8584 10.9757 17.4835 7.22372 21.9166 7.22372C26.3703 7.22372 29.9747 10.9973 29.9747 15.6119C29.9955 20.248 26.3703 24 21.9166 24ZM16.1371 21.628H21.9166C25.1067 21.628 27.6961 18.9326 27.6961 15.6119C27.6961 12.2911 25.1067 9.59569 21.9166 9.59569C18.7264 9.59569 16.1371 12.2911 16.1371 15.6119V21.628Z" fill="#1A53E7"/>                                </g>                                <defs>                                    <clipPath id="clip0_844_3130">                                        <rect width="146" height="24" fill="white"/>                                    </clipPath>                                </defs>                            </svg>                        </div>                        <div class="flex justify-between gap-5 items-center text-xs">                            <a href="">Menu item</a>                            <a href="">Menu item</a>                            <a href="">Menu item</a>                            <a href="">Menu item</a>                            <a href="">Menu item</a>                        </div>                        <div>                            <button class="rounded-full bg-blue-700 hover:bg-blue-900 text-white px-4 py-1 gap-2 text-[10px] mx-auto my-0">Contact Us</button></div></div>',
});

editor.BlockManager.add('navigations-center-block', {
    label: 'Navigations Center',
    content: '<div class="bg-white rounded-lg flex justify-between gap-2 items-center p-4 border border-2 border-gray-300 hover:border-blue-700 cursor-pointer"> <div class="flex gap-6 items-center"> <svg width="146" height="24" viewBox="0 0 146 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_844_3130)"> <path d="M35.4229 17.4879V5.21833H37.6394V15.8491L37.5151 17.4879H35.4229ZM40.1666 17.6819C39.4623 17.6819 38.8616 17.4879 38.3644 17.1213C37.8672 16.7547 37.4944 16.2156 37.2458 15.5256C36.9972 14.8356 36.8522 14.0162 36.8522 13.0889C36.8522 12.1402 36.9765 11.3208 37.2458 10.6523C37.4944 9.96226 37.8672 9.44474 38.3644 9.0566C38.8616 8.69003 39.4416 8.49596 40.1666 8.49596C40.9331 8.49596 41.6167 8.69003 42.176 9.0566C42.7353 9.42318 43.191 9.96226 43.5017 10.6523C43.8125 11.3423 43.9782 12.1402 43.9782 13.0889C43.9782 14.0162 43.8125 14.8356 43.5017 15.5256C43.191 16.2156 42.756 16.7547 42.176 17.1213C41.6167 17.5094 40.9538 17.6819 40.1666 17.6819ZM39.6073 15.5687C40.0009 15.5687 40.3738 15.4609 40.6845 15.2453C40.9952 15.0296 41.2438 14.7493 41.4095 14.3612C41.5959 13.9946 41.6788 13.5633 41.6788 13.0889C41.6788 12.6146 41.5959 12.1833 41.4095 11.8167C41.2438 11.4501 40.9952 11.1698 40.6845 10.9542C40.3738 10.7385 40.0216 10.6307 39.6073 10.6307C39.2344 10.6307 38.8823 10.7385 38.5715 10.9542C38.2608 11.1698 38.033 11.4501 37.8672 11.8167C37.7015 12.1833 37.6187 12.6146 37.6187 13.0889C37.6187 13.5633 37.7015 13.9946 37.8672 14.3612C38.033 14.7278 38.2608 15.0296 38.5715 15.2453C38.8823 15.4609 39.2137 15.5687 39.6073 15.5687Z" fill="#1A53E7"/> <path d="M45.2832 13.7358V8.71159H47.4997V13.1968L45.2832 13.7358ZM47.5204 13.1968C47.5204 13.779 47.5826 14.2318 47.7069 14.5768C47.8312 14.9003 48.0176 15.159 48.2662 15.2884C48.5148 15.4394 48.7841 15.504 49.0741 15.504C49.6541 15.5256 50.1098 15.3315 50.3998 14.9434C50.7106 14.5553 50.8556 14.0162 50.8556 13.283H51.622C51.622 14.2102 51.4977 15.0081 51.2284 15.655C50.9591 16.3019 50.5863 16.7978 50.1098 17.1429C49.6334 17.4879 49.0741 17.6604 48.4319 17.6604C47.4169 17.6604 46.6504 17.3369 46.1118 16.69C45.5732 16.0431 45.3039 15.0512 45.3039 13.7143L47.5204 13.1968ZM51.0006 17.4879L50.8763 15.8706V8.71159H53.0928V17.4663H51.0006V17.4879Z" fill="#1A53E7"/> <path d="M58.1475 17.6819C57.6089 17.6819 57.1118 17.5957 56.6353 17.4232C56.1589 17.2507 55.7446 17.0135 55.3924 16.69C55.0403 16.3666 54.7502 15.9784 54.5431 15.504L56.4489 14.5984C56.6146 14.8787 56.8425 15.1159 57.1325 15.3315C57.4225 15.5256 57.7539 15.6334 58.1475 15.6334C58.5204 15.6334 58.8104 15.5687 58.9968 15.4609C59.204 15.3531 59.3076 15.1806 59.3076 14.9865C59.3076 14.7709 59.2247 14.6199 59.059 14.5121C58.8933 14.4043 58.6654 14.3181 58.3961 14.2534L57.6296 14.0377C56.8218 13.8221 56.1796 13.4555 55.7239 12.9811C55.2681 12.5067 55.0195 11.9461 55.0195 11.2992C55.0195 10.3935 55.2888 9.7035 55.8481 9.20755C56.4075 8.71159 57.1946 8.47439 58.2097 8.47439C58.7275 8.47439 59.2247 8.56065 59.6804 8.71159C60.1362 8.8841 60.5298 9.09973 60.8405 9.40162C61.1719 9.7035 61.3998 10.027 61.5034 10.4151L59.6597 11.2992C59.5769 11.062 59.3904 10.8679 59.0797 10.7385C58.769 10.5876 58.479 10.5229 58.1682 10.5229C57.8575 10.5229 57.6296 10.5876 57.4639 10.717C57.2982 10.8464 57.2153 11.0404 57.2153 11.2776C57.2153 11.4286 57.2982 11.558 57.4432 11.6442C57.6089 11.752 57.8161 11.8383 58.1061 11.903L59.204 12.1833C59.7633 12.3127 60.1983 12.5499 60.5298 12.8518C60.8612 13.1536 61.1098 13.4987 61.2548 13.8868C61.3998 14.2749 61.4826 14.6415 61.4826 15.0081C61.4826 15.5256 61.3376 16 61.0269 16.4097C60.7369 16.8194 60.3226 17.1213 59.8254 17.3369C59.3697 17.5741 58.7897 17.6819 58.1475 17.6819Z" fill="#1A53E7"/> <path d="M64.0928 7.30997C63.7614 7.30997 63.4506 7.18059 63.2021 6.92183C62.9535 6.66307 62.8085 6.33962 62.8085 5.99461C62.8085 5.62803 62.9328 5.32615 63.2021 5.06739C63.4506 4.80863 63.7614 4.67925 64.0928 4.67925C64.445 4.67925 64.735 4.80863 64.9836 5.06739C65.2321 5.32615 65.3564 5.6496 65.3564 5.99461C65.3564 6.36119 65.2321 6.66307 64.9836 6.92183C64.735 7.18059 64.4242 7.30997 64.0928 7.30997ZM62.9742 17.4879V8.71159H65.1907V17.4663H62.9742V17.4879Z" fill="#1A53E7"/> <path d="M67.2411 17.4879V8.7116H69.3333L69.4576 10.3288V17.4663H67.2411V17.4879ZM72.8134 13.0027C72.8134 12.3989 72.7513 11.9461 72.627 11.6226C72.5027 11.2992 72.3163 11.062 72.0884 10.9111C71.8606 10.7601 71.5705 10.6954 71.2598 10.6954C70.6798 10.6739 70.2448 10.8679 69.9341 11.2345C69.6233 11.6011 69.4783 12.1617 69.4783 12.8949H68.7326C68.7326 11.9677 68.8569 11.1698 69.1262 10.5229C69.3955 9.87602 69.7476 9.38006 70.2241 9.03505C70.7005 8.69003 71.2598 8.51752 71.8813 8.51752C72.8963 8.51752 73.6835 8.84097 74.2221 9.48788C74.7607 10.1348 75.03 11.1267 75.03 12.4636L72.8134 13.0027ZM72.8134 17.4879V13.0027L75.03 12.4852V17.4879H72.8134Z" fill="#1A53E7"/> <path d="M80.6028 17.6819C79.7742 17.6819 79.0284 17.4879 78.407 17.0997C77.7648 16.7116 77.2677 16.1725 76.8948 15.4825C76.5219 14.7925 76.3562 13.9946 76.3562 13.1105C76.3562 12.2049 76.5426 11.407 76.9155 10.7385C77.2884 10.0485 77.8063 9.50944 78.4691 9.1213C79.132 8.73316 79.8778 8.53909 80.7271 8.53909C81.4521 8.53909 82.1357 8.73316 82.7572 9.14286C83.3786 9.55256 83.8758 10.1348 84.2694 10.9111C84.6422 11.6873 84.8494 12.6361 84.8494 13.7359H82.5914C82.6122 12.9596 82.5293 12.3558 82.3636 11.8814C82.1979 11.4286 81.97 11.0836 81.68 10.8895C81.39 10.6954 81.0378 10.5876 80.6442 10.5876C80.2092 10.5876 79.8363 10.6739 79.5256 10.8679C79.2149 11.062 78.987 11.3423 78.842 11.7089C78.697 12.097 78.6141 12.5714 78.6141 13.1968C78.6141 13.7143 78.7177 14.1671 78.9249 14.5121C79.132 14.8571 79.4013 15.1375 79.7328 15.31C80.0642 15.4825 80.4371 15.5903 80.8514 15.5903C81.2864 15.5903 81.6385 15.4825 81.9286 15.2884C82.1979 15.0943 82.405 14.8356 82.55 14.5121L84.6422 15.3531C84.4144 15.8491 84.1036 16.2588 83.7308 16.6253C83.3579 16.9919 82.9022 17.2507 82.3843 17.4447C81.8664 17.5957 81.2657 17.6819 80.6028 17.6819ZM77.8063 13.7143L77.827 11.903H83.7515V13.7143H77.8063Z" fill="#1A53E7"/> <path d="M89.2614 17.6819C88.7228 17.6819 88.2257 17.5957 87.7492 17.4232C87.2728 17.2507 86.8585 17.0135 86.5063 16.69C86.1541 16.3666 85.8641 15.9784 85.657 15.504L87.5628 14.5984C87.7285 14.8787 87.9564 15.1159 88.2464 15.3315C88.5364 15.5256 88.8678 15.6334 89.2614 15.6334C89.6343 15.6334 89.9243 15.5687 90.1107 15.4609C90.3179 15.3531 90.4215 15.1806 90.4215 14.9865C90.4215 14.7709 90.3386 14.6199 90.1729 14.5121C90.0072 14.4043 89.7793 14.3181 89.51 14.2534L88.7435 14.0377C87.9356 13.8221 87.2935 13.4555 86.8377 12.9811C86.382 12.5067 86.1334 11.9461 86.1334 11.2992C86.1334 10.3935 86.4027 9.7035 86.962 9.20755C87.5213 8.71159 88.3085 8.47439 89.3236 8.47439C89.8414 8.47439 90.3386 8.56065 90.7943 8.71159C91.2501 8.8841 91.6436 9.09973 91.9544 9.40162C92.2858 9.7035 92.5137 10.027 92.6173 10.4151L90.7736 11.2992C90.6908 11.062 90.5043 10.8679 90.1936 10.7385C89.8829 10.5876 89.5929 10.5229 89.2821 10.5229C88.9714 10.5229 88.7435 10.5876 88.5778 10.717C88.4121 10.8464 88.3292 11.0404 88.3292 11.2776C88.3292 11.4286 88.4121 11.558 88.5571 11.6442C88.7228 11.752 88.93 11.8383 89.22 11.903L90.3179 12.1833C90.8772 12.3127 91.3122 12.5499 91.6436 12.8518C91.9751 13.1536 92.2237 13.4987 92.3687 13.8868C92.5137 14.2749 92.5965 14.6415 92.5965 15.0081C92.5965 15.5256 92.4515 16 92.1408 16.4097C91.8508 16.8194 91.4365 17.1213 90.9393 17.3369C90.5043 17.5741 89.9243 17.6819 89.2614 17.6819Z" fill="#1A53E7"/> <path d="M97.1124 17.6819C96.5738 17.6819 96.0766 17.5957 95.6002 17.4232C95.1237 17.2507 94.7094 17.0135 94.3573 16.69C94.0051 16.3666 93.7151 15.9784 93.5079 15.504L95.4137 14.5984C95.5794 14.8787 95.8073 15.1159 96.0973 15.3315C96.3873 15.5256 96.7188 15.6334 97.1124 15.6334C97.4852 15.6334 97.7752 15.5687 97.9617 15.4609C98.1688 15.3531 98.2724 15.1806 98.2724 14.9865C98.2724 14.7709 98.1896 14.6199 98.0238 14.5121C97.8581 14.4043 97.6302 14.3181 97.3609 14.2534L96.5945 14.0377C95.7866 13.8221 95.1444 13.4555 94.6887 12.9811C94.233 12.5067 93.9844 11.9461 93.9844 11.2992C93.9844 10.3935 94.2537 9.7035 94.813 9.20755C95.3723 8.71159 96.1595 8.47439 97.1745 8.47439C97.6924 8.47439 98.1896 8.56065 98.6453 8.71159C99.101 8.8841 99.4946 9.09973 99.8053 9.40162C100.137 9.7035 100.365 10.027 100.468 10.4151L98.6246 11.2992C98.5417 11.062 98.3553 10.8679 98.0445 10.7385C97.7338 10.5876 97.4438 10.5229 97.1331 10.5229C96.8224 10.5229 96.5945 10.5876 96.4288 10.717C96.263 10.8464 96.1802 11.0404 96.1802 11.2776C96.1802 11.4286 96.263 11.558 96.408 11.6442C96.5738 11.752 96.7809 11.8383 97.0709 11.903L98.1688 12.1833C98.7281 12.3127 99.1632 12.5499 99.4946 12.8518C99.826 13.1536 100.075 13.4987 100.22 13.8868C100.365 14.2749 100.447 14.6415 100.447 15.0081C100.447 15.5256 100.302 16 99.9918 16.4097C99.7018 16.8194 99.2874 17.1213 98.7903 17.3369C98.3346 17.5741 97.7545 17.6819 97.1124 17.6819Z" fill="#1A53E7"/> <path d="M105.895 20.9811V8.71159H107.987L108.112 10.3288V20.9811H105.895ZM110.66 17.6819C109.955 17.6819 109.355 17.4879 108.858 17.1213C108.36 16.7547 107.987 16.2156 107.739 15.5256C107.49 14.8356 107.345 14.0162 107.345 13.0889C107.345 12.1402 107.47 11.3208 107.739 10.6523C107.987 9.96226 108.36 9.44474 108.858 9.0566C109.355 8.69002 109.935 8.49595 110.66 8.49595C111.426 8.49595 112.11 8.69002 112.669 9.0566C113.228 9.42318 113.684 9.96226 113.995 10.6523C114.306 11.3423 114.471 12.1402 114.471 13.0889C114.471 14.0162 114.306 14.8356 113.995 15.5256C113.684 16.2156 113.249 16.7547 112.669 17.1213C112.089 17.5094 111.426 17.6819 110.66 17.6819ZM110.08 15.5687C110.473 15.5687 110.846 15.4609 111.157 15.2453C111.468 15.0296 111.716 14.7493 111.882 14.3612C112.068 13.9946 112.151 13.5633 112.151 13.0889C112.151 12.6146 112.068 12.1833 111.882 11.8167C111.716 11.4501 111.468 11.1698 111.157 10.9542C110.846 10.7385 110.494 10.6307 110.08 10.6307C109.707 10.6307 109.355 10.7385 109.044 10.9542C108.733 11.1698 108.505 11.4501 108.34 11.8167C108.174 12.1833 108.091 12.6146 108.091 13.0889C108.091 13.5633 108.174 13.9946 108.34 14.3612C108.505 14.7278 108.733 15.0296 109.044 15.2453C109.355 15.4609 109.707 15.5687 110.08 15.5687Z" fill="#1A53E7"/> <path d="M115.922 17.4879V8.71159H118.138V17.4663H115.922V17.4879ZM117.496 12.8733C117.496 11.9245 117.683 11.1482 118.035 10.5229C118.387 9.89757 118.843 9.44474 119.402 9.14286C119.961 8.84097 120.541 8.69003 121.142 8.69003V10.9326C120.624 10.9326 120.148 10.9973 119.692 11.1267C119.236 11.2561 118.863 11.4717 118.594 11.752C118.304 12.0539 118.18 12.4205 118.18 12.8733H117.496Z" fill="#1A53E7"/> <path d="M126.093 17.6819C125.264 17.6819 124.518 17.4879 123.897 17.0997C123.255 16.7116 122.758 16.1725 122.385 15.4825C122.012 14.7925 121.846 13.9946 121.846 13.1105C121.846 12.2049 122.033 11.407 122.406 10.7385C122.778 10.0485 123.296 9.50943 123.959 9.12129C124.622 8.73315 125.368 8.53908 126.217 8.53908C126.942 8.53908 127.626 8.73315 128.247 9.14286C128.869 9.55256 129.366 10.1348 129.759 10.9111C130.132 11.6873 130.339 12.6361 130.339 13.7358H128.081C128.102 12.9596 128.019 12.3558 127.854 11.8814C127.688 11.4286 127.46 11.0836 127.17 10.8895C126.88 10.6954 126.528 10.5876 126.134 10.5876C125.699 10.5876 125.326 10.6739 125.016 10.8679C124.705 11.062 124.477 11.3423 124.332 11.7089C124.187 12.097 124.104 12.5714 124.104 13.1968C124.104 13.7143 124.208 14.1671 124.415 14.5121C124.622 14.8571 124.891 15.1375 125.223 15.31C125.554 15.4825 125.927 15.5903 126.341 15.5903C126.776 15.5903 127.129 15.4825 127.419 15.2884C127.688 15.0943 127.895 14.8356 128.04 14.5121L130.132 15.3531C129.904 15.8491 129.594 16.2588 129.221 16.6253C128.848 16.9919 128.392 17.2507 127.874 17.4447C127.356 17.5957 126.756 17.6819 126.093 17.6819ZM123.296 13.7143L123.317 11.903H129.241V13.7143H123.296Z" fill="#1A53E7"/> <path d="M134.773 17.6819C134.234 17.6819 133.737 17.5957 133.261 17.4232C132.784 17.2507 132.37 17.0135 132.018 16.69C131.665 16.3666 131.375 15.9784 131.168 15.504L133.074 14.5984C133.24 14.8787 133.468 15.1159 133.758 15.3315C134.048 15.5256 134.379 15.6334 134.773 15.6334C135.146 15.6334 135.436 15.5687 135.622 15.4609C135.829 15.3531 135.933 15.1806 135.933 14.9865C135.933 14.7709 135.85 14.6199 135.684 14.5121C135.519 14.4043 135.291 14.3181 135.021 14.2534L134.255 14.0377C133.447 13.8221 132.805 13.4555 132.349 12.9811C131.893 12.5067 131.645 11.9461 131.645 11.2992C131.645 10.3935 131.914 9.7035 132.473 9.20755C133.033 8.71159 133.82 8.47439 134.835 8.47439C135.353 8.47439 135.85 8.56065 136.306 8.71159C136.761 8.8841 137.155 9.09973 137.466 9.40162C137.797 9.7035 138.025 10.027 138.129 10.4151L136.285 11.2992C136.202 11.062 136.016 10.8679 135.705 10.7385C135.394 10.5876 135.104 10.5229 134.793 10.5229C134.483 10.5229 134.255 10.5876 134.089 10.717C133.923 10.8464 133.841 11.0404 133.841 11.2776C133.841 11.4286 133.923 11.558 134.068 11.6442C134.234 11.752 134.441 11.8383 134.731 11.903L135.829 12.1833C136.389 12.3127 136.824 12.5499 137.155 12.8518C137.486 13.1536 137.735 13.4987 137.88 13.8868C138.025 14.2749 138.108 14.6415 138.108 15.0081C138.108 15.5256 137.963 16 137.652 16.4097C137.362 16.8194 136.948 17.1213 136.451 17.3369C135.995 17.5741 135.415 17.6819 134.773 17.6819Z" fill="#1A53E7"/> <path d="M142.602 17.6819C142.064 17.6819 141.567 17.5957 141.09 17.4232C140.614 17.2507 140.2 17.0135 139.847 16.69C139.495 16.3666 139.205 15.9784 138.998 15.504L140.904 14.5984C141.07 14.8787 141.297 15.1159 141.587 15.3315C141.877 15.5256 142.209 15.6334 142.602 15.6334C142.975 15.6334 143.265 15.5687 143.452 15.4609C143.659 15.3531 143.763 15.1806 143.763 14.9865C143.763 14.7709 143.68 14.6199 143.514 14.5121C143.348 14.4043 143.12 14.3181 142.851 14.2534L142.085 14.0377C141.277 13.8221 140.635 13.4555 140.179 12.9811C139.723 12.5067 139.474 11.9461 139.474 11.2992C139.474 10.3935 139.744 9.7035 140.303 9.20755C140.862 8.71159 141.65 8.47439 142.665 8.47439C143.182 8.47439 143.68 8.56065 144.135 8.71159C144.591 8.8841 144.985 9.09973 145.295 9.40162C145.627 9.7035 145.855 10.027 145.958 10.4151L144.115 11.2992C144.032 11.062 143.845 10.8679 143.535 10.7385C143.224 10.5876 142.934 10.5229 142.623 10.5229C142.312 10.5229 142.085 10.5876 141.919 10.717C141.753 10.8464 141.67 11.0404 141.67 11.2776C141.67 11.4286 141.753 11.558 141.898 11.6442C142.064 11.752 142.271 11.8383 142.561 11.903L143.659 12.1833C144.218 12.3127 144.653 12.5499 144.985 12.8518C145.316 13.1536 145.565 13.4987 145.71 13.8868C145.855 14.2749 145.938 14.6415 145.938 15.0081C145.938 15.5256 145.793 16 145.482 16.4097C145.192 16.8194 144.778 17.1213 144.28 17.3369C143.845 17.5741 143.265 17.6819 142.602 17.6819Z" fill="#1A53E7"/> <path d="M21.9166 16.7978H8.05817C3.62514 16.7978 0 13.0243 0 8.38814C0 3.77359 3.62514 0 8.05817 0H21.9166C26.3703 0 29.9747 3.77359 29.9747 8.38814C29.9955 13.0243 26.3703 16.7978 21.9166 16.7978ZM8.05817 2.37197C4.86805 2.37197 2.27866 5.06739 2.27866 8.38814C2.27866 11.7089 4.86805 14.4043 8.05817 14.4043H21.9166C25.1067 14.4043 27.6961 11.7089 27.6961 8.38814C27.6961 5.06739 25.1067 2.37197 21.9166 2.37197H8.05817Z" fill="#1A53E7"/> <path d="M21.9166 24H15.5985C14.6456 24 13.8584 23.1806 13.8584 22.1887V15.6119C13.8584 10.9757 17.4835 7.22372 21.9166 7.22372C26.3703 7.22372 29.9747 10.9973 29.9747 15.6119C29.9955 20.248 26.3703 24 21.9166 24ZM16.1371 21.628H21.9166C25.1067 21.628 27.6961 18.9326 27.6961 15.6119C27.6961 12.2911 25.1067 9.59569 21.9166 9.59569C18.7264 9.59569 16.1371 12.2911 16.1371 15.6119V21.628Z" fill="#1A53E7"/> </g> <defs> <clipPath id="clip0_844_3130"> <rect width="146" height="24" fill="white"/> </clipPath> </defs> </svg> <div class="flex justify-between gap-5 items-center text-xs"> <a href="">Menu item</a> <a href="">Menu item</a> <a href="">Menu item</a> <a href="">Menu item</a> <a href="">Menu item</a> </div> </div> <div> <button class="rounded-full bg-blue-700 hover:bg-blue-900 text-white px-4 py-1 gap-2 text-[10px] mx-auto my-0"> Contact Us </button> </div> </div>',
});


// editor.BlockManager.add('template-component', {
//     model: {
//       defaults: {
//         type: 'template-component',
//         template: '<div class="my-template">Template Content</div>',
//         className: 'my-template',
//       },
//     },
//     view: {
//       settings: [
//         {
//           id: 'className',
//           type: 'text',
//           label: 'Class Name',
//           property: 'className',
//         },
//       ],
//       updateStyle: function (model) {
//         this.el.querySelector('.my-template').classList.add(model.get('className'));
//       },
//     },
//   });
  