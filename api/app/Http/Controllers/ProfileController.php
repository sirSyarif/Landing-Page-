<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Profile;
use Illuminate\Support\Facades\File;
use Response;

class ProfileController extends Controller
{
    public function getAll(){
        $profile = Profile::latest()->first();
        return $profile;
    }

    public function getLogo($logo){
        $path = storage_path('uploads\images\\' . $logo);
        if(!File::exists($path)){
            abort(404);
        }

        $file = File::get($path);
        $type = File::mimeType($path);

        $response = Response::make($file, 200);
        $response->header("Content-Type", $type);

        return $response;
    }
}
