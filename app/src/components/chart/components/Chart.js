import React from 'react';
import ReactApexChart from 'react-apexcharts'

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      series: {},
      options: {},
      type: 'line',
    }
  }

  componentDidMount() {
    this.setState({
      series: this.props.series,
      options: this.props.options, type: this.props.type
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      series: nextProps.series,
      options: nextProps.options, type: nextProps.type
    })

  }

  render() {
    const {options, series, type, title} = this.props;
    return (
      <>
          <ReactApexChart options={options} series={series}  type={type} height="300"/>
      </>
    )
  }
}
