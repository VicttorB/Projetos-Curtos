<?php

Class Model{
    private $server = "localhost";
    private $username = "root";
    private $pass;
    private $database = "sistema_jb";
    private $conn;

    public function __construct(){
        try{
            $this -> conn = new mysqli($this -> server, $this -> username, $this -> pass, $this -> database);
        }catch(Exception $e){
            echo "A conexão falhou" . $e -> getMessage();
        }
    }


    public function insert(){
        if (isset($_POST['submit'])){
            //echo "Ok!";
            if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['whats']) && isset($_POST['address'])){
                if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['whats']) && !empty($_POST['address'])){


                $name = filter_input(INPUT_POST, 'name');
                $email = filter_input(INPUT_POST, 'email');
                $whats = filter_input(INPUT_POST, 'whats');
                $address = filter_input(INPUT_POST, 'address');

                $query = "INSERT INTO cadastros_jb (name, email, whats, address) VALUES ('$name', '$email', '$whats', '$address')";

                if ($sql = $this->conn->query($query)){
                    echo "<script>alert('Dados inseridos com sucesso!')</script>";
                    echo "<script>window.location.href='index.php'</script>";
                }else{
                    echo "<script>alert('Ocorreu um erro!')</script>";
                    echo "<script>window.location.href='index.php'</script>";

                }

            }else{
                    echo "<script>alert('Preencha os campos')</script>";
                    echo "<script>window.location.href='index.php'</script>";
                }
                

            }
            
        }
    }

    public function delete($id){
        $query = "DELETE FROM cadastros_jb WHERE id = '$id'";

        if($sql = $this -> conn -> query($query)){
            return true;
        }else{
            return false;
        }
    }

    public function fetch_unico($id){
        $data = null;
        $query = "SELECT * FROM cadastros_jb WHERE id = '$id'";
         if($sql = $this -> conn -> query($query)){
            while($row = $sql -> fetch_assoc()){
                $data = $row;
            }
        }
        return $data;
    }

    public function edit($id){
        $data = null;
        $query = "SELECT * FROM cadastros_jb WHERE id = '$id'";

        if($sql = $this -> conn -> query($query)){
            while($row = $sql -> fetch_assoc()){
                $data = $row;
            }
        }
        return $data;
    }

    public function update($data){
        //var_dump($data);
        $query = "UPDATE cadastros_jb SET name = '$data[name]', email = '$data[email]', whats = '$data[whats]', address = '$data[address]' WHERE id = '$data[id]'";

        if($sql = $this -> conn -> query($query)){
            return true;
        }else{
            return false;
        }
    }

    public function fetch(){
        $data = null;
        $query = "SELECT * FROM cadastros_jb";

        if($sql = $this -> conn -> query($query)){
            while($row = mysqli_fetch_assoc($sql)){
                $data[] = $row;
            }
        }

        return $data;
    }
}