$(document).ready(function(){
    
    var container = $('#chart'),
        width = container.width() * 0.6,
        aspect = width / container.height(),
        height = width / aspect,
        contH = container.height(),
        padding = 12;
    
    var data = [
        {key: 'facilities for', key2: 'children aged', key3: '1-10 years', value: 54},
        {key: 'facilities for', key2: 'children aged', key3: '11-15 years', value: 38}
    ];
    
    var svg = d3.select('#chart').append('svg')
        .attr({
            width: width,
            height: height
        })
        .style({
            'margin-left': '20%',
            'margin-right': '20%'
        });  
    
    var defs = svg.append('defs')
        .append('linearGradient')
        .attr({
            id: 'grad',
            x1: '0%',
            y1: '0%',
            x2: '100%',
            y2: '100%'
        });
    
    defs.append('stop')
        .attr({
            offset: '0%'
        })
        .style({
            'stop-color': '#51aede'
        });
    
    defs.append('stop')
        .attr({
            offset: '100%'
        })
        .style({
            'stop-color': '#0086cb'
        });
    
    var y = d3.scale.linear()
        .range([contH, 0])
        .domain([0, 100]);
    
    var bar = svg.selectAll('rect')
        .data(data)
        .enter().append('rect')
        .attr({
            class: 'bar',
            x: function(d,i) {
                return i * (width / data.length + padding);
            },
            width: width / data.length - padding,
            y: function(d) {
                return y(d.value) - 90;
            },
            height: function(d, i) {
                return contH - y(d.value);
            }
        })
        .style({
            fill: 'url(#grad)'
        });
        
    svg.selectAll('text')
        .data(data)
        .enter().append('text')
        .text(function(d) {
            return d.value + '%';
        })
        .attr({
            'text-anchor': 'middle',
            id: 'commVal',
            x: function(d, i) {
                return i * (width / data.length + padding) + (width / data.length - padding) / 2;
            },
            y: function(d) {
                return y(d.value) - 50;
            },
            class: 'svgText'
        })
        .append('tspan')
        .attr({
            class: 'sub-text',
            id: 'key1',
            x: function(d, i) {
                return i * (width / data.length + padding) + (width / data.length - padding) / 2;
            },
            y: function(d) {
                return y(d.value) - 50;
            },
            dy: 26
        })
        .text(function(d) {
            return d.key;
        })
        .append('tspan')
        .attr({
            class: 'sub-text',
            id: 'key2',
            x: function(d, i) {
                return i * (width / data.length + padding) + (width / data.length - padding) / 2;
            },
            y: function(d) {
                return y(d.value) - 50;
            },
            dy: 46
        })
        .text(function(d) {
            return d.key2;
        })
        .append('tspan')
        .attr({
            class: 'sub-text',
            id: 'key3',
            x: function(d, i) {
                return i * (width / data.length + padding) + (width / data.length - padding) / 2;
            },
            y: function(d) {
                return y(d.value) - 50;
            },
            dy: 66
        })
        .text(function(d) {
            return d.key3;
        });
    
    
    $(window).on('resize', function() {
        
        width = container.width() * 0.6,
        aspect = width / container.height(),
        contH = container.height(),
        height = width / aspect;
        
        svg.attr({
            width: width,
            height: height
        });
        
        y.range([contH, 0]);
        
        
    
        bar
            .attr({
                x: function(d,i) {
                   return i * (width / data.length + padding); 
                },
                height: function(d) {
                    return contH - y(d.value);
                },
                width: width / data.length - padding,
                y: function(d) {
                    return y(d.value) - 90;
                }
            });    
        
        d3.selectAll('text')
            .attr({
                x: function(d, i) {
                return i * (width / data.length + padding) + (width / data.length - padding) / 2;
                },
                y: function(d) {
                    return y(d.value) - 50;
                }
            });
        
        d3.selectAll('tspan#key1')
            .attr({
                x: function(d, i) {
                return i * (width / data.length + padding) + (width / data.length - padding) / 2;
                },
                y: function(d) {
                    return y(d.value) - 50;
                },
                dy: 26
            });  
        
        d3.selectAll('tspan#key2')
            .attr({
                x: function(d, i) {
                return i * (width / data.length + padding) + (width / data.length - padding) / 2;
                },
                y: function(d) {
                    return y(d.value) - 50;
                },
                dy: 46
            });  
        
        d3.selectAll('tspan#key3')
            .attr({
                x: function(d, i) {
                return i * (width / data.length + padding) + (width / data.length - padding) / 2;
                },
                y: function(d) {
                    return y(d.value) - 50;
                },
                dy: 66
            });  
        
    });
   
});