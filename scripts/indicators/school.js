$(document).ready(function(){
   
    var container = $('#chart'),
        width = container.width() / 2,
        h = container.height(),
        aspect = width / container.height(),
        height = width / aspect,
        margin = 48,
        τ = 2 * Math.PI,
        outerRadius = Math.min(width,height)/2,
        innerRadius = (outerRadius/5)*4;
    
    var arc = d3.svg.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .startAngle(0);
    
    
    var svg = d3.select('#chart').append('svg')
        .attr({
            width: width,
            height: height
        })
        .style({
            'margin-left': '25%',
            'margin-right': '25%'
        });
    
    var defs = svg.append('defs')
    
    var radialGrad = svg.append('radialGradient')
        .attr({
            id: 'grad',
            x1: '50%',
            y1: '0%',
            x2: '100%',
            y2: '0%'
        });
    
    radialGrad.append('stop')
        .attr({
            offset: '0%'
        })
        .style({
            'stop-color': '#0086cb'
        });
    
    radialGrad.append('stop')
        .attr({
            offset: '100%'
        })
        .style({
            'stop-color': '#51aede'
        });
    
    var g = svg.append('g')
        .attr({
            class: 'arcGroup',
            transform: function(d) {
                return 'translate(' + Math.min(width,height) / 2 + ',' + Math.min(width,height) / 2 + ')'; 
            }
        });
    
    var text = g.append('text')
        .text('62%')
        .attr({
            'text-anchor': 'middle',
            dy: '.35em',
            dx: 2,
            class: 'svgText',
            id: 'value'
        });
    
    var background = g.append('path')
        .datum({endAngle: τ})
        .style({
            fill: '#0086cb',
            opacity: .2
        })
        .attr({
            d: arc,
            class: 'background'
        });
    
    var foreground = g.append('path')
        .datum({endAngle: .62 * τ})
        .style('fill', 'url(#grad)')
        .attr({
            d: arc,
            class: 'foreground'
        });
    

    
    $(window).on('resize', function() {
        
        width = container.width() / 2,
        h = container.height(),
        aspect = width / container.height(),
        height = width / aspect,
        outerRadius = Math.min(width,height)/2,
        innerRadius = (outerRadius/5)*4;
        
        arc.innerRadius(innerRadius)
            .outerRadius(outerRadius)
        
        svg.attr({
            width: width,
            height: height
        });
        
        d3.selectAll('.arcGroup')
            .attr({
                transform: 'translate(' + Math.min(width,height) / 2 + ',' + Math.min(width,height) / 2 + ')'
            });
        
        d3.select('.background').attr('d', arc);
        d3.select('.foreground').attr('d', arc);
        
    });
});