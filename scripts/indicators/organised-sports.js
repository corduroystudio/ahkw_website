$(document).ready(function(){
   
    var container = $('#chart'),
        width = container.width(),
        h = container.height(),
        aspect = width / container.height(),
        height = width / aspect,
        margin = 48;
    
    var data = [
        {"date": "2011", "score": 27},
        {"date": "2013", "score": 40},
        {"date": "2015", "score": 48}
    ];
    
    var parse = d3.time.format('%Y').parse;
    
    var xmin = d3.min(data, function(d) {
        return new Date(d.date); 
    }),
        xmax = d3.max(data, function(d) {
        return new Date(d.date); 
    });
    
    var xScale = d3.scale.linear()
        .range([margin, width - margin])
        .domain([2011, 2015]);
                          
    var yScale = d3.scale.linear()
        .range([h - margin, margin])
        .domain([20,60]);
    
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient('bottom')
        .ticks(5)
        .tickPadding(12)
        .tickFormat(d3.format('d'));
    
    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient('left')
        .tickFormat(function(d) {
            return d + '%';
        });
    
    
    var line = d3.svg.line()
        .interpolate('cardinal')
        .x(function(d) {
            return xScale(d.date);
        })
        .y(function(d) {
            return yScale(d.score);
        });
    
    
    var svg = d3.select('#chart').append('svg')
        .attr({
            width: width,
            height: height
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
    
    var marker = defs.append('marker')
        .attr({
            id: 'triangle',
            viewBox: '0 0 10 10',
            refX: 1,
            refY: 5,
            orient: 'auto'
        })
        .append('path')
        .attr({
            d: 'M 0 0 L 10 5 L 0 10 z'
        })
        .style({
            fill: '#51aede',
            stroke: 'none'
        });
    
    
    svg.append('g')
        .attr({
            class: 'x axis',
            transform: 'translate(0,' + (h - margin) + ')'
        })
        .call(xAxis);
    
    svg.append('g')
        .attr({
            class: 'y axis',
            transform: 'translate(' + margin + ',0)'
        })
        .call(yAxis);
    
    svg.append('path')
        .datum(data)
        .attr({
            class: 'line',
            d: line
        })
        .style({
            'stroke-width': '5px',
            stroke: 'url(#grad)',
            'marker-end': 'url(#triangle)'
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
        
        
        xScale.range([margin, width - margin]);
        
        yScale.range([h - margin, margin]);
        
        d3.selectAll('g.x').attr({
            transform: 'translate(0,' + (h - margin) + ')'
            })
            .call(xAxis); 
        
        d3.selectAll('g.y').attr({
            transform: 'translate(' + margin + ',0)'
            })
            .call(yAxis);
        
        
        line.x(function(d) {
            return xScale(d.date);
        })
        .y(function(d) {
            return yScale(d.score);
        });
        
        d3.selectAll('.line').attr({
            d: line
        });
        
    })
});