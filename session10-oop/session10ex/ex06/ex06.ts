class Song {
    public readonly id: number;
    private name: string;
    private length: number;

    constructor(id: number, name: string, length: number) {
        this.id = id;
        this.name = name;
        this.length = length;
    }

    get getName(): string {
        return this.name;
    }

    get getLength(): number {
        return this.length;
    }

    set setName(name: string) {
        this.name = name;
    }

    set setLength(length: number) {
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