export interface IUser {
    id?:         string; 
    login:       string; 
    email?:      string; 
    password?:   string;  
    name?:       string;
    location?:   {
        x: number, 
        y: number
    }; 
       
}

