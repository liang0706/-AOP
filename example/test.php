<?php
$test   = isset($_GET['test']) ? $_GET['test'] : '';
$token  = isset($_GET['token']) ? $_GET['token'] : '';

$data = array('flag' => 0, 'msg' => '');
if(!$token) {
    $data['msg'] = 'token错误';
} else {
    $data['msg']    = $test;
    $data['flag']   = 1;
}

echo json_encode($data);
exit;