var array = []

for (let index = 0; index < 5; index++) {

  for (let i = 0; i < array.length; i++) {
    i += array[i]
    console.log(i);
  }
  array.push(index);
  
  }
}
