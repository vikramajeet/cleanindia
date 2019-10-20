$(document).ready(function(){
    $("#sb_ewastage").click(function(){
        $("#popup1").show();
        return false;
    });
    $("#clsForm1").click(function(){
        $("#popup1").hide();
            return false;
});
 $("#sb_patient").click(function(){
        $("#popup2").show();
        return false;
    });
    $("#clsForm2").click(function(){
        $("#popup2").hide();
            return false;
});
 $("#sb_location").click(function(){
        $("#popup3").show();
        return false;
    });
    $("#clsForm3").click(function(){
        $("#popup3").hide();
            return false;
});

$("#m_nav").click(function(){
    $(".nav").slideToggle(200);
    return false;
});
});


(function($) {
        $.fn.textWidth = function(){
             var calc = '<span style="display:none">' + $(this).text() + '</span>';
             $('body').append(calc);
             var width = $('body').find('span:last').width();
             $('body').find('span:last').remove();
            return width;
        };

        $.fn.marquee = function(args) {
            var that = $(this);
            var textWidth = that.textWidth(),
                offset = that.width(),
                width = offset,
                css = {
                    'text-indent' : that.css('text-indent'),
                    'overflow' : that.css('overflow'),
                    'white-space' : that.css('white-space')
                },
                marqueeCss = {
                    'text-indent' : width,
                    'overflow' : 'hidden',
                    'white-space' : 'nowrap'
                },
                args = $.extend(true, { count: -1, speed: 1e1, leftToRight: false }, args),
                i = 0,
                stop = textWidth*-1,
                dfd = $.Deferred();

            function go() {
                if(!that.length) return dfd.reject();
                if(width == stop) {
                    i++;
                    if(i == args.count) {
                        that.css(css);
                        return dfd.resolve();
                    }
                    if(args.leftToRight) {
                        width = textWidth*-1;
                    } else {
                        width = offset;
                    }
                }
                that.css('text-indent', width + 'px');
                if(args.leftToRight) {
                    width++;
                } else {
                    width--;
                }
                setTimeout(go, args.speed);
            };
            if(args.leftToRight) {
                width = textWidth*-1;
                width++;
                stop = offset;
            } else {
                width--;            
            }
            that.css(marqueeCss);
            go();
            return dfd.promise();
        };
    })(jQuery);

$('h1').marquee();
$('h2').marquee({ count: 2 });
$('h3').marquee({ speed: 5 });
$('h4').marquee({ leftToRight: true });
$('h5').marquee({ count: 1, speed: 2 }).done(function() { $('h5').css('color', '#f00')});