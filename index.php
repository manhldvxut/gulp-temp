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

        /*patern page*/
    case '/templ/patern/' :
    case '/templ/patern' :
        require __DIR__ . '/views/patern/index.php';
        break;

        /*faq page*/
    case '/templ/faq/' :
    case '/templ/faq' :
        require __DIR__ . '/views/faq/index.php';
        break;

        /*company page*/
    case '/templ/company/' :
    case '/templ/company' :
        require __DIR__ . '/views/company/index.php';
        break;

        /*contact page*/
    case '/templ/contact/' :
    case '/templ/contact' :
        require __DIR__ . '/views/contact/index.php';
        break;
        /*guide page*/
    case '/templ/guide/' :
    case '/templ/guide' :
        require __DIR__ . '/views/guide/index.php';
        break;
        /*news page*/
    case '/templ/news/' :
    case '/templ/news' :
        require __DIR__ . '/views/news/index.php';
        break;
        /*news page detail*/
    case '/templ/news/detail/' :
    case '/templ/news/detail' :
        require __DIR__ . '/views/news/detail/index.php';
        break;
        /*login*/
    case '/templ/login/' :
    case '/templ/login' :
        require __DIR__ . '/views/login/index.php';
        break;
        /*my page*/
    case '/templ/mypage/' :
    case '/templ/mypage' :
        require __DIR__ . '/views/mypage/index.php';
        break;
        /*sticker*/
    case '/templ/sticker/' :
    case '/templ/sticker' :
        require __DIR__ . '/views/sticker/index.php';
        break;
        /*sticker-detail*/
    case '/templ/sticker/detail' :
    case '/templ/sticker/detail/' :
        require __DIR__ . '/views/sticker/detail/index.php';
        break;
        /*service*/
    case '/templ/service/' :
    case '/templ/service' :
        require __DIR__ . '/views/service/index.php';
        break;
        /*information*/
    case '/templ/information/' :
    case '/templ/information' :
        require __DIR__ . '/views/information/index.php';
        break;
        /*login*/
    case '/templ/singin/' :
    case '/templ/singin' :
        require __DIR__ . '/views/singin/index.php';
        break;
    default:
        http_response_code(404);
        require __DIR__ . '/views/404.php';
        break;
}