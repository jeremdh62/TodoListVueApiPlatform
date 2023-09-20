<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use App\Controller\RegisterController;
use App\Controller\UpdateController;
use App\Model\UserOwnedInterface;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasher;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
#[ApiResource(
    paginationEnabled: true,
)]
#[Post(
    name: 'user_register',
    uriTemplate: '/register',
    controller: RegisterController::class,
    denormalizationContext: ['groups' => ['register_user']],
    normalizationContext: ['groups' => ['read_user']],
    processor: UserPasswordHasher::class,
)]
#[Post(
    name: 'create_user',
    uriTemplate: '/users',
    security: "is_granted('ROLE_ADMIN')",
    denormalizationContext: ['groups' => ['write_user']],
    normalizationContext: ['groups' => ['read_user']],
    controller: RegisterController::class,
    processor: UserPasswordHasher::class,
)]
#[Get(
    name: 'get_user',
    uriTemplate: '/users/{id}',
    security: "is_granted('ROLE_ADMIN')",
    denormalizationContext: ['groups' => ['write_user']],
    normalizationContext: ['groups' => ['read_user']],
)]
#[GetCollection(
    name: 'get_all_users',
    uriTemplate: '/users',
    security: "is_granted('ROLE_USER')",
    paginationEnabled: true,
    denormalizationContext: ['groups' => ['collection_write_user']],
    normalizationContext: ['groups' => ['read_user']],
)]
#[Patch(
    name: 'patch_user',
    uriTemplate: '/users/{id}',
    security: "is_granted('ROLE_ADMIN')",
    controller: UpdateController::class,
    denormalizationContext: ['groups' => ['update_user']],
    normalizationContext: ['groups' => ['read_user']],

)]
#[Delete(
    name: 'delete_user',
    uriTemplate: '/users/{id}',
    security: "is_granted('ROLE_ADMIN')",
    denormalizationContext: ['groups' => ['write_user']],
    normalizationContext: ['groups' => ['read_user']],
)]
class User implements UserInterface, PasswordAuthenticatedUserInterface, UserOwnedInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['read_user'])]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    #[Groups(['read_user', 'write_user', 'update_user', 'register_user'])]
    private ?string $email = null;

    #[ORM\Column(length: 180, unique: true)]
    #[Groups(['read_user', 'write_user', 'update_user', 'register_user'])]
    private ?string $username = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $token = null;

    #[ORM\Column]
    #[Groups(['read_user', 'update_user'])]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    #[Groups(['write_user', 'update_user', 'register_user'])]
    private ?string $password = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['read_user', 'write_user', 'update_user'])]
    private ?bool $isVerify = null;

    #[ORM\OneToMany(mappedBy: 'attachedTo', targetEntity: Task::class)]
    private Collection $tasks;

    public function __construct()
    {
        $this->isVerify = false;
        $this->roles = ['ROLE_OBSERVATOR'];
        $this->tasks = new ArrayCollection();
    }

    public static function getUserQuery(): array
    {
       return [
            'name' => 'id'
       ];
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_OBSERVATOR';

        return array_unique($roles);
    }

    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    /**
     * Get the value of username
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Set the value of username
     *
     * @return  self
     */
    public function setUsername($username)
    {
        $this->username = $username;

        return $this;
    }

    /**
     * Get the value of token
     */
    public function getToken()
    {
        return $this->token;
    }

    /**
     * Set the value of token
     *
     * @return  self
     */
    public function setToken($token)
    {
        $this->token = $token;

        return $this;
    }


    public function getIsVerify(): ?bool
    {
        return $this->isVerify;
    }

    public function setIsVerify(bool $isVerify): self
    {
        $this->isVerify = $isVerify;

        return $this;
    }

    /**
     * @return Collection|Task[]
     */
    public function getTasks(): Collection
    {
        return $this->tasks;
    }

    public function addTask(Task $task): self
    {
        if (!$this->tasks->contains($task)) {
            $this->tasks[] = $task;
            $task->setAttachedTo($this);
        }

        return $this;
    }

    public function removeTask(Task $task): self
    {
        if ($this->tasks->removeElement($task)) {
            // set the owning side to null (unless already changed)
            if ($task->getAttachedTo() === $this) {
                $task->setAttachedTo(null);
            }
        }

        return $this;
    }
}
