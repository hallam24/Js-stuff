/* PRACTICE FOR CREATING JSON FILE */

/*var car = {
    "model": "Audi",
    "price": 2500,
    "engine": "Petrol"    
}

console.log(car.model);

var F1 = ["Lewis", "kimi", "Alonso"];

console.log(F1[1]);*/

var F1 = {
    "data": [
                {
                    "car": "Mercedes",
                    "driver": "Lewis",
                    "wins": 2
                },
                {
                    "circuit": "Monaco",
                    "pointSystem": [
                                        {
                                            "firstPlace": 25,
                                            "secondPlace": 15,
                                            "thirdPlace": 9
                                        }
                                    ],
                    "teams": 11
                }
            ]
}

console.log(F1.data[1].pointSystem[0].thirdPlace);

var F2 = {
    "data": [
                {
                    "car": "Mercedes",
                    "driver": "Lewis",
                    "wins": 2
                },
                {
                    "circuit": "Monaco",
                    "pointSystem": [
                                        {
                                            "firstPlace": 25,
                                            "secondPlace": 15,
                                            "thirdPlace": 9
                                        }
                                    ],
                    "teams": 11
                }
            ]
}