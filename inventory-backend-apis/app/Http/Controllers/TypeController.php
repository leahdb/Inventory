<?php

namespace App\Http\Controllers;

use App\Models\ProductType;
use App\Models\Item;
use Illuminate\Http\Request;

class TypeController extends Controller
{
    public function index(Request $request)
    {
        $types = ProductType::query();

        if ($request->has('search')) {
            $search = $request->input('search');
            $types = $types->where('name', 'LIKE', "%{$search}%");
        }

        $types = $types->get();

        return response()->json([
            'data' => $types
        ]);
    }


    public function show($id)
    {
        $type = ProductType::find($id);

        if(!$type) {
            return response()->json([
                'success' => false,
                'message' => 'Product Type not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $type
        ]);
    }

    public function store(Request $request)
    {
        $type = new ProductType();
        $type->name = $request->name;
        $type->description = $request->description;
        $type->image = $request->image;
        //$type->count = $type->products->count();

        $type->save();

        return response()->json([
            'success' => true,
            'data' => $type
        ]);
    }

    public function update(Request $request, $id)
    {
        $type = ProductType::find($id);

        if(!$type) {
            return response()->json([
                'success' => false,
                'message' => 'Product Type not found'
            ], 404);
        }

        $type->name = $request->name;
        $type->description = $request->description;
        $type->image = $request->image;
        $type->count = $type->products->count();

        $type->save();

        return response()->json([
            'success' => true,
            'data' => $type
        ]);
    }

    public function destroy($id)
    {
        $type = ProductType::find($id);

        if(!$type) {
            return response()->json([
                'success' => false,
                'message' => 'Product Type not found'
            ], 404);
        }

        $type->delete();

        return response()->json([
            'success' => true,
            'message' => 'Product Type deleted successfully'
        ]);
    }
}
