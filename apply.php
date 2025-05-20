<?php
include('config/db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $job_id = $_POST['job_id'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $resume = $_FILES['resume']['name'];
    $target = "uploads/" . basename($resume);

    move_uploaded_file($_FILES['resume']['tmp_name'], $target);

    $sql = "INSERT INTO applications (job_id, name, email, phone, resume) 
            VALUES ('$job_id', '$name', '$email', '$phone', '$resume')";
    
    if ($conn->query($sql)) {
        header("Location: job-detail.html?applied=1");
    } else {
        echo "Error: " . $conn->error;
    }
}
?>