<?php

namespace App\enum;

enum StatusTask: string
{
    case TODO = 'TODO';
    case DOING = 'DOING';
    case DONE = 'DONE';

    public static function values(): array
    {
        return [
            self::TODO->value,
            self::DOING->value,
            self::DONE->value,
        ];
    }
}
