const db = [
    {
        email:"Vitormuniz@gmail.com",
        password:"542030"
    }
]

export class AdminService {
    createAdmin = (email:string, password: string) => {
        const admin = {
            email,
            password
        }
        db.push(admin)
        console.log("DB Atualizado")
    }
}