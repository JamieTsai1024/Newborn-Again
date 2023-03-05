import { Typography } from "@mui/material";
import React from "react";
import {Button, Grid, Box,} from "@mui/material";

import "./Browse.css";
import { grey } from "@mui/material/colors";
import cat from "./cat.jpg";


function CategoryButton(props) {
    return (
        <button disableRipple className={props.className} onClick={props.onClick}>
            {props.value}
        </button>
    )
}

class Browse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            AllClick: false,
            ClothesClick: false,
            ToysClick: false,
            BooksClick: false,
            FurnitureClick: false,
            SafetyGearClick: false,
            OtherClick: false
        };
    }

    changeStyle() {
        this.setState({
            AllClick: false,
            ClothesClick: false,
            ToysClick: false,
            BooksClick: false,
            FurnitureClick: false,
            SafetyGearClick: false,
            OtherClick: false
        })
    }

    displayItems(numItems) {
        let content = []
        for (let i = 0; i < numItems; i++) {
            content.push(
            <Grid item xs={1}>
                <Box>
                    <img className="itemImg" src={cat} alt="Logo"/>
                    <h4 style={{margin: "7px 0px"}}>CUTE CAT</h4>
                    <p style={{margin: "0px 0px 15px 0px"}}>descriptoin descitooin blah blah</p>
                </Box>
            </Grid>
            );
            console.log(i);
        }
        return content;
    }



    render() {

        return (
            <Grid container spacing={2} columns={6}>
                <Grid item xs={1} ></Grid>
    
                <Grid item xs={4}>
                    <div>
                        <Typography variant="h2">Browse</Typography>
                        
                        <div className="Categories">

                            <div className="ButtonWrapper">
                            <CategoryButton className={this.state.AllClick ? "buttonClicked" : "buttonUnclicked"} value="All" onClick={() => {this.changeStyle(); this.setState({AllClick:true})}}/>
                            </div>
                            <div className="ButtonWrapper">
                            <CategoryButton className={this.state.ClothesClick ? "buttonClicked" : "buttonUnclicked"} value="Clothes" onClick={() => {this.changeStyle(); this.setState({ClothesClick:true})}}/>
                            </div>
                            <div className="ButtonWrapper">
                            <CategoryButton className={this.state.ToysClick ? "buttonClicked" : "buttonUnclicked"} value="Toys" onClick={() => {this.changeStyle(); this.setState({ToysClick:true})}}/>
                            </div>
                            <div className="ButtonWrapper">
                            <CategoryButton className={this.state.BooksClick ? "buttonClicked" : "buttonUnclicked"} value="Books" onClick={() => {this.changeStyle(); this.setState({BooksClick:true})}}/>
                            </div>
                            <div className="ButtonWrapper">
                            <CategoryButton className={this.state.FurnitureClick ? "buttonClicked" : "buttonUnclicked"} value="Furniture" onClick={() => {this.changeStyle(); this.setState({FurnitureClick:true})}}/>
                            </div>
                            <div className="ButtonWrapper">
                            <CategoryButton className={this.state.SafetyGearClick ? "buttonClicked" : "buttonUnclicked"} value="Safety Gear" onClick={() => {this.changeStyle(); this.setState({SafetyGearClick:true})}}/>
                            </div>
                            <div className="ButtonWrapper">
                            <CategoryButton className={this.state.OtherClick ? "buttonClicked" : "buttonUnclicked"} value="Other" onClick={() => {this.changeStyle(); this.setState({OtherClick:true})}}/>
                            </div>

                        </div>

                        {/* <Grid container justifyContent="space-between" columns={8}>
                            <Grid item style={{background:"blue"}}>
                            <CategoryButton className={this.state.AllClick ? "buttonClicked" : "buttonUnclicked"} value="All" onClick={() => {this.changeStyle(); this.setState({AllClick:true})}}/>
                            </Grid>
                            <Grid item>
                            <CategoryButton className={this.state.ClothesClick ? "buttonClicked" : "buttonUnclicked"} value="Clothes" onClick={() => {this.changeStyle(); this.setState({ClothesClick:true})}}/>
                            </Grid>
                            <Grid item style={{background:"blue"}}>
                            <CategoryButton className={this.state.ToysClick ? "buttonClicked" : "buttonUnclicked"} value="Toys" onClick={() => {this.changeStyle(); this.setState({ToysClick:true})}}/>
                            </Grid>
                            <Grid item>
                            <CategoryButton className={this.state.BooksClick ? "buttonClicked" : "buttonUnclicked"} value="Books" onClick={() => {this.changeStyle(); this.setState({BooksClick:true})}}/>
                            </Grid>
                            <Grid item style={{background:"blue"}}>
                            <CategoryButton className={this.state.FurnitureClick ? "buttonClicked" : "buttonUnclicked"} value="Furniture" onClick={() => {this.changeStyle(); this.setState({FurnitureClick:true})}}/>
                            </Grid>
                            <Grid item>
                            <CategoryButton className={this.state.SafetyGearClick ? "buttonClicked" : "buttonUnclicked"} value="Safety Gear" onClick={() => {this.changeStyle(); this.setState({SafetyGearClick:true})}}/>
                            </Grid>
                            <Grid item style={{background:"blue"}}>
                            <CategoryButton className={this.state.OtherClick ? "buttonClicked" : "buttonUnclicked"} value="Other" onClick={() => {this.changeStyle(); this.setState({OtherClick:true})}}/>
                            </Grid>
                            <Grid item></Grid>

                        </Grid> */}

                        <Grid container spacing={3} columns={4}>
                            {this.displayItems(10)}
                        </Grid>
                        
    
    
                    </div>
                </Grid>
                
                <Grid item xs={1}></Grid>
    
            </Grid>
        );
    }
    
  };
  
  export default Browse;