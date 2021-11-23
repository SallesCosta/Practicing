import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { LoginForm } from 'Components/loginForm'

export function MyPDF(LoginForm) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs

  const reportTitle = []
  const details = []
  const rodape = []

  const docDefinitions = {
    pageSize: 'A4',
    margin: [15, 50, 15, 40],

    header: [reportTitle],
    content: [details],
    footer: [rodape],

  }
  pdfMake.createPdf(docDefinitions).download()
}
