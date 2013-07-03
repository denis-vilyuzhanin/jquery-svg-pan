#1 JQuery Plugin for SVG tag
===============
SVG pan could be attached to any SVG tag by standard JQuery selector.

```javascript
$( "svg" ).svgPan();
```
After that special object must be attached to DOM which represents created widget. 
This object provide API which controls SVGPan instance. Access could be obtained by following expression.

```javascript
 $( "svg" ).svgPan(function(widget){
   //   widget is not null
   //   this callback is invoked for each widget was selected by query.
});
```

