import theme from "../../../configs/theme";
import { Button, Typography, Card } from "@mui/material";

const AlertListItem= ({alert}) => {
    return(
        <Card sx = {{
            height: '70px',
            width: '99%',
            padding: '3px',
            margin: '3px',
            border: 'none',
            boxShadow: 'none',
            borderBottom: '',
            borderBottom: '1px solid',
            borderBottomColor: theme.palette.shades.greyLine,
            flexDirection: 'column',
            cursor: 'pointer', 
            marginTop: '5px',
        }}>
            <Card sx={{
                display: 'flex',
                flexDirection: 'row',
                marginRight: '10px',
                justifyContent: 'space-between',
                border: 'none',
                boxShadow: 'none',
                alignItems: 'center',
            }}>
                <Typography 
                variant="subheading2" 
                fontWeight={600}
                overflow={'hidden'}
                whiteSpace="nowrap" 
                textOverflow="ellipsis"
                color={theme.palette.shades.greenMedium}
                >{alert.source}</Typography>

                <Button
                variant="outlined" 
                onClick={()=>{}}
                sx={{
                    height: '30px',
                    width: '80px',
                    padding: '2px',
                    borderRadius: '15px',
                    borderWidth: '2px',
                    borderColor: theme.palette.shades.greenMedium,
                    color: theme.palette.shades.greenMedium,
                }}
                >{alert.report_token}</Button>
            </Card>
            <Typography 
            variant="body2"
            overflow={'hidden'}
            whiteSpace={"nowrap"}
            textOverflow={"ellipsis"}
            >{alert.description}</Typography>

        </Card>
    );
}

export default AlertListItem;