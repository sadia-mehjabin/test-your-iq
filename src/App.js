
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/statistics/Statistics';
import Topics from './components/topics/Topics';
import Blog from './components/blog/Blog';
import Quiz from './components/quiz/Quiz';
import TopicsDataLoader from './components/topicsDataLoader/TopicsDataLoader';
import PageNotFound from './components/pageNotFound/PageNotFound';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/statistics',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistics></Statistics>
        },
        {
          path:'/topics',
          loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Topics></Topics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/quiz/:id',
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
            
          },
          element: <Quiz></Quiz>
        },
        {
          path:'',
          
          element: <TopicsDataLoader></TopicsDataLoader>
        },
        {
          path: '*',
          element: <PageNotFound></PageNotFound>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
