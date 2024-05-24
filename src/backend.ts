import PocketBase from 'pocketbase'
import { type TypedPocketBase } from './pocketbase-types.js'

export const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE) as TypedPocketBase

// Copier ici les fonctions developpées en R214 | Système d'information

//fonction qui permet d'afficher toutes les maisons
export async function allMaisons() {
    const records = await pb.collection('maison').getFullList();
    return records;
}

//fonction qui retourne une seule maison par son id en paramètre
//PS : je ne vois vraiment pas comment afficher une seule maison avec un getFullList
export async function oneID(id: string) {
    const oneRecord = await pb.collection('maison').getOne(id);
    return oneRecord;
}

//fonction qui retourne les maisons qui sont en favori
// export async function allMaisonsFavori() {
//     const favoriRecords = await pb.collection('maison').getFullList({
//         filter: 'favori = true',
//     });
//     return favoriRecords;
// }
export async function allMaisonsFavori() {
  const Favrecord = await pb.collection('maison').getFullList({ filter: 'favori = true' });
  return Favrecord;
}

//fonction qui retourne toutes les maisons triées par ordre croissant de leur prix
export async function allMaisonsSorted() {
    const sortedRecords = await pb.collection('maison').getFullList({
        sort: 'prix',
    });
    return sortedRecords;
}

//fonction qui retourne les maisons ayant une superficie supérieure à la valeur de la surface passée en paramètre
export async function bySurface(s:number) {
    const surfaceRecords = await pb.collection('maison').getFullList({
        filter: `surface > ${s}`,
    });
    return surfaceRecords;
}

//fonction qui prend en paramètre une surface et un prix selon la valeur d'une superficie supérieure à la surface passée en paramètre ou la surface inférieure au prix passé en paramètre
export async function surfaceORprice(s: number, p: number) {
    const surfaceORpriceRecords = await pb.collection('maison').getFullList({
        filter: `surface > ${s} || prix < ${p}`,
    });
    return surfaceORpriceRecords;
}

//fonction qui affiche les données de l'agence qui a l'id passé en paramètre
//PS : je ne sais pas si cette fonction peut s'exécuter de votre côté mais je ne vois vraiment pas où pourrait se situer l'erreur
// export async function allAgenceMaisonbyId(id) {
//     const sortedRecordsAgence = await pb.collection('maison').getFullList({
//         filter: `agence.id = ${id}`,
//         expand: 'agence',
//      });
//      return sortedRecordsAgence;
// }

export async function allAgencesSorted() {
  const sortedAgenceRecords = await pb.collection('agence').getFullList({
    sort: 'nom'
  })
  return sortedAgenceRecords
}

export async function allAgenceMaisonbyId(id: string) {
    const sortedRecordsAgence = await pb.collection('maison').getOne(id,{
        expand: 'maison(agence)',
     });
     return sortedRecordsAgence;
}