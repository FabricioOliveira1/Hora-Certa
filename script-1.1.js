


/*-------------------------------------------------------------------------------------------------*/
//                                      REFATORAMENTO E ORGANIZAÇÃO



var $btn_add = document.querySelector('.btn_add');
var $btn_close = document.querySelector('.btn_close');
var $salvar = document.querySelector('#card_salvar');
var $cancelar = document.querySelector('#card_cancelar');
var $add_popup = document.querySelector('.add_popup');



var popup_config = {

    adicionar(){
        $add_popup.classList.add('toggle_popup');
        periodotry = setInterval(popup_config.copia, 50 );

    },
    fechar(){
        $add_popup.classList.remove('toggle_popup');
        clearInterval(periodotry);
        produto.limpacampos();

    },
    copia(){//funcao para copiar o valor digitado do periodo logo ao lado (dentro do popup)
        var $periodo = document.querySelector('#periodo').value;
        console.log($periodo)
        periodocopia.innerHTML = $periodo;
    }
}

//-----------------------LISTENERS------------------------------------
$btn_add.addEventListener('click', popup_config.adicionar);
$btn_close.addEventListener('click', popup_config.fechar);
$cancelar.addEventListener('click', popup_config.fechar);
$salvar.addEventListener('click', ativasalvar);

function ativasalvar(){
    produto.salvar();
}


class Produto {

    constructor(){
        this.id = 0;
        this.Arrayprodutos = [];
    }
    
    salvar(){//botão adicionar do popup
        
        let produto = this.lerDados();

        if(this.validaCampos(produto)){
            this.adicionar(produto);
            this.adicionarhtml();
            
            let verificaHora = setInterval(this.remediohora, 1000);
        }

        clearInterval(periodotry);

        this.limpacampos();

        popup_config.fechar();
        
    }
    
    horadoremedio(){

        let dataGlobal = new Date();
        let tempo_RealTS = dataGlobal.getTime();

        for(let i = 0; i < this.Arrayprodutos.length; i++){

            let soma = parseInt(this.Arrayprodutos[i].horasalva.getTime() + this.Arrayprodutos[i].calcInt);
            
            if(soma === tempo_RealTS){
                this.Arrayprodutos[i].cartela = (this.Arrayprodutos[i].cartela - 1);
                console.log('Hora Certa!')
                alert('Hora Certa: ', this.Arrayprodutos[i].medicamento);
                let stampParaData = soma;
                let dataCard = new Date(stampParaData);
                

            }else{
                let stampParaData = soma;
                let dataCard = new Date(stampParaData);
                console.log('Quase na hora!');
            }
        }
    }
    remediohora(){
        produto.horadoremedio(produto);
    }
    
    lerDados(){
        let dataGlobal = new Date();

        let produto = {};

        produto.id = this.id;
        produto.medicamento = document.querySelector('#medicamento').value;
        produto.descricao = document.querySelector('#descricao').value;
        produto.periodo = document.querySelector('#periodo').value;
        produto.intervalo = document.querySelector('#periodo').value;
        produto.cartela = document.querySelector('#qtd_cartela').value;
        produto.periodocopia = document.querySelector('#periodocopia').value;
        produto.calcInt = parseInt(produto.intervalo) * 60 * 60 * 1000;
        produto.horasalva = dataGlobal;

        return produto;
    }

    adicionar(produto){
        
        this.Arrayprodutos.push(produto)
        this.id++
        
    }

    adicionarhtml(){
        
        let mainmed = document.querySelector('.main');

        mainmed.innerHTML = ''

        for(let i = 0; i < this.Arrayprodutos.length; i++){
            
            let divcard = document.createElement('div');
            let divh2 = document.createElement('h2');
            let divcardcontainer = document.createElement('div');
            let divpdescricao = document.createElement('p');
            let divpintervalo = document.createElement('p');
            let divpqtdcartela = document.createElement('p');
            
            /*let divcardiconsEditar = document.createElement('span');
            let divcardiconsSuspender = document.createElement('span');*/
            let divcardiconsExcluir = document.createElement('span');
    
            
            /*let divcardiconsaEditar = document.createElement('a');
            let a_imgEditar = document.createElement('img');
    
            
            let divcardiconsaSuspender = document.createElement('a');
            let a_imgSuspender = document.createElement('img');*/
    
            
            let divcardiconsaExcluir = document.createElement('a');
            let a_imgExcluir = document.createElement('img');
            
            divcard.classList.add('card');
            divh2.classList.add('card_title');
            divcardcontainer.classList.add('card_container_icons');
            divpdescricao.classList.add('cardDescricao');
            divpintervalo.classList.add('cardIntervalo');
            /*divcardiconsEditar.classList.add('card_icons');
            divcardiconsSuspender.classList.add('card_icons');*/
            divcardiconsExcluir.classList.add('card_icons');
    
            /*divcardiconsaEditar.href = "#";
            divcardiconsaSuspender.href = "#";*/
            divcardiconsaExcluir.href = "#";
            /*a_imgEditar.src = "./Icons/editar-arquivo-16px.png";
            a_imgSuspender.src = "./Icons/forbidden-16px.png";*/
            a_imgExcluir.src = "./Icons/lixeira-de-reciclagem-16px.png";


            let div_id = this.Arrayprodutos[i].id;
            divh2.innerHTML = this.Arrayprodutos[i].medicamento;
            divpdescricao.innerHTML = ('Descrição: ' + this.Arrayprodutos[i].descricao);
            divpintervalo.innerHTML = ('Intervalo: De ' + this.Arrayprodutos[i].intervalo + ' em ' + this.Arrayprodutos[i].intervalo + ' horas.');
            divpqtdcartela.innerHTML = ('Quantidade: ' + this.Arrayprodutos[i].cartela + ' restantes.')
            
    
            mainmed.appendChild(divcard);
            divcard.appendChild(divh2);
            divcard.appendChild(divcardcontainer);
            /*divcardcontainer.appendChild(divcardiconsEditar);
            divcardcontainer.appendChild(divcardiconsSuspender);*/
            divcardcontainer.appendChild(divcardiconsExcluir);
            
    
            /*divcardiconsEditar.appendChild(divcardiconsaEditar);
            divcardiconsaEditar.appendChild(a_imgEditar);
    
            divcardiconsSuspender.appendChild(divcardiconsaSuspender);
            divcardiconsaSuspender.appendChild(a_imgSuspender);*/
    
            divcardiconsExcluir.appendChild(divcardiconsaExcluir);
            divcardiconsaExcluir.appendChild(a_imgExcluir);
            
            divcard.appendChild(divpdescricao);
            divcard.appendChild(divpintervalo);
            divcard.appendChild(divpqtdcartela);
            
            a_imgExcluir.setAttribute("onclick","produto.deletar("+ div_id +")");

            let soma = parseInt(this.Arrayprodutos[i].horasalva.getTime() + this.Arrayprodutos[i].calcInt)

            let dataCard = new Date(soma);

            let divpproximahora = document.createElement('p');
            divcard.appendChild(divpproximahora);
            divpproximahora.innerHTML = 'Proxima Aplicação: '+ dataAtualFormatada(dataCard);

            function dataAtualFormatada(dataCard){
                
                let horas  = dataCard.getHours();
                let minutos = dataCard.getMinutes();
                
                return +horas+":"+minutos;
            }
        }        
    }
    validaCampos(produto){
        if(produto.medicamento === '' || produto.descricao === '' ||
        produto.periodo === '' || produto.intervalo === '' || produto.cartela === ''){
            alert('Preencha os campos corretamente!');
            return false
        }else{
            return true;
        }
    }
    limpacampos(){
        document.querySelector('#medicamento').value = '';
        document.querySelector('#descricao').value = '';
        document.querySelector('#periodo').value = '';
        document.querySelector('#intervalo').value = '';
        document.querySelector('#qtd_cartela').value = '';
        document.querySelector('#periodocopia').value = '';
    }

    deletar(id){
        for(let i = 0; i < this.Arrayprodutos.length; i++){
            if(this.Arrayprodutos[i].id == id){
                this.Arrayprodutos.splice([i], 1);
                this.adicionarhtml();
            }
        }
    }
}

let produto = new Produto();

    
    
    
   

    
    
    
  



