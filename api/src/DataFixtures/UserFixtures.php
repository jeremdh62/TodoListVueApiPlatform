<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class UserFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // admin
        $user1 = (new User())
            ->setEmail('admin@test.com')
            ->setUsername('admin')
            ->setPassword('$2y$13$2/EdUuZ5Aalovr2uxvggKux/zmfdLhG376iNywnx3p0BD7HOUlOWW') // password
            ->setRoles(['ROLE_ADMIN'])
            ->setIsVerify(true);
        $manager->persist($user1);

        // default user
        $user2 = (new User())
            ->setEmail('user1@gmail.com')
            ->setUsername('user1')
            ->setPassword('$2y$13$2/EdUuZ5Aalovr2uxvggKux/zmfdLhG376iNywnx3p0BD7HOUlOWW') // password
            ->setRoles(['ROLE_USER']);
        $manager->persist($user2);

        $user4 = (new User())
            ->setEmail('user2@gmail.com')
            ->setUsername('user2')
            ->setPassword('$2y$13$2/EdUuZ5Aalovr2uxvggKux/zmfdLhG376iNywnx3p0BD7HOUlOWW') // password
            ->setRoles(['ROLE_USER']);
        $manager->persist($user4);


        // observator
        $user5 = (new User())
            ->setEmail('observator@gmail.com')
            ->setUsername('observator')
            ->setPassword('$2y$13$2/EdUuZ5Aalovr2uxvggKux/zmfdLhG376iNywnx3p0BD7HOUlOWW') // password
            ->setRoles(['ROLE_OBSERVATOR']);
        $manager->persist($user5);

        $manager->flush();
    }
}
