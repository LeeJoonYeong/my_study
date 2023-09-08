"use client";  // 이 파일은 클라이언트 컴포넌트 임을 선언하는 코드

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update() {

  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // 데이터 불러오기.
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`)
      .then(resp => resp.json())
      .then(result => {

        setTitle(result.title);
        setBody(result.body);

      });
  }, []);

  return (
    <form onSubmit = {(event) => {

      event.preventDefault();

      const title = event.target.title.value;
      const body = event.target.body.value;
      const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, body})
      };

      fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`, options)
        .then(res => res.json())
        .then(result => {

          console.log('result: ', result);
          const lastId = result.id;

          router.refresh();
          router.push(`/read/${lastId}`);

        });
    }}>
      <p>
        <input 
          type="text" 
          name="title" 
          placeholder="title" 
          value={title}
          onChange={e => setTitle(e.target.value)} 
        />
      </p>
      <p>
        <textarea 
          name="body" 
          placeholder="body" 
          value={body}
          onChange={e => setBody(e.target.value)}
        ></textarea>
      </p>
      <p>
        <input 
          type="submit" 
          value="update"
        />
      </p>
    </form>
  )
}