type Colors = {
  [key: string]: string
}

export const colors: Colors = {
  "red-100": "#f15b5b",
  "red-40": "#e9aeae",
  "red-60": "#ed9393",
  "red-80": "#f26f6f",
  "green-100": "#67ca4e",
  "green-40": "#b2daa8",
  "green-60": "#9ad58b",
  "green-80": "#80cf6d",
  "blue-100": "#2e8fad",
  "blue-40": "#9bc2ce",
  "blue-60": "#78b2c3",
  "blue-80": "#53a0b8",
  "yellow-100": "#dccb32",
  "yellow-40": "#e1da9d",
  "yellow-60": "#dfd67a",
  "yellow-80": "#ded056",
  "black-100": "#362d2d",
  "black-40": "#9f9b9b",
  "black-60": "#7c7777",
  "black-80": "#595252"
};
type Fonts = {
  [key: string]: {
    fontFamily: string,
    fontWeight: number,
    fontSize: number,
    lineHeight: string,
    letterSpacing: number
  }
}

export const fonts: Fonts = {
  "font-20": {
    "fontFamily": "Roboto",
    "fontWeight": 400,
    "fontSize": 20,
    "lineHeight": "28px",
    "letterSpacing": 0
  },
  "font-24": {
    "fontFamily": "Roboto",
    "fontWeight": 400,
    "fontSize": 24,
    "lineHeight": "34px",
    "letterSpacing": 0
  },
  "font-32": {
    "fontFamily": "Roboto",
    "fontWeight": 400,
    "fontSize": 32,
    "lineHeight": "40px",
    "letterSpacing": 0
  },
  "font-48": {
    "fontFamily": "Roboto",
    "fontWeight": 400,
    "fontSize": 48,
    "lineHeight": "56px",
    "letterSpacing": 0
  }
};
type Spacers = {
  [key: string]: {
    width: number,
    height: number
  }
}

export const spacers: Spacers = {
  "s": {
    "width": 20,
    "height": 20
  },
  "m": {
    "width": 30,
    "height": 30
  },
  "l": {
    "width": 40,
    "height": 40
  },
  "xl": {
    "width": 45,
    "height": 45
  }
};
        