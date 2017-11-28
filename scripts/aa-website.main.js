/**
 * https://github.com/krueger404/aa-website
 * @license apache 2.0 licensed
 * Copyright (c) 2017 Oliver Carson
 */

(function($) {

    $(document).ready(function() {
        /* Initialise fullpage.js */
        $("#fullpage").fullpage({
            css3: false,                // Required for clipped-fixed styling
            verticalCentered: false,    // Required for clipped-fixed styling
            scrollingSpeed: 1500
        });
    });

})(jQuery);
