<?php include('server.php');
//this is the part that if the user not login in home page they cannot access the home page
 if(!isset($_SESSION['username']))
{
    header('Location: ..\login.php');
}

?>
<!DOCTYPE html>
<html>
<head>
  <title>Home-Aquae</title>
  <link rel="stylesheet" type="text/css" href="main.css">
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.1/js/bootstrap.min.js"></script>
  <script src="//code.jquery.com/jquery-1.11.1.min.js"></script> 
  <script src="jquery-3.3.1.min.js"></script>
  <link rel="stylesheet" href="node_modules\carbon-components\css\carbon-components.css">
  <link rel="stylesheet" href="node_modules\carbon-components\css\carbon-components.min.css">
  <script src="node_modules\carbon-components\scripts\carbon-components.js"></script>
  <script src="node_modules\carbon-components\scripts\carbon-components.min.js"></script>
<script> 
$(document).ready(function(){
    $("#flip").click(function(){
         $("#panel2").hide("slow");
        $("#panel").slideDown("slow");
    });

    $("#flip2").click(function(){
        $("#panel").hide("slow");
        $("#panel2").slideDown("slow");
    });
      $("#flip3").click(function(){
        $("#panel").hide("slow");
        $("#panel2").hide("slow");
        $("#panel3").slideDown("slow");
    });
});
</script>
<style type="text/css">
  .custom-table {
    width: 80vw;
    }
</style>
  
</head>
<body>

  <div class="header">
    <a href="#" class="nav-trigger"><span></span></a>
    <div class="content">
    
        <?php if (isset($_SESSION['success'])): ?>
          <div class ="error success">
              <h3>
                  <?php 
                    echo $_SESSION['success'];
                    unset($_SESSION['success']);
                  ?>
              </h3>
          </div>
        <?php endif ?>

        
        <div style="float:right; height: 10px;  margin-right: 150px;">
        <?php if(isset($_SESSION['username'])):?>
          <b style="color: white;">Welcome</b> 
        <div class="dropdown" style="width: 10px; height: 1%;">
          <button onclick="myFunction()" class="dropbtn">
               <?php echo $_SESSION['username'].'&nbsp;<i class="fa fa-arrow-circle-down"></i>'; ?>
            <b style="margin-right: 110px"></b>       
          </button>


          <div id="myDropdown"  class="dropdown-content">
                  <a href="login.php?logout='1' " style="color:red;">
                      Logout</a>
                   <a href="#about">About</a>
                  <a href="#contact">Contact</a>
               </div>
          </div>     
        <?php endif?>
        </div>
      </div>
  </div>
  <div class="side-nav colorniya" style="color: #3399ff">
  <div id="logo">

    </div>
    <nav>
      <ul>
      <li>
          <a href="#">
            <span><i class="fas fa-camera" style="padding:20px; margin-left:50px;"></i></span>
            <span></span>
          </a>
        </li>
        <li>
          <a href="#">
            <span><i class="fa fa-user" ></i></span>
            <span id="flip" style="color:black;">Clients</span>
            
          </a>
        </li>
        <li>
        <a href="#">
            <span><i class="fa fa-clipboard"></i></span>
            <span id="flip2" style="color:black;">Reports</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
    
    <div class="main-content">
    
    <!-- <div class="container" id="panel">
      <h2>Table</h2>    
      <p>The .table-striped class adds zebra-striping to any table row within tbody (not available in IE8):</p>                  
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Permits</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Anna</td>
            <td>Anna</td>
            <td>Anna</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Debbie</td>
            <td>Anna</td>
            <td>Anna</td>
          </tr>
          <tr>
            <td>3</td>
            <td>John</td>
            <td>Anna</td>
            <td>Anna</td>
          </tr>
        </tbody>
      </table>
    </div> -->
    <div data-floating-menu-container id="panel" class="w3-cyan" style=" margin-left:-50px; padding-right:280px;">
  <div class="bx--data-table-v2-container" data-table-v2>
    <h4 class="bx--data-table-v2-header">Table title</h4>
    <section class="bx--table-toolbar">
      <div class="bx--batch-actions" aria-label="Table Action Bar">
        <div class="bx--action-list">
          <button class="bx--btn bx--btn--sm bx--btn--ghost" type="button">
            Ghost
            <svg class="bx--btn__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" fill-rule="evenodd" />
            </svg>
          </button>

          <button class="bx--btn bx--btn--sm bx--btn--ghost" type="button">
            Ghost
            <svg class="bx--btn__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" fill-rule="evenodd" />
            </svg>
          </button>

          <button class="bx--btn bx--btn--sm bx--btn--ghost" type="button">
            Ghost
            <svg class="bx--btn__icon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 7H4v2h3v3h2V9h3V7H9V4H7v3zm1 9A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" fill-rule="evenodd" />
            </svg>
          </button>
        </div>
        <div class="bx--batch-summary">
          <p class="bx--batch-summary__para">
            <span data-items-selected>3</span> items selected</p>
          <button data-event="action-bar-cancel" class="bx--batch-summary__cancel">Cancel</button>
        </div>
      </div>

      <div class="bx--toolbar-search-container" style="margin-left: 20px; ">
        <div data-search class="bx--search bx--search--sm bx--search--light" role="search">
          <svg class="bx--search-magnifier" width="16" height="16" viewBox="0 0 16 16">
            <path d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm4.936-1.27l4.563 4.557-.707.708-4.563-4.558a6.5 6.5 0 1 1 .707-.707z"
              fill-rule="nonzero" />
          </svg>
          <label id="search-input-label-1" class="bx--label" for="search__input-2">Search</label>
          <input class="bx--search-input" type="text" id="search__input-2" role="search" placeholder="Search" aria-labelledby="search-input-label-1">
          <button class="bx--search-close bx--search-close--hidden" title="Clear search
          input" aria-label="Clear search input">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 6.586L5.879 4.464 4.464 5.88 6.586 8l-2.122 2.121 1.415 1.415L8 9.414l2.121 2.122 1.415-1.415L9.414 8l2.122-2.121-1.415-1.415L8 6.586zM8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"
                fill-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <div class="bx--toolbar-content">
        <button class="bx--toolbar-action">
          <svg class="bx--toolbar-action__icon" fill-rule="evenodd" height="16" name="download" role="img" viewBox="0 0 14 16" width="14"
            aria-label="Download" alt="Download">
            <title>Download</title>
            <path d="M7.506 11.03l4.137-4.376.727.687-5.363 5.672-5.367-5.67.726-.687 4.14 4.374V0h1v11.03z"></path>
            <path d="M13 15v-2h1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-2h1v2h12z"></path>
          </svg>
        </button>

        <button class="bx--toolbar-action">
          <svg class="bx--toolbar-action__icon" fill-rule="evenodd" height="16" name="edit" role="img" viewBox="0 0 16 16" width="16"
            aria-label="Edit" alt="Edit">
            <title>Edit</title>
            <path d="M7.926 3.38L1.002 9.72V12h2.304l6.926-6.316L7.926 3.38zm.738-.675l2.308 2.304 1.451-1.324-2.308-2.309-1.451 1.329zM.002 9.28L9.439.639a1 1 0 0 1 1.383.03l2.309 2.309a1 1 0 0 1-.034 1.446L3.694 13H.002V9.28zM0 16.013v-1h16v1z"></path>
          </svg>
        </button>

        <button class="bx--toolbar-action">
          <svg class="bx--toolbar-action__icon" fill-rule="evenodd" height="16" name="settings" role="img" viewBox="0 0 15 16" width="15"
            aria-label="Settings" alt="Settings">
            <title>Settings</title>
            <path d="M7.53 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"></path>
            <path d="M6.268 2.636l-.313.093c-.662.198-1.28.52-1.822.946l-.255.2-1.427-.754-1.214 1.735 1.186 1.073-.104.31a5.493 5.493 0 0 0-.198 2.759l.05.274L1 10.33l1.214 1.734 1.06-.56.262.275a5.5 5.5 0 0 0 2.42 1.491l.312.093L6.472 15H8.59l.204-1.636.313-.093a5.494 5.494 0 0 0 2.21-1.28l.26-.248 1.09.576 1.214-1.734-1.08-.977.071-.29a5.514 5.514 0 0 0-.073-2.905l-.091-.302 1.15-1.041-1.214-1.734-1.3.687-.257-.22a5.487 5.487 0 0 0-1.98-1.074l-.313-.093L8.59 1H6.472l-.204 1.636zM5.48.876A1 1 0 0 1 6.472 0H8.59a1 1 0 0 1 .992.876l.124.997a6.486 6.486 0 0 1 1.761.954l.71-.375a1 1 0 0 1 1.286.31l1.215 1.734a1 1 0 0 1-.149 1.316l-.688.622a6.514 6.514 0 0 1 .067 2.828l.644.581a1 1 0 0 1 .148 1.316l-1.214 1.734a1 1 0 0 1-1.287.31l-.464-.245c-.6.508-1.286.905-2.029 1.169l-.124.997A1 1 0 0 1 8.59 16H6.472a1 1 0 0 1-.992-.876l-.125-.997a6.499 6.499 0 0 1-2.274-1.389l-.399.211a1 1 0 0 1-1.287-.31L.181 10.904A1 1 0 0 1 .329 9.59l.764-.69a6.553 6.553 0 0 1 .18-2.662l-.707-.64a1 1 0 0 1-.148-1.315l1.214-1.734a1 1 0 0 1 1.287-.31l.86.454a6.482 6.482 0 0 1 1.576-.819L5.48.876z"></path>
          </svg>
        </button>

        <button class="bx--btn bx--btn--sm bx--btn--primary">Add new</button>
      </div>
    </section>
    <table class="bx--data-table-v2 bx--data-table-v2--zebra" style="margin-left: 20px; width: 97%">
      <thead>
        <tr>
          <th>
            <input data-event="select-all" id="bx--checkbox-20" class="bx--checkbox" type="checkbox" value="green" name="checkbox-20">
            <label for="bx--checkbox-20" class="bx--checkbox-label" aria-label="Label name"></label>
          </th>
          <th>
            <button class="bx--table-sort-v2" data-event="sort">
              <span class="bx--table-header-label">Name</span>
              <svg class="bx--table-sort-v2__icon" width="10" height="5" viewBox="0 0 10 5">
                <path d="M0 0l5 4.998L10 0z" fill-rule="evenodd" />
              </svg>
            </button>
          </th>
          <th>
            <button class="bx--table-sort-v2" data-event="sort">
              <span>Email</span>
              <svg class="bx--table-sort-v2__icon" width="10" height="5" viewBox="0 0 10 5">
                <path d="M0 0l5 4.998L10 0z" fill-rule="evenodd" />
              </svg>
            </button>
          </th>
          <th>
            <button class="bx--table-sort-v2" data-event="sort">
              <span>Address</span>
              <svg class="bx--table-sort-v2__icon" width="10" height="5" viewBox="0 0 10 5">
                <path d="M0 0l5 4.998L10 0z" fill-rule="evenodd" />
              </svg>
            </button>
          </th>
          <th>
            <button class="bx--table-sort-v2" data-event="sort">
              <span>Contact Number</span>
              <svg class="bx--table-sort-v2__icon" width="10" height="5" viewBox="0 0 10 5">
                <path d="M0 0l5 4.998L10 0z" fill-rule="evenodd" />
              </svg>
            </button>
          </th>
          <th>
            <button class="bx--table-sort-v2" data-event="sort">
              <span>Company</span>
              <svg class="bx--table-sort-v2__icon" width="10" height="5" viewBox="0 0 10 5">
                <path d="M0 0l5 4.998L10 0z" fill-rule="evenodd" />
              </svg>
            </button>
          </th>
          <th>
            <button class="bx--table-sort-v2" data-event="sort">
              <span>Business Permit</span>
              <svg class="bx--table-sort-v2__icon" width="10" height="5" viewBox="0 0 10 5">
                <path d="M0 0l5 4.998L10 0z" fill-rule="evenodd" />
              </svg>
            </button>
          </th>
          <th>
            <button class="bx--table-sort-v2" data-event="sort">
              <span>Status</span>
              <svg class="bx--table-sort-v2__icon" width="10" height="5" viewBox="0 0 10 5">
                <path d="M0 0l5 4.998L10 0z" fill-rule="evenodd" />
              </svg>
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        
          <?php
          $sql = "SELECT * FROM clients";
          $result = $db->query($sql);
          if ($result->num_rows > 0) {
          // output data of each row
          foreach($result as $q){ ?>
            <tr>
          <td>
            <input data-event="select" id="bx--checkbox-13" class="bx--checkbox" type="checkbox" value="green" name="checkbox-13">
            <label for="bx--checkbox-13" class="bx--checkbox-label" aria-label="Label name"></label>
          </td>              
            <td><?php echo "".$q['fname']." ".$q['lname'];?></td>
            <td><?php echo "".$q['email'];?></td>
            <td><?php echo "".$q['addr'];?></td>
            <td><?php echo "".$q['cont_num'];?></td>
            <td><?php echo "".$q['Company'];?></td>
            <?php if($q['Business_permit'] != ""){?>
            <td><img src="images/<?php echo "".$q['Business_permit'];?>" style="width: 100px; height: 100px;"></td>
            <?php }else{?>
            <td><img src="images/no.png" style="width: 100px; height: 100px;"></td>
          <?php }?>
            <td>Active</td>
          </tr>
        <?php } ?>
          <?php
            
          } else {
          echo "0 results";
          }
           $db->close();
                     ?>
         
          
      </tbody>
    </table>
  </div>
</div>
<input class="bx--visually-hidden">
</div>
<div class="main-content" id="panel2" >
<div class="custom-table" style="margin: 10px 0px 0px 0px;">
      <h2>Table</h2>    
      <p>The .table-striped class adds zebra-striping to any table row within tbody (not available in IE8):</p>                  
      <table class="table table-striped">
      <thead>
          <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Permits</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Anna</td>
            <td>Anna</td>
            <td>Anna</td>
            <td>Anna</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Debbie</td>
            <td>Anna</td>
            <td>Anna</td>
            <td>Anna</td>
          </tr>
          <tr>
            <td>3</td>
            <td>John</td>
            <td>Anna</td>
            <td>Anna</td>
            <td>Anna</td>
          </tr>
        </tbody>
      </table>
    </div>
</div>
    </div> 
<script>
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
</script>
</body>
</html>


