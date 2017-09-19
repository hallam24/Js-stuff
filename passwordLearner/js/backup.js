//button for clearing local storage and console.
        var clearButton = document.getElementById("myClear");
            clearButton.addEventListener("click", clearPage, false);
        //button to reveal register section
        var button1 = document.getElementById("myRegister");
            button1.addEventListener("click", revealRegister, false);
        //button to submit content
        var submitBtn = document.getElementById("mySubmit");
            submitBtn.addEventListener("click", addUser, false);
            submitBtn.addEventListener("click", revealRegister, false);
        //button to login
        var loginBtn = document.getElementById("myLogin");
            loginBtn.addEventListener("click", login, false);
        
        //sections affected by hide functions
        var regSection = document.getElementById("newUser");
        var logSection = document.getElementById("logout");
        
        
        //empty array for username and password;
        var userS = []; 
        
        //username and passwords sections
        var userN = document.getElementById("userN");
        var passW = document.getElementById("userP");

        //function to clear page and console
        function clearPage(){
            localStorage.clear();
            console.clear();
        }
        
        //hides the register section
        function revealRegister() {
            if (regSection.style.display === 'none') {
                regSection.style.display = 'block';
            } else {
                regSection.style.display = 'none';
            }
        }
        //hides the logout section
        function revealLogout() {
            if (logSection.style.display === 'none') {
                logSection.style.display = 'block';
            } else {
                logSection.style.display = 'none';
            }
        }
        
        //adds a new user and pushes to an array in local storage
        function addUser(){
            var NuserN = document.getElementById("userName").value;
            var NpassW = document.getElementById("passWord").value;
            
            //user object. Contains a name and password
            var user = {name: NuserN, password: NpassW};
            
            
            //temporary object to pull the 'users' array from local storage and allow us to ammend it
            var retrievedUsers = JSON.parse(localStorage.getItem("users")) || [];
                //the users array
                userS.push(user);
                //the temporary array created above
                retrievedUsers.push(user);
                //restringify and send the new amended array back to local storage
                localStorage.setItem("users", JSON.stringify(retrievedUsers));
            
            //adds user to local storage as its own object. Can remove.
            //localStorage[user.name] = JSON.stringify(user)
                       
            //loops through and prints all users in user array
            for(var i = 0; i < userS.length; i++){
                var tempUser = JSON.parse(localStorage.getItem(userS[i].name));
                console.log(tempUser.password); 
            }
            //loops through userS array and prints each item
            for(var i = 0; i < userS.length; i++){
                console.log(userS[i]);
                
            }
            
            
            /*userPassword.push({
                uname: NuserN,
                upassword: NpassW
            });*/
        }
        
        function login(){
            //variables for grabbing username and password input
            var userN = document.getElementById("userN").value;
            var passW = document.getElementById("userP").value;
            
             /*for (var i in userS) {
                if (userN == userS[i]["name"]){
                    if(passW == userS[i]["password"]){
                        alert("correct");
                    } else{
                        alert("wrong password");
                    }
                }
             }*/
            /*if(userN in localStorage){
                alert('yes');
                } else {
                alert('no');
            }*/
            
            //temporary object for pulling 'users' array from local storage
            var tempUsers = JSON.parse(localStorage.getItem("users"));
                tempUsers.forEach(checkPassword);
            //loops through list of users and checks if the password entered matches the name entered
                    /*for (var i in tempUsers){                    
                        if (userN == tempUsers[i].name){
                            if(passW == tempUsers[i].password){
                                alert("correct");
                            } else{
                                alert("wrong password");
                            }
                        }  
                    }*/
            
          
            
        }
        
        function checkPassword(element, index){
            var userN = document.getElementById("userN").value;
            var passW = document.getElementById("userP").value;
                console.log("User " + element.name + "'s password is " + element.password);
                if(userN == element.name && passW == element.password){
                    alert("for each did it");
                }
                    
            }
            

        //debug functions mostly
        window.onload = function(){
            //hides sections until they are needed
            revealRegister();
            revealLogout();
            
            //temporary object for pulling 'users' array from local storage and logging the name and passwords
            var tUsers = JSON.parse(localStorage.getItem("users"));
            tUsers.forEach(checkPassword);
            for(var i = 0; i < tUsers.length; i++){
                console.log("User " + i + "'s name is " + tUsers[i].name);
                console.log("User " + i + "'s password is " + tUsers[i].password);
            }
                
            
            //checks if user with the name 'hal' exists, if so logs the password, if not it says 'hal' doesn't exist
            if(!JSON.parse(localStorage.getItem("hal")) == null){
                var hal = JSON.parse(localStorage.getItem("hal"));
                console.log(hal.password);   
            }else{
                console.log("Hal doesnt exist yet");
            }
            
            //loops through users and prints their name and password
            for(var i = 0; i , userS.length; i++){
                var j = JSON.parse(localStorage.getItem(userS[i]));
                console.log("User " + i + j.name);
                console.log("User " + j + " password is " + j.password);
            }    
            
            
        }/*
        
        
        Storage.prototype.setObj = function(key, obj) {
            return this.setItem(key, JSON.stringify(obj))
        }
        
        Storage.prototype.getObj = function(key) {
            return JSON.parse(this.getItem(key))
        }*/
        