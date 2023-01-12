const js = hexo.extend.helper.get('js').bind(hexo);

hexo.extend.injector.register('body_end', () => {
  ruffle = hexo.config.ruffle || 'https://unpkg.com/@ruffle-rs/ruffle/ruffle.js';
  return js(ruffle);
});

hexo.extend.tag.register('ruffle', function(args){
    var swf = args[0];
    var width = args[1];
    var height = args[2];
    return '<embed src="'+ swf +'" allowfullscreen="true" quality="high" width="'+ width +'" height="'+ height +'" allowscriptaccess="always" type="application/x-shockwave-flash">';
  });