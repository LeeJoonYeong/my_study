import { NavLink, Route, Routes } from "react-router-dom";

import Topic from "./Topic";

export default function Topics() {

  // 더미 데이터
  const contents = [
    {id: 1, title: 'HTML', desc: 'HTML is ...'},
    {id: 2, title: 'JS', desc: 'JS is ...'},
    {id: 3, title: 'React', desc: 'React is ...'},
  ];

  return (
    <div>
      <h2>Topics</h2>
      <nav>
        <ul>
          {contents.map((content) =>
            <li key={content.id}>
              <NavLink to={`/topics/${content.id}`}>{content.title}</NavLink>
            </li>
          )}
        </ul>
      </nav>
      <Routes>
        <Route path=':topic_id' element={<Topic contents={contents} />} />
      </Routes>
    </div>
  )
}