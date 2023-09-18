<?php

namespace App\Entity;

use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use App\enum\PriorityTask;
use App\enum\StatusTask;
use App\Repository\TaskRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: TaskRepository::class)]
#[Post(
    uriTemplate: "/tasks",
    security: "is_granted('ROLE_USER')",
    denormalizationContext: [
        'groups' => ['task:write']
    ],
    normalizationContext: [
        'groups' => ['task:read']
    ]
)]
#[GetCollection(
    uriTemplate: "/tasks",
    security: "is_granted('ROLE_USER')",
    paginationEnabled: true,
    paginationItemsPerPage: 10,
    order: ['deadline' => 'ASC'],
    denormalizationContext: [
        'groups' => ['task:write']
    ],
    normalizationContext: [
        'groups' => ['task:read']
    ]
)]
#[Patch(
    uriTemplate: "/tasks/{id}",
    security: "is_granted('ROLE_USER')",
    denormalizationContext: [
        'groups' => ['task:write']
    ],
    normalizationContext: [
        'groups' => ['task:read']
    ]
)]
#[Get(
    uriTemplate: "/tasks/{id}",
    security: "is_granted('ROLE_USER')",
    denormalizationContext: [
        'groups' => ['task:write']
    ],
    normalizationContext: [
        'groups' => ['task:read']
    ]
)]
#[Delete(
    uriTemplate: "/tasks/{id}",
    security: "is_granted('ROLE_USER')",
    denormalizationContext: [
        'groups' => ['task:write']
    ],
    normalizationContext: [
        'groups' => ['task:read']
    ]
)]
class Task
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['task:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['task:read', 'task:write'])]
    private ?string $title;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['task:read', 'task:write'])]
    private ?string $description;

    #[ORM\Column(length: 255)]
    #[Groups(['task:read', 'task:write'])]
    #[Assert\Choice(choices: [PriorityTask::LOW->value, PriorityTask::MEDIUM->value, PriorityTask::HIGH->value])]
    private ?string $priority;

    #[ORM\Column(length: 255)]
    #[Groups(['task:read', 'task:write'])]
    #[Assert\Choice(choices: [StatusTask::TODO->value, StatusTask::DOING->value, StatusTask::DONE->value])]
    private ?string $status;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(['task:read', 'task:write'])]
    private ?\DateTimeInterface $deadline;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'tasks')]
    #[ORM\JoinColumn(nullable: true)]
    #[Groups(['task:read', 'task:write'])]
    private ?User $attachedTo;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getPriority(): ?string
    {
        return $this->priority;
    }

    public function setPriority(string $priority): static
    {
        $this->priority = $priority;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;

        return $this;
    }

    public function getDeadline(): ?\DateTimeInterface
    {
        return $this->deadline;
    }

    public function setDeadline(\DateTimeInterface $deadline): static
    {
        $this->deadline = $deadline;

        return $this;
    }

    public function getAttachedTo(): ?User
    {
        return $this->attachedTo;
    }

    public function setAttachedTo(?User $attachedTo): static
    {
        $this->attachedTo = $attachedTo;

        return $this;
    }
}
