export class AuthService {
 isLoggedIn = false;

Authenticated(){
    const promise = new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                resolve(this.isLoggedIn)
            }, 500)
        }
    )
    return promise;
}

 login(){
    this.isLoggedIn = true;
 }

 logout(){
    this.isLoggedIn = false;
 }
}