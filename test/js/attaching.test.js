
module('Attaching');

QUnit.testStart(function( details ) {
    $("#qunit-fixture").append("<svg id='svg0' class='svgPan'></svg>")
                       .append("<svg id='svg1' class='svgPan'></svg>");
});

test("attach default", function(){
    expect(4);
    function checkWidget(widget) {
        assertWidget(widget, {
            id : 'svg0',
            dom : $('#svg0')[0],
            options : {}
        });
    }
    // attach widget    
    $('#svg0').svgPan();
    
    // obtain attached widget
    $('#svg0').svgPan(checkWidget);
});

test("attach with options", function(){
    expect(4);
    var options = {
        anyProperty : 'anyValue'
    };
    function checkWidget(widget) {
        assertWidget(widget, {
            id : 'svg0',
            dom : $('#svg0')[0],
            options : options
        });
    }
    
    // attach widget    
    $('#svg0').svgPan(options);
    
    // obtain attached widget
    $('#svg0').svgPan(checkWidget);
});

test("attach with options and check", function(){
    expect(4);
    var options = {
        anyProperty : 'anyValue'
    };
    function checkWidget(widget) {
        assertWidget(widget, {
            id : 'svg0',
            dom : $('#svg0')[0],
            options : options
        });
    }
    // attach widget and check
    $('#svg0').svgPan(options, checkWidget);
});
