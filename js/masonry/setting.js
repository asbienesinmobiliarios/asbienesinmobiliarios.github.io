$(window).on("load", function(){
	/*
	Gallery Masonry
	=========================== */
    var self = $("#masonry-gallery");
    self.masonry({
        isAnimated: true,
        columnWidth:".grid-sizer",
        itemSelector: ".grid-item"
    });

    $(".filter-items li").click(function(e) {
        e.preventDefault();

        var filter = $(this).attr("data-filter");
        
        $(".filter-items  li").removeClass('active');
        $(this).addClass('active');
        
        self.masonryFilter({
            filter: function () {
                if (!filter) return true;
                return $(this).attr("data-filter") == filter;
            }
        });
    });
});