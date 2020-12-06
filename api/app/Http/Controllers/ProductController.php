<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\File;
use Response;

class ProductController extends Controller
{
    public function getProduct(){
        $product = Product::get();

        return $product;
    }

    public function getLogo($image){
        $path = storage_path('uploads\images\\' . $image);
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
        $product = Product::find($id);
        return $product;
    }
}
