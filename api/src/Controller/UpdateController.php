<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UpdateController extends AbstractController
{
    public function __construct(
        private UserPasswordHasherInterface $passwordHasher,)
    {}

    public function __invoke(User $user, RequestStack $request) : User
    {
        $content = json_decode($request->getCurrentRequest()->getContent());

        if (property_exists($content, 'password')) {
            $plainPwd = $content->password;        
            $hashedPassword = $this->passwordHasher->hashPassword(
                $user,
                $plainPwd
            );
            $user->setPassword($hashedPassword);
        }

       return $user;
    }
}
