<?php

namespace App\DataFixtures;

use App\Entity\Task;
use App\Entity\User;
use App\enum\PriorityTask;
use App\enum\StatusTask;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class TaskFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');

        $status = StatusTask::values();
        $priority = PriorityTask::values();

        $users = $manager->getRepository(User::class)->findAll();

        for ($i = 0; $i < 20; ++$i) {

            $task = new Task();
            $task->setTitle($faker->sentence(3, true));
            $task->setDescription($faker->paragraph(3, true));
            $task->setDeadline($faker->dateTimeBetween('now', '+1 year'));
            $task->setStatus($faker->randomElement($status));
            $task->setPriority($faker->randomElement($priority));
            $task->setAttachedTo($faker->randomElement($users));


            $manager->persist($task);
        }

        $manager->flush();
    }

    public function getDependencies(): ?array
    {
        return [
            UserFixtures::class
        ];
    }
}
