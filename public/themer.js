window.switchTheme = (() => {
    let _themer = document.createElement("link");
    _themer.href = "http://styles.hanro50.net.za/v1/dark";
    _themer.rel = "stylesheet"
    if (!localStorage.getItem("light_theme")) {
        document.head.appendChild(_themer);
    }
    return () => {
        if (_themer.parentElement) {
            _themer.remove()
            localStorage.setItem("light_theme", "true")
        } else {
            document.head.appendChild(_themer)
            localStorage.removeItem("light_theme")
        }
    }
})();