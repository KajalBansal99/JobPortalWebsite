<?php
include('config/db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $title = $_POST['title'];
    $description = $_POST['description'];
    $company = $_POST['company'];
    $location = $_POST['location'];
    $salary = $_POST['salary'];

    $sql = "INSERT INTO jobs (title, description, company, location, salary) 
            VALUES ('$title', '$description', '$company', '$location', '$salary')";
    
    if ($conn->query($sql) {
        header("Location: ../jobs.html?success=1");
    } else {
        echo "Error: " . $conn->error;
    }
}
?>