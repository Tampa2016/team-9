<?php
$msg = $_GET['msg'];
if ( $msg == '1' ) {
	echo '<p>Your Information was submitted successfully!</p>';
}
?>
<form action="demo.php" method="post" />

<input type="hidden" name="formID" value="form2" />
<input type="hidden" name="redirect_to" value="" />

<p>Name: <input type="text" name="input1" /></p>

<p>Address: <input type="text" name="input2" /></p>

<p>Phone: <input type="text" name="input3" /></p>

<p>Rating:
<select name="input4">
	<option value="value1">1 Star</option>
	<option value="value2">2 Stars</option>
	<option value="value3">3 Stars</option>
    <option value="value4">4 Stars</option>
    <option value="value5">5 Stars</option>
</select></p>

<p>Accessibility: <br>
<br>
Manual Chair  <input type="radio" name="radio" value="radio1" /> Power Chair  <input type="radio" name="radio" value="radio2" /> Both  <input type="radio" name="radio" value="radio3" />

<p>Additional Comments: </br>
<textarea rows="20" cols="30" name="comments"></textarea></p>

<input type="submit" value="Submit" />
</form>
