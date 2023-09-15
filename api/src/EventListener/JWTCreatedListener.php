<?php

namespace App\EventListener;

use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;

class JWTCreatedListener
{

    public function onJWTCreated(JWTCreatedEvent $event): void
    {
        $payload       = $event->getData();
        $payload['username'] = $event->getUser()->getEmail();
        $payload['realusername'] = $event->getUser()->getUsername();

        $event->setData($payload);
    }
}
