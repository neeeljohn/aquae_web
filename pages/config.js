var pusher = new Pusher('4de9228ab3e254f06ee8');

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
// })	

// messaging.onMessage(function(payload){
// 	console.log('onMessage:', payload);
// });


 
async function createAccount() {

	document.getElementById('nextBtn').innerHTML = "<img class='submitLoader' src='css/ajax-loader.gif'> Saving";


	var cname = document.getElementById("cname").value;
	var addr = document.getElementById("addr").value;
	var cnum = document.getElementById("cnum").value;
	var email = document.getElementById("email").value;
	var pword = document.getElementById("pword").value;
	var cpword = document.getElementById("cpword").value;
	var filters = document.getElementById("no_of_filter").value;
	var shippingfee = document.getElementById("shippingfee").value;
	var minimum_order = document.getElementById("minimum_order").value;
	var maximum_order = document.getElementById("maximum_order").value;
	var files = document.getElementById('files');
	var filess = document.getElementById('filess');
	var filesss = document.getElementById('filesss');

	var cid = database.child('clients').push().key;


	// if (cname == "") {
	// 	 document.getElementById("errCompanyName").textContent = "Enter company name";
	// }else{
	// 	document.getElementById("errCompanyName").textContent = "";
	// }

	// if (email == "") {
	// 	 document.getElementById("errEmail").textContent = "Enter email";
	// }
	// else{
	// 	document.getElementById("errEmail").textContent = "";
	// }

	// if (pword == "") {
	// 	 document.getElementById("errPass1").textContent = "Enter password";
	// }
	// else{
	// 	document.getElementById("errPass1").textContent = "";
	// }

	// if (addr == "") {
	// 	 document.getElementById("errAddress").textContent = "Enter address";
	// }
	// else{
	// 	document.getElementById("errAddress").textContent = "";
	// }

	// if (cnum == "") {
	// 	 document.getElementById("errContact").textContent = "Enter contact number";
	// }
	// else{
	// 	document.getElementById("errContact").textContent = "";
	// }

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
				strs += checkbox[j].value + ",";
			}
		}

		// console.log(strs);

		var data = {
			client_id : cid,
			minimum_order: minimum_order,
			maximum_order: maximum_order,
			company : cname,
			email : email,
			water_type: strs,
			password : pword,
			shipping_fee : shippingfee,
			address : addr,	
			contact : cnum,
			no_of_filter: filters,
			files : url,
			wallet: 0,
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
// }


var userDataRef = firebase.database().ref("clients").orderByKey();
userDataRef.once("value").then(function(snapshot) {
snapshot.forEach(function(childSnapshot) {
  var key = childSnapshot.key;
  var childData = childSnapshot.val();    

	// var images = childData.files.map(function(item, index) {
	// 	var activeClass =  (index == 0) ? 'active' : '';
	// 	return `<div class="item `+activeClass+`">
	//      <img class="img-responsive" src="`+item+`" alt="..."  width="500px;" height="700px;">
	//       <div class="carousel-caption">
	//       </div>
	//     </div>`;
	// }).join('');
// <div class="carousel-inner" align="middle">
//     `+images+`
//   </div>

$('#bod').append(`<tr class="gradeU">
 	<td>`+childData.company+`</td>
 	<td>`+childData.email+`</td>
 	<td>`+childData.address+`</td>
 	<td>`+childData.contact+`</td>
 	<td>`+childData.minimum_order+`</td>
 	<td>`+childData.maximum_order+`</td>
 	<td>
 		<button class="btn" style="background-color: #4ECDC4; color:white;" data-toggle="modal" data-target=".bs-example-modal-lg`+childData.client_id+`">Requirements</button>

			<div class="modal fade bs-example-modal-lg`+childData.client_id+`" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
			  <div class="modal-dialog modal-lg">
			    <div class="modal-content">
			      <div id="carousel-example-generic`+childData.client_id+`" class="carousel slide" data-ride="carousel">
			  <!-- Wrapper for slides -->
			  

			  <!-- Controls -->
			  <a class="left carousel-control" href="#carousel-example-generic`+childData.client_id+`" role="button" data-slide="prev">
			    <span class="glyphicon glyphicon-chevron-left"></span>
			  </a>
			  <a class="right carousel-control" href="#carousel-example-generic`+childData.client_id+`" role="button" data-slide="next">
			    <span class="glyphicon glyphicon-chevron-right"></span>
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

	var updates = {};
	updates['clients/' + id + '/status'] = data;
	database.update(updates).then(function() {

		
	}).catch(function(error) {
		alert(error);
	});
}

function acceptStatus(id){
	var pusherChannel = pusher.subscribe('change-status-product');
	// const orderList = document.querySelector('#orders');
	// let row = orderList.querySelector('tr[data-id= ' + id + ']');
	// orderList.removeChild(li);
	var updates = {};
	updates['orders/' + id + '/status'] = "accepted";
	database.update(updates).then(function() {
		// reload_page();
	const orderList = document.querySelector('#orders');
	let row = orderList.querySelector('tr[data-id= ' + id + ']');
	orderList.removeChild(row);

	pusherChannel.bind('pusher:subscription_succeeded', function() {
		var triggered = channel.trigger('change-status-productevent', { your: 'updated' });
	})
// kani hahahaha
	}).catch(function(error) {
		alert(error);
	});


}

function declineStatus(id){

	var updates = {};
	updates['orders/' + id + '/status'] = "decline";
	database.update(updates).then(function() {
		// reload_page();
	const orderList = document.querySelector('#orders');
	let row = orderList.querySelector('tr[data-id= ' + id + ']');
	orderList.removeChild(row);
	}).catch(function(error) {
		alert(error);
	});

}

var userDataRef = firebase.database().ref("orders").orderByChild("status").equalTo("accepted");
		userDataRef.once("value").then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
		  var key = childSnapshot.key;
		  var childData = childSnapshot.val();    

		    var val = Math.floor(1000 + Math.random() * 9000);

		$('#acceptedOrders').DataTable().row.add([
				''+val, 
				''+childData.order,
				''+childData.order_id, 
				'Refill', 
				'50', 
				''+childData.payment, 
				'<button class="btn btn-success" data-toggle="modal" data-target="#modeling">Address</button>', 
				'<button class="btn btn-primary" disabled>ACCEPTED</button>'

			]).draw();


		  // $('#acceptedOrders').append(` 
		  // 	<tr class="gradeU">
    //             <input type="hidden" name="order_id" value="">
    //             <td>`+childData.order+`</td>
    //             <td>`+childData.order_id+`</td>
    //             <td>Purified</td>
    //             <td>Refill</td>
    //             <td>50</td>
    //             <td>`+childData.payment+`</td>
    //             <td><button class="btn btn-success" data-toggle="modal" data-target="#modeling">Address</button></td>
    //             <td>
    //                 <button class="btn btn-primary">Processing</button>
    //             </td>
    //         </tr>`);
	
});
	});

		var userDataRef = firebase.database().ref("orders").orderByChild("status").equalTo("decline");
		userDataRef.once("value").then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
		  var key = childSnapshot.key;
		  var childData = childSnapshot.val();    


		  $('#declineOrders').append(` 
		  	<tr class="gradeU">
                <input type="hidden" name="order_id" value="">
                <td>`+childData.order+`</td>
                <td>`+childData.order_id+`</td>
                <td>Purified</td>
                <td>Refill</td>
                <td>50</td>
                <td>`+childData.payment+`</td>
                <td><button class="btn btn-success" data-toggle="modal" data-target="#modeling">Address</button></td>
                <td>
                    <button class="btn btn-danger" disabled>DECLINED</button>
                </td>
            </tr>`);
	
			});
		});

		 

		var userDataRefq = firebase.database().ref("cash_ins").orderByChild("status").equalTo("verified").on("child_added", snapshotq => {
			// userDataRefq.once("value").then(function(snapshotq) {
				
			// snapshotq.forEach(function(childSnapshotq) {
			  var keyq = snapshotq.keyq;
			  var childDataq = snapshotq.val();  
		var userDataRef = firebase.database().ref("customers").orderByChild("customer_id").equalTo(childDataq.customer_id).once("value", snapshots => {
			// userDataRef.once("value").then(function(snapshots) {
			snapshots.forEach(function(childSnapshot) {
			  var key = childSnapshot.key;
			  var childData = childSnapshot.val();   

		  var val = Math.floor(1000 + Math.random() * 9000);

			$('#customer_history').DataTable().row.add([
				''+childDataq.cash_in_id, 
				''+childDataq.transaction_code,
				''+childData.firstname, 
				''+childData.wallet

			]).draw();


					});
				});
			});
		// });

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

			  console.log(childDataq);
			  console.log(childData); 

		  // var val = Math.floor(1000 + Math.random() * 9000);

			// $('#cancelled_request').append(`
					  	 
	  //       	<tr class="gradeU" data-id='`+childData.cash_in_id+`'>
	  //               <td>`+childData.transaction_code+`</td>
	  //               <td>`+childData.cash_in_id+`</td>
	  //               <td>`+childDatas.firstname+`</td>
	  //               <td><button class="btn btn-success" data-toggle="modal" data-target="#receipt`+childData.cash_in_id+`">Receipt</button></td>
	  //               <td>P`+childData.amount+`</td>
	               
	  //        	</tr>

	  //        	<div class="modal fade" id="receipt`+childData.cash_in_id+`" role="dialog" style="margin-bottom:10px;" hidden>
	  //                           <div class="modal-dialog">
	  //                             <div class="modal-content">
	  //                               <div class="modal-header" style="background-color: #337ab7;">
	  //                                 <button type="button" class="close" data-dismiss="modal">&times;</button>
	  //                                 <h4 class="modal-title">Customer's Receipt</h4>
	  //                               </div>
	  //                               <div class="modal-body">
	  //                                   <div class="form-group">
	  //                                      <center>
	  //                                       <img src="`+childData.receipt+`" height="500px;" width="400px;">
	  //                                       </center>
	  //                                   </div>
	  //                               </div>
	  //                               <div class="modal-footer">
	  //                                   <button  class="btn btn-primary" data-dismiss="modal">Okay</button>
	  //                               </div>
	  //                             </div>
		 //                      </div> 
		 //              		</div>
	  //    	`);

			
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

					 
					  $('#customer').append(`
					  	 
		                	<tr class="gradeU" data-id='`+childData.cash_in_id+`'>
				                <td>`+childData.transaction_code+`</td>
				                <td>`+childData.cash_in_id+`</td>
				                <td>`+childDatas.firstname+`</td>
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
	                                    	<center>
	                                         	<h4>Are you sure you want to cancel the request?</h4>
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
	
				

// function notification(){


// }					


function logout(){
	sessionStorage.clear();
	
}

	
function acct(){
	var email = document.getElementById("uname").value;
	var pword = document.getElementById("pwords").value;

	firebase.database().ref().child("clients").orderByChild("email").equalTo(email).once("value", function(snapshot) {
		if (snapshot.exists()) {
		    
		    	snapshot.forEach(function(childSnapshot) {

		    		var childData = childSnapshot.val();

		    		if (childData.password == pword){

		    			if(childData.status == "activate"){

			    			if (typeof(Storage) !== "undefined") {
								

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
							  sessionStorage.setItem("filesss", childData.store);
							 	
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
						            title: "Your account has been disabled.",
						            text: "Please wait until your requirements are checked!",
						            icon: "warning",
						            button: "OK",
						          }).then(function(){
						            window.location = "index.php";
						          });
		    				}
		    		}
		    		else {
		    			swal({
				            title: "Oops!",
				            text: "Please input valid credentials.",
				            icon: "error",
				            button: "OK",
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
		            button: "OK",
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
		   
		//  //    document.getElementById("notif").innerHTML = snapshot.numChildren();
		// 	// document.getElementById("notif_order").innerHTML = snapshot.numChildren();
	
		// 	// });

		// 	});
		



			// var table = document.getElementById("orders");
			// var rowIndex = 1;

			database.child("orders").orderByChild("status").equalTo("pending").on("child_added", snapshot => {


				//snapshot.forEach(function(childSnapshot) {
					var childKey = snapshot.key;
					var childData = snapshot.val();

					 $('#orders').append(` 
					   	<tr class="gradeU" data-id='`+childData.order_id+`'> 
			                 <input type="hidden" name="order_id" value="">
			                 <td>`+childData.order+`</td>
			                 <td>`+childData.order_id+`</td> 
			                 <td>Purified</td>
			                 <td>Refill</td>
			                <td>50</td>
			                 <td>`+childData.payment+`</td>
			                 <td><button class="btn btn-success" data-toggle="modal" data-target="#modeling">Address</button></td>
			                 <td>
			                     <button class="btn btn-primary" onclick="acceptStatus('`+childData.order_id+`')">ACCEPT</button>
			                     <button class="btn btn-danger" onclick="declineStatus('`+childData.order_id+`')">DECLINE</button>
			                 </td>
			            </tr>

			            `);
				//});

			});

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





	

function editAcct(){
            $("#editAcct").prop('innerHTML', 'Save');

            $('#company').prop('readonly',false);
            $('#contact').prop('readonly',false);
            $('#no_of_filter').prop('readonly',false);
            $('#address').prop('readonly',false);
            $('#email').prop('readonly',false);
            $('#shipping_fee').prop('readonly',false);
            $('#water_type').prop('readonly',false);
            $('#maximum_order').prop('readonly',false);
            $('#minimum_order').prop('readonly',false);
}

async function addPersonnel() {

	var station = document.getElementById("station").value;
	var per_pic = document.getElementById("per_pic");
	var per_contact = document.getElementById("per_contact").value;
	var per_name = document.getElementById("per_name").value;
	var per_username = document.getElementById('per_username').value;
	var per_pass = document.getElementById('per_pass').value;

	var uri = {};
	var uploadTask = storageRef.child("/personnels");
	uri = await getUploadUrl(per_pic, 0, uploadTask);


	var per_id = database.child('personnels').push().key;



	var data = {
			per_id: per_id,
			per_name : per_name,
			per_contact: per_contact,
			per_username : per_username,
			per_pass: per_pass,
			pic: uri,
			client_id: sessionStorage.getItem("client_id"),
			status: "deactivate"
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

					 		    	
			 	</script>
            `);
	
			});

		});
function changeStatusPer(status, id) {

	var data;

	if (status.checked == true) {
		data = "deactivate";
	}
	else {
		data = "activate";
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


async function product() {
	document.getElementById("saveBtn").setAttribute("disabled", true);
	document.getElementById("saveBtn").innerHTML = 'Saving...';
	

	var prod_pic = document.getElementById("prod_pic");
	// var service_type = document.getElementById("service_type");
	var prod_id = document.getElementById("prod_id").value;
	var refill_price = document.getElementById('refill_price').value;
	var sale_price = document.getElementById('sale_price').value;
	

	var checks = document.getElementsByClassName('checks');
	var str = [];



	for ( i = 0 ; i < 2; i++){
		if ( checks[i].checked === true){
			//str += checks[i].value + ",";
			str.push(checks[i].value);


		}
	}
	// var strss = str.join(" and ");

	var productPhotoStorage = storageRef.child('products/' + prod_pic.files[0].name);
	var productImageUrl = await uploadPromise(prod_pic, productPhotoStorage, 0);

	var e = document.getElementById("prod_type");
	var result = e.options[e.selectedIndex].text;




	var pid = database.child('products').push().key;

	var price_refill = {
		price: refill_price
	}

	var price_sale = {
		price: sale_price
	}

	var service = {};

	if (str[0] == "Refill") {
		service[str[0].toLowerCase()] = price_refill;
	}

	if (str[0] == "Sale"){
		service[str[0].toLowerCase()] = price_sale;
	}

	if (str[1] == "Refill") {
		service[str[1].toLowerCase()] = price_refill;
	}

	if (str[1] == "Sale"){
		service[str[1].toLowerCase()] = price_sale;
	}


	var datass = {
		product_image: productImageUrl,
		service_types: service
	}

	var datas = {
	 	[result.toLowerCase()]: datass
	}


	var data = {
		product_id: pid,
		client_id: sessionStorage.getItem("client_id"),
		types: datas
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

let output1 = Object.keys(output[2]).map(function(e) {
	return output[2][e];
});


if(Object.keys(output[2]).length == 3){
		document.getElementById("addproduct").disabled=true;
}

var elems = "";

for (var i = 0; i < Object.keys(output[2]).length; i++) {

	elems += Object.keys(output[2])[i].toLowerCase() + ",";

	
 
 	$('#hidden').val(elems);

	$('#body').append(`
	        <div class="col-lg-4" id="bodys">
	             <div class="custom-box" >
	                <div class="4servicetitle">
	                  <h1>`+Object.keys(output[2])[i].toUpperCase()+`</h1>
	                  <hr>
	                </div>
	                <div class="icn-main-container">
	                  <img src="`+output1[i].product_image+`" height="200px" width="200px;" />
	                </div>
	                <ul id="pricing`+i+`" style="padding-inline-start : 0px; margin-top: 24px; margin-bottom: 24px;">

	               	  <h4 style="margin-bottom : 16px"><strong>Service Type</strong></h4>	

	                </ul>

	                 <button class="btn btn-primary" data-toggle="modal" data-target="#editModal`+i+`" value="Update" >Update</button>
	                 <button class="btn btn-danger" data-toggle="modal" data-target="#deleteModal`+i+`" value="Delete">Delete</button>
	       
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
                                            <img src="`+output1[i].product_image+`" id="preview1`+i+`" data-tooltip="true" title="insert" data-animation="false" width="200px;" height="200px;" >
                                            <input type="file" name="prod_pic" class="pics" id="ppic`+i+`" value="" style="visibility: hidden;">
                                        </label>
                                    </div>

                                </center>
                                    <center>
                                        <h3>`+Object.keys(output[2])[i].toUpperCase()+`</h3>
                                        <br>
                                    </center>
                                        <strong style="margin-left: 33px; ">Choose your available service type:</strong>
                                        <div  style="width: 88%; margin-top: 10px; margin-bottom: -10px; margin-left: 50px;" id="service_Type">
                                           <input type="checkbox" class="checksx`+i+`" value="Refill" id="test3`+i+`"  name="service_Type[]"> &nbsp;Refill &nbsp;&nbsp;
                                            <input type="number" id="rprice`+i+`" value="" placeholder="Price...">
                                           <br> <input type="checkbox" class="checksx`+i+`" value="Sale" id="test4`+i+`" name="service_Type[]"> &nbsp;Sale &nbsp;&nbsp;
                                            <input type="number" id="sprice`+i+`" placeholder="Price..." style="margin-left: 6px; margin-top: 2px;">
                                        </div><br>
                                </div>
                            </div>
                            <div class="modal-footer">
 
                                <button type="button" class="btn btn-primary" name="save_product" onclick="updateProduct('`+key+`','`+Object.keys(output[2])[i].toLowerCase()+`','`+i+`','`+output1[i].product_image+`')" id="saveBtn">Save</button>
                                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                             
                            </div>
                          </div>
                          
                        </div>
                      </div>



	          <div class="modal fade" id="deleteModal`+i+`" role="dialog" style="margin-bottom:10px;">
	                        <div class="modal-dialog">
	                          <div class="modal-content">
	                            <div class="modal-header" style="background-color: #d9534f;">
	                              <button type="button" class="close" data-dismiss="modal">&times;</button>
	                              <h4 class="modal-title" >Delete Product</h4>
	                            </div>
	                            <div class="modal-body">
	                                <div class="form-group">
	                                    <center>
	                                    <h2>Are you sure you want to delete this product?</h2>
	                                    <h4 style="color:red;"><i class="fa fa-exclamation-triangle"></i> If you delete this product, it will also be deleted from our database.</h4>
	                                   </center>
	                                </div>
	                            </div>
	                            <div class="modal-footer">
	                                
	                                <button type="submit" class="btn btn-danger"  onclick="deleteTest('`+key+`','`+Object.keys(output[2])[i].toLowerCase()+`')">Delete</button>
	                                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
	                              
	                             
	                            </div>
	                          </div>
	            </div> 
	        </div>
	        <script>
	        $(document).on('change','#ppic`+i+`', function(event){ 

                   var tmppath = URL.createObjectURL(event.target.files[0]);
                    $("#preview1`+i+`").fadeIn("fast").attr('src',tmppath);       
                });

                $(function () {
                          $("#rprice`+i+`").hide();
                            $("#test3`+i+`").click(function () {
                                if ($(this).is(":checked")) {
                                    $("#rprice`+i+`").show();
                                }else {
                                    $("#rprice`+i+`").hide();
                                }
                            });
                          $("#sprice`+i+`").hide();
                            $("#test4`+i+`").click(function () {
                                if ($(this).is(":checked")) {
                                    $("#sprice`+i+`").show();
                                }else {
                                    $("#sprice`+i+`").hide();
                                }
                            });
                           

                        });
            </script>
	        
	 	`);

		


		if(Object.keys(output1[i]['service_types']).includes("refill")) {
			$('#pricing'+i).append(`<li><h4><strong> Refill | ₱`+output1[i]['service_types']['refill'].price+`</strong></h4></li>`);
			$('#test3'+i).prop('checked', true);
			$('#rprice'+i).show();
			$('#rprice'+i).val(output1[i]['service_types']['refill'].price);
		}

		if(Object.keys(output1[i]['service_types']).includes("sale")) {
			$('#pricing'+i).append(`<li><h4><strong> Sale | ₱`+output1[i]['service_types']['sale'].price+`</strong></h4></li>`);
			$('#test4'+i).prop('checked', true);
			$('#sprice'+i).show();
			$('#sprice'+i).val(output1[i]['service_types']['sale'].price);
		}

	}


  });
});
	

async function updateProduct(id, type, i, img){

	var t = type.charAt(0).toUpperCase() + type.slice(1);
	var prod_pic = document.getElementById('ppic'+i);
	var refill_price = document.getElementById('rprice'+i).value;
	var sale_price = document.getElementById('sprice'+i).value;

	var productImageUrl;

	if (prod_pic.files.length == 0) {
		productImageUrl = img;
	}
	else {
		var productPhotoStorage = storageRef.child('products/' + prod_pic.files[0].name);
		productImageUrl = await uploadPromise(prod_pic, productPhotoStorage, 0);
	}

	var checksx = document.getElementsByClassName('checksx'+i);
	var str = [];

	for ( i = 0 ; i < 2; i++){
		if ( checksx[i].checked === true){
			str.push(checksx[i].value);
		}
	}

	var price_sale = {
		price: sale_price
	}

	var price_refill = {
		price: refill_price
	}

	var service = {};

	if (str[0] == "Refill") {
		service[str[0].toLowerCase()] = price_refill;
	}

	if (str[0] == "Sale"){
		service[str[0].toLowerCase()] = price_sale;
	}

	if (str[1] == "Refill") {
		service[str[1].toLowerCase()] = price_refill;
	}

	if (str[1] == "Sale"){
		service[str[1].toLowerCase()] = price_sale;
	}


	var datass = {
		product_image: productImageUrl,
		service_types: service
	}


	 
	var updates = {};
		updates['products/'+id+'/types/' + type] = datass;

		database.update(updates).then(function() {
			swal({
	            title: t+" updated successfully",
	            text: " ",
	            icon: "success",
	            button: false,
	            timer: 1800
	          }).then(function(){
	          	         	var pusherChannel = pusher.subscribe('update-product-channel');
	          		channel.trigger('update-productevent', { your: 'updated' });
	            window.location = "product.php";
	          });	
		}).catch(function(error) {
			alert(error);
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
	deedRef.remove().then(function(){

		swal({
	        title: t+" deleted successfully",
	        text: " ",
	        icon: "error",
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
 	

 	var updates = {};
	updates['customers/' + id + '/wallet'] = newVal.toString();
	database.update(updates).then(function() {

		var updaters = {};
		updaters['cash_ins/' + i + '/status'] = "verified";
		database.update(updaters).then(function() {

			swal({
	            title:" Wallet Added successfully",
	            text: " ",
	            icon: "success",
	            button: false,
	            timer: 1800
	        }).then(function(){

	        	$('#addWallet'+i).modal('toggle');

	        	const orderList = document.querySelector('#customer');
				let row = orderList.querySelector('tr[data-id= ' + i + ']');
				orderList.removeChild(row);

	        });

		});

	});

 }

 	function cancelRequest(id){

 	var updates = {};
	updates['cash_ins/' + id + '/status'] = "cancelled";
	database.update(updates).then(function() {
		reload_page();
	// const orderList = document.querySelector('#customer');
	// let row = orderList.querySelector('tr[data-id= ' + id + ']');
	// orderList.removeChild(row);
	}).catch(function(error) {
		alert(error);
	});

 	}


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
