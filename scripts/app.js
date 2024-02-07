"use strict";

// IIFE - Immediate invoked functional expression
(function(){

    function DisplayHomePage(){
        console.log("Called DisplayHomePage...")

        // Images for the banner
        let images = ["./images/stock1.jpg", "./images/stock2.jpg", "./images/stock3.jpg"];
        let index = 0;
        
        function changeBanner() {
            let banner = document.getElementById("dynamic-banner");
            let img = new Image();
            img.src = images[index];

            img.onload = function () {
                banner.innerHTML = "";
                banner.appendChild(img);
                index = (index + 1) % images.length;
            };
        }

        // Change banner every 5 seconds
        setInterval(changeBanner, 5000);

        // Initial Banner
        changeBanner();

        // only one page can render at a time
        let MainContent = document.getElementsByTagName("main")[0];

        let MainParagraph = document.createElement("p");
        let MainParagraph2 = document.createElement("p");
        MainParagraph.setAttribute("id", "MainParagraph");
        MainParagraph.setAttribute("class", "mt-3");
        MainParagraph.textContent = "Nullam viverra tincidunt libero, in lobortis ligula vulputate at. Aenean et libero mattis, venenatis nisl eu, laoreet magna. Morbi nec erat vitae augue rhoncus finibus. Praesent quis felis sit amet dolor volutpat vestibulum. Etiam vel facilisis massa. Duis varius, tellus sed accumsan blandit, nunc risus gravida mi, nec finibus purus ligula a velit. Fusce elementum tempor erat, non dignissim est ultrices id. Aliquam in nisi eget odio aliquam volutpat. Curabitur dictum iaculis est eget pellentesque."

        MainContent.appendChild(MainParagraph);

        let FirstString = "This is";
        let SecondString = `${FirstString} the main paragraph`;
        MainParagraph2.textContent = SecondString;

        MainContent.appendChild(MainParagraph).appendChild(MainParagraph2);

        let DocumentBody = document.body;

        let Article = document.createElement("article");
        let ArticleParagraph = `<p id="ArticleParagraph" class="mt-3">This is my article paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at fringilla ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis diam quam, nec rhoncus ipsum hendrerit ac. Sed ultrices dictum metus at condimentum. Nullam viverra tincidunt libero, in lobortis ligula vulputate at. Aenean et libero mattis, venenatis nisl eu, laoreet magna. Morbi nec erat vitae augue rhoncus finibus. Praesent quis felis sit amet dolor volutpat vestibulum. Etiam vel facilisis massa. Duis varius, tellus sed accumsan blandit, nunc risus gravida mi, nec finibus purus ligula a velit. Fusce elementum tempor erat, non dignissim est ultrices id. Aliquam in nisi eget odio aliquam volutpat. Curabitur dictum iaculis est eget pellentesque.</p>`;
        Article.setAttribute("class", "container");
        Article.innerHTML = ArticleParagraph;

        DocumentBody.appendChild(Article);


    }
    function DisplayAboutPage(){
        console.log("Called DisplayAboutPage...")
    }
    function DisplayContactPage(){
        console.log("Called DisplayContactPage...")
    }
    function DisplayProductPage(){
        console.log("Called DisplayProductPage...")
    }
    function DisplayServicePage(){
        console.log("Called DisplayServicePage...")
    }

    function Start(){
        console.log("App Started...");

        switch(document.title){
            case "Home":
                DisplayHomePage();
                break;
            case "Portfolio":
                DisplayAboutPage();
                break;
            case "Services":
                DisplayContactPage();
                break;
            case "Team":
                DisplayProductPage();
                break;
            case "Blog":
                DisplayServicePage();
                break;
        }
    }
    window.addEventListener("load", Start)
})()