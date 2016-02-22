<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
        /**
     * Get the user it belongs to.
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    /**
     * Get the users who like this post.
     */
    public function postUsers()
    {
        return $this->belongsToMany('App\User')->withTimestamps();
    }
}
