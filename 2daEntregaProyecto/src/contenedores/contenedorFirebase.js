import admin from 'firebase-admin'
// var admin = require("firebase-admin");
import {serviceAccount} from "./configFirebase/config.js";

// var serviceAccount = require("./programacion-backend-firebase-adminsdk-k4o9t-758ce38b5f.json");

admin.initializeApp({
credential: admin.credential.cert(serviceAccount),
databaseURL: "https://programacion-backend.firebaseio.com"
});

console.log('fire base conectada')

// const db = admin.firestore()
// const query = db.collection('colletion')

// try {
//     let id = 1
//     let doc = query.doc(`${id}`)
//     await doc.create({nombre: 'tal', apellido: 'cual'})
// } catch (e) {
    
// }

export default class ContenedorFirebase{
    constructor(db, collection){
        this.db = admin.firestore();
        this.query = db.collection(collection)
    }

    // async conetion(){

    // }

    async save(datos){
        try {
            // const db = admin.firestore()
            // const query = db.collection('colletion')
            let id = 1
            let doc = this.query.doc(`${id}`)
            return await doc.create({datos})
        } catch (e) {
            return console.log(e.message)
        }
    }

    async getId(idData){
        try {
            const querySnapshot = await this.query.get()
            let docs = querySnapshot.docs;

            const response = docs.map((doc)=>({
                id: doc.id,
                nombre: doc.data().nombre,
                dni: doc.data().dni
            }))
            console.log(response)
        } catch (e) {
            console.log(e.message)
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

// contenedorFire.conetion()

contenedorFire.save()