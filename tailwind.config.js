/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'poppins' : "Poppins",
      'inter' : "Inter",
      'clashDisplay' : "Clash Display",
    }
    ,
    extend: {
      colors: {
        'heroHeader': "#6F4E37",
        'heroHeaderSec' : "#DEAC80",
        'heroSubtitle' : "#535353",
        'paragraph' : "#6c6c6c",
        'paragraphSec' : "#6F4E37",
        'accentColor' : "#DBA979",
        'sectionBgSecondary' : "#F5F8FD",
        'titleColor' : "#3d3d3d",
        'biruMuda' : '#B2C6F5',
        'cardIconColor' : "#484747",
        'iconColor' : "#6F4E37",
        'textColorSec' : "#676767",
        'textColorThird' : "#777777",
        'featuredTextBgColor' : "#00000080",
        'subtitleColor' : "#696969",
        'sectionBGColor' : "#FFF8E8",
        'softColorBG' : "#FFF8E873",
        'softColorText' : "#6F4E37CC",
        'textCardPackage' : "#424242",
        'descCardPackage' : "#929292"
      },
      borderRadius: {
        'radiusGambarHero' : '4rem',
      }
    },
  },
  plugins: [],
}

