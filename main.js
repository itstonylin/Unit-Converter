// units of measurement and their values
// =================================================================================
// time conversion in seconds
let time = [
    ["Millisecond", 1 / 1000],
    ["Second", 1],
    ["Minute", 60],
    ["Hour", 3600],
    ["Day", 86400],
    ["Week", 604800],
    ["Month", 2592000],
    ["Year", 31536000],
    ["Decade", 315360000],
    ["Century", 3153600000],
    ["Millennium", 31536000000],
];
// length conversion in metres
let length = [
    ["Millimetre", 1 / 1000],
    ["Centimetre", 1 / 100],
    ["Inch", 1 / 39.37],
    ["Foot", 0.3048],
    ["Yard", 0.9144],
    ["Metre", 1],
    ["Kilometre", 1000],
    ["Mile", 1609.34],
    ["Nautical mile", 1852],
];
// speed conversion in metre per second
let speed = [
    ["Kilometre per hour", 1 / 3.6],
    ["Foot per second", 0.3048],
    ["Miles per hour", 1 / 2.237],
    ["Knot", 0.514444],
    ["Metre per second", 1],
];
// mass conversion in kilograms
let mass = [
    ["Milligram", 0.000001],
    ["Gram", 1 / 1000],
    ["Ounce", 1 / 35.274],
    ["Pound", 0.453592],
    ["Kilogram", 1],
    ["Us ton", 907.185],
    ["Tonne", 1000],
    ["Imperial ton", 1016.05],
];

// =================================================================================

// function to calculate the conversions
// =================================================================================
let conversion = (input, unit1, unit2, inputNum, unitArr) => {
    if (unitArr === "time") {
        unitArr = time;
    } else if (unitArr === "length") {
        unitArr = length;
    } else if (unitArr === "speed") {
        unitArr = speed;
    } else if (unitArr === "mass") {
        unitArr = mass;
    }
    let result, position1, position2;
    for (let i = 0; i < unitArr.length; i++) {
        if (unit1 === unitArr[i][0]) {
            position1 = i;
        }
        if (unit2 === unitArr[i][0]) {
            position2 = i;
        }
    }
    if (inputNum === "1") {
        result = input * (unitArr[position1][1] / unitArr[position2][1]);
    } else {
        result = input * (unitArr[position2][1] / unitArr[position1][1]);
    }
    return result;
};
// =================================================================================

// event listeners to wait for change in input field and update both fields
// =================================================================================
let output;
let input1 = document.getElementById("input1");
input1.addEventListener("input", function (event) {
    let options1 = document.getElementById("options1").value;
    let options2 = document.getElementById("options2").value;
    let unit = document.getElementById("units").value;
    output = conversion(input1.value, options1, options2, "1", unit);
    input2.value = output;
});

let input2 = document.getElementById("input2");
input2.addEventListener("input", function (event) {
    let options1 = document.getElementById("options1").value;
    let options2 = document.getElementById("options2").value;
    let unit = document.getElementById("units").value;
    output = conversion(input2.value, options1, options2, "2", unit);
    input1.value = output;
});
// =================================================================================

// updates the values when the units change
// =================================================================================
let options1 = document.getElementById("options1");
options1.addEventListener("change", function (event) {
    let options2 = document.getElementById("options2");
    let unit = document.getElementById("units").value;
    output = conversion(input1.value, options1.value, options2.value, "1", unit);
    input2.value = output;
});
let options2 = document.getElementById("options2");
options2.addEventListener("change", function (event) {
    let options1 = document.getElementById("options1");
    let unit = document.getElementById("units").value;
    output = conversion(input2.value, options1.value, options2.value, "2", unit);
    input1.value = output;
});
// =================================================================================

// listens to the change in units
// =================================================================================
$(document).ready(function () {
    $("#units").change(function () {
        let val = $(this).val();
        if (val === "length") {
            $("#options1").html(
                "<option value='Millimetre'>Millimetre</option><option value='Centimetre'>Centimetre</option> <option value='Inch'>Inch</option> <option value='Foot' >Foot</option> <option value='Yard' >Yard</option> <option value='Metre' selected>Metre</option> <option value='Kilometre' >Kilometre</option> <option value='Mile' >Mile</option> <option value='Nautical mile' >Nautical mile</option>"
            );
            $("#options2").html(
                "<option value='Millimetre'>Millimetre</option><option value='Centimetre' selected>Centimetre</option> <option value='Inch'>Inch</option> <option value='Foot' >Foot</option> <option value='Yard' >Yard</option> <option value='Metre' >Metre</option> <option value='Kilometre' >Kilometre</option> <option value='Mile' >Mile</option> <option value='Nautical mile' >Nautical mile</option>"
            );
        } else if (val === "time") {
            $("#options1").html(
                "<option value='Millisecond'>Millisecond </option><option value='Second'>Second</option> <option value='Minute'>Minute </option><option value='Hour' selected>Hour</option> <option value='Day'>Day </option><option value='Week'>Week</option><option value='Month'>Month </option><option value='Year'>Year</option><option value='Decade'>Decade </option><option value='Century'>Century</option> <option value='Millennium'>Millennium </option>"
            );
            $("#options2").html(
                "<option value='Millisecond'>Millisecond </option><option value='Second'>Second</option> <option value='Minute' selected>Minute </option><option value='Hour'>Hour</option> <option value='Day'>Day </option><option value='Week'>Week</option><option value='Month'>Month </option><option value='Year'>Year</option><option value='Decade'>Decade </option><option value='Century'>Century</option> <option value='Millennium'>Millennium </option>"
            );
        } else if (val === "mass") {
            $("#options1").html(
                "<option value='Milligram'>Milligram</option><option value='Gram'>Gram</option> <option value='Ounce'>Ounce</option> <option value='Pound' >Pound</option> <option value='Kilogram' selected>Kilogram</option> <option value='Us ton' >Us ton</option> <option value='Tonne' >Tonne</option> <option value='Imperial ton' >Imperial ton</option> "
            );
            $("#options2").html(
                "<option value='Milligram'>Milligram</option><option value='Gram'>Gram</option> <option value='Ounce'>Ounce</option> <option value='Pound' selected>Pound</option> <option value='Kilogram' >Kilogram</option> <option value='Us ton' >Us ton</option> <option value='Tonne' >Tonne</option> <option value='Imperial ton' >Imperial ton</option> "
            );
        } else if (val === "speed") {
            $("#options1").html(
                "<option value='Kilometre per hour' >Kilometre per hour</option><option value='Foot per second'>Foot per second</option>  <option value='Miles per hour' selected>Miles per hour</option><option value='Knot' >Knot</option> <option value='Metre per second' >Metre per second</option>"
            );
            $("#options2").html(
                "<option value='Kilometre per hour' selected>Kilometre per hour</option><option value='Foot per second'>Foot per second</option>  <option value='Miles per hour'>Miles per hour</option><option value='Knot' >Knot</option> <option value='Metre per second' >Metre per second</option>"
            );
        }
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
    });
});

// =================================================================================
