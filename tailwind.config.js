module.exports = {
  purge: {
    enabled : true,
    content:['./public/index.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        intro : 'hsl(217, 28%, 15%)',
        main: 'hsl(218, 28%, 13%)',
        footer: 'hsl(216, 53%, 9%)',
        testimonials : 'hsl(219, 30%, 18%)',
        ccyan : 'hsl(176, 68%, 64%)',
        cblue : 'hsl(198, 60%, 50%)'
      },
      fontFamily:{
        heading:['Raleway'],
        body:['Open Sans']
      },
      zIndex: {
        neg:'-1'
      },
      backgroundImage: theme => ({
        'hero-desktop': "url('images/bg-curvy-desktop.svg')",
        'hero-mobile': "url('images/bg-curvy-mobile.svg')",
        'comma':"url('images/bg-quotes.png')"
       }),
       backgroundSize: {
        'comp':'100%',
        'desktop-comp':'100% 30%'
      },
      width: {     
        '30/30': '30%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
