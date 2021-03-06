/**
 * JQuery SVG Pan plugin v0.1 - A JavaScript plugin which provide panning functionality for any SVG tags
 * https://github.com/denis-vilyuzhanin/jquery-svg-pan
 *
 * Copyright 2013 Denys Viliuzhanin <dvilyuzhanin@gmail.com> and other contributors
 * Released under the MIT license.
 * http://opensource.org/licenses/MIT
 */


(function ( $ ) {
    
    $.fn.svgPan = function(arg0, arg1) {
        var args = parseArguments(arguments);
        var svgPanList = [];        
        this.each(function(){
            var svgPan = $.data(this, 'SVGPanPlugin');
            if (!svgPan) {
                var svgPan = new SVGPan($(this), args.options);    
                $.data(this, 'SVGPanPlugin', svgPan);
            }
            if (args.callback) {
                svgPanList.push(svgPan);
            }
        });
        if (args.callback) {
            $.each(svgPanList, function(index, svgPan){
                args.callback(svgPan);
            });
        }
        return this;    
    }
    
    function SVGPan(element, options) {
        this._element = element;
        this._options = options;
    }
    SVGPan.prototype.id = function() {
        return this._element.attr('id');
    }
    SVGPan.prototype.options = function() {
        return this._options;
    }
    SVGPan.prototype.dom = function() {
        return this._element[0];
    }
    
    
    function parseArguments(args) {
        var result = {
            options : {},
            callback : null
        };
        if (args.length == 1) {
            if (typeof(args[0]) == "function") {
                result.callback = args[0];
            } else {
                result.options = args[0];
            }
        } else if (args.length > 1) {
            result.options = args[0];
            result.callback = args[1];
        }
        return result;
    }
 
}( jQuery ));