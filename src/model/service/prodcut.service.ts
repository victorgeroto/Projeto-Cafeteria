import { Injectable } from '@angular/core';
import { Iprodcut } from './iprodcut';
import { localProducts } from '../data/mock-product';
import { catchError, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdcutService {
  private apiUrl = 'https://localhost:8080/product'; // URL da API spring Boot

  products:Iprodcut [] = localProducts;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Iprodcut[]> {
    return this.http.get<Iprodcut[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Erro ao buscar produtos da API, usando produtos locais', error);
        return of(this.products);
      })
    );
  }
}
