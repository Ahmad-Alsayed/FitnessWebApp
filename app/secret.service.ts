import { Injectable } from 'angular2/core';

@Injectable()
export class SecretService {
public token = null;
saveToken(t){
    this.token = t;
}
getToken()
{
    return this.token;
}


}