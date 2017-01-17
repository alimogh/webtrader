define(["jquery","lodash","jquery-ui","color-picker","ddslick"],function(a,b){function c(){a(this).dialog("close"),a(this).find("*").removeClass("ui-state-error")}function d(d,f){require(["css!charts/indicators/ao/ao.css"]);var g=function(a,b,c,d){this.level=a,this.stroke=b,this.strokeWidth=c,this.dashStyle=d},h=[new g(30,"red",1,"Dash"),new g(70,"red",1,"Dash")];require(["text!charts/indicators/ao/ao.html","text!charts/indicators/indicators.json"],function(g,i){var j="#57a125",k="#cd0a0a";g=a(g),g.appendTo("body"),i=JSON.parse(i);var l=i.ao;g.attr("title",l.long_display_name),g.find(".ao-description").html(l.description),g.find("input[type='button']").button(),g.find("#ao_high_hstgrm_color").colorpicker({showOn:"click",position:{at:"right+100 bottom",of:"element",collision:"fit"},part:{map:{size:128},bar:{size:128}},select:function(b,c){a("#ao_high_hstgrm_color").css({background:"#"+c.formatted}).val(""),j="#"+c.formatted},ok:function(b,c){a("#ao_high_hstgrm_color").css({background:"#"+c.formatted}).val(""),j="#"+c.formatted}}),g.find("#ao_low_hstgrm_color").colorpicker({showOn:"click",position:{at:"right+100 bottom",of:"element",collision:"fit"},part:{map:{size:128},bar:{size:128}},select:function(b,c){a("#ao_low_hstgrm_color").css({background:"#"+c.formatted}).val(""),k="#"+c.formatted},ok:function(b,c){a("#ao_low_hstgrm_color").css({background:"#"+c.formatted}).val(""),k="#"+c.formatted}});var m="Solid";a("#ao_dashStyle").ddslick({imagePosition:"left",width:148,background:"white",onSelected:function(b){a("#ao_dashStyle .dd-selected-image").css("max-height","5px").css("max-width","115px"),m=b.selectedData.value}}),a("#ao_dashStyle .dd-option-image").css("max-height","5px").css("max-width","115px");var n=g.find("#ao_levels").DataTable({paging:!1,scrollY:100,autoWidth:!0,searching:!1,info:!1,columnDefs:[{className:"dt-center",targets:[0,1,2,3]}],aoColumnDefs:[{bSortable:!1,aTargets:[1,3]}]});a.each(h,function(b,c){a(n.row.add([c.level,'<div style="background-color: '+c.stroke+';width:100%;height:20px;"></div>',c.strokeWidth,'<div style="width:50px;overflow:hidden;"><img src="images/dashstyle/'+c.dashStyle+'.svg" /></div>']).draw().node()).data("level",c).on("click",function(){a(this).toggleClass("selected")})}),g.find("#ao_level_delete").click(function(){n.rows(".selected").indexes().length<=0?require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Select level(s) to delete!"})}):n.rows(".selected").remove().draw()}),g.find("#ao_level_add").click(function(){require(["indicator_levels"],function(b){b.open(d,function(b){a.each(b,function(b,c){a(n.row.add([c.level,'<div style="background-color: '+c.stroke+';width:100%;height:20px;"></div>',c.strokeWidth,'<div style="width:50px;overflow:hidden;"><img src="images/dashstyle/'+c.dashStyle+'.svg" /></div>']).draw().node()).data("level",c).on("click",function(){a(this).toggleClass("selected")})})})})});var o={autoOpen:!1,resizable:!1,width:350,height:400,modal:!0,my:"center",at:"center",of:window,dialogClass:"ao-ui-dialog",buttons:[{text:"OK",click:function(){var d=!0;if(a(".ao_input_width_for_period").each(function(){var c=a(this);return b.isInteger(b.toNumber(c.val()))&&b.inRange(c.val(),parseInt(c.attr("min")),parseInt(c.attr("max"))+1)?void 0:(require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+c.attr("min")+" to "+c.attr("max")+" is allowed for "+c.closest("tr").find("td:first").text()+"!"})}),c.val(c.prop("defaultValue")),void(d=!1))}),d){var f=[];a.each(n.rows().nodes(),function(){var b=a(this).data("level");b&&f.push({color:b.stroke,dashStyle:b.dashStyle,width:b.strokeWidth,value:b.level,label:{text:b.level}})});var h={shortPeriod:parseInt(g.find("#ao_short_term_period").val()),longPeriod:parseInt(g.find("#ao_long_term_period").val()),shortMaType:a("#ao_short_ma_type").val(),longMaType:a("#ao_long_ma_type").val(),aoHighStroke:j,aoLowStroke:k,levels:f};e&&e(),a(a(".ao").data("refererChartID")).highcharts().series[0].addIndicator("ao",h),c.call(g)}}},{text:"Cancel",click:function(){c.call(this)}}],icons:{close:"custom-icon-close",minimize:"custom-icon-minimize",maximize:"custom-icon-maximize"}};g.dialog(o).dialogExtend(b.extend(o,{maximizable:!1,minimizable:!1,collapsable:!1})),g.find("select").each(function(b,c){a(c).selectmenu({width:150}).selectmenu("menuWidget").css("max-height","85px")}),"function"==typeof f&&f(d)})}var e=null;return{open:function(b,c){e=c||e;var f=function(){a(".ao").data("refererChartID",b).dialog("open")};0==a(".ao").length?d(b,this.open):f()}}});