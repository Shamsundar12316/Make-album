// part 35 // question 40
// call three city names// make function album
// it doesnot include track number
// function make_album1(artistName:string, albumTitle:string){
//                 return{artistName,albumTitle}
// }
// let album1 = make_album1("Ali Zafar","Pcl song")
// let album2 = make_album1("Atif Aslam","Ipl song")
// let album3 = make_album1("Asim Azhar","cpl song")
// console.log(album1)
// console.log(album2)
// console.log(album3)
// its include track number
function make_album2(artistName, albumTitle, numberoftracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberoftracks: numberoftracks };
}
var album4 = make_album2("Ali Zafar", "Pcl song", 30);
var album5 = make_album2("Atif Aslam", "Ipl song", 20);
var album6 = make_album2("Asim Azhar", "cpl song");
console.log(album4);
console.log(album5);
console.log(album6);
