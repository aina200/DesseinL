<?php

$pages = [
    'homepage' => './views/homepage.phtml',
    'projectsPage' => 'views/projectsPage.phtml',
    'contact' => 'views/contact.phtml',
    
];

$page = $pages['homepage'];

if (isset($_GET['page']) && in_array($_GET['page'], array_keys($pages))) {
    $page = $pages[$_GET['page']];
}
