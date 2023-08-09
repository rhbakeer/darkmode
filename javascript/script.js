const toggleSwitch =
    document.querySelector('.theme-slider input[type="checkbox"]');
    
function switchTheme(e) {
  
    if (e.target.checked) {
        document.documentElement.setAttribute('theme', 'dark');
    } else {
        document.documentElement.setAttribute('theme', 'light');
    }
}
  
toggleSwitch.addEventListener('change', switchTheme, false);