export class Photo{
  id: number;
  albumId: number;
  url: string;

  constructor(id: number, url : string, albumId: number) {
    this.id = id;
    this.url = url;
    this.albumId = albumId
  }
}
