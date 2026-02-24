tailwind.config = {
  darkMode: 'class',   // ✅ FIXED
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px,1fr))'
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"]
      },
      animation: {
        spin_slow: 'spin 6s linear infinite'
      },
      colors: {
        lightHover: '#f0e1f5',
        darkTheme: '#11001F'
      }
    }
  }
}

