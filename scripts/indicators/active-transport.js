$(document).ready(function(){
    
    var width,
        container = $('#chart');
    
    if ($(window).width() < 768) {
        width = container.width() * 0.9;
    } else {
        width = container.width() / 2;
    }
    
    var aspect = width / container.height(),
        height = width / aspect,
        useHeight = container.height() - 80,
        columns = 10,
        rows = 10, 
        xPadding = 20,
        yPadding = 80,
        yBuffer = 30,
        xBuffer = 40,
        primVal = 40;
    
    
    var svg = d3.select('#chart').append('svg')
        .attr({
            width: '100%',
            height: '100%',
            viewBox: '0 0 '+ width + ' ' + height,
            preserveAspectRatio: 'xMidYMid meet' 
        });     
    
    svg.append('defs')
        .append('g')
        .attr({
            id: 'pictogram'
        })
        .append('path')
        .attr({
            d: "M9.175,4.128c1.147,0,2.063-0.917,2.063-2.063C11.238,0.917,10.322,0,9.175,0S7.11,0.917,7.11,2.064 C7.11,3.21,8.028,4.128,9.175,4.128z M9.289,11.238h5.619V9.174h-4.128L8.486,5.39c-0.343-0.573-1.032-1.032-1.72-1.032 c-0.229,0-0.344,0-0.573,0.115L0,6.422v5.963h2.064V8.142l2.409-0.803L0,25h2.064l3.326-9.29l2.638,3.556V25h2.064v-7.339 L7.224,12.5l0.803-3.326L9.289,11.238z"
        });
    
    var range = d3.range(columns*rows);
    
    svg.append('text')
        .attr({
            id: 'value',
            x: xPadding,
            y: yPadding,
            dy: -46,
            class: 'svgText'
        })
        .text('40%').append('tspan')
        .attr({
            id: 'sub-text',
            x: xPadding,
            y: yPadding,
            dy: -26
        })
        .text('of children took active transport to school');
    
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
            x: function(d, i) {
                var remainder = d % columns;
                return 10 + (remainder * (width / 10));
            },
            y: function(d) {
                var whole = Math.floor(d/columns);
                return yPadding + (whole * (useHeight / 10));
            },
            class: function(d, i) {
                if(d<primVal) {
                    return 'iconY';
                } else {
                    return 'iconN';
                }
            }
    });
    
    
    //Resize function
    $(window).resize(function() {

        if ($(window).width() < 768) {
            width = container.width() * 0.9;
        } else {
            width = container.width() / 2;
        }

        aspect = width / container.height();
        height = width / aspect;
        useHeight = container.height() - 80;
        
        svg.attr({viewBox: '0 0 '+ width + ' ' + height });
        
        d3.selectAll('use')
            .attr({
                x: function(d, i) {
                    var remainder = d % columns;
                    return 10 + (remainder * (width / 10));
                },
                y: function(d) {
                    var whole = Math.floor(d/columns);
                    return yPadding + (whole * (useHeight / 10));
                }
            });
        
    });
    
   
    
});