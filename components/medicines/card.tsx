import React from 'react';
import {MedicineModel} from "../../models/response/medicine.model";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

interface MedicineCardProps {
    medicine: MedicineModel
}

const MedicineCard: React.FC<MedicineCardProps> = ({medicine}) => {

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={medicine.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {medicine.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {medicine.priceWithDiscount}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>

        </>
    );
};

export default MedicineCard;
