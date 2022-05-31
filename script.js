// // store a reference to our file handle
// let fileHandle;

// async function getFile() {
//   // open file picker
//   [fileHandle] = await window.showOpenFilePicker();

//   if (fileHandle.kind === 'file') {
//     // run file code
//     // console.log(fileHandle)
//   } else if (fileHandle.kind === 'directory') {
//     // run directory code
//   }

// }

// const pickerOpts = {
//   types: [
//     {
//       description: 'Images',
//       accept: {
//         'image/*': ['.png', '.gif', '.jpeg', '.jpg']
//       }
//     },
//   ],
//   excludeAcceptAllOption: true,
//   multiple: false
// };

// async function getTheFile() {
//   // open file picker
//   [fileHandle] = await window.showOpenFilePicker(pickerOpts);

//   // get file contents
//   const fileData = await fileHandle.getFile();
//   console.log(fileData)
// }

// const dirName = 'directoryToGetName';

// // assuming we have a directory handle: 'currentDirHandle'
// const subDir = currentDirHandle.getDirectoryHandle(dirName, {create: true});

// async function returnPathDirectories(directoryHandle) {

//   // Get a file handle by showing a file picker:
//   const [handle] = await self.showOpenFilePicker();
//   if (!handle) {
//     // User cancelled, or otherwise failed to open a file.
//     return;
//   }

//   // Check if handle exists inside directory our directory handle
//   const relativePaths = await directoryHandle.resolve(handle);

//   if (relativePaths === null) {
//     // Not inside directory handle
//   } else {
//     // relativePaths is an array of names, giving the relative path

//     for (const name of relativePaths) {
//       // log each entry
//       console.log(name);
//     }
//   }
// }



// const fileOpts = {
//   types: [
//     {
//       description: 'music',
//       accept: {
//         'music/*': ['.mp3']
//       }
//     },
//   ],
//   excludeAcceptAllOption: true,
//   multiple: false
// };
// async function forFile() {
//   let [filehandle] = await window.showOpenFilePicker(fileOpts);
//   let fileData = await filehandle.getFile()
//   console.log(fileData.text);
// }
// async function forDirectory() {
//   const dirHandle = window.showDirectoryPicker();
//   // let dirData = await dirHandle.entries()
//   for await (const lol of dirHandle.values()) {
//     console.log(lol.kind, lol.name);
//   }
//   // console.log(dirData);
// }

async function forDirectory() {
  let count = 0
  const dirHandle = await window.showDirectoryPicker();
  for await (const entry of dirHandle.values()) {
    // console.log(entry.kind, entry.name);
  }
  for await (const entry of dirHandle.keys()) {
    // console.log(entry)
    // console.log(dirHandle.resolve(entry))
    // console.log(await dirHandle.resolve(dirHandle[0]))
  }
  returnPathDirectories(dirHandle)
}
async function returnPathDirectories(directoryHandle) {

  // Get a file handle by showing a file picker:
  const handle = await self.showOpenFilePicker();
  if (!handle) {
    // User cancelled, or otherwise failed to open a file.
    return;
  }

  // Check if handle exists inside our directory handle
  const relativePaths = await directoryHandle.resolve(handle[0]);

  if (relativePaths === null) {
    // Not inside directory handle
    console.log("wtf")
  } else {
    // relativePath is an array of names, giving the relative path

    for (const name of relativePaths) {
      // log each entry
      console.log(name);
    }
  }
}