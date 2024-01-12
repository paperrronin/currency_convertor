export interface Tile {
    cols: number;
    rows: number;
    data?: string;
    image?:string;
    color?: string;
  }

  export const mobileTile:Tile[] = [
    {cols: 3, rows: 1},
    {data: 'CURRENCY CONVERTOR', cols: 17, rows: 1},
    {cols: 3, rows: 1},
    {cols: 7, rows: 2, color: 'lightpink'},
    {cols: 3, rows: 1},
    {cols: 7, rows: 2, color: '#FF4040'},
    {cols: 3, rows: 1},
    {cols: 3, rows: 1},
  ]
    

  export const largeTile:Tile[] = 
    [
      {cols: 2, rows: 2},
      {data: 'CURRENCY CONVERTOR', cols: 8, rows: 2},
      {cols: 1, rows: 1},
      {cols: 4, rows: 2, color: 'lightpink'},
      {cols: 1, rows: 1},
      {cols: 4, rows: 2, color: '#FF4040'},
      {cols: 1, rows: 1},
      {cols: 1, rows: 1},
    ]
  