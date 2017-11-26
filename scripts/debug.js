/**
 * Controls debug options for parallax.
 */

(function($) {

    $(document).ready(function() {
        $("#debug-btn").on("click", function() {
            $(".parallax").toggleClass("debug--on", this.checked);
        });
    });

})(jQuery);