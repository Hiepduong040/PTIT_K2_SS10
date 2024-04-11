"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this.name = name;
        this.length = length;
    }
    get getName() {
        return this.name;
    }
    get getLength() {
        return this.length;
    }
    set setName(name) {
        this.name = name;
    }
    set setLength(length) {
        this.length = length;
    }
}
const song = new Song(1, "friend", 180);
console.log("Tên bài hát:", song.getName);
console.log("Độ dài bài hát:", song.getLength);
song.setName = "New friend";
song.setLength = 200;
console.log("Tên bài hát sau khi thay đổi:", song.getName);
console.log("Độ dài bài hát sau khi thay đổi:", song.getLength);
