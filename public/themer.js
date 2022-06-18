window.switchTheme = (() => {
    let _themer = document.createElement("link");
    _themer.rel = "stylesheet"
    _themer.href = "https://styles.hanro50.net.za/v1/light";
    if (localStorage.getItem("light_theme")) {
        document.head.appendChild(_themer);
    }
    return () => {
        if (_themer.parentElement) { _themer.remove(); localStorage.removeItem("light_theme"); }
        else { document.head.appendChild(_themer); localStorage.setItem("light_theme", "true"); }
    }
})();
