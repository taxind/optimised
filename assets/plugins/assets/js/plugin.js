!function(a){"use strict";var e=a(".jeg_post_editor");function t(e,t,n,i,d){e.selectize({plugins:["drag_drop","remove_button"],options:t,persist:!0,create:!0,hideSelected:!0,render:{option:function(a){return n?void 0===a.text?"<div><span>"+a.value+"</span></div>":"<div><span>"+a.text+"</span></div>":'<div class="'+a.class+'"><span>'+a.text+"</span></div>"}},load:function(e,t){if(n){if(!e.length||e.length<3)return t();(function(e,t,n){return a.ajax({url:e,type:"POST",dataType:"json",data:{string:t,action:n}})})(ajaxurl,encodeURIComponent(e),i).done((function(a){t(a)}))}},onItemAdd:function(){if(!d){var a=this.items;if(a.length>1)for(var e=0;e<a.length;e++)this.removeItem(a[e]),this.refreshOptions()}}});a(document).on("selectize_add",(function(a,t,n,i){e.hasClass(i)&&(e[0].selectize.addOption([{value:t,text:n}]),e[0].selectize.addItem(t,!0))}))}a(document).on("ready",(function(){e.find(".multicategory-field").each((function(){var e=a(this),n=JSON.parse(e.parent().find(".data-option").text());e.hasClass("jeg-ajax-load")?t(e,n,!0,"vp_find_ajax_post_category",!0):t(e,n,!1,!1,!0)})),e.find(".singlecategory-field").each((function(){var e=a(this),n=JSON.parse(e.parent().find(".data-option").text());e.hasClass("jeg-ajax-load")?t(e,n,!0,"vp_find_ajax_post_category",!1):t(e,n,!1,!1,!1)})),e.find(".multitag-field").each((function(){var e=a(this),n=JSON.parse(e.parent().find(".data-option").text());e.hasClass("jeg-ajax-load")?t(e,n,!0,"vp_find_ajax_post_tag",!0):t(e,n,!1,!1,!0)})),e.find(".format-nav li a").each((function(){var t=a(this);t.hasClass("active")&&("video"===t.data("type")?e.find('input[name="video"]').fadeIn("fast"):"image"===t.data("type")?e.find('input[name="image"]').fadeIn("fast"):e.find('input[name="gallery"]').fadeIn("fast"))})),e.on("click",".format-nav li a",(function(t){t.preventDefault();var n=a(this);n.hasClass("active")||(e.find(".format-nav li a").removeClass("active"),n.addClass("active")),e.find(".format-field input, .format-field .jeg_upload_wrapper").css({display:"none"}),"video"===n.data("type")?(e.find('input[name="format"]').val("video"),e.find('input[name="video"]').fadeIn("fast")):"image"===n.data("type")?(e.find('input[name="format"]').val("image"),e.find("#featured_image").fadeIn("fast")):(e.find('input[name="format"]').val("gallery"),e.find("#featured_image_gallery").fadeIn("fast"))})),a('.jeg_post_list_filter select[name="post-list-filter"]').on("change",(function(){var e=a(this).val(),t=a('input[name="current-page-url"]').val();t.indexOf("?")>-1?t+="&order="+e:t+="?order="+e,window.location.href=t}))}))}(jQuery);