<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', 'AuthController@login');
Route::post('logout', 'AuthController@logout');

Route::get('beneficiary', 'BeneficiaryController@index')->middleware('auth:sanctum');

Route::get('clients', 'ClientsController@index')->middleware('auth:sanctum');
Route::post('clients', 'ClientsController@addNewClient')->middleware('auth:sanctum');
Route::put('clients', 'ClientsController@updateClient')->middleware('auth:sanctum');

Route::get('companies', 'CompaniesController@index')->middleware('auth:sanctum');
Route::post('companies', 'CompaniesController@addNewCompany')->middleware('auth:sanctum');
Route::put('companies', 'CompaniesController@updateCompany')->middleware('auth:sanctum');
