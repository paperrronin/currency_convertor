export interface Tile {
    cols: number;
    rows: number;
    data?: string;
    image?:string;
    color?: string;
  }

  export const mobileTile:Tile[] = [
    {cols: 1, rows: 1},
    {data: 'CURRENCY CONVERTOR', cols: 9, rows: 1},
    {cols: 2, rows: 1},
    {data: 'Three', cols: 3, rows: 2, color: 'lightpink'},
    {cols: 2, rows: 1},
    {data: 'Five', cols: 3, rows: 2, color: '#FF4040'},
    {cols: 2, rows: 1},
    {cols: 2, rows: 1},
  ]
    

  export const largeTile:Tile[] = 
    [
      {cols: 1, rows: 2},
      {data: 'CURRENCY CONVERTOR', cols: 3, rows: 2},
      {cols: 1, rows: 1},
      {data: 'Three', cols: 2, rows: 2, color: 'lightpink'},
      {cols: 1, rows: 1},
      {data: 'Five', cols: 2, rows: 2, color: '#FF4040'},
      {cols: 1, rows: 1},
      {cols: 1, rows: 1},
    ]
  