<?php

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
use Illuminate\Http\Request;

Route::get('/', function (Request $request) {
    // 带auth参数就表示已经登陆
    $authed = $request->has('auth');
    // 以这个简单的例子为例，如果登陆应该增加积分，但是实际上已经登陆却发现积分没有增加
    // 这时可能就会使用var_dump或者echo打出变量看看来调试，对于laravel，dd比var_dump和echo更方便
    if ($authed) {
        // 增加登陆积分等等
        Log::debug('增加积分');
    } else {
        // 没有变化
        Log::debug('不变积分');
    }
    if ($authed) {
        die("已经登陆");
    } else {
        die("没有登陆");
    }
    return view('welcome');
});
