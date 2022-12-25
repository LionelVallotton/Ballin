import React, { Component } from 'react'
import { Button, Table } from 'reactstrap'
import '../../css/pointCounter.css'
import RoundStatisticTable from './roundStatisticTable'

class PointCounter extends Component{
    constructor(props){
        super(props)
        this.state = {
            counterP1: 0,
            counterP2: 0,
            shotCount: 0,
            stats: []
        }
    }
    
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    incP1 = (points) => {this.setState({counterP1: this.state.counterP1 + points}); this.incShot()}
    incP2 = (points) => {this.setState({counterP2: this.state.counterP2 + points}); this.incShot()}
    
    incShot = () => {this.setState({shotCount: this.state.shotCount + 1})}

    refresh = async () => {
        console.log("refresh got called")
        //this.setState((prevState => ({
        //    stats: [[{homeScore: this.state.counterP1, awayScore: this.state.counterP2, rounds: Math.floor(this.state.shotCount/2)+1, }], ...prevState.stats]
        //  })))
        const newStatistic = {homeScore: this.state.counterP1, awayScore: this.state.counterP2, rounds: Math.floor(this.state.shotCount/2)+1, }
        try{
            const response = await fetch('http://localhost:5000/statistics', {
                method: 'POST',
                body: JSON.stringify({
                    statistic: newStatistic
                }),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },            
            });
        }
        catch (error) {
            console.log(error);
        }
        this.setState({stats: [newStatistic].concat(this.state.stats)})
        this.setState({counterP1: 0, counterP2: 0 , shotCount: 0})
        console.log(this.state.stats);
    }
    
    render(){
        return ( <div>
            <div className='scoreBoard'>
                <div>
                    <h4>Home</h4>
                    <div>
                        <h2 className='score'>{this.state.counterP1}</h2>
                    </div>
                    <div >
                        <Button className="button" onClick={() => this.incP1(0)}>0</Button>
                        <Button className="button" onClick={() => this.incP1(1)}>1</Button>
                        <Button className="button" onClick={() => this.incP1(2)}>2</Button>
                        <Button className="button" onClick={() => this.incP1(3)}>3</Button>
                        <Button className="button" onClick={() => this.incP1(4)}>4</Button>
                    </div>

                </div>
                <div>
                    <h4 className='round'>Round {Math.floor(this.state.shotCount/2)+1}</h4>
                    <h4 className='round'>Score {this.state.counterP1 + this.state.counterP2}</h4>
                    <Button className='round' onClick={this.refresh}>Refresh</Button>


                </div>
                <div>
                    <h4>Away</h4>
                    <h2 className='score'>{this.state.counterP2}</h2>
                    <div>
                        <Button className="button" onClick={() => this.incP2(0)}>0</Button>
                        <Button className="button" onClick={() => this.incP2(1)}>1</Button>
                        <Button className="button" onClick={() => this.incP2(2)}>2</Button>
                        <Button className="button" onClick={() => this.incP2(3)}>3</Button>
                        <Button className="button" onClick={() => this.incP2(4)}>4</Button>
                    </div>

                </div>

            </div>
            {//
                //this.state.map((item) => (
                //    <RoundStatistic round = {item.round}/>
                //))
            }
            <RoundStatisticTable roundStatsElements = {this.state.stats}/>
            

            
        </div>)
        }
}
export default PointCounter

