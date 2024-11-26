import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  @Input() name: string = 'CDFs';  // Isso permite que 'name' seja passado de fora

  constructor() { }

  ngOnInit(): void {
  }

  clicked (): void {
    window.alert('Opa, você clicou!');
 }
}