<?php 

declare(strict_types=1);

class FormManager
{
    public function isDevisFormSubmitted(): bool
    {
        return isset($_POST['name'])
            && isset($_POST['email'])
            && isset($_POST['phone'])
            && isset($_POST['message']);
    }
    public function isDevisFormValid(): bool
    {
         return !empty($_POST['name'])
            && !empty($_POST['email'])
            && !empty($_POST['phone'])
            && !empty($_POST['message']);
    }
    public function addForm(\PDO $pdo): void
    {
        if ($this->isDevisFormSubmitted() && $this->isDevisFormValid())
        {
            $form = new Form($_POST['name'], $_POST['email'], $_POST['phone'], $_POST['message']);
            $sql = 'INSERT INTO form(name, email,phone, message) VALUES(:name, :email,:phone, :message)';
         
              $q = $pdo->prepare($sql);
            $q->execute([
                'name' => $form->getName(),
                'email' => $form->getEmail(),
                'phone' => $form->getPhone(),
                'message' => $form->getMessage()
                ]);
        }
    }
}
