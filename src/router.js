
import { createBrowserRouter } from 'react-router-dom'

import Body from './components/Body';
import ShowHidePassword from './components/ReactCodingQuestions/ShowHidePassword'
import Toggle from './components/ReactCodingQuestions/Toggle'

import ReactCoding from './components/ReactCoding';
import TagInputField from './components/ReactCodingQuestions/TagInputField';

const router = createBrowserRouter([
  {
    path: "",
    element: <Body />,
    children: [
      {
        path: "/react-coding",
        element: <ReactCoding />,
      },
      {
        path: "/show-hide-password",
        element: <ShowHidePassword />
      },
      {
        path: "/toggle",
        element: <Toggle />
      },
      {
        path: "/tag-input-field",
        element: <TagInputField />
      }
    ]
  },

]);

export default router;