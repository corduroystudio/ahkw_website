$(document).ready(function(){
   
    var container = $('#chart'),
        width = container.width(),
        h = container.height(),
        aspect = width / container.height(),
        height = width / aspect,
        barH = 48,
        margin = 48;
    
    var data = [
        {"place": "streets near home or school", "score": 43},
        {"place": "park", "score": 61},
        {"place": "playground not at school", "score": 38},
        {"place": "playing fields at school", "score": 48},
        {"place": "playing fields not at school", "score": 50},
        {"place": "beach and sea", "score": 42}
    ];
    
    data.sort(function(a,b) {
       return b.score - a.score; 
    });
    
    var xScale = d3.scale.linear()
        .range([margin * 2, width])
        .domain([0, 100]);
    
    var svg = d3.select('#chart').append('svg')
        .attr({
            width: width,
            height: barH * data.length
        });
    
    var defs = svg.append('defs')
    
    var linearGrad = svg.append('linearGradient')
        .attr({
            id: 'grad',
            x1: '0%',
            y1: '0%',
            x2: '100%',
            y2: '0%'
        });
    
    linearGrad.append('stop')
        .attr({
            offset: '0%'
        })
        .style({
            'stop-color': '#0086cb'
        });
    
    linearGrad.append('stop')
        .attr({
            offset: '100%'
        })
        .style({
            'stop-color': '#51aede'
        });
    
    var bar = svg.selectAll('.rect')
        .data(data)
        .enter().append('g')
        .attr({
            transform: function(d, i) { 
                
                if($(window).width() < 768) {
                    return 'translate(0,' + i * barH + ')'; 
                } else { 
                    return "translate(" + (margin * 2) + ', ' + i * barH + ")"; 
                }
            },
            class: 'rect'
        })
        .style({
            opacity: function(d, i) {
                return 1-(i*0.07);
            }
        });
    
    bar.append('rect')
        .attr({
            width: function(d) { 
                return xScale(d.score); 
            },
            height: barH - (margin / 4)
        })
        .style({
            fill: 'url(#grad)',
            stroke: 'none'
        });
    
    bar.append('text')
        .attr({
            x: function(d) { 
                return xScale(d.score) + (margin / 4); 
            },
            y: barH / 3,
            dy: '.35em',
            class: 'svgText',
            id: 'barVal'
        })
        .text(function(d) { return d.score + '%'; });
    
    bar.append('text')
        .attr({
            x: function(d) { 
                return (margin / 2) / 2; 
            },
            y: barH / 3,
            dy: '.35em',
            class: 'svgText',
            id: 'barHead'
        })
        .text(function(d) { return d.place; });

    $('#chart').css({
        height: barH * data.length
    });
    
    $(window).on('resize', function() {
        
        width = container.width(),
        h = container.height(),
        aspect = width / container.height(),
        height = width / aspect;
     
        svg.attr({
            width: width,
            height: height
        });
        
        xScale.range([margin * 2, width]);
        
        d3.selectAll('g.rect')
            .attr({
                transform: function(d, i) {
                    
                    if($(window).width() < 768) {
                        return 'translate(0,' + i * barH + ')'; 
                    } else { 
                        return "translate(" + (margin * 2) + ', ' + i * barH + ")"; 
                    }
                }
            });
       
        d3.selectAll('rect')
            .attr({
                width: function(d) { 
                    return xScale(d.score); 
                }
            });
        
        d3.selectAll('#barVal')
            .attr({
                x: function(d) { 
                    return xScale(d.score) + (margin / 4); 
                }
            });
        
        d3.selectAll('#barHead')
            .attr({
                x: function(d) { 
                    return (margin / 2) / 2; 
                }
            });
        
    })
});