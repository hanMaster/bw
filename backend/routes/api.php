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

Route::get('clients', 'ClientsController@index')->middleware('auth:sanctum');
Route::post('client', 'ClientsController@addNewClient')->middleware('auth:sanctum');
Route::put('client/{client}', 'ClientsController@updateClient')->middleware('auth:sanctum');
Route::get('client/{client}', 'ClientsController@getClientById')->middleware('auth:sanctum');


Route::get('beneficiaries', 'BeneficiaryController@index')->middleware('auth:sanctum');
Route::post('beneficiary', 'BeneficiaryController@addNewBeneficiary')->middleware('auth:sanctum');
Route::put('beneficiary/{beneficiary}', 'BeneficiaryController@updateBeneficiary')->middleware('auth:sanctum');
Route::get('beneficiary/{beneficiary}', 'BeneficiaryController@getBeneficiaryById')->middleware('auth:sanctum');


Route::get('russcompanies', 'CompaniesController@index');
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

Route::get('foreignaccounts', 'ForeignAccountsController@getAccountsByCompanyId')->middleware('auth:sanctum');
Route::post('foreignaccount', 'ForeignAccountsController@addAccount')->middleware('auth:sanctum');
Route::put('foreignaccount/{account}', 'ForeignAccountsController@updateAccount')->middleware('auth:sanctum');

Route::post('usercompanies', 'UserCompaniesController@assignCompany')->middleware('auth:sanctum');
Route::put('usercompanies/{id}', 'UserCompaniesController@reassignCompany')->middleware('auth:sanctum');

Route::post('upload', 'DepositController@uploadFile')->middleware('auth:sanctum');
