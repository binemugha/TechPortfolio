<?php

    if(isset($_POST['submit']))
      {
         $UserName = $_POST['name'];
         $Email = $_POST['email'];
         $Subject = $_POST['subject'];
         $Msg = $_POST['message'];

         if(empty($UserName) || empty($Email) || empty($Subject) || empty($Msg))
         {
             header('location:index.php?error');
         }
         else
         {
             $to = "bennyblasco@gmail.com";
             $from = $Email

             if(mail($to,$Subject,$Msg,$Email))
             {
                 echo "success"
                 header("location:index.html?success");
             }
         }
      }
      else
      {
          echo "error: Failure to send message"
          header("location:index.html");
      }


?>
