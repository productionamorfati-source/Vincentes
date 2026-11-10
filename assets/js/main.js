/* Vincentes — langue, thème, menu mobile et ajustement du grand titre.
   Aucune donnée n'est envoyée à un serveur : les deux préférences (langue, thème)
   restent dans le navigateur du visiteur (localStorage). */
(function () {
    "use strict";

    var root = document.documentElement;

    function store(key, value) { try { localStorage.setItem(key, value); } catch (e) {} }
    function read(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }

    /* ---------- Thème clair / sombre ---------- */
    function setTheme(theme) {
        theme = theme === "dark" ? "dark" : "light";
        if (theme === "dark") root.setAttribute("data-theme", "dark");
        else root.removeAttribute("data-theme");
        store("vincentes-theme", theme);
        var btn = document.getElementById("theme-btn");
        if (btn) btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    }

    /* ---------- Langue FR / EN ----------
       Le français est dans le HTML; l'anglais est dans l'attribut data-en. */
    var translatable = [];
    function setLang(lang) {
        lang = lang === "en" ? "en" : "fr";
        translatable.forEach(function (el) {
            var text = lang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-fr");
            if (el.tagName === "TITLE") document.title = text.replace(/&amp;/g, "&");
            else el.innerHTML = text;
        });
        root.setAttribute("lang", lang === "en" ? "en-CA" : "fr-CA");
        store("vincentes-lang", lang);
        document.querySelectorAll("[data-lang]").forEach(function (b) {
            b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
        });
        fitWordmark();
    }

    /* ---------- Grand titre : occupe exactement la largeur disponible ---------- */
    function fitWordmark() {
        var el = document.querySelector(".wordmark");
        if (!el) return;
        var box = el.parentElement.clientWidth;
        if (!box) return;
        el.style.fontSize = "100px";
        var range = document.createRange();
        range.selectNodeContents(el.firstChild);          /* le texte « Vincentes » seulement */
        var natural = range.getBoundingClientRect().width;
        if (natural) el.style.fontSize = (100 * box / natural * 0.995) + "px";
    }

    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll("[data-en]").forEach(function (el) {
            el.setAttribute("data-fr", el.tagName === "TITLE" ? el.textContent : el.innerHTML);
            translatable.push(el);
        });

        setTheme(read("vincentes-theme"));
        setLang(read("vincentes-lang"));

        document.querySelectorAll("[data-lang]").forEach(function (b) {
            b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
        });
        var themeBtn = document.getElementById("theme-btn");
        if (themeBtn) themeBtn.addEventListener("click", function () {
            setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark");
        });

        /* Menu mobile */
        var menuBtn = document.getElementById("menu-btn");
        var nav = document.getElementById("site-nav");
        if (menuBtn && nav) {
            menuBtn.addEventListener("click", function () {
                var open = nav.classList.toggle("open");
                menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
            });
            nav.addEventListener("click", function (e) {
                if (e.target.tagName === "A") {
                    nav.classList.remove("open");
                    menuBtn.setAttribute("aria-expanded", "false");
                }
            });
        }

        fitWordmark();
        window.addEventListener("resize", fitWordmark);
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitWordmark);

        var year = document.getElementById("year");
        if (year) year.textContent = new Date().getFullYear();
    });

    /* Applique le thème avant le premier affichage pour éviter un flash. */
    if (read("vincentes-theme") === "dark") root.setAttribute("data-theme", "dark");
})();
