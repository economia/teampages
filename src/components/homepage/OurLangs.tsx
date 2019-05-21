import React from 'react'
import CircularProgressbar from 'react-circular-progressbar'
import { Unselectable } from '../text/Unselectable'

export interface Props {
  languageData: Array<Language>
  fontSize?: string
  defaultYear: number
  maxYear?: number
  minYear?: number
}

export interface Language {
  name: string
  color?: string
  nameClassName?: string
  data: {
    [year: number]: number
  }
}

export class OurLangs extends React.Component<
  Props,
  {
    curYear: number
  }
> {
  state = {
    curYear: this.props.defaultYear,
  }

  render() {
    return (
      <div>
        <div className="content-holder" id="technologie">
          <h2>programovací jazyky a technologie</h2>
          <div className="statistics-flex">
            {this.props.languageData &&
              this.props.languageData.map(lang => (
                <div className="graph-item" key={lang.name}>
                  <CircularProgressbar
                    percentage={lang.data[this.state.curYear]}
                    strokeWidth={3}
                    text={`${lang.data[this.state.curYear]}%`}
                    backgroundPadding={4}
                    background
                    styles={{
                      background: { fill: '#ffffff' },
                      path: { stroke: lang.color || '' },
                      text: { fill: lang.color || '', fontSize: this.props.fontSize || '25px' },
                      trail: { stroke: '#ebf4fa' },
                    }}
                  />
                  <p className={lang.nameClassName || ''}>{lang.name}</p>
                </div>
              ))}
          </div>
          <h4>
            <Unselectable>Podíl využívaných technologií u nás v roce&ensp;</Unselectable>
            <span className="arrows-year">
              <button
                className="arrow-back"
                onClick={() => {
                  let newYear = this.state.curYear - 1
                  if (this.props.minYear && this.props.maxYear) {
                    newYear = this.props.minYear > newYear ? this.props.maxYear : newYear
                  }
                  this.setState({ curYear: newYear })
                }}
              />
              <Unselectable>{this.state.curYear}</Unselectable>
              <button
                className="arrow-next"
                onClick={() => {
                  let newYear = this.state.curYear + 1
                  if (this.props.minYear && this.props.maxYear) {
                    newYear = this.props.maxYear < newYear ? this.props.minYear : newYear
                  }
                  this.setState({ curYear: newYear })
                }}
              />
            </span>
          </h4>
          <div className="statistics-flex">
            <div className="statistics-item">
              <p>#javascript</p>
              <p>#typescript</p>
              <p>#node.js</p>
              <p>#react.js</p>
            </div>
            <div className="statistics-item">
              <p>#git</p>
              <p>#docker</p>
              <p>#stretch</p>
              <p>#aws</p>
            </div>
            <div className="statistics-item">
              <p>#php</p>
              <p>#scss</p>
              <p>#less</p>
              <p>#bash</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
