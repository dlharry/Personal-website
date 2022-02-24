$.post("ajax/test.html", function (data) {
    $(".result").html(data);
});
function sendrequest() {
    res = document.getElementById('output_result');
    var url = '../php/testajax.php';
    jQuery.post(url, data, success(data, textStatus, jqXHR), dataType);
}
