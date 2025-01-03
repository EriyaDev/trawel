/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'poppins' : "Poppins",
      'inter' : "Inter",
    }
    ,
    extend: {
      colors: {
        'biru': "#133E87",
        'heroHeader': "#3C3C3C",
        'heroHeaderSec' : "#2E653C",
        'heroSubtitle' : "#535353",
        'paragraph' : "#6D6D6D",
        'sectionBgSecondary' : "#F5F8FD",
        'titleColor' : "#3d3d3d",
        'biruMuda' : '#B2C6F5',
        'cardIconColor' : "#484747",
        'priceColor' : "#1632E6",
        'textColorSec' : "#676767",
        'textColorThird' : "#777777",
        'featuredTextBgColor' : "#555555c4",
        'subtitleColor' : "#696969",
      },
      borderRadius: {
        'radiusGambarHero' : '4rem',
      }
    },
  },
  plugins: [],
}

