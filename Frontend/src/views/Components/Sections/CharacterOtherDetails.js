import GridItem from "../../../components/Grid/GridItem";
import GridContainer from "../../../components/Grid/GridContainer";
import React from "react";

export default function CharacterOtherDetails (props) {
  const speedInitAcValStyle = {color: '#9c27b0', fontWeight: 'bold', minHeight: '0', marginBottom: '0', marginTop: '0'};
  const ageSexStyle = {...speedInitAcValStyle, ...{fontSize: '15px'}}
  const initiativeModifier = props.character && props.character.abilityModifiers.Initiative
      ? props.character.abilityModifiers.Initiative
      : 0;
  const initiative = props.character
      ? (props.character.initiative >= 0
          ? `+${props.character.initiative + initiativeModifier}`
          : props.character.initiative + initiativeModifier)
      : ""
  return (
      <GridContainer>
        <GridItem xs={6} sm={6} md={6} lg={6}>
          <center><h4 style={props.labelStyle}>Age</h4></center>
        </GridItem>
        <GridItem xs={6} sm={6} md={6} lg={6}>
          <center><h4 style={props.labelStyle}>Sex</h4></center>
        </GridItem>
        <GridItem xs={6} sm={6} md={6} lg={6}>
          <center>
            <h3 style={ageSexStyle}>
              {props.character ? props.character.age : ""}
            </h3>
          </center>
        </GridItem>
        <GridItem xs={6} sm={6} md={6} lg={6}>
          <center>
            <h3 style={ageSexStyle}>
              {props.character ? props.character.sex : ""}
            </h3>
          </center>
        </GridItem>
        <GridItem xs={4} sm={4} md={4} lg={4}>
          <center>
            <h4
                style={{...props.labelStyle, ...{cursor: 'pointer'}}}
                onClick={() => props.roll(`1d20${initiative}`, 'Initiative')}
            >
              Init
            </h4>
          </center>
        </GridItem>
        <GridItem xs={4} sm={4} md={4} lg={4}>
          <center><h4 style={props.labelStyle}>Speed</h4></center>
        </GridItem>
        <GridItem xs={4} sm={4} md={4} lg={4}>
          <center><h4 style={props.labelStyle}>AC</h4></center>
        </GridItem>
        <GridItem
            xs={4} sm={4} md={4} lg={4}
            onClick={() => props.roll(`1d20${initiative}`, 'Initiative')}
            style={{cursor: 'pointer'}}
        >
          <center>
            <h3 style={speedInitAcValStyle}>
              {initiative}
            </h3>
          </center>
        </GridItem>
        <GridItem xs={4} sm={4} md={4} lg={4}>
          <center>
            <h3 style={speedInitAcValStyle}>
              {props.character ? props.character.race.speed : ""}
            </h3>
          </center>
        </GridItem>
        <GridItem xs={4} sm={4} md={4} lg={4}>
          <center>
            <h3 style={speedInitAcValStyle}>
              {props.character ? props.character.armorClass : ""}
            </h3>
          </center>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12} style={{marginTop: '30px'}}>
          <center><h2 style={props.labelStyle}>Max HP</h2></center>
          <center>
            <h2 style={speedInitAcValStyle}>
              {props.character ? props.character.hitPoints : ""}
            </h2>
          </center>
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12} style={{marginTop: '30px'}}>
          <center><h2 style={props.labelStyle}>Current HP</h2></center>
        </GridItem>
      </GridContainer>
  );
}
