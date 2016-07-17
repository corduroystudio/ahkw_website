$(document).ready(function(){
    
    var container = $('#chart'),
        width = container.width(),
        aspect = width / container.height(),
        height = width / aspect,
        columns = 10,
        rows = 10, 
        xPadding = 20,
        yPadding = 80,
        yBuffer = 30,
        xBuffer = 40,
        primVal = 41;
    
    var svg = d3.select('#chart').append('svg')
        .attr({
            width: '100%',
            height: '100%',
            viewBox: '0 0 '+Math.min(width,height)+' '+Math.min(width,height),
            preserveAspectRatio: 'xMidYMid meet' 
        });
    
     var defs = svg.append('defs')
        .append('g')
        .attr({
            id: 'pictogram'
        })
     
     defs.append('path')
        .attr({
            d: "M23.065,3.432c-1.151,1.612-2.692,1.799-4.351,0.814c-0.113-0.067-0.614-0.343-0.725-0.409 c-2.668-1.584-5.333-0.963-7.121,1.54c-0.759,1.064,0.997,2.073,1.748,1.021c0.923-1.293,2.097-1.667,3.381-1.258 c-0.657,1.141-1.232,2.276-2.043,3.887c-0.812,1.612-2.603,2.899-4.324,1.892c-1.242-0.726-2.362,1.059-1.124,1.782 c2.35,1.373,5.105,0.53,6.512-1.255c0.049,0.025,0.101,0.049,0.157,0.069c1.149,0.4,2.655,1.466,3.114,1.844 s1.247,2.302,1.716,3.27c0.567,1.173,2.402,0.318,1.832-0.86c-0.531-1.097-1.422-3.286-2.116-3.84 c-0.558-0.444-1.64-1.271-2.558-1.74c0.621-1.203,1.268-2.393,1.948-3.562c2.169,0.665,4.231-0.119,5.699-2.175 C25.573,3.389,23.817,2.379,23.065,3.432z"
        });
    
    defs.append('path')
        .attr({
            d: "M7.711,1.708h7.714c0.202,0,0.367-0.164,0.367-0.367c0-0.203-0.165-0.367-0.367-0.367H7.711 c-0.203,0-0.367,0.164-0.367,0.367C7.344,1.544,7.508,1.708,7.711,1.708z"
        });
    
    defs.append('path')
        .attr({
            d: "M0.812,5.296h7.713c0.203,0,0.367-0.165,0.367-0.367S8.729,4.562,8.526,4.562H0.812c-0.203,0-0.367,0.164-0.367,0.367 S0.609,5.296,0.812,5.296z"
        });
    
    defs.append('path')
        .attr({
            d: "M2.883,9.072c0,0.203,0.165,0.367,0.367,0.367h7.713c0.203,0,0.367-0.164,0.367-0.367s-0.164-0.367-0.367-0.367H3.25 C3.047,8.705,2.883,8.87,2.883,9.072z"
        });
    
    defs.append('path')
        .attr({
            d: "M7.297,13.337H0.367C0.164,13.337,0,13.501,0,13.705c0,0.202,0.164,0.367,0.367,0.367h6.931 c0.203,0,0.367-0.165,0.367-0.367C7.665,13.501,7.5,13.337,7.297,13.337z"
        });
    
    defs.append('path')
        .attr({
            d: "M19.769,4.009c1.106,0,2.004-0.897,2.004-2.004S20.875,0,19.769,0c-1.107,0-2.005,0.897-2.005,2.004 S18.661,4.009,19.769,4.009z"
        });
    
    svg.append('rect')
        .attr({
            width: +Math.min(width,height),
            height: +Math.min(width,height)
        })
        .style({
            fill: '#f2f2f2'
        });
    
    var range = d3.range(columns*rows);
    
    svg.append('text')
        .attr({
            id: 'value',
            x: xPadding,
            y: yPadding,
            dy: -46
        })
        .text('41%').append('tspan')
        .attr({
            id: 'sub-text',
            x: xPadding,
            y: yPadding,
            dy: -26
        })
        .text('of adults are "hooked on sport"');
    
    svg.append('g')
        .attr({
            id: 'pictoLayer'
        })
        .selectAll('use')
        .data(range)
        .enter().append('use')
        .attr({
            id: function(d) {
                return 'icon-'+d;
            },
            'xlink:href': '#pictogram',
            x: function(d) {
                var remainder = d % columns;
                return xPadding+(remainder*xBuffer);
            },
            y: function(d) {
                var whole = Math.floor(d/columns);
                return yPadding+(whole*yBuffer);
            },
            class: function(d, i) {
                if(d<primVal) {
                    return 'iconY';
                } else {
                    return 'iconN';
                }
            }
    });
    
   
    
});