import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { ArrowRight, Activity, Loader } from 'react-feather'
import { Button, Dots, Input } from './styles'
import theme from './theme/theme'

const wait = (time = 1000) => new Promise((resolve) => setTimeout(resolve, time))

const App = () => {
  const [showPrediction, setShowPrediction] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')

  const search = useCallback(async () => {
    setIsLoading(true)
    setShowPrediction(false)

    await wait()

    setShowPrediction(true)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    const listener = (event) => {
      if (name.length >= 2 && event.key === 'Enter' && !isLoading) {
        search()
      }
    }

    window.addEventListener('keypress', listener)

    return () => {
      window.removeEventListener('keypress', listener)
    }
  }, [search, isLoading, name.length])

  const onInputChange = ({ target: { value } }) => {
    setName(value)
    setShowPrediction(false)
  }

  const onEnterPressed = ({ key }) => {}

  return (
    <Container>
      <Content>
        <Title>
          Predict
          <br />
          your
          <br />
          <Grey>personality</Grey>
        </Title>

        <FormContainer>
          <WideInput
            id="username-input"
            value={name}
            onChange={onInputChange}
            onKeyDown={onEnterPressed}
            leftIcon={<Activity />}
            placeholder="Your name"
          />

          <SearchButton
            id="search-button"
            onClick={search}
            disabled={isLoading || name.length < 2}
            rightIcon={isLoading ? <Loader /> : <ArrowRight size={16} />}
          >
            {isLoading ? 'Predicting' : 'Predict'}
          </SearchButton>
        </FormContainer>

        <br />
        <br />
        {showPrediction && (
          <PredictionText>
            {name} <Grey>sucks 😅</Grey>
          </PredictionText>
        )}

        <BackgroundSquare />
        <FirstDots />
        <SecondDots columns={8} rows={4} color={theme.color.text.label} />
        <WideRectangle />
      </Content>
    </Container>
  )
}

export default App

const Container = styled.div`
  width: 100%;
  margin-top: 20vh;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  width: 100%;
  max-width: 55rem;
  position: relative;
  padding: 0 2rem;
`

const Title = styled.h1`
  font-size: ${theme.fontSize.title};
  line-height: 1.2;
  color: ${theme.color.text.title};
  margin-bottom: 2rem;
  margin-top: 2rem;
`

const PredictionText = styled.h2`
  font-size: ${theme.fontSize.title};
  line-height: 1;
  color: ${theme.color.text.body};
`

const Grey = styled.span`
  color: ${theme.color.text.label};
`

const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const WideInput = styled(Input)`
  flex: 1;
  margin-right: 2rem;

  @media only screen and (max-width: 600px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`

const SearchButton = styled(Button)`
  width: 14rem;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 48px;
  }
`

const BackgroundSquare = styled.div`
  position: absolute;
  width: 45rem;
  height: 45rem;
  background: ${theme.color.hover};
  transform: rotate(60deg);
  top: 4rem;
  z-index: -1;
`

const FirstDots = styled(Dots)`
  position: absolute;
  top: 42rem;
  left: 2rem;
  z-index: -2;
`

const SecondDots = styled(Dots)`
  position: absolute;
  top: 0;
  right: 15rem;

  @media only screen and (max-width: 600px) {
    right: 8rem;
  }
`

const WideRectangle = styled.div`
  position: absolute;
  top: 56rem;
  right: 12rem;
  width: 18rem;
  height: 0.5rem;
  background: ${theme.color.text.body};
  box-shadow: -10px 10px 20px rgb(0, 0, 0, 0.4);
`
