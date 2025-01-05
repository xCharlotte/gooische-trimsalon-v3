<?php

use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\ClosedDayController;
use App\Http\Controllers\Admin\GroomOptionController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\SpeciesController;
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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', function () {
    return Inertia::render('Homepage');
});

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->prefix('admin')->group(function () {
    Route::resource('/blogs', BlogController::class);
    Route::resource('/species', SpeciesController::class)->only(['index', 'store', 'destroy']);
    Route::resource('/groomoptions', GroomOptionController::class)->only(['index', 'store', 'destroy']);
    Route::resource('/closed-days', ClosedDayController::class)
    ->names([
        'index' => 'closed_days.index',
        'store' => 'closed_days.store',
        'destroy' => 'closed_days.destroy',
    ])
    ->only(['index', 'store', 'destroy']);
    // Route::get('/blogs', [BlogController::class, 'index'])->name('blogs.index');
    // Route::get('/blogs/create', [BlogController::class, 'create'])->name('blogs.create');
    // Route::post('/blogs', [BlogController::class, 'store'])->name('blogs.store');
    // Route::get('/blogs/edit', [BlogController::class, 'edit'])->name('blogs.edit');
    // Route::patch('/blogs', [BlogController::class, 'edit'])->name('blogs.edit');
    // Route::delete('/blogs', [BlogController::class, 'destroy'])->name('blogs.destroy');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
