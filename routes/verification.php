<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function ()
{
    Route::get('/verification-email', EmailVerificationPromptController::class)
                ->name('verification.notice');

    Route::get('/verification-email/{id}/{hash}', VerifyEmailController::class)
                ->middleware(['signed', 'throttle:6,1'])
                ->name('verification.verify');

    Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
                ->middleware('throttle:6,1')
                ->name('verification.send');

    Route::get('/confirm-mdp', [ConfirmablePasswordController::class, 'show'])
                ->name('password.confirm');

    Route::post('/confirm-mdp', [ConfirmablePasswordController::class, 'store']);

    Route::put('/password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('/deconnexion', [AuthenticatedSessionController::class, 'destroy'])
                ->name('logout');
});
