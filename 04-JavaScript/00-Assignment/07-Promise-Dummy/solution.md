## Tasks:

Write three dummy functions using only promises and only using normal callbacks,
All three functions are dummy, you dont need actual implementation. 
These dummy functions are to just represent a delay. 
 -  Write a function to download data from a url
 -  Write a function to save that downloaded data in a file and return the filename
 -  Write a function to upload the file written in previous step to a newurl
 - THe download should take say 4sec delay, filewrite should take 2sec delay, upload should take 3sec delay
 - Write the above callbacks and use them in a manner that first download happens then writefile happens and then upload happens

```js

// Downloader Function
function downloader(url){
    
    return new Promise((res, rej) => {
        console.log('Started downloading... from', url);
        setTimeout(() => {
            console.log('Downloading Completed');
            let downloadedData = 'dummy-data';
            res(downloadedData);
        }, 5000);
    })
}


// Writing File Function
function writeFile(data){
    
    return new Promise((res, rej) => {
        console.log('Started writing... file for', data);
        setTimeout(() => {
            console.log('Writing Completed');
            let fileName = 'dummy.txt';
            res(fileName);
        }, 2000);
    })
}


// Uploader Function
function uploader(file, newUrl){
    
    return new Promise((res, rej) => {
        console.log('Started uploading...',file, 'to', newUrl);
        setTimeout(() => {
            console.log('Uploading Completed');
            let uploadResponse = 'Success';
            res(uploadResponse);
        }, 3000);
    })
}


// uses

downloader('www.google.com')
.then((downloadedData) => {
    writeFile(downloadedData)
    .then((fileName) => {
        uploader(fileName, 'google.drive.com')
        .then((response) => console.log(response))
    })
})

```