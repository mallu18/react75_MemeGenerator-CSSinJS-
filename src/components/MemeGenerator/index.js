// const fontSizesOptionsList = [
//   {
//     optionId: '8',
//     displayText: '8',
//   },
//   {
//     optionId: '12',
//     displayText: '12',
//   },
//   {
//     optionId: '16',
//     displayText: '16',
//   },
//   {
//     optionId: '20',
//     displayText: '20',
//   },
//   {
//     optionId: '24',
//     displayText: '24',
//   },
//   {
//     optionId: '28',
//     displayText: '28',
//   },
//   {
//     optionId: '32',
//     displayText: '32',
//   },
// ]
// // Write your code here

import {Component} from 'react'
import {
  MemeGeneratorContainer,
  MemeFormContainer,
  MemeHeading,
  MemeLabel,
  MemeInput,
  MemeSelect,
  MemeButton,
  MemeResultContainer,
  MemeText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    topTextInput: '',
    bottomTextInput: '',
    imageUrlInput: '',
    activeFontSize: fontSizesOptionsList[0].optionId,
    memeImageUrl: '',
    memeTopText: '',
    memeBottomText: '',
    memeFontSize: fontSizesOptionsList[0].optionId,
  }

  onChangeImageUrl = event => this.setState({imageUrlInput: event.target.value})

  onChangeTopText = event => this.setState({topTextInput: event.target.value})

  onChangeBottomText = event =>
    this.setState({bottomTextInput: event.target.value})

  onChangeFontSize = event =>
    this.setState({activeFontSize: event.target.value})

  onGenerateMeme = event => {
    event.preventDefault()
    const {topTextInput, bottomTextInput, imageUrlInput, activeFontSize} =
      this.state

    this.setState({
      memeImageUrl: imageUrlInput,
      memeTopText: topTextInput,
      memeBottomText: bottomTextInput,
      memeFontSize: activeFontSize,
    })
  }

  render() {
    const {
      topTextInput,
      bottomTextInput,
      imageUrlInput,
      activeFontSize,
      memeImageUrl,
      memeTopText,
      memeBottomText,
      memeFontSize,
    } = this.state

    return (
      <MemeGeneratorContainer>
        <MemeFormContainer onSubmit={this.onGenerateMeme}>
          <MemeHeading>Meme Generator</MemeHeading>

          <MemeLabel htmlFor="imageUrl">Image URL</MemeLabel>
          <MemeInput
            id="imageUrl"
            type="text"
            value={imageUrlInput}
            onChange={this.onChangeImageUrl}
            placeholder="Enter the Image URL"
          />

          <MemeLabel htmlFor="topText">Top Text</MemeLabel>
          <MemeInput
            id="topText"
            type="text"
            value={topTextInput}
            onChange={this.onChangeTopText}
            placeholder="Enter the Top Text"
          />

          <MemeLabel htmlFor="bottomText">Bottom Text</MemeLabel>
          <MemeInput
            id="bottomText"
            type="text"
            value={bottomTextInput}
            onChange={this.onChangeBottomText}
            placeholder="Enter the Bottom Text"
          />

          <MemeLabel htmlFor="fontSize">Font Size</MemeLabel>
          <MemeSelect
            id="fontSize"
            value={activeFontSize}
            onChange={this.onChangeFontSize}
          >
            {fontSizesOptionsList.map(eachOption => (
              <option key={eachOption.optionId} value={eachOption.optionId}>
                {eachOption.displayText}
              </option>
            ))}
          </MemeSelect>

          <MemeButton type="submit">Generate</MemeButton>
        </MemeFormContainer>

        <MemeResultContainer data-testid="meme" backgroundImage={memeImageUrl}>
          <MemeText fontSize={memeFontSize}>{memeTopText}</MemeText>
          <MemeText fontSize={memeFontSize}>{memeBottomText}</MemeText>
        </MemeResultContainer>
      </MemeGeneratorContainer>
    )
  }
}

export default MemeGenerator
