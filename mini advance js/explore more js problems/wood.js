function woodCalculator(chearQuantity, tabilQuantity, bedQuantity) {
    const pearChearWood = 3;
    const peartabilWood = 10;
    const pearbedWood = 50;
    const chearWoodCount = chearQuantity * pearChearWood;
    const tabilWoodCount = tabilQuantity * peartabilWood;
    const bedWoodCount = bedQuantity * pearbedWood;
    console.log(chearWoodCount, tabilWoodCount, bedWoodCount);
    const totalCount=chearWoodCount + tabilWoodCount + bedWoodCount;
    return totalCount;
    //console.log(chearQuantity,tabilQuantity,bedQuantity);
}
const chearWood = 0;
const tableWood = 0;
const bedwood = 2;
const totalWood = woodCalculator(chearWood, tableWood, bedwood);
console.log(totalWood);