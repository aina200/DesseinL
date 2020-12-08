<?php

$pages = [
    // 'homepage' => './views/homepage.phtml',
    'homepage' => './controllers/homepage_controller.php',
    'projectsPage' => 'views/projectsPage.phtml',
    'about' => 'views/about.phtml',
    'contact' => 'views/contact.phtml',

    
];

$page = $pages['homepage'];

if (isset($_GET['page']) && in_array($_GET['page'], array_keys($pages))) {
    $page = $pages[$_GET['page']];
}
