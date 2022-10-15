import styled from 'styled-components/macro'
import theme from '../theme/theme'

const StyledInput = ({ leftIcon, className, styles, inputClassName, inputStyles, ...restProps }) => {
  return (
    <InputContainer className={className} styles={styles}>
      {leftIcon}

      <Input className={inputClassName} styles={inputStyles} paddingLeft={Boolean(leftIcon)} {...restProps} />
    </InputContainer>
  )
}

export default StyledInput

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  box-shadow: ${theme.shadow.bigInput};
  padding: 1.2rem 1.6rem;
  padding-right: 0;
  border-radius: ${theme.borderRadius.small};
  background: ${theme.color.background.base};

  svg {
    color: ${theme.color.text.label};
  }
`

const Input = styled.input`
  border: 0;
  font-size: ${theme.fontSize.button};
  flex: 1;
  outline: 0;
  padding-left: ${({ paddingLeft }) => (paddingLeft ? '1rem' : '0')};
  color: ${theme.color.text.body};

  ::placeholder {
    color: ${theme.color.text.label};
  }
`
