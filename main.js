
var eyeColorSelected = ""
var hairColorSelected = ""

$("#eyeColor").change(
    function() 
    {
        eyeColorSelected = $("#eyeColor :selected").text();
        $.getJSON("https://ghibliapi.herokuapp.com/people", function(data)
        {
            $("#results").html("")
            for (var i = 0; i < data.length; i++)
            {
                if (eyeColorSelected === data[i].eye_color)
                {
                    var $cellInformation = $("<p>name: " + data[i].name + "<br>age: " + data[i].age + "</p>")
                    $("#results").append($cellInformation)
                    $cellInformation.wrap("<td>")
                    
                }
            }
        })
    }
);

$("#hairColor").change(
    function() 
    {
        hairColorSelected = $("#hairColor :selected").text();
        $.getJSON("https://ghibliapi.herokuapp.com/people", function(data)
        {
            $("#results").html("")
            for (var i = 0; i < data.length; i++)
            {
                if (hairColorSelected === data[i].hair_color)
                {
                    var $cellInformation = $("<p>name: " + data[i].name + "<br>age: " + data[i].age + "</p>")
                    $("#results").append($cellInformation)
                    $cellInformation.wrap("<td>")
                    
                }
            }
        })
    }
);