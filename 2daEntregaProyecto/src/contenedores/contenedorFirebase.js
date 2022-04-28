import admin from 'firebase-admin'

export default class ContenedorFirebase{
    constructor(collection){
        this.db = admin.firestore()
        this.query = db.collection('productos')
    }

    async conetion(){
        
    }

    async save(datos){
        var admin = require("firebase-admin");

        var serviceAccount = require("./programacion-backend-firebase-adminsdk-k4o9t-758ce38b5f.json");

        admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://programacion-backend.firebaseio.com"
        });

console.log('fire base conectada')
        const db = admin.firestore()
        const query = db.collection('productos')
        try {
            let id = 1
            let doc = query.doc(`${id}`)
            await doc.create({title: 'tablet', price: '6000'})
        } catch (e) {
            
        }
    }

    async getId(idData){
        try {
            
        } catch (e) {
            
        }
    }

    async update(idData, newData){
        try {
            
        } catch (e) {
            
        }
    }

    async deleteById(idData){
        try {
            
        } catch (e) {
            
        }
    }
}

const contenedorFire = new ContenedorFirebase()

