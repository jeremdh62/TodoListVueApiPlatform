<?php

namespace App\Doctrine;

use ApiPlatform\Doctrine\Orm\Extension\QueryCollectionExtensionInterface;
use ApiPlatform\Doctrine\Orm\Extension\QueryItemExtensionInterface;
use ApiPlatform\Doctrine\Orm\Util\QueryNameGeneratorInterface;
use ApiPlatform\Metadata\Operation;
use App\Entity\User;
use App\Model\UserOwnedInterface;
use Doctrine\ORM\QueryBuilder;
use Symfony\Bundle\SecurityBundle\Security;

class CurrentUserExtension implements QueryCollectionExtensionInterface, QueryItemExtensionInterface
{
    private $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    
    public function applyToCollection(QueryBuilder $queryBuilder, QueryNameGeneratorInterface $queryNameGenerator, string $resourceClass, Operation $operation = null, array $context = []) : void
    {
        $this->addWhere($queryBuilder, $resourceClass);
    }

    public function applyToItem(QueryBuilder $queryBuilder, QueryNameGeneratorInterface $queryNameGenerator, string $resourceClass, array $identifiers, Operation $operation = null, array $context = []) : void
    {
        if (array_key_exists('operation_name', $context)) {
            $operationName = $context['operation_name'];
        } else {
            $operationName = '';
        }
        $this->addWhere($queryBuilder, $resourceClass, $operationName);
    }


    private function addWhere(QueryBuilder $queryBuilder, string $resourceClass, string $operationName = '')
    {

        $user = $this->security->getUser();

        $operationNamesUser = [
            'get_user',
            'patch_user',
            'delete_user',
            'get_all_users',
        ];

        if ($user instanceof User && is_a($resourceClass, UserOwnedInterface::class, true)) {
            $rootAlias = $queryBuilder->getRootAliases()[0];

            if ($resourceClass == User::class) {
                
                if (in_array("ROLE_ADMIN", $user->getRoles())) {
                    return;
                } else {
                    $queryBuilder->andWhere(sprintf('%s.id = :current_user', $rootAlias));
                    $queryBuilder->setParameter('current_user', $user->getId());
                    return;
                }
            }

            if ( in_array($operationName, $operationNamesUser) && $resourceClass == User::class ) {
                $this->userAddWhere($queryBuilder, $user, $rootAlias);
            } else {
                $this->basicAddWhere($queryBuilder, $resourceClass, $user, $rootAlias);
            }           
        }
    }

    private function basicAddWhere(QueryBuilder $queryBuilder, string $resourceClass, User $user, string $rootAlias)
    {
        if (in_array("ROLE_ADMIN", $user->getRoles())) {
            return;
        } else {

            $organizationQuery = $resourceClass::getUserQuery();

            if (array_key_exists("join", $organizationQuery)) {
                foreach ($organizationQuery['join'] as $join) {
                    if ($join['parent'] == 'rootAlias') {
                        $queryBuilder->join($rootAlias.'.'.$join['field'], $join['alias']);
                    } else {
                        $queryBuilder->join($join['parent'].'.'.$join['field'], $join['alias']);
                    }
                
                }
                $queryBuilder->andWhere(sprintf('%s.id = :current_user', $organizationQuery['last_alias']));

            }  else {
                $queryBuilder->andWhere(sprintf('%s.id = :current_user', $rootAlias));
            }

            // get organization id from code with campaign id

            $queryBuilder->setParameter('current_user', $user->getId());
        }
    }

    private function userAddWhere(QueryBuilder $queryBuilder, User $user, string $rootAlias) 
    {
        $queryBuilder->andWhere(sprintf('%s.id = :current_user', $rootAlias));
        $queryBuilder->setParameter('current_user', $user->getId());
    }
}
