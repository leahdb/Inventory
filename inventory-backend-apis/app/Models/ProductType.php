<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductType extends Model
{
    use HasFactory;

    protected $table = 'product_types';

    protected $fillable = [
        'name',
        'description',
        'image',
    ];

    public $timestamps = false;
    
    public function item()
    {
        return $this->hasMany(Item::class, 'type_id');
    }
}
