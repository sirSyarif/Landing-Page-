<?php

use Illuminate\Http\Request;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PromoController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route Profile Perusahaan
Route::get('profile', [ProfileController::class, 'getAll']);
Route::get('/profile/logo/{logo}', [ProfileController::class, 'getLogo']);

//Route promoSLIDER
Route::get('promo', [PromoController::class, 'getPromo']);
Route::get('promo/{id}', [PromoController::class, 'getDetail']);
Route::get('promo/foto/{image}', [PromoController::class, 'getFoto']);


// Route Product
Route::get('product', [ProductController::class, 'getProduct']);
Route::get('product/{id}', [ProductController::class, 'getDetail']);
Route::get('product/image/{image}', [ProductController::class, 'getImage']);
