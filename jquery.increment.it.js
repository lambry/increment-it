/*
 * incrementIt.js 0.1.0
 *
 * https://github.com/lambry/increment-it
 *
 */
(function($) {

    $.fn.incrementIt = function(options) {

        // Defaults
        var defaults = $.extend({
            speed: 25,
            from: 0,
            to: 100
        }, options);

        // Return jQuery object
        return this.each(function() {

            var $this = $(this);

            // Options
            var options = {
                speed: $this.data('speed') || defaults.speed,
                from: $this.data('from') || defaults.from,
                to: $this.data('to') || defaults.to,
            };

            // Set incrementer
            var setIncrementer = setInterval(function() {
                runIncrementer();
            }, options.speed);

            // Run incrementer
            var runIncrementer = function() {
                if (options.from === options.to) {
                    clearIncrementer();
                }
                $this.html(options.from);
                options.from++;
            };

            // Clear incrementer
            var clearIncrementer = function() {
                clearInterval(setIncrementer);
            };

        });

    };

})(jQuery);
