//2,5
function TelefoneCelular(ddd, numero){
    this.ddd = ddd;
    //7
    this.numero = numero;

    this.getDdd = function (){
        return this.ddd;
    };
    this.setDdd = function (ddd){
        this.ddd = ddd;
    };

    //6
    this.getNumero = function (){
        //1
        return this.numero;
    };
    //4
    this.setNumero = function (numero){
        //8
        this.numero = numero;
    };
}
//3
function Endereco(estado, cidade, rua, numero)
{
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;

    this.getEstado = function (){
        return this.estado;
    };
    this.setEstado = function (estado){
        this.estado = estado;
    };

    this.getCidade = function (){
        return this.cidade;
    };
    this.setCidade = function (cidade){
        this.cidade = cidade;
    };

    this.getRua = function (){
        return this.rua;
    };
    this.setRua = function (rua){
        this.rua = rua;
    };

    this.getNumero = function (){
        return this.numero;
    };
    this.setNumero = function (numero){
        this.numero = numero;
    };

    this.getEstadoMai = function (){
        return this.estado.toUpperCase();
    };
    this.getEstadoMin = function (){
        return this.estado.toLowerCase();
    };

    this.getCidadeMai = function (){
        return this.cidade.toUpperCase();
    };
    this.getCidadeMin = function (){
        return this.cidade.toLowerCase();
    };

    this.getRuaMai = function (){
        return this.rua.toUpperCase();
    };
    this.getRuaMin = function (){
        return this.rua.toLowerCase();
    };
}

function Cliente(nome, telefoneCelular, email, endereco){
    this.nome = nome;
    this.telefoneCelular = telefoneCelular;
    this.email = email;
    this.endereco = endereco;

    this.getNome = function (){
        return this.nome;
    };
    this.setNome = function (nome){
        this.nome = nome;
    };

    this.getTelefoneCelular = function (){
        return this.telefoneCelular;
    };
    this.setTelefoneCelular = function (telefoneCelular){
        this.telefoneCelular = telefoneCelular;
    };

    this.getEmail = function (){
        return this.email;
    };
    this.setEmail = function (email){
        this.email = email;
    };

    this.getEndereco = function (){
        return this.endereco;
    };
    this.setEndereco = function (endereco){
        this.endereco = endereco;
    };

    this.getNomeMai = function (){
        return this.nome.toUpperCase();
    };
    this.getNomeMin = function (){
        return this.nome.toLowerCase();
    };

    this.getEmailMaio = function (){
        return this.email.toUpperCase();
    };
    this.getEmailMin = function (){
        return this.email.toLowerCase();
    };

    Object.defineProperty(this, 'desc',{
        get: function (){
            const linha = '---------------';
            let texto = '';

            texto += linha + '\n';
            texto += 'Informações do Cliente:\n';
            texto += this.nome + '\n';
            texto += linha + '\n';
            texto += linha + '\n';
            texto += 'Telefone:\n';
            texto += 'DDD: ' + this.telefoneCelular.getDdd() + '\n';
            texto += 'Número: ' + this.telefoneCelular.getNumero() + '\n';
            texto += linha + '\n';
            texto += 'Endereço:\n';
            texto += 'Rua: ' + this.endereco.getRua() + '\n';
            texto += 'Número: ' + this.endereco.getNumero() + '\n';
            texto += 'Cidade: ' + this.endereco.getCidade() + '\n';
            texto += 'Estado: ' + this.endereco.getEstado() + '\n';
            texto += linha;

            return texto;
        }
    });
}

const telefone1 = new TelefoneCelular(
    "12", 
    "99110-7031"
);
const telefone2 = new TelefoneCelular(
    "12", 
    "99735-2977"
);
const telefone3 = new TelefoneCelular(
    "12", 
    "98273-1200"
);

const endereco1 = new Endereco(
    "SP",
    "São José dos Campos",
    "Rua Santo André",
    "101"
);
const endereco2 = new Endereco(
    "SP",
    "Guararema",
    "Rua Bela Vista",
    "637"
);
const endereco3 = new Endereco(
    "RJ",
    "Mangaratiba",
    "Rua Sabiá",
    "67"
);

const cli1 = new Cliente(
    "Leonardo Matiusso",
    telefone1, 
    "leonardo.matiusso@gmail.com.br", 
    endereco1
);
const cli2 = new Cliente(
    "Anderson Castro", 
    telefone2, 
    "andersoncastro@hotmail.com", 
    endereco2
);
const cli3 = new Cliente(
    "Peter Parker",
    telefone3, 
    "naosouohomemaranha@mentira.com", 
    endereco3
);

const lista = [cli1, cli2, cli3];

for (let i = 0; i < lista.length; i++){
    console.log(lista[i].desc);
    console.log();
}

function ordenarClientes(clientes){
    const clientesOrd = [...clientes];

    clientesOrd.sort(function (a, b)
    {
        return a.getNome().localeCompare(b.getNome());
    });

    return clientesOrd;
}

const clientesOrd = ordenarClientes(lista);

console.log("Clientes em Ordem Alfabética:");

for (let i = 0; i < clientesOrd.length; i++){
    console.log(clientesOrd[i].getNome());
}