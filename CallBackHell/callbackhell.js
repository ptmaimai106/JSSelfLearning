
//-----------------------cach 1---------------------
// var fs = require('fs');

// const file1 = fs.readFileSync('file1.txt', {'encoding': 'utf8'});
// const file2 = fs.readFileSync('file2.txt',{'encoding': 'utf8'});
// const file3 = fs.readFileSync('file3.txt',{'encoding': 'utf8'});


//---------------- cach 2 ----------------------------------
// var fs = require('fs');
// fs.readFile('file1.txt', {'encoding': 'utf8'}, (err1,file1)=>{
//     console.log(file1);
//     fs.readFile('file2.txt',{'encoding': 'utf8'}, (err2,file2)=>{
//         console.log(file2);
//          fs.readFile('file3.txt',{'encoding': 'utf8'}, (err3,file3)=>{
//             console.log(file3);
//     })
// });
// });

//---------------- cach 3 ----------------------------------
// var fs = require('promise-fs')
// fs.readFile('file1.txt', {'encoding': 'utf8'})
// .then((file1)=>{
//     console.log(file1)
// })
// .then(()=>{
//     return fs.readFile('file2.txt', {'encoding': 'utf8'});
// })
// .then((file2) => {
//     console.log(file2)
// })
// .catch(err=>{
//     console.log(err)
// })


//---------------- cach 4 ----------------------------------


// var fs = require('promise-fs')

// const log = (file) => {
//     console.log(file);
// }
// const read = (filename) =>{
//     return fs.readFile(filename, {'encoding': 'utf8'});
// }

// read('file1.txt')
// .then(log)
// .then(()=> {return read("file2.txt")})
// .then(log)
// .then(()=> {return read("file3.txt")})
// .then(log)
// .catch(log)


// //---------------- cach 4 ----------------------------------

// const fs = require('fs')

// function readFileWithPromise(filename){
//     return new Promise((resolve, reject)=>{
//         fs.readFile(filename, {'encoding': 'utf8'},(err, data)=>{
//             if(err){
//                 reject(err)
//             } else{
//                 resolve(data);
//             }
//         })

//     })
// }

// readFileWithPromise('file1.txt')
// .then((file1) =>{
//     console.log(file1)
//     return readFileWithPromise('file2.txt')
// })
// .then((file2) =>{
//     console.log(file2)
//     return readFileWithPromise('file3.txt')
// })
// .then((file3) =>{
//     console.log(file3)
// })
// .catch((err) =>{
//     console.log(err)
// })\\


// //---------------- cach 5 ----------------------------------

// const fs = require('fs')

// function readFileWithPromise(filename){
//     return new Promise((resolve, reject)=>{
//         fs.readFile(filename, {'encoding': 'utf8'},(err, data)=>{
//             if(err){
//                 reject(err)
//             } else{
//                 resolve(data);
//             }
//         })

//     })
// }

// Promise.all([
//     readFileWithPromise("file1.txt"),
//     readFileWithPromise("file2.txt"),
//     readFileWithPromise("file3.txt")
// ])
// .then(values=>{
//     // console.log(values);
//     values.map(item => console.log(item))
// })
// .catch(err=>{
//     console.log(err)
// })



//---------------- cach 6 ----------------------------------

const fs = require('fs')

function readFileWithPromise(filename){
    return new Promise((resolve, reject)=>{
        fs.readFile(filename, {'encoding': 'utf8'},(err, data)=>{
            if(err){
                reject(err)
            } else{
                resolve(data);
            }
        })

    })
}

async function readFile(){
    const file1 = await readFileWithPromise("file1.txt");
    const file2 = await readFileWithPromise("file2.txt");
    const file3 = await readFileWithPromise("file3.txt");

    return [file1, file1, file3];
}

readFile().then(values => {
    values.map(item => console.log(item))
})