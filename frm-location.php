 <?php include 'header.php';?>
        <div class="wrapper">
            <div class="container">
                <div class="form1"> 
                    <h1 class="form-head">Submit your E-wastage</h1>
                    <div class="inner-form">
                        <form method="post" enctype="multipart/form-data">
                            <table class="table" >
                                <tr>
                                 <td> Name:</td>
                                 <td><input type="text" name="name" placeholder=" Enter Name" required /></td>
                                </tr>
                             
                                <tr>
                                 <td> Address:</td>
                                 <td><input type="text" name="address" placeholder=" Enter Address" required/></td>
                                </tr>
                             <tr>
                                 <td> Contact:</td>
                                 <td><input  type="text" name="contact" placeholder=" Enter Contact No." required/></td>
                             </tr>
                             
                             <tr>
                                 <td> Email:</td>
                                 <td><input type="email" name="email" placeholder =" Enter Email Address" required/><br/></td>
                             </tr>
                             <tr>
                                  <td>Select Gender:</td>
                                  <td>
                                  <input type="radio" name="gender" id="s" value="male" required />Male
                                  <input type="radio" name="gender" id="s" value="female" required /> Female
                                  </td>
                             </tr>
                             <tr>
                                   <td> Photo:</td>
                                   <td><input type="file" name="image" required/></td>
                             </tr>
                             <tr>
                                   <td>Message:</td>
                                   <td><textarea name="message" rows="10" cols="30" required />you can write about the devices which you want to sale:
                                   </textarea></td>
                             </tr>
                             <tr>
                                  <td colspan=2 align="center">
                                  <input type="submit" value="Submit" name="submit"></td>
                             </tr>
   
                         </table>
      
                      </form> 
                   </div> 
               </div>    
            </div> 
        </div>   
       <?php include 'footer.php';?>

