$(document).ready(function () {
    statistics();

});

function statistics() {
    $.when(
        $.getJSON("https://api.covid19api.com/summary")
    ).then(
        function (response) {
            var globalFig = `
                   <div class="col-4 text-center blue-color  pb-3">${response.Global.TotalConfirmed}</div>
                   <div class="col-4 text-center green-color  pb-3">${response.Global.TotalRecovered}</div>
                   <div class="col-4 text-center red-color pb-3">${response.Global.TotalDeaths}</div>
                    `;
            $("#data").html(globalFig);
        }, function (errorResponse) {
            console.log(errorResponse);
            if (errorResponse.status === 429) {
                var errorMsg = ` <div class="col-12 text-center error-color pt-2 pb-2">
            You have reached the limit. Please try after sometime</div>`;
                $("#data").html(errorMsg);
            } else {
                var errorMsg = ` <div class="col-12 text-center error-color pt-2 pb-2">
            ${errorResponse.responseText}</div>`;
                $("#data").html(errorMsg);
            }
        });
}