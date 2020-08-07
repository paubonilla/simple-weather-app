import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

export const Inner = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`

export const Content = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.75)
  );
  padding: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const LocationBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const Location = styled.div`
  color: #e8e8e8;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
`

export const DateStyle = styled.div`
  color: #e8e8e8;
  font-size: 20px;
  font-weight: 300;
  font-family: 'Noto Serif JP', serif;
  text-shadow: 2px 2px rgba(50, 50, 70, 0.5);
`