import { Header } from "./components/Header"
import { MainArticle } from "./components/MainArticle"
import { NewConteiner } from "./components/NewConteiner"
import { ArticleContainer } from "./components/ArticlesContainer"



function App() {
  

  return (
    <main className="px-4 pt-6">
      <Header />
      <div className="lg:flex sm:gap-8">
        <MainArticle />
        <NewConteiner />
      </div>
      <ArticleContainer />
    </main>
  )
}
export default App
