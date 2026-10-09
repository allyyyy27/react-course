<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\UserController;

Route::post('/userRegister', [UserController::class, 'userRegistration']);