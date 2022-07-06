import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {useStores} from "../store";
import {useEffect} from "react";

const Index: NextPage = () => {

  const {medicineService, medicineStore} = useStores()

  useEffect(() => {
    (async () => {
      await medicineService.getMedicines()
    })()
  }, []);


  return (
    <div className={styles.container}>
      {JSON.stringify(medicineStore.medicines)}
    </div>
  )
}

export default Index

export async function getServerSideProps(context: any) {


  return {
    props: {}, // will be passed to the page component as props
  }
}
