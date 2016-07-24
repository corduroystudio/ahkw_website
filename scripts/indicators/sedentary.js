$(document).ready(function(){
    
    var container = $('#chart'),
        width = container.width(),
        aspect = width / container.height(),
        height = width / aspect,
        contH = container.height(),
        padding = 6;
    
    var data = [
        {key: 'Gaming', value: 53},
        {key: 'Other than',key2: 'gaming', value: 64},
        {key: 'Watching',key2: 'entertainment', value: 68}
    ];
    
    var svg = d3.select('#chart').append('svg')
        .attr({
            width: width,
            height: height
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
    
    var g = svg.append('g')
        .attr({
            class: 'group'
        });
    
    var bar = g.selectAll('rect')
        .data(data)
        .enter().append('rect')
        .attr({
            class: 'bar',
            x: function(d,i) {
                return i * (width / data.length + padding);
            },
            width: width / data.length - (padding * 2),
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
        
    g.selectAll('text')
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
            id: function(d, i) {
                return 'id'+i;
            },
            x: function(d, i) {
                return i * (width / data.length + padding) + (width / data.length - padding) / 2;
            },
            y: function(d) {
                return y(d.value) - 50;
            },
            dy: 32
        })
        .text(function(d) {
            return d.key;
        })
        .append('tspan')
        .attr({
            class: 'sub-text2',
            id: function(d, i) {
                return 'id'+i;
            },
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
        });
    
    
    $(window).on('resize', function() {
        
        width = container.width(),
        aspect = width / container.height(),
        height = width / aspect,
        contH = container.height();
        
        svg.attr({
            width: width,
            height: height
        });
        
        d3.selectAll('rect')
            .attr({
                x: function(d,i) {
                    return i * (width / data.length + padding);
                },
                width: width / data.length - (padding * 2),
                y: function(d) {
                    return y(d.value) - 90;
                },
                height: function(d, i) {
                    return contH - y(d.value);
                }
            });
        
        g.selectAll('#commVal')
            .attr({
                'text-anchor': 'middle',
                x: function(d, i) {
                    return i * (width / data.length + padding) + (width / data.length - padding) / 2;
                },
                y: function(d) {
                    return y(d.value) - 50;
                }
            });
        
        
        d3.selectAll('.sub-text')
            .attr({
                x: function(d, i) {
                    return i * (width / data.length + padding) + (width / data.length - padding) / 2;
                },
                y: function(d) {
                    return y(d.value) - 50;
                },
                dy: 32
            });
        
        
        d3.selectAll('.sub-text2')
            .attr({
                x: function(d, i) {
                    return i * (width / data.length + padding) + (width / data.length - padding) / 2;
                },
                y: function(d) {
                    return y(d.value) - 50;
                },
                dy: 46
            });
        
    });
   
});