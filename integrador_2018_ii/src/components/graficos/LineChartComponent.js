import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import axios from 'axios';

export default class LineChartComponent extends Component
{
   constructor(props) {
      super(props);
      this.state = {
        Data: {}
      }
    }
       
    componentDidMount() {
      axios.get(`http://localhost:8000/api/charts`)
        .then(res => {
          const football = res.data;
          let playername = [];
          let playerscore = [];
          football.forEach(element => {
            playername.push(element.name);
            playerscore.push(element.score);
          });
          this.setState({ 
            Data: {
              labels: playername,
              datasets:[
                 {
                    label:'GRAFICO',
                    data: playerscore ,
                    backgroundColor:[
                     'rgba(255,105,145,0.6)',
                     'rgba(155,100,210,0.6)',
                     'rgba(90,178,255,0.6)',
                     'rgba(240,134,67,0.6)',
                     'rgba(120,120,120,0.6)',
                     'rgba(250,55,197,0.6)'
                  ]
                 }
              ]
           }
           });
        })
    }
 render()
   {
      return(
        <div>
        <Line
          data={this.state.Data}
          options={{maintainAspectRatio: false}}/>
     </div>
      )
   }
}