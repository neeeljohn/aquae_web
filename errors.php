<?php  if (count($errors) > 0) : ?>
  <div class="error">
  	<?php foreach ($errors as $error) : ?>
  		<b>
  		 <div class='alert alert-danger' style='text-align: center;'>

        	<p><?php echo $error; ?></p>
        </div>
    </b>
  	<?php endforeach ?>
  </div>
<?php  endif ?>