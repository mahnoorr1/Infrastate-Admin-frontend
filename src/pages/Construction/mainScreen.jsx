import {MainContainer} from "../../components/Contents/Contents.elements";
import AerialMap from "../../components/Maps/aerialViewMap";
const ConstructionMainScreen = (props) => {
    return (
        <MainContainer active={props.toggle}>
            <AerialMap height={'60vh'} width={'80vw'}></AerialMap>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginRight: '2vw',
            }}>
            </div>
        </MainContainer>
    )
}

export default ConstructionMainScreen;