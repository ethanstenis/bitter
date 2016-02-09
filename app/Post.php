<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
        /**
     * Get the user it belongs to.
     */
    public function users()
    {
        return $this->hasMany('App\User');
    }

    /**
     * Get the users who like this post.
     */
    public function postUsers()
    {
        return $this->belongsToMany('App\User');
    }
}
