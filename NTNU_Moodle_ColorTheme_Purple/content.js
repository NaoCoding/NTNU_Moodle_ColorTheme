window.onload=function(){
    (function() {
        try{document.querySelector("#page-my-index > nav > div").setAttribute("style","background-color:#3a3c6b;") }
        catch{}
        try{document.querySelector("#nav-drawer").setAttribute("style","background-color:#3a3c6b;")  }
        catch{}
        try{document.querySelector("#nav-drawer > ul > li:nth-child(5) > ul").setAttribute("style","background-color:#3a3c6b;")  }
        catch{}
        try{document.querySelector("#nav-drawer > ul:nth-child(2) > li:nth-child(4) > ul").setAttribute("style","background-color:#3a3c6b;")}
        catch{}
        try{document.querySelector("#page-wrapper").setAttribute("style","color:rgb(105 110 235);") }
        catch{}
        try{document.querySelector("#yui_3_17_2_1_1712420561022_28").setAttribute("style","background-color:#3a3c6b;") }
        catch{}
        try{document.querySelector("#page-course-view-topics > nav > div").setAttribute("style","background-color:#3a3c6b;")}
        catch{}
        try{document.querySelector("#nav-drawer > ul:nth-child(1) > li:nth-child(1) > ul").setAttribute("style","background-color:#3a3c6b;")}
        catch{}
        try{document.querySelector("#page-site-index > nav > div").setAttribute("style","background-color:#3a3c6b;")}
        catch{}
        try{
            for (let index = 0; index < 25; index++) {
                document.querySelector("#section-"+index+" > div.content > h3 > span > a").style.color = "rgb(105 110 235)"
                
            }
        }
        catch{}
        try{document.querySelector("#page-header > div > div > div > div:nth-child(1) > div > div > div > h1").style.color = "rgb(105 110 235)"}
        catch{}
        
        

        
        
    })();
}