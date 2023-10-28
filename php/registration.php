<?php
// Database connection parameters
$servername = "localhost"; // Change this to your server's address
$username = "root";
$password = "";
$database = "bazaar";

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form data
// print_r($_POST); die;
    $name = $_POST["name"];
    $rollno = $_POST["roll"];
    $email = $_POST["email"];
    $school = $_POST["applyas"];
    $year = $_POST["board"];
    $branch = $_POST["branch"];
    $contact = $_POST["contact"];


    $target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
  if($check !== false) {
    echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "File is not an image.";
    $uploadOk = 0;
  }
}

// die;


    // SQL query to insert data into the database
    $sql = "INSERT INTO registration (name, roll_no, email, school, year, branch, contact, image) 
            VALUES ('$name', '$rollno', '$email', '$school', '$year', '$branch', '$contact' , '$target_file' )";

    if ($conn->query($sql) === TRUE) {
        echo "Data inserted successfully";
        return ('index.php');
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }


// Close the database connection
$conn->close();
?>
