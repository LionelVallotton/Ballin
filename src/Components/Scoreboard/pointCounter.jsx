import React, { Component } from 'react'
import { Button, Table } from 'reactstrap'
import '../../css/pointCounter.css'
import RoundStatisticTable from './roundStatisticTable'

class PointCounter extends Component{
    constructor(props){
        super(props)
        this.state = {
            nameP1: "Lionel",
            scoreP1: 0,
            pointListP1: [],
            nameP2: "Nico",
            scoreP2: 0,
            pointListP2: [],
            shotCount: 0,
            stats: []
        }
    }
    
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    incP1 = (points) => {this.setState({pointListP1: [...this.state.pointListP1, points]});
                            this.setState({scoreP1: this.state.scoreP1 + points});
                            this.setState({shotCount: this.state.shotCount + 1});}
    incP2 = (points) => {this.setState({pointListP2: [...this.state.pointListP2, points]});
                            this.setState({scoreP1: this.state.scoreP1 + points});
                            this.setState({shotCount: this.state.shotCount + 1});}
    

    refresh = async () => {
        console.log("refresh got called")
        //this.setState((prevState => ({
        //    stats: [[{homeScore: this.state.counterP1, awayScore: this.state.counterP2, rounds: Math.floor(this.state.shotCount/2)+1, }], ...prevState.stats]
        //  })))
        const newStatistic = {nameP1: this.nameP1, nameP2: this.state.nameP2, pointListP1: this.state.pointListP1, pointListP2: this.state.pointListP2}
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
        this.setState({stats: [{homeScore: this.state.scoreP1, awayScore: this.state.scoreP2, rounds: this.state.shotCount}].concat(this.state.stats)})
        this.setState({pointListP1: [], pointListP2: [], scoreP1: 0, scoreP2: 0, shotCount: 0})
    }
    
    render(){
        return ( <div>
            <div className='scoreBoard'>
                <div>
                    <h4>Home</h4>
                    <div>
                        <h2 className='score'>{this.state.scoreP1}</h2>
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
                    <h4 className='round'>Round {this.state.shotCount/2}</h4>
                    <h4 className='round'>Score {this.state.scoreP1 + this.state.scoreP2}</h4>
                    <Button className='round' onClick={this.refresh}>Refresh</Button>


                </div>
                <div>
                    <h4>Away</h4>
                    <h2 className='score'>{this.state.scoreP2}</h2>
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

