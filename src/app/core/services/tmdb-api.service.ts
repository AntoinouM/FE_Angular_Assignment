import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = import.meta.env.NG_APP_KEY;
  private language = 'en-US';
  private headers: HttpHeaders;

  constructor(private http:HttpClient) {
    this.headers = this.buildHeaders(this.apiKey);
  }

  // FUNCTIONS CALL
  // const url = 'https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1';
  // const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
  getTopRated(page: number, mediaType: string): Observable<any> {
    const headers = this.headers;
    const params = this.buildParams({ page: page.toString(), language: this.language })
    return this.http.get(`${this.apiUrl}/${mediaType}/top_rated`, {  headers, params })
  }

  // get images https://api.themoviedb.org/3/movie/{movie_id}/images
  getMediaImages(mediaType: string, id: number): Observable<any> {
    const headers = this.headers;
    return this.http.get(`${this.apiUrl}/${mediaType}/${id}/images`, { headers })
  }


  // call to specific id
  getMedia(id: string) {}

  // HELPERS
  // private functions to control request
  private buildHeaders(key: string): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`
    })
    return headers;
  }
  private buildParams(params: any): HttpParams {
    let httpParams = new HttpParams()
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        httpParams = httpParams.set(key, params[key]);
      }
    }
    return httpParams;
  }
}


