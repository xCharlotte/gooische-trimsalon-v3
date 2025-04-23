<?php

use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\ClosedDayController;
use App\Http\Controllers\Admin\GroomOptionController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\SpeciesController;
use App\Http\Controllers\AppointmentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Homepage');
});

Route::get('/afspraak', [AppointmentController::class, 'index'])->name('appointment.index');
Route::post('/afspraak', [AppointmentController::class, 'store'])->name('appointment.post');

// Route::get('/afspraak', function () {
//     return Inertia::render('Appointment/Index');
// });

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->prefix('admin')->group(function () {
    Route::resource('/blogs', BlogController::class);
    Route::resource('/appointments', \App\Http\Controllers\Admin\AppointmentController::class);
    Route::resource('/species', SpeciesController::class)->only(['index', 'store', 'destroy']);
    Route::resource('/groomoptions', GroomOptionController::class)->only(['index', 'store', 'destroy']);
    Route::resource('/closed-days', ClosedDayController::class)
    ->names([
        'index' => 'closed_days.index',
        'store' => 'closed_days.store',
        'destroy' => 'closed_days.destroy',
    ])
    ->only(['index', 'store', 'destroy']);

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
