import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public imagenes = [
    'https://apollo-virginia.akamaized.net/v1/files/yazu5ekfyucj1-EC/image;s=850x0',
    'https://www.ropadetrabajo.ec/images/producto-13-1200x900.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_GjezMDYEhaVCImMDOCy1RG04ze5yNkT43SS2Q1E4K0-ziM6&s',
    'https://images-na.ssl-images-amazon.com/images/G/33/img17/softlines/mainlanding/W_Jeans.jpg',
    'http://click-tienda.com/wp-content/uploads/2019/05/PALANCA-PS42.jpg',
    'https://www.doctortronic.com/11404-thickbox_default/mando-ps4-personalizado-media-pintura-materia-oscura-palancas-competitivas.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/81%2Blz2g6bJL._AC_SY679_.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/6/67/Microsoft-Xbox-360-E-wController.jpg',
    'https://www.amoblamenti.com.ar/wp-content/uploads/2017/07/peluche_para_chicos_oso_sentado_urbankids_6.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/51glNpF65rL._SY355_.jpg'
  ]
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  public imagenes1: Array<{ picture: string}> = [];
  public proInt : Array<{ nomPro: string, detalle: string, precio: string, picture: string }> = [];
  constructor() {

    for (let i = 1; i < this.proInt.length; i++) {
      this.proInt.push({
        nomPro: 'Producto' + i,
        detalle: 'Informacion del producto' + i,
        precio: 'precio' + i,
        picture: this.imagenes[Math.floor(Math.random() * this.imagenes.length)]
      });
    }

    for (let i = 1; i < this.imagenes.length; i++) {
      this.imagenes1.push({
        picture: this.imagenes[Math.floor(Math.random() * this.imagenes.length)]
      });
    }
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.imagenes.length)]
      });
    }
  }

// public validation

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
