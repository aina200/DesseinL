<?php 

declare(strict_types=1);

//phpMyAdmin nom :form
// id / int / PRIMARY / A_I
// name VARCHAR / 127
// email VARCHAR / 127
// phone TEXT/255
// message TEXT / 1023


class Form
{
    private ?int $id = null;
    private string $name;
    private string $email;
    private string $phone;
    private string $message;
    
    public function __construct(string $name, string $email, string $phone, string $message)
    {
        $this->name = $name;
        $this->email = $email;
        $this->phone = $phone;
        $this->message = $message;
    }
    public function getId(): ?int
    {
        return $this->id;
    }
    public function getName(): string
    {
        return $this->name;
    }
    public function getEmail(): string
    {
        return $this->email;
    }
    public function getPhone(): string
    {
        return $this->phone;
    }
    public function getMessage(): string
    {
        return $this->message;
    }
    public function setId(int $id): void
    {
        $this->id = $id;
    }
}
