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
        'heroHeader': "#3C3C3C",
        'heroHeaderSec' : "#2E653C",
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
        'featuredTextBgColor' : "#555555c4",
        'subtitleColor' : "#696969",
        'sectionBGColor' : "#FFF8E8",
        'softColorBG' : "#FFF8E873",
        'softColorText' : "#6F4E37CC"
      },
      borderRadius: {
        'radiusGambarHero' : '4rem',
      }
    },
  },
  plugins: [],
}

