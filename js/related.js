"use strict";Tey.lib.listen("postLoaded $ scrollMonitor",function(){var s=$("#relatedPosts"),i=s.data("rs"),t=!1;i.some(function(i){return 1<enum_rs[i][1]})?scrollMonitor.create(s).one("enterViewport",function(){i.forEach(function(e,i){1<enum_rs[e][1]&&Tey.lib.getPosts({category:e,"max-results":5},function(i){var a=i.feed.openSearch$totalResults.$t;"1"<a&&(4<(i=Tey.lib.parseEntries(i.feed.entry,"thumbnail published",{thumbnail:{size:["w70-h70","-e365",Tey.vars.webp?"-rw":"","-p-k-no-nu"]}}).filter(function(i){return i.title.trim()!==$("#focus h1").text().trim()})).length&&(i=i.slice(0,4)),i=i.map(function(i){return"<div class='item'><a href='"+i.url+"'><div class='im cd'><img class='lazy' src='"+Tey.st.pixel+"' data-src='"+i.thumbnail+"' alt='"+i.title+"'/></div><div class='co'><time datetime='"+i.published+"'><i class='far fa-calendar-week' aria-hidden='true'></i> "+Tey.lib.formatDate(i.published,"dd MM yyyy")+"</time><h3>"+i.title+"</h3></div></a></div>"}).join(""),t||(s.empty(),t=!0),a=5<a?"<i class='more'></i>":"<i class='show'></i>",s.append("<div class='collection' data-collection='"+e.substr(2)+"'><div class='wid-title'><a href='/search/label/"+e+"?max-results=8'><h2><i aria-hidden='true' class='far fa-chart-network fa-fw'></i>"+enum_rs[e][0]+"</h2>"+a+"</div><div class='owl-t1 compact responsive'>"+i+"</div></div>"),window.lazyLoadInstance&&lazyLoadInstance.update())},"summary")})}):s.remove()},!0,!1);