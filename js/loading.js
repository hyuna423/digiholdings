// Requires the GreenSock DrawSVG plugin and TimelineMax
var loader        = new TimelineMax({ repeat: -1 }),
    fill_path     = $('.fill-path'),
    fill_duration = 1.2,
    fill_position = '+=.25'; // place tween .25secs after end of init tween

loader.fromTo( fill_path, fill_duration,
              { drawSVG: '0' },
              { drawSVG: '100%' }, fill_position )
      .to( fill_path, fill_duration,
          { drawSVG: '100% 100%' }, fill_position );