import { DataGrid, GridRowsProp } from "@mui/x-data-grid";
import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

  function exitButton() {
    const navigate = useNavigate();
    navigate("/")
  }

  const columns: Colunm[] = [
    { field: 'col1', headerName: 'Name', width: 700 },
    { field: 'col2', headerName: 'Domains ', width: 500 },
    { field: 'col3', headerName: 'Web Pages', width: 500 },
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
    <div className="main-home">
      <div className="table-div" style={{ height: 500, width: '90%' }}>
        <h1 className="h1-table">Fleeting Universidades</h1>
        <div className="exit-button-div">
          <p className="p-exit">Deseja sair? &nbsp; <a className="a-exit" href="/">Retornar a tela principal.</a></p>
        </div>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          sx={{
            fontSize: 16,
            color: "#202020",
            bgcolor: '#f1f1f1',
            boxShadow: 15,
            border: 1,
            borderColor: "orange",
            '& .MuiDataGrid-cell:hover': {
              color: 'orange'
            },
          }}
        />
      </div>
    </div>
  )
}
