import React from 'react';
import {useStore} from "../../hooks/useStore";
import MedicineCard from "./card";
import {Grid} from "@mui/material";
import {useTranslation} from "next-i18next";
import {observer} from "mobx-react-lite";

const Medicines = observer(() => {

    const medicineStore = useStore(state => state.medicineStore)

    const { t } = useTranslation('medicines')

    return (
        <Grid container spacing={3}>

            <Grid item xs={12}>
                <h3>{t('title')}</h3>
            </Grid>

            {
                medicineStore.medicines.map(medicine => (
                    <Grid
                        item
                        xs={4}
                        key={medicine.id}
                    >
                        <MedicineCard
                            medicine={medicine}
                        />
                    </Grid>
                ))
            }
        </Grid>
    );
});

export {Medicines}
