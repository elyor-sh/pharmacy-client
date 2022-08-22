import type { NextPage } from 'next'
import {useEffect} from "react";
import {observer} from "mobx-react-lite";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {Layout} from "../layout";
import {MedicineModel} from "../models/response/medicine.model";
import {useStore} from "../hooks/useStore";
import {apiGetMedicine} from "../api";
import {Medicines} from "../components/medicines";

interface Props {
  data: MedicineModel[]
}

const Index: NextPage<Props> = observer(({data}) => {

  const medicineStore = useStore(store => store.medicineStore)

  useEffect(() => {
    medicineStore.setMedicines(data)
  }, [data])

  return (
    <Layout>
      <>
        <Medicines />
      </>
    </Layout>
  )
})

export default Index

export const getServerSideProps = async ({ locale }: any) => {

  const response = await apiGetMedicine()

  const data = await response.data

  return {
    props: {
      data: data.items,
    ...(await serverSideTranslations(locale, ['common', 'medicines']))
    }
  }
}


