import React, { useContext } from "react";
import { MapMarkerContext } from '../../context/mapMarkerContext';
import { MainContainer } from "../../components/Contents/Contents.elements";

const RestrictionScreen = (props) => {
    const {location, locationName, updateLocation} = useContext(MapMarkerContext);
    <MainContainer active={props.toggle}>
            <h1>kjdagfuk</h1>
        </MainContainer>
} 
export default RestrictionScreen;