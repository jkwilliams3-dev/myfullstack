import { Component, inject } from '@angular/core';
import { AppStore } from '../store/app.state';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello',
  standalone: true,
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
  imports: [CommonModule],
  providers: []
})
export class HelloComponent {
  count = 0;
  message = '';
  api: any;

  store = inject(AppStore);
  http = inject(HttpClient);

  inc() {
    this.store.setState({ count: this.count + 1 });
  }

  callApi() {
    this.http.get('/api/hello').subscribe(r => this.api = r);
  }
}
