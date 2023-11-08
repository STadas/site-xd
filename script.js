const date = new Date()
const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0)
const isLast = date.getDate() == lastDate.getDate()
const xd = "x" + "d".repeat(date.getDate())

document.getElementById("xd").innerHTML = xd;
document.getElementById("dankGif").src = isLast ? "WAYTOODANK.gif"
                                                : "DankingAround.gif"
