import React from 'react'
import {observer} from "mobx-react-lite";
import {Grid, IconButton, Tooltip} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {AsyncAutoComplete} from "../atoms/autoComplete";
import {useStore} from "../../hooks/useStore";
import {CategoriesModel} from "../../models/response/categories.model";
import {useTranslation} from "next-i18next";

const Categories = observer(() => {

    const categoriesStore = useStore(store => store.categoriesStore)

    const { t } = useTranslation('categories')

    return (
        <>
            <Grid container spacing={3}>
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
                    />
                </Grid>
                <Grid
                    item
                    xs={2}
                >
                  <Tooltip title={t('search')}>
                      <IconButton>
                          <SearchOutlinedIcon />
                      </IconButton>
                  </Tooltip>
                </Grid>
            </Grid>
        </>
    );
});

export {Categories}
