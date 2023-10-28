<?php
use GuzzleHttp\Client;

function dd($data) {
    echo '<pre>';
    print_r($data);
    echo '</pre>';
    die();
}

function getData($url, $key = null) {
    $client = new Client(['verify' => false]);
    $response = $client->get($url);
    $data = json_decode($response->getBody(), true);
    return $key ? $data[$key] : $data;
}

function formatDate($date) {
    [$year, $month, $day] = explode('-', $date);
    return "$day.$month.$year";
}