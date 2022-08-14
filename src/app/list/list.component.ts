import { Component, OnInit } from '@angular/core';
import { Clothes } from '../shopping';
import { CLOTHES } from '../mock-cloths';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  clothes=CLOTHES;
  // clothes:Clothes={
  //   gongyingshang:'深圳宝安区',
  //   cangku:'四楼仓库',
  //   dingdanzhuangtai:'入库',
  //   //picture:'assets\images\01.jpg',
  //   kuanshi:'黑色  S   ￥85.00   2',
  //   jiesuanzhanghu:'支付宝',
  //   money:170,
  //   qian:0,
  //   danhao:'ZFB20220000',
  //   zhidanren:'陈志宇',
  //   date:'2022-08-14 11:30',
  //   beizhu:'',
  //   fujian:''
  // };

  constructor() { }

  ngOnInit(): void {
  }

}
