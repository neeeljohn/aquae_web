

const firebaseConfig = {
    apiKey: "AIzaSyBsS4J-Ch5gb1eZHsbC1pVfLQ3_CyQYkMs",
    authDomain: "aquae-4b609.firebaseapp.com",
    databaseURL: "https://aquae-4b609.firebaseio.com",
    projectId: "aquae-4b609",
    storageBucket: "aquae-4b609.appspot.com",
    messagingSenderId: "603318450238",
    appId: "1:603318450238:web:c3566a30c54b6d00"
};
firebase.initializeApp(firebaseConfig);

 

const database = firebase.database().ref();
const storageRef = firebase.storage().ref();
// const messaging = firebase.messaging();

// messaging.usePublicVapidKey('BLLI8HCEwBfUy5brWsfOk_qe0f0tC-s2aVfdtOUk9gwDqauy2cDFcThyOuLdt3cct8ywpVmxXrxAbGaliZXBlT0');

// messaging.requestPermission()
// .then(function(){
// 	console.log('Have permission');
// 	return messaging.getToken();
// })
// .then(function(token){
// 	console.log(token);

// })
// .catch(function(err){
// 	console.log('error occured');
// });
// messaging.onMessage(function(payload){
// 	console.log('onMessage', payload);

// 	var obj = JSON.parse(payload.data.notification);
// 	var notification = new Notification(obj.title,{
// 		title: obj.title,
// 		body: obj.body
// 	});
// 	document.getElementById('token').innerHTML = obj.title;
// 	document.getElementById('tokens').innerHTML = obj.body;
// });


// notification fcm

// var registrationIds = firebase.database().ref("notification/IDS");
// registrationIds.once("value").then(function(snapshot) {
// snapshot.forEach(function(childSnapshot) {
// 	var registrationId = childSnapshot.val();
		
// });
// });

// const headers = {
//         'Authorization': 'key=<your firebase legacy server key>',
//         'Content-Type': 'application/json',
//         'Content-Length': dataString.length
//     }

// $.ajax({
// 			type: 'POST',
// 		    url: "https://fcm.googleapis.com/fcm/send",
// 		    headers: {
// 		        Authorization: 'key=AAAAjHiU-D4:APA91bFcPDXfjlfKKMpVWkz9uS3SfNNnFgsKlMj2dbfgrmXIRqa3rMcI-j4bYvcH2DR47JxzFAV8IDl3TxCde6yuxBPbiz9Rp-7V7sstHp23MlN6ojwD1eSZqLdjMFNVS3AcCIsgyF4k'
// 		     },
// 		     contentType: 'application/json',
// 		     dataType: 'json',
// 		     data: JSON.stringify({"to": currentToken, "notification": {"title":"Test","body":"Test"}}),
// 		      success: function(response) {
// 		                console.log("agi response") ;
// 		          console.log(response);
// 		       },
// 		        error: function(xhr, status, error) {
// 		                console.log("agi error") ;    
// 		                console.log(xhr.error);             
// 		       }
// 		});
// end

async function createAccount() {

		var mor_delivery = document.getElementById("mor_delivery");
		var morning_del = mor_delivery.options[mor_delivery.selectedIndex].text;

	document.getElementById('nextBtn').innerHTML = "<img class='submitLoader' src='css/ajax-loader.gif'> Saving";


	var timeString = document.getElementById("buss_to").value;
	var H = +timeString.substr(0, 2);
	var h = (H % 12) || 12;
	var ampm = H < 12 ? "AM" : "PM";	
	timeString = h + timeString.substr(2, 3) +" "+ampm;


	t = document.getElementById('buss_from').value;
    var [h,m] = t.split(":");
    var bussiness_close  = " "+((h%12+12*(h%12==0))+":"+m, h >= 12 ? 'PM' : 'AM');
    

	// console.log(timeString);
	var cname = document.getElementById("cname").value;
	var addr = document.getElementById("addr").value;
	var cnum = document.getElementById("cnum").value;
	var email = document.getElementById("email").value;
	var pword = document.getElementById("pword").value;
	var cpword = document.getElementById("cpword").value;
	var express_charge = document.getElementById("express_charge").value;
	var filters = document.getElementById("no_of_filter").value;
	var shippingfee = document.getElementById("shippingfee").value;
	var files = document.getElementById('files');
	var filess = document.getElementById('filess');
	var filesss = document.getElementById('filesss');

	var cid = database.child('clients').push().key;

	// var subscription = document.querySelector('input[name="subscription"]:checked').value;

	if(pword != cpword){
		document.getElementById("errPass2").textContent = "Password does not match";
	}

	// if(cpword == ""){
	// 	document.getElementById("errPass2").textContent = "Confirm your password";
	// }

	// if(files.files.length == 0){
 //    	document.getElementById("errBP").textContent = "Please upload the requirements";
	// }


	//if(cname != "" && email != "" && pword && service_type != "" && addr != "" && cnum != "" && pword == cpword && files.files.length != 0){
		var url = {};

		var uploadTask = storageRef.child("requirements/" + cname);

		url.permit = await getUploadUrl(files, 0, uploadTask);
		url.lab = await getUploadUrl(filess, 0, uploadTask);
		url.store = await getUploadUrl(filesss, 0, uploadTask);
		
		// var url = [];

		// for (var i = 0; i < files.files.length; i++) {
		// 	var uploadRef = uploadTask.child(files.files[i].name);
		// 	var uploadUrl =  await uploadPromise(files, uploadRef, i);
		// 	// var test = uploadTask.child(files.files[i].name).put(files.files[i]).then(function(snapshot) {
		// 	// 	 snapshot.ref.getDownloadURL().then(function(downloadURL) {
		// 	// 		return downloadURL;
		// 	// 	});
		// 	// });	
		// 	url.push(uploadUrl);
		// }	
		var water_type = document.getElementById("water_type");
		// var checkses = document.getElementsByClassName('checkses');
		var checkbox =  document.getElementsByName('water_type[]');
		var strs = '';


		for ( j = 0 ; j < checkbox.length; j++){
			if ( checkbox[j].checked === true ){
				strs += checkbox[j].value + ", ";
			}
		}

		var mor_delivery = document.getElementById("mor_delivery");
		var morning_del = mor_delivery.options[mor_delivery.selectedIndex].text;

		var mor_pickup = document.getElementById("mor_pickup");
		var morning_pickup = mor_pickup.options[mor_pickup.selectedIndex].text;

		var aft_delivery = document.getElementById("aft_delivery");
		var afternoon_del = aft_delivery.options[aft_delivery.selectedIndex].text;

		var aft_pickup = document.getElementById("aft_pickup");
		var afternoon_pickup = aft_pickup.options[aft_pickup.selectedIndex].text;

		var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	 	var date = new Date();
	 	var hours = date.getHours();
	 	var ampm = hours >= 12 ? 'PM' : 'AM';
	 	hours = hours % 12;
	  	hours = hours ? hours : 12; // the hour '0' should be '12'
	 	var format_date = months[date.getMonth()]+ " " + date.getDate() + "," + date.getFullYear()+ " | " + hours + ":" + date.getMinutes()+" "+ampm;

		// console.log(strs);

		var data = {
			client_id : cid,
			company : cname,
			open_time: t+ bussiness_close,
			close_time: timeString,
			email : email,
			water_type: strs,
			password : pword,
			express_charge : express_charge,
			morning_delivery: morning_del,
			morning_pickup: morning_pickup,
			afternoon_delivery: afternoon_del,
			afternoon_pickup: afternoon_pickup,
			shipping_fee : shippingfee,
			address : addr,	
			contact : cnum,
			no_of_filter: filters,
			files : url,
			date_registered: format_date,
			rate: "0.0",
			wallet: "0",
			status : "deactivate"
		};
		
		var updates = {};
		updates['/clients/' + cid] = data;
		database.update(updates).then(function() {
			swal({
	            title: "Thank you for registering!",
	            text: "redirecting to login...",
	            icon: "success",
	            button: false,
	            timer: 1800
	          }).then(function(){
	          	document.getElementById('nextBtn').innerHTML = "Submit";
	            window.location = "login/index.php";
	          });	
		}).catch(function(error) {
	        document.getElementById('nextBtn').innerHTML = "Submit";
			alert(error);
		});
	}




// function priceProduct(){

// 	var bottle_price = document.getElementById('bottle_price').value;
// 	var container_price = document.getElementById('container_price').value;
// 	var gallon_price = document.getElementById('gallon_price').value;

// 	// console.log(bottle_price,container_price,gallon_price);

// 	var botcongal = database.child('products_price').push().key;

// 	var data = {
// 		prod_price_id: botcongal,
// 		bottle: bottle_price,
// 		container: container_price,
// 		gallon: gallon_price

// 	}

// 	var updates = {};
// 	updates['/products_price/' + botcongal] = data;
// 	database.update(updates).then(function(){
// 		swal({
// 			 title: "Successfully set!",
// 			 text: "    ",
// 	            icon: "success",
// 	            button: false,
// 	            timer: 1800
// 		}).then(function(){
// 			window.location = "clients_product.php";
// 		});
// 	}).catch(function(error){
// 		alert(error);
// 	});
// }


// var userDataRefs = firebase.database().ref("products_price").on("value", snapshot => {

// 		// var key = snapshot.key;
		
// 		let prodprice = Object.keys(snapshot.val()).map(function(e) {
// 			return snapshot.val()[e];
// 		}); 

// 		// console.log(prodprice[0]);


// 		$('#inputProdprice').append(`
// 		<tr>
//             <td><input type="number" id="bottle_price" readonly/></td>
//             <td><input type="number" id="container_price" readonly/></td>
//             <td><input type="number" id="gallon_price" readonly/></td>
//         </tr>

// 		`);

// 		var a = prodprice[0].bottle;
// 		var b = prodprice[0].container;
// 		var c = prodprice[0].gallon;
// 		var botText = document.getElementById('bottle_price');
// 		var conText = document.getElementById('container_price');
// 		var galText = document.getElementById('gallon_price');

// 		botText.value = a;
// 		conText.value = b;
// 		galText.value = c;

// 		$('#buttonPrice').append(`
// 			 <button style="margin-left: 90%;" onclick="priceProduct();">Save</button>
//              <button data-toggle="modal" data-target="#editProdPrice">Edit</button>

// 		`);

// 		$('#ModalEditProdPrice').append(`
// 			 <div class="modal fade" id="editProdPrice" role="dialog" style="margin-bottom:10px;">
//               <div class="modal-dialog">
//                 <div class="modal-content">
//                   <div class="modal-header" style="background-color: #337ab7;">
//                   </div>
//                   <div class="modal-body">
//                       <div class="form-group">
//                        Bottle: 	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	<input type="text" id="bottle_update" value="`+prodprice[0].bottle+`"><br>
//                        Container: <input type="text" id="container_update" value="`+prodprice[0].container+`"><br>
//                        Gallon: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	<input type="text" id="gallon_update" value="`+prodprice[0].gallon+`">
//                       </div>
//                   </div>
//                   <div class="modal-footer">
//                       <button  class="btn btn-default" data-dismiss="modal">Cancel</button>
//                       <button onClick="UpdatepriceProduct(`+prodprice[0].bottle+`,`+prodprice[0].container+`,`+prodprice[0].gallon+`);">Edit</button>
//                   </div>
//                 </div>
//              </div>

// 		`);
// });

// function UpdatepriceProduct(a,b,c,d){

// 	console.log(a,b,c,d);

// 	// var updateBot =	document.getElementById('bottle_update').value;
// 	// var updateCon =	document.getElementById('container_update').value;
// 	// var updateGal =	document.getElementById('gallon_update').value;


// 	// var data = {
// 	// 	bottle: updateBot,
// 	// 	container: updateCon,
// 	// 	gallon: updateGal
// 	// }

// 	// var updates = {};
// 	// updates['products_price/' + a] = data;
// 	// database.update(updates).then(function(){
// 	// 	swal({
// 	// 		 title: "Updated Successfully!",
// 	// 		 text: "    ",
// 	//             icon: "success",
// 	//             button: false,
// 	//             timer: 1800
// 	// 	}).then(function(){
// 	// 		window.location = "clients_product.php";
// 	// 	});
// 	// }).catch(function(error){
// 	// 	alert(error);
// 	// });


	
// }





// }

var userDataRefs = firebase.database().ref("clients").orderByChild("status").equalTo("deactivate").on("value", snapshot => {
		
		let notifAds = Object.keys(snapshot.val()).map(function(e) {
			return snapshot.val()[e];
		}); 

		document.getElementById('notifAdmin').innerHTML = notifAds.length;

		$('#modalNotif').modal("show");



});


var userDataRef = firebase.database().ref("clients").orderByKey();
userDataRef.once("value").then(function(snapshot) {
snapshot.forEach(function(childSnapshot) {
  var key = childSnapshot.key;
  var childData = childSnapshot.val();

  // console.log(snapshot.numChildren());

  // if(childData.status == "deactivate"){
  // 	document.getElementById("notifAdmin").innerHTML = snapshot.numChildren();
  // }

  	// if (childData.client_id == sessionStorage.getItem("client_id")){
  	// 	
  	// }
  var requirementss = [];

  requirementss.push(childData.files.lab);
  requirementss.push(childData.files.permit);
  requirementss.push(childData.files.store);


// console.log(requirementss);


	// var images = requirementss.map(function(item, index) {
	// 	var activeClass =  (index == 0) ? 'active' : '';
	// 	return `<div class="carousel-item `+activeClass+`">
	//      <img class="img-responsive" src="`+item+`" alt="..."  width="100px;" height="100px;">
	//       <div class="carousel-caption">
	      	
	//       </div>
	//     </div>`;
	// }).join('');
	 

	//
//   
 // 		
$('#bod').append(`
	
	<tr class="gradeU">
 	<td>`+childData.company+`</td>
 	<td>`+childData.email+`</td>	
 	<td>`+childData.address+`</td>
 	<td>`+childData.contact+`</td>
 	<td><button class="btn" style="background-color: #4ECDC4; color:white;" data-toggle="modal" data-target="#modalDetails`+childData.client_id+`">Details</button></td>
 	<td>
 		<button class="btn" style="background-color: #4ECDC4; color:white;" data-toggle="modal" data-target=".bs-example-modal-lg`+childData.client_id+`">Requirements</button>

			<div class="modal fade bs-example-modal-lg`+childData.client_id+`" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
			  <div class="modal-dialog modal-lg">
			    <div class="modal-content">
			     <div id=".bs-example-modal-lg`+childData.client_id+`" class="carousel slide" data-ride="carousel">
					  <div class="carousel-inner">
					    <div class="carousel-item active">
					      <img class="d-block w-100" width="400" height="500" src="`+childData.files.permit+`" alt="First slide">
					      <h5>Business Permit</h5>
					    </div>
					    <div class="carousel-item">
					      <img class="d-block w-100 " width="400" height="500" src="`+childData.files.lab+`" alt="Second slide">
					      <h5>Laboratory Accredited</h5>
					    </div>
					    <div class="carousel-item">
					      <img class="d-block w-100 " width="400" height="500" src="`+childData.files.store+`" alt="Third slide">
					      <h5>Store Picture</h5>
					    </div>
					  </div>
					  <a class="carousel-control-prev" href="#.bs-example-modal-lg`+childData.client_id+`" role="button" data-slide="prev">
					    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
					    <span class="sr-only">Previous</span>
					  </a>
					  <a class="carousel-control-next" href="#.bs-example-modal-lg`+childData.client_id+`" role="button" data-slide="next">
					    <span class="carousel-control-next-icon" aria-hidden="true"></span>
					    <span class="sr-only">Next</span>
					  </a>
					</div>
			    </div>
			  </div>
			</div>
 	</td>
 		
 	<td>
 		<input id="status`+childData.client_id+`" type="checkbox" onchange="changeStatus(this, '`+childData.client_id+`')" value=`+childData.status+` data-toggle="toggle">
		<label for="status`+childData.client_id+`"" data-text-true="activate" data-text-false="deactivate"><i></i></label>
 	</td>
 	<form action="Dashio/basic_table.php" method="GET">
 	<td>
		<input type="submit" name="send_message_client" class="btn btn-danger" onclick="reloading();" value="DISAPPROVE">
 	</td>
 	</form>

 	</tr>
 	

 	

 	<script>


	 	if ($("#status`+childData.client_id+`").val() == "activate") {
		
			 $("#status`+childData.client_id+`").prop("checked", true);
		}
		else {
			$("#status`+childData.client_id+`").prop("checked", false);
		}

		 		    	
 	</script>
 	`);

	$('#modal_of_details').append(`
		<div class="modal fade" id="modalDetails`+childData.client_id+`" role="dialog" style="margin-bottom:10px;">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header" style="background-color: #337ab7;">
                  </div>
                  <div class="modal-body">
                      <div class="form-group">
                      <h3>Date started: <strong>`+childData.date_registered+`</strong></h3>
                      <h3>Open Time: <strong>`+childData.open_time+` - `+childData.close_time+`</strong></h3>
                      <h3>Morning Delivery: <strong>`+childData.morning_delivery+`</strong></h3>
                      <h3>Delivery Time: <strong>`+childData.morning_pickup+`</strong></h3>
                      <h3>Morning Delivery: <strong>`+childData.afternoon_delivery+`</strong></h3>
                      <h3>Delivery Time: <strong>`+childData.afternoon_pickup+`</strong></h3>
                      <hr>
                      <h4>Shipping fee: <strong>`+childData.shipping_fee+`</strong></h4>
                      <h4>Express Charge: <strong>`+childData.express_charge+`</strong></h4>
                      <h4>Water type: <strong>`+childData.water_type+`</strong></h4>
                      <h4>No. of filtration: <strong>`+childData.no_of_filter+`</strong></h4>           
                      
                      </div>
                  </div>
                  <div class="modal-footer">
                      <button  class="btn btn-default" data-dismiss="modal">Cancel</button>
                  </div>
                </div>
             </div>`);



		if (childData.client_id == sessionStorage.getItem("client_id")) {


		let output = Object.keys(childData).map(function(e) {
				return childData[e];
			}); 

		

		var newStr = output[21].substring(0, output[21].length - 2);

		var res = newStr.split(", ");


		for(var i = 0; i < res.length; i++){

			// <span id="price_from_admin"></span>
		$('#addProductsss').append(`
			<div class="col-sm-6">
               <h3 id="first_water">`+res[i]+`</h3>
               <input type="checkbox" class="checks" value="Refill" id="test1`+i+`"  name="service_Type[]" checked> &nbsp;Refill &nbsp;&nbsp;
               <input type="number" min="15" id="refill_price`+res[i]+`" onkeyup="keywar();" value="15" readonly>
               <br><input type="checkbox" class="checks" value="Sale" id="test2`+i+`" name="service_Type[]"> &nbsp;Sale &nbsp;&nbsp;
                <input type="number" min="1" oninput="validity.valid||(value='');" id="sale_price`+res[i]+`" onkeyup="keywar();" min="0" placeholder="Price..." style="margin-left: 6px; margin-top: 2px;" ><br><br><br><p id="message" style="text-align: center; color: red;"></p>
            </div>

            <script type="text/javascript">
	            $(function () {
	                $("#test1`+i+`").click(function () {
	                    if ($(this).is(":checked")) {
	                        $("#refill_price`+res[i]+`").show();
	                    }else {
	                        $("#refill_price`+res[i]+`").hide();
	                    }
	                });
	                $("#sale_price`+res[i]+`").hide();
	                $("#test2`+i+`").click(function () {
	                    if ($(this).is(":checked")) {
	                        $("#sale_price`+res[i]+`").show();
	                    }else {
	                        $("#sale_price`+res[i]+`").hide();
	                    }
	                });
	            });


        	</script>
			`);

			}

			// var userDataRefs = firebase.database().ref("products_price").on("value", snapshot => {
		
			// 	let addProductPrice = Object.keys(snapshot.val()).map(function(e) {
			// 		return snapshot.val()[e];
			// 	}); 

			// 	// console.log(addProductPrice);
			// 	document.getElementById('price_from_admin').innerText = '₱ '+addProductPrice[0].gallon+'.00';


		
			//,'`+addProductPrice[0].gallon+`'
			$('#prods').append(`
				<input type="hidden" name="prod_id" id="prod_id">
                <button type="button" class="btn btn-primary" name="save_product" onclick="product('`+newStr+`');" id="saveBtn">Save</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
			`);

			$('#morningOrders').append(`<b>Morning
			<i style="margin-left: 30%;">`+childData.morning_pickup+ " (Pick up) - "+childData.afternoon_delivery+ ` (Delivery)</i></b>
			`);
			$('#afternoonOrders').append(`<b>Afternoon
			<i style="margin-left: 30%;">`+childData.afternoon_pickup+ " (Pick up) - "+childData.morning_delivery+ ` (Delivery)</i></b>
			`);
			// });
			

		}
		
	  });
	});



function reloading(){
	reload_page();
}

var userDataRefs = firebase.database().ref("clients").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id")).on("value", snapshot => {
		
		let walletClient = Object.keys(snapshot.val()).map(function(e) {
			return snapshot.val()[e];
		}); 

		// console.log(output);
			
		document.getElementById('walletBalance').innerHTML = walletClient[0].wallet;

		// console.log(output[0].subscription);

		// if (output[0].subscription == "Standard ₱499") {

		// 	$('#expressing').hide();
		// 	$('#order_express').hide();

		// }
});


	


		// var userDataRef = firebase.database().ref("clients").orderByChild("status").equalTo("activate");
		// userDataRef.once("value").then(function(snapshot) {
		// snapshot.forEach(function(childSnapshot) {
		//   var key = childSnapshot.key;
		//   var childData = childSnapshot.val();  

		//   		if (childData.client_id == sessionStorage.getItem("client_id")) {
		//   			document.getElementById("subses").innerHTML = childData.date_activated;

		//   		}

		// 	});

		// });

		var userDataRef = firebase.database().ref("clients");

		var totalAmountADMIN = 0;
		userDataRef.once("value").then(function(snapshoting) {
		snapshoting.forEach(function(childSnapshoting) {
		  // var key = childSnapshoting.key;
		  var chinese = childSnapshoting.val();  

		    var userDataRef = firebase.database().ref("orders").orderByChild("status").equalTo("confirmed");
			userDataRef.once("value").then(function(loveshot) {
			loveshot.forEach(function(childLoveshot) {
			  var japanese = childLoveshot.val(); 

			  	$('#subscription_reports').DataTable().row.add([
					''+chinese.client_id, 
					''+japanese.order_id, 
					''+japanese.accepted_time, 
					''+chinese.company,
					'25'

				]).draw();


			  	totalAmountADMIN += 25;
					// console.log(totalReport);
					
				document.getElementById("totalAmountADMIN").innerHTML = '₱'+totalAmountADMIN;

						});
					});

				});

			});

		var userDataRef = firebase.database().ref("ratings").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id"));

		userDataRef.once("value").then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
		  var key = childSnapshot.key;
		  var childData = childSnapshot.val();  
		  if (childData.client_id == sessionStorage.getItem("client_id")) {

		  	// console.log(childData.client_id);
		  
		  	var stars = getStars(childData.rate);
		  	var feeds = childData.feedback;

					function getStars(rating) {

					  // Round to nearest half
					  rating = Math.round(rating * 2) / 2;
					  let output = [];

					  // Append all the filled whole stars
					  for (var i = rating; i >= 1; i--)
					    output.push('<i class="fa fa-star" aria-hidden="true"  style="color: gold;"></i>&nbsp;');

					  // If there is a half a star, append it
					  if (i == .5) output.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');

					  // Fill the empty stars
					  for (let i = (5 - rating); i >= 1; i--)
					    output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');

					  return output.join('');

					}

				$('#ratingfeeds').append(`
		  			 <tr>
	                    <td>`+stars+`</td>
	                    <td>`+feeds+`</td>
                	 </tr>
		  		`);



		  }
		 
		});

	});

// <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
// 	<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
// 	<link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet"/>

function getUploadUrl(file, idx, task) {
		var uploadRef = task.child(file.files[idx].name);
		return uploadPromise(file, uploadRef, idx);
}


function changeStatus(status, id) {

	var data;

	if (status.checked == true) {
		data = "activate";
	}
	else {
		data = "deactivate";
	}

	var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
 	var date = new Date();
 	var hours = date.getHours();
 	var ampm = hours >= 12 ? 'PM' : 'AM';
 	hours = hours % 12;
  	hours = hours ? hours : 12; // the hour '0' should be '12'
 	var format_date = months[date.getMonth()]+ " " + date.getDate() + "," + date.getFullYear()+ " | " + hours + ":" + date.getMinutes()+" "+ampm;

	var updates = {};
	updates['clients/' + id + '/status'] = data;
	database.update(updates).then(function() {

		var updates = {};
		updates['clients/' + id + '/date_activated'] = format_date;
		database.update(updates).then(function() {


		});
	}).catch(function(error) {
		alert(error);
	});
}

function productStatus(status, id , prod , types) {

	var data;

	if (status.checked == true) {
		data = "available";
	}
	else {
		data = "unavailable";
	}

	// console.log(status);
	// console.log(id);
	// console.log(types);
	// console.log(prod);

	var updates = {};
	updates['products/' + prod + '/types/'+ types + '/status'] = data;
	database.update(updates).then(function() {

	}).catch(function(error) {
		alert(error);
	});
}

function acceptStatus(idOrder, totalAmount, customerID, clientID, payment, OrderTime, DeliveryAddr, CustWallet) {

	// console.log(OrderTime);
	// console.log(OrderTime);



	var discount = document.getElementById('discount'+idOrder).value;

	// var e = document.getElementById('persons'+idOrder);
	// var boy = e.options[e.selectedIndex].value;

	// database.child("clients").orderByChild("client_id").equalTo(clientID).once("value", snapshots => {
	// 	let output = Object.keys(snapshots.val()).map(function(e) {
	// 		return snapshots.val()[e];
	// 	});

		

		// console.log(cliNewBal);
		// var cliNewBals = cliNewBal - parseInt(discount);

		// console.log(cliNewBal);

		// database.child("customers").orderByChild("customer_id").equalTo(customerID).once("value", snapshots => {

		// 	let output1 = Object.keys(snapshots.val()).map(function(e) {
		// 	return snapshots.val()[e];
		// });


		var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	 	var date = new Date();
	 	var hours = date.getHours();
	 	var ampm = hours >= 12 ? 'PM' : 'AM';
	 	hours = hours % 12;
	  	hours = hours ? hours : 12; // the hour '0' should be '12'
	 	var format_date = months[date.getMonth()]+ " " + date.getDate() + ", " + date.getFullYear()+ " | " + hours + ":" + date.getMinutes() +" "+ampm;

			if (payment == "Aquae Wallet") {

				database.child("clients").orderByChild("client_id").equalTo(clientID).once("value", snapshots => {
					let output = Object.keys(snapshots.val()).map(function(e) {
						return snapshots.val()[e];
					});

					database.child("customers").orderByChild("customer_id").equalTo(customerID).once("value", snapshots => {

						let output1 = Object.keys(snapshots.val()).map(function(e) {
						return snapshots.val()[e];
					});

				var discounts = parseInt(totalAmount) - parseInt(discount);

				var cliNewBal = parseInt(output[0].wallet) + discounts;

				var cliNewBalss = parseInt(output1[0].wallet) +  parseInt(discount); 

				var transac_fee = cliNewBal -  25;

				// var newBals = {};
				// newBals['customers/' + customerID + '/wallet'] = cliNewBalss.toString();
				// database.update(newBals);

				// var newBal = {};
				// newBal['clients/' + clientID + '/wallet'] = cliNewBal.toString();
				// database.update(newBal);

				

					

						var updates = {};
						updates['orders/' + idOrder + '/status'] = "accepted";
						database.update(updates).then(function(){

							var newBal = {};
							newBal['clients/' + clientID + '/wallet'] = cliNewBal.toString();
							database.update(newBal).then(function(){

									var newBals = {};
									newBals['customers/' + customerID + '/wallet'] = cliNewBalss.toString();
									database.update(newBals).then(function(){

										var transacFee = {};
										transacFee['clients/' + clientID + '/wallet'] = transac_fee.toString();
										database.update(transacFee).then(function() {


										var updatesess = {};
										updatesess['orders/' + idOrder + '/accepted_time'] = format_date;
										database.update(updatesess);

									

								});

							});

						});

					});
					
		

					

	



				var pusher = new Pusher('4de9228ab3e254f06ee8', {
					cluster: 'ap1',
					authEndpoint: '/aquae4/pages/auth.php'
				});
				pusherChannel = pusher.subscribe("private-update");

				pusherChannel.bind('pusher:subscription_succeeded', function() {
					pusherChannel.trigger('client-update', { customer_id: customerID, sender: "station", activity:"TrackOrder", order_time: OrderTime, delivery_address: DeliveryAddr, client_id: clientID, order_id: idOrder, payment:payment,  stationMessage: "Your order has been accepted!", driverMessage: "You have a new task!" });
				});

				// $('#Orderassign'+id).modal('toggle');
					
					// const orderList = document.querySelector('#morning_order');
					// let row = orderList.querySelector('tr[data-id= ' + idOrder + ']');
					// orderList.removeChild(row);
				
				// });
				// const orderListaft = document.querySelector('#afternoon_order');
				// 		let rows = orderListaft.querySelector('tr[data-id= ' + idOrder + ']');
				// 		orderListaft.removeChild(rows);	
				// });

				// 	});

				});
					
				});


			} 
			else {	

				database.child("clients").orderByChild("client_id").equalTo(clientID).once("value", snapshotss => {
					let outputer = Object.keys(snapshotss.val()).map(function(e) {
						return snapshotss.val()[e];
					});


					var codTransac = parseInt(outputer[0].wallet) - 25;

					

						var transacFeeCOD = {};
						transacFeeCOD['clients/' + clientID + '/wallet'] = codTransac.toString();
						database.update(transacFeeCOD).then(function(){

							var updatess = {};
							updatess['orders/' + idOrder + '/accepted_time'] = format_date;
							database.update(updatess).then(function() {

								var updater = {};
								updater['orders/' + idOrder + '/status'] = "accepted";
								database.update(updater);

							
								
						});

					});

					var pusher = new Pusher('4de9228ab3e254f06ee8', {
						cluster: 'ap1',
						authEndpoint: '/aquae4/pages/auth.php'
					});
					pusherChannel = pusher.subscribe("private-update");

					pusherChannel.bind('pusher:subscription_succeeded', function() {
						pusherChannel.trigger('client-update', { id: customerID, client_id: clientID, name: "orders", order_id: idOrder, payment:payment,  message: "Your order has been accepted!" });
					});

				

					// const orderList = document.querySelector('#orders');
					// let row = orderList.querySelector('tr[data-id= ' + idOrder + ']');
					// orderList.removeChild(row);

				}
			)};


		// 	const orderListaft = document.querySelector('#afternoon_order');
		// 				let rows = orderListaft.querySelector('tr[data-id= ' + idOrder + ']');
		// 				orderListaft.removeChild(rows);	

		// 	});
		// });
}

function ExpressAccept(OrderID, totalAmountEx, customerIDEx, clientIDEx, paymentEx) {

	// var personnelEx = document.getElementById('personelExpress'+OrderID);
	// var Expersonnel = personnelEx.options[personnelEx.selectedIndex].value;

	// console.log(id, totalAmount, customerID, clientID, payment);

	// console.log(boy);

	database.child("clients").orderByChild("client_id").equalTo(clientIDEx).once("value", snapshots => {

		let outputEx = Object.keys(snapshots.val()).map(function(e) {
			return snapshots.val()[e];
		});

	var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
 	var date = new Date();
 	var hours = date.getHours();
 	var ampm = hours >= 12 ? 'PM' : 'AM';
 	hours = hours % 12;
  	hours = hours ? hours : 12; // the hour '0' should be '12'
 	var format_date = months[date.getMonth()]+ " " + date.getDate() + ", " + date.getFullYear()+ " | " + hours + ":" + (date.getMinutes()<10?'0':'') + date.getMinutes() +" "+ampm;

			if (paymentEx == "Aquae Wallet") {

				var clientExBal = parseInt(outputEx[0].wallet) + parseInt(totalAmountEx);

				

				var expressBal = {};
				expressBal['clients/' + clientIDEx + '/wallet'] = clientExBal.toString();
				database.update(expressBal);
		
				var expressBalStat = {};
				expressBalStat['orders/' + OrderID + '/status'] = "accepted";
				database.update(expressBalStat);

				// var expressBalPer = {};
				// expressBalPer['orders/' + OrderID + '/per_id'] = Expersonnel;
				// database.update(expressBalPer);

				var expressBalPer = {};
				expressBalPer['orders/' + OrderID + '/accepted_time'] = format_date;
				database.update(expressBalPer);

				
				var pusher = new Pusher('4de9228ab3e254f06ee8', {
					cluster: 'ap1',
					authEndpoint: '/aquae4/pages/auth.php'
				});

				pusherChannel = pusher.subscribe("private-update");

				pusherChannel.bind('pusher:subscription_succeeded', function() {
					pusherChannel.trigger('client-update', { id: customerIDEx, client_id: clientIDEx, name: "orders", order_id: OrderID, payment:paymentEx,  message: "Your order has been accepted!" });
				});

				const orderListEx = document.querySelector('#expressnessingness');
					let rowhan = orderListEx.querySelector('tr[data-id= ' + OrderID + ']');
					orderListEx.removeChild(rowhan);
			
			} 
			else {

				var updatesCOD = {};
				updatesCOD['orders/' + OrderID + '/status'] = "accepted";
				database.update(updatesCOD).then(function() {

					var pusher = new Pusher('4de9228ab3e254f06ee8', {
						cluster: 'ap1',
						authEndpoint: '/aquae4/pages/auth.php'
					});
					pusherChannel = pusher.subscribe("private-update");

					pusherChannel.bind('pusher:subscription_succeeded', function() {
						pusherChannel.trigger('client-update', { id: customerIDEx, client_id: clientIDEx, name: "orders", order_id: OrderID, payment:paymentEx,  message: "Your order has been accepted!" });
					});

				});

				const orderListEx = document.querySelector('#expressnessingness');
					let rowhan = orderListEx.querySelector('tr[data-id= ' + OrderID + ']');
					orderListEx.removeChild(rowhan);

			}
		});
}

function declineStatus(id, totalAmount, customerID, payment){

	var reason_order = document.getElementById("reason_order"+id).value;

	database.child("customers").orderByChild("customer_id").equalTo(customerID).once("value", snapshots => {
			
		let output = Object.keys(snapshots.val()).map(function(e) {
			return snapshots.val()[e];
		});


		if (payment == "Aquae Wallet") {	

			var custNewBal = parseInt(output[0].wallet) + parseInt(totalAmount);

			var custBal = {};
			custBal['customers/' + customerID + '/wallet'] = custNewBal.toString();
			database.update(custBal).then(function() {
				var updateStat = {};
				updateStat['orders/' + id + '/status'] = "declined";
				database.update(updateStat).then(function() {
					var addReason = {};
					addReason['orders/' + id + '/reason'] = reason_order.trim();
					database.update(addReason).then(function() {

						reload_page();

						var pusher = new Pusher('4de9228ab3e254f06ee8', {
							cluster: 'ap1',
							authEndpoint: '/aquae4/pages/auth.php'
						});
						pusherChannel = pusher.subscribe("private-update");

						pusherChannel.bind('pusher:subscription_succeeded', function() {
							pusherChannel.trigger('client-update', { id: customerID, name: "orders", order_id: id, payment:payment, message: "Your order has been declined."});
						});
					});
				});
			});

			const orderList = document.querySelector('#orders');
			let row = orderList.querySelector('tr[data-id= ' + id + ']');
			orderList.removeChild(row);

		}
		else {
			
			var updateStat = {};
			updateStat['orders/' + id + '/status'] = "declined";
			database.update(updateStat).then(function() {
				var addReason = {};
				addReason['orders/' + id + '/reason'] = reason_order.trim();
				database.update(addReason).then(function() {

					// reload_page();

					var pusher = new Pusher('4de9228ab3e254f06ee8', {
						cluster: 'ap1',
						authEndpoint: '/aquae4/pages/auth.php'
					});
					pusherChannel = pusher.subscribe("private-update");

					pusherChannel.bind('pusher:subscription_succeeded', function() {
						pusherChannel.trigger('client-update', { id: customerID, name: "orders", order_id: id, payment:payment, message: "Your order has been declined."});
					});

				});
			});

			const orderList = document.querySelector('#orders');
			let row = orderList.querySelector('tr[data-id= ' + id + ']');
			orderList.removeChild(row);
		}

	});

}

function declineStatusExpress(IDOrder, IDtotalAmount, IDcustomer, IDpayment){

	var reason_orderID = document.getElementById("reason_ordering"+IDOrder).value;

	database.child("customers").orderByChild("customer_id").equalTo(IDcustomer).once("value", snapshots => {
			
		let outputID = Object.keys(snapshots.val()).map(function(e) {
			return snapshots.val()[e];
		});


		if (IDpayment == "Aquae Wallet") {	

			var custNewBalOrder = parseInt(outputID[0].wallet) + parseInt(IDtotalAmount);

			var custBalDecline = {};
			custBalDecline['customers/' + IDcustomer + '/wallet'] = custNewBalOrder.toString();
			database.update(custBalDecline).then(function() {

				var updateStatEx = {};
				updateStatEx['orders/' + IDOrder + '/status'] = "declined";
				database.update(updateStatEx).then(function() {

					var addReasonEx = {};
					addReasonEx['orders/' + IDOrder + '/reason'] = reason_orderID.trim();
					database.update(addReasonEx).then(function() {

						reload_page();

						var pusher = new Pusher('4de9228ab3e254f06ee8', {
							cluster: 'ap1',
							authEndpoint: '/aquae4/pages/auth.php'
						});
						pusherChannel = pusher.subscribe("private-update");

						pusherChannel.bind('pusher:subscription_succeeded', function() {
							pusherChannel.trigger('client-update', { id: IDcustomer, name: "orders", order_id: IDOrder, payment:IDpayment, message: "Your order has been declined."});
						});
					});
				});
			});

			const orderList = document.querySelector('#expressnessingness');
			let row = orderList.querySelector('tr[data-id= ' + IDOrder + ']');
			orderList.removeChild(row);

		}
		else {
			
			var updateStat = {};
			updateStat['orders/' + id + '/status'] = "declined";
			database.update(updateStat).then(function() {
				var addReason = {};
				addReason['orders/' + id + '/reason'] = reason_order.trim();
				database.update(addReason).then(function() {

					var pusher = new Pusher('4de9228ab3e254f06ee8', {
						cluster: 'ap1',
						authEndpoint: '/aquae4/pages/auth.php'
					});
					pusherChannel = pusher.subscribe("private-update");

					pusherChannel.bind('pusher:subscription_succeeded', function() {
						pusherChannel.trigger('client-update', { id: IDcustomer, name: "orders", order_id: IDOrder, payment:IDpayment, message: "Your order has been declined."});
					});

				});
			});

			const orderList = document.querySelector('#expressnessingness');
			let row = orderList.querySelector('tr[data-id= ' + IDOrder + ']');
			orderList.removeChild(row);
		}

	});

}


		// var userDataRef = database.child("orders").orderByChild("status").equalTo("processing").on("child_added", snapshot => {
		// 		// snapshot.forEach(function(childSnapshot) {
		// 	var childKey = snapshot.key;
		// 	var childData = snapshot.val();


		// 	firebase.database().ref("customers").orderByChild("customer_id").equalTo(childData.customer_id).once("value", snapshots => {
		// 	snapshots.forEach(function(childSnapshots) {
		// 	  var keys = childSnapshots.key;
		// 	  var childDatas = childSnapshots.val();


		// 	  firebase.database().ref("clients").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id")).once("value", snapshotss => {
			
		// 		  var childDatass = snapshotss.val(); 

		// 		  let output4 = Object.keys(childDatass).map(function(e) {
		// 				return childDatass[e];
		// 		});
			 

		// 		let output = Object.keys(childData).map(function(e) {
		// 				return childData[e];
						
		// 		});

		// 		let output1 = Object.keys(output[3]).map(function(e) {
		// 				return output[3][e];
						
		// 		});

		// 		let output2 = Object.keys(output1[0]).map(function(e) {
		// 				return output1[0][e];
						
		// 		});

		// 		let output3 = Object.keys(output2[0]).map(function(e) {
		// 				return output2[0][e];
						
		// 		});

				

		// 	if(childData.client_id == sessionStorage.getItem("client_id")){

		// 		// var first = childDatas.firstname.charAt(0).toUpperCase() + childDatas.firstname.slice(1);
		// 		// var last = childDatas.lastname.charAt(0).toUpperCase() + childDatas.lastname.slice(1);
		// 		// var product = Object.keys(output[3])[0].charAt(0).toUpperCase() + Object.keys(output[3])[0].slice(1);
		// 		// var water = output2[1].charAt(0).toUpperCase() + output2[1].slice(1);
		// 		// var service = Object.keys(output1[0])[0].charAt(0).toUpperCase() + Object.keys(output1[0])[0].slice(1);



		//   $('#acceptedOrders').append(` 
		//   	<tr class="gradeU">
  //                <input type="hidden" name="order_id" value="">
  //                <td>`+childDatas.firstname+` `+childDatas.lastname+ `</td>
  //          		 <td>`+childData.delivery_address+`</td> 
	 //             <td>`+childData.order_time+`</td>
	 //             <td><button class="btn btn-success" data-toggle="modal" data-target="#acceptedDet`+childData.order_id+`">Details</button></td>
	             
	 //            </tr>`);
		//   	$('#accepted_modal').append(` 
		// 	  	<div class="modal fade" id="accepted_orders`+childData.order_id+`" role="dialog" style="margin-bottom:10px;">
	 //              <div class="modal-dialog">
	 //                <div class="modal-content">
	 //                  <div class="modal-header" style="background-color: #0275d8;">
	 //                    <button type="button" class="close" data-dismiss="modal">&times;</button>
	 //                    <h4 class="modal-title" style="color:white;">Reason</h4>
	 //                  </div>
	 //                  <div class="modal-body">
	 //                      <div class="form-group">
	 //                      <span>Reason for refusing the order:</span>
	                      
	 //                      </div>
	 //                  </div>
	 //                  <div class="modal-footer">
	 //                      <button  class="btn btn-default" data-dismiss="modal">Ok</button>
	 //                  </div>
	 //                </div>
	 //             </div>`);

		//   	$('#accepted_modal').append(` 
		// 		   <div class="modal fade" id="acceptedDet`+childData.order_id+`" role="dialog">
  //                   <div class="modal-dialog">
  //                     <div class="modal-content">
  //                       <div class="modal-header">
  //                         <button type="button" class="close" data-dismiss="modal">&times;</button>
  //                         <h4 class="modal-title">Details</h4>
  //                       </div>
  //                       <div class="modal-body">
  //                           <div class="form-group">
  //                              <table class="table table-striped">
  //                              <thead>
  //                                  	<tr>
  //                                  		<td>Product</td>
  //                                  		<td>Water Type</td>
  //                                  		<td>Service</td>
  //                                  		<td>Quantity</td>
  //                                  		<td>Payment</td>
  //                                  		<td>Amount</td>
  //                                  	</tr>
  //                              	</thead>
  //                               <tbody>
  //                               	<tr>
  //                               		<th>`+Object.keys(output[3])[0]+`</th>
  //                               		<th>`+output2[1]+`</th>
  //                               		<th>`+Object.keys(output1[0])[0]+`</th>
  //                               		<th>`+output3[0]+`</th>
  //                               		<th>`+childData.payment+`</th>
		// 								<th>₱`+childData.total_amount+`</th>
  //                               	</tr>
  //                               </tbody>
  //                              </table>
  //                           </div>
  //                       </div>
  //                       <div class="modal-footer">
  //                        <input type="hidden" name="prod_id" id="prod_id">
  //                           <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
  //                       </div>
  //                     </div>
                      
  //                   </div>
  //                 </div>
		// 	              `);

		// 				}
		// 			});

		// 		});
		// 	});
		// });

database.child("orders").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id")).on("value", snapshot => {

			if (snapshot.exists()) {
				$('#acceptedOrders tr').remove();
				// $('#chings tr').remove();

				snapshot.forEach(function(childSnapshot) {
					var childData = childSnapshot.val();
					if (childData.status == "processing") {

						database.child("customers").orderByChild("customer_id").equalTo(childData.customer_id).once("value", snapshots => {

							var content = '';	
							var childDatas = snapshots.val();

							let output = Object.keys(childDatas).map(function(e) {
									return childDatas[e];
							});

							// console.log(childData);

							content +='<tr>';
			                content += '<td>'+childData.client_id+'</td>';
			                content += '<td>'+childData.order_time+'</td>';
			                content += '<td>'+output[0].firstname+' '+output[0].lastname+'</td>';
			                content += '<td>'+childData.delivery_address+'</td>';
			                content += '<td><button class="btn btn-success" data-toggle="modal" data-target="#detailsmods'+childData.order_id+'">Details</button></td>';
			                content += '</tr>';

			                $('#acceptedOrders').append(content);

			     			
			                 $('#accepted_modal').append(`

							   <div class="modal fade" id="detailsmods`+childData.order_id+`" role="dialog">
		                        <div class="modal-dialog">
		                          <div class="modal-content">
		                            <div class="modal-header">
		                              <button type="button" class="close" data-dismiss="modal">&times;</button>
		                              <h4 class="modal-title">Details</h4>
		                            </div>
		                            <div class="modal-body">
		                                <div class="form-group">
		                                   <table class="table table-striped">
		                                   <thead>
			                                   	<tr>
			                                   		<td>Product</td>
			                                   		<td>Water Type</td>
			                                   		<td>Refill (quantity)</td>
			                                   		<td>Purchase (quantity)</td>
			                                   	</tr>
		                                   	</thead>
		                                    <tbody id="item`+childData.order_id+`">
		                                    	`+detailsProd(childData)+`
		                                    </tbody>
		                      				<tfoot>
		                      					<tr>
													<td></td>
			                                   		<td></td>
			                                   		<td><b>Total:</b></td>
			                                   		<td><b><u>₱`+childData.total_amount+`</u></b></td>

			                                   	</tr>
			                                </tfoot>
		                                   </table>
		                                   <h4>Payment: <b><u>`+childData.payment+`</u></b></h4>
		                                   <h4>Note: <i>`+childData.notes+`</i></h4>
		                                </div>
		                            </div>
		                            <div class="modal-footer">
		                             <input type="hidden" name="prod_id" id="prod_id">
		                                <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
		                            </div>
		                          </div>
		                          
		                        </div>
		                      </div>`); 

		                       $('#modalforcancel').append(` 

					    <div class="modal fade" id="declineOrder`+childData.order_id+`" role="dialog" style="margin-bottom:10px;">
			              <div class="modal-dialog">
			                <div class="modal-content">
			                  <div class="modal-header" style="background-color: #d9534f;">
			                    <button type="button" class="close" data-dismiss="modal">&times;</button>
			                    <h4 class="modal-title" style="color:white;">Reason</h4>
			                  </div>
			                  <div class="modal-body">
			                      <div class="form-group">
			                      <span>Reason for refusing the order:</span>
			                         <textarea type="textarea" class="form-control" id="reason_order`+childData.order_id+`" required> </textarea>                             
			                      
			                      </div>
			                  </div>                                                                  
			                  <div class="modal-footer">
			                      <button  class="btn btn-danger" data-dismiss="modal" onclick="declineStatus('`+childData.order_id+`','`+childData.total_amount+`','`+childData.customer_id+`','`+childData.payment+`')">Ok</button>
			                      <button  class="btn btn-default" data-dismiss="modal">Cancel</button>
			                  </div>
			                </div>
			             </div>`);   	


			     //                [childData.items].forEach(function(items) {
								// Object.keys(items).forEach(function(item) {

								// 	var refillQty = 0;
								// 	var purchaseQty = 0;

								// 	if ("refill" in Object.values(items)[0]) {
								// 		refillQty = Object.values(items)[0].refill.quantity;
								// 	}

								// 	if ("purchase" in Object.values(items)[0]) {
								// 		purchaseQty = Object.values(items)[0].purchase.quantity;
								// 	}

								// 	$("#item"+childData.order_id).append(`
								// 				<tr>
			     //                               		<td>`+item+`</td>
			     //                               		<td>`+Object.values(items)[0].water_type+`</td>
			     //                               		<td>`+refillQty+`</td>
			     //                               		<td>`+purchaseQty+`</td>
			     //                               	</tr>`);
								// 	});
								// });


			       

		                });
					}
				});

				
			}

		});

database.child("orders").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id")).on("value", snapshot => {

			if (snapshot.exists()) {
				$('#declineOrders tr').remove();

				snapshot.forEach(function(childSnapshot) {
					var childData = childSnapshot.val();
					if (childData.status == "declined") {

						database.child("customers").orderByChild("customer_id").equalTo(childData.customer_id).once("value", snapshots => {

							var content = '';	
							var childDatas = snapshots.val();

							let output = Object.keys(childDatas).map(function(e) {
									return childDatas[e];
							});

				
							content +='<tr>';
			                content += '<td>'+childData.order_id+'</td>';
			                content += '<td>'+childData.order_time+'</td>';
			                content += '<td>'+output[0].firstname+` `+output[0].lastname+'</td>';
			                content += '<td>'+childData.delivery_address+'</td>';
			                content += '<td><button class="btn btn-danger" data-toggle="modal" data-target="#declineOrder'+childData.order_id+'">View</button></td>';
			                content += '<td><button class="btn btn-success" data-toggle="modal" data-target="#detailsmodsss'+childData.order_id+'">Details</button></td>';
			                content += '</tr>';

			                $('#declineOrders').append(content);

			     
			                 $('#detalye').append(`

							   <div class="modal fade" id="detailsmodsss`+childData.order_id+`" role="dialog">
		                        <div class="modal-dialog">
		                          <div class="modal-content">
		                            <div class="modal-header">
		                              <button type="button" class="close" data-dismiss="modal">&times;</button>
		                              <h4 class="modal-title">Details</h4>
		                            </div>
		                            <div class="modal-body">
		                                <div class="form-group">
		                                   <table class="table table-striped">
		                                   <thead>
			                                   	<tr>
			                                   		<td>Product</td>
			                                   		<td>Water Type</td>
			                                   		<td>Refill (quantity)</td>
			                                   		<td>Purchase (quantity)</td>
			                                   	</tr>
		                                   	</thead>
		                                    <tbody id="item`+childData.order_id+`"></tbody>
		                      				<tfoot>
		                      					<tr>

													<td></td>
			                                   		<td></td>
			                                   		<td>`+childData.payment+`</td>
			                                   		<td>`+childData.total_amount+`</td>

			                                   	</tr>
			                                </tfoot>
		                                   </table>
		                                </div>
		                            </div>
		                            <div class="modal-footer">
		                             <input type="hidden" name="prod_id" id="prod_id">
		                                <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
		                            </div>
		                          </div>
		                          
		                        </div>
		                      </div>`); 

		                       $('#reason_cancel_order').append(` 

					    <div class="modal fade" id="declineOrder`+childData.order_id+`" role="dialog" style="margin-bottom:10px;">
			              <div class="modal-dialog">
			                <div class="modal-content">
			                  <div class="modal-header" style="background-color: #d9534f;">
			                    <button type="button" class="close" data-dismiss="modal">&times;</button>
			                    <h4 class="modal-title" style="color:white;">Reason</h4>
			                  </div>
			                  <div class="modal-body">
			                      <div class="form-group">
		                            	<h2>`+childData.reason+`</h2>
			                      </div>
			                  </div>                                                                  
			                  <div class="modal-footer">
			                      <button  class="btn btn-danger" data-dismiss="modal">Ok</button>
			                  </div>
			                </div>
			             </div>`);   	


			                    [childData.items].forEach(function(items) {
								Object.keys(items).forEach(function(item) {

									var refillQty = 0;
									var purchaseQty = 0;

									if ("refill" in Object.values(items)[0]) {
										refillQty = Object.values(items)[0].refill.quantity;
									}

									if ("purchase" in Object.values(items)[0]) {
										purchaseQty = Object.values(items)[0].purchase.quantity;
									}

									$("#item"+childData.order_id).append(`
												<tr>
			                                   		<td>`+item+`</td>
			                                   		<td>`+Object.values(items)[0].water_type+`</td>
			                                   		<td>`+refillQty+`</td>
			                                   		<td>`+purchaseQty+`</td>
			                                   	</tr>`);
									});
								});


			       

		                });
					}
				});

				
			}

		});



		// var userDataRef = database.child("orders").orderByChild("status").equalTo("decline").on("child_added", snapshot => {
		// 		// snapshot.forEach(function(childSnapshot) {
		// 	var childKey = snapshot.key;
		// 	var childData = snapshot.val();


		// 	firebase.database().ref("customers").orderByChild("customer_id").equalTo(childData.customer_id).once("value", snapshots => {
		// 	snapshots.forEach(function(childSnapshots) {
		// 	  var keys = childSnapshots.key;
		// 	  var childDatas = childSnapshots.val();


		// 	  firebase.database().ref("clients").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id")).once("value", snapshotss => {
			
		// 		  var childDatass = snapshotss.val(); 

		// 		  let output4 = Object.keys(childDatass).map(function(e) {
		// 				return childDatass[e];
		// 		});
			 

		// 		let output = Object.keys(childData).map(function(e) {
		// 				return childData[e];
						
		// 		});

		// 		let output1 = Object.keys(output[3]).map(function(e) {
		// 				return output[3][e];
						
		// 		});

		// 		let output2 = Object.keys(output1[0]).map(function(e) {
		// 				return output1[0][e];
						
		// 		});

		// 		let output3 = Object.keys(output2[0]).map(function(e) {
		// 				return output2[0][e];
						
		// 		});


		// 	if(childData.client_id == sessionStorage.getItem("client_id")){

		// 		// var first = childDatas.firstname.charAt(0).toUpperCase() + childDatas.firstname.slice(1);
		// 		// var last = childDatas.lastname.charAt(0).toUpperCase() + childDatas.lastname.slice(1);
		// 		// var product = Object.keys(output[3])[0].charAt(0).toUpperCase() + Object.keys(output[3])[0].slice(1);
		// 		// var water = output2[1].charAt(0).toUpperCase() + output2[1].slice(1);
		// 		// var service = Object.keys(output1[0])[0].charAt(0).toUpperCase() + Object.keys(output1[0])[0].slice(1);    


		// 		// console.log(output[3]);

		//   $('#declineOrders').append(` 
		//   	<tr class="gradeU">
  //               <input type="hidden" name="order_id" value="">
  //               <td>`+childDatas.firstname+` `+childDatas.lastname+`</td>
  //               <td>`+childData.delivery_address+`</td> 
	 //             <td>`+childData.order_time+`</td>
 	// 			 <td><button class="btn btn-warning" data-toggle="modal" data-target="#hello`+childData.order_id+`">Reason</button></td>
	 //             <td><button class="btn btn-success" data-toggle="modal" data-target="#acceptedDet`+childData.order_id+`">Details</button></td>
	 //             <td>
	 //  				<div class="p-3 mb-2 bg-danger  text-white" style="width:70%; text-align: center;">DECLINED</div>
	 //             </td>
	 //            </tr>`);

		//   $('#address').append(` 
  //           <div class="modal fade" id="acceptedDet`+childData.order_id+`" role="dialog">
  //                   <div class="modal-dialog">
  //                     <div class="modal-content">
  //                       <div class="modal-header">
  //                         <button type="button" class="close" data-dismiss="modal">&times;</button>
  //                         <h4 class="modal-title">Details</h4>
  //                       </div>
  //                       <div class="modal-body">
  //                           <div class="form-group">
  //                              <table class="table table-striped">
  //                              <thead>
  //                                  	<tr>
  //                                  		<td>Product</td>
  //                                  		<td>Water Type</td>
  //                                  		<td>Service</td>
  //                                  		<td>Quantity</td>
  //                                  		<td>Payment</td>
  //                                  		<td>Amount</td>
  //                                  	</tr>
  //                              	</thead>
  //                               <tbody>
  //                               	<tr>
  //                               		<th>`+Object.keys(output[3])[0]+`</th>
  //                               		<th>`+output2[1]+`</th>
  //                               		<th>`+Object.keys(output1[0])[0]+`</th>
  //                               		<th>`+output3[0]+`</th>
  //                               		<th>`+childData.payment+`</th>
		// 								<th>₱`+childData.total_amount+`</th>
  //                               	</tr>
  //                               </tbody>
  //                              </table>
  //                           </div>
  //                       </div>
  //                       <div class="modal-footer">
  //                        <input type="hidden" name="prod_id" id="prod_id">
  //                           <button type="button" class="btn btn-primary" data-dismiss="modal">Okay</button>
  //                       </div>
  //                     </div>
                      
  //                   </div>
  //                 </div>`);

		// 		   $('#reason_cancel_order').append(` 
		//             <div class="modal fade" id="hello`+childData.order_id+`" role="dialog" style="margin-bottom:10px;">
		//               <div class="modal-dialog">
		//                 <div class="modal-content">
		//                   <div class="modal-header" style="background-color: #d9534f;">
		//                     <button type="button" class="close" data-dismiss="modal">&times;</button>
		//                     <h4 class="modal-title" style="color:white;">Reason</h4>
		//                   </div>
		//                   <div class="modal-body">
		//                       <div class="form-group">
		//                             <h2>`+childData.reason+`</h2>                                
		                      
		//                       </div>
		//                   </div>
		//                   <div class="modal-footer">
		//                       <button  class="btn btn-default" data-dismiss="modal">Okay</button>
		//                   </div>
		//                 </div>
		//              </div>`);

		// 				}
		// 			});

		// 		});
		// 	});
		// });

		database.child("orders").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id")).on("value", snapshot => {

			if (snapshot.exists()) {
				// $('#orders tr').remove();

				snapshot.forEach(function(childSnapshot) {
					var childData = childSnapshot.val();
					if (childData.status == "confirmed") {

						database.child("customers").orderByChild("customer_id").equalTo(childData.customer_id).once("value", snapshots => {

							var content = '';	
							var childDatas = snapshots.val();

							let output = Object.keys(childDatas).map(function(e) {
									return childDatas[e];
							});

				
							content +='<tr>';
			                content += '<td>'+childData.order_id+'</td>';
			                content += '<td>'+childData.order_time+'</td>';
			                content += '<td>'+output[0].firstname+` `+output[0].lastname+'</td>';
			                content += '<td>'+childData.delivery_address+'</td>';
			                content += '<td><button class="btn btn-success" data-toggle="modal" data-target="#detailsmodss'+childData.order_id+'">Details</button></td>';
			                content += '<td>COMPLETED</td>';
			                content += '</tr>';

			                $('#order_history').append(content);

			     
			                 $('#orderhistMod').append(`

							   <div class="modal fade" id="detailsmodss`+childData.order_id+`" role="dialog">
		                        <div class="modal-dialog">
		                          <div class="modal-content">
		                            <div class="modal-header">
		                              <button type="button" class="close" data-dismiss="modal">&times;</button>
		                              <h4 class="modal-title">Details</h4>
		                            </div>
		                            <div class="modal-body">
		                                <div class="form-group">
		                                   <table class="table table-striped">
		                                   <thead>
			                                   	<tr>
			                                   		<td>Product</td>
			                                   		<td>Water Type</td>
			                                   		<td>Refill (quantity)</td>
			                                   		<td>Purchase (quantity)</td>
			                                   	</tr>
		                                   	</thead>
		                                    <tbody id="item`+childData.order_id+`"></tbody>
		                      				<tfoot>
		                      					<tr>

													<td></td>
			                                   		<td></td>
			                                   		<td>`+childData.payment+`</td>
			                                   		<td>`+childData.total_amount+`</td>

			                                   	</tr>
			                                </tfoot>
		                                   </table>
		                                </div>
		                            </div>
		                            <div class="modal-footer">
		                             <input type="hidden" name="prod_id" id="prod_id">
		                                <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
		                            </div>
		                          </div>
		                          
		                        </div>
		                      </div>`); 

		                       

			                    [childData.items].forEach(function(items) {
								Object.keys(items).forEach(function(item) {

									var refillQty = 0;
									var purchaseQty = 0;

									if ("refill" in Object.values(items)[0]) {
										refillQty = Object.values(items)[0].refill.quantity;
									}

									if ("purchase" in Object.values(items)[0]) {
										purchaseQty = Object.values(items)[0].purchase.quantity;
									}

									$("#item"+childData.order_id).append(`
												<tr>
			                                   		<td>`+item+`</td>
			                                   		<td>`+Object.values(items)[0].water_type+`</td>
			                                   		<td>`+refillQty+`</td>
			                                   		<td>`+purchaseQty+`</td>
			                                   	</tr>`);
									});
								});


			       

		                });
					}
				});

				
			}

		});

	database.child("orders").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id")).on("value", snapshot => {

			if (snapshot.exists()) {
				// $('#orders tr').remove();

				snapshot.forEach(function(childSnapshot) {
					var childData = childSnapshot.val();
					if (childData.status == "delivered") {

						database.child("customers").orderByChild("customer_id").equalTo(childData.customer_id).once("value", snapshots => {

							var content = '';	
							var childDatas = snapshots.val();

							let output = Object.keys(childDatas).map(function(e) {
									return childDatas[e];
							});

				
							content +='<tr>';
			                content += '<td>'+childData.order_id+'</td>';
			                content += '<td>'+childData.order_time+'</td>';
			                content += '<td>'+output[0].firstname+` `+output[0].lastname+'</td>';
			                content += '<td>'+childData.delivery_address+'</td>';
			                content += '<td><button class="btn btn-success" data-toggle="modal" data-target="#detailsmodss'+childData.order_id+'">Details</button></td>';
			                content += '<td>PENDING</td>';
			                content += '</tr>';

			                $('#order_history').append(content);

			     
			                 $('#orderhistMod').append(`

							   <div class="modal fade" id="detailsmodss`+childData.order_id+`" role="dialog">
		                        <div class="modal-dialog">
		                          <div class="modal-content">
		                            <div class="modal-header">
		                              <button type="button" class="close" data-dismiss="modal">&times;</button>
		                              <h4 class="modal-title">Details</h4>
		                            </div>
		                            <div class="modal-body">
		                                <div class="form-group">
		                                   <table class="table table-striped">
		                                   <thead>
			                                   	<tr>
			                                   		<td>Product</td>
			                                   		<td>Water Type</td>
			                                   		<td>Refill (quantity)</td>
			                                   		<td>Purchase (quantity)</td>
			                                   	</tr>
		                                   	</thead>
		                                    <tbody id="item`+childData.order_id+`"></tbody>
		                      				<tfoot>
		                      					<tr>

													<td></td>
			                                   		<td></td>
			                                   		<td>`+childData.payment+`</td>
			                                   		<td>`+childData.total_amount+`</td>

			                                   	</tr>
			                                </tfoot>
		                                   </table>
		                                </div>
		                            </div>
		                            <div class="modal-footer">
		                             <input type="hidden" name="prod_id" id="prod_id">
		                                <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
		                            </div>
		                          </div>
		                          
		                        </div>
		                      </div>`); 

		                       

			                    [childData.items].forEach(function(items) {
								Object.keys(items).forEach(function(item) {

									var refillQty = 0;
									var purchaseQty = 0;

									if ("refill" in Object.values(items)[0]) {
										refillQty = Object.values(items)[0].refill.quantity;
									}

									if ("purchase" in Object.values(items)[0]) {
										purchaseQty = Object.values(items)[0].purchase.quantity;
									}

									$("#item"+childData.order_id).append(`
												<tr>
			                                   		<td>`+item+`</td>
			                                   		<td>`+Object.values(items)[0].water_type+`</td>
			                                   		<td>`+refillQty+`</td>
			                                   		<td>`+purchaseQty+`</td>
			                                   	</tr>`);
									});
								});


			       

		                });
					}
				});

				
			}

		});

		

		// var userDataRef = database.child("orders").orderByChild("status").equalTo("delivered").on("child_added", snapshot => {
		// 		// snapshot.forEach(function(childSnapshot) {
		// 	var childKey = snapshot.key;
		// 	var childData = snapshot.val();


		// 	firebase.database().ref("customers").orderByChild("customer_id").equalTo(childData.customer_id).once("value", snapshots => {
		// 	snapshots.forEach(function(childSnapshots) {
		// 	  var keys = childSnapshots.key;
		// 	  var childDatas = childSnapshots.val();
			
		// 		  // var childDatass = snapshotss.val(); 

		// 		//   let output4 = Object.keys(childDatass).map(function(e) {
		// 		// 		return childDatass[e];
		// 		// });
			 

		// 		let output = Object.keys(childData).map(function(e) {
		// 				return childData[e];
						
		// 		});

		// 		let output1 = Object.keys(output[3]).map(function(e) {
		// 				return output[3][e];
						
		// 		});

		// 		let output2 = Object.keys(output1[0]).map(function(e) {
		// 				return output1[0][e];
						
		// 		});

		// 		let output3 = Object.keys(output2[0]).map(function(e) {
		// 				return output2[0][e];
						
		// 		});


		// 	if(childData.client_id == sessionStorage.getItem("client_id")){

		// 		// var first = childDatas.firstname.charAt(0).toUpperCase() + childDatas.firstname.slice(1);
		// 		// var last = childDatas.lastname.charAt(0).toUpperCase() + childDatas.lastname.slice(1);
		// 		// var product = Object.keys(output[3])[0].charAt(0).toUpperCase() + Object.keys(output[3])[0].slice(1);
		// 		// var water = output2[1].charAt(0).toUpperCase() + output2[1].slice(1);
		// 		// var service = Object.keys(output1[0])[0].charAt(0).toUpperCase() + Object.keys(output1[0])[0].slice(1);    
		// // $('#order_history').DataTable().row.add([


		// // 		''+childData.order_id, 
		// // 		''+childData.order_time,
		// // 		''+childData.order_id, 
		// // 		'Refill', 
		// // 		'50', 
		// // 		''+childData.payment, 
		// // 		''+childData.payment, 
		// // 		''+childData.payment,
		// // 		''+childData.status

		// // 	]).draw();
		// 		// console.log(water);


		// 		  $('#order_history').append(` 
		// 		  		<tr class="gradeU">
		//                 <input type="hidden" name="order_id" value="">
		//                 <td>`+childData.order_id+`</td>
		//                 <td>`+childDatas.firstname+ ` `+childDatas.lastname+ `</td> 
		// 	             <td>`+childData.delivery_address+`</td>
		// 	             <td>`+childData.order_time+`</td>
		// 	             <td><button class="btn btn-success" data-toggle="modal" data-target="#historyDet`+childData.order_id+`">Details</button></td>
		// 	             <td>`+childData.status.toUpperCase()+`</td>
		// 	            </tr>`);
		// 		   $('#orderhistMod').append(` 
		// 	            <div class="modal fade" id="historyDet`+childData.order_id+`" role="dialog">
		// 	                    <div class="modal-dialog">
		// 	                      <div class="modal-content">
		// 	                        <div class="modal-header">
		// 	                          <button type="button" class="close" data-dismiss="modal">&times;</button>
		// 	                          <h4 class="modal-title">Details</h4>
		// 	                        </div>
		// 	                        <div class="modal-body">
		// 	                            <div class="form-group">
		// 	                               <table class="table table-striped">
		// 	                               <thead>
		// 	                                   	<tr>
		// 	                                   		<td>Product</td>
		// 	                                   		<td>Water Type</td>
		// 	                                   		<td>Service</td>
		// 	                                   		<td>Quantity</td>
		// 	                                   		<td>Payment</td>
		// 	                                   		<td>Amount</td>
		// 	                                   	</tr>
		// 	                               	</thead>
		// 	                                <tbody>
		// 	                                	<tr>
		// 	                                		<th>`+Object.keys(output[3])[0]+`</th>
		// 	                                		<th>`+output2[1]+`</th>
		// 	                                		<th>`+Object.keys(output1[0])[0]+`</th>
		// 	                                		<th>`+output3[0]+`</th>
		// 	                                		<th>`+childData.payment+`</th>
		// 											<th>₱`+childData.total_amount+`</th>
		// 	                                	</tr>
		// 	                                </tbody>
		// 	                               </table>
		// 	                            </div>
		// 	                        </div>
		// 	                        <div class="modal-footer">
		// 	                         <input type="hidden" name="prod_id" id="prod_id">
		// 	                            <button type="button" class="btn btn-primary" data-dismiss="modal">Okay</button>
		// 	                        </div>
		// 	                      </div>
			                      
		// 	                    </div>
		// 	                  </div>`);
		// 				}
		// 			});
		// 		});
		// 	});




		 

		var userDataRefq = firebase.database().ref("cash_ins").orderByChild("status").equalTo("verified").on("value", snapshotq => {
			// userDataRefq.once("value").then(function(snapshotq) {
			
			var totalAmount = 0;


			snapshotq.forEach(function(childSnapshotq) {
			  var keyq = childSnapshotq.keyq;
			  var childDataq = childSnapshotq.val();  

			
			
		var userDataRef = firebase.database().ref("customers").orderByChild("customer_id").equalTo(childDataq.customer_id).once("value", snapshots => {
			// userDataRef.once("value").then(function(snapshots) {


			snapshots.forEach(function(childSnapshot) {
			  var key = childSnapshot.key;
			  var childData = childSnapshot.val();   

		  // var val = Math.floor(1000 + Math.random() * 9000);
			
			// console.log(childDataq.amount);

			$('#customer_history').DataTable().row.add([
				''+childDataq.cash_in_id, 
				''+childDataq.transaction_code,
				''+childData.lastname+','+childData.firstname,
				''+childDataq.verified_date,
				''+childDataq.amount

			]).draw();

			
			
			totalAmount += parseInt(childDataq.amount);
			// console.log(totalAmount);
			
			document.getElementById("totalAmount").innerHTML = totalAmount.toString();


					});
				});
			});
			
		});

		var userDataRefq = firebase.database().ref("orders").orderByChild("status").equalTo("confirmed").on("child_added", snapshotq => {
			// userDataRefq.once("value").then(function(snapshotq) {
				
			// snapshotq.forEach(function(childSnapshotq) {
			  var keyq = snapshotq.keyq;
			  var childDataq = snapshotq.val();  

		var userDataRef = firebase.database().ref("customers").orderByChild("customer_id").equalTo(childDataq.customer_id).once("value", snapshots => {
			// userDataRef.once("value").then(function(snapshots) {
			snapshots.forEach(function(childSnapshot) {
			  var key = childSnapshot.key;
			  var childData = childSnapshot.val();  

			  // console.log(childDataq);
			  // console.log(childData); 

		  // var val = Math.floor(1000 + Math.random() * 9000);

			$('#ExHistory').append(`
					  	 
	        	<tr class="gradeU">
	                <td>`+childDataq.order_id+`</td>
	                <td>`+childDataq.order_time+`</td>
	                <td>`+childData.firstname+` `+childData.lastname+`</td>
	                <td>`+childDataq.delivery_address+`</td>
	                <td><button class="btn btn-success" data-toggle="modal" data-target="#sexpress_history_details`+childDataq.order_id+`">View</button></td>
	         	</tr>

	     	`);
	     	$('#history_Details').append(`
	         	<div class="modal fade" id="sexpress_history_details`+childDataq.order_id+`" role="dialog">
		                        <div class="modal-dialog">
		                          <div class="modal-content">
		                            <div class="modal-header">
		                              <button type="button" class="close" data-dismiss="modal">&times;</button>
		                              <h4 class="modal-title">Details</h4>
		                            </div>
		                            <div class="modal-body">
		                                <div class="form-group">
		                                   <table class="table table-striped">
		                                   <thead>
			                                   	<tr>
			                                   		<th>Product</th>
			                                   		<th>Water Type</th>
			                                   		<th>Refill (quantity)</th>
			                                   		<th>Purchase (quantity)</th>
			                                   	</tr>
		                                   	</thead>
		                                    <tbody id="item`+childDataq.order_id+`">
		                                    	`+detailsProd(childDataq)+`
		                                    </tbody>
			                                <tfoot>
		                      					<tr>
													<td></td>
			                                   		<td></td>
			                                   		<td><h2><b>Total:</b></h2></td>
			                                   		<td><h2><b><u>₱`+childDataq.total_amount+`</u></b></h2></td>

			                                   	</tr>
			                                </tfoot>
		                                   </table>
		                                   <h4>Payment: <b><u>`+childDataq.payment+`</u></b></h4>
		                                   <h4>Notes:`+childDataq.notes+`</h4>
		                                </div>
		                            </div>
		                            <div class="modal-footer">
		                             <input type="hidden" name="prod_id" id="prod_id">
		                                <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
		                            </div>
		                          </div>
		                          
		                        </div>
		                      </div>
	     						`);

			
					});
				});
			});

		var userDataRefq = firebase.database().ref("cash_ins").orderByChild("status").equalTo("cancelled").on("child_added", snapshotq => {
			// userDataRefq.once("value").then(function(snapshotq) {
				
			// snapshotq.forEach(function(childSnapshotq) {
			  var keyq = snapshotq.keyq;
			  var childDataq = snapshotq.val();  

		var userDataRef = firebase.database().ref("customers").orderByChild("customer_id").equalTo(childDataq.customer_id).once("value", snapshots => {
			// userDataRef.once("value").then(function(snapshots) {
			snapshots.forEach(function(childSnapshot) {
			  var key = childSnapshot.key;
			  var childData = childSnapshot.val();  

			  // console.log(childDataq);
			  // console.log(childData); 

		  // var val = Math.floor(1000 + Math.random() * 9000);

			$('#cancelled_request').append(`
					  	 
	        	<tr class="gradeU" data-id='`+childDataq.cash_in_id+`'>
	                <td>`+childDataq.transaction_code+`</td>
	                <td>`+childDataq.cash_in_id+`</td>
	                <td>`+childData.firstname+` `+childData.lastname+`</td>
	                <td><button class="btn btn-warning" data-toggle="modal" data-target="#reason_for_cancellings`+childDataq.cash_in_id+`">Reason</button></td>
	                <td><button class="btn btn-success" data-toggle="modal" data-target="#receiptss`+childDataq.cash_in_id+`">Receipt</button></td>
	                <td>P`+childDataq.amount+`</td>
	         	</tr>

	     	`);
	     	$('#receiptss').append(`
	         	<div class="modal fade" id="receiptss`+childDataq.cash_in_id+`" role="dialog" style="margin-bottom:10px;" hidden>
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header" style="background-color: #337ab7;">
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                          <h4 class="modal-title">Customer's Receipt</h4>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                               <center>
                                <img src="`+childDataq.receipt+`" height="500px;" width="400px;">
                                </center>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button  class="btn btn-primary" data-dismiss="modal">Okay</button>
                        </div>
                      </div>
                  </div> 
          		</div>

          		<div class="modal fade" id="reason_for_cancellings`+childDataq.cash_in_id+`" role="dialog" style="margin-bottom:10px;" hidden>
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header" style="background-color: #337ab7;">
                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                          <h4 class="modal-title">Reason for cancelling</h4>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                               <center>
                                <h2>`+childDataq.reason_for_cancelling+`</h2>
                                </center>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button  class="btn btn-primary" data-dismiss="modal">Okay</button>
                        </div>
                      </div>
                  </div> 
          		</div>
	     	`);

			
					});
				});
			});



			var userDataRef = firebase.database().ref("cash_ins").orderByChild("status").equalTo("request").on("child_added", snapshot => {
					
					  var key = snapshot.key;
					  var childData = snapshot.val();	
					  

				firebase.database().ref("customers").orderByChild("customer_id").equalTo(childData.customer_id).once("value", snapshots => {
					snapshots.forEach(function(childSnapshots) {
					  var keys = childSnapshots.key;
					  var childDatas = childSnapshots.val();

					 
					  $('#customer_request').append(`
					  	 
		                	<tr class="gradeU" data-id='`+childData.cash_in_id+`'>
				                <td>`+childData.transaction_code+`</td>
				                <td>`+childData.cash_in_id+`</td>
				                <td>`+childDatas.firstname+ ' ' +childDatas.lastname+ `</td>
				                <td><button class="btn btn-success" data-toggle="modal" data-target="#receipt`+childData.cash_in_id+`">Receipt</button></td>
				                <td>P`+childData.amount+`</td>
				                <td>
				                    <button class="btn btn-primary" data-toggle="modal" data-target="#addWallet`+childData.cash_in_id+`">Add Wallet</button>
				                    <button class="btn btn-danger" data-toggle="modal" data-target="#cancelRequest`+childData.cash_in_id+`">Cancel Request</button>
				                </td>
				         	</tr>
			         	`);
					  $('#modal_of').append(`
					  	<div class="modal fade" id="addWallet`+childData.cash_in_id+`" role="dialog" style="margin-bottom:10px;" hidden>
	                            <div class="modal-dialog">
	                              <div class="modal-content">
	                                <div class="modal-header" style="background-color: #337ab7;">
	                                  <button type="button" class="close" data-dismiss="modal">&times;</button>
	                                  <h4 class="modal-title">Add Wallet</h4>
	                                </div>
	                                <div class="modal-body">
	                                    <div class="form-group">
	                                          <input type="text" readonly class="form-control" id="walletAdd`+childData.cash_in_id+`" value="`+childData.amount+`"></input>
	                                    </div>
	                                </div>
	                                <div class="modal-footer">
	                                    <button  class="btn btn-primary" onclick="addWallet('`+childDatas.wallet+`','`+childData.customer_id+`','`+childData.cash_in_id+`')">Confirm</button>
	                                    <button  class="btn btn-default" data-dismiss="modal">Cancel</button>
	                                </div>
	                              </div>
		                      </div> 
		              		</div>

		              		<div class="modal fade" id="cancelRequest`+childData.cash_in_id+`" role="dialog" style="margin-bottom:10px;" hidden>
	                            <div class="modal-dialog">
	                              <div class="modal-content">
	                                <div class="modal-header" style="background-color: #DC143C;">
	                                  <button type="button" class="close" data-dismiss="modal">&times;</button>
	                                  <h4 class="modal-title">Cancel Request</h4>
	                                </div>
	                                <div class="modal-body">
	                                    <div class="form-group">
	                                    Reason for refusing the request:<br><br>
	                                    	<center>
	                                    		<textarea type="text" class="form-control" id="reason`+childData.cash_in_id+`"></textarea>
	                                         	
	                                         </center>
	                                    </div>
	                                </div>
	                                <div class="modal-footer">
	                                    <button  class="btn btn-danger" onclick="cancelRequest('`+childData.cash_in_id+`');">Yes</button>
	                                    <button  class="btn btn-default" data-dismiss="modal">No</button>
	                                </div>
	                              </div>
		                      </div> 
		              		</div>

		              		<div class="modal fade" id="receipt`+childData.cash_in_id+`" role="dialog" style="margin-bottom:10px;" hidden>
	                            <div class="modal-dialog">
	                              <div class="modal-content">
	                                <div class="modal-header" style="background-color: #337ab7;">
	                                  <button type="button" class="close" data-dismiss="modal">&times;</button>
	                                  <h4 class="modal-title">Customer's Receipt</h4>
	                                </div>
	                                <div class="modal-body">
	                                    <div class="form-group">
	                                       <center>
	                                        <img src="`+childData.receipt+`" height="500px;" width="400px;">
	                                        </center>
	                                    </div>
	                                </div>
	                                <div class="modal-footer">
	                                    <button  class="btn btn-primary" data-dismiss="modal">Okay</button>
	                                </div>
	                              </div>
		                      </div> 
		              		</div>


					  	`);


			
				
						});
					 });
				});

		// var userDataRef = firebase.database().ref("orders").orderByChild("status").equalTo("processing").on("child_added", snapshot => {
		// // userDataRef.once("value").then(function(snapshot) {
		// // snapshot.forEach(function(childSnapshot) {
		//   var key = snapshot.key;
		//   var childData = snapshot.val();    

		//   var userDataRef = firebase.database().ref("orders").orderByChild("status").equalTo("processing").on("child_added", snapshot => {
		// // userDataRef.once("value").then(function(snapshot) {
		// // snapshot.forEach(function(childSnapshot) {
		//   var key = snapshot.key;
		//   var childData = snapshot.val();    


		//   if(childData.client_id == sessionStorage.getItem("client_id")){

		// 	  $('#acceptedOrders').append(`
		// 	  	<tr class="gradeU">
	 //                <td>`+childData.order_id+`</td>
	 //                <td>`+childData.order_id+`</td>
	 //                <td>`+childData.order_id+`</td>
	 //                <td>`+childData.order_id+`</td>
	                
	 //            </tr>
  //           	`);
		// 		}
		// 	// });
		// 	// });

		// });
	
				

// function notification(){


// }					


function logout(){
	sessionStorage.clear();
}

	
function acct(){
	var email = document.getElementById("uname").value;
	var pword = document.getElementById("pwords").value;

	if(email == "admin" && pword == "admin"){
		window.location = "../Dashio/basic_table.php";
	}

	firebase.database().ref().child("clients").orderByChild("email").equalTo(email).once("value", function(snapshot) {
		if (snapshot.exists()) {
		    
		    	snapshot.forEach(function(childSnapshot) {

		    		var childData = childSnapshot.val();

		    		if (childData.password == pword){

		    			if(childData.status == "activate"){

			    			if (typeof(Storage) !== "undefined") {

			    				let output = Object.keys(childData).map(function(e) {
									return childData[e];
								});
								

								sessionStorage.setItem("client_id", childData.client_id);	
								sessionStorage.setItem("company", childData.company);
								sessionStorage.setItem("contact", childData.contact);
								sessionStorage.setItem("no_of_filter", childData.no_of_filter);
								sessionStorage.setItem("address", childData.address);
								sessionStorage.setItem("email", childData.email);
								sessionStorage.setItem("shipping_fee", childData.shipping_fee);
								sessionStorage.setItem("water_type", childData.water_type);
								sessionStorage.setItem("maximum_order", childData.maximum_order);
								sessionStorage.setItem("minimum_order", childData.minimum_order);
								sessionStorage.setItem("filesss", childData.files.store);

							 	
							}

							swal({
						            title: "Success",
						            text: "redirecting to home page...",
						            icon: "success",
						            button: false,
						            timer: 2500
						          }).then(function(){
						            window.location = "../pages/index.php";
						          });
							// window.location = "../pages/index.php";

		    			}else{
		    				swal({
						            text: "Please wait while your account activation is processed.",
						            icon: "warning",
						            button: "OK"
						          });
		    				}
		    		}
		    		else {
		    			swal({
				            title: "Oops!",
				            text: "Please input valid credentials.",
				            icon: "error",
				            button: "OK"
				          }).then(function(){
				            window.location = "index.php";
				          });
		    		}
		    	});
		    

		} else{
		    	swal({
		            title: "Oops!",
		            text: "Please input valid credentials.",
		            icon: "error",
		            button: "OK"
		          }).then(function(){
		            window.location = "index.php";
		          });
		}
	});
}
		
		// var tableOrder = document.getElementById("example");
		// var rowIndex = 1;

		// var userDataRef = firebase.database().ref("orders").orderByChild("status").equalTo("pending");
		// userDataRef.on("child_added", snapshot => {
		// // snapshot.forEach(function(childSnapshot) {
		//   var key = snapshot.key;
		//   var childData = snapshot.val();    

 
		// //   var val = Math.floor(1000 + Math.random() * 9000);

		// // $('#example').DataTable().row.add([
		// // 		''+val, 
		// // 		''+childData.order_id,
		// // 		''+childData.order_time, 
		// // 		'Refill', 
		// // 		'50', 
		
		// // 		''+childData.payment, 
		// // 		'<button class="btn btn-success" data-toggle="modal" data-target="#modeling">Address</button>', 
		// // 		'<button class="btn btn-primary" onclick="acceptStatus('+childData.order_id+')">ACCEPT</button><button class="btn btn-danger">DECLINE</button>'

		// // 	]).draw();


		//   $('#orders').append(` 
		//   	<tr class="gradeU">
  //               <input type="hidden" name="order_id" value="">
  //               <td>`+childData.order+`</td>
  //               <td>`+childData.order_id+`</td>
  //               <td>Purified</td>
  //               <td>Refill</td>
  //               <td>50</td>
  //               <td>`+childData.payment+`</td>
  //               <td><button class="btn btn-success" data-toggle="modal" data-target="#modeling">Address</button></td>
  //               <td>
  //                   <button class="btn btn-primary" onclick="acceptStatus('`+childData.order_id+`')">ACCEPT</button>
  //                   <button class="btn btn-danger" onclick="declineStatus('`+childData.order_id+`')">DECLINE</button>
  //               </td>
  //           </tr>`);
		   
		//  //    
		// 	// document.getElementById("notif_order").innerHTML = snapshot.numChildren();
	
		// 	// });

		// 	});
		



			// var table = document.getElementById("orders");
			// var rowIndex = 1;

			// var userDataRef = database.child("orders").orderByChild("status").equalTo("pending").on("child_added", snapshot => {
				// snapshot.forEach(function(childSnapshot) {
					// var childKey = snapshot.key;
					// var childData = snapshot.val();


					// firebase.database().ref("customers").orderByChild("customer_id").equalTo(childData.customer_id).on("value", snapshots => {
					// snapshots.forEach(function(childSnapshots) {
					  //var keys = childSnapshots.key;
					 //  var childDatas = snapshots.val();


					 //  firebase.database().ref("clients").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id")).on("value", snapshotss => {
					 
						//   var childDatass = snapshotss.val(); 

						//   let output5 = Object.keys(childDatas).map(function(e) {
						// 		return childDatas[e];
						// });
					 

						// let output4 = Object.keys(childDatass).map(function(e) {
						// 		return childDatass[e];
						// });
					 

						// let output = Object.keys(childData).map(function(e) {
						// 		return childData[e];
								
						// });

						// let output1 = Object.keys(output[5]).map(function(e) {
						// 		return output[5][e];
								
						// });

						// let output2 = Object.keys(output1[0]).map(function(e) {
						// 		return output1[0][e];
								
						// });

						// let output3 = Object.keys(output2[0]).map(function(e) {
						// 		return output2[0][e];
								
						// });

					// for(var i = 0;Object.keys(output[3]).length; i++ ){

						// console.log(childData.items);
					// 	}
						// let itemList = childData.items;
						
						// console.log(output4[0].wallet);

					// 	console.log(output5);

					// if(childData.client_id == sessionStorage.getItem("client_id")){

						// var first = childDatas.firstname.charAt(0).toUpperCase() + childDatas.firstname.slice(1);
						// var last = childDatas.lastname.charAt(0).toUpperCase() + childDatas.lastname.slice(1);
						// var product = Object.keys(output[3])[0].charAt(0).toUpperCase() + Object.keys(output[3])[0].slice(1);
						// var water = output2[1].charAt(0).toUpperCase() + output2[1].slice(1);
						// var service = Object.keys(output1[0])[0].charAt(0).toUpperCase() + Object.keys(output1[0])[0].slice(1);
					
						 // console.log(output2[1]);

						 // if (document.getElementById('reason_order`+childData.order_id+`')) {


						 // }

						// $('#orders').append(` 

					 //   	<tr class="gradeU" data-id='`+childData.order_id+`'> 
			   //               <input type="hidden" name="order_id" value="">
			   //               <td>`+output5[0].firstname+` `+output5[0].lastname+`</td>
			   //               <td>`+childData.delivery_address+`</td> 
			   //               <td>`+childData.order_time+`</td>
			   //               <td><button class="btn btn-success" data-toggle="modal" data-target="#detailsmod`+childData.order_id+`">Details</button></td>
			   //               <td>
			   //    				 <button class="btn btn-primary" onclick="acceptStatus('`+childData.order_id+`','`+childData.total_amount+`','`+output5[0].customer_id+`','`+childData.client_id+`','`+output4[0].wallet+`','`+childData.payment+`')">ACCEPT</button>
			   //                   <button class="btn btn-danger" data-toggle="modal" data-target="#declineOrder`+childData.order_id+`">DECLINE</button>
			   //               </td>
			   //          </tr>

			   //          <script type="text/javascript">
					 //        $(document).ready(function(){
					 //              $("#bell").click(function(){
					 //                $("#notif").hide();
					 //              });
					 //            });
					        
					 //    </script>`);

						//  $('#modalforcancel').append(` 

					 //    <div class="modal fade" id="declineOrder`+childData.order_id+`" role="dialog" style="margin-bottom:10px;">
			   //            <div class="modal-dialog">
			   //              <div class="modal-content">
			   //                <div class="modal-header" style="background-color: #d9534f;">
			   //                  <button type="button" class="close" data-dismiss="modal">&times;</button>
			   //                  <h4 class="modal-title" style="color:white;">Reason</h4>
			   //                </div>
			   //                <div class="modal-body">
			   //                    <div class="form-group">
			   //                    <span>Reason for refusing the order:</span>
			   //                       <textarea type="textarea" class="form-control" id="reason_order`+childData.order_id+`" required> </textarea>                             
			                      
			   //                    </div>
			   //                </div>                                                                  
			   //                <div class="modal-footer">
			   //                    <button  class="btn btn-danger" data-dismiss="modal" onclick="declineStatus('`+childData.order_id+`','`+childData.total_amount+`','`+output5[0].customer_id+`','`+output5[0].wallet+`','`+childData.payment+`','`+childData.reason+`')">Okay</button>
			   //                    <button  class="btn btn-default" data-dismiss="modal">Cancel</button>
			   //                </div>
			   //              </div>
			   //           </div>`);

						

						//  $('#address_modal').append(`

						// 	   <div class="modal fade" id="detailsmod`+childData.order_id+`" role="dialog">
		    //                     <div class="modal-dialog">
		    //                       <div class="modal-content">
		    //                         <div class="modal-header">
		    //                           <button type="button" class="close" data-dismiss="modal">&times;</button>
		    //                           <h4 class="modal-title">Details</h4>
		    //                         </div>
		    //                         <div class="modal-body">
		    //                             <div class="form-group">
		    //                                <table class="table table-striped">
		    //                                <thead>
			   //                                 	<tr>
			   //                                 		<td>Product</td>
			   //                                 		<td>Water Type</td>
			   //                                 		<td>Refill</td>
			   //                                 		<td>Purchase</td>
			   //                                 	</tr>
		    //                                	</thead>
		    //                                 <tbody>
		    //                                 	<tr>
		    //                                 		<th>`+Object.keys(output[5])+`</th>
		    //                                 		<th>`+output2[1]+`</th>
		    //                                 		<th>`+Object.keys(output1[0])[0]+`</th>
		    //                                 		<th>`+output3[0]+`</th>
		    //                                 	</tr>
		    //                                 </tbody>
		    //                                 <tbody>
		    //                                 	<tr>
		    //                                 		<th></th>
		    //                                 		<th></th>
		    //                                 		<th></th>
		    //                                 		<th></th>
		    //                                 		<th>`+childData.payment+`</th>
						// 							<th>₱`+childData.total_amount+`</th>
		    //                                 	</tr>
		    //                                 </tbody>
		    //                                </table>
		    //                             </div>
		    //                         </div>
		    //                         <div class="modal-footer">
		    //                          <input type="hidden" name="prod_id" id="prod_id">
		    //                             <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
		    //                         </div>
		    //                       </div>
		                          
		    //                     </div>
		    //                   </div>`);

						// }


					// document.getElementById("notif").innerHTML = snapshot.numChildren();
			// database.child("clients").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id")).on("value", snapshots => {
				
			
			// 	snapshot.forEach(function(childSnapshot) {
			// 		var childKeys = childSnapshot.key;
			// 		var childDatas = childSnapshot.val();


					//  $('#orders').append(` 
				

					//    	<tr class="gradeU" data-id='`+childData.order_id+`'> 
			  //                <input type="hidden" name="order_id" value="">
			  //                <td>`+childDatas.firstname+`</td>
			  //                <td>`+childData.order_time+`</td> 
			  //                <td>Purified</td>
			  //                <td>Refill</td>
			  //               <td>50</td>
			  //                <td>`+childData.payment+`</td>
			  //                <td><button class="btn btn-success" data-toggle="modal" data-target="#modeling">Address</button></td>
			  //                <td>
			      
			  //                    <button class="btn btn-danger" data-toggle="modal" data-target="#declineOrder`+childData.order_id+`">DECLINE</button>
			  //                </td>
			  //           </tr>

			  //           <script type="text/javascript">
					//         $(document).ready(function(){
					//               $("#bell").click(function(){
					//                 $("#notif").hide();
					//               });
					//             });
					        
					//     </script>

			  //           `);
					//   $('#modalforcancel').append(` 
					//     <div class="modal fade" id="declineOrder`+childData.order_id+`" role="dialog" style="margin-bottom:10px;">
			  //             <div class="modal-dialog">
			  //               <div class="modal-content">
			  //                 <div class="modal-header" style="background-color: #d9534f;">
			  //                   <button type="button" class="close" data-dismiss="modal">&times;</button>
			  //                   <h4 class="modal-title" style="color:white;">Reason</h4>
			  //                 </div>
			  //                 <div class="modal-body">
			  //                     <div class="form-group">
			  //                     <span>Reason for refusing the order:</span>
			  //                        <textarea type="textarea" class="form-control" id="reason_order`+childData.order_id+`"> </textarea>                             
			                      
			  //                     </div>
			  //                 </div>
			  //                 <div class="modal-footer">
			  //                     <button  class="btn btn-danger" data-dismiss="modal" onclick="declineStatus('`+childData.order_id+`','`+childData.total_amount+`','`+childData.client_id+`')">Decline</button>
			  //                     <button  class="btn btn-default" data-dismiss="modal">Cancel</button>
			  //                 </div>
			  //               </div>
			  //            </div>

			  //           `);
					// });

		// 		});
		// 	});
		// });

		// function bell(){

		// }



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		
		database.child("orders").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id")).on("value", snapshot => {

			if (snapshot.exists()) {
				

				snapshot.forEach(function(childSnapshot) {
					var childData = childSnapshot.val();
					if (childData.status == "pending") {

						$('#expressnessingness tr').remove();

						if (childData.delivery_option == "Express") {

							$('#ExpressOrderShowIn').modal("show");

						database.child("customers").orderByChild("customer_id").equalTo(childData.customer_id).once("value", snapshots => {

							var content = '';	
							var childDatas = snapshots.val();

							database.child("personnels").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id")).once("value", snapshotss => {
							var childDatass = snapshotss.val();



							let output1 = Object.keys(childDatass).map(function(e) {
									return childDatass[e];
							});
			
							let output = Object.keys(childDatas).map(function(e) {
									return childDatas[e];
							});


							var first = output[0].firstname.charAt(0).toUpperCase() + output[0].firstname.slice(1);
							var last = output[0].lastname.charAt(0).toUpperCase() + output[0].lastname.slice(1);

				
							content +='<tr data-id='+childData.order_id+'>';
			                content += '<td>'+childData.client_id+'</td>';
			                content += '<td>'+childData.order_time+'</td>';
			                content += '<td>'+first+' '+last+'</td>';
			                content += '<td>'+childData.delivery_address+'</td>';
			                content += '<td><button class="btn btn-success" data-toggle="modal" data-target="#detailsmodes'+childData.order_id+'">Details</button></td>';
			                content += `<td><button class="btn btn-primary" onclick="ExpressAccept('`+childData.order_id+`','`+childData.total_amount+`','`+childData.customer_id+`','`+sessionStorage.getItem("client_id")+`','`+childData.payment+`')">Confirm</button><button class="btn btn-danger" data-toggle="modal" data-target="#declineOrdersEx`+childData.order_id+`">DECLINE</button></td>`;
			                content += '</tr>';

			                $('#expressnessingness').append(content);


			                // onclick="acceptStatus('`+childData.order_id+`','`+childData.total_amount+`','`+childData.customer_id+`','`+sessionStorage.getItem("client_id")+`','`+childData.payment+`')"
			     
			                 $('#detalye').append(`

							   <div class="modal fade" id="detailsmodes`+childData.order_id+`" role="dialog">
		                        <div class="modal-dialog">
		                          <div class="modal-content">
		                            <div class="modal-header">
		                              <button type="button" class="close" data-dismiss="modal">&times;</button>
		                              <h4 class="modal-title">Details</h4>
		                            </div>
		                            <div class="modal-body">
		                                <div class="form-group">
		                                   <table class="table table-striped">
		                                   <thead>
			                                   	<tr>
			                                   		<th>Product</th>
			                                   		<th>Water Type</th>
			                                   		<th>Refill (quantity)</th>
			                                   		<th>Purchase (quantity)</th>
			                                   	</tr>
		                                   	</thead>
		                                     <tbody id="item`+childData.order_id+`">
		                                    	`+detailsProd(childData)+`
		                                    </tbody>
			                                <tfoot>
		                      					<tr>
													<td></td>
			                                   		<td></td>
			                                   		<td><h2><b>Total:</b></h2></td>
			                                   		<td><h2><b><u>₱`+childData.total_amount+`</u></b></h2></td>

			                                   	</tr>
			                                </tfoot>
		                                   </table>
		                                   <h4>Payment: <b><u>`+childData.payment+`</u></b></h4>
		                                   <h4>Note: <i>`+childData.notes+`</i></h4>
		                                </div>
		                            </div>
		                            <div class="modal-footer">
		                             <input type="hidden" name="prod_id" id="prod_id">
		                                <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
		                            </div>
		                          </div>
		                          
		                        </div>
		                      </div>`); 



			        //          $('#express_ordering').append(` 

							    // <div class="modal fade" id="Orderassigner`+childData.order_id+`" role="dialog" style="margin-bottom:10px;">
					      //         <div class="modal-dialog">
					      //           <div class="modal-content">
					      //             <div class="modal-header">
					      //               <button type="button" class="close" data-dismiss="modal">&times;</button>
					      //               <h4 class="modal-title">Delivery Man Assignment</h4>
					      //             </div>
					      //             <div class="modal-body">
					      //                 <div class="form-group">
					      //                 	<select class="form-control" id="personelExpress`+childData.order_id+`"></select>
					      //                 </div>
					      //             </div>                                                                  
					      //             <div class="modal-footer">
					      //                 <button  class="btn btn-primary" data-dismiss="modal" onclick="ExpressAccept('`+childData.order_id+`','`+childData.total_amount+`','`+childData.customer_id+`','`+sessionStorage.getItem("client_id")+`','`+childData.payment+`')">Ok</button>
					      //                 <button  class="btn btn-default" data-dismiss="modal">Cancel</button>
					      //             </div>
					      //           </div>
					      //        </div>`);
					            	
					            

		                       $('#modalforcancelation').append(`
							    <div class="modal fade" id="declineOrdersEx`+childData.order_id+`" role="dialog" style="margin-bottom:10px;">
					              <div class="modal-dialog">
					                <div class="modal-content">
					                  <div class="modal-header" style="background-color: #d9534f;">
					                    <button type="button" class="close" data-dismiss="modal">&times;</button>
					                    <h4 class="modal-title" style="color:white;">Reason</h4>
					                  </div>
					                  <div class="modal-body">
					                      <div class="form-group">
					                      <span>Reason for refusing the order:</span>
					                         <textarea type="textarea" class="form-control" id="reason_ordering`+childData.order_id+`"> </textarea>                             
					                      
					                      </div>
					                  </div>                                                                  
					                  <div class="modal-footer">
					                      <button  class="btn btn-danger" data-dismiss="modal" onclick="declineStatusExpress('`+childData.order_id+`','`+childData.total_amount+`','`+childData.customer_id+`','`+childData.payment+`')">Ok</button>
					                      <button  class="btn btn-default" data-dismiss="modal">Cancel</button>
					                  </div>
					                </div>
					             </div>`);   	



		       //                 	for (var i = 0; i < output1.length; i++) {
									// $("#personelExpress"+childData.order_id).append(`<option value="`+Object.keys(childDatass)[i]+`">`+output1[i].per_name+`</option>`);
					    //         }
								});
							 });

							
						   }	
						}
					});
				 }
			});

//standard Notif

// database.child("orders").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id")).on("value", snapshot => {
		
// 			if (snapshot.exists()) {
// 				// document.getElementById("standard_notif").innerHTML = snapshot.numChildren();
// 				var notifsAll = 0;
// 				snapshot.forEach(function(childSnapshot) {
// 					var childData = childSnapshot.val();

// 						if (childData.status == "pending") {
// 						notifsAll++;

					

//                         	$('#notifAlls').append(` 
//                                `+notifsAll+`
//                         `);
                       
//                         }
//      			console.log(childData);

//                     });
// 				}
// 			});

	
	database.child("orders").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id")).on("value", snapshot => {
							
			if (snapshot.exists()) {
				// document.getElementById("standard_notif").innerHTML = snapshot.numChildren();
				var notifs = 0;
				
				
				snapshot.forEach(function(childSnapshot) {
					var childData = childSnapshot.val();
						
							notifs++;


							  


						

						database.child("customers").orderByChild("customer_id").equalTo(childData.customer_id).once("value", snapshots => {

							var childDatas = snapshots.val();

							$('#morning_order tr').remove();
							$('#afternoon_order tr').remove();
							var content = '';

							let outputCustID = Object.keys(childDatas).map(function(e) {
									return childDatas[e];
							});


							database.child("personnels").orderByChild("client_id").equalTo(childData.client_id).once("value", snapshotss => {
						

							if (childData.status == "pending" && childData.delivery_option == "Standard") {

							var childDatass = snapshotss.val();	
							
							let output1 = Object.keys(childDatass).map(function(e) {
									return childDatass[e];
							});
							// console.log(Object.keys(childDatass));

			
							let output = Object.keys(childDatas).map(function(e) {
									return childDatas[e];
							});


							var first = output[0].firstname.charAt(0).toUpperCase() + output[0].firstname.slice(1);
							var last = output[0].lastname.charAt(0).toUpperCase() + output[0].lastname.slice(1);

							var timerAMPM = childData.order_time;
							var resTime = timerAMPM.split(" ");

							


							// this is orderss

							content +='<tr>';
			                content += '<td>'+childData.order_id+'</td>';
			                content += '<td>'+childData.order_time+'</td>';
			                content += '<td>'+first+' '+last+'</td>';
			                content += '<td>'+childData.delivery_address+'</td>';
			                content += '<td><button class="btn btn-success" data-toggle="modal" data-target="#detailsmod'+childData.order_id+'">Details</button></td>';
			                content += `<td><button class="btn btn-primary" data-toggle="modal" data-target="#Orderassign`+childData.order_id+`">ACCEPT</button><button class="btn btn-danger" data-toggle="modal" data-target="#declineOrder`+childData.order_id+`">DECLINE</button></td>`;
			                content += '</tr>';

			                // $('#morning_order').append(content);
			              
			                if (resTime[5] == "AM") {
			                	$('#morning_order').append(content);

							}else{
								$('#afternoon_order').append(content);
							}



			                // content +='<tr data-id='+childData.order_id+'>';
			                // content += '<td>'+childData.order_id+'</td>';
			                // content += '<td>'+childData.order_time+'</td>';
			                // content += '<td>'+first+' '+last+'</td>';
			                // content += '<td>'+childData.delivery_address+'</td>';
			                // content += '<td><button class="btn btn-success" data-toggle="modal" data-target="#detailsmod'+childData.order_id+'">Details</button></td>';
			                // content += `<td><button class="btn btn-primary" data-toggle="modal" data-target="#Orderassign`+childData.order_id+`">ACCEPT</button><button class="btn btn-danger" data-toggle="modal" data-target="#declineOrder`+childData.order_id+`">DECLINE</button></td>`;
			                // content += '</tr>';

			                // $('#afternoon_order').append(content);
			                // onclick="acceptStatus('`+childData.order_id+`','`+childData.total_amount+`','`+childData.customer_id+`','`+sessionStorage.getItem("client_id")+`','`+childData.payment+`')"
			     			
			                 if (childData.notes == " ") {
			                 	$('#notable').append(`None`);
			                 }else{
			                 	$('#notable').append(``+childData.notes+``);
			                 }

			                 $('#address_modals').append(`

							   <div class="modal fade" id="detailsmod`+childData.order_id+`" role="dialog">
		                        <div class="modal-dialog">
		                          <div class="modal-content">
		                            <div class="modal-header">
		                              <button type="button" class="close" data-dismiss="modal">&times;</button>
		                              <h4 class="modal-title">Details</h4>
		                            </div>
		                            <div class="modal-body">
		                                <div class="form-group">
		                                   <table class="table table-striped">
		                                   <thead>
			                                   	<tr>
			                                   		<th>Product</th>
			                                   		<th>Water Type</th>
			                                   		<th>Refill (quantity)</th>
			                                   		<th>Purchase (quantity)</th>
			                                   	</tr>
		                                   	</thead>
		                                    <tbody id="item`+childData.order_id+`">
		                                    	`+detailsProd(childData)+`
		                                    </tbody>
			                                <tfoot>
		                      					<tr>
													<td></td>
			                                   		<td></td>
			                                   		<td><h2><b>Total:</b></h2></td>
			                                   		<td><h2><b><u>₱`+childData.total_amount+`</u></b></h2></td>
			                                   		

			                                   	</tr>
			                                </tfoot>
		                                   </table>
		                                   <h4>Payment: <b><u>`+childData.payment+`</u></b></h4>
		                                   <h4>Notes:`+childData.notes+`</h4>
		                                </div>
		                            </div>
		                            <div class="modal-footer">
		                             <input type="hidden" name="prod_id" id="prod_id">
		                                <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
		                            </div>
		                          </div>
		                          
		                        </div>
		                      </div>`); 





			                 $('#acceptedOrdering').append(` 

							    <div class="modal fade" id="Orderassign`+childData.order_id+`" role="dialog" style="margin-bottom:10px;">
					              <div class="modal-dialog">
					                <div class="modal-content">
					                  <div class="modal-header">
					                    <button type="button" class="close" data-dismiss="modal">&times;</button>
					                    <h4 class="modal-title">Orders</h4>
					                  </div>
					                  <div class="modal-body">
					                      <div class="form-group">
					                      <td><h2>Total Amount: <b><u>₱`+childData.total_amount+`</u></b></h2></td><br>
					                      <td><h4><b>Transaction Fee: <u>₱25</u> </b></h4></td>
					                      <h4>Do you want to give this order a discount?</h4>
			                    		  <span>(<small>Amount to discount</small>)
					                      	<input type="number" id="discount`+childData.order_id+`" value="0" class="form-control" style="width:50%">
					                      </span>	
					                  </div>                                                                  
					                  <div class="modal-footer">
					                      <button  class="btn btn-primary" data-dismiss="modal" onclick="acceptStatus('`+childData.order_id+`','`+childData.total_amount+`','`+childData.customer_id+`','`+sessionStorage.getItem("client_id")+`','`+childData.payment+`','`+childData.order_time+`','`+childData.delivery_address+`','`+outputCustID[0].wallet+`')">Ok</button>
					                      <button  class="btn btn-default" data-dismiss="modal">Cancel</button>
					                  </div>
					                </div>
					             </div>
					            ` );

			                 // 
					            	
					          //   var reasoner = 	document.getElementById('reason_order'+childData.order_id);

					          //   if (reasoner == "") {
					          //   	swal({
							        //     title: "This field is required.",
							        //     icon: "warning",
							        //     button: false,
							        //     timer: 1000
							        // });
					          //   }

		                       $('#modalforcancel').append(`
							    <div class="modal fade" id="declineOrder`+childData.order_id+`" role="dialog" style="margin-bottom:10px;">
					              <div class="modal-dialog">
					                <div class="modal-content">
					                  <div class="modal-header" style="background-color: #d9534f;">
					                    <button type="button" class="close" data-dismiss="modal">&times;</button>
					                    <h4 class="modal-title" style="color:white;">Reason</h4>
					                  </div>
					                  <div class="modal-body">
					                      <div class="form-group">
					                      <span>Reason for refusing the order:</span>
					                         <textarea type="textarea" class="form-control" id="reason_order`+childData.order_id+`"> </textarea>                             
					                      
					                      </div>
					                  </div>                                                                  
					                  <div class="modal-footer">
					                      <button  class="btn btn-danger" data-dismiss="modal" onclick="declineStatus('`+childData.order_id+`','`+childData.total_amount+`','`+childData.customer_id+`','`+childData.payment+`')">Ok</button>
					                      <button  class="btn btn-default" data-dismiss="modal">Cancel</button>
					                  </div>
					                </div>
					             </div>`);   	


		                       	for (var i = 0; i < output1.length; i++) {
									$("#persons"+childData.order_id).append(`<option value="`+Object.keys(childDatass)[i]+`">`+output1[i].per_name+`</option>`);
					            }



					           }

								});


		                	// });
								});

							

						

							// for (var i = 0 ; i < childData.order_id.length; i++) {
							// 	document.getElementById('standard_notif').innerHTML = i;
							// }

					});
						if(notifs == 0){
							$('#hideNotif').hide();
						}
						
						$('#standard_notif').append(` 
							<div>
                               <i class="fa fa-shopping-cart fa-fw"></i> You have new order  <span class="badge" ">`+notifs+`</span>
                            </div>`);
						$('#notifAlls').append(`
							`+notifs+`
							`);
						$('#dashNotif').append(`
							`+notifs+`
							`);
				}
			});

	
	database.child("schedules").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id")).on("value", snapshot => {

			if (snapshot.exists()) {
				$('#request_scheduled_delivery tr').remove();

				snapshot.forEach(function(childSnapshot) {
					var childData = childSnapshot.val();
					if (childData.status == "pending") {
						

						database.child("customers").orderByChild("customer_id").equalTo(childData.customer_id).once("value", snapshots => {

							var content = '';	
							var childDatas = snapshots.val();

							database.child("personnels").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id")).once("value", snapshotss => {
							var childDatass = snapshotss.val();

							let output1 = Object.keys(childDatass).map(function(e) {
									return childDatass[e];
							});

							// console.log(output1);

							let output = Object.keys(childDatas).map(function(e) {
									return childDatas[e];
							});

				
							content +='<tr>';
			                content += '<td>'+childData.schedule_id+'</td>';
			                content += '<td>'+output[0].firstname+ ` `+output[0].lastname+ '</td>';
			                content += '<td>'+childData.delivery_address+'</td>';
			                content += '<td>'+childData.schedule+'</td>';
			                content += '<td><button class="btn btn-success" data-toggle="modal" data-target="#detailsmoda'+childData.schedule_id+'">Details</button></td>';
			                content += `<td><button class="btn btn-primary" data-toggle="modal" data-target="#assignBoySched`+childData.schedule_id+`">ACCEPT</button><button class="btn btn-danger" data-toggle="modal" data-target="#scheduleDecliners`+childData.schedule_id+`">DECLINE</button></td>`;
			                content += '</tr>';

			                $('#request_scheduled_delivery').append(content);

			     
			                 $('#requestschedDet').append(`

							   <div class="modal fade" id="detailsmoda`+childData.schedule_id+`" role="dialog">
		                        <div class="modal-dialog">
		                          <div class="modal-content">
		                            <div class="modal-header">
		                              <button type="button" class="close" data-dismiss="modal">&times;</button>
		                              <h4 class="modal-title">Details</h4>
		                            </div>
		                            <div class="modal-body">
		                                <div class="form-group">
		                                   <table class="table table-striped">
		                                   <thead>
			                                   	<tr>
			                                   		<td>Product</td>
			                                   		<td>Water Type</td>
			                                   		<td>Refill (quantity)</td>
			                                   		<td>Purchase (quantity)</td>
			                                   	</tr>
		                                   	</thead>
		                                    <tbody id="item`+childData.schedule_id+`">
		                                    	`+detailsProd(childData)+`
		                                    </tbody>
		                      				<tfoot>
		                      					<tr>

													<td></td>
			                                   		<td></td>
			                                   		<td></td>
			                                   		<td>₱`+childData.total_amount+`</td>

			                                   	</tr>
			                                </tfoot>
		                                   </table>
		                                   <h4>Notes:`+childData.notes+`</h4>
		                                </div>
		                            </div>
		                            <div class="modal-footer">
		                             <input type="hidden" name="prod_id" id="prod_id">
		                                <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
		                            </div>
		                          </div>
		                          
		                        </div>
		                      </div>`); 

			                 $('#assignBoy').append(`

							   <div class="modal fade" id="assignBoySched`+childData.schedule_id+`" role="dialog" style="margin-bottom:10px;">
					              <div class="modal-dialog">
					                <div class="modal-content">
					                  <div class="modal-header">
					                    <button type="button" class="close" data-dismiss="modal">&times;</button>
					                    <h4 class="modal-title">Delivery Man Assignment</h4>
					                  </div>
					                  <div class="modal-body">
					                      <div class="form-group">
					                      	<select class="form-control" id="assignboyband`+childData.schedule_id+`"></select>
					                      </div>
					                  </div>                                                                  
					                  <div class="modal-footer">
					                      <button  class="btn btn-primary" data-dismiss="modal" onclick="scheduleAccept('`+childData.schedule_id+`','`+childData.total_amount+`','`+childData.customer_id+`','`+sessionStorage.getItem("client_id")+`','`+childData.payment+`')">Ok</button>
					                      <button  class="btn btn-default" data-dismiss="modal">Cancel</button>
					                  </div>
					                </div>
					             </div>`); 

		                       $('#declinescheds').append(` 

							    <div class="modal fade" id="scheduleDecliners`+childData.schedule_id+`" role="dialog" style="margin-bottom:10px;">
					              <div class="modal-dialog">
					                <div class="modal-content">
					                  <div class="modal-header" style="background-color: #d9534f;">
					                    <button type="button" class="close" data-dismiss="modal">&times;</button>
					                    <h4 class="modal-title" style="color:white;">Reason</h4>
					                  </div>
					                  <div class="modal-body">
					                      <div class="form-group">
					                      <span>Reason for refusing the scheduled order:</span>
					                         <textarea type="textarea" class="form-control" id="reason_schedule`+childData.schedule_id+`" required> </textarea>                             
					                      
					                      </div>
					                  </div>                                                                  
					                  <div class="modal-footer">
					                      <button  class="btn btn-danger" data-dismiss="modal" onclick="scheduleDeclined('`+childData.schedule_id+`')">Okay</button>
					                      <button  class="btn btn-default" data-dismiss="modal">Cancel</button>
					                  </div>
					                </div>
					             </div>`);   	

		                       for (var i = 0; i < output1.length; i++) {
									$("#assignboyband"+childData.schedule_id).append(`<option value="`+Object.keys(childDatass)[i]+`">`+output1[i].per_name+`</option>`);
					            }



			     //                [childData.items].forEach(function(items) {
								// Object.keys(items).forEach(function(item) {

								// 	var refillQty = 0;
								// 	var purchaseQty = 0;

								// 	if ("refill" in Object.values(items)[0]) {
								// 		refillQty = Object.values(items)[0].refill.quantity;
								// 	}

								// 	if ("purchase" in Object.values(items)[0]) {
								// 		purchaseQty = Object.values(items)[0].purchase.quantity;
								// 	}

								// 	$("#item"+childData.order_id).append(`
								// 				<tr>
			     //                               		<td>`+item+`</td>
			     //                               		<td>`+Object.values(items)[0].water_type+`</td>
			     //                               		<td>`+refillQty+`</td>
			     //                               		<td>`+purchaseQty+`</td>
			     //                               	</tr>`);


								// 	});
								// });
		                	});
						   });
						 }
					});
				 }
			});



function scheduleAccept(schedID) {

	var es = document.getElementById('assignboyband'+schedID);
	var boys = es.options[es.selectedIndex].value;

	// console.log(boys);


	var updates = {};
	updates['schedules/' + schedID + '/status'] = "scheduled";
	database.update(updates);

	var updates = {};
	updates['schedules/' + schedID + '/per_id'] = boys;
	database.update(updates).then(function(){
		reload_page();
	})


	var pusher = new Pusher('4de9228ab3e254f06ee8', {
		cluster: 'ap1',
		authEndpoint: '/aquae4/pages/auth.php'
	});
	pusherChannel = pusher.subscribe("private-update");

	pusherChannel.bind('pusher:subscription_succeeded', function() {
		pusherChannel.trigger('client-update', { id: customerID, client_id: clientID, name: "orders", order_id: id, payment:payment,  message: "Your scheduled delivery order has been accepted!" });
	});
		
}

function scheduleDeclined(schedID) {

	var reason_schedule = document.getElementById("reason_schedule"+schedID).value;

	var updates = {};
	updates['schedules/' + schedID + '/status'] = "declined";
	database.update(updates).then(function(){
		var addScheduleReason = {};
					addScheduleReason['schedules/' + schedID + '/reason'] = reason_schedule.trim();
					database.update(addScheduleReason).then(function() {

	var pusher = new Pusher('4de9228ab3e254f06ee8', {
		cluster: 'ap1',
		authEndpoint: '/aquae4/pages/auth.php'
	});
	pusherChannel = pusher.subscribe("private-update");

	pusherChannel.bind('pusher:subscription_succeeded', function() {
		pusherChannel.trigger('client-update', { id: customerID, client_id: clientID, name: "orders", order_id: id, payment:payment,  message: "Your scheduled delivery order has been declined, Sorry!" });
			});
		});
	});
		
}
database.child("schedules").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id")).on("value", snapshot => {

			if (snapshot.exists()) {
				$('#scheduled_delivery tr').remove();

				snapshot.forEach(function(childSnapshot) {
					var childData = childSnapshot.val();
					if (childData.status == "scheduled") {
						if(childData.switch == "on"){

						database.child("customers").orderByChild("customer_id").equalTo(childData.customer_id).once("value", snapshots => {

							var content = '';	
							var childDatas = snapshots.val();

							database.child("personnels").orderByChild("per_id").equalTo(childData.per_id).once("value", snapshotss => {
							var childDatass = snapshotss.val();

								database.child("personnels").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id")).once("value", snapshotss => {
								var childDatasss = snapshotss.val();

								let output2 = Object.keys(childDatasss).map(function(e) {
										return childDatasss[e];
								});


							let output1 = Object.keys(childDatass).map(function(e) {
									return childDatass[e];
							});
							

							// console.log(output2);

							let output = Object.keys(childDatas).map(function(e) {
									return childDatas[e];
							});

				
							content +='<tr>';
			                content += '<td>'+childData.schedule_id+'</td>';
			                content += '<td>'+output[0].firstname+ ` `+output[0].lastname+ '</td>';
			                content += '<td>'+childData.delivery_address+'</td>';
			                content += '<td>'+childData.schedule+'</td>';
			                content += '<td>'+output1[0].per_name+'</td>';
			                content += '<td><button class="btn btn-success" data-toggle="modal" data-target="#detailsmodas'+childData.schedule_id+'">Details</button></td>';
			                content += '<td><button class="btn btn-primary" data-toggle="modal" data-target="#MessageCus'+childData.schedule_id+'">Message Customer <i class="fa fa-arrow-circle-right"></i></button></td>';
			                content += '<td><button class="btn btn-primary" data-toggle="modal" data-target="#ReAssignment'+childData.schedule_id+'">Re-assign Personnel <i class="fa fa-user"></i></button></td>';
			                content += '</tr>';

			                $('#scheduled_delivery').append(content);

			     
			                 $('#schedDet').append(`

							   <div class="modal fade" id="detailsmodas`+childData.schedule_id+`" role="dialog">
		                        <div class="modal-dialog">
		                          <div class="modal-content">
		                            <div class="modal-header">
		                              <button type="button" class="close" data-dismiss="modal">&times;</button>
		                              <h4 class="modal-title">Details</h4>
		                            </div>
		                            <div class="modal-body">
		                                <div class="form-group">
		                                   <table class="table table-striped">
		                                   <thead>
			                                   	<tr>
			                                   		<td>Product</td>
			                                   		<td>Water Type</td>
			                                   		<td>Refill (quantity)</td>
			                                   		<td>Purchase (quantity)</td>
			                                   	</tr>
		                                   	</thead>
		                                    <tbody id="item`+childData.schedule_id+`">
		                                    	`+detailsProd(childData)+`
		                                    </tbody>
		                      				<tfoot>
		                      					<tr>
													<td></td>
			                                   		<td></td>
			                                   		<td><h2><b>Total:</b></h2></td>
			                                   		<td><h2><b><u>₱`+childData.total_amount+`</u></b></h2></td>

			                                   	</tr>
			                                </tfoot>
		                                   </table>
		                                   <h4>Note: <i>`+childData.notes+`</i></h4>
		                                </div>
		                            </div>
		                            <div class="modal-footer">
		                             <input type="hidden" name="prod_id" id="prod_id">
		                                <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
		                            </div>
		                          </div>
		                          
		                        </div>
		                      </div>`); 

		                       $('#messCus').append(` 

								    <div class="modal fade" id="MessageCus`+childData.schedule_id+`" role="dialog" style="margin-bottom:10px;">
						              <div class="modal-dialog">
						                <div class="modal-content">
						                  <div class="modal-header" style="background-color: #0275d8;">
						                    <button type="button" class="close" data-dismiss="modal">&times;</button>
						                    <h4 class="modal-title" style="color:white;">Message Customer</h4>
						                  </div>
						                  <div class="modal-body">
						                      <div class="form-group">
						                         <textarea type="textarea" class="form-control" id="messageCustomer`+childData.schedule_id+`" required> </textarea>                             
						                      
						                      </div>
						                  </div>                                                                  
						                  <div class="modal-footer">
						                      <button  class="btn btn-primary" data-dismiss="modal" onclick="sendMessage('`+childData.schedule_id+`')">Okay</button>
						                      <button  class="btn btn-default" data-dismiss="modal">Cancel</button>
						                  </div>
						                </div>
						             </div>`); 

						             $('#reassign').append(` 

								    <div class="modal fade" id="ReAssignment`+childData.schedule_id+`" role="dialog" style="margin-bottom:10px;">
							              <div class="modal-dialog">
							                <div class="modal-content">
							                  <div class="modal-header">
							                    <button type="button" class="close" data-dismiss="modal">&times;</button>
							                    <h4 class="modal-title">Delivery Man Assignment</h4>
							                  </div>
							                  <div class="modal-body">
							                      <div class="form-group">
							                      	<select class="form-control" id="reassignment`+childData.schedule_id+`"></select>
							                      </div>
							                  </div>                                                                  
							                  <div class="modal-footer">
							                      <button  class="btn btn-primary" data-dismiss="modal" onclick="updatePersonnel('`+childData.schedule_id+`')">Ok</button>
							                      <button  class="btn btn-default" data-dismiss="modal">Cancel</button>
							                  </div>
							                </div>
							             </div>`);   	

					            for (var i = 0; i < output2.length; i++) {
									$("#reassignment"+childData.schedule_id).append(`<option value="`+Object.keys(childDatasss)[i]+`">`+output2[i].per_name+`</option>`);
					            }


			     //                [childData.items].forEach(function(items) {
								// Object.keys(items).forEach(function(item) {

								// 	var refillQty = 0;
								// 	var purchaseQty = 0;

								// 	if ("refill" in Object.values(items)[0]) {
								// 		refillQty = Object.values(items)[0].refill.quantity;
								// 	}

								// 	if ("purchase" in Object.values(items)[0]) {
								// 		purchaseQty = Object.values(items)[0].purchase.quantity;
								// 	}

								// 	$("#item"+childData.order_id).append(`
								// 				<tr>
			     //                               		<td>`+item+`</td>
			     //                               		<td>`+Object.values(items)[0].water_type+`</td>
			     //                               		<td>`+refillQty+`</td>
			     //                               		<td>`+purchaseQty+`</td>
			     //                               	</tr>`);


								// 	});
								// });
		                	  });
							});
						   });
						 }
						}
					});
				 }
			});

	function updatePersonnel(schedID, perID){

		// var perUp = document.getElementById('reassignment'+perID).value;

		var upPer = document.getElementById('reassignment'+schedID);
		var boyband = upPer.options[upPer.selectedIndex].value;

		// console.log(boyband);

		var updates = {};
		updates['schedules/' + schedID + '/per_id'] = boyband;
		database.update(updates).then(function() {
	            reload_page();
		});

	}


	function sendMessage(id){

		

		var message = document.getElementById('messageCustomer'+id).value;
		


		var updates = {};
		updates['schedules/' + id + '/message'] = message;
		database.update(updates).then(function() {
			swal({
	            title: "Message sent successfully!",
	            text: " ",
	            icon: "success",
	            button: false,
	            timer: 1800
	          }).then(function(){
	            reload_page();
	          });	
		});
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

				// database.child("orders").on("child_changed", snapshot => {


				// 	//snapshot.forEach(function(childSnapshot) {
				// 		var childKey = snapshot.key;
				// 		var childData = snapshot.val();

				// 		$('#orders').append(` 
				// 		   	<tr class="gradeU">
				//                  <input type="hidden" name="order_id" value="">
				//                  <td>`+childData.order+`</td>
				//                  <td>`+childData.order_id+`</td>
				//                  <td>Purified</td>
				//                  <td>Refill</td>
				//                 <td>50</td>
				//                  <td>`+childData.payment+`</td>
				//                  <td><button class="btn btn-success" data-toggle="modal" data-target="#modeling">Address</button></td>
				//                  <td>
				//                      <button class="btn btn-primary" onclick="acceptStatus('`+childData.order_id+`')">ACCEPT</button>
				//                      <button class="btn btn-danger" onclick="declineStatus('`+childData.order_id+`')">DECLINE</button>
				//                  </td>
				//             </tr>`);
				// 	//});
				// });

   	function notificationBadge(){

   		var badge = document.getElementById('notifs');

   		$('#notifs').hide();


   	}






async function addPersonnel() {

	var station = document.getElementById("station").value;
	var per_pic = document.getElementById("per_pic");
	var per_contact = document.getElementById("per_contact").value;
	var per_name = document.getElementById("per_name").value;
	var per_addr = document.getElementById("per_addr").value;
	var per_username = document.getElementById('per_username').value;
	var per_pass = document.getElementById('per_pass').value;

	var uri = {};
	var uploadTask = storageRef.child("/personnels");
	uri = await getUploadUrl(per_pic, 0, uploadTask);


	var per_id = database.child('personnels').push().key;



	var data = {
			per_id: per_id,
			per_address: per_addr,
			per_name : per_name,
			per_contact: per_contact,
			per_username : per_username,
			per_pass: per_pass,
			pic: uri,
			client_id: sessionStorage.getItem("client_id"),
			status: "activate"
		};
		
		var updates = {};
		updates['personnels/' + per_id] = data;
		database.update(updates).then(function() {
			swal({
	            title: "Personnel added successfully",
	            text: " ",
	            icon: "success",
	            button: false,
	            timer: 1800
	          }).then(function(){
	            window.location = "blank.php?confirm&number="+per_contact+"&station="+station+"&name="+per_name+"&username="+per_username+"&password="+per_pass;
	          });	
		}).catch(function(error) {
			alert(error);
		});

}

var userDataRef = firebase.database().ref("personnels").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id"));
		userDataRef.once("value").then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
		  var key = childSnapshot.key;
		  var childData = childSnapshot.val();    

		  $('#personels').append(`
		  	<tr class="gradeU">
		  		<td><img src="`+childData.pic+`" width="50px;" height="50px;" style="border-radius:50%;"></td>
                <td>`+childData.per_name+`</td>
                 <td>`+childData.per_address+`</td>
                <td>`+childData.per_contact+`</td>
                <td>`+childData.per_username+`</td>
                <td>`+childData.per_pass+`</td>
                <td>
                   <input id="status`+childData.per_id+`" type="checkbox" onchange="changeStatusPer(this, '`+childData.per_id+`')" value=`+childData.status+` data-toggle="toggle">
				   <label for="status`+childData.per_id+`"" data-text-true="activate" data-text-false="deactivate"><i></i></label>
                </td>
            </tr>

            <script>


				 	if ($("#status`+childData.per_id+`").val() == "activate") {
					
						 $("#status`+childData.per_id+`").prop("checked", true);
					}
					else {
						$("#status`+childData.per_id+`").prop("checked", false);
					}
					$("#status`+childData.per_id+`").prop('checked', true);
					 		    	
			 	</script>
            `);
	
			});

		});
		   

		  // $('#personels').append(`
		  // 	<tr class="gradeU">
		  // 		<td><img src="`+childData.pic+`" width="50px;" height="50px;" style="border-radius:50%;"></td>
    //             <td>`+childData.per_name+`</td>
    //             <td>`+childData.per_contact+`</td>
    //             <td>`+childData.per_username+`</td>
    //             <td>`+childData.per_pass+`</td>
    //             <td>
    //                <input id="status`+childData.per_id+`" type="checkbox" onchange="changeStatusPer(this, '`+childData.per_id+`')" value=`+childData.status+` data-toggle="toggle">
				//    <label for="status`+childData.per_id+`"" data-text-true="activate" data-text-false="deactivate"><i></i></label>
    //             </td>
    //         </tr>

    //         <script>


				//  	if ($("#status`+childData.per_id+`").val() == "activate") {
					
				// 		 $("#status`+childData.per_id+`").prop("checked", true);
				// 	}
				// 	else {
				// 		$("#status`+childData.per_id+`").prop("checked", false);
				// 	}
				// 	$("#status`+childData.per_id+`").prop('checked', true);
					 		    	
			 // 	</script>
    //         `);
	



// var userDataRef = firebase.database().ref("orders").orderByChild("status").equalTo("activate");

// 		var substotalReport = 0;
// 		userDataRef.once("value").then(function(snapshot) {
// 		snapshot.forEach(function(childSnapshot) {
// 		  var key = childSnapshot.key;
// 		  var childData = childSnapshot.val();    


// 		  $('#subscription_reports').append(`
// 		  	<tr class="gradeU">
// 		  		<td>`+childData.order_id+`</td>
// 		  		<td>`+childData.order_id+`</td>
// 		  		<td>`+childData.order_id+`</td>
// 		  		<td>`+childData.order_id+`</td>
// 		  		<td>`+childData.order_id+`</td>
//             </tr>
          
//             `);
		  	
// 			document.getElementById("subsTotalAmount").innerHTML = substotalReport.toString();
	
			
// 		  });

// 		});	

		var userDataRef = firebase.database().ref("clients");
		userDataRef.once("value").then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
		  var key = childSnapshot.key;
		  var childData = childSnapshot.val();    
				
			if (childData.client_id == sessionStorage.getItem("client_id")) {

			document.getElementById("company_desu").innerHTML = childData.company;

			}
	
			});

		});	

	// var userDataRef = firebase.database().ref("clients").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id")).on("value", snapshot => {

	// let output = Object.keys(snapshot.val()).map(function(e) {
	// 	return snapshot.val()[e];
	// }); 
		
	// 	console.log(output[0][3]);
	// // document.getElementById('company_desu').innerHTML = ;
	// });




function changeStatusPer(status, id) {

	var data;

	if (status.checked == true) {
		data = "activate";
	}
	else {
		data = "deactivate";
	}

	var updates = {};
	updates['personnels/' + id + '/status'] = data;
	database.update(updates).then(function() {
		
	}).catch(function(error) {
		alert(error);
	});
}


// function updatePersonel(id){

// 	var data = {
// 		per_name : per_name,
// 		per_username : per_username,
// 		per_pass: per_pass
// 	}

// 	var updates = {};
// 	updates['personel/' + pers_id] = data;
// 	database.update(updates).then(function() {
// 		reload_page();
// 	}).catch(function(error) {
// 		alert(error);
// 	});

// }


function uploadPromise(file, ref, idx) {
	return new Promise(function(resolve, reject) {
		var task = ref.put(file.files[idx]);
		task.on('state_changed',
			function progress(snapshot){},
			function error(err){reject(err);},
			function complete(){resolve(task);}
			);
	}).then(function(tasks) {
		return tasks.ref.getDownloadURL();
	}).then(function(downloadURL) {
		return downloadURL;
	});
}

function upload() {
	storageRef.child("requirements/" + files.files[0].name)
			.put(files.files[0]).then(function(snapshot) {
				snapshot.ref.getDownloadURL().then(function(downloadURL) {
			   		return downloadURL;
			  	});
			});
}


async function product(type, adminPrice) {

	// document.getElementById("saveBtn").setAttribute("disabled", true);
	// document.getElementById("saveBtn").innerHTML = 'Saving...';

	


	// let output = Object.keys(service).map(function(e) {
	//   return service[e];
	// });

	
	if (document.getElementById('prod_pic').value == "" ){
		swal({
            title: "Please provide all required fields!",
            icon: "warning",
            text:" ",
            timer: 1300,
            button: false
        });
	}
	// else if (document.getElementById('refill_price').value == "" ){
	// 	swal({
 //            title: "Please provide all required fields!",
 //            icon: "warning",
 //            text:" ",
 //            timer: 1300,
 //            button: false
 //        });
	// }
	else if (document.getElementById('minimum_order').value == "" ){
		swal({
            title: "Please provide all required fields!",
            icon: "warning",
            text:" ",
            timer: 1300,
            button: false
        });
	}else if (document.getElementById('maximum_order').value == "" ){
		swal({
            title: "Please provide all required fields!",
            icon: "warning",
            text:" ",
            timer: 1300,
            button: false
        });
	}else if(document.getElementById('prod_type').value == "" ){
		swal({
            title: "Please provide all required fields!",
            icon: "warning",
            text:" ",
            timer: 1300,
            button: false
        });
	}


	else{
	var prod_pic = document.getElementById("prod_pic");
	// var service_type = document.getElementById("service_type");
	var prod_id = document.getElementById("prod_id").value;
	
	var minimum_order = document.getElementById('minimum_order').value;
	var maximum_order = document.getElementById('maximum_order').value;


	var checks = document.getElementsByClassName('checks');
	var str = [];



	for ( i = 0 ; i < 2; i++){
		if ( checks[i].checked === true){
			//str += checks[i].value + ",";
			str.push(checks[i].value);
		}
	}
	// var strss = str.join(" and ");

	// if (productPhotoStorage) {}

	var productPhotoStorage = storageRef.child('products/' + prod_pic.files[0].name);
	var productImageUrl = await uploadPromise(prod_pic, productPhotoStorage, 0);

	var e = document.getElementById("prod_type");
	var result = e.options[e.selectedIndex].text;

	var t = type.split(", ");

	


	var pid = database.child('products').push().key;

	var service = {};



	for (var i = 0 ; i < t.length; i++) {
		service[t[i].toString()] = {
			refill : {
				price: document.getElementById('refill_price'+t[i]).value
			},
			sale : {
				price: document.getElementById('sale_price'+t[i]).value
			}
		};
		// console.log(service[t[0]]);
	}	

	var datass = {
		product_image: productImageUrl,
		service_types: service,
		minimum_order: minimum_order,
		maximum_order: maximum_order,
		status: "available"
	}

	var datas = {
	 	[result.toLowerCase()]: datass
	}


	var data = {
		product_id: pid,
		client_id: sessionStorage.getItem("client_id"),
		types: datas,

	}

	// console.log(result.toLowerCase());
	}
	// var updates = {};
	// updates['/products/' + pid] = data;
	// database.update(updates);

	var userDataRef = database.child("products").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id"));
	userDataRef.once("value").then(function(snapshot) {

		if (snapshot.exists()) {
			
			snapshot.forEach(function(childSnapshot) {
			  	var key = childSnapshot.key;
			  	var childData = childSnapshot.val();    

			  	let output = Object.keys(childData).map(function(e) {
				  return childData[e];
				});

				// if (Object.keys(output[1]).includes(result.toLowerCase())) {
				// 	swal({ 
		  //               title: "This product has already been added!",
		  //               icon: "error",
		  //               text:" ",
		  //               timer: 1300,
		  //               button: false
		  //           }).then(function(){

				// 		document.getElementById("saveBtn").setAttribute("disabled", false);
				// 		document.getElementById("saveBtn").innerHTML = 'Save';
			 //         	reload_page();
			 //       	});
				// }
				// else {
					

					database.child('products/' + key +'/types').child(result.toLowerCase()).set(datass).then(function(){
						  swal({
				                title: "Product added sucessfully!",
				                icon: "success",
				                text:" ",
				                timer: 1300,
				                button: false
				            }).then(function(){
								document.getElementById("saveBtn").setAttribute("disabled", false);
								document.getElementById("saveBtn").innerHTML = 'Save';
					           	reload_page();
					       	});
					});


				// }
			});

		}
		else {
			database.child('products/' + pid).set(data).then(function(){
				  swal({
		                title: "Product added sucessfully!",
		                icon: "success",
		                text:" ",
		                timer: 1300,
		                button: false
		            }).then(function(){
						document.getElementById("saveBtn").setAttribute("disabled", false);
						document.getElementById("saveBtn").innerHTML = 'Save';
			          	reload_page();
			          });
			});

		}

			// database.child('products/' + pid).set(data).then(function(){
			// 	  swal({
		 //                title: "Product added sucessfully!",
		 //                icon: "success",
		 //                text:" ",
		 //                timer: 1300,
		 //                button: false
		 //            }).then(function(){
			// 			document.getElementById("saveBtn").setAttribute("disabled", false);
			// 			document.getElementById("saveBtn").innerHTML = 'Save';
			//             location.reload();
			//           });
			// });

	});


}




var userDataRef = firebase.database().ref("products").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id"));
userDataRef.once("value", snapshot => {
snapshot.forEach(function(childSnapshot) {
  var key = childSnapshot.key;
  var childData = childSnapshot.val();  


	let output = Object.keys(childData).map(function(e) {
		return childData[e];

	});

	// console.log(childData);

	let output5 = Object.keys(output[2]).map(function(e) {
		return output[2][e];
	});







// let output2 = Object.keys(output1[]).map(function(e) {
// 	return output1[e];
// });



if(Object.keys(output[2]).length == 3){
		document.getElementById("addproduct").disabled=true;
}

// if (document.getElementById("refill_price").value == "") {
//     alert("Ching chong");
// }





var elems = "";

for (var i = 0; i < Object.keys(output[2]).length; i++) {

	elems += Object.keys(output[2])[i].toLowerCase() + ",";



	
	

	let output12 = Object.keys(output5[i]).map(function(e) {
		return output5[i][e];
	});


	// let output123 = Object.keys(output12[3]).map(function(e) {
	// 	return output12[3][e];
	// });
	

	
	// var elementary = "";

	// for (var i = 0; i < 0; i++){
		
	// }

	// let output123 = Object.keys(output12[i].service_types).map(function(e) {
	// 	return output12[i].service_types[e];
	// });

	// let output1234 = Object.keys(output123[i]).map(function(e) {
	// 	return output123[e];
	// });

	// console.log(Object.keys(output1234));


 
 	$('#hidden').val(elems);

 	// if(output1234[i].sale.price == ""){
 	// 	$('#hidePrice').hide();

 	// }

	// <h4 style="margin-bottom : 16px" id="hidePrice"><strong>Sale | ₱ `+output1234[i].sale.price+`</strong></h4>
	//                	  <h4 style="margin-bottom : 16px"><strong>Refill | ₱`+output1234[i].refill.price+`</strong></h4>

	

	$('#body').append(`
	        <div class="col-lg-4" id="bodys">
	             <div class="custom-box" >
	                <div class="4servicetitle">
	                  <h1>`+Object.keys(output[2])[i].toUpperCase()+`</h1>
	                  <hr>
	                </div>
	                <div class="icn-main-container">
	                  <img src="`+output5[i].product_image+`" height="200px" width="200px;"/>
	                </div>
	                <ul id="pricing`+i+`" style="padding-inline-start : 0px; margin-top: 24px; margin-bottom: 24px;">

	               	  <h4 style="margin-bottom : 16px"><strong>Service Type</strong></h4>
	               	  <hr>
	               	  <div>
	               	  `+servicePrices(output5[i].service_types)+`
	            	
	                </ul>
	                <h4 style="margin-bottom : 16px"><strong>Minimum order | `+output5[i].minimum_order+`</strong></h4>
	               	<h4 style="margin-bottom : 16px"><strong>Maximum order | `+output5[i].maximum_order+`</strong></h4>

	                 <button class="btn btn-primary" data-toggle="modal" data-target="#editModal`+i+`" value="Update" >Update</button><br><br>
	                 <input id="status`+i+`" type="checkbox" onchange="productStatus(this, '`+childData.client_id+`', '`+childData.product_id+`', '`+Object.keys(output[2])[i].toLowerCase()+`', '`+output5[i].status+`')" value="`+output5[i].status+`" data-toggle="toggle">
					 <label for="status`+i+`" data-text-true="available" data-text-false="unavailable"><i></i></label>
	       
	              </div>
	        </div>

	         <div class="modal fade" id="editModal`+i+`" role="dialog">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                              <h4 class="modal-title">Edit Product</h4>
                            </div>
                            <div class="modal-body">
                                
                                <div class="form-group">
                                    <center>
                                    <div class="form-group">
                                        <label for="ppic`+i+`" class="hover">
                                            <img src="`+output5[i].product_image+`" id="preview1`+i+`" data-tooltip="true" title="insert" data-animation="false" width="200px;" height="200px;" >
                                            <input type="file" name="prod_pic" class="pics" id="ppic`+i+`" value="" style="visibility: hidden;">
                                        </label>
                                    </div>

                                </center>
                                    	<center>
                                        <h3>`+Object.keys(output[2])[i].toUpperCase()+`</h3>
                                        </center>
                                        <br>
                                        <strong style="margin-left: 33px;">Choose your available service type:</strong><br>
                                         <div style="width: 88%; margin-top: 10px; margin-bottom: -10px; margin-left: 50px;" id="service_Type">
                                         <div class="row" id="addProductsss">
	                                          <div class="col-sm-6">
	                                            `+updateService(output5[i].service_types, Object.keys(output[2])[i].toUpperCase())+`
	                                            </div>
	                                          </div>
                                          	</div>
                                          </div>
                                        <input value="`+output5[i].minimum_order+`" style="width: 40%; margin-top: 10px; margin-bottom: -10px; margin-left: 39px;" type="number" placeholder="Minimum order.." id="min_order`+i+`">
                                        <input value="`+output5[i].maximum_order+`" style="width: 40%; margin-top: 10px; margin-bottom: -10px; margin-left: 39px; margin-right: 15px;"" type="number" placeholder="Maximum order.." id="max_order`+i+`">
		                            </div>
		                            <div class="modal-footer">
		 																																
		                                <button type="button" class="btn btn-primary" name="save_product" onclick="updateProduct('`+key+`','`+Object.keys(output[2])[i].toLowerCase()+`','`+i+`','`+output5[i].product_image+`','`+output5[i].minimum_order+`','`+output5[i].maximum_order+`','`+Object.keys(output12[3])+`')" id="saveBtn">Save</button>
		                                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
		                             
		                            </div>
		                          </div>
                          
                        </div>
                      </div>

            <script type="text/javascript">
	            $(function () {
	                $("#test3").click(function () {
	                    if ($(this).is(":checked")) {
	                        $("#price_refill").show();
	                    }else {
	                        $("#price_refill").hide();
	                    }
	                });
	                $("#price_sale").hide();
	                $("#test4").click(function () {
	                    if ($(this).is(":checked")) {
	                        $("#price_sale").show();
	                    }else {
	                        $("#price_sale").hide();
	                    }
	                });
	            });
        	</script>
	        <script>


	        $(document).on('change','#ppic`+i+`', function(event){ 

                   var tmppath = URL.createObjectURL(event.target.files[0]);
                    $("#preview1`+i+`").fadeIn("fast").attr('src',tmppath);       
                });

                $(function () {

                		if($('#test3`+i+`').prop("checked") == true) {
                			 $("#rprice`+i+`").show();
                		}
                		else {
                			 $("#rprice`+i+`").hide();
                		}

                		if($('#test4`+i+`').prop("checked") == true) {
                			 $("#sprice`+i+`").show();
                		}
                		else {
                			 $("#sprice`+i+`").hide();
                		}

                         
                            $("#test3`+i+`").click(function () {
                                if ($(this).is(":checked")) {
                                    $("#rprice`+i+`").show();
                                }else {
                                    $("#rprice`+i+`").hide();
                                }
                            });
                         
                            $("#test4`+i+`").click(function () {
                                if ($(this).is(":checked")) {
                                    $("#sprice`+i+`").show();
                                }else {
                                    $("#sprice`+i+`").hide();
                                }
                            });





                            
                           

                        });


            </script>

            <script>


			 	if ($("#status`+i+`").val() == "available") {
				
					 $("#status`+i+`").prop("checked", true);
				}
				else {
					$("#status`+i+`").prop("checked", false);
				}

				 		    	
		 	</script>

		 	<style type="text/css">
		         input[id="status`+i+`"] {
		        display: none;
		      }

		      input[id="status`+i+`"] + label {
		        display: inline-block;
		        background-color: #DB574D;
		        color: white;
		        font-family: sans-serif;
		        font-size: 14px;
		        font-weight: bold;
		        height: 30px;
		        line-height: 30px;
		        position: relative;
		        text-transform: uppercase;
		        width: 230px;
		      }

		      input[id="status`+i+`"] + label,
		      input[id="status`+i+`"] + label i {
		        -webkit-transition: all 200ms ease;
		        -moz-transition: all 200ms ease;
		        -o-transition: all 200ms ease;
		        transition: all 200ms ease;
		      }

		      input[id="status`+i+`"]:checked + label {
		        background-color: #428bca;
		      }

		      input[id="status`+i+`"] + label:before,
		      input[id="status`+i+`"] + label:after,
		      input[id="status`+i+`"] + label i {
		        width: 50%;
		        display: inline-block;
		        height: 100%;
		        text-align: center;
		      }

		      input[id="status`+i+`"] + label:before {
		        content: attr(data-text-true);
		      }

		      input[id="status`+i+`"] + label:after {
		        content: attr(data-text-false);
		      }

		      input[id="status`+i+`"] + label i {
		        top: 10%;
		        background-color: white;
		        height: 80%;
		        left: 5%;
		        position: absolute;
		        width: 48%;
		      }

		      input[id="status`+i+`"]:checked + label i {
		        left: 50%;
		      }
		  </style>
	        
	 		`);
	// console.log(output5[i].service_types);
		
		

		// if(Object.keys(output1[i]['service_types']).includes("refill")) {
		// 	$('#pricing'+i).append(`<li><h4><strong> Refill | ₱`+output1[i]['service_types']['refill'].price+`</strong></h4></li>`);
		// 	$('#test3'+i).prop("checked", true);
		// 	// $('#rprice'+i).show();
		// 	$('#rprice'+i).val(output1[i]['service_types']['refill'].price);
		// }
		
		// if(Object.keys(output1[i]['service_types']).includes("sale")) {
		// 	$('#pricing'+i).append(`<li><h4><strong> Sale | ₱`+output1[i]['service_types']['sale'].price+`</strong></h4></li>`);
		// 	$('#test4'+i).prop("checked", true);
		// 	// $('#sprice'+i).show();
		// 	$('#sprice'+i).val(output1[i]['service_types']['sale'].price);
		// }
	}
	// }
  });
});


function updateService(res, prod) {

	var update = '';

	[res].forEach(function(snapshot) {

		let output12 = Object.keys(snapshot).map(function(e) {
			return snapshot[e];
		});

		for (var i = 0; i < Object.keys(snapshot).length; i++) {

			var checkRefill = (output12[i].refill.price != "") ? `checked` : ``;
			var checkSale = (output12[i].sale.price != "") ? `checked` : ``;

			update += `<h1><strong>`+Object.keys(snapshot)[i]+`</strong></h1>
						<div class="row"><div class="col"><input type="checkbox" class="checks`+prod+i+`" value="Refill" id="test3`+prod+i+`"  name="service_Type[]" `+checkRefill+`>&nbsp;Refill &nbsp;&nbsp; <input type="number" min="1" oninput="validity.valid||(value='');" id="price_refill`+prod+i+`" value="`+output12[i].refill.price+`" placeholder="Price..." min="0"></div>
	          			<div class="col" style="margin-top:8px"><input type="checkbox" class="checks`+prod+i+`" value="Sale" id="test4`+prod+i+`" name="service_Type[]" `+checkSale+`>&nbsp;Sale &nbsp;&nbsp; <input type="number" min="1" oninput="validity.valid||(value='');" id="price_sale`+prod+i+`" onkeyup="keywar();" min="0" value="`+output12[i].sale.price+`" placeholder="Price..." style="margin-left: 6px; margin-top: 2px;" ><br><br><br><p id="message" style="text-align: center; color: red;"></p></div></div>

	          			<script>

	          				if($('#test3`+prod+i+`').prop("checked") == true) {
                			 $("#price_refill`+prod+i+`").show();
	                		}
	                		else {
	                			 $("#price_refill`+prod+i+`").hide();
	                		}

	                		if($('#test4`+prod+i+`').prop("checked") == true) {
	                			 $("#price_sale`+prod+i+`").show();
	                		}
	                		else {
	                			 $("#price_sale`+prod+i+`").hide();
	                		}

	          				 $("#test3`+prod+i+`").click(function () {
                                if ($(this).is(":checked")) {
                                    $("#price_refill`+prod+i+`").show();
                                }else {
                                    $("#price_refill`+prod+i+`").hide();
                                }
                            });

                            $("#test4`+prod+i+`").click(function () {
                                if ($(this).is(":checked")) {
                                    $("#price_sale`+prod+i+`").show();
                                }else {
                                    $("#price_sale`+prod+i+`").hide();
                                }
                            });


	          			</script>`;		
		}

	});

	return update;

}


function servicePrices(res) {

	var prices = '';

	[res].forEach(function(snapshot) {

		let output12 = Object.keys(snapshot).map(function(e) {
			return snapshot[e];
		});


		for (var i = 0; i < Object.keys(snapshot).length; i++) {

			var refill = (output12[i].refill.price != "") ? `<h4 style="margin-bottom : 16px"><strong>Refill : ₱`+output12[i].refill.price+`</strong></h4>` : ``;
			var sale = (output12[i].sale.price != "") ? `<h4 style="margin-bottom : 16px"><strong>Sale : ₱`+output12[i].sale.price+`</strong></h4>` : ``;


			prices += `<h1 style="margin-bottom : 16px"><strong>`+Object.keys(snapshot)[i]+`</strong></h1>
						`+refill+`
	          			`+sale+``;
		}

	});

	return prices;
}
	

async function updateProduct(id, type, i, img, min, max, status) {

	var t = type.charAt(0).toUpperCase() + type.slice(1);
	var prod_pic = document.getElementById('ppic'+i);
	// var refill_price = document.getElementById('rprice'+i).value;
	// var sale_price = document.getElementById('sprice'+i).value;
	var order_min = document.getElementById('min_order'+i).value;
	var order_max = document.getElementById('max_order'+i).value;



	var st = status.split(",");
	
	// var refillPrice = document.getElementById('price_refill'+i).value;
	// var salePrice = document.getElementById('price_sale'+id+i).value;

	var servtype = {};
	var datass = {};
	var price_sale = {};
	var price_refill = {};
	var checksx;
	var str = [];


	var productImageUrl;

	if (prod_pic.files.length == 0) {
		productImageUrl = img;
	}
	else {
		var productPhotoStorage = storageRef.child('products/' + prod_pic.files[0].name);
		productImageUrl = await uploadPromise(prod_pic, productPhotoStorage, 0);
	}

	for (var s = 0; s < st.length; s++) {

		var refillPrice = document.getElementById('price_refill'+type.toUpperCase()+s).value;
		var salePrice = document.getElementById('price_sale'+type.toUpperCase()+s).value;

		
		price_refill = {
			price : refillPrice
		}

		price_sale = {
			price : salePrice
		}

		checksx = document.getElementsByClassName('checks'+type.toUpperCase()+s);
	

		for ( i = 0 ; i < 2; i++){
		if ( checksx[i].checked === true){
			str.push(checksx[i].value);
			}
		}

	

		servtype[st[s]] = {
			["refill"] : price_refill,
			["sale"] : price_sale
		}


	}

	datass = {
			service_types: servtype,
			product_image: productImageUrl,
			minimum_order: order_min,
			maximum_order: order_max,
			status: "available"
		}

	

		console.log(datass);



	var updates = {};
		updates['products/'+id+'/types/' + type] = datass;

		database.update(updates).then(function() {
			 // var pusher = new Pusher('4de9228ab3e254f06ee8', {
				// 	  cluster: 'ap1',
				// 	  authEndpoint: '/aquae4/pages/auth.php'
				// 	});
	   //        	pusherChannel = pusher.subscribe("private-update");
			swal({
	            title: t+" updated successfully",
	            text: " ",
	            icon: "success",
	            button: false,
	            timer: 1800
	          }).then(function(){

// pusherChannel.bind('pusher:subscription_succeeded', function() {
// 	console.log('asd');
	          	 // pusherChannel.trigger('client-update', { name: "updated", message: "Your order has been accepted" });
	          	 // });
	            reload_page();

	          });	
		});
}

// function deleteProduct(){
// 	var prod_id = document.getElementById("prod_id").value;

// console.log(prod_id);
// 	firebase.database().ref().child('/products/' + prod_id).remove();
// 	alert('product removed');
// 	reload_page();

// }



function deleteTest(id, type){

	var t = type.charAt(0).toUpperCase() + type.slice(1);

	const deedRef = firebase.database().ref('products').child(id+'/types/'+type);
	deedRef.update().then(function(){

		swal({
	        title: t+" disabled successfully",
	        text: " ",
	        icon: "warning",
	        button: false,
	        timer: 1800
	      }).then(function(){
	        window.location = "product.php";
	      });	
	}).catch(function(error) {
	alert(error);
	});
}

function addWallet(bal,id, i){

 	var walletAdd = document.getElementById('walletAdd'+i);

 	var newVal = parseInt(bal) + parseInt(walletAdd.value);

 	var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
 	var date = new Date();
 	var hours = date.getHours();
 	var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
 	var ampm = hours >= 12 ? 'AM' : 'PM';
 	hours = hours % 12;
  	hours = hours ? hours : 12; // the hour '0' should be '12'
 	var format_date = months[date.getMonth()]+ " " + date.getDate() + "," + date.getFullYear()+ " | " + hours + ":" + date.getMinutes()+" "+ampm;

 	var updates = {};
	updates['customers/' + id + '/wallet'] = newVal.toString();
	database.update(updates).then(function() {

		var updaters = {};
		updaters['cash_ins/' + i + '/status'] = "verified";
		database.update(updaters).then(function() {

			var updaters = {};
			updaters['cash_ins/' + i + '/verified_date'] = format_date;
			database.update(updaters).then(function() {
				var pusher = new Pusher('4de9228ab3e254f06ee8', {
					  cluster: 'ap1',
					  authEndpoint: '/aquae4/Dashio/auth.php'
					});
	          	pusherChannel = pusher.subscribe("private-update");

				swal({
		            title:" Wallet Added successfully",
		            text: " ",
		            icon: "success",
		            button: false,
		            timer: 1800
		        }).then(function(){

		        	pusherChannel.trigger('client-update', { name: "updated", message: "Your request has been verified" });

		        	$('#addWallet'+i).modal('toggle');

		        	const orderList = document.querySelector('#customer_request');
					let row = orderList.querySelector('tr[data-id= ' + i + ']');
					orderList.removeChild(row);

		        });
	    	});

		});

	});

 }

 	function cancelRequest(id){

    var reason = document.getElementById('reason'+id).value;
 	var updates = {};
	updates['cash_ins/' + id + '/status'] = "cancelled";
	database.update(updates).then(function() {

		var updatess = {};
		updatess['cash_ins/' + id + '/reason_for_cancelling'] = reason;
		database.update(updatess).then(function() {
			var pusher = new Pusher('4de9228ab3e254f06ee8', {
					  cluster: 'ap1',
					  authEndpoint: '/aquae4/Dashio/auth.php'
					});
	          	pusherChannel = pusher.subscribe("private-update");

	          	swal({
		            title:" Wallet declined...",
		            text: " ",
		            icon: "success",
		            button: false,
		            timer: 1800
		        }).then(function(){

		        pusherChannel.trigger('client-update', { name: "updated", message: "Sorry, your request is declined." });
				reload_page();
	// const orderList = document.querySelector('#customer');
	// let row = orderList.querySelector('tr[data-id= ' + id + ']');
	// orderList.removeChild(row);
					});

				}).catch(function(error) {
				alert(error);
			});
		});

 	}

 	var userDataRef = firebase.database().ref("orders").orderByChild("status").equalTo("confirmed");
		userDataRef.once("value").then(function(snapshot) {

		var totalReport = 0;

		snapshot.forEach(function(childSnapshot) {
		  var key = childSnapshot.key;
		  var childData = childSnapshot.val();  

		  // var x = document.getElementById("mySelect").value;
  		//   document.getElementById("reportsTable").innerHTML = "You selected: " + x;  

  			// console.log(childData.order_time);
  			  var str = childData.order_time;
			  var res = str.substring(0, str.length - 19);

		  		if (childData.client_id == sessionStorage.getItem("client_id")) {

				  $('#tableReports').append(`
				  	<tr class="gradeU">
				  		<td>`+res+`</td>
		                <td>`+childData.total_amount+`</td>
		               
		            </tr>
		            `);

				  	totalReport += parseInt(childData.total_amount);
					// console.log(totalReport);
					
					document.getElementById("reportsTotal").innerHTML = '₱'+totalReport.toString();
			
				}
			});

		});

 	// function Reports(){

 		var userDataRef = firebase.database().ref("orders").orderByChild("status").equalTo("confirmed");
		userDataRef.once("value").then(function(snapshot) {

		var totalReport = 0;

		snapshot.forEach(function(childSnapshot) {
		  var key = childSnapshot.key;
		  var childData = childSnapshot.val();  

		  // var x = document.getElementById("mySelect").value;
  		//   document.getElementById("reportsTable").innerHTML = "You selected: " + x;  

		  		if (childData.client_id == sessionStorage.getItem("client_id")) {

				  $('#reportsTable').append(`
				  	<tr class="gradeU">
				  		<td>`+childData.order_time+`</td>
		                <td><button class="btn btn-success" data-toggle="modal" data-target="#det_of_reportingss`+childData.order_id+`">Details</button></td>
		               
		            </tr>
		            `);

				  $('#modal_of_reports').append(`
				  	<div class="modal fade" id="det_of_reportingss`+childData.order_id+`" role="dialog">
		                        <div class="modal-dialog">
		                          <div class="modal-content">
		                            <div class="modal-header">
		                              <button type="button" class="close" data-dismiss="modal">&times;</button>
		                              <h4 class="modal-title">Details</h4>
		                            </div>
		                            <div class="modal-body">
		                                <div class="form-group">
		                                   <table class="table table-striped">
		                                   <thead>
			                                   	<tr>
			                                   		<th>Product</th>
			                                   		<th>Water Type</th>
			                                   		<th>Refill (quantity)</th>
			                                   		<th>Purchase (quantity)</th>
			                                   	</tr>
		                                   	</thead>
		                                    <tbody id="item`+childData.order_id+`">
		                                    	`+detailsProd(childData)+`
		                                    </tbody>
			                                <tfoot>
		                      					<tr>
													<td></td>
			                                   		<td></td>
			                                   		<td><h2><b>Total:</b></h2></td>
			                                   		<td><h2><b><u>₱`+childData.total_amount+`</u></b></h2></td>

			                                   	</tr>
			                                </tfoot>
		                                   </table>
		                                   <h4>Payment: <b><u>`+childData.payment+`</u></b></h4>
		                                   <h4>Note: <i>`+childData.notes+`</i></h4>
		                                </div>
		                            </div>
		                            <div class="modal-footer">
		                             <input type="hidden" name="prod_id" id="prod_id">
		                                <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
		                            </div>
		                          </div>
		                          
		                        </div>
		                      </div>
		            `);

				  	totalReport += parseInt(childData.total_amount);
					// console.log(totalReport);
					
					document.getElementById("totalReport").innerHTML = '₱'+totalReport.toString();
			
				}
			});

		});
 		
 	// }

function detailsProd(res) {
	// console.log(res.items);
	var item = '';
	for(var x = 0; x < Object.keys(res.items).length; x++) {
		var purchase = (res.items[Object.keys(res.items)[x]].hasOwnProperty('purchase')) ? res.items[Object.keys(res.items)[x]].purchase.quantity : 0;
		var refill = (res.items[Object.keys(res.items)[x]].hasOwnProperty('refill')) ? res.items[Object.keys(res.items)[x]].refill.quantity : 0;
		item += `<tr><td>`+Object.keys(res.items)[x]+`</td>
		<td>`+res.items[Object.keys(res.items)[x]].water_type+`</td>
		<td>`+refill+`</td>
		<td>`+purchase+`</td>
		</tr>`;
	}

	return item;	
	
}

function loadAcctDetails() {
	var userDataRef = firebase.database().ref("clients").orderByChild("client_id").equalTo(sessionStorage.getItem("client_id"));
			userDataRef.once("value").then(function(snapshot) {
			snapshot.forEach(function(childSnapshot) {
			  	var key = childSnapshot.key;
			  	var childData = childSnapshot.val();  
			 
			 	document.getElementById('comp_names').value = childData.company;
			 	document.getElementById('comp_contacts').value = childData.contact;
			 	document.getElementById('comp_addresss').value = childData.address;
			 	document.getElementById('comp_filters').value = childData.no_of_filter;
			 	document.getElementById('comp_fees').value = childData.shipping_fee;
		
		});

	});
}


function editCompAcct(){


	if ( document.getElementById('comp_names').value == sessionStorage.getItem("company") &&
		 document.getElementById('comp_addresss').value == sessionStorage.getItem("address") &&
	  	 document.getElementById('comp_contacts').value == sessionStorage.getItem("contact") &&
	   	 document.getElementById('comp_filters').value == sessionStorage.getItem("no_of_filter") &&
	   	 document.getElementById('comp_fees').value == sessionStorage.getItem("shipping_fee") ) {


		swal({
	            title:"You've change nothing",
	            text: " ",
	            icon: "warning",
	            button: false,
	            timer: 1400
	          });
		// alert("Nothing changes!");

	} else {				

	    var updateName = {};
		updateName['clients/' + sessionStorage.getItem("client_id") + "/company"] = document.getElementById('comp_names').value;
		database.update(updateName);
		sessionStorage.setItem("company", document.getElementById('comp_names').value);

		var updateAddr = {};
		updateAddr['clients/' + sessionStorage.getItem("client_id") + "/address"] = document.getElementById('comp_addresss').value;
		database.update(updateAddr);
		sessionStorage.setItem("address", document.getElementById('comp_addresss').value);

		var updateContact = {};
		updateContact['clients/' + sessionStorage.getItem("client_id") + "/contact"] = document.getElementById('comp_contacts').value;
		database.update(updateContact);
		sessionStorage.setItem("contact", document.getElementById('comp_contacts').value);

		var updateFilt = {};
		updateFilt['clients/' + sessionStorage.getItem("client_id") + "/no_of_filter"] = document.getElementById('comp_filters').value;
		database.update(updateFilt);
		sessionStorage.setItem("no_of_filter", document.getElementById('comp_filters').value);

		var updateFee = {};
		updateFee['clients/' + sessionStorage.getItem("client_id") + "/shipping_fee"] = document.getElementById('comp_fees').value;
		database.update(updateFee);
		sessionStorage.setItem("shipping_fee", document.getElementById('comp_fees').value);

		$('#editAccts').modal('toggle');

		swal({
	            title:"Successfully updated",
	            text: " ",
	            icon: "success",
	            button: false,
	            timer: 1400
	          }).then(function(){
	          	 reload_page();
	          });
	}

 }

					 

  // 		var userDataRef = database.child("cash_ins").orderByChild("status").equalTo("verified").on("child_added", snapshot => {
		// 		// snapshot.forEach(function(childSnapshot) {
		// 			var childKey = snapshot.key;
		// 			var childData = snapshot.val();


		// 			firebase.database().ref("customers").orderByChild("customer_id").equalTo(childData.customer_id).once("value", snapshots => {
		// 			snapshots.forEach(function(childSnapshots) {
		// 			  var keys = childSnapshots.key;
		// 			  var childDatas = childSnapshots.val();
					
		// 				  // var childDatass = snapshotss.val(); 

					
					 

		// 				let output = Object.keys(childData).map(function(e) {
		// 						return childData[e];
								
		// 				});

		// 				let output1 = Object.keys(output[3]).map(function(e) {
		// 						return output[3][e];
								
		// 				});

		// 				let output2 = Object.keys(output1[0]).map(function(e) {
		// 						return output1[0][e];
								
		// 				});

		// 				let output3 = Object.keys(output2[0]).map(function(e) {
		// 						return output2[0][e];
								
		// 				});


		// 			if(childData.client_id == sessionStorage.getItem("client_id")){

		// 				var first = childDatas.firstname.charAt(0).toUpperCase() + childDatas.firstname.slice(1);
		// 				var last = childDatas.lastname.charAt(0).toUpperCase() + childDatas.lastname.slice(1);
		    
		//     var val = Math.floor(1000 + Math.random() * 9000);

		// 	$('#admin_history').DataTable().row.add([
		// 		''+childData.cash_in_id,
		// 		''+first+ ` `+last,
		// 		''+childData.transaction_code,
		// 		''+childData.amount

		// 	]).draw();
		// 			}
		// 		});
		// 	});
		// });





 // function editWallet(wallet,id, i){

 // 	var walletEdit = document.getElementById('walletEdit'+i);

 // 	var updates = {};
	// 	updates['customers/' +id+ '/wallet'] = walletEdit.value;
	// 	database.update(updates).then(function() {
	// 		swal({
	//             title:" Wallet updated successfully",
	//             text: " ",
	//             icon: "success",
	//             button: false,
	//             timer: 1800
	//           }).then(function(){
	//             window.location = "blank.php";
	//           });	
	//   	// reload_page();
	// 	}).catch(function(error) {
	// 		alert(error);
	// 	});	
 // }



	// let deleteProd = this.firebase.database.ref('products/' + id + 'types');
 //    deleteProd.remove();

	// // firebase.database().ref('/products/' + pid).remove();
	// // alert('product removed');
	//           swal({
 //                title: "Product deleted sucessfully!",
 //                icon: "error",
 //                text: "",
 //                timer: 1500,
 //                 button: false
 //            }).then(function(){reload_page()});

	


// $('#editModal').append(`
                     
//         <div class="modal fade" id="editModal" role="dialog">
//                         <div class="modal-dialog">
//                           <div class="modal-content">
//                             <div class="modal-header">
//                               <button type="button" class="close" data-dismiss="modal">&times;</button>
//                               <h4 class="modal-title">Edit Product</h4>
//                             </div>
//                             <div class="modal-body">
                                 
//                                 <div class="form-group">
//                                     <center>
//                                     <!-- <input type="file" class="btn-primary" style="width: 88%;" name="" placeholder="Price"><br> -->
//                                     <div class="form-group">
//                                         <label for="image" class="hover">
//                                             <img src="images/add.png" id="editPreview" data-tooltip="true" title="insert" data-animation="false" >
//                                             <input type="file" name="prod_pic" style="visibility: hidden;" id="image">
//                                         </label>
//                                     </div>
//                                     <select class="form-control" id="prod_type" style="width: 88%;" name="prod_type">
//                                         <option selected="selected" disabled>Select Product type</option>
//                                         <option value="Gallon Size">Gallon Size</option>
//                                         <option value="Bottled Size">Bottled Size</option>
//                                         <option value="Round Container Size">Round Container Size</option>
//                                     </select><br>
//                                     <div class="form-control" style="width: 88%;">
//                                          <input type="checkbox" value="Alkaline" class="water_type" name="water_type[]">Alkaline
//                                    <input type="checkbox" value="Distilled" class="water_type"  name="water_type[]">Distilled
//                                    <input type="checkbox" value="Mineral" class="water_type" name="water_type[]">Mineral
//                                    <input type="checkbox" value="Purified" class="water_type" name="water_type[]">Purified
//                                     </div><br>
                                  
//                                    <input type="text" class="form-control" style="width: 88%;" id="prod_price" name="prod_price" placeholder="Price"><br>
//                                    <input type="text" class="form-control" style="width: 88%;" id="express_price" name="express_price" placeholder="Express Delivery Price"><br>
//                                    <input type="text" class="form-control" style="width: 88%;" id="delivery_price" name="delivery_price" placeholder="Delivery Price"><br>
//                                    <input type="text" class="form-control" style="width: 88%;" id="no_of_filter" name="no_of_filter" placeholder="No. of Filtration"><br>
//                                    <input type="text" class="form-control" style="width: 88%;" id="address" name="address" placeholder="Complete Address"><br>
//                                     <select class="form-control" style="width: 88%;" id="mop" name="mop">
//                                         <option selected="selected" disabled>Mode of payment</option>
//                                         <option value="Paypal">Paypal</option>
//                                         <option value="Cash on delivery">Cash on delivery</option>
//                                     </select>
//                                    </center>
//                                 </div>
//                             </div>
//                             <div class="modal-footer">
//                                 <input type="hidden" name="prod_id" id="prod_id">
//                                 <button type="submit" class="btn btn-primary" name="update">Save</button>
//                                 <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                           
//                             </div>
//                           </div>
//             </div> 
//         </div>
//     </div>

   


//  	`);

// var userDataRef = firebase.database().ref("products").orderByKey();
// userDataRef.once("value").then(function(snapshot) {
// snapshot.forEach(function(childSnapshot) {
//   var key = childSnapshot.key;
//   var childData = childSnapshot.val();    

// $('#body').append(`
//         <form  method="POST" enctype="multipart/form-data">
//                       <div class="modal fade" id="editModal" role="dialog">
//                         <div class="modal-dialog">
//                           <div class="modal-content">
//                             <div class="modal-header">
//                               <button type="button" class="close" data-dismiss="modal">&times;</button>
//                               <h4 class="modal-title">Edit Product</h4>
//                             </div>
//                             <div class="modal-body">
//                                  <form method="POST" enctype="multipart/form-data">
//                                 <div class="form-group">
//                                     <center>
//                                     <!-- <input type="file" class="btn-primary" style="width: 88%;" name="" placeholder="Price"><br> -->
//                                     <div class="form-group">
//                                         <label for="image" class="hover">
//                                             <img src="..\images/add.png" id="editPreview" data-tooltip="true" title="insert" data-animation="false" >
//                                             <input type="file" name="prod_pic" style="visibility: hidden;" id="image">
//                                         </label>
//                                     </div>
//                                     <select class="form-control" id="prod_type" style="width: 88%;" name="prod_type">
//                                         <option selected="selected" disabled>Select Product type</option>
//                                         <option value="Gallon Size">Gallon Size</option>
//                                         <option value="Bottled Size">Bottled Size</option>
//                                         <option value="Round Container Size">Round Container Size</option>
//                                     </select><br>
//                                     <div class="form-control" style="width: 88%;">
//                                          <input type="checkbox" value="Alkaline" class="water_type" name="water_type[]">Alkaline
//                                    <input type="checkbox" value="Distilled" class="water_type"  name="water_type[]">Distilled
//                                    <input type="checkbox" value="Mineral" class="water_type" name="water_type[]">Mineral
//                                    <input type="checkbox" value="Purified" class="water_type" name="water_type[]">Purified
//                                     </div><br>
                                  
//                                    <input type="text" class="form-control" style="width: 88%;" id="prod_price" name="prod_price" placeholder="Price"><br>
//                                    <input type="text" class="form-control" style="width: 88%;" id="express_price" name="express_price" placeholder="Express Delivery Price"><br>
//                                    <input type="text" class="form-control" style="width: 88%;" id="delivery_price" name="delivery_price" placeholder="Delivery Price"><br>
//                                    <input type="text" class="form-control" style="width: 88%;" id="no_of_filter" name="no_of_filter" placeholder="No. of Filtration"><br>
//                                    <input type="text" class="form-control" style="width: 88%;" id="address" name="address" placeholder="Complete Address"><br>
//                                     <select class="form-control" style="width: 88%;" id="mop" name="mop">
//                                         <option selected="selected" disabled>Mode of payment</option>
//                                         <option value="Paypal">Paypal</option>
//                                         <option value="Cash on delivery">Cash on delivery</option>
//                                     </select>
//                                    </center>
//                                 </div>
//                             </div>
//                             <div class="modal-footer">
//                                 <input type="hidden" name="prod_id" id="prod_id">
//                                 <button type="submit" class="btn btn-primary" name="update">Save</button>
//                                 <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
//                               </form>
                             
//                             </div>
//                           </div>
//             </div> 
//         </div>
//     </div>

//  	`);

//   });
// });

function reload_page(){
	window.location.reload();
}
 // function uploadFile(){
 // 	var filename = selectedFile.name;
 // 	var storageRef = firebase.storage().ref('/business_permits/' + filename);
 // 	var uploadTask = storageRef.put(selectedFile);

 // 	uploadTask.on('state_changed', function(snapshot){

 // 	}, function(error){

 // 	}, function(){

 // 		var downloadURL = uploadTask.snapshot.downloadURL;
 // 		console.log(downloadURL);
 // 	})
 // }
//  databaseReference.child("customers").orderByChild("username").equalTo(uname).addListenerForSingleValueEvent(new ValueEventListener() {
//             @Override
//             public void onDataChange(@NonNull final DataSnapshot dataSnapshot) {

//                 if (dataSnapshot.exists()) {
//                     usernameLayout.setError("That username is taken. Try another.");
//                     username.requestFocus();
//                 }
//                 if (!dataSnapshot.exists()) {
//                     usernameLayout.setErrorEnabled(false);
//                 }
//                 if (!pword.equals(cpword)) {
//                     errMessage.setVisibility(View.VISIBLE);
//                     errMessage.setText(R.string.those_passwords_didnt_match);
//                     confirmPassword.requestFocus();
//                     confirmPassword.setText(null);
//                 }
//                 if (pword.equals(cpword)) {
//                     errMessage.setVisibility(View.GONE);
//                 }
//                 if (!dataSnapshot.exists() && pword.equals(cpword)) {

//                     HashMap<String, String> data = new HashMap<>();
//                     data.put("firstname", fname);
//                     data.put("lastname", lname);
//                     data.put("username", uname);
//                     data.put("password", pword);

//                     databaseReference.child("customers").child(Objects.requireNonNull(databaseReference.push().getKey()))
//                             .setValue(data)
//                             .addOnSuccessListener(new OnSuccessListener<Void>() {
//                                 @Override
//                                 public void onSuccess(Void aVoid) {

//                                     session.setId(databaseReference.push().getKey());
//                                     session.setFirstname(fname);
//                                     session.setLastname(lname);
//                                     session.setUsername(uname);
//                                     session.setPassword(pword);

//                                     Toast.makeText(RegistrationActivity.this, "ACCOUNT CREATED ", Toast.LENGTH_SHORT).show();
//                                     startActivity(new Intent(RegistrationActivity.this, HomeActivity.class));
//                                 }
//                             });
//                 }
//             }
// function checkUsername(){
// 	var uname = document.getElementById("uname").value;

// 	firebase.database().ref().child("clients").orderByChild("username").equalTo(uname).on("value", function(snapshot) {

// 		if (snapshot.exists()) {
// 			alert("Exists");
// 			}else {
// 			alert("Doesn't Exists");
// 		}	
// 	});
// }

// function load() {


// 	var userDataRef = firebase.database().ref("products").orderByKey();
// userDataRef.once("value").then(function(snapshot) {
// snapshot.forEach(function(childSnapshot) {
//   var key = childSnapshot.key;
//   var childData = childSnapshot.val();              

//   var prod_type = childSnapshot.val().prod_type;
//   var water_type = childSnapshot.val().water_type;

//   $("#name").append(prod_type);	
//   $("#id").append(water_type);

//   });
// });



// 	var table = document.getElementById("table");
// 	var rowIndex = 1;

// 	database.child("products").orderBy("prod_id").equalTo("").("child_added", function(snapshot) {
// 		//snapshot.forEach(function(childSnapshot) {
// 			var childKey = snapshot.key;
// 			var childData = snapshot.val();

// 			var row = table.insertRow(1);
// 			row.id = childKey;
// 			var cell = row.insertCell(0);
// 			var cell1 = row.insertCell(1);
// 			var cell2 = row.insertCell(2);
// 			cell.appendChild(document.createTextNode(childKey));
// 			cell1.appendChild(document.createTextNode(childData.firstname));
// 			cell2.appendChild(document.createTextNode(childData.lastname));

// 			rowIndex = rowIndex + 1;
// 		//});
// 	});
// }

function deleteData() {
	var id = document.getElementById("remove").value;
	
	database.child("stations").child(id).once("value", function(snapshot) {
			if(snapshot.val() === null) {
				alert("AAAAHHHHH"); 	
			}
			else {
				database.child("stations").child(id).remove();
				document.getElementById(id).remove();
				alert("YES SIR"); 
			}
	});
}
