import { DataGrid, GridRowsProp } from "@mui/x-data-grid";
import axios from "axios"
import { useEffect, useState } from "react";
import './styles.css'

export type List = {
  alpha_two_code: string
  "state-province"?: string
  country: string
  name: string
  web_pages: string[]
  domains: string[]
}

type Colunm = {
  field: string
  headerName: string
  width: number
}

export function HomePage() {
  const [lista, setLista] = useState<Array<List>>([]);
  const url = 'http://universities.hipolabs.com/search?country=Brazil'

  async function getInformations() {
    const { data } = await axios.get<Array<List>>(url)

    setLista(data)
  }

  useEffect(() => {
    getInformations()
  }, []);

  const columns: Colunm[] = [
    { field: 'col1', headerName: 'Name', width: 650 },
    { field: 'col2', headerName: 'Domains ', width: 400 },
    { field: 'col3', headerName: 'Web Pages', width: 400 }
  ]

  const rows: GridRowsProp = lista.map((row) => {
    return {
      id: row.name,
      col1: row.name,
      col2: row.domains,
      col3: row.web_pages
    }
  })

  return (
    <div>
      <div className="table-div" style={{ height: 650, width: '90%' }}>
        <h1 className="h1-table">Universities List</h1>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: "orange",
            '& .MuiDataGrid-cell:hover': {
              color: 'orangered'
            }

          }}
        />
      </div>
    </div>
  )
}
