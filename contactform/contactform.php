<?php

    if(isset($_POST['submit'])){
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

             if(mail($to,$Subject,$Msg,$Email))
             {
                 header("location:index.html?success");
             }
         }
      }
      else
      {
          header("location:index.html");
      }
    }
