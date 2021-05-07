import { Component, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import {listaProdutosCadastrados} from "../listaProdutos";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  listaProdutos : Produto[]  = listaProdutosCadastrados;
  


  constructor() { }

  ngOnInit(): void {
  }

}