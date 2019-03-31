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



    public function update(Request $request,$id){
        $userFind = User::find($id);
        $userFind->name=request('name');
        $userFind->email=request('email');
        if($userFind->save()){
            return response()->json(['status' => 'success','message'=>'Data Update', 'response' => $userFind], 200);
        }else{
            return response()->json(['status' => 'success','message'=>'Data Not Update', 'response' => null], 200);
        }

    }
}
