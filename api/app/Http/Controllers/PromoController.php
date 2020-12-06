<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Promo;
use Illuminate\Support\Facades\File;
use Response;

class PromoController extends Controller
{
    public function getPromo(){
        $promo = Promo::all();

        return $promo;
    }

    public function getFoto($foto){
        $path = storage_path('uploads\images\\' . $foto);
        if(!File::exists($path)){
            abort(404);
        }

        $file = File::get($path);
        $type = File::mimeType($path);

        $response = Response::make($file, 200);
        $response->header("Content-Type", $type);

        return $response;
    }

    public function getDetail($id){
        $promo = Promo::find($id);
        return $promo;
    }
}
