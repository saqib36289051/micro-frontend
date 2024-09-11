import React, { useEffect } from 'react'
import Table from '../../components/grievence/data-table'
import { get } from "redux_store/sagas"
import { GrievenceList } from '../../components/grievence/columns'
import { dataListType } from '../../types/Types'


const GrievenceDesk = () => {
  const [dataList, setDataList] = React.useState<dataListType>()
  useEffect(() => {
    fetchInitalListings()
  }, [])

  async function fetchInitalListings() {
    await get("/Grievance").then((res) => {
      setDataList(res)
    })
  }
  return (
    <div className='p-4 m-2 rounded-lg bg-white shadow'>
      <Table
        data={dataList?.data ?? []}
        columns={GrievenceList}
      />
    </div>
  )
}

export default GrievenceDesk