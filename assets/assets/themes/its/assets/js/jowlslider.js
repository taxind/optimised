!function(){"use strict";window.jnews=window.jnews||{},window.jnews.owlslider=window.jnews.owlslider||{};var e,t,n=(e="object"==typeof jnews&&"object"==typeof jnews.library,t="function"==typeof jnews.tns,function(n){if(e){var i=jnews.library;n=i.extend({container:".jeg_slider_type_1",items:5,responsive:{0:{items:4,sliderBy:4},768:{items:6,sliderBy:6},1024:{items:7,sliderBy:7}},gutter:10,controls:!0,autoplay:!0,mouseDrag:!0,speed:500,autoplayTimeout:5e3,textDirection:"ltr",navAsThumbnails:!0,navContainer:".jeg_slider_thumbnail"},n||{}),{init:function(){var e=this;e.options=n,e.$slider=e.query(e.options.container),e.wrapper=i.getParents(e.$slider,".jeg_slider_wrapper"),e.wrapper=e.wrapper.length?e.wrapper[e.wrapper.length-1]:i.doc,e.$thumbnail=e.wrapper.querySelector(e.options.navContainer),e.options.hover=e.$slider.dataset.hoverAction,e.options.autoplay=e.$slider.dataset.autoplay,e.options.autoplayTimeout=e.$slider.dataset.delay,t&&(i.hasClass(e.$slider,"jeg_tns_active")||(e.mainSlider=jnews.tns({container:e.$slider,items:1,autoplay:e.options.autoplay,speed:e.options.speed,autoplayTimeout:e.options.autoplayTimeout,nav:!1,controls:!0,controlsText:["",""],rewind:!1,mouseDrag:e.options.mouseDrag,lazyload:!0,lazyloadSelector:".jeg_slide_item .owl-lazy",textDirection:e.options.textDirection,onInit:function(e){void 0!==e.nextButton&&i.addClass(e.nextButton,"tns-next"),void 0!==e.prevButton&&i.addClass(e.prevButton,"tns-prev")}}),void 0!==e.mainSlider&&(i.addClass(e.$slider,"jeg_tns_active"),i.dataStorage.put(e.$slider,"tiny-slider",e.mainSlider),e.mainSlider.events.on("indexChanged",(function(t){e.currentThumbnail(t)})),e.mainSlider.events.on("dragStart",e.stopPropagationDrag))),i.hasClass(e.$thumbnail,"jeg_tns_active")||(e.thumbnailSlider=jnews.tns({container:e.$thumbnail,nav:!1,controls:!1,loop:!1,items:e.options.items,gutter:e.options.gutter,mouseDrag:e.options.mouseDrag,textDirection:e.options.textDirection,lazyload:!0,freezable:!0,lazyloadSelector:".jeg_slide_thumbnail_item .owl-lazy",responsive:e.options.responsive,onInit:function(t){void 0!==t.nextButton&&i.addClass(t.nextButton,"tns-next"),void 0!==t.prevButton&&i.addClass(t.prevButton,"tns-prev"),e.setCurrentThumbnail(t)}}),void 0!==e.thumbnailSlider&&(e.thumbnailSlider.events.on("dragStart",e.stopPropagationDrag),i.addClass(e.$thumbnail,"jeg_tns_active"),i.dataStorage.put(e.$thumbnail,"tiny-slider",e.thumbnailSlider))))},query:function(e){return"string"==typeof e&&(e=i.doc.querySelector(e)),e},stopPropagationDrag:function(e){e.event.preventDefault(),e.event.stopPropagation()},setCurrentThumbnail:function(e){var t=this,n=e.index;e.slideItems[n].classList.add("current"),"object"==typeof e.slideItems&&e.slideItems&&(t.in_drag=!1,i.objKeys(e.slideItems).forEach((function(n){var i=e.slideItems[n],o=function(e){var i="mouseover"===e.type&&!t.in_drag,o="click"===e.type&&!t.in_drag;o&&e.preventDefault(),(i||o)&&t.mainSlider.goTo(n)};i.addEventListener("mousedown",(function(){t.in_drag=!0})),i.addEventListener("mouseup",(function(){t.in_drag=!1})),i.addEventListener("mouseleave",(function(){t.in_drag=!1})),t.options.hover&&i.addEventListener("mouseover",o),i.addEventListener("click",o)})))},currentThumbnail:function(e){var t=this.mainSlider.getInfo(),n=this.thumbnailSlider.getInfo(),i=t.displayIndex,o=t.indexCached;n.slideItems[o-1].classList.remove("current"),this.thumbnailSlider.goTo(i-1),n.slideItems[i-1].classList.add("current")}}.init()}});window.jnews.owlslider=n}();