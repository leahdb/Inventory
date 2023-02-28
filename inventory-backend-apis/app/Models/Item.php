<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    public function productType()
    {
        return $this->belongsTo(ProductType::class);
    }

    public $timestamps = false;

    protected static function boot()
{
    parent::boot();

    static::created(function ($item) {
        $productTypeID = $item->ProductTypeID;
        $count = self::where('ProductTypeID', $productTypeID)
                     ->where('Sold', false)
                     ->count();

        $productType = ProductType::find($productTypeID);
        if($count != 0) $productType->count = $count;
        else $productType->count = 0;
        $productType->save();
    });

    static::updated(function ($item) {
        if ($item->Sold) {
            $productTypeID = $item->ProductTypeID;
            $count = self::where('ProductTypeID', $productTypeID)
                         ->where('Sold', false)
                         ->count();

            $productType = ProductType::find($productTypeID);
            $productType->count = $count;
            $productType->save();
        }
    });
}

}
