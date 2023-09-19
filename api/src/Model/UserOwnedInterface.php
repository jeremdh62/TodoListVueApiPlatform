<?php

namespace App\Model;


interface UserOwnedInterface
{
    public static function getUserQuery() : array;
}
