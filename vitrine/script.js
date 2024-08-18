$(document).ready(function() {

    $(".gallery-item").click(function() {
        var src = $(this).attr("src");
        $(".lightbox-content").attr("src", src);
        $(".lightbox").fadeIn();
    });

    $(".close").click(function() {
        $(".lightbox").fadeOut();
    });

    $("#add-product-form").submit(function(event) {
        event.preventDefault();
        var productName = $("#product-name").val();
        var productImage = $("#product-image").val();
        var productItem = `
            <div class="grid-item">
                <img src="${productImage}" alt="${productName}">
                <p>${productName}</p>
            </div>
        `;
        $(".product-list").append(productItem);
        $("#product-name").val("");
        $("#product-image").val("");
    });
});
