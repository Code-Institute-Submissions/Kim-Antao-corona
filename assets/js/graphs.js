//to populate the drop down list with country names
$(document).ready(function () {
    $.when(

        $.getJSON(`https://api.covid19api.com/countries`)
    ).then(function (response) {
        var obj = response;
        $.each(obj, function (key, entry) {
            $("#covid-country").append("<option value=\"" + entry.Country + "\">" + entry.Country + "</option>");
        });
    },
        function (errorResponse) {
            if (errorResponse.status === 404) {
                $("#canvas_container").html(`<h1>No values found for the given country</h1>`);
            } else if (errorResponse.status === 429) {
                    $("#canvas_container").html(`<h1>You have reached maximum time limit. Try again in 120 secons</h1>`);

                } else {
                    $("#canvas_container").html(`<h1> Error: ${errorResponse.responseText}</h1>`);

                }
            
        }
    );
  
});

//function is to collect data to be displayed on the page from the API
function countrydataHTML(cnt) {
    console.log(cnt.length);
    if (cnt.length === 0) {
        $("#canvas_container").html(`<h1>No values found for the given country</h1>`);
    }
    else {


        var lastItem = cnt[cnt.length - 1];
        $("#conf").html(lastItem.Confirmed);
        $("#reco").html(lastItem.Recovered);
        $("#deat").html(lastItem.Deaths);
        $("#act").html(lastItem.Active);

        var date = [];
        var confirmed_cases = [];
        var recovered_cases = [];
        var fatal_cases = [];
        var active_cases = [];
        console.log(confirmed_cases.length);
        $.each(cnt, function (id, obj) {
            date.push(obj.Date);
            confirmed_cases.push(obj.Confirmed);
            recovered_cases.push(obj.Recovered);
            fatal_cases.push(obj.Deaths);
            active_cases.push(obj.Active);

        });

        var myChart = document.getElementById("linearChart").getContext("2d");

        var chart = new Chart(myChart, {
            type: "line",
            data: {
                labels: date,
                datasets: [
                    {
                        label: "Confirmed Cases",
                        data: confirmed_cases,
                        backgroundColor: "#ff4500",
                        borderColor: "#ff4500",
                        fill: false,
                        lineTension: 0.1,
                        minBarLength: 100
                    },
                    {
                        label: "Recovered Cases",
                        data: recovered_cases,
                        backgroundColor: "#008f00",
                        borderColor: "#008f00",
                        fill: false,
                        lineTension: 0.1,
                        minBarLength: 100
                    },
                    {
                        label: "Active Cases",
                        data: active_cases,
                        backgroundColor: "#0000ad",
                        borderColor: "#0000ad",
                        fill: false,
                        lineTension: 0.1,
                        minBarLength: 100
                    },
                    {
                        label: "Fatal Cases",
                        data: fatal_cases,
                        backgroundColor: "#d40000",
                        borderColor: "#d40000",
                        fill: false,
                        lineTension: 0.1,
                        minBarLength: 100
                    }

                ]


            },
            options: {}
        });
    }
}
//invoked after the submit button is clicked
function fetchApiInformation(event) {
    //empty the existing values
    var country = $("#covid-country").val();
    if (!country) {
        $("#country-figures").html(`<h2> Please enter a country</h2>`);
        return;
    }
    $.when(
        $.getJSON(`https://api.covid19api.com/dayone/country/${country}`)
    ).then(
        function (response) {
            var countrydata = response;
            countrydataHTML(countrydata);
        },
        function (errorResponse) {
            if (errorResponse.status === 404) {
                $("#canvas_container").html(`<h1>No values found for the given country</h1>`);
            } else {
                if (errorResponse.status === 429) {
                    $("#canvas_container").html(`<h1>You have reached maximum time limit. Try again in 120 secons</h1>`);

                } else {
                    $("#canvas_container").html(`<h1> Error: ${errorResponse.responseText}</h1>`);

                }
            }
        }
    );

}