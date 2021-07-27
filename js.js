
var res;
let convert = () => {
    // var results = 
    let inp_val = document.getElementById('inp_val');
    let celofeh = document.getElementById('celofeh');
    let results=document.getElementById('results');
    var value = celofeh.options[celofeh.selectedIndex].value;
    if (value == "celcius") {
        // alert(inp_val.value + value);
        res = cel_to_fah(inp_val.value);
        
        results.textContent=  `= ${res}ºF`;

    } else {
        results.innerHTML = ` = ${fah_to_cel(inp_val.value)}ºC`;
     }
 }
const cel_to_fah = (r) => {
    return Math.round((r * 9 / 5) + 32);
}

const fah_to_cel = (r) => {
    return Math.round((r - 32) * (5 / 9));
}
