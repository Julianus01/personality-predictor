import React from 'react'
import styled from 'styled-components/macro'
import theme from '../theme/theme'

const Dots = ({ rows = 6, columns = 6, color, ...restProps }) => {
  let gridTemplateColumnsString = ''
  for (let i = 0; i < columns; i++) {
    if (gridTemplateColumnsString === '') {
      gridTemplateColumnsString = '1fr'
    } else {
      gridTemplateColumnsString = `${gridTemplateColumnsString} 1fr`
    }
  }

  const dots = Array.from(Array(rows * columns).keys())

  return (
    <Container templateColumns={gridTemplateColumnsString} {...restProps}>
      {dots.map((_, index) => (
        <Dot color={color} key={index} />
      ))}
    </Container>
  )
}

export default Dots

// SC

const Container = styled.div`
  width: fit-content;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: ${({ templateColumns }) => templateColumns};
`

const Dot = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: ${({ color }) => (color ? color : theme.color.text.body)};
`
