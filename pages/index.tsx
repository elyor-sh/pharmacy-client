import type { NextPage } from 'next'
import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Layout} from "../layout";
import {MedicineModel} from "../models/response/medicine.model";
import {useStore} from "../hooks/useStore";
import {apiGetCategories, apiGetMedicine} from "../api";
import {Medicines} from "../components/medicines";
import {CategoriesModel} from "../models/response/categories.model";
import {Categories} from "../components/categories";

interface Props {
  medicine: MedicineModel[],
  categories: CategoriesModel[]
}

const Index: NextPage<Props> = observer(({medicine, categories}) => {

  const medicineStore = useStore(store => store.medicineStore)
  const categoriesStore = useStore(store => store.categoriesStore)

  useEffect(() => {
    medicineStore.setMedicines(medicine)
  }, [medicine])

  useEffect(() => {
    categoriesStore.setCategories(categories)
  }, [categories]);


  return (
    <Layout>
      <>
        <Categories />
        <Medicines />
      </>
    </Layout>
  )
})

export default Index

export const getServerSideProps = async ({ locale }: any) => {

  const response = await apiGetMedicine()

  const responseCategories = await apiGetCategories()

  const categoriesData = await responseCategories.data

  const data = await response.data

  return {
    props: {
      medicine: data.items,
      categories: categoriesData.items,
    ...(await serverSideTranslations(locale, ['common', 'medicines', 'categories']))
    }
  }
}


