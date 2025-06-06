// Style your components here
import styled from 'styled-components'

export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background-color: #d7dfe9;
  font-family: 'Open Sans';
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const MemeFormContainer = styled.form`
  background-color: #ffffff;
  padding: 24px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
`

export const MemeHeading = styled.h1`
  color: #35469c;
  font-size: 24px;
  margin-bottom: 20px;
`

export const MemeLabel = styled.label`
  color: #7e858e;
  font-size: 14px;
  margin-top: 10px;
  display: block;
`

export const MemeInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  margin-bottom: 10px;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  outline: none;
`

export const MemeSelect = styled.select`
  width: 100%;
  padding: 8px;
  margin-top: 4px;
  margin-bottom: 10px;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  outline: none;
`

export const MemeButton = styled.button`
  background-color: #0b69ff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  margin-top: 12px;
`

export const MemeResultContainer = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  width: 100%;
  height: 300px;
  position: relative;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  color: white;
  text-align: center;
  @media screen and (min-width: 768px) {
    width: 60%;
    margin-top: 0;
  }
`

export const MemeText = styled.p`
  font-size: ${props => props.fontSize}px;
  font-weight: bold;
`
