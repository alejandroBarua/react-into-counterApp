import { getHeroeById } from './heroes'

export const getHeroeByIdAsync = (id) => {

    return new Promise( (resolve, reject) => {

        setTimeout(() =>  {

            const heroe = getHeroeById(id);

            if(!heroe) return reject('no hero found');
            resolve(heroe);

        }, 1500)
    });
}