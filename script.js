document.getElementById("click").addEventListener("click", function() {

    document.querySelector(".damn").style.display = "block"
    document.querySelector(".text").style.display = "block";
    document.querySelector(".container").style.display = "none"
    document.querySelector("footer").style.display = "none"

    var song = document.getElementById("song") 
    song.play() 
})

