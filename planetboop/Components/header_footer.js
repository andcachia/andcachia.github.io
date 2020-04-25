Vue.component('common-header', {
    template: `
        <nav>
            <div class="nav-wrapper">
                <img id="Logo" src="Assets/Logo.png">
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/#games">GAMES</a></li>
                    <li><a target="_blank" href="https://www.instagram.com/planetboop/">COMICS</a></li>
                    <li><a target="_blank" href="https://planetboop.threadless.com/">STORE</a></li>
                </ul>
            </div>
        </nav>
    `
})

Vue.component('common-footer', {
    template: `
        <div class="footer row">
            <div class="col s12 m8 l8">
                <div class="footer-section-1 row">
                    <div id="footer-social-icons" class="col s12 m2 l2">
                        <a target="_blank" href="https://www.facebook.com/planetboop"><img class="social-media-icon" src="Assets/social_media_facebook.png"></a>
                        <a target="_blank" href="https://www.instagram.com/planetboop/"><img class="social-media-icon" src="Assets/social_media_insta.png"></a>
                        <a target="_blank" href="#"><img class="social-media-icon" src="Assets/social_media_youtube.png"></a>
                    </div>
                    <div class="col s12 m10 l10">
                        <p>Terms of Use | Privacy Policy | Trademarks | License Agreements</p>
                        <p class="green-text">Copyright(c) 2020 | NightOwl Studios and/or their affiliates. All Rights Reserved.</p>
                    </div>
                </div>
                <p>Planet Boop is a product of NightOwl Studios and any names or images are used as trademarks. Boops, artwork and anything related is protected and can be used freely but with permission if for business.</p>
            </div>
            <div class="col s12 m4 l4">
                <img class="responsive-img" src="Assets/boop-footer.png">
            </div>
        </div>
    `
})