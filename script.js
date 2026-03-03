const positions = ["GK","RB","CB","LB","CDM","CM","CAM","RW","LW","ST"];

const selects = document.querySelectorAll(".player");

selects.forEach(select => {
    positions.forEach(pos => {
        let option = document.createElement("option");
        option.value = pos;
        option.textContent = pos;
        select.appendChild(option);
    });
});

function showTeam() {
    let result = "<h2>تشكيلة OMAR Eto 🔥</h2>";
    selects.forEach((select, index) => {
        result += "لاعب " + (index + 1) + " : " + select.value + "<br>";
    });
    document.getElementById("result").innerHTML = result;
}
