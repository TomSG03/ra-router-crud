import React, { useState } from 'react'
import 'moment/locale/ru';
import { useParams } from 'react-router-dom';
import useJsonFetch from './useJsonFetch'
import ViewPost from './ViewPost';
import ShiftPost from './ShiftPost';


function SelectPost() {
  const { id } = useParams();
  const [data, isLoading, error] = useJsonFetch(`${process.env.REACT_APP_URL}/posts`);

  const [ view, setView ] = useState(true);

  function onEdit(value) {
    setView(value);
  }

  const findPost = () => data.find((e) => Number(e.id) === Number(id));

  return (
    <div className="posts">
      {isLoading && <div> Loading... </div>}
      {error && <div> {error} </div>}
      {data && !isLoading && 
        <>
          {view ? <ViewPost post={findPost()} onEdit={onEdit} title={'Просмотр'}/> : <ShiftPost post={findPost()} title={'Редактирование'}/> } 
        </>       
      }
    </div>
  )
}

export default SelectPost
