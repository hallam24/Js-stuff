/* THIS IS THE JS FILE FOR THE CAR LUXURY PRACTICE */

var myManufacturer = document.getElementById("manufacturerD");
myManufacturer.addEventListener("change", loadMyData, false);

var mySurvey = document.getElementById("survey");
mySurvey.addEventListener("change", loadMyChart, false);

var elements = ["manufacturer", "model", "price", "description"];

function loadMyData(){
    
    var manufacturerStored = myManufacturer.options[myManufacturer.selectedIndex].value;
    console.log("Manufaturer stored is " + manufacturerStored);
    
    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", "https://raw.githubusercontent.com/hallam24/Js-stuff/master/expensiveLuxuryCars.json", true);
    
    myRequest.onload = function(){
        
        if(myRequest.readyState == 4 && myRequest.status == 200){
            
            var myData = JSON.parse(myRequest.responseText);
            
            /*for(var i = 0; i < elements.length; i++){
                var tName = elements[i];
               var temp =  document.getElementById(tName);
                console.log("Temp user element is " + temp);
                temp = myData.data[manufacturerStored].temp;
                var tNode = document.createTextNode("."+elements[i]);
                temp.appendChild(tNode);
            }*/
           /* 3458*/
            myData.data.forEach(function(element, index){
                console.log(element);
                Object.keys(element).forEach(function(key, index){
                    console.log(key);
                    var tKey = key;
                    var tMan = document.getElementById()
                    console.log("tKey is " + tKey);
                });
                
                console.log("bob is " + bob);
                console.log("element is " + element.bob[2]);
                var tMan = document.getElementById(element).childNodes[0];
                console.log("tMan is " + tMan);
                tMan.innerhtml = element.model;
            });
            
           /* var manufacturerCInfo = document.getElementById("manufacturer");
            manufacturerCInfo.innerHTML = myData.data[manufacturerStored].manufacturer*/
            
            var manufacturerCInfo = document.getElementById("manufacturer");
            manufacturerCInfo.innerHTML = myData.data[manufacturerStored].manufacturer;
            
            var modelCInfo = document.getElementById("model");
            modelCInfo.innerHTML = myData.data[manufacturerStored].model;
            
            var priceCInfo = document.getElementById("price");
            priceCInfo.innerHTML = myData.data[manufacturerStored].price;
            
            var descriptionCInfo = document.getElementById("description");
            descriptionCInfo.innerHTML = myData.data[manufacturerStored].description;
            
            /*var videoCInfo = document.getElementById("videoP");
            videoCInfo.setAttribute("src", myData.data[manufacturerStored].video);*/
            
            //console.log(videoCInfo);
            //console.log(videoCInfo.src);
            
            //videoCInfo.play();
            
            
            //MIDDLE COLUMN
            var overallCInfo = document.getElementById("overallC");
            overallCInfo.innerHTML = myData.data[manufacturerStored].quality["0"].rating;
            
            var mechanicalCInfo = document.getElementById("mechanicalC");
            mechanicalCInfo.innerHTML = myData.data[manufacturerStored].quality["1"].rating;
            
            var powertrainCInfo = document.getElementById("powertrainC");
            powertrainCInfo.innerHTML = myData.data[manufacturerStored].quality["2"].rating;
            
            var bodyCInfo = document.getElementById("bodyC");
            bodyCInfo.innerHTML = myData.data[manufacturerStored].quality["3"].rating;
            
            var interiorCInfo = document.getElementById("interiorC");
            interiorCInfo.innerHTML = myData.data[manufacturerStored].quality["4"].rating;
            
            var accessoriesCInfo = document.getElementById("accessoriesC");
            accessoriesCInfo.innerHTML = myData.data[manufacturerStored].quality["5"].rating;
            
            
            
            
            /*
            console.log("Overall rating is: " + myData.data["0"].quality["0"].rating);
        */
            console.log(myData);
        }
    }
    myRequest.onerror = function(){
        var messageAlert = document.getElementById("messageAlert");
        messageAlert.innerHTML = "Could not connect to JSON source";
    }
    myRequest.send();
    
    //console.log(myRequest);
}



function loadMyChart(){

    var surveyStored = mySurvey.options[mySurvey.selectedIndex].value;
    var manufacturerStored = myManufacturer.options[myManufacturer.selectedIndex].value;
    
    var myRequest2 = new XMLHttpRequest();
    
    myRequest2.open("GET", "https://raw.githubusercontent.com/hallam24/Js-stuff/master/expensiveLuxuryCars.json", true);
    
    myRequest2.onload = function(){
        
        if(myRequest2.readyState == 4 && myRequest2.status == 200){

            var mySurData = JSON.parse(myRequest2.responseText);
            console.log(mySurData);
            var chart = new CanvasJS.Chart("chartContainer", {
                theme: "theme2",//theme1
                title:{
                    text: "Basic Column Chart - CanvasJS"              
                },
                animationEnabled: false,   // change to true
                data: [              
                {
                    // Change type to "bar", "area", "spline", "pie",etc.
                    type: surveyStored,
                    dataPoints: [
                        { label: mySurData.data[manufacturerStored].quality["0"].name,  y:  mySurData.data[manufacturerStored].quality["0"].rating  },
                        { label: mySurData.data[manufacturerStored].quality["1"].name, y: mySurData.data[manufacturerStored].quality["1"].rating  },
                        { label: mySurData.data[manufacturerStored].quality["2"].name, y: mySurData.data[manufacturerStored].quality["2"].rating  },
                        { label: mySurData.data[manufacturerStored].quality["3"].name,  y: mySurData.data[manufacturerStored].quality["3"].rating  },
                        { label: mySurData.data[manufacturerStored].quality["4"].name,  y: mySurData.data[manufacturerStored].quality["4"].rating  },
                        { label: mySurData.data[manufacturerStored].quality["5"].name,  y: mySurData.data[manufacturerStored].quality["5"].rating  }
                    ]
                }
                ]
            });
            chart.render();
        }
    }
    myRequest2.onerror = function(){
        var messageAlert = document.getElementById("messageAlert");
        messageAlert.innerHTML = "Could not connect to JSON source";
    }
    myRequest2.send();
    
                      /*{ label: "Overall",  y: 10  },
                        { label: "Mechanical", y: 15  },
                        { label: "Powertrain", y: 25  },
                        { label: "Body",  y: 30  },
                        { label: "Interior",  y: 40  },
                        { label: "Accessories",  y: 50  }*/
    
}