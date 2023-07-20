import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';
import { Item } from '../../interfaces/iItem';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, OnChanges{



  @Input() itemQueVaiSerEditado!: Item;

  editando:boolean= false;
  textoBtn = "Salvar item";

  valorItem!: string;

  constructor(private listaService: ListaDeCompraService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['itemQueVaiSerEditado'].currentValue)
    if(!changes['itemQueVaiSerEditado'].firstChange){
     this.editando = true;
     this.textoBtn = 'Editar item';
     this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
  }

  editarItem(){
    this.listaService.editarItemDaLista(this.itemQueVaiSerEditado,this.valorItem);
    this.limparCampo();
    this.editando = false;
    this.textoBtn = "Salvar item";
  }

  adicionarItem() {
    console.log(this.valorItem);
    this.listaService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }

  limparCampo(){
    this.valorItem = '';
  }

  deletarItem(){

  }

}
