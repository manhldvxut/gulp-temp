<?php

define('PATH', __DIR__);
define("DOMAIN","http://".$_SERVER['HTTP_HOST'].'/templ');

$request = $_SERVER['REQUEST_URI'];

switch ($request) {
     /*top - page*/
    case '/templ/' :
    case '/templ' :
        require __DIR__ . '/views/index.php';
        break;

        /*contact page*/
    case '/templ/about/' :
    case '/templ/about' :
        require __DIR__ . '/views/about/index.php';
        break;
        /*guide page*/
    case '/templ/about/detail/' :
    case '/templ/about/detail' :
        require __DIR__ . '/views/about/detail/index.php';
        break;
        

    default:
        http_response_code(404);
        require __DIR__ . '/views/404.php';
        break;
}