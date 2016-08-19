    let counter:number = 0;
    let final:number;
    let greeting:string;
    let p1 = new Promise((resolve, reject) => {
      counter = counter + 1;
      resolve(counter);
        // resolve('success!');
        // //rejject ('failure!');
    });
    let p2 = new Promise((resolve, reject) => {
      resolve('hello world');

    });

    function doMultipleThings () {
      p1.then((result:number) => {
        final = result + 1;
      p2.then((result:string) => {
      greeting = `a very common saying is: ${result}`;
      console.log(final);
      console.log(greeting);
    })
    })
}
// allow us to do many promises  at once.
