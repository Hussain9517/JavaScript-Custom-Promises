

// Using Error Handling
try
{    
    let done = true;  // Global Variable
    
    // Constructing Custom Promise

    const isItDoneYet = new Promise((resolve,reject) => {
        if(done)
        {
            setTimeout( () => {
                resolve('Work Done Sucessfully!');
            },3000)
        }

        else
        {
            reject('Your Promise is Rejected, Sorry for that!');
        }
    })


    // Using Promises


    isItDoneYet
    .then((Sucessful_Message) => {
    console.log(Sucessful_Message);
    })

    .catch((Error) => {
    console.log(Error.message);
    })

}

catch(Error)
{
    console.log(Error.message);
}





