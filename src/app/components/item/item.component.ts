import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item!: Item;

  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDelete = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChange');
  }

  ngOnInit(): void {
    console.log('onInit');
  }

  ngOnDestroy(){
    console.log('onDestroy');
  }

  editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  checarItem(){
    this.item.comprado = !this.item.comprado;
  }

  deletarItem() {
    console.log('estao tentando me deletar!');
    this.emitindoIdParaDelete.emit(this.item.id);
  }
}
