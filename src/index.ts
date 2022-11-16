import Color from 'color'

export const lighten = (color: Color<string>, amount: number) => {
  return color.lightness(color.lightness() + amount).hex()
}
export const darken = (color: Color<string>, amount: number) => {
  return color.lightness(color.lightness() + amount * -1).hex()
}

export const generatePallate = (colorName: string, colorCode: string) => {
  const color = Color(colorCode)
  return {
    [`${colorName}`]: color.hex(),
    [`${colorName}50`]: lighten(color, 40),
    [`${colorName}100`]: lighten(color, 32),
    [`${colorName}200`]: lighten(color, 24),
    [`${colorName}300`]: lighten(color, 16),
    [`${colorName}400`]: lighten(color, 8),
    [`${colorName}500`]: color.hex(),
    [`${colorName}600`]: darken(color, 8),
    [`${colorName}700`]: darken(color, 16),
    [`${colorName}800`]: darken(color, 24),
    [`${colorName}900`]: darken(color, 32),
  }
}

const getGrays = () => {
  const color = Color('#000000')
  return {
    [`gray`]: lighten(color, 55),
    [`gray50`]: lighten(color, 95),
    [`gray100`]: lighten(color, 90),
    [`gray200`]: lighten(color, 80),
    [`gray300`]: lighten(color, 70),
    [`gray400`]: lighten(color, 60),
    [`gray500`]: lighten(color, 50),
    [`gray600`]: darken(color, 40),
    [`gray700`]: darken(color, 30),
    [`gray800`]: darken(color, 20),
    [`gray900`]: darken(color, 10),
    [`light`]: darken(color, 90),
    [`dark`]: darken(color, 10),
  }
}

export const getVar = (varName: string) => {
  return `var(--kd-${varName})`
}

export const getVariant = (varName: string) => {
  return {
    [`${varName}`]: getVar(varName),
    [`${varName}-hover`]: getVar(varName + '-hover'),
    [`${varName}-active`]: getVar(varName + '-active'),
    [`${varName}-rgb`]: getVar(varName + '-rgb'),
  }
}

const Colors = {
  ...generatePallate('blueGray', '#607d8b'),
  ...generatePallate('brown', '#8e5f4e'),
  ...generatePallate('red', '#ff392b'),
  ...generatePallate('deepOrange', '#fa541c'),
  ...generatePallate('orange', '#fa8c16'),
  ...generatePallate('amber', '#faad14'),
  ...generatePallate('yellow', '#fadb14'),
  ...generatePallate('lime', '#cddc39'),
  ...generatePallate('lightGreen', '#8bc34a'),
  ...generatePallate('green', '#4caf50'),
  ...generatePallate('teal', '#20dcc9'),
  ...generatePallate('cyan', '#1bd5ee'),
  ...generatePallate('lightBlue', '#15b5ff'),
  ...generatePallate('blue', '#1395ff'),
  ...generatePallate('indigo', '#3f51b5'),
  ...generatePallate('deepPurple', '#673ab7'),
  ...generatePallate('purple', '#9c27b0'),
  ...generatePallate('pink', '#e91e63'),
  ...getGrays(),
  white: '#ffffff',
  black: '#000000',
  ...getVariant('primary'),
  ...getVariant('secondary'),
  ...getVariant('success'),
  ...getVariant('info'),
  ...getVariant('warning'),
  ...getVariant('danger'),
}

export default Colors
