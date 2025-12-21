import Footer from "../components/Footer"
import Header from "../components/Header"

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mt-25">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout