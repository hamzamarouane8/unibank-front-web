import React, { Component ,useState,useEffect} from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import {styled} from "@sgabskit/theme";
import debounce from "lodash.debounce"
import filter  from "lodash.filter"
import escaperegexp  from "lodash.escaperegexp"


export default class extends React.Component {

  state = {
    data:[],

  }
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect (e, { result , key }) {
    //this.props.handleResultSelect(result)
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })
    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(escaperegexp(this.state.value), 'i')

      const isMatch = result => re.test(result.title)
      this.setState({
        isLoading: false,
        results: filter(this.props.data, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state
    return (
      <Grid>
        <Grid.Column  width={this.props.width}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect.bind(this)}
            onSearchChange={debounce(this.handleSearchChange, 500, { leading: true })}
            results={results}
            value={value}
          />
        </Grid.Column>

      </Grid>
    )
  }
}

const SearchStyle = styled.div`
  .ui.search{
  float:right;
    margin-top:20px
    }
`
