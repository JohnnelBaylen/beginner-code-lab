  // Async - make a function return a promise 

  async function BarkDog() {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                const DogBark = true;

                if ( DogBark ){
                    resolve("The Dog is bark");
                } else {
                    reject("The Dog is quit");
                }

            }, 2000);
        });
  }


  async function Process() {
        const BarkDogResult = await BarkDog();
        console.log(BarkDogResult);
  }

  Process();