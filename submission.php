<?php
$msg = $_GET['msg'];
if ( $msg == '1' ) {
	echo '<p>Your Information was submitted successfully!</p>';
}
?>
<form action="demo.php" method="post" />

<input type="hidden" name="formID" value="form2" />
<input type="hidden" name="redirect_to" value="" />

<p>Location: <input type="text" name="input" /></p>

<p>Additional Comments: 
<textarea rows="20" cols="30" name="comments"></textarea></p>

<p>Rating:
<select name="dropdown">
	<option value="value1">1 Star</option>
	<option value="value2">2 Stars</option>
	<option value="value3">3 Stars</option>
    <option value="value3">4 Stars</option>
    <option value="value3">5 Stars</option>
</select></p>

<p>Accessibility: Manual Chair  <input type="radio" name="radio" value="radio1" /> Power Chair  <input type="radio" name="radio" value="radio1" />


<input type="submit" value="Submit" />
</form>
