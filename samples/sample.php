<?php
namespace App\Models;

use App\Contracts\Repository;

/**
 * @param string $name
 */
class User implements Repository
{
    private const ROLE = 'admin';
    public function __construct(private string $name, private int $age = 18) {}

    public function greet(): string
    {
        echo "Bonjour {$this->name}";
        return strtoupper($this->name) . self::ROLE;
    }
}
?>
