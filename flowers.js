const flowers = [
    {
        id: 1,
        color: "white",
        species: "white rose",
        price: 0.90,
    },
    {
        id: 2,
        color: "red",
        species: "red tulip",
        price: 1.10,
    },

]

const addFlower = (flowerObject) => {
   const lastIndex = flowers.length - 1
   const currentLastFlower = flowers[lastIndex]
   const maxId = currentLastFlower.id
   const idForNewFlower = maxId + 1
   flowerObject.id = idForNewFlower
   flowers.push(flowerObject)
}


const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code
    for (const flowerObj of flowers) {
        if (flowerObj.price > 1.00) {
            expensiveFlowers.push(flowerObj)
        }
    }

    /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */




    return expensiveFlowers  // Do not change this code
}




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

