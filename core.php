<?php
$action = $_POST['action'];

require_once 'index.php';

switch ($action) {
    case 'init':
        init();
        break;
}