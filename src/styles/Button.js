import theme from '../theme/theme'
import styled from 'styled-components/macro'

const StyledButton = ({ children, leftIcon, rightIcon, ...restProps }) => {
  return (
    <Button {...restProps}>
      {leftIcon && <LeftIconContainer>{leftIcon}</LeftIconContainer>}
      {children}
      {rightIcon && <RightIconContainer>{rightIcon}</RightIconContainer>}
    </Button>
  )
}

export default StyledButton

const Button = styled.button`
  font-size: ${theme.fontSize.button};
  border-radius: ${theme.borderRadius.small};
  background: ${theme.color.accent};
  border: 0;
  color: white;
  box-shadow: ${theme.shadow.accent};
  padding: 1rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.15s ease-in-out;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  opacity: ${({ disabled }) => (disabled ? '0.6' : '1')};
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }
`

const LeftIconContainer = styled.div`
  margin-right: 0.6rem;
  display: flex;
`

const RightIconContainer = styled.div`
  margin-left: 0.6rem;
  display: flex;
`
