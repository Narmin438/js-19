// Task-1

document.querySelectorAll(".img1, .img2, .img3, .img4").forEach(function(img) {
    function Changeheight(e) {
        document.querySelectorAll(".img1, .img2, .img3, .img4").forEach(function(img) {
            img.style.height = "150px";
            img.style.width = "200px";
        });
        e.target.style.height = "250px";
        e.target.style.width = "300px";
    }
    img.addEventListener("click", Changeheight);
});


// Task-2

document.querySelector(".span1").style.color = "red";

document.querySelectorAll(".span1, .span2, .span3, .span4").forEach(function(span) {
    function Changecolor(e) {
        document.querySelectorAll(".span1, .span2, .span3, .span4").forEach(function(span) {
            span.style.color = "black";
        });
        e.target.style.color = "red";
    }
    span.addEventListener("click", Changecolor);
})