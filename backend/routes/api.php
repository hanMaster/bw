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

Route::get('foreigncompanies', 'ForeignCompaniesController@index');
Route::post('foreigncompany', 'ForeignCompaniesController@addNewCompany')->middleware('auth:sanctum');
Route::put('foreigncompany/{company}', 'ForeignCompaniesController@updateCompany')->middleware('auth:sanctum');
Route::get('foreigncompany/{company}', 'ForeignCompaniesController@getCompanyById')->middleware('auth:sanctum');

Route::post('usercompanies', 'UserCompaniesController@assignCompany')->middleware('auth:sanctum');
Route::put('usercompanies/{id}', 'UserCompaniesController@reassignCompany')->middleware('auth:sanctum');

Route::post('userforcompanies', 'UserForCompaniesController@assignCompany')->middleware('auth:sanctum');
Route::put('userforcompanies/{id}', 'UserForCompaniesController@reassignCompany')->middleware('auth:sanctum');

Route::get('deposits', 'DepositController@getDeposits')->middleware('auth:sanctum');
Route::post('deposit', 'DepositController@addDeposit')->middleware('auth:sanctum');

Route::get('transfers', 'TransferController@getTransfersByClient')->middleware('auth:sanctum');
Route::get('active-transfers', 'TransferController@getActiveTransfersForAdmin')->middleware('auth:sanctum');
Route::get('archived-transfers', 'TransferController@getArchivedTransfersForAdmin')->middleware('auth:sanctum');
Route::post('transfer', 'TransferController@addTransfer')->middleware('auth:sanctum');
