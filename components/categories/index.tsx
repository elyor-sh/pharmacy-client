import React from 'react'
import {observer} from "mobx-react-lite";
import {Grid, IconButton, Tooltip} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useTranslation} from "next-i18next";
import {AsyncAutoComplete} from "../atoms/autoComplete";
import {useStore} from "../../hooks/useStore";
import {CategoriesModel} from "../../models/response/categories.model";
import cl from './style.module.scss'
import {medicineService} from "../../service/medicine.service";

const Categories = observer(() => {

    const categoriesStore = useStore(store => store.categoriesStore)
    const medicineStore = useStore(store => store.medicineStore)

    const { t } = useTranslation('categories')

    return (
        <>
            <Grid
                container
                spacing={3}
                alignItems="center"
                justifyContent="space-between"
                className={cl.select}
            >
                <Grid
                    item
                    xs={10}
                >
                    <AsyncAutoComplete
                        options={categoriesStore.categories}
                        getOptionLabel={(option: CategoriesModel) => option.name}
                        open={categoriesStore.openAutoComplete}
                        setOpen={categoriesStore.setOpenAutoComplete}
                        label={t('selectCategory')}
                        setValue={(value: CategoriesModel[]) => medicineStore.setSelectedCategories(value)}
                    />
                </Grid>
                <Grid
                    item
                    xs={2}
                >
                  <Tooltip title={t('search')}>
                      <IconButton
                          onClick={() => medicineService.getByCategoryIds({ids: medicineStore.selectedCategories})}
                      >
                          <SearchOutlinedIcon />
                      </IconButton>
                  </Tooltip>
                </Grid>
            </Grid>
        </>
    );
});

export {Categories}
