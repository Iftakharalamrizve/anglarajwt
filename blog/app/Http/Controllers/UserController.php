<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
class UserController extends Controller
{
    public function index(){
        $UserList=User::all();
        if($UserList->count()){
            return response()->json(['status' => 'success','message'=>'Data found', 'response' => $UserList], 200);
        }else{
        return response()->json(['status' => 'success','message'=>'Data Not found', 'response' => null], 200);
        }
    }
}
