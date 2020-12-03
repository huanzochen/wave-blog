import React from 'react'
import axios from 'axios'
import qs from 'querystring'
import OAuthLogin from '../auth/OAuthLogin'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loginErrors: '',
      testReports:{
        customerReportId:'',
        requestPayload:'',
        status:''
      }
    }
    this.showAccessToken = this.showAccessToken.bind(this)
    this.createTestReports = this.createTestReports.bind(this)
    this.getTestReports = this.getTestReports.bind(this)
  }

  showAccessToken(event) {
    console.log('this.props.yahooOAuthCredentials')
    console.log(this.props.yahooOAuthCredentials)
  }

  createTestReports(event) {
    console.log('testCreateReports')
    // const requestBody = {
    //   reportOption: {
    //     timezone: 'Asia/Tokyo',
    //     currency: 4,
    //     dimensionTypeIds: ['4','3'],
    //   },
    //   // intervalTypeId: 
    //   // having: 
    //   // limitSpec:
    //   // filterOption: 
    //   // spec:''
    // }
    // const requestBody = {
    //   "reportOption": {
    //     "timezone": "Asia/Shanghai",
    //     "currency": 3,
    //     "dimensionTypeIds": [ 1, 3, 4, 5, 6, 64 ],
    //     "filterOptions": [
    //       {
    //         "dimensionTypeId": 64,
    //         "isExcluded": false,
    //         "includeValues": [ {"id": 7} ]
    //       }
    //     ],
    //     "metricTypeIds": [ 1, 2, 23, 44, 46 ]
    //   },
    //   "intervalTypeId": 1,
    //   "dateTypeId": 11,
    //   "startDate": "2020-02-05T23:59:59+08:00",
    //   "endDate": "2020-12-01T23:59:59+08:00",
    // }
    const requestBody = {
      'reportOption': {
        'timezone': 'America/New_York',
        'currency': 4,
        'dimensionTypeIds': [5],
        'metricTypeIds': [44, 1, 2, 23, 11, 41, 43]
      },
      'intervalTypeId': 1,
      'dateTypeId': 11,
      'startDate': '2020-02-05T23:59:59+08:00',
      'endDate': '2020-12-01T23:59:59+08:00'
    }
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Method': 'OAUTH',
        'X-Auth-Token': this.props.yahooOAuthCredentials.access_token
      }
    }
    axios.post('https://api-sched-v3.admanagerplus.yahoo.com/yamplus_api/extreport/', requestBody, config)
      .then(response => {
        console.log('testCreateReports response.data')
        console.log(response.data)
        let testReports = {};
        Promise.all(
          Object.keys(response.data).map((key) => {
            testReports = {
              ...testReports,
              [key]: response.data[key]
            }
          })
        )
        this.setState({testReports})
      })
      .catch(error => {
        console.dir('testCreateReports 出現錯誤!')
        console.log(error)
      })
  }

  getTestReports(event) {
    console.log('this.state.testReports.customerReportId')
    console.log(this.state.testReports.customerReportId)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Method': 'OAUTH',
        'X-Auth-Token': this.props.yahooOAuthCredentials.access_token
      }
    }
    axios.get(`https://api-sched-v3.admanagerplus.yahoo.com/yamplus_api/extreport/${this.state.testReports.customerReportId}`, config)
      .then(response => {
        console.log('getTestReports response.data')
        console.log(response.data)
        // let testReports = {};
      })
      .catch(error => {
        console.dir('getTestReports 出現錯誤!')
        console.log(error)
      })
  }


    
  render() {
    return (
      <div className="article">
        <div className="article_title">
          < OAuthLogin />
          <h3> you are now logged in yahoo account </h3>
          <div className="row justify-content-between validate">
            <div className="col-4">
              <button className="btn btn-light"
                onClick={this.showAccessToken}
              > get Yahoo Auththenticate information </button>
            </div>
            <div className="col-4">
              <button className="btn btn-light"
                onClick={this.createTestReports}
              > create Test Reports </button>
            </div>
            <div className="col-4">
              <button className="btn btn-light"
                onClick={this.getTestReports}
              > get Test Reports </button>
            </div>
            <div className="col-7">
              <p className="error_code">{this.state.loginErrors}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
