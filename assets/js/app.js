$(function () {
	"use strict";
	// search bar
	$(".search-btn-mobile").on("click", function () {
		$(".search-bar").addClass("full-search-bar");
	});
	$(".search-arrow-back").on("click", function () {
		$(".search-bar").removeClass("full-search-bar");
	});
	$(function () {
		$('.metismenu-card').metisMenu({
			toggle: false,
			triggerElement: '.card-header',
			parentTrigger: '.card',
			subMenu: '.card-body'
		});
	});
	// Tooltips 
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})
	// Metishmenu card collapse
	$(function () {
		$('.card-collapse').metisMenu({
			toggle: false,
			triggerElement: '.card-header',
			parentTrigger: '.card',
			subMenu: '.card-body'
		});
	});
	// toggle menu button
	$(".toggle-btn").click(function () {
		if ($(".wrapper").hasClass("toggled")) {
			// unpin sidebar when hovered
			$(".wrapper").removeClass("toggled");
			$(".sidebar-wrapper").unbind("hover");
		} else {
			$(".wrapper").addClass("toggled");
			$(".sidebar-wrapper").hover(function () {
				$(".wrapper").addClass("sidebar-hovered");
			}, function () {
				$(".wrapper").removeClass("sidebar-hovered");
			})
		}
	});
	$(".toggle-btn-mobile").on("click", function () {
		$(".wrapper").removeClass("toggled");
	});
	// chat toggle
	$(".chat-toggle-btn").on("click", function () {
		$(".chat-wrapper").toggleClass("chat-toggled");
	});
	$(".chat-toggle-btn-mobile").on("click", function () {
		$(".chat-wrapper").removeClass("chat-toggled");
	});
	// email toggle
	$(".email-toggle-btn").on("click", function () {
		$(".email-wrapper").toggleClass("email-toggled");
	});
	$(".email-toggle-btn-mobile").on("click", function () {
		$(".email-wrapper").removeClass("email-toggled");
	});
	// compose mail
	$(".compose-mail-btn").on("click", function () {
		$(".compose-mail-popup").show();
	});
	$(".compose-mail-close").on("click", function () {
		$(".compose-mail-popup").hide();
	});
	// === sidebar menu activation js
	$(function () {
		for (var i = window.location, o = $(".metismenu li a").filter(function () {
			return this.href == i;
		}).addClass("").parent().addClass("mm-active");;) {
			if (!o.is("li")) break;
			o = o.parent("").addClass("mm-show").parent("").addClass("mm-active");
		}
	}),
	// metismenu
	$(function () {
		$('#menu').metisMenu();
	});
	/* Back To Top */
	$(document).ready(function () {
		$(window).on("scroll", function () {
			if ($(this).scrollTop() > 300) {
				$('.back-to-top').fadeIn();
			} else {
				$('.back-to-top').fadeOut();
			}
		});
		$('.back-to-top').on("click", function () {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
		});
	});
	/* perfect scrol bar */
	new PerfectScrollbar('.header-message-list');
	new PerfectScrollbar('.header-notifications-list');
	
	
	/*switcher*/
	
	$(".switcher-btn").on("click", function () {
		$(".switcher-wrapper").toggleClass("switcher-toggled");
	});
	
	$("#darkmode").on("click", function () {
		$("html").addClass("dark-theme");
	});
	
	$("#lightmode").on("click", function () {
		$("html").removeClass("dark-theme");
	});
});






	function edit_row(no)
	{
	 document.getElementById("edit_button"+no).style.display="none";
	 document.getElementById("save_button"+no).style.display="block";
		
	 var name=document.getElementById("name_row"+no);
	 var country=document.getElementById("country_row"+no);
	 var age=document.getElementById("age_row"+no);
		
	 var name_data=name.innerHTML;
	 var country_data=country.innerHTML;
	 var age_data=age.innerHTML;
		
	 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
	 country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
	 age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
	}
	
	function save_row(no)
	{
	 var name_val=document.getElementById("name_text"+no).value;
	 var country_val=document.getElementById("country_text"+no).value;
	 var age_val=document.getElementById("age_text"+no).value;
	
	 document.getElementById("name_row"+no).innerHTML=name_val;
	 document.getElementById("country_row"+no).innerHTML=country_val;
	 document.getElementById("age_row"+no).innerHTML=age_val;
	
	 document.getElementById("edit_button"+no).style.display="block";
	 document.getElementById("save_button"+no).style.display="none";
	}
	
	function delete_row(no)
	{
	 document.getElementById("row"+no+"").outerHTML="";
	}
	
	function add_row()
	{
	 var new_name=document.getElementById("new_name").value;
	 var new_country=document.getElementById("new_country").value;
	 var new_age=document.getElementById("new_age").value;
		
	 var table=document.getElementById("data_table");
	 var table_len=(table.rows.length)-1;
	 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
	
	 document.getElementById("new_name").value="";
	 document.getElementById("new_country").value="";
	 document.getElementById("new_age").value="";
	}
	
	
	
	
	
		// page link 
		function openCity(evt, cityName) {
			var i, x, tablinks;
			x = document.getElementsByClassName("city");
			for (i = 0; i < x.length; i++) {
			  x[i].style.display = "none";
			}
			tablinks = document.getElementsByClassName("tablink");
			for (i = 0; i < x.length; i++) {
			  tablinks[i].className = tablinks[i].className.replace(" w3-red", ""); 
			}
			document.getElementById(cityName).style.display = "block";
			evt.currentTarget.className += " w3-red";
		  }
		// page link
	

		// editable form 
		(function($, window, document, undefined) {
			var pluginName = "editable",
			  defaults = {
				keyboard: true,
				dblclick: true,
				button: true,
				buttonSelector: ".edit",
				maintainWidth: true,
				dropdowns: {},
				edit: function() {},
				save: function() {},
				cancel: function() {}
			  };
		  
			function editable(element, options) {
			  this.element = element;
			  this.options = $.extend({}, defaults, options);
		  
			  this._defaults = defaults;
			  this._name = pluginName;
		  
			  this.init();
			}
		  
			editable.prototype = {
			  init: function() {
				this.editing = false;
		  
				if (this.options.dblclick) {
				  $(this.element)
					.css('cursor', 'pointer')
					.bind('dblclick', this.toggle.bind(this));
				}
		  
				if (this.options.button) {
				  $(this.options.buttonSelector, this.element)
					.bind('click', this.toggle.bind(this));
				}
			  },
		  
			  toggle: function(e) {
				e.preventDefault();
		  
				this.editing = !this.editing;
		  
				if (this.editing) {
				  this.edit();
				} else {
				  this.save();
				}
			  },
		  
			  edit: function() {
				var instance = this,
				  values = {};
		  
				$('td[data-field]', this.element).each(function() {
				  var input,
					field = $(this).data('field'),
					value = $(this).text(),
					width = $(this).width();
		  
				  values[field] = value;
		  
				  $(this).empty();
		  
				  if (instance.options.maintainWidth) {
					$(this).width(width);
				  }
		  
				  if (field in instance.options.dropdowns) {
					input = $('<select></select>');
		  
					for (var i = 0; i < instance.options.dropdowns[field].length; i++) {
					  $('<option></option>')
						.text(instance.options.dropdowns[field][i])
						.appendTo(input);
					};
		  
					input.val(value)
					  .data('old-value', value)
					  .dblclick(instance._captureEvent);
				  } else {
					input = $('<input type="text" />')
					  .val(value)
					  .data('old-value', value)
					  .dblclick(instance._captureEvent);
				  }
		  
				  input.appendTo(this);
		  
				  if (instance.options.keyboard) {
					input.keydown(instance._captureKey.bind(instance));
				  }
				});
		  
				this.options.edit.bind(this.element)(values);
			  },
		  
			  save: function() {
				var instance = this,
				  values = {};
		  
				$('td[data-field]', this.element).each(function() {
				  var value = $(':input', this).val();
		  
				  values[$(this).data('field')] = value;
		  
				  $(this).empty()
					.text(value);
				});
		  
				this.options.save.bind(this.element)(values);
			  },
		  
			  cancel: function() {
				var instance = this,
				  values = {};
		  
				$('td[data-field]', this.element).each(function() {
				  var value = $(':input', this).data('old-value');
		  
				  values[$(this).data('field')] = value;
		  
				  $(this).empty()
					.text(value);
				});
		  
				this.options.cancel.bind(this.element)(values);
			  },
		  
			  _captureEvent: function(e) {
				e.stopPropagation();
			  },
		  
			  _captureKey: function(e) {
				if (e.which === 13) {
				  this.editing = false;
				  this.save();
				} else if (e.which === 27) {
				  this.editing = false;
				  this.cancel();
				}
			  }
			};
		  
			$.fn[pluginName] = function(options) {
			  return this.each(function() {
				if (!$.data(this, "plugin_" + pluginName)) {
				  $.data(this, "plugin_" + pluginName,
					new editable(this, options));
				}
			  });
			};
		  
		  })(jQuery, window, document);
		  
		  editTable();
		  
		  //custome editable starts
		  function editTable(){
			
			$(function() {
			var pickers = {};
		  
			$('table tr').editable({
			  dropdowns: {
				sex: ['নাগরিক সনদ', 'চারিত্রিক সনদ', 'অবিবাহিত সনদ ' ,'ওয়ারিশ সনদ']
			  },
			  
			 
			
			});
		  });
			
		  }
		  
		 
		  
		  
		  
		  
		// editable form 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
