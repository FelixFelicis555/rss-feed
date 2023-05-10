import React from 'react';
import {Card,IconButton,CardActionArea} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Styles} from '../style/Styles';

interface IHistoryListProps{
    historyURL?:string[]
    deleteURL?:Function
    selectedUrlIndex:number 
    onCardSelect:Function 

}

interface IHistoryListStates{

}

export class HistoryList extends React.Component<IHistoryListProps,IHistoryListStates>{

    constructor(props:any){
        super(props);
    }

    deleteUrl=(index:number)=>{
        
        if(this.props.deleteURL){
           this.props.deleteURL(index)
        }
    }

    onCardSelect=(index:number)=>{
        this.props.onCardSelect(index);
    }

    getHistoryList=()=>{
        if(this.props.historyURL)
        return this.props.historyURL.map((url:string,index:number)=>(
            <Card
                    style={index === this.props.selectedUrlIndex ? Styles.historyCardSelected : Styles.historyCard}
                    className="layout-row">
                    <CardActionArea
                        style={Styles.historyCardContainer}
                        onClick={() => this.onCardSelect(index)}>
                        <div className="layout-gt-sm-row layout-column layout-align-space-between-center">
                            <span>{url}</span>

                        </div>
                    </CardActionArea>
                    <IconButton color="inherit"
                        onClick={() => this.deleteUrl( index)}
                        aria-label="Close">
                        <CloseIcon />
                    </IconButton>
                </Card>
        ))
    }

    render() {
        let historyList=this.getHistoryList();
        return (
            <React.Fragment>
                {historyList}
            </React.Fragment>
        )
    }

}

export default HistoryList;