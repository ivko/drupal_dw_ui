(function ($) {
    if (typeof DW == 'undefined') {
        DW = {};
    }
    DW.ComponentsHost = new Class({
        Implements: [Options],
        options: {
            iframe: '',
        },
        items:[
            {"id": "accordion", "name": "Accordion"},
            {"id": "baseMenu", "name": "Base Menu"},
            {"id": "button", "name": "Buttons"},
            {"id": "checkbox", "name": "Checkbox"},
            {"id": "combobox", "name": "Combobox"},
            {"id": "contextMenu", "name": "Context Menu"},
            {"id": "dialog", "name": "Dialog"},
            {"id": "datetime", "name": "Date Time"},
            {"id": "horizontalMenu", "name": "Horizontal Menu"},
            {"id": "infobox", "name": "Info Popover"},
            {"id": "name-description", "name": "Name Description"},
            {"id": "popover", "name": "Popover"},
            {"id": "radio", "name": "Radio Buttons"},
            {"id": "select2", "name": "Select2"},
            {"id": "switch", "name": "Switch"},
            {"id": "table", "name": "Table"},
            {"id": "tabs", "name": "Tabs"},
            {"id": "toast", "name": "Toast"},
            {"id": "tooltip", "name": "Tooltip"},
            {"id": "assignement", "name": "User Assignment"}
        ],
        initialize: function(options) {
            this.setOptions(options);
            this.initElements();
            this.initEvents();
        },
        initElements: function() {
            // create navigation
            var menu = $(this.options.menu);
            var target = $(this.options.iframe).attr('name');
            var url = $(this.options.iframe).attr('src');
            Array.forEach(this.items, function(item) {
                menu.append($('<li><a href="' + url + '#' + item.id + '" target="' + target + '">' + item.name + '</a></li>'));
            }, this);
        },
        initEvents: function() {
            $(window).on({
                "load resize": this.setIframeHeight.bind(this)
            });
        },
        setIframeHeight: function() {
            var iframe = $( this.options.iframe);
            iframe.height('auto');
            var wrapper =  iframe.parent();
            var innerHeight = wrapper.outerHeight();
            innerHeight -= parseFloat(wrapper.css("padding-top"));
            innerHeight -= parseFloat(wrapper.css("padding-bottom"));
            iframe.height(innerHeight);
        }
    });
    
    $(document).ready(function() {
        var placeholder = $('a[href$=dw_ui_menu_placeholder]').parent();
        var menu = placeholder.parent('.menu').addClass('dw-ui-menu');
        placeholder.remove();
        new DW.ComponentsHost({
            iframe: '#drupal_dw_ui_frame',
            menu: menu
        });
    });
    
})(jQuery);