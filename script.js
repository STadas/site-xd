const date = new Date()
const isLast = date.getDate() == new Date(date.getFullYear(),
                                          date.getMonth() + 1, 0)
const xd = "x" + "d".repeat(date.getDate())

document.getElementById("xd").innerHTML = xd;
document.getElementById("dankGif").src = isLast ? "WAYTOODANK.gif"
                                                : "DankingAround.gif"
