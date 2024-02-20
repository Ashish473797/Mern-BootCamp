## Tasks:

Write three dummy functions without using promises and only using normal callbacks,
All three functions are dummy, you dont need actual implementation. 
These dummy functions are to just represent a delay. 
 -  Write a function to download data from a url
 -  Write a function to save that downloaded data in a file and return the filename
 -  Write a function to upload the file written in previous step to a newurl
 - THe download should take say 4sec delay, filewrite should take 2sec delay, upload should take 3sec delay
 - Write the above callbacks and use them in a manner that first download happens then writefile happens and then upload happens


```js
function downloader(url, cb) {
    // write a dummy impl using setTimeout to show a delay
    console.log('Started dowloading... from', url);
    setTimeout(() => {
        console.log('Downloading Completed'); 
        let downloadedData = 'dummy-data';
        cb(downloadedData);
    }, 4000);
}


function writeFile(data, cb) {
    // write a dummy impl using setTimeout to show a delay 
    console.log('Started writing... file for', data);
    setTimeout(() => {
        console.log('Writing Completed');
        let fileName = 'dummy.txt';
        cb(fileName);
    }, 2000);
}


function uploadFile(file, newUrl, cb) {
     // write a dummy impl using setTimeout to show a delay 
     console.log('Started uploading... ',file, 'to', newUrl);
     setTimeout(() => {
        console.log('Uploading Completed');
        let uploadResponse = 'Success';
        cb(uploadResponse);
     }, 3000);
}

// Uses
downloader('www.google.com', (downloadedData) => {
    writeFile(downloadedData, (fileName) => {
        uploadFile(fileName, 'google.drive.com', (response) => {
            console.log(response);
        })
    })
})
```
