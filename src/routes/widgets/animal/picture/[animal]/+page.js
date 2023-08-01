export async function load({params}) {
    const animal_list = ['dog', 'fox', 'duck']
    const animal = (params.animal === 'random') ? animal_list[Math.floor(Math.random() * animal_list.length)] : params.animal
    
    const animalMap = new Map([
        ['dog', 'https://random.dog/woof.json'],
        ['fox', 'https://randomfox.ca/floof/'],
        ['duck', 'https://random-d.uk/api/v2/random']
    ]);

    const resp = await fetch(animalMap.get(animal))
    const data = await resp.json()


    return {
        data: {
            animal: animal,
            image: data
        }
    }
}