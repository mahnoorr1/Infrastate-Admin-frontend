import { MainContainer } from "../../components/Contents/Contents.elements"

const ZoneWiseTracking = () => {
    const categories = ['Z1', 'Z2','Z3'];
    const zone1 = alerts.filter((alert) => alert.zone == 'zone 1');
    const zone2 = alerts.filter((alert) => alert.zone == 'zone 2');
    const zone3 = alerts.filter((alert) => alert.zone == 'zone 3');
    
    const handleCategoryChange = (newCategory) => {
        if(newCategory === 'All'){
            setData(alerts);
            console.log(alerts);
        } else if(newCategory === 'Z1'){
            setData(zone1);
        } else if(newCategory === 'Z2'){
            setData(zone2);
        } else if(newCategory === 'Z3'){
            setData(zone3);
        }
    };
    return(
        <MainContainer>
            
        </MainContainer>
    )
}

export default ZoneWiseTracking;