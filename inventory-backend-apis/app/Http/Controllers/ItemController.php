<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;

class ItemController extends Controller
{
    public function index(Request $request)
    {

        $items = Item::query();

        if ($request->has('search')) {
            $search = $request->input('search');
            $items = $items->where('serial', 'LIKE', "%{$search}%");
        }
        
        $items = $items->get();

        return response()->json([
            'data' => $items
        ]);
    }

    public function show($id)
    {
        $item = Item::find($id);
        return response()->json($item);
    }

    public function store(Request $request)
    {
        $item = Item::create($request->all());
        return response()->json($item, 201);
    }

    public function update(Request $request, $id)
    {
        $item = Item::find($id);

        if (!$item) {
            return response()->json(['error' => 'Item not found'], 404);
        }

        $item->name = $request->input('name');
        $item->description = $request->input('description');
        $item->price = $request->input('price');
        $item->quantity = $request->input('quantity');
        $item->save();

        return response()->json(['success' => 'Item updated successfully'], 200);
    }

    public function destroy($id)
    {
        $item = Item::find($id);

        if (!$item) {
            return response()->json(['error' => 'Item not found'], 404);
        }

        $item->delete();

        return response()->json(['success' => 'Item deleted successfully'], 200);
    }
}
