const superHeroes = require('./super-heroes.json');

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
let getDCHeroes=(superHeroes)=>{
  var arr1=[];
   for(var i=0;i<superHeroes.length;i++){
 
      var x=superHeroes[i].characters;
      var y=superHeroes[i].publisher;
         if(y==='Marvel Comics'){
        arr1.push(x);
      }
       
        } ; return arr1;
       };
/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
let convertCharactersToArray=(superHeroes)=>{
  let arr=[];
  
  for(var i=0;i<superHeroes.length;i++){
    var m= superHeroes[i].characters.split(',');
    arr.push({
      hero:superHeroes[i].superhero,
      characters: m
    })
       }

       console.log(arr);
      // console.log(typeof(arr));
       //console.log(typeof(d));
       //console.log(arr);

       //console.log(typeof(arr.characters));
        //return(Array.isArray(arr.characters));
      return arr;
      
};

const val = convertCharactersToArray(superHeroes);
      val.forEach((hero) => {
        console.log(Array.isArray(hero.characters));
      })

/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */

const groupByPublisher = (array) => {
  //console.log(array);
  //arr4=superHeroes;
  let key='publisher';
  let m = array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);

  return result;
  }, {});
  console.log(m['DC Comics'].length);
  return m;
};

 groupByPublisher(superHeroes);

/*
 let groupByPublisher  = superHeroes.reduce((acc, value) => {
  // Group initialization
  if (!acc[value.publisher]) {
    acc[value.publisher] = [];
  }
 
  // Grouping
  acc[value.publisher].push(value);
 
  return acc;
}, {});*/
/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */

let getDCHeroesWithMoreThanOneCharacter=(superHeroes)=>{
  let arr3=[];
  for(var i=0;i<superHeroes.length;i++){
     arr1=superHeroes[i].characters.split(',');
      if(arr1.length>1){ 
        arr3.push(arr1);
      }

  }
  return arr3; 
};


module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
}
