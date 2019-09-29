<!DOCTYPE html>
<html>
<link rel="icon" type="image/png" href="pages/profile/Logo.png" />
<title>Registration Form</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">


<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>


<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>



<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/6.2.3/firebase-storage.js"></script>
<script type="text/javascript" src="config.js"></script>
<style>
* {
  box-sizing: border-box;
}

body {
  background-image: url("logo/bg1.png");
  background-repeat: no-repeat;
  background-size: cover;

}

#cname, #addr, #cnum, #email, #pword, #cpword, #no_of_filter, #shippingfee, #permit, #express_charge {
  border-radius: 25px;
  border: 2px solid #5bc0de;
  padding: 20px; 
  width: 100%;
  height: 15px;  
}
#typeses  {
  border-radius: 25px;
  background: #0ba6ff;
  padding: 17px;
  width: 48%;
  height: 5px;  
}

#regForm {
  background-color:rgba(192,192,192,0.8);
  margin: 100px auto;
  font-family: Raleway;
  padding: 40px;
  width: 70%;
  min-width: 300px;
  border-radius: 25px;
}

h1 {
  text-align: center;  
}

input {
  padding: 10px;
  width: 100%;
  font-size: 17px;
  font-family: Raleway;
  border: 1px solid #aaaaaa;
}

/* Mark input boxes that gets an error on validation: */
input.invalid {
  background-color: #ffdddd;
}

/* Hide all steps by default: */
.tab {
  display: none;
}

button {
  background-color: #4364F7;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 17px;
  font-family: Raleway;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

#prevBtn {
    margin-right: .5rem;;
}

#nextBtn {
  display: flex;
}

/* Make circles that indicate the steps of the form: */
.step {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbbbbb;
  border: none;  
  border-radius: 50%;
  display: inline-block;
  opacity: 0.5;
}

.submitLoader {
  height: 20px;
    width: 20px;
    margin-right: .5rem;
}

.step.active {
  opacity: 1;
}

/* Mark the steps that are finished and valid: */
.step.finish {
  background-color: #4364F7;
}


body {
  padding: 1rem;
  /*color: hsla(215, 5%, 50%, 1);*/
}
h1 {
  color: hsla(215, 5%, 10%, 1);
  margin-bottom: 2rem;
}
section {
  display: flex;
  flex-flow: row wrap;
}
section > div {
  flex: 1;
  padding: 0.5rem;
}
input[type="radio"] {
  display: none;
  &:not(:disabled) ~ label {
    cursor: pointer;
  }
  &:disabled ~ label {
    color: hsla(150, 5%, 75%, 1);
    border-color: hsla(150, 5%, 75%, 1);
    box-shadow: none;
    cursor: not-allowed;
  }
}
label {
  height: 100%;
  display: block;
  background: white;
  border: 2px solid hsla(240, 75%, 50%, 1);
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 1rem;
  //margin: 1rem;
  text-align: center;
  box-shadow: 0px 3px 10px -2px hsla(240, 5%, 65%, 0.5);
  position: relative;
}
input[type="radio"]:checked + label {
  background: #4364F7;
  color: hsla(215, 0%, 100%, 1);
  box-shadow: #4364F7;
  &::after {
    color: hsla(215, 5%, 25%, 1);
    font-family: FontAwesome;
    border: 2px solid hsla(240, 75%, 45%, 1);
    content: "\f00c";
    font-size: 24px;
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    height: 50px;
    width: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    background: white;
    box-shadow: 0px 2px 5px -2px hsla(0, 0%, 0%, 0.25);
  }
}
input[type="radio"]#control_05:checked + label {
  background: red;
  border-color: red;
}
p {
  font-weight: 900;
}


@media only screen and (max-width: 700px) {
  section {
    flex-direction: column;
  }
}

</style>
<body>

<form id="regForm" method="GET">
  <h1>Registration Form</h1>
  <!-- One "tab" for each step in the form: -->
  
  <div class="tab">
    <h4>Step 1 of 4</h4><br>
    <h2>Company Info:</h2>
    <p><input placeholder="Company name..." oninput="this.className = ''" id="cname"></p>
    <p><input placeholder="Address..." oninput="this.className = ''" id="addr"></p>
    <p><input placeholder="Contact number..." pattern="\d*" maxlength="11" min="0" oninput="validity.valid||(value='');" oninput="this.className = ''" id="cnum" type="text"></p>
  </div>
  
  <div class="tab" id="errPass2">
    <h4>Step 2 of 4</h4><br>
    <h2>Account Info:</h2>

    <p><input placeholder="E-mail..." oninput="this.className = ''" id="email" name="email"></p>
    <p><input placeholder="Password..." oninput="this.className = ''" class="pword" id="pword" type="password" name="password"></p>
    <p><input placeholder="Confirm Password..." oninput="this.className = ''" id="cpword" class="cpword" type="password"></p>
     <div id="msg"></div>
  </div>
  
  <div class="tab" id="water_type">
    <h4>Step 3 of 4</h4><br>
    <h2>Services:</h2>
    <p>Business hours:</p>
    <p><input min="0" oninput="validity.valid||(value='');" oninput="this.className = ''" min="6" max="11" id="buss_from" type="time" style="width: 15%;">
      -
     <input min="0" oninput="validity.valid||(value='');" oninput="this.className = ''" min="1" max="6" id="buss_to" type="time" style="width: 15%">
     <!-- <input min="0" oninput="validity.valid||(value='');" oninput="this.className = ''" id="pick_up_time" type="time" style="width: 14%;margin-left: 87px;"> -->
     <h3>Morning Schedule</h3>
     <p><i>Order Time: <strong id="order_time_morning"></strong></i> 
     </p>
     <p><i>Delivery Time:</i> 
        <select style="width: 10%;" id="mor_delivery">
            
        </select>
     </p>
     
     <p><i>Pick up Time:</i> 
        <select style="width: 10%;" id="mor_pickup">
        
        </select>
     </p>
     <div style="margin-left: 50%;margin-top: -110px;">
     <h3>Afternoon Schedule</h3>
      <p><i>Order Time: <strong id="order_time_afternoon"></strong></i>

     </p>
     <p><i>Delivery Time:</i>
        <select style="width: 20%;" id="aft_delivery">
          
        </select> 
     </p>
    
    <p><i>Pick up Time:</i>
        <select style="width: 20%;" id="aft_pickup">
        
       </select>
    </p>
    </div>
    <small>Choose your water type(s):</small><br>
    <center>  
    <p id="typeses">
    <input style="width: auto;" oninput="this.className = ''"  name="water_type[]"  value="Alkaline" type="checkbox">Alkaline&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input style="width: auto;" oninput="this.className = ''"  name="water_type[]"  value="Distilled" type="checkbox">Distilled&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input style="width: auto;" oninput="this.className = ''"  name="water_type[]"  value="Mineral" type="checkbox">Mineral&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input style="width: auto;" oninput="this.className = ''"  name="water_type[]"  value="Purified" type="checkbox">Purified&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </p>
    
    <p><input placeholder="Express Delivery Charge" min="0" oninput="validity.valid||(value='');" oninput="this.className = ''" id="express_charge" type="number" ></p>
    <p><input placeholder="Delivery Charge - Rate per kilomer" min="0" oninput="validity.valid||(value='');" oninput="this.className = ''" id="shippingfee" type="number" ></p>
     <p><input placeholder="No. of filtration" min="0" oninput="validity.valid||(value='');" oninput="this.className = ''" id="no_of_filter" type="number" ></p>
    </center>
  </div>
  
  <div class="tab">
    <h4>Step 4 of 4</h4><br>
    <h2>Requirements:</h2><br>
    <strong>Business Permit:</strong>
    <p><input  oninput="this.className = ''" name="file[]" id="files" type="file" accept='image/*' id="permit"></p>
    <strong>Laboratory accredited:</strong>
    <p><input  oninput="this.className = ''" name="file[]" id="filess" type="file"></p>
    <strong>Store picture:</strong>
    <p><input  oninput="this.className = ''" name="file[]" id="filesss" type="file"></p>
    <p>By clicking submit, you agree to the <a href="#" data-toggle="modal" data-target="#exampleModalLong">Terms & Condition</a></p>

    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Terms and Condition</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
             <center><b>TERMS AND CONDITIONS</b></center><br><br>
                    1. These Terms and Conditions will apply to the purchase of the good details by the buyer.<br><br>
                    2. These Terms and Conditions will be deemed to have been accepted by you when you accept them from the date of any delivery of the product.<br><br>


                    <b>Prices</b><br><br>
                    3. All prices are subject to change without notice and are not guaranteed, except that prices for an order that have been accepted by you. and/or you are not subject to change after acceptance. <br><br>

                    <b>Commission</b><br><br>
                    4. A per-transaction fee is an expense, you must pay each time it processes an electronic payment for a customer transaction. Per transaction fees vary across service providers, typically costs one peso for every one hundred  request load wallet, and twenty five pesos for the transaction. <br><br>

                    <b>Product</b><br><br>
                    5. Your use of any information or materials on this website is entirely at your own risk for which we shall not be laible.<br><br>

                    <b>Delivery</b><br><br>
                    6. It shall be your own responsibility to ensure that any services or information available throught his website meet your specific requirements.<br><br>


                    <b>Digital Signature: Electronic Records</b><br><br>
                    7. By registering for an account on our site or by clicking these Terms and Conditions when prompted on the site. you are deemed to have executed this Agreement electronically; effective on the date of your registration. <br><br>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Ok</button>
            </div>
          </div>
        </div>
      </div>
  </div>
  <div style="text-align:center;margin-top:40px;">
    <span class="step"></span>
    <span class="step"></span>
    <span class="step"></span>
    <span class="step"></span>
  </div>
  
  <div style="overflow:auto;">
    <div style="display: flex;justify-content: flex-end;">
      <button type="button" id="prevBtn" onclick="nextPrev(-1)">Previous</button>
      <button type="button" id="nextBtn" onclick="nextPrev(1)"><img src="css/ajax-loader.gif"></button>
    </div>
  </div>
  <!-- Circles which indicates the steps of the form: -->
 
  <div>
    <center>
    <h4>Already have an account? <a href="login/index.php">Login</a></h4>
    </center>
  </div>

</form>

<script>
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

$(document).ready(function(){
        $(".cpword, .pword").keyup(function(){
             if ($("#pword").val() != $("#cpword").val()) {
                var btn = $("#nextBtn");
                btn.prop("disabled", true);
                 $("#msg").html("Password do not match").css("color","red");
             }else{
                 $("#msg").html("Password matched").css("color","green");
                 var btn = $("#nextBtn");
                btn.prop("disabled", false);
            }
      });

var from = document.getElementById('buss_from');
var mor = document.getElementById('mor_delivery');



from.addEventListener("input", function() {
  mor.innerText = from.value;

// console.log(from.value);

  // for( var i = from.value; i < 12; i++){
    
  //  $('#morning').append(`<option value="`+i+`">`+i+`</option>`);



  // }
      let fromtime = from.value;

        let totime = '11:00'

        document.getElementById('order_time_morning').innerHTML = fromtime+' to '+totime;

        let getGenTime = (timeString) => {
          let H = +timeString.substr(0, 2);
          let h = (H % 12) || 12;
          let ampm = H < 12 ? " AM" : " PM";
          return timeString = h + timeString.substr(2, 3) + ampm;
        }



        function returnTimesInBetween(start, end) {
          var timesInBetween = [];

          var startH = parseInt(start.split(":")[0]);
          var startM = parseInt(start.split(":")[1]);
          var endH = parseInt(end.split(":")[0]);
          var endM = parseInt(end.split(":")[1]);

          if (startM == 0)
            startH++;

          for (var i = startH; i < endH; i++) {

            timesInBetween.push(i < 10 ? "0" + i + ":00" : i + ":00");
          
          }

          timesInBetween.push(endH + ":00")
          // if (endM == 0)
          //   timesInBetween.push(endH + ":00");

          return timesInBetween.map(getGenTime);
          }
          

        for( var j = 0; j < returnTimesInBetween(fromtime, totime).length; j++){
    
            $('#mor_delivery').append(`<option value="`+j+`">`+returnTimesInBetween(fromtime, totime)[j]+`</option>`);
            $('#mor_pickup').append(`<option value="`+j+`">`+returnTimesInBetween(fromtime, totime)[j]+`</option>`);
            
        }

        
  }, false);

    var to = document.getElementById('buss_to');
    var aft = document.getElementById('aft_delivery');

    to.addEventListener("input", function() {
      aft.innerText = to.value;

        let fromtime = '12:00';

            let totime = to.value

            document.getElementById('order_time_afternoon').innerHTML = fromtime+' to '+totime;

            let getGenTime = (timeString) => {
              let H = +timeString.substr(0, 2);
              let h = (H % 12) || 12;
              let ampm = H < 12 ? " AM" : " PM";
              return timeString = h + timeString.substr(2, 3) + ampm;
            }



            function returnTimesInBetween(start, end) {
              var timesInBetween = [];

              var startH = parseInt(start.split(":")[0]);
              var startM = parseInt(start.split(":")[1]);
              var endH = parseInt(end.split(":")[0]);
              var endM = parseInt(end.split(":")[1]);

              if (startM == 0)
                startH++;

              for (var i = startH; i < endH; i++) {
                timesInBetween.push(i + ":00" + ":" + i + ":00");  
              }

              timesInBetween.push(endH + ":00");
              // if (endM == 0)
              //   timesInBetween.push(endH + ":00")

              return timesInBetween.map(getGenTime);
            }

            for( var j = 0; j < returnTimesInBetween(fromtime, totime).length; j++){
        
                $('#aft_delivery').append(`<option value="`+j+`">`+returnTimesInBetween(fromtime, totime)[j]+`</option>`);
                $('#aft_pickup').append(`<option value="`+j+`">`+returnTimesInBetween(fromtime, totime)[j]+`</option>`);

                // console.log(returnTimesInBetween(fromtime, totime)[j]);
                
            }

     
    

}, false);

  



    

// var index = $('#morning').get(0).selectedIndex;
// $('#morning option:eq(' + index + ')').remove();
});

    
function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "flex";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
      $("#nextBtn").attr("onclick", "createAccount();return false;");

  } else {
    document.getElementById("nextBtn").innerHTML = "Next";

     $("#nextBtn").attr("onclick", "nextPrev(1)");
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}



</script>
 <div id="map"></div>
    <script>
      // This example adds a search box to a map, using the Google Place Autocomplete
      // feature. People can enter geographical searches. The search box will return a
      // pick list containing a mix of places and predicted search terms.

      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

      function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.8688, lng: 151.2195},
          zoom: 13,
          mapTypeId: 'roadmap'
        });

        // Create the search box and link it to the UI element.
        var input = document.getElementById('addr');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }

    </script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAuXUoYwfNp7P41GYhP3OShn3MAFd0s_CY&libraries=places&callback=initAutocomplete" async defer></script>
</body>
</html>
