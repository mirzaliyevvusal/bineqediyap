(function ($) {
    $(function () {
      $(document).off('click.bs.tab.data-api', '[data-hover="tab"]');
      $(document).on('mouseenter.bs.tab.data-api', '[data-toggle="tab"], [data-hover="tab"]', function () {
        $(this).tab('show');
      });
    });
  })(jQuery);

  $(document).ready(function() {
    $("#content-slider").lightSlider({
        loop:true,
        keyPress:true
    });
    $('#image-gallery').lightSlider({
        gallery:true,
        item:1,
        thumbItem:9,
        slideMargin: 0,
        speed:500,
        auto:true,
        height:600,
        loop:true,
        onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
        }  
    });
});