import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  navbarTitle:String = "Home Page";

  subjects = [
    { sub: 'IT', srcBc: 'https://www.computerworld.pl/g1/news/thumbnails/3/2/329387_panorama_informatyka_png_80_resize_830x689.webp' },
    { sub: 'Math', srcBc: 'https://www.wsip.pl/blog/wp-content/uploads/2021/03/matematyka-852x568.png' },
    { sub: 'Pedagogics', srcBc: 'https://www.uns.lodz.pl/sites/default/files/kierunek/kierunek_ped_mgr.jpg'}
    // { sub: '', srcBc: '' }
  ]

  schools = [
    { studies: 'University', city: 'of Opole', srcImage: 'https://www.pomaturze.pl/images/1554730511_studiuj_w_opolu.jpg' },
    { studies: 'University', city: 'of Silesia', srcImage: 'https://upload.wikimedia.org/wikipedia/commons/5/51/U%C5%9A_rektorat_deptak.jpg' },
    { studies: 'University', city: 'of Wroclaw', srcImage: 'https://s.inyourpocket.com/gallery/244152.jpg' }
    // { studies: '', city: '', srcImage: '' }
  ]

  constructor() { 
  }

  ngOnInit(): void {

  }

  addSubject() {
    console.log('Button addSubject detected!'); 
  }

  addSchool() {
    console.log('Button addSchool detected!');
  }
}

