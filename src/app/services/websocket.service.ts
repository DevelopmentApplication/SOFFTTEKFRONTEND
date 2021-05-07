import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
// import io from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  // socket: any;

  // constructor() { 
  //   this.socket = io(environment.baseUrl);
  // }

  

  // listen(eventName: string){
  //   return new Observable((subscriber)=>{
  //     this.socket.on(eventName, (data)=>{
  //       subscriber.next(data);
  //     })
  //   })
  // }

  // emit(eventName: String, data: string){
  //   this.socket.emit(eventName, data);
  // }

}
