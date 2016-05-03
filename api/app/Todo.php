<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Todo extends Authenticatable
{
    protected $table = 'todo_list';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
         'task',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
}
