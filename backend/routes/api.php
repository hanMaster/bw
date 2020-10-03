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
Route::get('clients', 'ClientsController@index');
Route::post('clients', 'ClientsController@addNewClient')->middleware('auth:sanctum');
Route::put('clients', 'ClientsController@updateClient')->middleware('auth:sanctum');

Route::get('companies', 'CompaniesController@index')->middleware('auth:sanctum');
Route::get('russcompanies', 'CompaniesController@getAll');
Route::post('russcompany', 'CompaniesController@addNewCompany')->middleware('auth:sanctum');
Route::put('russcompany/{company}', 'CompaniesController@updateCompany')->middleware('auth:sanctum');
Route::get('russcompany/{company}', 'CompaniesController@getCompanyById')->middleware('auth:sanctum');

Route::get('russbanks', 'RussianBanksController@index')->middleware('auth:sanctum');
Route::post('russbank', 'RussianBanksController@addBank')->middleware('auth:sanctum');
Route::put('russbank/{bank}', 'RussianBanksController@updateBank')->middleware('auth:sanctum');

Route::get('foreignbanks', 'ForeignBanksController@index')->middleware('auth:sanctum');
Route::post('foreignbank', 'ForeignBanksController@addBank')->middleware('auth:sanctum');
Route::put('foreignbank/{bank}', 'ForeignBanksController@updateBank')->middleware('auth:sanctum');

Route::get('russaccounts', 'RussianAccountsController@getAccountsByCompanyId')->middleware('auth:sanctum');
Route::post('russaccount', 'RussianAccountsController@addAccount')->middleware('auth:sanctum');
Route::put('russaccount/{account}', 'RussianAccountsController@updateAccount')->middleware('auth:sanctum');
