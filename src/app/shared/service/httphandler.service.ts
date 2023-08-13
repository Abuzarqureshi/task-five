import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, catchError, map, tap, throwError } from 'rxjs';

@Injectable()
export class HttpHandlerService {
    personUrl = "https://task-5-df2b2-default-rtdb.asia-southeast1.firebasedatabase.app/person-data.json";

    leaveUrl = "https://task-5-df2b2-default-rtdb.asia-southeast1.firebasedatabase.app/leave-data.json";




    constructor(private http: HttpClient) { }





    getLeavedata() {
        return this.http.get(this.leaveUrl);
    }

    updateLeaveStatus(leave: any) {

        return this.http.put(this.leaveUrl, leave).pipe(
            map((rawData: any) => {
                let arr = [];
                for (let user in rawData) {
                    arr.push({ ...rawData[user] })
                }
                return arr;
            }),
        )


    }

    postPerson(userObj: any) {
        return this.http.post(this.personUrl, userObj)

    }
    postLeave(leaveobj: any) {
        return this.http.post(this.leaveUrl, leaveobj)
    }


    getpersondata() {
        return this.http.get(this.personUrl,
            {
                observe: 'body'
            }
        ).pipe(
            map((rawData: any) => {
                let arr = [];
                for (let user in rawData) {
                    arr.push({ ...rawData[user] })
                }
                return arr;
            }),
        )
    }
    getleavedata() {
        return this.http.get(this.leaveUrl,
            {
                observe: 'body'
            }
        ).pipe(
            map((rawData: any) => {
                let arr = [];
                for (let user in rawData) {
                    arr.push({ ...rawData[user] })
                }
                return arr;
            }),
        )

    }












}