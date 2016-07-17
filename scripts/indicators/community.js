$(document).ready(function(){
    
    var container = $('#chart'),
        width = container.width() / 2,
        aspect = width / container.height(),
        height = width / aspect,
        contH = container.height(),
        padding = 12;
    
    var data = [
        {key: 'of parents with children', key2: 'aged 1-10 years were', key3: 'happy with playing facilities', value: 54},
        {key: 'of parents with children', key2: 'aged 11-15 years were', key3: 'happy with playing facilities', value: 38}
    ];
    
    var svg = d3.select('#chart').append('svg')
        .attr({
            width: '100%',
            height: '100%',
            viewBox: '0 0 '+Math.min(width,contH)+' '+Math.min(width,contH),
            preserveAspectRatio: 'xMidYMin' 
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
            }
        })
        .append('tspan')
        .attr({
            class: 'sub-text',
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
   
});